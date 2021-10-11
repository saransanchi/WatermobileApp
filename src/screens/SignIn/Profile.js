import React from "react";
import {
    FlatList,
    ScrollView,
    Text,
    View,
    TouchableHighlight,
    Image,
    TouchableOpacity,
    ImageBackground,
    Button,
} from "react-native";
import MenuImage from "../../components/MenuImage/MenuImage";
import { GlobalContext } from '../../context/GlobalContext';

export default class Profile extends React.Component {
    static contextType = GlobalContext

    static navigationOptions = ({ navigation }) => ({
        title: "Profile",
        headerLeft: () => (
            <MenuImage
                onPress={() => {
                    navigation.openDrawer();
                }}
            />
        ),
    });

    state = {
        basketItems: [],
    };

    constructor(props) {
        super(props);
    }
    onPressProduct = (item) => {
        this.props.navigation.navigate("Describtion", { item });
    };
    onPressOrder = (products) => {
        this.props.navigation.navigate("Order", { products });
    };





    render() {
        const image = { uri: "http://gsmcloud.xyz/profile.png" };
        return (
            <React.Fragment>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={image} style={{ height: 150, width: 150, borderRadius: 35 }} />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                        <View style={{ width: '80%', backgroundColor: '#0782F9', paddingVertical: 10, marginBottom: 5, borderRadius: 5 }}>
                            <Text style={{ fontSize: 17, textAlign: 'center', color: '#fff' }}>Saran Sanchi</Text>
                        </View>
                        <View style={{ width: '80%', backgroundColor: '#0782F9', paddingVertical: 10, marginBottom: 5, borderRadius: 5 }}>
                            <Text style={{ fontSize: 17, textAlign: 'center', color: '#fff' }}>1997sanjee@gmail.com</Text>
                        </View>
                        <View style={{ width: '80%', backgroundColor: '#0782F9', paddingVertical: 10, marginBottom: 5, borderRadius: 5 }}>
                            <Text style={{ fontSize: 17, textAlign: 'center', color: '#fff' }}>0771187685</Text>
                        </View>
                        <View style={{ width: '80%', backgroundColor: '#0782F9', paddingVertical: 10, marginBottom: 5, borderRadius: 5 }}>
                            <Text style={{ fontSize: 17, textAlign: 'center', color: '#fff' }}>Nelliady</Text>
                        </View>


                    </View>
                </View>
            </React.Fragment>
        );
    }
}
