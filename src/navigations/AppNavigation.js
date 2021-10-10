import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/Home/HomeScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import DescribtionScreen from "../screens/Description/DescribtionScreen";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
import SignInScreen from "../screens/SignIn/SignIn";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import SignUpScreen from "../screens/SignIn/SignUp";
import OrderScreen from "../screens/Order/OrderScreen";
import EndScreen from "../screens/End/EndScreen";
import PaymentScreen from "../screens/Payment/Payment";
import CardPaymentScreen from "../screens/Payment/CardPayment";
import CancelDeliveryScreen from "../screens/Payment/CancelDelivery";
import MyOrdersScreen from "../screens/Order/MyOrders";

// const image = { uri: "http://gsmcloud.xyz/favicon.png" };
const MainNavigator = createStackNavigator(
  {
    CardPayment: CardPaymentScreen,
    Payment: PaymentScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    Welcome: WelcomeScreen,
    Home: HomeScreen,
    Order: OrderScreen,
    End: EndScreen,
    Categories: CategoriesScreen,
    Describtion: DescribtionScreen,
    CancelDelivery:CancelDeliveryScreen,
    MyOrders:MyOrdersScreen
  },
  {
    initialRouteName: "Home",
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
    }),
  }
);

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator,
  },
  {
    drawerPosition:"left",
    initialRouteName: "Main",
    drawerWidth: 200,
    contentComponent: DrawerContainer,
  }
);

export default AppContainer = createAppContainer(DrawerStack);