import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [isLoding , setIsLoading] = useState(false)
    const [locationInfo, setLocationInfo] = useState({
      lat: "",
      long: ""
    })
const handleRequestPe
  useEffect(()=>{

  })

const handleGetLocalData= async()=>{
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${locationInfo.lat}&lon=${locationInfo}&appid=${process.env.APIKEY}`
      );
    } catch (error) {
        
    }
    
}

  return <View style={style.container}>
    Home
  </View>;
}

const style = StyleSheet({
  container: {
    flex: 1,
  },
});
