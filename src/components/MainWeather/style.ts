import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    marginTop: 16,
    backgroundColor: '#1C1D4B',
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
  },
  currentTime: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
  },
  dateText: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  degreeText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
  },
  degreeGold: {fontFamily: 'Poppins-Bold', color: '#FED059'},
  weatherImage: {
    width: 130,
    height: 130,
  },
  flexRowAlt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  locationText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: 2,
  },
});
