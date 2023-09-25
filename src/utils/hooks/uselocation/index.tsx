import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
export const useLocation = () => {
  const [status, setStatus] = useState(false);
  const [locationInfo, setLocationInfo] = useState({
    lat: 0,
    long: 0,
  });
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      let { status: permissionStatus } =
        await Location.requestForegroundPermissionsAsync();
      if (permissionStatus !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocationInfo({
        lat: coords.latitude,
        long: coords.longitude,
      });
    })();
  }, []);
  return { status, locationInfo };
};
