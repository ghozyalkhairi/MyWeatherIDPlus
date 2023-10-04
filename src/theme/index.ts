import {createTheme} from '@rneui/themed';

const theme = createTheme({
  components: {
    Text: {
      h1Style: {
        fontFamily: 'Poppins-Bold',
        fontWeight: '300',
      },
      h2Style: {
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '300',
      },
      h3Style: {
        fontFamily: 'Poppins-Regular',
        fontWeight: '300',
      },
      h4Style: {
        fontFamily: 'Poppins-Regular',
        fontWeight: '300',
      },
    },
    Input: {
      inputStyle: {
        fontFamily: 'Poppins-Regular',
      },
    },
    Button: {
      titleStyle: {
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '300',
        fontSize: 18,
      },
      buttonStyle: {
        borderRadius: 10,
        backgroundColor: '#056CD3',
        paddingVertical: 15,
      },
    },
    CheckBox: {
      textStyle: {
        fontFamily: 'Poppins-Regular',
        fontWeight: '300',
      },
      containerStyle: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        paddingHorizontal: 0,
        marginHorizontal: 0,
      },
    },
  },
  lightColors: {
    primary: '#056CD3',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'dark',
});

export default theme;
