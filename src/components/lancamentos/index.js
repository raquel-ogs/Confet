import React from "react";
import {TouchableOpacity, StyleSheet, Text, Image, View} from "react-native";


export default function Lancamentos ({desc, titulo,imagem, produto}){

    return(
        <TouchableOpacity style={estilo.containerLancamentos}>
            <View style={estilo.textos}>
                <Text style={estilo.desc}>{desc}</Text>
                <Text style={estilo.titulo}>{titulo}</Text>
            </View>
            <Image
                style={estilo.fundo}
                source={require(`../../img/${imagem}`)}
                />
            <Image
            style={estilo.images}
            source={require(`../../img/${produto}`)}
            />
        
        </TouchableOpacity>

    );
    
}

const estilo = StyleSheet.create({
    containerLancamentos: {
        backgroundColor: "#FFDC8D",
        borderRadius: 10,
        marginTop: 10,
        paddingTop: 15,
        margin:0,
        justifyContent: "space-between",
        width: 310,
        height: 230,
        marginLeft: 8,
        marginHorizontal:10,
        alignItems: 'center'
    },


    desc: {
        color: "#8F4E18",
        fontFamily: "Sailors",
        fontWeight: "bold",
        textAlign: "center", 
        fontSize: 17,
        

    },

    titulo: {
        color: "#8F4E18",
        fontSize: 39,
        fontFamily: "Nickainley",
        textAlign: "center",
    },
    fundo:{
        width: "100%",
        height: '40px',
        top: 60
    },

    images: {
        width: "200px",
        height: "180px",
        top: -60,
   
    },

});