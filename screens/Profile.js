import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Title, Caption, TouchableRipple } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBullhorn,
  faCog,
  faCreditCard,
  faEnvelope,
  faHeart,
  faMapPin,
  faPhone,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { userBooleanAction } from "../redux/action";

export default function Profile({navigation}) {
  const dataEdit = useSelector(state=>state.EDIT_NAME);
  const dataUser = useSelector(state=>state.USER_DETAILS);
  const dispatch = useDispatch();

  const logOut =()=>{
    navigation.navigate("Login");
    dispatch(userBooleanAction({userStatus:false}))
  }

  return (
    <ScrollView style={styles.container} backgroundColor="black">

      <Title style={{ color: "#f5f5f5", marginLeft: 150, paddingTop: 8 }}>
        {" "}
        PROFILE{" "}
      </Title>

      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 18 }}>
          <FontAwesomeIcon icon={faUserCircle} size={80} color="white" />

          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                  color: "#f5f5f5",
                },
              ]}
            >
              {dataUser.userName}
            </Title>
            <Caption style={styles.caption}> varsu_s</Caption>
          </View>
          <View style={{ marginLeft:90, marginTop: -30 }}>
            <TouchableOpacity style={styles.commandButton} onPress={()=>logOut()}>
              <Text style={styles.panelButtonTitle}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSectionDetails}>
        <View style={styles.row}>
          <FontAwesomeIcon icon={faUser} size={22} color="white" />
          <Text style={{ color: "#f5f5f5", marginLeft: 20, fontSize: 25,fontWeight:"600"}}>
            {dataEdit.wordName}
          </Text>
        </View>

        <View style={styles.row}>
          <FontAwesomeIcon icon={faPhone} size={22} color="white" />
          <Text style={{ color: "#f5f5f5", marginLeft: 20, fontSize: 25,fontWeight:"600" }}>
            {dataEdit.number}
          </Text>
        </View>

        <View style={styles.row}>
          <FontAwesomeIcon icon={faEnvelope} size={22} color="white" />
          <Text style={{ color: "#f5f5f5", marginLeft: 20, fontSize: 25,fontWeight:"600" }}>
            {dataEdit.email}
          </Text>
        </View>

        <View style={styles.row}>
          <FontAwesomeIcon icon={faMapPin} size={22} color="white" />
          <Text style={{ color: "#f5f5f5", marginLeft: 20, fontSize: 25,fontWeight:"600" }}>
            {dataEdit.statecountry}
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: "#dddddd",
              borderRightWidth: 1,
            },
          ]}
        >
          <Title style={{ color: "#f5f5f5" }}>₹140.50</Title>
          <Caption style={{ color: "#f5f5f5" }}>My Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title style={{ color: "#f5f5f5" }}>1200</Title>
          <Caption style={{ color: "#f5f5f5" }}>My Points</Caption>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <FontAwesomeIcon icon={faHeart} size={22} color="white" />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <FontAwesomeIcon icon={faCreditCard} size={22} color="white" />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <FontAwesomeIcon icon={faBullhorn} size={22} color="white" />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <FontAwesomeIcon icon={faCog} size={22} color="white" />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#382a38",
    color: "white",
    // width:"80%"
  },
  userInfoSection: {
    
    justifyContent:"center",
    alignItems:"center",
    marginBottom: 30,
  },
  userInfoSectionDetails:{
    width:"80%",
    alignSelf:"center",
    marginBottom: 25,
    height:200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    paddingTop: 5,
    fontSize: 18,
    lineHeight: 14,
    color: "#f5f5f5",
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems:"center",
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "white",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  commandButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 50,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});
