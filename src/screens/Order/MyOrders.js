import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight,
  Button,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import BackButton from "../../components/BackButton/BackButton";
import styles from "./styles";


import { collection, getDocs } from "firebase/firestore";
import MenuImage from "../../components/MenuImage/MenuImage";
import firebase from "../../firebase";






const { width: viewportWidth } = Dimensions.get("window");



export default class MyOrders extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Orders",
    headerLeft: () => (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    ),
  });
  state = {
    myorders: {}
  }
  async componentDidMount() {
    // const querySnapshot = await getDocs(collection(db, "orders"));
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });


    firebase.database().ref('/orders').child('order1').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let ordersitems = { ...data };
      this.setState({
        myorders: ordersitems ? JSON.stringify(ordersitems) : {},

      });
    });
  }

  render() {
    const { myorders } = this.state;
    console.log("aaaaaaaaaaaaa", myorders)
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style = {{color: '#000', fontWeight: 'bold', marginTop:10, fontSize:18}}>My Orders</Text>
        <View style={{ width: '80%', backgroundColor: '#0782F9', marginBottom: 5, borderRadius: 5, paddingVertical: 10,marginTop:50 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
            <Text style={{ color: '#fff' }}>20 Litre Bottle - 1</Text>
            <Text style={{ color: '#fff', marginLeft: 15 }}>Amount - 500</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
            <Text style={{ color: '#fff' }}>5 Litre Bottle - 1</Text>
            <Text style={{ color: '#fff', marginLeft: 15 }}>Amount - 150</Text>
          </View>
          <View style={{ borderBottomWidth: .5, width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginVertical: 5, borderBottomColor: '#fff' }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
            <Text style={{ color: '#fff' }}>Total Amount</Text>
            <Text style={{ color: '#fff', marginLeft: 15 }}>650</Text>
          </View>

        </View>

        <View style={{
           flex: 1,
           justifyContent: "flex-end",
           marginLeft: 1,
           width: "100%",
           height: 100,
           borderColor: "#cccccc",
           borderWidth: 0.5,
           borderRadius: 15,
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{
            backgroundColor: "#0782F9",
            width: 380,
            height: 50,
            padding: 5,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: 'center'

          }}>
            <Text style={{ color: '#fff' }}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
