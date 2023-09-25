import axios from "axios";
import { useEffect, useState } from "react";

const useWeatherData = (lat: number, long: number) => {
  let data;
  useEffect(() => {
    if (lat && long) {
      handleGetLocalData(lat, long);
    }
  }, [lat, long]);

  const handleGetLocalData = async (lat: number, long: number) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6b3f292b6b7dfb3fa6bae156d324af6e`
      );
      data = res.data;
    } catch (error) {
      console.log({ error });
    }
  };

  return data;
};
