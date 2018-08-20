import React, {Component} from 'react';
import {View,Text,StyleSheet,Dimensions,Linking,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const screenwidth = Dimensions.get('window').width;

export default class ThirdScreen extends Component {
    render() {
        return(
            <View style={styles.main}>
              <Text style={styles.header}>CONTACT</Text>
                 <View style= {{backgroundColor:'white',borderRadius:5,marginTop:30,marginLeft:10,marginRight:10}}>
                    <Text style={styles.doc}><Ionicons name ="ios-home" color={'#000000'} size={24}/>  Biratnagar:7,Kaselya Marga,Morang, Nepal</Text>
                    <Text style={styles.doc}><Ionicons name ="ios-call" color={'#000000'} size={24}/>  +977-9802784755,9842411564</Text>
                    <Text style={styles.doc}><Ionicons name ="ios-mail" color={'#000000'} size={24}/>  dipakdaspaswan@gmail.com</Text>
            </View>
        <View>
               <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Social Media</Text></View>
            <View style = {styles.social}>
            <View style={styles.icon}>
                 <Entypo  name="facebook" color={'#4267b2'} size={26} style={{padding:10}} 
                  onPress={()=> Linking.openURL('https://www.facebook.com/dipak.dolphin')}/>
                  <Entypo  name="linkedin" color={'#0077B5'} size={26} style={{padding:10}}
                  onPress={()=> Linking.openURL('https://www.linkedin.com/in/dipak-paswan-7703b8ba/')}/>
                  <Image  style={styles.gmail}source={require('./img/gmail.png')}
                   onPress={()=> Linking.openURL('mailto:dipakdaspaswan@gmail.com?subject=&body=')}/>
            </View>
                </View>
            </View>

        )
    }
};
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#86e1ff'

    },
     header:{
        width:screenwidth,
        height:50,
        paddingTop:10,
        paddingLeft:20,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'#009688',
        fontSize:22,
    },
    doc:{
        paddingLeft:10,
        paddingRight:10,
    },
    social:{
        marginLeft:40,
        marginRight:10,
        backgroundColor:"white",
        height:80,
        borderRadius:5,
        
        alignSelf:'center',
        width:screenwidth,
        alignItems:'center',
    },
    icon:{
        alignItems:'center',
        
        flexDirection:'row',
        paddingTop:20,
        },
        gmail:{
           height:26,
           width:26,
           padding:15
        }

    
    

});