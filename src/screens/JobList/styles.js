import { Dimensions, StyleSheet } from 'react-native';
import { FONTS, COLORS, SIZES } from '../../constants';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  topContainer: { flex: 1, backgroundColor: COLORS.gray1 },
  container: { flex: 1, backgroundColor: COLORS.gray },
  categoryItem: {
    marginHorizontal: 10,
    marginTop: height * 0.02,
    marginBottom: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    textAlign: 'center',
    fontFamily: 'Montserrat-ExtraBold',
  },
  flatlist: { 
    marginTop: SIZES.base,
  backgroundColor:COLORS.white,
  marginBottom: SIZES.base,
 }, 
 categoryItem: {
  marginHorizontal: 10,
  marginTop: height * 0.02,
  marginBottom: 10,
  backgroundColor: 'white',
  borderWidth: 1,
  borderRadius: 20,
  padding: 10,
  textAlign: 'center',
  fontSize: SIZES.h3,
  color: COLORS.black,
  borderColor: COLORS.black,
},
 active: {
  color: COLORS.black,
  borderColor: COLORS.darkGreen,
  backgroundColor: COLORS.white,
},
  
});