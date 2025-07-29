import { useEffect, useRef, useCallback } from 'react';

const useIdleTimer = ({ onIdle, idleTime = 600000 }) => { // 10 minutes default
  const timeoutRef = useRef(null);
  const isIdleRef = useRef(false);

  const resetTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    isIdleRef.current = false;
    
    timeoutRef.current = setTimeout(() => {
      if (!isIdleRef.current) {
        isIdleRef.current = true;
        onIdle();
      }
    }, idleTime);
  }, [onIdle, idleTime]);

  useEffect(() => {
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    // Set initial timer
    resetTimer();
    
    // Add event listeners
    events.forEach(event => {
      window.addEventListener(event, resetTimer, true);
    });

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      events.forEach(event => {
        window.removeEventListener(event, resetTimer, true);
      });
    };
  }, [resetTimer]);

  return { resetTimer };
};

export default useIdleTimer;