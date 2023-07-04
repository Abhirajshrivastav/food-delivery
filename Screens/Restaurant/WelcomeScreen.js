import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../../config/Restaurant/colors";
import SPACING from "../../config/SPACING";
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground style={{flex: 1, }} source={require("../../assets/pexels-william-choquette-2641886.jpeg")}>
      <View style={{flex: 1,
      backgroundColor: colors.black, opacity: 0.2 
      }}/>
        <View style={{
          position: "absolute",
          height: "100%",
          zIndex: 2,
          width: "100%",
          justifyContent: "flex-end",
          paddingHorizontal: SPACING * 2,
          paddingBottom: SPACING * 5,
        }}>
         <View>
         <Text
         style={{
          color: colors.white ,
          fontWeight: "600",
          fontSize: SPACING * 4.5,
          textTransform: "capitalize"
         }}
         >
          Let your favorite food find you
          </Text>
          <Text  style={{
          color: colors.white ,
          fontWeight: "600",
          fontSize: SPACING * 1.7,
         }}> 
          The best food in town, delivered to your door
          </Text>
          <TouchableOpacity 
          style={{ 
            padding: SPACING * 2, 
            backgroundColor: colors.white ,borderRadius: SPACING * 2 ,
            alignItems: "center",
            marginTop: SPACING * 3
          }}
          // onPress={()=> navigation.navigate('Login')}
          onPress={()=> navigation.navigate('Home')}
          >
            <Text 
            style={{
              color: colors.black, 
              fontSize: SPACING * 2 , 
              fontWeight: "600"}}>
            Explorer Now
            </Text>
          </TouchableOpacity>
         </View>
        </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});