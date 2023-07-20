import React, { useState } from "react";
import { Text, View } from "react-native";
import estilos from "./estilos";
import CampoInteiro from "../../../components/CampoInteiro";
import Botao from "../../../components/Botao";

export default function Item({ nome, preco, descricao }) {

    const [quantidade, setQuantidade] = useState(1)

    return <>
    <View style={estilos.informacao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>{preco}</Text>
        
    </View>

    <View style={estilos.carrinho}>
        <View>
            <View style={estilos.valor}>
                <Text style={estilos.quantidade}>Quantidade:</Text>
                <CampoInteiro estilos={estilos.quantidade} valor={quantidade} acao={setQuantidade}/>
            </View> 
            <View style={estilos.valor}>
                <Text style={estilos.quantidade}>Preço:</Text>
                <Text style={estilos.preco}>0</Text>
            </View> 
        </View>
        <Botao valor="Adicionar" acao={() => {}}/>
    </View>
    <View style={estilos.divisor}/>
    </> 
}