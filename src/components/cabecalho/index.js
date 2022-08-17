import React from 'react';
import {View,Image,StyleSheet} from 'react-native';
import { Ionicons, SimpleLineIcons} from '@expo/vector-icons';


export default function Cabecalho(){
return(
    
    <View style={estilo.header}>
        <SimpleLineIcons name="menu" size={35} color="white" />
        <Image
                style={estilo.logo}
                source={require(`../../img/logo.png`)}
                />
        <Ionicons name="cart-outline" size={45} color="white" />
    </View>

);
}
const estilo = StyleSheet.create({
    header:{
        backgroundColor:'#FFACAC',
        borderRadius:2,
        width:'100%',
        padding:20,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20

    },
    logo:{
        width: '160px',
        height: '50px',
    }

})