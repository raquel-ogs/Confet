import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image, ImageBackground} from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font'; 

export default function Banner(){
    let [fontsLoaded] = useFonts({
        'Agrandir': require('./../../fonts/Agrandir-WideLight.otf'),
        'Agrandir-Thin': require('./../../fonts/Agrandir-Thin.ttf'),
        'Agrandir-Tight': require('./../../fonts/Agrandir-Tight.otf'),
        'Nickainley': require('./../../fonts/Nickainley-Normal.otf')
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    return(
        <View style={estilo.container}>
            <ImageBackground source={require('./../../img/banner.jpg')} style={{width:'100%', height:'100%'}}>
                <View style={estilo.descricao}>
                    <View style={estilo.texto}>
                        <View>
                            <Text style={{color: '#fff', fontFamily: 'Nickainley', fontSize: '4.5vh'}}>
                            O melhor bolo da região
                            </Text>
                        </View>
                        <View style={{ marginTop: -13}}>
                            <Text style={{color: '#FFDC8D',fontFamily: 'Nickainley', fontSize: '5.5vh'}}> 
                                está aqui!
                            </Text>
                        </View>
                    </View>
                    <View style={{widht: '100%', height: '10vh', flexDirection: 'row', alignItems: `center`, justifyContent: 'space-between',  marginTop: -9}}>
                        <TouchableOpacity style={estilo.btn}>
                            <Text style={{color: '#fff', fontFamily: 'Agrandir-Thin', fontSize: '1.7vh'}}>
                                faça a sua encomenda
                            </Text>
                        </TouchableOpacity>
                        <Image style={estilo.bolo} source= {require('../../img/bolo_chocolate.png')}/>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        width: "100%",
        height: "25vh",
        marginTop: -25,
        paddingTop: 5,
        alignItems: 'center',

    },
    descricao:{
        width: '100%',
        height: '100%',
        paddingTop: 15,

    },
    texto:{
        marginLeft: '-2.5vh',
        alignItems:'center',
        width: '45vh',
        paddingLeft: 15
    },
    bolo:{
        width: '25vh',
        height: '25vh',
       
    },
    btn:{
        width: '18.5vh',
        height: '3.5vh',
        backgroundColor: '#FFACAC',
        borderRadius: 20/3,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2vh',
        marginLeft: 15

        
    },




})