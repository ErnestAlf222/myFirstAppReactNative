import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';

interface Props {
    label:string,
    onPress?: () => void,
    onLongPressed?: () => void
}

export const PrimaryButton = ({label, onPress, onLongPressed }:Props) => {
  return (
    <Pressable
        onPress={ () => onPress && onPress() }
        onLongPress={ () => onLongPressed && onLongPressed() }
        style = { ({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
        ] }>

            <Text style={{
                color: Platform.OS === 'android' ? 'white' : '#4746AB'}}>
                    {label} 
            </Text>

      </Pressable>
  )
}



const styles = StyleSheet.create({
    
    button:{
        backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,     
    },
    buttonPressed: {
        backgroundColor: Platform.OS === 'android' ? '#4746AB' :'white'
    }
})