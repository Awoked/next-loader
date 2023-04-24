import React from 'react'
import useLoading from '@/components/hooks'
import Link from 'next/link';

const Layout = ({ children }) => {


    const isLoading = useLoading({ delay: 150 });

    return (
        <div>
            <div className={`fixed left-0 top-0 w-full h-full text-white bg-black z-50 grid place-content-center  ${isLoading ? "" : "transition-all duration-1000 opacity-0 invisible"}`}>
                {isLoading ? "Loading..." : "Loaded"}
            </div>
            <div className='flex justify-center gap-6 text-2xl font-bold'>
                <Link href={"/"}>index</Link>
                <Link href={"/page2"}>page2</Link>
            </div>
            {children}
        </div>
    )
}

export default Layout
