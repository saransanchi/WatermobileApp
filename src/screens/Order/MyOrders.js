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
    myorders: []
}
  componentDidMount() {

    

    // firebase.database().ref('/waterApp').child('orders')
    // .on('value', querySnapShot => {
    //   let data = querySnapShot.val() ? querySnapShot.val() : [];
    //   let ordersitems = [...data];
    //   console.log(ordersitems)
    //   this.setState({
    //     myorders: ordersitems,
        
    //   });
    // });
  }

  render() {
    const { orders } = this.state;

    return (
      <View>
          {orders?.map(order => <Text> {order.id}</Text>)}

      </View>
    );
  }
}
