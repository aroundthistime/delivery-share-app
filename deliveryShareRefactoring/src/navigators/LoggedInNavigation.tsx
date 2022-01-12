import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import ViewContainer from "../components/ViewContainer";

const Stack = createStackNavigator();

const LoggedInNavigation = ({ navigation, route }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="TabNavigation"
            component={() => <ViewContainer><Text>HI</Text></ViewContainer>}
        />
    </Stack.Navigator>
)

export default LoggedInNavigation;