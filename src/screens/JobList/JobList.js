import React from 'react';
import {View,Image, Text,FlatList, SafeAreaView} from 'react-native';
import styles from './styles';
import Config from 'react-native-config';

//useFetch kullanmak için import edilmelidir.
import useFetch from '../../hooks/useFetch/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const JobList = (props) => {  
    const {loading,data,error} = useFetch(Config.API_GET_URL);

    const handleProductSelect = id => {
        navigation.navigate('DetailPage',{id});
    };
    console.log(data);
    const renderProduct=({item})=><Text>{item.job_title} </Text>;

    if(loading){ return <Loading />}
    if(error){ return <Error /> }

    return(
      <FlatList data={data.jobs} renderItem={renderProduct}/>
    )
}

export default JobList; 