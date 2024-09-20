import React from 'react';

const getDataLinkFooter = [
    {
        title: "Explore",
        link: "#",
    },
    {
        title: "NFTs",
        link: "#",
    },
    {
        title: "Collectibles",
        link: "#",
    },
    {
        title: "Virtuallyreally",
        link: "#",
    },
];
const getDataLinkFooterCompany = [
    {
        title: "About Us",
        link: "#",
    },
    {
        title: "Support",
        link: "#",
    },
    {
        title: "Careers",
        link: "#",
    },
    {
        title: "Contact us",
        link: "#",
    },
];
const getDataLinkFooterResourses = [
    {
        title: "Partners",
        link: "#",
    },
    {
        title: "Blogs",
        link: "#",
    },
    {
        title: "Help Center",
        link: "#",
    },
    {
        title: "Live Action",
        link: "#",
    },
];


const Footer = () => {
    return (
        <footer className='bg-footer-texture pt-[140px] pb-[129px]'>
            <div className='wrapper font-font-Inter'>
                <h1 className='text-center text-[100px]'>NFT Marketplace </h1>
                <div className='mt-[104px] flex'>
                    <div className='inline-block mr-[202px]'>
                        <img className='' srcSet="./public/logo-footer.png 2x" />
                    </div>
                    <div className='flex flex-row'>
                        <div className='flex flex-row justify-between gap-x-[168px]'>
                            <div className=''>
                                <h2 className='text-[30px] font-bold'>Marketplace</h2>
                                <div className='inline-block ml-[30px]'>
                                    <ul className='mt-[50px] flex gap-y-[20px] flex-col'>
                                        {
                                            getDataLinkFooter.map((item) => (
                                                <li key={item.title}><a href={item.link}>{item.title}</a></li>
                                            )
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className=''>
                                <h2 className='text-[30px] font-bold'>Company</h2>
                                <div className='inline-block ml-[30px]'>
                                    <ul className='mt-[50px] flex gap-y-[20px] flex-col'>
                                        {
                                            getDataLinkFooterCompany.map((item) => (
                                                <li key={item.title}><a href={item.link}>{item.title}</a></li>
                                            )
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className=''>
                                <h2 className='text-[30px] font-bold'>Resourses</h2>
                                <div className='inline-block ml-[30px]'>
                                    <ul className='mt-[50px] flex gap-y-[20px] flex-col'>
                                        {
                                            getDataLinkFooterResourses.map((item) => (
                                                <li key={item.title}><a href={item.link}>{item.title}</a></li>
                                            )
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-end justify-center mt-[155px]'>
                    <div>
                        <p className='font-font-Inter text-[30px] font-bold'>Follow Us</p>
                    </div>
                    <div className='flex items-center mt-[28px] gap-x-[20px]'>
                    <span className='rounded-full bg-custom-gradient w-[50px] h-[50px]'></span>
                    <span className='rounded-full bg-[#261437] w-[50px] h-[50px]'></span>
                    <span className='rounded-full bg-[#261437] w-[50px] h-[50px]'></span>
                    </div>
        
                </div>
            </div>

        </footer>
    );
};

export default Footer;