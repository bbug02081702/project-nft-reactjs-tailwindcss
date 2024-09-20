import React from 'react';

const LiveAcution = () => {
    return (
        <section className='mt-[150px] relative'>
            <div className='absolute w-[407px] h-[613px] rounded-[613px] bg-[#2A3E84] top-0 left-0 blur-[175px] -z-6'></div>
            <div className='text-center w-full mx-[auto] font-font-Inter'>
                <h1 className='text-[50px] font-w-[500]'>Live Acution</h1>
                <p className='mt-[20px] w-[391px] mx-[auto]'>The largest and unique Super rare NFT marketplace
                    For crypto-collectibles</p>
            </div>
            <div className='wrapper flex items-center justify-center gap-x-[30px] mt-[59.86px] z-10'>
                <img className='z-10' srcSet="./public/post-1.png 2x" />
                <img srcSet="./public/post-2.png 2x" />
                <img srcSet="./public/post-3.png 2x" />
            </div>
        </section>
    );
};

export default LiveAcution;