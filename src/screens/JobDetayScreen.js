import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {deviceHeight, deviceWidth} from '../utils/dimensions';
import Faded from '../utils/faded';
import { FONTS, COLORS, SIZES, icons } from '../constants';

const JobDetayScreen = ({route}) => {
  const Jobs = route.params;
  const jobStartDate = new Date(Jobs.job_start_date);
  const jobEndDate = new Date(Jobs.job_end_date);
  const today = new Date();
  const diffStart = today - jobStartDate;
  const diffEnd = jobEndDate - today;
  const daysStart = Math.floor(diffStart / (1000 * 60 * 60 * 24));
  const daysEnd = Math.floor(diffEnd / (1000 * 60 * 60 * 24));
  return (
    <View  style={{ width: '100%',  alignItems: 'flex-start',  paddingVertical: 0, paddingHorizontal: 0, }}>
      <View style={{position: 'absolute', top: 0, width: '100%'}}>
        <Faded height={deviceHeight / 4} color="#0070d4" direction="bottom" />
      </View>
              <Text style={{ ...FONTS.h2, marginTop: 4, color: COLORS.black }}>{Jobs.job_title}</Text>
              <Text style={{ ...FONTS.h4, marginTop: 4 ,  color: COLORS.black }}> {Jobs.job_owner}</Text>
              <Text style={{ ...FONTS.h5, marginTop: 4 , color: COLORS.black }}> Ankara</Text>
              <Text style={{ ...FONTS.h5, marginTop: 4 ,color: COLORS.black }}> Tam Zamanlı</Text>

            <View style={{ flexDirection: 'column', marginTop: 6 }}>
            {daysStart > 0 && daysEnd > 0 &&  (<Text>  {daysStart}  gündür yayında.</Text>)} 
            {daysEnd < 0 && (<Text>  {-daysEnd} gün önce yayından kaldırılmış.</Text>)}
            {diffStart < 0 && diffEnd >= 0 && (<Text>  {-daysStart} gün sonra yayınlanacak.</Text>)}

            <Text style={{ ...FONTS.body4, color: COLORS.black, paddingHorizontal: SIZES.base }}>Job Start Date:{Jobs.job_start_date}</Text>
            <Text style={{ ...FONTS.body4, color: COLORS.black, paddingHorizontal: SIZES.base }}>Job End Date:{Jobs.job_end_date}</Text>
            <Text style={{ ...FONTS.h4, color: COLORS.darkRed, paddingHorizontal: SIZES.base }}>Description</Text>
            <Text style={{ ...FONTS.body4, color: COLORS.darkRed, paddingHorizontal: SIZES.base }}>{Jobs.job_description}</Text>
            </View>
    </View> 
  );
};

export default JobDetayScreen;
