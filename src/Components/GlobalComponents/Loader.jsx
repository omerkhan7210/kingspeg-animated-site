import React from 'react'

export const Loader = () => {
  return (
    <div className="loader-wrap" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, -1500px)", display: "none", zIndex: "-1" }}>
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path id="svg" d="M0 2S175 1 500 1s500 1 500 1V0H0Z" />
        </svg>

        <div className="loader-wrap-heading">
            <div className="load-text" style={{ translate: "none", rotate: "none", scale: "none", opacity: "0", transform: "translate(0px, -100px)" }}>
                <span>L</span>
                <span>o</span>
                <span>a</span>
                <span>d</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
            </div>
        </div>
    </div>
  )
}
