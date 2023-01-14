import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#b3e5fc'
    },
    logo_container:{
        justifyContent:"center",
    },
    logo:{
        height:Dimensions.get('window').height*0.4,
        width:Dimensions.get('window').width*0.9,
        resizeMode:'contain',
        alignSelf:'center',
        tintColor:'blue'
    },
    body_container:{},
})