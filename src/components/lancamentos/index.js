import React from "react";
import {TouchableOpacity, StyleSheet, Text, Image} from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico'; 

export default function Lancamentos ({ titulo, preco, imagem}){
    let [fontsLoaded] = useFonts({
        Pacifico_400Regular,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    return(
        <TouchableOpacity style={estilo.containerLancamentos}>
            <Text style={estilo.titulo}>{titulo}</Text>
            <Image
                style={estilo.images}
                source={require(`../../img/${imagem}`)}
                />
        </TouchableOpacity>

    );
    
}

const estilo = StyleSheet.create({
    containerLancamentos: {
        backgroundColor: "#FFDC8D",
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        margin:0,
        justifyContent: "space-between",
        width: 250,
        height: 180,
        marginLeft: 8,
        marginHorizontal:10,

    },
    titulo: {
        color: "5C281F",
        fontSize: 24,
        fontFamily: "Pacifico_400Regular",
        fontWeight: "bold",
        textAlign: "center", 
    },
    images: {
        width: "180px",
        height: "180px",
        borderRadius: 3,
   
    },

});