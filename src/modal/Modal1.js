import React, { forwardRef, useImperativeHandle, useState } from "react"
import { Text, TouchableOpacity, View, Modal } from 'react-native'

const Modal1 = (props, ref) => {

    useImperativeHandle(ref, () => ({
        openModal: () => {
            setVisible(true);
        },
        showalert: showAlert
    }));

    const showAlert = () => {
        alert('dagshdfsaghdfsah')
    }

    const [visible, setVisible] = useState(false)

    return (
        <Modal visible={visible}
            transparent={true}>
            <View style={{ borderWidth: 1, justifyContent: 'center', alignItems: 'center', margin: 20, backgroundColor: 'rgba(242, 242, 242, 0.8)', borderRadius: 20, height: '30%' }}>
                <Text style={{ fontSize: 17, color: 'black', marginTop: 50, fontWeight: '600' }}>A Short Title Is The Best</Text>
                <Text style={{ fontSize: 13, color: 'black', fontWeight: '400' }}>A messeage shoule be a short, </Text>
                <Text style={{ fontSize: 13, color: 'black', fontWeight: '400' }} >complete sentence. </Text>
                <View style={{ flex: 1 }}></View>
                <TouchableOpacity
                    onPress={() => {
                        setVisible(false)
                    }}
                    style={{ borderRadius: 5, width: '100%', marginTop: 20, height: '30%', borderTopWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#007AFF', fontSize: 17 }}>Default button</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default forwardRef(Modal1)

