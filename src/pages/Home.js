import { View, Text } from "react-native";
import { styles } from "../styles/Style";
import Img from "../components/imgComponent";
import BtnPacotes from "../components/BtnPacotes";
import Pacotes from "./Pacotes";

export default function Home() {
  // Renderiza os Componentes Views(box) com seu respectivo Texto.
  // Recebe nosso array de objeto, nomeado como data!

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Trek Trek Turismos</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.txtBody}>Conheça nossos passeios</Text>
        <Img
          titleHolambra="Holambra"
          titleIlhaBela="IlhaBela"
          titleIporanga="Iporanga"
          titleAnalalandia="Analândia"
        />
      </View>
      <Text style={styles.txtpacote}>Conheça todos os nossos pacotes com preços imperdíveis </Text>
      <BtnPacotes />
      
      <View style={styles.footer}>
        <Text style={{ fontSize: 15, fontStyle: "italic" }}>
          Conectando você ao seu próximo destino.
        </Text>
        
      </View>
    </View>
  );
}
