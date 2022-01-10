import React from 'react'
import leftArrow from '../icons/left-arrow.svg'
import righttArrow from '../icons/right-arrow.svg'

export default function BtnSlider({ moveSlide, direction }) {


      return (
            <div>
                  <button
                        onClick={moveSlide}
                        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
                        <img src={direction === "next" ? righttArrow : leftArrow} alt="fléches" />
                  </button>
            </div>
      )
}
