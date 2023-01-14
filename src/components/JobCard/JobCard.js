import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';
import { FONTS, COLORS, SIZES, icons } from '../../constants';

const JobCard = ({ Jobs, onPress }) => {
  return (
    <View style={{ marginVertical: SIZES.base }}>
    <TouchableOpacity onPress={onPress} style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, marginLeft: SIZES.radius  }}>
            <View style={{ justifyContent: 'center', alignItems: 'flex-start', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
              <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>{Jobs.job_title}</Text>
            </View>
              <Text style={{ ...FONTS.h4,marginTop: 4 ,  color: COLORS.lightGray }}> {Jobs.job_owner}</Text>
              <Text style={{ ...FONTS.h5,marginTop: 4 , color: COLORS.lightGray }}> Ankara</Text>
              <Text style={{ ...FONTS.h5, marginTop: 4 ,color: COLORS.lightGray }}> Tam Zamanlı</Text>

            <View style={{ flexDirection: 'row', marginTop: 6 }}>
            <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.base }}>{Jobs.job_start_date} -</Text>
            <Text style={{ ...FONTS.body4, color: COLORS.lightGray}}>{Jobs.job_end_date}</Text>
            </View>

          </View>
    </TouchableOpacity>
    </View>
  );
};

export default JobCard;