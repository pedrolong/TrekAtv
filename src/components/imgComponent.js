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

      <Modal transparent={true} animationType="fade" visible={visible}>
        <View style={styles.modalalg}>
          <View style={styles.modal1}>
            <Text style={styles.txtModal}>ouuuuuuuu</Text>
            <TouchableOpacity
              style={styles.btnModal}
              onPress={() => visModal(false)}
            >
              <Text>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
