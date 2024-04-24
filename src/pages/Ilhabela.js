import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "../styles/Style";

export default function Ilhabela() {
  const praiadafeitiçeira = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzK-XYRR3VoseQPsdN24wHlttusquLEW9fCw&usqp=CAU",
  };
  const praiabonete = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUTabZgjZ3CCU-51X5I-NTOmIfVm-JrCALA&usqp=CAU",
  };
  const praiacastelhanos = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6cns_1D7Ches71imJVL5QA9mfay-urStEQ&usqp=CAU",
  };
  const praiagarapocaia = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDp70XsWZzD7FKtOPNdFghfYWOd_iE-Y8Jtg&usqp=CAU",
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.tituloiporanga}>
          <Text style={styles.txt_titulocidade}>BEM-VINDO A ILHABELA!</Text>
        </View>
        <View style={styles.algconteudo}>
          <Image style={styles.imgsconteudo} source={praiadafeitiçeira} />
          <Text>Praia da Feiticeira:</Text>
          <Text style={styles.txtconteudo}>
            A Praia da Feiticeira é uma das praias mais famosas da cidade
            brasileira de Ilhabela.{"\n"} Localiza-se no distrito de Cambaquara,
            a 5 km da balsa, e 11,5 km da Vila de Ilhabela na direção sul,
            ficando entre a praia do Portinho e a praia do Julião.
          </Text>
        </View>
        <View style={styles.algconteudo}>
          <Image style={styles.imgsconteudo} source={praiabonete} />
          <Text>Praia de Bonete:</Text>
          <Text style={styles.txtconteudo}>
            A Praia do Bonete é outra praia maravilhosa em Ilhabela, São Paulo.
            Ela também é acessível apenas por trilha ou por barco, o que a torna
            mais isolada e preservada. Bonete é conhecida pela sua atmosfera
            rústica e selvagem, com uma grande extensão de areia, ondas fortes
            ideais para o surf e uma comunidade caiçara acolhedora. Os
            visitantes podem desfrutar de trilhas pela mata atlântica e
            cachoeiras próximas, além de saborear pratos típicos da região nos
            restaurantes locais. É um destino imperdível para quem busca uma
            experiência autêntica e contato com a natureza.
          </Text>
        </View>
        <View style={styles.algconteudo}>
          <Image style={styles.imgsconteudo} source={praiacastelhanos} />
          <Text>Praia de Castelhanos:</Text>
          <Text style={styles.txtconteudo}>
            A Praia de Castelhanos é uma das praias mais famosas da Ilhabela, em
            São Paulo, Brasil. Ela é conhecida pela sua beleza natural e é
            bastante procurada por turistas em busca de tranquilidade e
            paisagens deslumbrantes. A praia é acessível apenas por trilha ou
            por barco, o que contribui para a preservação do seu ambiente. Com
            águas cristalinas e cercada por mata atlântica, é um destino popular
            para quem gosta de ecoturismo e aventura.
          </Text>
        </View>
        <View style={styles.algconteudo}>
          <Image style={styles.imgsconteudo} source={praiagarapocaia} />
          <Text>Praia Garapocaia:</Text>
          <Text style={styles.txtconteudo}>
            A Praia dos Sinos (Garapocaia) em Ilhabela, São Paulo, é um refúgio
            tranquilo e menos movimentado em comparação com outras praias da
            ilha. Suas águas cristalinas são perfeitas para mergulho livre e
            observação da vida marinha. A praia é cercada por uma exuberante
            vegetação tropical, proporcionando uma sensação de isolamento e
            tranquilidade. É um lugar ideal para relaxar, fazer um piquenique à
            sombra das árvores e apreciar a beleza natural da região.
          </Text>
        </View>
        <View style={styles.footer}></View>
      </ScrollView>
    </View>
  );
}
