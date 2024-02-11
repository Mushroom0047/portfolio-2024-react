import lottie from 'lottie-web';
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';


const LottieAnim = ( {animationData} ) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
          });
      
      return () => {
        anim.destroy();
      }
    }, [animationData]);
    
  return (
    <div ref={containerRef} />
  )
}

LottieAnim.propTypes = {
    animationData: PropTypes.object.isRequired,
  };

export default LottieAnim