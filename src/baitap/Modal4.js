import React, { useState } from "react"
import { View, TouchableOpacity, Modal, Text, TextInput ,} from "react-native"


const Modal4 = () => {
    const [visibleModal1, setVisibleModal1] = useState(false)
    const close = () => {
        setVisibleModal1(false)
    }
    const open = () => {
        setVisibleModal1(true)
    }
    return (
        <View style={{ flex: 1}}>
            <TouchableOpacity onPress={() => { open() }}
                style={{ borderRadius: 5, width: '100%', height: '50%', borderWidth: 1, justifyContent: 'center', backgroundColor: 'blue' }}>
                <Text style={{ fontSize: 17, color: 'white' }}>Mở 4</Text>
            </TouchableOpacity>
            <Modal visible={visibleModal1}
                transparent={true}>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20, backgroundColor: 'rgba(242, 242, 242, 0.8)', borderRadius: 20, height:'40%' }}>
                    <View style={{ flex: 3 , alignItems: 'center'}}>
                        <Text style={{ fontSize: 17, color: 'black', marginTop: 50, fontWeight: '600' }}>A Short Title Is The Best</Text>
                        <Text style={{ fontSize: 13, color: 'black', alignItems: 'center', fontWeight: '400' }}>A messeage shoule be a short, </Text>
                        <Text style={{ fontSize: 13, color: 'black', alignItems: 'center', fontWeight: '400' }} >complete sentence. </Text></View>
                    <TextInput placeholder="Placeholder"
                    style={{ borderWidth: 1, borderRadius: 20, marginTop: 40 ,width: '80%', backgroundColor:'white'}}></TextInput>
                    <View style={{ flexDirection: 'row',height:'30%' }}>
                        <TouchableOpacity
                            style={{ width: '50%', height: '70%', marginTop: 30, borderTopWidth: 0.5, justifyContent: 'center', alignItems: 'center', padding: 5 }}
                            onPress={() => { close() }}>
                            <Text style={{ color: '#007AFF', fontSize: 17 , fontWeight: '600'}}>Action</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { close() }}
                            style={{ width: '50%', height: '70%', marginTop: 30, borderTopWidth: 0.5, borderLeftWidth: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#007AFF', fontSize: 17 , fontWeight: '600'}}>Action</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>

    )
}

export default Modal4