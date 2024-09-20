import React from 'react';
import Button from '../components/Button';

const NftStory = () => {
    return (
        <section className='mt-[150px] relative'>
            <div className=' wrapper flex gap-x-[167px]'>
                <img className='w-[480px] h-[640px]' srcSet='./public/avt-nft.png 2x'/>
                <div>
                    <h1 className='font-font-Inter font-bold text-[50px]'>NFT’s Story</h1>
                    <p className='mt-[30px] font-font-Inter font-normal text-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    <br/><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <Button className='bg-primary-gradient font-font-Inter h-[60px] min-w-[250px] mt-[50px]'>Learn more</Button>
                </div>
                <img className='absolute w-[488.695px] h-[645px] top-0 right-0' srcSet='./public/start-story.png 2x'/>
            </div>
        </section>
    );
};

export default NftStory;