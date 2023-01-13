import 'react-native-gesture-handler';
import React from 'react';
import {Image, TouchableOpacity,SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import IconMa from 'react-native-vector-icons/MaterialIcons';
import IconMaC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFa from 'react-native-vector-icons/FontAwesome5';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default App=()=> {  
    return (
      <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <IconMa name='music' size={72} color="green" />
      </SafeAreaView>
    )
  }