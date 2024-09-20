import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className='flex items-center w-full h-[528px] bg-[rgba(255, 255, 255, 0.04)] backdrop-blur-[5.5px] relative mt-[154px]'>
            <div className='flex items-center gap-x-[142px]'>
                <img className='' srcSet="./public/avt-why-choose.png 2x" />
                <div className='font-font-Inter w-[541px]'>
                    <h1 className='text-[50px]'>Why choose us?</h1>
                    <p className='mt-[30px]'>Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. Eros suspendisse varius enim ultrices  isque et quis ctumst. Feugiat amet velit faucibus amet
                        <br /><br />Eu feugiat adipiscing viverrfeugiat. Mollis tellus malesuada massa amet lacinia aliquamid ultrices vitae.
                    </p>
                </div>
            </div>
            <img className='absolute mr-[171px] mt-[102.32px] ml-[1330.57px] mb-[405.06px]' srcSet="./public/socials.png 2x" />
        </section>
    );
};

export default WhyChooseUs;