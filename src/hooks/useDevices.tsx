import * as React from 'react';
import { useState, useEffect } from 'react';

function useDevices() {
  const [devices, setDevices] = useState([]);

  const getData = async () => {
    try {
      const items = await fetch('/api/v1/devices', {
        method: 'GET',
      }).then((res) => res.json());
      setDevices(items.devices);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(devices);
  return devices;
}

export default useDevices;
