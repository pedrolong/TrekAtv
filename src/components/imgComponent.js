import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { styles } from "../styles/Style";
import { useState } from "react";

export default function Img({ caminhoImg, txt, txtConteudo }) {
  const [visible, setVisible] = useState(false);
  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  return (
    <View>
      <Image style={styles.img} source={caminhoImg} />
      <TouchableOpacity style={styles.button} onPress={() => visModal(true)}>
        <Text style={styles.txtImg}>{txt}</Text>
      </TouchableOpacity>
    </View>
  );
}
