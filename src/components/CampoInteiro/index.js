import React from "react";
import { TextInput } from "react-native";


export default function CampoInteiro({valor, acao}){

    const numeroEmTexto = String(valor)

    return <TextInput
        keyboardType="number-pad"
        selectTextOnFocus
        onChange={(novoValor) => {acao(novoValor)}}
        value={numeroEmTexto}
    />
}