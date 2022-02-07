import { useState, useEffect } from 'react';
import { Device } from 'interfaces/interfaces';

function useDevices() {
  const [data, setData] = useState<Device[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('/api/v1/devices', {
          method: 'GET',
        });
        const data: Device[] = await response.json();
        setData(data);
      } catch (e) {
        setError(true);
      }
    };

    const fetchInterval = setInterval(() => {
      getData();
    }, 60 * 1000);

    getData();
    return () => {
      clearInterval(fetchInterval);
    };
  }, []);

  return { data, error };
}

export default useDevices;
