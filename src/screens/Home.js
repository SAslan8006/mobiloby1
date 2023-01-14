import React from 'react';
import {SafeAreaView, Image, View, Text, TouchableOpacity} from 'react-native';
import IconMa from 'react-native-vector-icons/MaterialIcons';
import {deviceWidth, deviceHeight} from '../utils/dimensions';
import {FlatListSlider} from 'react-native-flatlist-slider';

const images = [
  {
    image:
      'https://mobiloby.com/images/mobil-cozumler-large.jpg',
    desc: 'Mobil Çözümler',
  },
  {
    image:
      'https://mobiloby.com/images/web-uygulamalari-eticaret-large.jpg',
    desc: 'Web Uygulamalar E-ticaret',
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#0271cd'}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
          }}>
          <FlatListSlider
            data={images}
            height={deviceHeight / 2}
            timer={5000}
            onPress={item => alert(images[item].desc)}
            contentContainerStyle={{paddingHorizontal: 0}}
            indicatorContainerStyle={{position: 'absolute', top: 0}}
            indicatorActiveColor={'#e9bc18'}
            indicatorInActiveColor={'#ffffff'}
            indicatorActiveWidth={30}
            animation
          />        
        </View>
        <View style={{flex: 1, width: '100%', marginVertical: 20}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRightWidth: 1,
                borderRightColor: 'rgba(255, 255, 255, 0.2)',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(255, 255, 255, 0.2)',
              }}>
              <Text style={{color: '#fff', fontSize: 24}}>Aktif İlan Sayısı</Text>
              <Text style={{color: '#fff', fontSize: 34}}> 5 </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRightWidth: 1,
                borderRightColor: 'rgba(255, 255, 255, 0.2)',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(255, 255, 255, 0.2)',
              }}>
              <Text style={{color: '#fff', fontSize: 24}}>İşe Yerleşen</Text>
              <Text style={{color: '#fff', fontSize: 34}}> 1222 </Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRightWidth: 1,
                borderRightColor: 'rgba(255, 255, 255, 0.2)',
              }}>
              <Text style={{color: '#fff', fontSize: 24}}>Yayınlanan İlan</Text>
              <Text style={{color: '#fff', fontSize: 34}}> 1227 </Text>
            </View>
         
          </View>
        </View>

        <View
          style={{
            height: 60,
            borderTopWidth: 1,
            borderTopColor: 'rgba(255, 255, 255, 0.2)',
            backgroundColor: '#0271cd',
            width: '100%',
            justifyContent: 'center', 
            padding: 10,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.navigate('KampanyaScreen1')}>
            <View style={{flex: 1}}>
              <Text style={{color: '#fff', fontSize: 18}}>İLANLAR</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <IconMa name="keyboard-arrow-right" size={32} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
