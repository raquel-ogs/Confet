import React from "react";
import {View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand'; 

export default function Produtos ({ titulo, preco, imagem}){

    let [fontsLoaded] = useFonts({
        PatrickHand_400Regular,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    return(
        
        <TouchableOpacity style={estilo.containerProdutos}>
            <Image
                style={estilo.images}
                source={require(`../../img/${imagem}`)}
                />
                <Text style={estilo.titulo}>{titulo}</Text>                
                <Text style={estilo.preco}>{preco}</Text>
        </TouchableOpacity>

    );
}
           
const estilo = StyleSheet.create({
    containerProdutos: {
        backgroundColor: "#FFDC8D",
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        margin:0,
        justifyContent: "center",
        flex: 1,
        width: 180,
        height: 250,
        marginLeft: 8,
        marginHorizontal:10,

    },
    titulo: {
        color: "#8F4E18",
        fontSize: 20,
        fontFamily: "PatrickHand_400Regular",
        fontWeight: "bold",
        textAlign: "center", 
    },
    preco: {
        color: "#8F4E18",
        fontSize: 25,
        fontFamily: "PatrickHand_400Regular",
        marginLeft: 80,
        marginTop: 2,
        fontWeight: "bold",
    },
    images: {
        width: "150px",
        height: "150px",
        borderRadius: 3,
   
    },

});
