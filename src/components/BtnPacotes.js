import {View, TouchableOpacity,Text} from "react-native";
 import { styles } from "../styles/Style";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
  
 
  
  export default function BtnPacotes() { ;
  
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.algconteudo}>
        <TouchableOpacity style={styles.BtnPacotes}
        onPress={() => navigation.navigate("Pacotes")}>
         <Text style={styles.txtButton}> Pacotes</Text>
        
      </TouchableOpacity>
      </View>
      </View>
  );
  }
  