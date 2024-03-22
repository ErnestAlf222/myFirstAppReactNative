import { StyleSheet,  View } from 'react-native'

export const FlexDirectionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d1d1d1',
        justifyContent:'space-between',
        alignItems:'stretch',
        flexDirection:'row',
        flexWrap:'wrap',
        gap:10,
        padding:10,
        columnGap:10
    },
    box:{
        width:100,
        height:100,

    },
    box1: {
        backgroundColor: '#5856D6',

    },
    box2: {
        backgroundColor: '#42418b',
        // alignSelf:'flex-end'

    },
    box3: {
        backgroundColor: '#29285f',

    },
    box4: {
        backgroundColor: '#7271ad',

    },
})