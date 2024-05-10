import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Preencha todo o espaço que esta vazio/sobrando
  },

  header: {
    height: "10%", // Define a altura do HEADER
    backgroundColor: "#54b53f", // Define a cor de fundo
    justifyContent: "center",
  },

  img: {
    width: 300,
    height: 300,
    margin: 30,
    marginBottom: 5,
    borderRadius: 10,
  },
  body: {
    flex: 1,
  },

  txtImg: {
    fontStyle: "italic",
    fontSize: 20, // Define o tamanho da fonte
  },
  txtHeader: {
    fontSize: 28, // Define o tamanho da fonte

    fontStyle: "italic",
    textAlign: "center",
  },
  button: {
    margin: 10,
    borderRadius: 10,
    width: 170,
    height: 170,
  },

  footer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100", // Define a altura do componente Footer
    backgroundColor: "#54b53f", // Define a cor de fundo
  },
  slogan: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },

  imgsconteudo: {
    width: 300,
    height: 300,
    margin: 30,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  algconteudo: {
    alignItems: "center",
    justifyContent: "center",
  },
  tituloiporanga: {
    alignItems: "center",
    backgroundColor: "#54b53f",
  },
  txt_titulocidade: {
    fontSize: 25,
    margin: 10,
  },
  txtconteudo: {
    margin: 15,
    textAlign: "justify",
  },

  imgbutton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
    borderRadius: 10,
  },
  button2: {
    margin: 170,
    marginLeft: -18,
    height: 40,
    width: 150,
    borderRadius: 10,
  },
  button3: {
    margin: -230,
    marginLeft: 178,
    height: 40,
    width: 150,
    borderRadius: 10,
    paddingTop: 20,
  },
  button4: {
    margin: 10,
    marginLeft: 178,
    height: 10,
    width: 150,
    borderRadius: 10,
    paddingTop: 10,
  },
  txtBody: {
    fontSize: 28, // Define o tamanho da fonte
    fontStyle: "italic",
    textAlign: "center",
  },
  BtnPacotes: {
    borderRadius: 10,
    width: 170,
    height: 70,
    backgroundColor: "#54b53f",
    justifyContent:"center",
    alignItems:"center",
  },
  txtButton:{
    fontSize:30,
    fontWeight:"bold",
  },
  txtpacote: {
    margin: 15,
    textAlign: "center",
   marginTop: 260,
   fontSize: 20,
   fontStyle: "italic",
  },
  txtviagem: {
  fontSize: 20,
  fontStyle: "italic",
  textAlign: "center",
  },
});
