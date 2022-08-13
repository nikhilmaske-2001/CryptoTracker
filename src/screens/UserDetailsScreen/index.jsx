import React, { useState } from "react";
import { Text, View } from "react-native";
import LoginScreen from "../LoginScreen";

const UserDetailsScreen = () => {
  const [user, setUser] = useState(false);

  if (!user) {
    return <LoginScreen />;
  }
  return (
    <View>
      <Text style={{ color: "white" }}>User Details Screen</Text>
    </View>
  );
};

export default UserDetailsScreen;
