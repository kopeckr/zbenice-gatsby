import React, { useState } from 'react';
import Arrow from '../../svg/arrow.svg';

const ScrollToTopBtn = () => {

  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 20){
      setVisible(true)
    } 
    else if (scrolled <= 20){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
    });
  };

  window.addEventListener('scroll', toggleVisible);
    
  return (
    <>
    <button className="scroll__btn" onClick={scrollToTop}
    style={{display: visible ? 'block' : 'none'}}>
      <Arrow />
    </button>
    </>
  );
}

export default ScrollToTopBtn;