import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

export default function Lancamentos ({ titulo, preco, imagem}){
    return(
        <TouchableOpacity style={estilo.containerLancamentos}>
            <Image
                style={estilo.images}
                source={require(`../../img/${imagem}`)}
                />
                <Text style={estilo.titulo}>{titulo}</Text>
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
        width: 230,
        height: 180,
        marginLeft: 8,
        marginHorizontal:10,

    },
    titulo: {
        color: "5C281F",
        fontSize: 14,
        fontFamily: "Agrandir-Tight",
        fontWeight: "bold",
        textAlign: "center", 
    },
    images: {
        width: "180px",
        height: "180px",
        borderRadius: 3,
   
    },

});