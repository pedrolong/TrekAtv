import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { styles } from "../styles/Style";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Img({ caminhoImg, txt, txtConteudo, nameFunction, nomecidade, }) {
  const navigation = useNavigation();
  return (
    <View style={styles.algconteudo}>
      <Image style={styles.img} source={caminhoImg} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(nameFunction);
        }}
      >
        <Text style={styles.txtImg}>{txt}</Text>
      </TouchableOpacity>
      <Text style={styles.txt_introduçaocidade}> É {nomecidade}</Text>
    </View>
  );
}
