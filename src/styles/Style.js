import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Preencha todo o espaço que esta vazio/sobrando
  },

  header: {
    height: "10%", // Define a altura do HEADER
    backgroundColor: "#54b53f", // Define a cor de fundo
  },

  img: {
    width: 200,
    height: 200,
    margin: 30,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  body: {
    height: "40%", // Define a altura do componente Footer
    backgroundColor: "##54b53f", // Define a cor de fundo
  },

  txtImg: {
    fontSize: 30, // Define o tamanho da fonte
  },
  txtHeader: {
    fontSize: 30, // Define o tamanho da fonte
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: "10%",
    marginLeft: "5%",
  },
  button: {
    backgroundColor: "#54b53f",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    marginBottom: 10,
    padding: 1,

    height: 50,
    width: 200,
    borderRadius: 10,
  },

  footer: {
    height: "8%", // Define a altura do componente Footer
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
  },
  txt_titulocidade: {
    fontSize: 25,
    margin: 10,
  },
  txtconteudo: {
    margin: 15,
  },
});
