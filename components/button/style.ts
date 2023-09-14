import { StyleSheet } from 'react-native';

const useStyle = () => {
  const styles = StyleSheet.create({
    button: {
      alignSelf: 'center',
      marginTop: 16,
      width: '80%',
    },
    container: {
      borderWidth: 0.6,
      borderColor: '#4B5050',
      backgroundColor: '#4B5050',
      borderRadius: 8,
      marginBottom: 16,
      height: 48,
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    text: {
      fontSize: 16,
      paddingLeft: 16,
      paddingTop: 12,
      fontWeight: '500',
      lineHeight: 24,
      justifyContent: 'center',
      color: 'white',
      letterSpacing: 0.1,
      flex: 1,
    },
    endIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
  });

  return styles;
};

export default useStyle;
