import React, { useState } from "react";
import { Fade } from "react-slideshow-image";

const Banner = () => {
  const [previousIndex, setPreviousIndex] = useState(null);
  const [nextIndex, setNextIndex] = useState(null);

  const style = {
    textAlign: "center",
    padding: "200px 0",
    fontSize: "30px"
  };

  const properties = {
    autoplay: true,
    indicators: true,
    onChange: (previous, next) => {
      setPreviousIndex(previous);
      setNextIndex(next);
    }
  };

  return (
    <div>
      <div>
        <Fade {...properties}>
          <div style={{...style, background: 'teal'}}>
            First Slide
          </div>
          <div style={{...style, background: 'orange'}}>
            Second Slide
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;