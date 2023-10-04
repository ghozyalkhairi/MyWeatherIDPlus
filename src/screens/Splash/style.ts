import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11123E',
    padding: 20,
  },
  logo: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 50,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    fontSize: 30,
    marginTop: 50,
    textAlign: 'center',
  },
  gold: {
    color: '#FED059',
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 24,
    textAlign: 'center',
  },
  version: {
    fontFamily: 'Poppins-Regular',
    color: '#A0A3BD',
    fontSize: 12,
    textAlign: 'center',
  },
});
