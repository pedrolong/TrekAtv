import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../styles/Style";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Img({
  caminhoImg,
  txt,
  txtConteudo,
  nameFunction,
  nomecidade,
}) {
  const [visible, setVisible] = useState(false);
  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };
  const img2 = {
    uri: "https://static.wixstatic.com/media/d36dac_eebb6ab0d25b470aac70acf2b53baeb8~mv2.jpg/v1/fill/w_925,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d36dac_eebb6ab0d25b470aac70acf2b53baeb8~mv2.jpg",
  };
  const img3 = {
    uri: "https://live.staticflickr.com/65535/53474246696_cc34de2af0_b.jpg",
  };
  const img4 = {
    uri: "https://www.trilhaseaventuras.com.br/wp-content/uploads/2014/02/ilhabela-sp-7.jpg",
  };
  const img6 = {
    uri: "https://serradoitaqueri.com.br/wp-content/uploads/2018/11/serra-do-itaqueri-morro-do-camelo-analandia.jpg",
  };

  const navigation = useNavigation();
  return (
    
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Image source={img2} style={styles.imgbutton} />
          <Text style={styles.txtImg}> {txt}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Image source={img3} style={styles.imgbutton} />
          <Text style={styles.txtImg}> {txt}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Image source={img4} style={styles.imgbutton} />
          <Text style={styles.txtImg}> {txt}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4}>
          <Image source={img6} style={styles.imgbutton} />
          <Text style={styles.txtImg}> {txt}</Text>
        </TouchableOpacity>
      </View>
    
  );
}
