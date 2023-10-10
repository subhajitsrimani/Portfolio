import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-map-pin about__icon' ></i>
            <h3 className="about__title">Location</h3>
            <span className="about__subtitle">Kolkata</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase about__icon' ></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">5+ Projects</span>
        </div>

        <div className="about__box">
        <i class='bx bx-code about__icon' ></i>
            <h3 className="about__title">Solves</h3>
            <span className="about__subtitle">150+</span>
        </div>
    </div>
  )
}

export default Info