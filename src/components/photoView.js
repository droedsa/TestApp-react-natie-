import React from 'react';
import {View} from "react-native";
import Image from "react-native-web/dist/exports/Image";

const PhotoView = ({route}) => {
    return (
        <View style={{flex: 1}}>
            <Image
                style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 5, borderRadius: 4}}
                source={{
                    uri: route.params.img
                }}>
            </Image>
        </View>
    );
};

export default PhotoView;