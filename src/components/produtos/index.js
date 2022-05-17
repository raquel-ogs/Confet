import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

export default function Produtos ({ titulo, preco, imagem}){
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
        justifyContent: "space-between",
        width: 180,
        height: 200,
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
    preco: {
        color: "#5C281F",
        fontSize: 18,
        marginLeft: 60,
        marginTop: 2,
        fontWeight: "bold",
    },
    images: {
        width: "150px",
        height: "150px",
        borderRadius: 3,
   
    },

});
