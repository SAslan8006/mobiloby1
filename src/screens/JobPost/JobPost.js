import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';
import axios from 'axios';

const App = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobOwner, setJobOwner] = useState('');
  const [jobStartDate, setJobStartDate] = useState(new Date());
  const [jobEndDate, setJobEndDate] = useState(new Date());
  const [jobDescription, setJobDescription] = useState('');
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const { data, loading, error, post } = usePost();
  
  const onSave = () => {  
    axios.get(`https://mobiloby.click/test/insert_job.php?job_title=${jobTitle}&job_owner=${jobOwner}&job_start_date=${jobStartDate}&job_end_date=${jobEndDate}&job_description=${jobDescription}`)
      .then(response => {console.log(response.data);})
      .catch(error => {console.log(error);});
        console.log( data);
  };
 

  const onStartDatePicker = () => {
    setShowStartDatePicker(true);
  };

  const onEndDatePicker = () => {
    setShowEndDatePicker(true);
  };

  const onStartDateChange = (event, selectedDate) => {
    setShowStartDatePicker(false);
    if (selectedDate) {
      setJobStartDate(selectedDate);
    }
  };

  const onEndDateChange = (event, selectedDate) => {
    setShowEndDatePicker(false);
    if (selectedDate) {
      setJobEndDate(selectedDate);
    }
  };

  return (
    <View>
      <TextInput value={jobTitle} onChangeText={text => setJobTitle(text)} placeholder="Job Title" />
      <TextInput value={jobOwner} onChangeText={text => setJobOwner(text)} placeholder="Job Owner" />
      <TouchableOpacity onPress={onStartDatePicker}>
        <Text>{jobStartDate.toString()}</Text>
      </TouchableOpacity>
      {showStartDatePicker && <DatePicker value={jobStartDate} mode="datetime" display="default" onChange={onStartDateChange} />}
      <TouchableOpacity onPress={onEndDatePicker}>
        <Text>{jobEndDate.toString()}</Text>
      </TouchableOpacity>
      {showEndDatePicker && <DatePicker value={jobEndDate} mode="datetime" display="default" onChange={onEndDateChange} />}
      <TextInput value={jobDescription} onChangeText={text => setJobDescription(text)} placeholder="Job Description" />
      <TouchableOpacity onPress={onSave}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
