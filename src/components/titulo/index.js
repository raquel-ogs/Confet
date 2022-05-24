import React from "react";
import { TouchableOpacity, StyleSheet, Text, Image} from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'; 

export default function Titulo ({ titulo }){
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    return(
        <TouchableOpacity style={estilo.containerTitulo}>    
                <Text style={estilo.titulo}>{titulo}</Text>
        </TouchableOpacity>

    );
}

const estilo = StyleSheet.create({
    containerLancamentos: {
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        margin: 2,
        justifyContent: "space-between",
        height: 280,
        marginLeft: 5,
        marginHorizontal:10,

    },
    titulo: {
        color: "#FAA596",
        fontSize: 25,
        fontFamily: 'Poppins_400Regular',
        margin: 10,
        textAlign: "left",
    }

});
