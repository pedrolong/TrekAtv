import { View, Text, FlatList, ImageComponent } from "react-native";
import { styles } from "../styles/Style";
import Img from "../components/imgComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function Home() {
  
  const dados = [
    {
      id: "1",
      component: (
        <Img
         
          txt="Holambra-SP"
          nameFunction={"Holambra"}
          nomecidade={
            " cidade encantadora, fica a 120km de São Paulo, conhecida como cidade das flores, foi fundada por imigrantes holandeses e seu nome vem da junção Holanda, América e Brasil !"
          }
        />
      ),
    },
    {
      id: "2",
      component: (
        <Img
         
          txt="Analândia"
          nameFunction={"Analândia"}
          nomecidade={
            " famosa por suas belezas naturais, como cachoeiras, cascatas, morros e suas paisagens espetaculares, a cidade fica na Serra do Itaqueri. Analândia significa Terra da Ana, do germânico 'land' que significa terra !"
          }
        />
      ),
    },
    {
      id: "3",
      component: (
        <Img
          
          txt="Iporanga-SP"
          nameFunction={"Iporanga"}
          nomecidade={
            " famosa por suas cavernas naturais, Iporanga é o município brasileiro com maior número de cavernas e possui um portal de cerca de 216 metros de altura e é considerada a caverna com o maior pórtico do mundo. A cidade fica localizada na região do Vale do Ribeira, seu nome vem da origem tupi que significa 'rio bonito' ! "
          }
        />
      ),
    },
    {
      id: "4",
      component: (
        <Img
         
          txt="Ilhabela-SP"
          nameFunction={"Ilhabela"}
          nomecidade={
            " As condições de vento e mar do canal de São Sebastião fizeram Ilhabela ficar conhecida como a capital da vela. Diversas competições trazem velejadores do Brasil e de diversas partes do mundo. O nome Ilhabela foi dado por Américo Vespúcio descobriu esse arquipélago, o explorador disse que o destino poderia ser o mais próximo de qualquer paraíso na terra"
          }
        />
      ),
    },
  ];

  const rdItem = ({ item }) => {
    return item.component;
  };

  // Renderiza os Componentes Views(box) com seu respectivo Texto.
  // Recebe nosso array de objeto, nomeado como data!

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Trek Trek Turismos</Text>
      </View>
      <View style={styles.body}>
       <Img/>
      </View>
      <View style={styles.footer}>
        <Text style={{ fontSize: 15, fontStyle: "italic" }}>
          Conectando você ao seu próximo destino.
        </Text>
      </View>
    </View>
  );
}
