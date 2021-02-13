import { transpose, moveLeft, moveNulls, transformArray, isGameOver } from "./utils"

it('TRANSPOSE has been working', () => {
  const matrix = [[0,0,0,0],[2,2,2,2],[0,0,0,0],[0,0,0,0]]
  const transposeMatrix = transpose(matrix)
  expect(transposeMatrix).toEqual([[0,2,0,0],[0,2,0,0],[0,2,0,0],[0,2,0,0]]);
});

it('move LEFT has been working', () => {
  const matrix = [[0,0,0,0],[2,2,2,2],[0,0,0,0],[0,0,0,0]]
  const leftMatrix = moveLeft(moveLeft(matrix))
  expect(leftMatrix).toEqual([[0,0,0,0],[4,4,0,0],[0,0,0,0],[0,0,0,0]])
});

it('move NULLS has been working', () => {
  const matrix = [
    [0,0,0,0],
    [2,2,2,0],
    [0,0,0,0],
    [0,0,0,0]
  ]
  const nullMatrix = moveNulls(matrix)
  expect(nullMatrix).toEqual([
    [0,0,0,0],
    [0,2,2,2],
    [0,0,0,0],
    [0,0,0,0]
  ])
});

it('calculate sibling elements', () => {
  const matrix = [
    [2,0,2,0],
    [0,2,2,2],
    [2,2,2,2],
    [2,4,2,2]
  ]
  const calculateMatrix = transformArray(matrix)
  expect(calculateMatrix).toEqual([
    [0,2,0,2],
    [0,0,2,4],
    [0,2,2,4],
    [0,2,4,4]
  ])
})

it('spec is game over', () => {
  const overMatrix = [
    [2,4,8,16],
    [16,8,4,2],
    [2,4,8,16],
    [16,8,4,2]
  ]
  const notOverMatrix = [
    [2,4,8,16],
    [2,4,8,16],
    [2,4,8,16],
    [16,8,4,2]
  ]
  expect(isGameOver(overMatrix)).toBeTruthy()
  expect(isGameOver(notOverMatrix)).toBeFalsy()
})