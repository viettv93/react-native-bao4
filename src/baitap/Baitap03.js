import React, { useState, useRef } from "react"
import { Text, TouchableOpacity, View, Modal } from 'react-native'
import Modal1 from "../modal/Modal1"
import Modal3 from "./Modal3"
import Modal4 from "./Modal4"



const Baitap03 = () => {

    // const closeApp = () => {
    //     setVisibleModal2(false)
    // }
    // const openApp = () => {
    //     setVisibleModal2(true)
    // }
    // const [visibleModal2, setVisibleModal2] = useState(false)

    const modal1Ref = useRef(null);

    const openModal1 = () => {
        modal1Ref.current.showalert();
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'gray' }}>
            <TouchableOpacity style={{ backgroundColor: 'green', width: '40%', alignSelf: 'center', paddingVertical: 15, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => { openModal1() }}>
                <Text style={{ fontSize: 17, color: 'white' }}>nhấn mở 1</Text>
            </TouchableOpacity>

            <Modal1 ref={modal1Ref} />

            {/* <TouchableOpacity onPress={() => { openApp() }}
                style={{ borderRadius: 5, width: '100%', height: '10%', borderWidth: 1, justifyContent: 'center', backgroundColor: 'red' }}>
                <Text style={{ fontSize: 17, color: 'black' }}>Mở 2</Text>
            </TouchableOpacity>
            <Modal visible={visibleModal2}
                transparent={true}>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20, backgroundColor: 'rgba(242, 242, 242, 0.8)', borderRadius: 20 }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 17, color: 'black', marginTop: 50, fontWeight: '600' }}>A Short Title Is The Best</Text>
                        <Text style={{ fontSize: 13, color: 'black' }}>A messeage shoule be a short, </Text>
                        <Text style={{ fontSize: 13, color: 'black' }} >complete sentence. </Text></View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            style={{ width: '50%', height: '50%', marginTop: 30, borderTopWidth: 0.5, justifyContent: 'center', alignItems: 'center', padding: 5 }}
                            onPress={() => { closeApp() }}>
                            <Text style={{ color: '#007AFF', fontSize: 17, fontWeight: '400' }}>Action</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { closeApp() }}
                            style={{ width: '50%', height: '50%', marginTop: 30, borderTopWidth: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#007AFF', fontSize: 17, fontWeight: '600' }}>Action</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal3 />
            <Modal4 /> */}
        </View>

    )
}


export default Baitap03