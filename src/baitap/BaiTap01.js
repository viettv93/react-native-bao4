
import React from "react"
import { View, Text, TouchableOpacity, Image, TextInput , ScrollView} from "react-native"



const BaiTap01 = () => {
    return (
        <ScrollView contentContainerStyle={{alignItems: 'center'}} style={{ flex: 1 }}>
            <Image style={{ marginTop: 110 }}
                resizeMode='contain'
                source={require('./anhnguon/runer.png')} />
            <Text style={{ fontSize: 30, color: '#1E57F1', margin: 30 }}>SALLY</Text>
            <TextInput
                placeholder="Email"
                style={{ borderWidth: 1, fontSize: 18, padding: 15, margin: 15, borderColor: '#C7C7C7', width: '95%', marginTop: 20 }}>
            </TextInput>
            <View style={{ flexDirection: 'row', borderWidth: 1, justifyContent: 'center', alignItems: 'center', margin: 15, borderColor: '#C7C7C7' , width: '95%'}}>
                <TextInput placeholder="Password"
                    style={{ flex: 1, fontSize: 18, padding: 17 }}
                />
                <Image style={{ marginRight: 10 }}
                    resizeMode='contain'
                    source={require('./anhnguon/eye.png')}
                />
            </View>
            <TouchableOpacity style={{ backgroundColor: '#1E57F1', width: '95%', margin: 10, padding: 17, alignItems: 'center', marginTop: 20 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', width: '100%', marginTop: 20, justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, color: '#000000' }}>New to sally?</Text>
                <Text style={{ color: '#1E57F1', fontSize: 18 }}> Sign up</Text>
            </View>
        </ScrollView>
    )
}
export default BaiTap01