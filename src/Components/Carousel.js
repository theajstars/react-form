import React from 'react'
import 'keen-slider/keen-slider.min.css'
import '../Assets/css/carousel.css'
import crypto from '../Assets/img/slide/crypto.jpg'
import crm from '../Assets/img/slide/crm.jpg'
import deep from '../Assets/img/slide/deep.jpg'
import seo from '../Assets/img/slide/seo.jpg'
import {useKeenSlider} from 'keen-slider/react'
import { Container } from '@material-ui/core'

function Carousel() {
    const [pause, setPause] = React.useState(false)
    const timer = React.useRef()
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        duration: 1600,
        dragStart: () => {
          setPause(true)
        },
        dragEnd: () => {
          setPause(false)
        },
      })

      React.useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
          setPause(true)
        })
        sliderRef.current.addEventListener("mouseout", () => {
          setPause(false)
        })
      }, [sliderRef])
    
      React.useEffect(() => {
        timer.current = setInterval(() => {
          if (!pause && slider) {
            slider.next()
          }
        }, 3000)
        return () => {
          clearInterval(timer.current)
        }
      }, [pause, slider])
    

    return (
        <div className="slide-show" style={{ 'marginBottom': '50px' }}>
            <Container maxWidth="md" className="slide-show">
                <center>
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide number-slide1">
                            <img className="slide-imangi" src={crypto} alt="" />
                        </div>
                        <div className="keen-slider__slide number-slide2">
                            <img className="slide-imangi" src={crm} alt="" />
                        </div>
                        <div className="keen-slider__slide number-slide3">
                            <img className="slide-imangi" src={deep} alt="" />
                        </div>
                        <div className="keen-slider__slide number-slide4">
                            <img className="slide-imangi" src={seo} alt="" />

                        </div>
                    </div>
                </center>
            </Container>
        </div>
    )
}

export default Carousel
