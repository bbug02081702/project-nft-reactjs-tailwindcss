import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

const LiveAcutionUpdate = () => {
    useEffect(() => {
        // Khởi tạo Slick Slider sau khi DOM đã được render
        $('.slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true, 
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });

        return () => {
            $('.slider').slick('unslick'); // Dọn dẹp khi component bị gỡ bỏ
        };
    }, []);

    return (
        <section className='mt-[150px] relative'>
            <div className='absolute w-[407px] h-[613px] rounded-[613px] bg-[#2A3E84] top-0 left-0 blur-[175px] -z-6'></div>
            <div className='text-center w-full mx-[auto] font-font-Inter'>
                <h1 className='text-[50px] font-w-[500]'>Live Auction</h1>
                <p className='mt-[20px] w-[391px] mx-[auto]'>The largest and unique Super rare NFT marketplace for crypto-collectibles</p>
            </div>
            <div className='slider wrapper mt-[59.86px] z-10 flex items-center justify-center'>
                <div>
                    <img srcSet="./public/post-1.png 2x" alt="Post 1" />
                </div>
                <div>
                    <img srcSet="./public/post-2.png 2x" alt="Post 2" />
                </div>
                <div>
                    <img srcSet="./public/post-3.png 2x" alt="Post 3" />
                </div>
                <div>
                    <img srcSet="./public/post-1.png 2x" alt="Post 1" />
                </div>
                <div>
                    <img srcSet="./public/post-2.png 2x" alt="Post 2" />
                </div>
                <div>
                    <img srcSet="./public/post-3.png 2x" alt="Post 3" />
                </div>
            </div>
        </section>
    );
};

export default LiveAcutionUpdate;
