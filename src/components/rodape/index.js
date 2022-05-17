import React from 'react';
import {View,Image,StyleSheet} from 'react-native';

export default function Cabecalho(){
return(
    
    <View>
        <Image
                style={estilo.img}
                source={require(`../../img/rodape.png`)}
                />
    </View>

);
}
const estilo = StyleSheet.create({
    img:{
        borderRadius:2,
        width:'100%',
        height: 300,
        marginTop: 55,
        padding:20,

    }

})