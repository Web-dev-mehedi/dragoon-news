import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex justify-start items-center gap-4 bg-[#F3F3F3] p-4 mt-7'>
            <span className='bg-[#D72050] px-3 py-2 text-white font-medium text-xl'>Latest</span><span className='text-ellipsis'><Marquee pauseOnHover="true" speed={100} delay={1}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe provident magnam fuga a, possimus laborum dolor blanditiis dignissimos maxime!</Marquee></span>
        </div>
    );
};

export default BreakingNews;