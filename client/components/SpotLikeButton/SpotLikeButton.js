import React from 'react';
import {SpotLike, SpotLikeImage} from "../SpotItem/styles";

const SpotLikeButton = () => {

    return (
        <div>
          <SpotLikeImage src={'https://cdn-icons-png.flaticon.com/512/833/833300.png'}/>
          <SpotLike>{like}</SpotLike>
        </div>
    );
};

export default SpotLikeButton;