import { useEffect, useState } from "react";

function useDelay(value, delay) {
  const [delayResult, setDelayResult] = useState(value);

  useEffect(() => {
    const handler = setTimeout(setDelayResult(value), delay);
    return clearTimeout(handler);
  }, [value, delay]);

  return delayResult;
}

export default useDelay;
