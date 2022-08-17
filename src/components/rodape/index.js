import React from 'react';
import {ImageBackground} from 'react-native';

export default function Rodape(){
return(
    
    <ImageBackground source={require('./../../img/rodape.png')} style={{width:'100%', height: 300, marginTop: '-18vh', padding:20,}}/>
);
}
