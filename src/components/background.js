import React from 'react'
import Particles from 'react-particles-js'

const Background = () => (
  <Particles params={{
    particles: {
      number: {
        value: "10",
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#f5bdc3", "#fa89a8", "#f7ccb9", "#bde4ab", "#8dd3ee", "#abe4d6", "#f7e6b9", "#c798d6", "#d2d3dd"]
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 50,
        random: true,
        anim: {
          enable: false,
          speed: 70,
          size_min: 0.2,
          sync: false
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: true
      }
    },
    retina_detect: true
  }}
  />
)

export default Background