import React from "react"
import { View, TouchableOpacity, Modal, Text } from "react-native"
import { useState } from "react/cjs/react.development"

const Modal3 = () => {
    const [visible, setVisibleModal2] = useState(false)
    const close2 = () => {
        setVisibleModal2(false)
    }
    const open2 = () => {
        setVisibleModal2(true)
    }
    return (
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => { open2() }}
                style={{ borderRadius: 5, borderWidth: 1, justifyContent: 'center', backgroundColor: 'red',width:'100%', height:'50%' }}>
                <Text style={{ fontSize: 17, color: 'black' }}>Mở 3</Text>
            </TouchableOpacity>
            <Modal visible={visible}
                transparent={true}>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10, backgroundColor: 'rgba(242, 242, 242, 0.8)', borderRadius: 20,height: '60%' }}>
                    <View style={{ flex: 2, alignItems:'center'}}>
                        <Text style={{ fontSize: 17, color: 'black', marginTop: 50, fontWeight: '600' }}>A Short Title Is The Best</Text>
                        <Text style={{ fontSize: 13, color: 'black' , alignItems:'center', fontWeight:'400'}}>A messeage shoule be a short, </Text>
                        <Text style={{ fontSize: 13, color: 'black', alignItems:'center', fontWeight:'400' }} >complete sentence . </Text></View>
                    <TouchableOpacity
                        style={{  borderTopWidth: 0.5, justifyContent: 'center', alignItems: 'center', padding: 1, flex: 1, width:'100%' }}
                        onPress={() => { close2() }}>
                        <Text style={{ color: '#007AFF', fontSize: 17, fontWeight: '600' }}>Default Button</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { close2() }}
                        style={{  borderTopWidth: 0.5, justifyContent: 'center', alignItems: 'center', padding:1, flex:1, width:'100%' }}>
                        <Text style={{ color: '#007AFF', fontSize: 17, fontWeight: '400' }}>Default Button</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ borderTopWidth: 0.5, justifyContent: 'center', alignItems: 'center', padding: 1 , flex:1, width:'100%'}}
                        onPress={() => { close2() }}>
                        <Text style={{ color: '#007AFF', fontSize: 17, fontWeight: '400' }}>Default Button</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            </View>


    )
}

export default Modal3