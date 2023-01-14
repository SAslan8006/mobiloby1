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
import JobListScreen from '../screens/JobList';
import JobPostScreen from '../screens/JobPost';
import JobDetayScreen from '../screens/JobDetayScreen';


const logo = {uri: 'https://mobiloby.com/images/logo_mobiloby.png'};

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
  const JobListScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator initialRouteName="JobListScreen">
        <Stack.Screen
          name="JobListScreen"
          component={JobListScreen}
          options={{
            title: '        Job List',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Image
                  style={{width: 70, height: 24, marginLeft: 10}}
                  source={logo}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <NavigationDrawerStructure navigationProps={navigation} />
            ),  
            headerStyle: { backgroundColor: '#0271cd', },  
            headerTintColor: '#fff',
            headerTitleStyle: { alignSelf: 'center', },
          }}
        />
      </Stack.Navigator>
    );
  };
  const JobPostScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator initialRouteName="JobPostScreen">
        <Stack.Screen
          name="JobPostScreen"
          component={JobPostScreen}
          options={{
            title: 'Job Post',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Image
                  style={{width: 70, height: 24, marginLeft: 10}}
                  source={logo}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <NavigationDrawerStructure navigationProps={navigation} />
            ),
  
            headerStyle: {
              backgroundColor: '#0271cd',
            },
  
            headerTintColor: '#fff',
            headerTitleStyle: {
              alignSelf: 'center',
            },
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
        <Drawer.Screen
        name="JobListScreen1"
        component={JobListScreenStack}
        options={{
          drawerLabel: 'Job List',
          drawerIcon: ({focused}) => (
            <IconMa name="campaign" size={24} color="#fff" />
          ),
        }}
      />
        <Drawer.Screen
          name="JobPostScreen1"
          component={JobPostScreenStack}
          options={{
            drawerLabel: 'Job Post',
            drawerIcon: ({focused}) => (
              <IconMa name="campaign" size={24} color="#fff" />
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
         <Stack.Screen
          name="JobDetayScreen"
          component={JobDetayScreen}
          options={{
            title: 'Job Detay',
            headerStyle: {
              backgroundColor: '#0070d4',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Routes;