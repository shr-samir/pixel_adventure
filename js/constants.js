let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight


let gravity = 0.8

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  jump: {
    pressed: false,
    double: false,
  },
}

// to delay frames
const staggerFrames = 3
