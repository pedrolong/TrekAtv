import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Preencha todo o espaço que esta vazio/sobrando
  },

  header: {
    height: "10%", // Define a altura do HEADER
    backgroundColor: "#2A6A8E", // Define a cor de fundo
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
    backgroundColor: "#2A6A8E", // Define a cor de fundo
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
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    marginBottom: 10,
    padding: 1,

    height: 50,
    width: 200,
    borderRadius: 10,
  },
  modal1: {
    width: "100%",
    height: "100%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },

  modalalg: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  btnModal: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    marginBottom: 50,
    padding: 1,

    height: 50,
    width: 200,
    borderRadius: 10,
  },
  txtModal: {
    fontSize: 20, // Define o tamanho da fonte
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    height: "8%", // Define a altura do componente Footer
    backgroundColor: "black", // Define a cor de fundo
  },
  slogan: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});
