import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';
import { FONTS, COLORS, SIZES, icons } from '../../constants';

const JobCard = ({ Jobs, onPress }) => {
  return (
    <View style={{ marginVertical: SIZES.base }}>
    <TouchableOpacity onPress={onPress} style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, marginLeft: SIZES.radius }}>
            {/* Book name and author */}
            <View>
              <Text style={{ paddingRight: SIZES.padding, ...FONTS.h3, color: COLORS.black }}>{Jobs.job_title}</Text>
              <Text style={{ ...FONTS.h4, color: COLORS.lightGray }}>{Jobs.job_owner}</Text>
            </View>

            {/* Book Info */}
            <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
            <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{Jobs.job_start_date}</Text>

            <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{Jobs.job_end_date}</Text>
            </View>

            {/* Genre */}
            <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>{Jobs.job_description}</Text>
                </View>             
            </View>
          </View>
    </TouchableOpacity>
    </View>
  );
};

export default JobCard;