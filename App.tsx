import React from 'react';
import { View,Text,StatusBar } from 'react-native';
import { Home } from './src/pages/Home';

// import { Container } from './styles';

export default function app (){
  return (
    <>
     <StatusBar barStyle="light-content" />
    <Home/>
    </>
  );
}

