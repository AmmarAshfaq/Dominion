import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  AsyncStorage,
  FlatList,
  ImageBackground
} from "react-native";
import { Input, Button, Picker, Icon, Drawer, Thumbnail } from "native-base";
const property1 = {
  description: 'Dominion Mall & Apartments,the first project of Dominion Properties that is still under construction.Dominion Mall & Apartments is being built on a land of 24 lakh square feet and will be one of the largest residential plus commercial real estate building in Pakistan.',
  url: [
    {
      image: require('../../../assets/property1/image1.png')
    },
    {
      image: require('../../../assets/property1/image2.png')
    },
    {
      image: require('../../../assets/property1/image3.png')
    }
  ]
  , name: 'Dominion Mall & Apartments'
}
const property2 = {
  description: 'Dominion Business Center is one of our recent completed projects.We at Dominion Properties are extremely delighted in the outcome of what was once an idea in our minds.Dominion Business Center I has not only impacted the idustry by breaking the boundaries of innovation of real estate in Pakistan,but has also set new standards for commercial real estate all over the country.',
  url: [
    {
      image: require('../../../assets/property2/image1.png')
    },
    {
      image: require('../../../assets/property2/image2.png')
    },
    {
      image: require('../../../assets/property2/image3.png')
    }
  ],
  name: 'Dominion Business Center'
}
const property3 = {
  description: 'Dominion Business Center II is under construction as of now and will be cited as the sister project to Dominion Business Center II.Using the same superior exterior aspect and interior designs,we will be able to provide office spaces for modern-day enterprenerus as well as large MNCs',
  url: [
    {
      image: require('../../../assets/property3/image1.png')
    },
    {
      image: require('../../../assets/property3/image2.png')
    },
    {
      image: require('../../../assets/property3/image3.png')
    }
  ],
  name: 'Dominion Business Center II'
}
const property4 = {
  description: 'Dominion Twin Towers is our next effort towards making Paksitan an urban haven.Dominion Twin Towers will with the will of Allah break several recrds in Pakistan real estate industry and surely comply with every value that we at Dominion Properties hold so dear.',
  url: [
    {
      image: require('../../../assets/property4/image1.png')
    },
    {
      image: require('../../../assets/property4/image2.png')
    },
    {
      image: require('../../../assets/property4/image3.png')
    }
  ],
  name: 'Dominion Twin Towers'
}
const { width, height, scale, fontScale } = Dimensions.get("window");
export default class Properties extends Component {
  static navigationOptions = {
    title: "PROPERTIES",
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerTintColor: "#03517b",
    headerTitleStyle: {
      color: "#03517b",
      alignSelf: "center",
      textAlign: "center",
      flex: 1,
      marginLeft: -10
    }
  };

  render() {
    return (
      <ScrollView
        style={{ backgroundColor: "rgba(52, 33, 61, 1)" }}
        contentContainerStyle={{ height: height - 80, width }}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ flex: 1, }}>
          <View style={{
            flex: 0.4, backgroundColor: "#eeeeee", justifyContent: "center",
            alignItems: "center",
          }}>
            {/* <ImageBackground
              source={require("../../../assets/Header.png")}
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                // opacity:0.5
              }}
            > */}

            <View style={{ flex: 0.8 }}>
              <Image
                source={require("../../../assets/logoB.jpg")}
                style={{
                  width: width / 2,
                  height: width / 2,
                  // opacity:0.5
                  // resizeMode: "contain"
                }}
              />
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20
              }}
            >
              <Text
                style={{
                  color: "#03517b",
                  fontSize: width / 20,
                  fontWeight: "bold"
                }}
              >
                PROPERTIES
                </Text>
              <Text
                style={{
                  color: "#03517b",
                  fontSize: width / 36,
                  fontWeight: "bold"
                }}
              >
                Explore properties via clicking the icons below
                </Text>
            </View>


            {/* <Thumbnail large source={{ uri: this.props.user.image_url }} /> */}
            {/* </ImageBackground> */}
          </View>
          <View
            style={{
              flex: 0.5,
              justifyContent: "space-around",
              backgroundColor: "#fff"
            }}
          >
            <View style={{ flex: 1 / 2, flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  width: width / 2,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={() => {
                  this.props.navigation.navigate("detail", {
                    detailInformation: JSON.stringify(property1)
                  });
                }}
              >
                <Image
                  source={require("../../../assets/property1.png")}
                  style={{ width: 125, height: 80 }}
                />
                {/* <Text style={{ color: "#f09291" }}>Office</Text> */}
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: width / 2,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={() => {
                  this.props.navigation.navigate("detail", {
                    detailInformation: JSON.stringify(property1)
                  });
                }}
              >
                <Image
                  source={require("../../../assets/property2.png")}
                  style={{ width: 125, height: 80 }}
                />
                {/* <Text style={{ color: "#f09291" }}>Shop </Text> */}
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 / 2, flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("detail", {
                  detailInformation: JSON.stringify(property3)
                })}
                style={{
                  width: width / 2,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../../../assets/property3.png")}
                  style={{ width: 125, height: 80 }}
                />
                {/* <Text style={{ color: "#f09291" }}>Flat</Text> */}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("detail", {
                  detailInformation: JSON.stringify(property4)
                })}
                style={{
                  width: width / 2,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../../../assets/property4.png")}
                  style={{ width: 125, height: 80 }}
                />
                {/* <Text style={{ color: "#f09291" }}>House</Text> */}
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 0.1, backgroundColor: "#f16564" }} />
        </View>
      </ScrollView>
    );
  }
}
