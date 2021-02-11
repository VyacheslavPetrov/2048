import { transpose } from "./utils"

it('transpose', () => {
  const matrix = [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]]
  const transposeMatrix = transpose(matrix)
  expect(transposeMatrix).toEqual([[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]]);
});