import React from 'react';
import {View, ActivityIndicator} from "react-native-web";


const Loader = () => {
    return (
        <View style={ {justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="grey"/>
        </View>
    );
};

export default Loader;