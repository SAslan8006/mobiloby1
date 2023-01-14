import { StyleSheet, Text, View } from 'react-native';
import  { useState } from 'react';
import axios from 'axios';


function usePost () {
    const [data, setData] = useState([]);
  //Loadding spinner
  const [loading, setLoading] = useState(true);
  //Eror durumu için
  const [error, setError] = useState(null);

  //Veri Apiden async method kullanılarak cekilen yer
 const post =async(url,apiData)=>{
    try {
        setLoading(true);
        const {data:responseData}=await axios.post(url,apiData);
        setData(responseData);
        setLoading(false);
    } catch (err) { 
        setError(err);
        setLoading(false);
    }
  }

 return {data,loading,error,post}   ;
}

export default usePost;

