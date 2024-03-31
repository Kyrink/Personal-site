import React, { memo } from 'react';
import Spline from '@splinetool/react-spline';

const SplineBackground = memo(({ sceneUrl }) => {
    return <Spline className="z-0 absolute" scene={sceneUrl} />;
});

export default SplineBackground;
