import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  drawer:{
    flex: 1,
    height:"100%",
    width:200,
  },
  accountcontent:{
    backgroundColor:"blue",
    height:200,
    width:200,
  },
  content: {
    flexDirection: 'row',
    height:200,
    width:200,
    // backgroundColor:"black"

  },
  container: {
    alignItems:'flex-start',
    width:"100%",
    paddingRight:200,
    backgroundColor:"red",
    marginTop:200,
    height:50

  }
});

export default styles;
