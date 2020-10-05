import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, NativeModules } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default class helpSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('./assets/pictures/tutorial/lesson3.png'),
                require('./assets/pictures/tutorial/choose1.png'),
                require('./assets/pictures/tutorial/play1.png'),
                require('./assets/pictures/tutorial/assess3.png'),
                require('./assets/pictures/tutorial/quiz1.png'),
            ]
        };
    }
    render() {
        return (
            <View>
                <SliderBox images={this.state.images} sliderBoxHeight={'90%'} />
            </View>
        );
    }
}
module.exports = helpSlider;