import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home/home";
import Counter from "../screens/counter/counter";



const Stack = createNativeStackNavigator();



function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
                <Stack.Screen name='Counter' component={Counter} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AppNavigator;
