import React from 'react';
import Button from '../components/Button';

const TopCollections = () => {
    return (
        <section className='relative'>
            <div className='absolute w-[407px] h-[613px] rounded-[613px] bg-[#2A3E84] top-0 left-0 blur-[175px]'></div>
            <div className='wrapper pt-[277px]'>
                <div className='flex items-center justify-center gap-x-[35px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="5" viewBox="0 0 150 5" fill="none">
                        <path d="M147.993 4.49999C148.821 4.50291 149.495 3.83372 149.498 3.00529C149.501 2.17687 148.832 1.50293 148.003 1.50001L147.993 4.49999ZM2.00529 0.984676L0.505302 0.979381L0.494713 3.97936L1.9947 3.98466L2.00529 0.984676ZM148.003 1.50001L2.00529 0.984676L1.9947 3.98466L147.993 4.49999L148.003 1.50001Z" fill="url(#paint0_linear_1_406)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_406" x1="148.497" y1="2.50164" x2="-1.47439" y2="1.9724" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="0.323702" stopColor="white" stopOpacity="0.981385" />
                                <stop offset="0.998351" stopColor="white" stopOpacity="0.286954" />
                                <stop offset="1" stopColor="white" stopOpacity="0.25" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <h1 className='font-font-Inter text-center text-[50px] font-bold'>Top Collections</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="151" height="4" viewBox="0 0 151 4" fill="none">
                        <path d="M2 0.5C1.17157 0.5 0.5 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5L2 0.5ZM149 3.5L150.5 3.5V0.5L149 0.5V3.5ZM2 3.5L149 3.5V0.5L2 0.5L2 3.5Z" fill="url(#paint0_linear_1_405)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_405" x1="1.5" y1="2.50011" x2="152.5" y2="2.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="0.323702" stopColor="white" stopOpacity="0.981385" />
                                <stop offset="0.998351" stopColor="white" stopOpacity="0.286954" />
                                <stop offset="1" stopColor="white" stopOpacity="0.25" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className='flex items-center gap-x-[52px] mt-[50px] -z-50'>
                    <Button className='bg-secondaryColor h-[60px] min-w-[150px] rounded-[25px] text-white text-[30px] font-font-Inter'>24H</Button>
                    <Button className='bg-primaryColor h-[60px] min-w-[150px] rounded-[25px] text-white text-[30px] font-font-Inter'>7D</Button>
                    <Button className='bg-primaryColor h-[60px] min-w-[150px] rounded-[25px] text-white text-[30px] font-font-Inter'>All Time</Button>
                </div>
                <table className='text-[30px] w-[100%] relative font-font-Inter'>
                    <thead>
                        <tr className='flex items-center mt-[65px]'>
                            <th className='left-0 absolute'>Collections</th>
                            <th className='absolute left-[705px]'>volume</th>
                            <th className='absolute left-[895px]'>Floor Price</th>
                            <th className='absolute right-0'>Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='flex items-center mt-[90px] my-[66px]'>
                            <td><div className='flex items-center'><p className='left-0 absolute text-secondaryColor'>1</p><img className='left-[31px] absolute' srcSet='./public/avt-top-collections.png 2x' /><p className='left-[106px] absolute'>Bored Ape Yacht Club</p><img className='absolute left-[502px]' srcSet='./public/icon-coins.png 2x' /></div></td>
                            <td className='absolute left-[639px]'><div className='flex items-end flex-col'><p>230.38 ETH</p><p className='text-greenColor'>+50.20%</p></div></td>
                            <td className='absolute left-[902px]'><div className='flex items-end flex-col'><p>12.38 ETH</p><p className='text-greenColor'>+50.20%</p></div></td>
                            <td className='absolute right-0'>138</td>
                        </tr>
                        <tr className='flex items-center mt-[90px] my-[66px]'>
                            <td><div className='flex items-center'><p className='left-0 absolute text-secondaryColor'>2</p><img className='left-[31px] absolute' srcSet='./public/avt-top-collections-one.png 2x' /><p className='left-[106px] absolute'>Mutant Ape Yacht Club</p><img className='absolute left-[502px]' srcSet='./public/icon-coins.png 2x' /></div></td>
                            <td className='absolute left-[639px]'><div className='flex items-end flex-col'><p>138.38 ETH</p><p className='text-greenColor'>+28.20%</p></div></td>
                            <td className='absolute left-[902px]'><div className='flex items-end flex-col'><p>76.38 ETH</p><p className='text-greenColor'>+70.10%</p></div></td>
                            <td className='absolute right-0'>122</td>
                        </tr>
                        <tr className='flex items-center mt-[90px] my-[66px]'>
                            <td><div className='flex items-center'><p className='left-0 absolute text-secondaryColor'>3</p><img className='left-[31px] absolute' srcSet='./public/avt-top-collections-two.png 2x' /><p className='left-[106px] absolute'>Otherdeed for Otherside
                            </p><img className='absolute left-[502px]' srcSet='./public/icon-coins.png 2x' /></div></td>
                            <td className='absolute left-[639px]'><div className='flex items-end flex-col'><p>80.18 ETH</p><p className='text-greenColor'>+50.20%</p></div></td>
                            <td className='absolute left-[902px]'><div className='flex items-end flex-col'><p>91.38 ETH</p><p className='text-redColor'>-32.20%</p></div></td>
                            <td className='absolute right-0'>192</td>
                        </tr>
                        <tr className='flex items-center mt-[90px] my-[66px]'>
                            <td><div className='flex items-center'><p className='left-0 absolute text-secondaryColor'>4</p><img className='left-[31px] absolute' srcSet='./public/avt-top-collections-four.png 2x' /><p className='left-[106px] absolute'>Pudgy Penguins
                            </p><img className='absolute left-[502px]' srcSet='./public/icon-coins.png 2x' /></div></td>
                            <td className='absolute left-[639px]'><div className='flex items-end flex-col'><p>291.38 ETH</p><p className='text-redColor'>-49.20%</p></div></td>
                            <td className='absolute left-[902px]'><div className='flex items-end flex-col'><p>61.38 ETH</p><p className='text-greenColor'>+60.20%</p></div></td>
                            <td className='absolute right-0'>22,000</td>
                        </tr>
                        <tr className='flex items-center mt-[90px] my-[66px]'>
                            <td><div className='flex items-center'><p className='left-0 absolute text-secondaryColor'>5</p><img className='left-[31px] absolute' srcSet='./public/avt-top-collections-five.png 2x' /><p className='left-[106px] absolute'>Quirkies Originals</p><img className='absolute left-[502px]' srcSet='./public/icon-coins.png 2x' /></div></td>
                            <td className='absolute left-[639px]'><div className='flex items-end flex-col'><p>81.38 ETH</p><p className='text-redColor'>-15.20%</p></div></td>
                            <td className='absolute left-[902px]'><div className='flex items-end flex-col'><p>23.12 ETH</p><p className='text-greenColor'>+50.20%</p></div></td>
                            <td className='absolute right-0'>2,321</td>
                        </tr>
                        <tr className='flex items-center mt-[90px] my-[66px]'>
                            <td><div className='flex items-center'><p className='left-0 absolute text-secondaryColor'>6</p><img className='left-[31px] absolute' srcSet='./public/avt-top-collections-three.png 2x' /><p className='left-[106px] absolute'>Doodle</p><img className='absolute left-[502px]' srcSet='./public/icon-coins.png 2x' /></div></td>
                            <td className='absolute left-[639px]'><div className='flex items-end flex-col'><p>340.21 ETH</p><p className='text-greenColor'>+50.20%</p></div></td>
                            <td className='absolute left-[902px]'><div className='flex items-end flex-col'><p>12.38 ETH</p><p className='text-redColor'>-21.10%</p></div></td>
                            <td className='absolute right-0'>2,721</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default TopCollections;