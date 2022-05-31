import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

export default function Banner(){
    return(
        <View>
            <Image
            style={estilo.banner} source= {require('../../img/banner3.png')}
            />
        </View>
    );
}

const estilo = StyleSheet.create({
    banner: {
        width: "100",
        height: "30vh",
        marginTop: -25,


    }



})