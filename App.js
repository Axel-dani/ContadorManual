import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [conteo , setconteo]= useState (0);
  
  function ContardHandler(){
    setconteo(conteo +1); 
  }
  
  return (
    <View style={styles.container}>
      <Text style ={{width: '80%', textAlign: 'left'}}>conteo: </Text>
      <Text style = {styles.conteo}>
        {conteo}
        </Text>
      <View style={styles.controlsContainer}>
        <Button title='contar'
         style ={styles.boton}
         onPress={ContardHandler}/>
        <Button title='Reiniciar' 
        style={styles.boton}
        onPress={()=>{
          setconteo(0)
        }}/>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'


},
controlsContainer:{
  flex: 0,
  padding: 20,
  width: '80%' , 
  flexDirection: 'row',
  justifyContent: 'space-evenly'

}, 
conteo: {
  margin:16,
  width: '80%',
  padding: 16,
  textAlign: 'center',
  fontSize: 32,
  fontWeight: 'bold',
  borderColor: 'gray',
  borderWidth: 1

},
boton:{
  width:120,
  margin: 16
}  
});
