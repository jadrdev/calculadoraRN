import React from 'react';
import {Text, Touchable, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  colorText?: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

export const BotonCalc = ({
  texto,
  color = '#2D2D2D',
  colorText = '#fff',
  ancho = false,
  accion
  
}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text style={{...styles.botonText, color: colorText}}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};
