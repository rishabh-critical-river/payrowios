import React from 'react';

/**
 * Basic hook to use OTP interval
 * @param {number} interval - The interval in seconds
 */

const useOTPInterval = (interval: number = 0) => {
  const [timer, setTimer] = React.useState(interval); // Initial value of the timer in seconds

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const formattedTimer = React.useMemo(() => {
    return `${Math.floor(timer / 60)
      .toString()
      .padStart(2, '0')}:${(timer % 60).toString().padStart(2, '0')}`;
  }, [timer]);

  return { timer, setTimer, formattedTimer };
};

export default useOTPInterval;
