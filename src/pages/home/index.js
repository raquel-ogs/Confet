
import { View, FlatList, ScrollView} from "react-native";
import Cabecalho from "./../../components/cabecalho";
import Banner from "./../../components/banner";
import Titulo from "./../../components/titulo";
import Produtos from "./../../components/produtos";
import DadosProdutos from "./../../../dados/dadosProdutos"; 
import Lancamentos from "./../../components/lancamentos";
import DadosLancamentos from "./../../../dados/dadosLancamentos"; 
import Rodape from "./../../components/rodape";

export default function App() {
  return (
    <View style={{ flex:1}}>
      <ScrollView>
        <Cabecalho/>
        <Banner/>
        <Titulo
          titulo =  "OS MAIS VENDIDOS"
        />
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
          subtitulo ={item.subtitulo}
          desc = {item.desc}
          imagem = {item.imagem}
          produto = {item.produto}
          />
          
          )}
        />
      </View>
      <View style={{backgroundColor: "transparent"}}>
        <Rodape/>
      </View>
      </ScrollView>
      </View>
  );
}
