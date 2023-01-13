import 'react-native-gesture-handler';
import React from 'react';
import {Image, TouchableOpacity,SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import IconMa from 'react-native-vector-icons/MaterialIcons';
import IconMaC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFa from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/Home';

const logo = {uri: 'https://www.opet.com.tr/assets/images/bg/logo.png'};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = props => {
    const toggleDrawer = () => {
      props.navigationProps.toggleDrawer();
    };
  
    return (
      <TouchableOpacity style={{marginRight: 10}} onPress={() => toggleDrawer()}>
        <IconMa name="menu" size={28} color="#fff" />
      </TouchableOpacity>
    );
  };
  
  const HomeScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: '',
            headerLeft: () => (
              <Image
                style={{width: 70, height: 24, marginLeft: 10}}
                source={logo}
              />
            ),
            headerRight: () => (
              <NavigationDrawerStructure navigationProps={navigation} />
            ),
            headerTransparent: true,
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    );
  };

const MyDrawer = () => {
    return (
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#0271cd',
        }}
        screenOptions={{ activeTintColor: '#fff', inactiveTintColor: '#fff', headerShown:false,
          headerStyle: {  backgroundColor: '0271cd', borderBottomColor: '#fff', borderBottomWidth: 1, },
          itemStyle: {marginVertical: 5},
          labelStyle: {  fontSize: 18, },
        }}>
        <Drawer.Screen
          name="HomeScreen1"
          component={HomeScreenStack}
          options={{
            drawerLabel: 'Ana Sayfa',
            drawerIcon: ({focused}) => (
              <IconMa name="home" size={24} color="#fff" />
            ),
          }}
        />
  
      </Drawer.Navigator>
    );
  };
const Routes = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MyDrawer"
            component={MyDrawer}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Routes;