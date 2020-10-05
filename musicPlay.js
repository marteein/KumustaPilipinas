import { Audio } from "expo-av";
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, NativeModules } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class musicPlay extends Component {


    async handlePress() {
        try {
            const { sound: soundObject, status } = await
                Audio.Sound.createAsync('ang_sarap.mp3', { shouldPlay: true });
            await soundObject.playAsync();
        } catch (error) { console.log(error); }
    }

    render() {

        return (
            <TouchableOpacity onPress={this.handlePress.bind(this)}>
                <View>

                    <View>
                        <Text>Start</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
module.exports = musicPlay;