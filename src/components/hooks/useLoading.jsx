// @ts-nocheck
import Router from 'next/router';
import React, { useEffect, useState } from 'react'


const useLoading = (config = { delay: 0 }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleStart = () => {
            setIsLoading(true);
        };

        const handleComplete = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, config?.delay);
        };

        Router.events.on('routeChangeStart', handleStart);
        Router.events.on('routeChangeComplete', handleComplete);
        Router.events.on('routeChangeError', handleComplete);
        handleComplete();

        return () => {
            Router.events.off('routeChangeStart', handleStart);
            Router.events.off('routeChangeComplete', handleComplete);
            Router.events.off('routeChangeError', handleComplete);
        };
    }, []);

    return isLoading

}

export default useLoading
