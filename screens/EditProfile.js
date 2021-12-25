import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCamera,
  faEnvelope,
  faGlobe,
  faPhone,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Title } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { EditProfileAction } from "../redux/action";


export default function EditProfile({navigation}) {
  const [fullname, setFullName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [statecountry, setStateCountry] = useState("");
  const USER_DETAILS = useSelector(state=>state.USER_DETAILS);
  const dispatch = useDispatch();
    
  const submit =()=>{
    if(fullname == "" || phonenumber == "" || email == "" || statecountry == ""){
      alert("FILL ALL DETAILS !!!");
  }else {

      dispatch(EditProfileAction({wordName:fullname,number:phonenumber,email:email,statecountry:statecountry}));
      navigation.navigate("Profile")
      setFullName("");setEmail("");setPhoneNumber("");setStateCountry("");
    }
  }


  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }} backgroundColor="#382a38">
        <Title style={{ color: "#f5f5f5", paddingTop: 8 }}>EDIT PROFILE</Title>
        <TouchableOpacity>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faUserPlus}
              size={90}
              color="grey"
              style={{ borderRadius: 15 }}
            />
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon
                icon={faCamera}
                size={35}
                color="white"
                style={{
                  opacity: 0.7,
                  marginTop: -100,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "#fff",
                  borderRadius: 10,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>

        <Text
          style={{
            marginTop: 10,
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
          }}
        >
          {USER_DETAILS.userName}
        </Text>

        <View style={styles.action}>
          <FontAwesomeIcon
            icon={faUser}
            size={20}
            color="white"
            style={{ marginTop: 14, marginLeft: 20 }}
          />
          <TextInput
            placeholder=" Full  Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            color="white"
            onChangeText={setFullName}
            value={fullname}
          />
        </View>

        <View style={styles.action}>
          <FontAwesomeIcon
            icon={faPhone}
            size={20}
            color="white"
            keyboardType="number-pad"
            style={{ marginTop: 14, marginLeft: 20 }}
          />
          <TextInput
            placeholder=" Phone Number"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            color="white"
            onChangeText={setPhoneNumber}
            value={phonenumber}
          />
        </View>

        <View style={styles.action}>
          <FontAwesomeIcon
            icon={faEnvelope}
            size={20}
            color="white"
            keyboardType="email-address"
            style={{ marginTop: 14, marginLeft: 20 }}
          />
          <TextInput
            placeholder=" Email "
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            color="white"
            onChangeText={setEmail}
            value={email}
          />
        </View>

        <View style={styles.action}>
          <FontAwesomeIcon
            icon={faGlobe}
            size={20}
            color="white"
            style={{ marginTop: 14, marginLeft: 20 }}
          />
          <TextInput
            placeholder=" State & Country"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            color="white"
            onChangeText={setStateCountry}
            value={statecountry}
          />
        </View>

        <TouchableOpacity style={styles.commandButton} onPress={()=>submit()}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  commandButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 100,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});
