import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "../styles/Style";

export default function Holambra() {
  const deckamor = {
    uri: "https://fastly.4sqi.net/img/general/600x600/42147299_ETtWCdkkPNkAI-km2ByYAwE40XmLNZ5xKeOIH3-1W7w.jpg",
  };
  const expoflora = {
    uri: "https://brandnews.com.br/images/noticias/6727/13090908_IMG-4709.jpg",
  };
  const campodeflor = {
    uri: "https://i.pinimg.com/originals/5f/d0/fc/5fd0fc0021a7eb20ecb0e7031a049406.jpg",
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.tituloiporanga}>
          <Text style={styles.txt_titulocidade}>BEM-VINDO A HOLAMBRA!</Text>
        </View>
        <View style={styles.algconteudo}>
          <Image style={styles.imgsconteudo} source={deckamor} />
          <Text>Deck do Amor:</Text>
          <Text style={styles.txtconteudo}>
            O Deck do Amor é inspirado em uma tradição francesa. O local serve
            como inspiração para os casais apaixonados e conta com um lugar onde
            os pombinhos podem colocar um cadeado com o nome do casal. Assim
            como acontece em Paris, os apaixonados jogam as chaves do cadeado
            fora, neste caso, no lago Vitoria Regia.{"\n"}Localização: Alameda
            Maurício de Nasau, 54-84 - Secção A {"\n"}O deck do amor fica aberto
            24 horas;
            {"\n"}
            Não tem nenhum preço de custo;
          </Text>
        </View>
        <View style={styles.algconteudo}>
          <Image
            style={styles.imgsconteudo}
            source={require("../assets/images/moinho.jpeg")}
          />
          <Text>Moinho Povos Unidos:</Text>
          <Text style={styles.txtconteudo}>
            O Moinho Povos Unidos de Holambra preserva as características
            originais de sua construção, portanto, a locomoção dentro do local é
            feita por meio de escadas. São seis andares abertos para visitação e
            é considerado o maior moinho da América latina.{"\n"} Localização:
            Alameda Maurício de Nasau, 249 - centro{"\n"}
            Horario: quarta a domingo das 10:00 ás 17:00{"\n"} Para visualização
            é gratuita, para visitação interna do moinho é 16,00 por pessoa e a
            meia entrada é 08,00
          </Text>
        </View>
        <View style={styles.algconteudo}>
          <Image style={styles.imgsconteudo} source={expoflora} />
          <Text>Expoflora:</Text>
          <Text style={styles.txtconteudo}>
            Acontece todo ano em Holambra, a Expoflora é a maior exposição de
            flores e plantas ornamentais da América Latina {"\n"}
            Evento vai acontecer do dia 30/08 ao dia 29/09, apenas de sexta,
            sábado e domingo{"\n"}
            Horário: das 09:00 as 19:00 {"\n"}
            Localização: Alameda Maurício de Nasau, 894 - Centro {"\n"}
            Ingressos: Variam do dia, mas vai de 60 a 100 reais a inteira.
          </Text>
        </View>
        <View style={styles.algconteudo}>
          <Image style={styles.imgsconteudo} source={campodeflor} />
          <Text>Campos de Flores :</Text>
          <Text style={styles.txtconteudo}>
            Campos de flores na verdade nao é um ponto especifico pois a cidade
            possui varias plantaçoes,que deixam marcado pela quantidade.{"\n"}De
            flores Coloridas normalmente na primavera {"\n"}Localização:
            Holambra;
          </Text>
        </View>
        <View style={styles.footer}></View>
      </ScrollView>
    </View>
  );
}
