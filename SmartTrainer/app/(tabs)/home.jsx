import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Home/header'
import Slider from '../../components/Home/slider'

export default function home() {
    return (
        <View style={{
            padding:20,
            marginTop:20
        }}>
            {/*Header*/}
            <Header />
            {/*Slider*/}
            <Slider />
            {/*Category*/}

            {/*List of exercises*/}

            {/*Update info*/}

        </View>
    )
}