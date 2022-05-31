import React from "react";
import {TouchableOpacity, StyleSheet, Text, Image} from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Sacramento_400Regular } from '@expo-google-fonts/sacramento'; 


export default function Lancamentos ({desc, titulo, subtitulo, imagem}){
    let [fontsLoaded] = useFonts({
        Pacifico_400Regular,
        Sacramento_400Regular
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    return(
        <TouchableOpacity style={estilo.containerLancamentos}>
            <Text style={estilo.desc}>{desc}</Text>
            <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.subtitulo}>{subtitulo}</Text>
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
        width: 300,
        height: 280,
        marginLeft: 8,
        marginHorizontal:10,
    },

    desc: {
        color: "#8F4E18",
        fontSize: 21,
        fontFamily: "PatrickHand_400Regular",
        fontWeight: "bold",
        textAlign: "center", 
        
    },

    titulo: {
        color: "#8F4E18",
        fontSize: 40,
        fontFamily: "Pacifico_400Regular",
        textAlign: "center",
        lineHeight: 50, 

    },
    
    subtitulo: {
        color: "#8F4E18",
        fontSize: 40,
        fontFamily: "Pacifico_400Regular",
        textAlign: "center", 
        
    },

    images: {
        width: "200px",
        height: "180px",
        left: 50,
        
   
    },

});