
import { StyleSheet, Text, View, FlatList } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Titulo from "./src/components/titulo";
import Produtos from "./src/components/produtos";
import DadosProdutos from "./dados/dadosProdutos"; 
import Lancamentos from "./src/components/lancamentos";
import DadosLancamentos from "./dados/dadosLancamentos"; 

export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho></Cabecalho>
      <View>
        <Titulo
          titulo =  "OS MAIS VENDIDOS"
        />
      </View>
      <View>
          <FlatList
          horizontal={true}
          data= {DadosProdutos}
          keyExtractor = {(item) => item.id}
          renderItem = { ({ item }) => (
          
          <Produtos
          titulo ={item.nome}
          imagem = {item.imagem}
          preco = {item.preco}
          />
          
          )}
        />
        </View>
      <Titulo
          titulo =  "NOVIDADES"
        />
       <View>
          <FlatList
          horizontal={true}
          data= {DadosLancamentos}
          keyExtractor = {(item) => item.id}
          renderItem = { ({ item }) => (
          
          <Lancamentos
          titulo ={item.nome}
          imagem = {item.imagem}
          />
          
          )}
        />
        </View>
      </View>
  );
}
