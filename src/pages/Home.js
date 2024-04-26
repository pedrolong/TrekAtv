import { View, Text, FlatList, ImageComponent } from "react-native";
import { styles } from "../styles/Style";
import Img from "../components/imgComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Holambra from "./Holambra";


const Stack = createNativeStackNavigator();
export default function Home() {
  const img2 = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmYv7v-ClKK2DADzqlpxhEO_fWrEDBVy86jSbn0W9GTt8AVHg0QoTW4UCeCzyNiQBfdA&usqp=CAU",
  };
  const img3 = {
    uri: "https://live.staticflickr.com/65535/53474246696_cc34de2af0_b.jpg",
  };
  const img4 = {
    uri: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2019/11/Socorro-SP-Cidade-Aventura.jpg",
  };
  const img6 = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjlr4NMOrzvEzx9cpnvHEhxbxW__94o6YHyw&s",
  };

  const dados = [
    {
      id: "1",
      component: <Img caminhoImg={img2} txt="Holambra-SP" nameFunction={"Holambra"} nomecidade={"Holambra"} />,
    },
    {
      id: "2",
      component: <Img caminhoImg={img6} txt="Analândia" nameFunction={"Analândia"} />,
    },
    { id: "3", component: <Img caminhoImg={img3} txt="Iporanga-SP" nameFunction={"Iporanga"} /> },
    { id: "4", component: <Img caminhoImg={img4} txt="Ilhabela-SP" nameFunction={"Ilhabela"} /> },
    
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
      <FlatList
        data={dados} // Ele está recebendo todos os objetos do nosso array data
        renderItem={rdItem} // Chama a função para renderizar as Views box
        keyExtractor={(dados) => dados.id} // Extrair o id do objeto
        
    

     
       
        />
      <View style={styles.footer}>
        <Text>Conectando você ao seu próximo destino.</Text>
      </View>
    </View>
  );
}
