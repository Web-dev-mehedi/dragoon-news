import React from 'react';
import SocalLogin from '../SocalLogin';
import FindUs from './FindUs';

const RightComp = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold text-black py-8'>Login with</h1>
            <SocalLogin/>
            {/*  */}
            <FindUs/>
        </div>
    );
};

export default RightComp;