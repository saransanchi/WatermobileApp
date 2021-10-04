import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../firebase";




class SignupScreen extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loading: true,
        fullname: "",
        lastname:"",
        phone: "",
        address:"",
        email: "",
        password: ""
      };
    }
  
    componentDidMount() {
      this.authSubscription = auth().onAuthStateChanged(user => {
        this.setState({
          loading: false,
          user
        });
      });
    }
  
    componentWillUnmount() {
      this.authSubscription && this.authSubscription();
    }
  
    onRegister = () => {
      const { email, password } = this.state;
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          const { navigation } = this.props;
          const { fullname, phone, email } = this.state;
          const data = {
            email: email,
            firstname: fullname,
            fullname: fullname,
            fullname: fullname,
            phone: phone,
            appIdentifier: "rn-android-universal-listings"
          };
          user_uid = response.user._user.uid;
          firestore()
            .collection("users")
            .doc(user_uid)
            .set(data);
          firestore()
            .collection("users")
            .doc(user_uid)
            .get()
            .then(function(user) {
              navigation.dispatch({ type: "Login", user: user });
            })
            .catch(function(error) {
              const { code, message } = error;
              alert(message);
            });
        })
        .catch(error => {
          const { code, message } = error;
          alert(message);
        });
    };

    render(){
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
              <View style={styles.inputContainer}>
              <TextInput
                  placeholder="First name"
                //   value={firstname}
                onChangeText={text => this.setState({ fullname: text })}
                value={this.state.fullname}
                  style={styles.input}
                  secureTextEntry
                />
                 <TextInput
                  placeholder="Last name"
                //   value={lastname}
                  onChangeText={(text) => setPassword(text)}
                  style={styles.input}
                  secureTextEntry
                />
                 <TextInput
                  placeholder="Address"
                //   value={address}
                  onChangeText={(text) => setPassword(text)}
                  style={styles.input}
                  secureTextEntry
                />
                
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={styles.input}
                />
                 <TextInput
                  placeholder="Contact No"
                //   value={contactno}
                  onChangeText={(text) => setPassword(text)}
                  style={styles.input}
                  secureTextEntry
                />
                <TextInput
                  placeholder="Password"
                //   value={password}
                  onChangeText={(text) => setPassword(text)}
                  style={styles.input}
                  secureTextEntry
                />
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={handleSignUp}
                  style={[styles.button, styles.buttonOutline]}
                >
                  <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          );
    }
  
    
  }

  



    const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((userCredentials) => {
            const user = userCredentials.user;
            console.log("Registered with:", user.email);
          })
          .catch((error) => alert(error.message));
      };

  


export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
