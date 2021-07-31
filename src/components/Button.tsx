import React from 'react';
import { Text,StyleSheet,TouchableOpacity,TouchableOpacityProps} from 'react-native';

// import { Container } from './styles';

interface ButtonProps extends TouchableOpacityProps{
  title:string;
}

export function Button({title,...rest}:ButtonProps) {
  return (
    <TouchableOpacity
    style={styles.Button}
    activeOpacity={0.7}
    {...rest}
    >
    <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    Button: {
      backgroundColor: "#a370f7",
      padding: 15,
      borderRadius: 7,
      alignItems: "center",
      marginTop: 20,
    },
    textButton: {
      color: "#fff",
      fontSize: 17,
      fontWeight: "bold",
    },
});
 

