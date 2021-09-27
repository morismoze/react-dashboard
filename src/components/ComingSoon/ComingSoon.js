import React from 'react';

import Lottie from 'react-lottie';

import comingSoonAnimation from '../../modules/lottie/coming-soon.json';

const ComingSoon = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: comingSoonAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </div>
    );
};

export default ComingSoon;