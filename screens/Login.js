import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,

  TouchableOpacity,
} from "react-native";

import * as Keychain from "react-native-keychain";
import { useDispatch, useSelector } from "react-redux";
import { userBooleanAction, UserInfoAction } from "../redux/action";

export default function Login({navigation}) {
  const userBoolean = useSelector(state=>state.USER_BOOLEAN)
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(false);
  const [password, setPassword] = useState("");


  const onSubmit=()=>{
    setUser(true);
    dispatch(UserInfoAction({userName: username,userStatus: user,passWord:password}));
    dispatch(userBooleanAction({userStatus:true}))
    console.log(userBoolean.userStatus);
  }
  console.log(userBoolean);
  return (
    <>
      {!userBoolean.userStatus ?
        <View style={styles.container}>
          <View>
            <Text style={{color: "white",fontSize: 22,fontWeight: "bold",marginLeft: 85}}>
              Welcome !
            </Text>
            <Text style={{color: "white",fontSize: 22,fontWeight: "bold",padding: 10}}>
              Login Into Book Store App
            </Text>
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter Your Name"
              placeholderTextColor="#003f5c"
              onChangeText={(value) => setUsername(value)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
            />
          </View>

          <TouchableOpacity style={styles.loginBtn} onPress={()=> onSubmit()}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        :  <>
        {/* {alert("Working")} */}
          {navigation.navigate("MainScreen")}
       </>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -60,
    backgroundColor: "#382a38",
  },

  inputView: {
    backgroundColor: "#eaeaea",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0394fc",
  },

  logoutBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginLeft: 100,
    backgroundColor: "#0394fc",
  },

  loginText: {
    color: "white",
    fontWeight: "bold",
  },
});
