import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";
import firebase from "../../firebase";
import { GlobalContext } from "../../context/GlobalContext";


const image = { uri: "http://gsmcloud.xyz/profile.png" };
export default class DrawerContainer extends React.Component {

  static contextType = GlobalContext

  componentDidMount() {
    const contextObj = this.context

    console.log(contextObj.authUser) // { name: 'Tania', loggedIn: true }
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.drawer}>
        <View style={styles.accountcontent}>
          <Image source={image} style={{ height: 80, width: 80, marginLeft: 20, marginTop: 40 }} />
          <Text style={{ color: "white", fontSize: 17, fontWeight: "bold", marginLeft: 20, marginTop: 30 }}>sarn sanchi</Text>
        </View>
        <View style={{ marginTop: 20, marginLeft: 15 }}>
          <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}
            onPress={() => {
              navigation.navigate("Home");
              navigation.closeDrawer();
            }}>
            <Image source={require("../../../assets/icons/home.png")} style={{ height: 20, width: 20 }} />
            <Text style={{ color: "black", fontSize: 17, fontWeight: "bold", marginLeft: 15 }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}
            onPress={() => {
              navigation.navigate("Home");
              navigation.closeDrawer();
            }}>
            <Image source={require("../../../assets/icons/category.png")} style={{ height: 20, width: 20 }} />
            <Text style={{ color: "black", fontSize: 17, fontWeight: "bold", marginLeft: 15 }}>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
            <Image source={require("../../../assets/icons/info.png")} style={{ height: 20, width: 20 }} />
            <Text style={{ color: "black", fontSize: 17, fontWeight: "bold", marginLeft: 15 }}>Account</Text>
          </TouchableOpacity>
          <View style={{ width: 150, backgroundColor: "blue", marginTop: 200, borderRadius: 15, paddingLeft: 25, paddingBottom:10 }}>
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}
              onPress={() => {
                firebase.auth()
                  .signOut()
                  .then(() => {
                    navigation.navigate("SignIn");
                  })
                  .catch((error) => alert(error.message));
              }}>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", marginLeft: 20 }}>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
