import React, { FC } from 'react';
import animationPANDAWALLETRLogoData from './TonkeeperLogo.json';
import { Lottie } from './Lottie';

const defaultPANDAWALLETRLogoOptions = {
    autoplay: true,
    animationData: animationPANDAWALLETRLogoData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const PANDAWALLETRLogoLottieIcon: FC<{
    width: string;
    height: string;
    loop: boolean;
}> = ({ width, height, loop }) => {
    return <Lottie {...{ ...defaultPANDAWALLETRLogoOptions, loop }} height={height} width={width} />;
};

const PANDAWALLETRIcon: FC<{
    width?: string;
    height?: string;
    loop?: boolean;
}> = ({ width = '128', height = '128', loop = false }) => {
    return <PANDAWALLETRLogoLottieIcon width={width} height={height} loop={loop} />;
};

export default PANDAWALLETRIcon;
