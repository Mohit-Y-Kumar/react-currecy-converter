import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!baseCurrency) return;

    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res[baseCurrency]); 
      })
      .catch((err) => {
        console.error("Currency API error:", err);
      });
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
