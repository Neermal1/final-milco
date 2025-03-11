import { useEffect, useState } from "react";

import axiosInstance from "../utils/axiosInstance";

const useFetchData = (url: any) => {
  const [fetchedData, setFetchedData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(url);
      setFetchedData(response?.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return { fetchedData, loading, refetchData: getData };
};

export default useFetchData;
