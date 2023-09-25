import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { weatherStyles } from "./weather-styles";
export default function WeatherCard() {
  return (
    <View style={weatherStyles.container}>
      {/* <Text style={weatherStyles.heading}>Weather</Text> */}

      {/* <View style={weatherStyles.searchForm}>
        <TextInput style={weatherStyles.input} placeholder="Search" />
        <TouchableOpacity style={weatherStyles.button}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View> */}

      <View style={weatherStyles.info}>
        <Text style={weatherStyles.subHeading}>Sub-heading</Text>
        <View style={weatherStyles.date}>
          <Text>Date</Text>
        </View>
      </View>

      <Text style={weatherStyles.location}>Location</Text>

      <View style={weatherStyles.forecastInfo}>
        {/* <Text style={weatherStyles.forecastIcon}>Icon</Text> */}
        <View style={weatherStyles.forecastValue}>
          <View style={weatherStyles.degreesCount}>
            <Text style={weatherStyles.degrees}>main.temp</Text>
            <View style={weatherStyles.circle}></View>
          </View>
        </View>
      </View>
      <Text style={weatherStyles.weatherCondition}>weather[0].main</Text>
      <View>
        <Text style={weatherStyles.listItem}>List Item 1</Text>
        <Text style={weatherStyles.listItem}>List Item 2</Text>
      </View>
      <Text style={weatherStyles.helperText}>Helper Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
