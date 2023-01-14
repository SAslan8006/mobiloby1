import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';
import { FONTS, COLORS, SIZES, icons } from '../../constants';

const JobCard = ({ Jobs, onPress }) => {
  const jobStartDate = new Date(Jobs.job_start_date);
  const jobEndDate = new Date(Jobs.job_end_date);
  const today = new Date();
  const diffStart = today - jobStartDate;
  const diffEnd = jobEndDate - today;
  const daysStart = Math.floor(diffStart / (1000 * 60 * 60 * 24));
  const daysEnd = Math.floor(diffEnd / (1000 * 60 * 60 * 24));
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

            <View style={{ flexDirection: 'column', marginTop: 6 }}>
            {daysStart > 0 && daysEnd > 0 &&  (<Text>  {daysStart}  gündür yayında.</Text>)} 
            {daysEnd < 0 && (<Text>  {-daysEnd} gün önce yayından kaldırılmış.</Text>)}
            {diffStart < 0 && diffEnd >= 0 && (<Text>  {-daysStart} gün sonra yayınlanacak.</Text>)}
            </View>

          </View>
    </TouchableOpacity>
    </View>
  );
};

export default JobCard;