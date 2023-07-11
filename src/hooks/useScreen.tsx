import { useEffect, useState } from 'react';

function useScreen() {
  const [windowSize, setWindowSize] = useState(-1);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return [windowSize];
}

export default useScreen;
