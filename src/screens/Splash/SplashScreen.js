import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  AsyncImageAnimated,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
const image = { uri: "http://gsmcloud.xyz/logo.png" };


export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.photo} source={image} />
      </View>
    );
  }
}
