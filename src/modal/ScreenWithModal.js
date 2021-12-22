import React, { useState } from "react"
import { Image, Modal, Text, TouchableOpacity, View } from "react-native"

const ScreenWithModal = () => {

    const [visibleModal, setVisibleModal] = useState(true);

    const closeModal = () => {
        setVisibleModal(false)
    }

    const openModal = () => {
        setVisibleModal(true)
    }

    return (
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>

            <TouchableOpacity onPress={openModal} style={{backgroundColor: 'yellow', width: '90%', padding: 17}}>
                <Text>OPEN MODAL</Text>
            </TouchableOpacity>

            <Modal transparent={true} visible={visibleModal}>

                <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <Image source={require('../baitap/anhnguon/runer.png')}/>
                    <TouchableOpacity 
                        onPress={closeModal}
                        style={{backgroundColor: 'red', padding: 18, }}>
                        <Text>CLOSE</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default ScreenWithModal