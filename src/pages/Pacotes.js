import {Text, TouchableOpacity, View, Image} from  "react-native";
import {styles} from "../styles/Style";
import { useNavigation } from "@react-navigation/native";

export default function Pacotes() {
  

    const navigation = useNavigation()
    return (
<View style={styles.header}> 
 <Text style={styles.txtviagem}> Bem-vindos a nossa tela de pacotes, venha fechar a melhor viagem da sua vida conosco! </Text>
</View>
);
  }