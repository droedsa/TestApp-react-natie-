import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack'
import Gallery from "./src/components/gallery/gallery";
import {Provider} from "react-redux";
import store from "./src/redux/store";
import PhotoView from "./src/components/photoView";
import ErrorBoundry from "./src/components/error-boundry/error-boundry";

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <ErrorBoundry>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Gallery" component={Gallery}/>
                        <Stack.Screen name="photoView" component={PhotoView}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </ErrorBoundry>
        </Provider>
    );
}
