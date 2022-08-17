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
            <Text style={estilo.titulo}>{titulo}</Text>

    );
}

const estilo = StyleSheet.create({
    titulo: {
        color: "#FAA596",
        fontSize: 25,
        fontFamily: 'Agrandir-Thin',
        paddingLeft: 10,
        marginTop: 25,
        textAlign: "left",
    }

});
