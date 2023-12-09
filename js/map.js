let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// map part
     class Player {
          constructor(x, y) {
               this.x = x
               this.y = y
          }
     }

     let spriteSize = 48


     let col = 24
     let row = 24

     let map = [
       3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
       3, 2, 1, 1, 0, 0, 3, 3, 3, 2, 1, 0, 3, 0, 0, 0, 3, 0, 0, 1, 2, 2, 2, 3,
       3, 1, 1, 0, 0, 0, 3, 3, 3, 1, 0, 0, 3, 0, 2, 0, 3, 0, 1, 1, 2, 1, 1, 3,
       3, 0, 0, 0, 0, 0, 3, 3, 2, 0, 0, 0, 3, 0, 0, 0, 3, 1, 2, 2, 2, 1, 1, 3,
       3, 1, 1, 0, 0, 0, 3, 1, 1, 0, 0, 0, 3, 3, 3, 0, 1, 1, 2, 2, 1, 0, 0, 3,
       3, 0, 0, 1, 2, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 3,
       3, 0, 1, 2, 2, 1, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 3,
       3, 0, 0, 1, 1, 1, 3, 1, 1, 1, 0, 1, 0, 0, 0, 3, 0, 0, 3, 3, 3, 0, 0, 3,
       3, 0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3,
       3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 3, 0, 0, 3, 3, 3, 2, 1, 3,
       3, 3, 1, 0, 0, 1, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 3,
       3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 1, 1, 2, 2, 1, 0, 0, 3,
       3, 3, 3, 3, 0, 1, 0, 0, 3, 3, 1, 0, 0, 1, 1, 2, 1, 2, 0, 1, 2, 1, 0, 3,
       3, 2, 3, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 2, 1, 2, 2, 1, 2, 1, 1, 3,
       3, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 2, 1, 1, 1, 2, 0, 1, 3,
       3, 1, 1, 1, 1, 1, 0, 1, 3, 3, 1, 0, 0, 0, 1, 1, 1, 2, 2, 2, 1, 1, 2, 3,
       3, 0, 0, 0, 1, 0, 1, 1, 3, 3, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 3,
       3, 1, 1, 0, 0, 0, 0, 3, 3, 3, 1, 1, 2, 2, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3,
       3, 0, 1, 0, 1, 0, 1, 3, 3, 3, 3, 2, 2, 2, 2, 1, 3, 1, 0, 0, 0, 0, 1, 3,
       3, 1, 0, 0, 0, 1, 3, 3, 3, 2, 1, 0, 1, 2, 0, 1, 0, 0, 0, 1, 1, 0, 0, 3,
       3, 2, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 0, 1, 1, 0, 3, 0, 1, 2, 2, 1, 0, 3,
       3, 3, 1, 0, 1, 1, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 3,
       3, 3, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 1, 0, 1, 2, 3, 1, 0, 0, 0, 0, 1, 3,
       3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
     ]
///

let player = new Player(100, 100)

function animate() {
  window.requestAnimationFrame(animate)

  // load canvas through the loop for responsiveness
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  ctx.fillStyle = '#a5a4a3'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

//   ctx.drawImage(tileSheet,  )
}

let playerIdle = new Image()
// playerIdle.src = '../assets/pixel_adventure_1/'
let tileSheet = new Image()
tileSheet.src = '../assets/pixel_adventure_1/Terrain/Terrain.png'
tileSheet.addEventListener('load', (event) => animate())
