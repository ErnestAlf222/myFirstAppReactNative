import { StyleSheet, Text, View } from 'react-native'

export const HomeWorkScreen = () => {
  return (
    <View style={styles.container } >
      <View style={[styles.box, styles.purpleBox]}/>
      <View style={[styles.box, styles.orangeBox]}/>
      <View style={[styles.box, styles.blueBox]}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28425B',
        flexDirection:'column',
        justifyContent:'center',
        

    },
    box:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white'

    },
    purpleBox:{
        backgroundColor:'#5856D6',
        right:-90,
        top:40


        
    },
    orangeBox:{
        backgroundColor:'#F0A23B',
        alignSelf:'center'

        
    },
    blueBox:{
        backgroundColor:'#28C4D9',
        right:-290,
        top:-160

        
        
    },
})