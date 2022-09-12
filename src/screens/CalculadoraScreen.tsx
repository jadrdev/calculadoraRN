import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

  const {numeroAnterior, numero, limpiar, positivoNegativo, btnDelete, btnDividir, ArmarNumero, btnMultiplicar, btnRestar, calcular, btnSumar} =
    useCalculadora();

  
  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPeque}>
          {numeroAnterior}
        </Text>
      )}

      <Text style={styles.resultado} adjustsFontSizeToFit numberOfLines={1}>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCalc
          texto="C"
          color="#9B9B9B"
          colorText="black"
          accion={limpiar}
        />
        <BotonCalc
          texto="+/-"
          color="#9B9B9B"
          colorText="black"
          accion={positivoNegativo}
        />
        <BotonCalc
          texto="del"
          color="#9B9B9B"
          colorText="black"
          accion={btnDelete}
        />
        <BotonCalc texto="/" color="#FF9427" accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" accion={ArmarNumero} />
        <BotonCalc texto="8" accion={ArmarNumero} />
        <BotonCalc texto="9" accion={ArmarNumero} />
        <BotonCalc texto="X" color="#FF9427" accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" accion={ArmarNumero} />
        <BotonCalc texto="5" accion={ArmarNumero} />
        <BotonCalc texto="6" accion={ArmarNumero} />
        <BotonCalc texto="-" color="#FF9427" accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" accion={ArmarNumero} />
        <BotonCalc texto="2" accion={ArmarNumero} />
        <BotonCalc texto="3" accion={ArmarNumero} />
        <BotonCalc texto="+" color="#FF9427" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" colorText="#fff" ancho accion={ArmarNumero} />
        <BotonCalc texto="." colorText="#fff" accion={ArmarNumero} />
        <BotonCalc
          texto="="
          color="#FF9427"
          colorText="#fff"
          accion={calcular}
        />
      </View>
    </View>
  );
};
