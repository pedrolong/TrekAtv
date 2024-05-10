import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { styles } from "../styles/Style";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import imagens from "../variables/variaveis"

export default function Img({ titleHolambra, titleIlhaBela, titleIporanga, titleAnalalandia }) {
  

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 200,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        <TouchableOpacity
          style={{ width: 170, height: 170 }}
          onPress={() => navigation.navigate("Holambra")}
        >
          <ImageBackground
            source={imagens.imagemHolambra}
            style={{ width: "100%", height: "100%" }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#00000088",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 18, fontWeight: 700 }}>
                {titleHolambra}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: 170, height: 170, }}
          onPress={() => navigation.navigate("Ilhabela")}
        >
          <ImageBackground
            source={imagens.imagemIlha}
            style={{ width: "100%", height: "100%" }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#00000088",
                justifyContent: "center",
                alignItems: "center",
                
              }}
            >
              <Text style={{ color: "white", fontSize: 18, fontWeight: 700 }}>
                {titleIlhaBela}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 200,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        <TouchableOpacity
          style={{ width: 170, height: 170 }}
          onPress={() => navigation.navigate("Iporanga")}
        >
          <ImageBackground
            source={imagens.imagemIporanga}
            style={{ width: "100%", height: "100%" }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#00000088",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 18, fontWeight: 700 }}>
                { titleIporanga }
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: 170, height: 170 }}
          onPress={() => navigation.navigate("Analândia")}
        >
          <ImageBackground
            source={imagens.imagemAnalalandia}
            style={{ width: "100%", height: "100%" }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#00000088",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 18, fontWeight: 700 }}>
                { titleAnalalandia }
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}
