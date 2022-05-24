import React from 'react';
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


export default function Cabecalho(){
return(
    
    <View style={estilo.header}>
        <SimpleLineIcons name="menu" size={35} color="white" />
        <Image
                style={estilo.logo}
                source={require(`../../img/logo.png`)}
                />
        <Ionicons name="cart" size={45} color="white" />
    </View>

);
}
const estilo = StyleSheet.create({
    header:{
        backgroundColor:'#FFACAC',
        borderRadius:2,
        width:'99,9%',
        padding:20,
        margin:2,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20

    },
    logo:{
        width: '180px',
        height: '70px',
    }

})