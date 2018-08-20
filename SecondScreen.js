import React, {Component} from 'react';
import {View,Text,StyleSheet,Dimensions,Image,Linking,ScrollView} from 'react-native';
const screenwidth = Dimensions.get('window').width;

export default class SecondScreen extends Component {
    render() {
        return(
            <ScrollView>
            <View style= {styles.body}>
                <Text style={styles.header}>ABOUT ME</Text>
            
            <View style={styles.intro}>
                 <Image style={styles.img}            
                 source={require('./img/pp.jpeg')}/>
                 <Text style={{paddingTop:20,paddingLeft:10,fontSize:20,fontWeight:'bold'}}> Dipak Paswan</Text>

            </View>
            <View style={{backgroundColor:'white',height:300,marginTop:10,marginLeft:10,marginRight:10,borderRadius:10}}>
                       <Text style={{paddingLeft:10,fontWeight:'bold',paddingTop:10,fontSize:20}}>EXPERIENCES</Text>
                <View style={{paddingLeft:10,}}>
                        <Text style={{fontSize:16,fontWeight:'600',}}>Support Manager</Text>
                        <Text style={styles.comp}  onPress={()=> Linking.openURL('http://www.zeftware.com/')}>Zeftware Solutions Pvt.Ltd.</Text>
                        <Text> AUG 2017 - Present</Text>
                <View>
                    <Text style={{fontSize:16,fontWeight:'600',paddingTop:10}}>Business Development Manager</Text>
                    <Text>Orian Engineers LLC</Text>
                    <Text>AUG 2016-JAN 2017</Text>
                </View>
                <View>
                    <Text style={{fontSize:16,fontWeight:'600',paddingTop:10}}>Technical Recruiter</Text>
                    <Text>Horizon Consulting Inc</Text>
                    <Text>JUN 2015-JUL 2016</Text>
                </View>
                
                    
                </View>
                
                
            </View>
            <View style={{backgroundColor:'white',height:250,marginTop:10,marginLeft:10,marginRight:10,borderRadius:10}}><Text style={{paddingLeft:10,fontWeight:'bold',paddingTop:10,fontSize:20}}>EDUCATION</Text>
            <Text style={{fontSize:16,paddingLeft:10,fontWeight:'700'}}>School</Text>
            <Text style={{paddingLeft:10}}>Lord Buddha Higher Secondary Boarding School</Text>
            <Text style={{paddingLeft:10}}>Passed Year: 2066</Text>
            <Text style={{fontSize:16,paddingLeft:10,fontWeight:'700'}}>+2</Text>
            <Text style={{paddingLeft:10}}>Lord Buddha Higher Secondary Boarding School</Text>
            <Text style={{paddingLeft:10}}>Passed Year: 2069</Text>
            <Text style={{fontSize:16,paddingLeft:10,fontWeight:'700'}}>College</Text>
            <Text style={{paddingLeft:10}}>Alliance For Innovative Managemant and Social Studies (AIMS)</Text>
            <Text style={{paddingLeft:10}}>Passed Year: 2075</Text>
            </View>
            <View style={{backgroundColor:'white',height:250,marginTop:10,marginLeft:10,marginRight:10,borderRadius:10}}>
            <Text style={{paddingLeft:10,fontWeight:'bold',paddingTop:10,fontSize:20}}>SKILL SETS</Text>
            <Text style={{paddingLeft:10}}>Management</Text>
            <Text style={{paddingLeft:10}}>Core JAVA</Text>
            <Text style={{paddingLeft:10}}>Photoshop</Text>
            <Text style={{paddingLeft:10}}>Basic HTML</Text>
            <Text style={{paddingLeft:10}}>C,C++</Text>
            <Text style={{paddingLeft:10}}>React Native</Text>
            <Text style={{paddingLeft:10}}>Android Application Development </Text>
            <Text style={{paddingLeft:10}}>Ms Office</Text>

            
            </View>

               
            </View>
            </ScrollView>
            
        )
    }
};
const styles = StyleSheet.create({
    body:{
    flex:1, 
    backgroundColor:'#86e1ff'
    },
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
    intro:{
        backgroundColor:'white',
        flexDirection:'row',
        marginLeft:10,
        marginTop:10,
        marginRight:10,
        borderRadius:10
        

    },
    img:{
        height:50,
        width:50,
        borderRadius:100,
        borderWidth:2,
        borderColor:'cyan',
        marginTop:10,
        marginLeft:10,
        marginBottom:10

    },
    comp:{
        fontSize:16,
        color:'blue'

    }



});