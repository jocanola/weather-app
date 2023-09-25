import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "../../utils/hooks/uselocation";
import WeatherCard from "../../component/weather-info-card";

export const Home = () => {
  const [isLoding, setIsLoading] = useState(false);
  const { locationInfo } = useLocation();

  return (
    <View style={style.container}>
      <WeatherCard />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
