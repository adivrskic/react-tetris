export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  return Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
};

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[0].length; x++) {
      // Check that we are on an actual tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // Check that our move is inside the game areas height
          !stage[y + player.pos.y + moveY] ||
          // Check that our move is inside the game areas width
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // Check that the cell we are moving to isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
