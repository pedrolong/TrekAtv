import { View, Text, FlatList, ImageComponent } from "react-native";
import { styles } from "./src/styles/Style";
import { useState } from "react";

import Img from "./src/components/imgComponent";

export default function App() {
  const img = {
    uri: "https://www.ubatuba.sp.gov.br/wp-content/uploads/sites/2/2018/08/0820-construcoes-ubatuba.jpg",
  };
  const img2 = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmYv7v-ClKK2DADzqlpxhEO_fWrEDBVy86jSbn0W9GTt8AVHg0QoTW4UCeCzyNiQBfdA&usqp=CAU",
  };
  const img3 = {
    uri: "https://live.staticflickr.com/65535/53474246696_cc34de2af0_b.jpg",
  };
  const img4 = {
    uri: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2019/11/Socorro-SP-Cidade-Aventura.jpg",
  };
  const img5 = {
    uri: "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/06/campos-jordao-capa-2-820x430.jpeg",
  };
  const img6 = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjlr4NMOrzvEzx9cpnvHEhxbxW__94o6YHyw&s",
  };

  const dados = [
    {
      id: "1",
      component: <Img caminhoImg={img} txt="Ubatuba-SP" />,
    },
    {
      id: "2",
      component: <Img caminhoImg={img2} txt="Holambra-SP" />,
    },
    { id: "3", component: <Img caminhoImg={img3} txt="Iporanga-SP" /> },
    { id: "4", component: <Img caminhoImg={img4} txt="Socorro-SP" /> },
    { id: "5", component: <Img caminhoImg={img5} txt="Campos do Jordão-SP" /> },
    { id: "6", component: <Img caminhoImg={img6} txt="Serra Negra-SP" /> },
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
        horizontal
      />

      <View style={styles.body}>
        <Text style={styles.slogan}>
          Encontre aqui no nosso app os principais pontos turísticos e atrações
          para você aproveitar! Conectando você ao seu próximo destino
        </Text>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}
