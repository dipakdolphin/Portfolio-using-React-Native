import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,ScrollView,Dimensions} from 'react-native';
const screenwidth = Dimensions.get('window').width;


export default class FirstScreen extends Component {
    render() {
        return(
            <View style= {{flex:1, backgroundColor:'#86e1ff'}}>
            
            <Text style={styles.header}>HOME</Text>
                
            <View style={styles.body}><Image  style={{width:390, height:150, borderWidth:5,borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('./img/cover.jpg')}/>
            <Image style={styles.img}            
                 source={require('./img/pp.jpeg')}/>                     
               <Text style={styles.me}>Dipak Paswan</Text>
               </View>
               <View style={styles.bodytext}>
              
               <Text style={styles.text}>Hello my name is Dipak Paswan, I work as a Support Manager at Zeftware Solutions. I have more than 3 years of working experience in multiple USA based companies working as Tecnical Recruiter and Business Development Manager. </Text>
               
               
               </View>
            </View>
            
            

        )
    }
};
const styles = StyleSheet.create({
    header:{
            width:screenwidth,
            height:50,
            paddingTop:10,
            paddingLeft:30,
            justifyContent:'center',
            alignSelf:'center',
            backgroundColor:'#009688',
            fontSize:22,
        },
    
    docs:{
        paddingTop:10,
        paddingLeft:10,
        

    },
    me:{
        alignSelf:'center',
        fontSize:16,
        fontWeight:'bold'

    },
    text:{
        paddingTop:5,
        marginLeft:10,
        marginRight:10,
        
        
    },
    img:{
        width:100,
        height:100,
        alignSelf:'center',
        borderWidth:5,
        borderRadius:100,
        borderColor:'cyan'        
    },
    body:{
        backgroundColor:'white',
        marginLeft:10,
        marginTop:10,
        marginRight:10,
        borderRadius:10,
        borderColor:'white'        
    },
    bodytext:{
        marginTop:10,
        backgroundColor:'white',
        borderRadius:10,
        marginLeft:10,
        marginRight:10,

    }
    

});
