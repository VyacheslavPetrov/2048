import { transpose, moveLeft, moveRight, powerOfTwo, moveUp, moveDown, moveNulls, transformArray, isGameOver, addStartNumber, getEmptyCoordinates, putRandomNumber, generateRandomMatrix } from "./utils"


it('TRANSPOSE has been working', () => {

  const firstNumber = powerOfTwo(15)
  const secondNumber = powerOfTwo(15)
  const thirdNumber = powerOfTwo(15)
  const fourthNumber = powerOfTwo(15)
  const matrix = [[0,0,0,0],[firstNumber,secondNumber,thirdNumber,fourthNumber],[0,0,0,0],[0,0,0,0]]
  const transposeMatrix = transpose(matrix)
  expect(transposeMatrix).toEqual([[0,firstNumber,0,0],[0,secondNumber,0,0],[0,thirdNumber,0,0],[0,fourthNumber,0,0]]);
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

it('move RIGHT has been working', () => {
  const matrix = [
    [0,0,0,0],
    [2,2,2,2],
    [0,0,0,0],
    [0,0,0,0]
  ]
  const rightMatrix = moveRight(moveRight(matrix))
  expect(rightMatrix).toEqual([[0,0,0,0],[0,0,4,4],[0,0,0,0],[0,0,0,0]])
});

it('move UP has been working', () => {
  const matrix = [
    [0,0,0,0],
    [2,2,2,2],
    [0,0,0,0],
    [0,0,0,0]
  ]
  const upMatrix = moveUp(moveUp(matrix))
  expect(upMatrix).toEqual([[2,2,2,2],[0,0,0,0],[0,0,0,0],[0,0,0,0]])
});

it('move DOWN has been working', () => {
  const matrix = [
    [0,0,0,0],
    [2,2,2,2],
    [0,0,0,0],
    [0,0,0,0]
  ]
  const downMatrix = moveDown(moveDown(matrix))
  expect(downMatrix).toEqual([[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,2,2,2]])
});

it('add start Number has been working', () => {
  const possibleNumbers = [2,2,2,4]
  const randomNumber = addStartNumber(possibleNumbers)
  expect([2,4].includes(randomNumber)).toBeTruthy()
});

it('get empty array has been working', () => {
  const matrix = [
    [0,0,6,0],
    [2,2,4,2],
    [0,0,4,0],
    [0,0,0,0]
  ]
  const emptyMatrix = getEmptyCoordinates(matrix)
  expect(emptyMatrix).toEqual([[0,0],[0,1],[0,3],[2,0],[2,1],[2,3],[3,0],[3,1],[3,2],[3,3]])
});

it('put random number has been working', () => {
  const matrix = [
    [2,2,6,0],
    [2,2,4,2],
    [8,8,4,8],
    [0,8,4,8]
  ]
  const emptyMatrix = putRandomNumber(matrix)
  expect(emptyMatrix).not.toEqual([[2,2,6,2],[2,2,4,2],[8,8,4,8],[4,8,4,8]])
});



