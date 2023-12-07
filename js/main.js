const player = new Player()

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  requestAnimationFrame(animate)

  player.update()

  // for left right movement
  if (keys.right.pressed) {
    player.moveRight()
    player.velocity.x = 5
  } else if (keys.left.pressed) {
    player.moveLeft()
    player.velocity.x = -5
  } else {
    player.velocity.x = 0
  }
}

animate()

// while pressing key
window.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowRight':
      keys.right.pressed = true
      break
    case 'ArrowLeft':
      keys.left.pressed = true
      break
    case 'ArrowUp':
      keys.jump.pressed = true
      if (keys.jump.pressed) {
        player.jump()
      }

      break
    // case 'ArrowDown':
    //   //  player.velocity.y = 0
    //   break
  }
})

// while releasing key
window.addEventListener('keyup', (e) => {
  // console.log(keyCode);

  switch (e.code) {
    case 'ArrowRight':
      keys.right.pressed = false
      break
    case 'ArrowLeft':
      keys.left.pressed = false
      break
    case 'ArrowUp':
      player.velocity.y += gravity
      keys.jump.pressed = false
      break
    // case 'ArrowDown':
    //   player.velocity.y = 0
    //   break
  }
})
