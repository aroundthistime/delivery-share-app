import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components";
import { Text } from "react-native";

/**
 * TODO *
 * 1. function modularzation 필요 (개당 1 기능 담당하도록)
 */

const NavigationButton = ({
  disabled,
  bgColor,
  navigation,
  flaticon,
  params,
  text,
  background,
}) => {
  const setVectorIcons = (flaticon) => {
    const config = {
      size: 24,
      color: bgColor ? "#fff" : "#111",
      style: { marginRight: 10 },
    };
    if (flaticon.type === "Ionicons")
      return <Ionicons name={flaticon.name} {...config} />;
    else if (flaticon.type === "MaterialCommunityIcons")
      return <MaterialCommunityIcons name={flaticon.name} {...config} />;
  };

  const setButtonContent = (background) => {
    const styles = background
      ? {
          style: { color: "#fff", fontWeight: "bold", fontSize: 22 },
        }
      : { style: { color: bgColor ? "#fff" : "#111" } };
    return (
      <>
        {flaticon ? setVectorIcons(flaticon) : null}
        <Text {...styles}>{text}</Text>
      </>
    );
  };

  return background ? (
    <ButtonBackground
      disabled={disabled}
      background={background}
      onPress={() => navigation.navigate(...params)}
    >
      {setButtonContent(background)}
    </ButtonBackground>
  ) : (
    <NavigatinoBtn
      bgColor={bgColor}
      disabled={disabled}
      onPress={() => navigation.navigate(...params)}
    >
      {setButtonContent(background)}
    </NavigatinoBtn>
  );
};

export default NavigationButton;

const NavigatinoBtn = styled.TouchableOpacity`
  flex-direction: row;
  border: ${({ bgColor }) => (bgColor ? "none" : "1px solid #adadad")};
  border-radius: 10px;
  padding: 10px 15px;
  width: 45%;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
`;

const ButtonBackground = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px 0;
  margin-bottom: 20px;
  background-color: ${({ background }) => (background ? background : "#fff")};
`;
