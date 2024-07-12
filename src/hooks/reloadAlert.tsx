/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

const reloadAlert = (message: string) => {
  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      event.preventDefault();
      event.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [message]);
};

export default reloadAlert;

/**
// src/hooks/useBeforeUnload.js
import { useEffect } from 'react';

const useBeforeUnload = (message) => {
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = message;
            return message;
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [message]);
};

export default useBeforeUnload;




 */
