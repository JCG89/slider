import React from 'react'
import { useState } from 'react'
import dataSlider from '../dataSlider'
import './Slider.css'
import BtnSlider from './BtnSlider'

export default function Slider() {
      /** Je défini le hook pour les slides */
      const [slideAnim, setSlideAnim] = useState({

            index: 1,
            inProgress: false
      })
      const nextSlide = () => {
            if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {

                  setSlideAnim({ index: slideAnim.index + 1, inProgress: true })

                  setTimeout(() => {
                        setSlideAnim({ index: slideAnim.index + 1, inProgress: false })
                  }, 400)
            }

            else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) {
                  setSlideAnim({ index: 1, inProgress: true })


                  setTimeout(() => {
                        setSlideAnim({ index: 1, inProgress: false })
                  }, 400)
            }
      }
      const prevSlide = () => {
            if (slideAnim.index !== 1 && !slideAnim.inProgress) {

                  setSlideAnim({ index: slideAnim.index - 1, inProgress: true })

                  setTimeout(() => {
                        setSlideAnim({ index: slideAnim.index - 1, inProgress: false })
                  }, 400)
            }
            else if (slideAnim.index === 1 && !slideAnim.inProgress) {
                  setSlideAnim({ index: 5, inProgress: true })


                  setTimeout(() => {
                        setSlideAnim({ index: 5, inProgress: false })
                  }, 400)
            }

      }
      const moveDot = (index) => {
            setSlideAnim({ index: index, inProgress: false })
      }
      return (
            /**Affichages des images */
            <div className="container-slider">
                  {dataSlider.map((item, index) => {
                        return (
                              <div
                                    key={item.id}
                                    className={slideAnim.index === index + 1 ? "slide active-anim" : "slide"}
                              >
                                    <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt="slide" />
                              </div>
                        )
                  })}
                  <BtnSlider moveSlide={nextSlide} direction={"next"} />
                  <BtnSlider moveSlide={prevSlide} direction={"prev"} />

                  <div className="container-dots">
                        {Array.from({ length: 5 }).map((item, index) => {

                              return (
                                    <div className={slideAnim.index === index + 1 ? "dot active" : "dot"}

                                          onClick={() => moveDot(index + 1)}></div>
                              )

                        })}
                  </div>
            </div>
      )
}
