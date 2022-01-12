import React from "react";
import { ActivityIndicator } from "react-native";
import ViewContainer from "./ViewContainer";

const Loader = (): JSX.Element => (
    <ViewContainer>
        <ActivityIndicator size={"large"} />
    </ViewContainer>
)

export default Loader;