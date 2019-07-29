import React, { Component } from "react";
import { Text, View, Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

import Location from "../screen/Location";

export default createStackNavigator({
  Location: Location
});
