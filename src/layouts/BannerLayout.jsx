import React from 'react';
import Button from '../components/Button';

<<<<<<< HEAD
const totalBannerData = [
    {
        total: 26,
        name: "Artwork",
    },
    {
        total: 18,
        name: "Aucation",
    },
    {
        total: 8,
        name: "Artist",
    },
];
const BannerLayout = () => {
    return (
        <section className='pt-[100px] relative'>
            <div className='absolute w-[412px] h-[412px] rounded-full bg-[#2A3E84] top-0 right-0 blur-[175px]'></div>
            <div className='absolute w-[412px] h-[412px] rounded-full bg-[#2A3E84] top-0 left-0 blur-[175px]'></div>
            <div className="wrapper mt-[229px] flex gap-x-[164px] items-end h-[624px]">
                <div className="max-w-[738px] w-full">
                    <h1 className='text-[100px] font-bold leading-normal'>
                        Discover <br /> Collect and <br />
                        Sell NFT.
                    </h1>
                    <p className='text-[30px] mt-[50px] font-font-Inter'>Explore on the world’s best largest NFT marketplace</p>
                    <Button className='bg-primary-gradient font-font-Inter h-[60px] min-w-[250px] mt-[50px]'>Explore</Button>
                    <ul className='mt-[50px] flex item-center gap-x-[50px]'>
                        {totalBannerData.map((item) => (
                            <li key={item.name}>
                                <div className='text-[50px] font-font-Inter'>{item.total}K+</div>
                                <div className='text-xl font-medium text-center'>{item.name}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1">
                    <div className='relative isolate'>
                        <svg className='absolute -z-[12] top-[-82px]' xmlns="http://www.w3.org/2000/svg" width="687" height="556" viewBox="0 0 687 556" fill="none">
                            <path d="M16.8814 3.55766C24.5568 12.0157 54.2481 25.262 111.611 10.5826C183.314 -7.76674 269.242 1.06659 232.456 82.8427C195.671 164.619 -53.1384 355.54 14.8974 450.298C82.9332 545.056 441.743 359.354 612.038 398.503C715.305 416.143 681.351 537.262 669.956 554.6" stroke="url(#paint0_linear_1_90)" strokeOpacity="0.7" strokeWidth="5" />
                            <defs>
                                <linearGradient id="paint0_linear_1_90" x1="342.789" y1="-76.6604" x2="214.292" y2="800.048" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#15BFFD" />
                                    <stop offset="1" stopColor="#9C37FD" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <img className='z-50 absolute top-[-224px] left-[290.98px]' srcSet="./public/start-banner.png 2x" />
                        <img className='z-50' srcSet="./public/Right-Side-standard.png 2x" />
                    </div>
=======
const BannerLayout = () => {
    return (
        <section className='pt-[100px]'>
            <div className="wrapper mt-[229px] flex gap-x-[164px]">
                <div className="max-w-[738px] w-full">
                    <h1 className='text-[100px] font-bold'>
                    Discover <br /> Collect and <br />
                    Sell NFT.
                    </h1>
                    <p className='text-[30px] mt-[50px]'>Explore on the world’s best largest NFT marketplace</p>
                    <Button className='bg-primary-gradient h-[60px]'>Explore</Button>
                </div>
                <div className="flex-1">
                    Image Banner
>>>>>>> eeec9f863e801b93a1f85ccd1803c2b02c10b5d7
                </div>
            </div>
        </section>
    );
};

export default BannerLayout;