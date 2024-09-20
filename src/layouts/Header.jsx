import React from 'react';
import Button from '../components/Button';
import Walleticon from '../components/icons/Walleticon';

const navMenuDate = [
    {
        title: "Home",
        link: "#",
    },
    {
        title: "Explore",
        link: "#",
    },
    {
        title: "Products",
        link: "#",
    },
    {
        title: "Activity",
        link: "#",
    },
    {
        title: "Elements",
        link: "#",
    },
];
const Header = () => {
    return (
<<<<<<< HEAD
        <header className='h-[100px] fixed top-0 left-0 right-0 bg-bg-header z-40'>
=======
        <header className='h-[100px] fixed top-0 left-0 right-0 bg-[rgba(0,0,0.1)]'>
>>>>>>> eeec9f863e801b93a1f85ccd1803c2b02c10b5d7
            <div className="wrapper flex justify-between items-center h-full">
                <a href='/'>
                    <img srcSet="./public/logo.png 2x" alt="" />
                </a>
                <div className='flex items-center gap-x-[59px]'>
                    <ul className='flex items-center gap-x-[30px]'>
                        {navMenuDate.map((item) => (
                            <li key={item.title}>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                    <Button className='bg-primaryColor text-[25px]' link='/' style={{height: '50px'}}>{""} <Walleticon></Walleticon> Wallet</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;