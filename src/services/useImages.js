import { useState, useEffect } from "react";


const baseUrl = 'http://digital.provath.org/api/files/';

export default function useImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function init() {
      const response = await fetch(baseUrl);
      if (response.ok) {
        const json = await response.json();
        setImages(json);
      } else {
        throw response;
      }
    }
    init();
  }, []);
  return { images };
}
