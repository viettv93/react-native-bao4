import React from "react"
import { View, Text, ImageBackground, Image, Modal, TextInput, TouchableOpacity, ScrollView, Dimensions } from "react-native"
const { width, height } = Dimensions.get('screen');


const Baitap02 = () => {
    return (
        <ImageBackground style={{ flex: 1, }}
            source={require('./anhnen/photo.png')}
            resizeMode='stretch'
        >
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', flex: 1 }}>
                <View style={{ width, height: height * 0.9, alignItems: 'center' }}>
                    <Image style={{ marginTop: 150 }}
                        source={require('./anhnen/Dogdom.png')}
                        resizeMode='contain'
                    ></Image>
                    <TextInput placeholderTextColor={'white'}
                        placeholder=" + 86 v"
                        style={{ borderRadius: 20, width: '95%', backgroundColor: 'gray', fontSize: 17, marginTop: 30 }}
                    >
                    </TextInput>
                    <TouchableOpacity
                        style={{ backgroundColor: '#FA6650', borderRadius: 1, width: '95%', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 17, padding: 15,color: 'white' }}>Get Captcha
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flex: 1, width: '85%'}}>
                        <View style={{alignItems: 'baseline'}}>
                            <Text style={{ fontSize: 13, color: 'white', marginTop: 10, }}>Password to Login</Text></View>
                        
                        <View style={{ flex: 1 }} />
                        
                        <View style={{alignItems: 'center'}}>
                        <Text style={{ fontSize: 13, color: 'white' }}>By signing in you are agree to the User Agreement</Text>
                            <Text style={{ fontSize: 13, color: 'white' }}> and Privacy Term</Text></View>
                        
                    </View>
                </View>
            </ScrollView>

        </ImageBackground >


    )
}

export default Baitap02