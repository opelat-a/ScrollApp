import React from "react";
import Svg, { Path } from "react-native-svg";

function Icon({ color }: { color?: string }) {
    return (
        <Svg width="40" height="50" viewBox="0 0 51.79 62.12">
            <Path d="M1.62,37.32a1.41,1.41,0,0,1,.11-.57,1.49,1.49,0,0,1,1.39-.93H16.64V2.6a1.5,1.5,0,0,1,1.5-1.5H36.89a1.5,1.5,0,0,1,1.5,1.5V35.82H51.91A1.5,1.5,0,0,1,53,38.38l-24.4,24.4a1.51,1.51,0,0,1-2.12,0L2.06,38.38A1.49,1.49,0,0,1,1.62,37.32Zm18-33.22V37.32a1.5,1.5,0,0,1-1.5,1.5H6.74L27.51,59.59,48.29,38.82H36.89a1.5,1.5,0,0,1-1.5-1.5V4.1Z" transform="translate(-1.62 -1.1)" fill={color || 'black'} />
        </Svg>
    );
}

export default Icon;