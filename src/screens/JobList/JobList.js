import React from 'react';
import {View,Image, Text,FlatList, SafeAreaView,ScrollView,TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import JobCard from '../../components/JobCard';

const JobList = (props) => {  
    const {loading,data,error} = useFetch(Config.API_GET_URL);
    const [contentList, setContentList] = React.useState([]);
    const [activeNames, setActiveNames] = React.useState('');

    const renderProduct=({item})=><Text>{item.job_title} </Text>;

    if(loading){ return <Loading />}
    if(error){ return <Error /> }
    const renderContent = ({ item }) => <JobCard Jobs={item} onPress={() => handleOnPress(item)} />;
    const handleOnPress = jobs => { props.navigation.navigate('Details', jobs); };
    const handleSelectedBook = category => {
      setContentList(data.jobs?.filter(jobs => jobs.job_start_date.includes("category")));
      setActiveNames(category);
    };
    
    return(
      <View>
        <View style={styles.flatlist}>
        <FlatList data={!!contentList.length ? contentList : data.jobs} renderItem={renderContent} ItemSeparatorComponent={
          (() => (<View style={{ borderBottomWidth: 1, borderColor: 'rgba(0,0,0,0.2)' }} />
          ))
        } />
        </View>

    </View>

    )
}

export default JobList; 