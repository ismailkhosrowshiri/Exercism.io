
export const rows = (row) => {
  if (row === 0) 
    return [];

  let result = [];

  for (let y = 0; y < row; y++) {
    result[y] = []
    for (let x = 0; x <= y; x++) {
      if (y === 0) {
        result[y][x] = 1
      } else if (x === 0 || x === y) {
        result[y][x] = 1
      } else {
        result[y][x] = result[y - 1][x - 1] + result[y - 1][x]
      }
    }
  }
  return result;
};
