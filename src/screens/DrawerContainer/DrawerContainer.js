import React from "react";
import { View,Text ,TouchableOpacity,Image} from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";
import  firebase  from "../../firebase";


export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
       <View style={styles.drawer}>
        
          {/* <View style={styles.accountcontent}>
           <Text>hiiii</Text>
          </View>   */}
        {/* <View style={styles.content}>
          </View>
        <View style={styles.container}>
          <MenuButton
            title="Home"
            source={require("../../../assets/icons/home.png")}
            onPress={() => {
              navigation.navigate("Home");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Orders"
            source={require("../../../assets/icons/category.png")}
            onPress={() => {
              navigation.navigate("Categories");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="SEARCH"
            source={require("../../../assets/icons/search.png")}
            onPress={() => {
              navigation.navigate("Search");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="LOGOUT"
            onPress={() => {
              firebase.auth()
                .signOut()
                .then(() => {
                  navigation.navigate("SignIn");
                })
                .catch((error) => alert(error.message));
            }}
          /> */}
          <View style={styles.accountcontent}>
          <Text style={{color:"black",fontSize:17,fontWeight:"bold",marginLeft:15}}>Home</Text>


          </View>
          <View style={{marginTop:40, marginLeft:15}}>
          <TouchableOpacity style={{flexDirection:"row",marginTop:10}} 
          onPress={() => {
            navigation.navigate("Home");
            navigation.closeDrawer();
          }}>
          <Image source={require("../../../assets/icons/home.png")} style={{height: 20, width: 20}} />
            <Text style={{color:"black",fontSize:17,fontWeight:"bold",marginLeft:15}}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:"row",marginTop:10}}
          onPress={() => {
            navigation.navigate("Home");
            navigation.closeDrawer();
          }}>
          <Image source={require("../../../assets/icons/category.png")} style={{height: 20, width: 20}} />
            <Text style={{color:"black",fontSize:17,fontWeight:"bold",marginLeft:15}}>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:"row",marginTop:10}}>
          <Image source={require("../../../assets/icons/home.png")} style={{height: 20, width: 20}} />
            <Text style={{color:"black",fontSize:17,fontWeight:"bold",marginLeft:15}}>home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:"row",marginTop:10 }}
          onPress={() => {
            firebase.auth()
              .signOut()
              .then(() => {
                navigation.navigate("SignIn");
              })
              .catch((error) => alert(error.message));}}>
          <Text style={{color:"black",fontSize:17,fontWeight:"bold",marginLeft:15, backgroundColor:"blue", marginBottom:200}}>LOGOUT</Text>
          </TouchableOpacity>
          </View>
        {/* </View> */}
      
    </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
