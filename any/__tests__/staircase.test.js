const staircase = require('../staircase')

describe('staircase', () => {
  it('base case returns 1', () => {
    expect(staircase(-1)).toBe(1)
  })
  it('n1 returns 1', () => {
    expect(staircase(1)).toBe(1)
  })

  it('n2 returns 2', () => {
    expect(staircase(2)).toBe(2)
  })

  it('n3 returns 3', () => {
    expect(staircase(3)).toBe(3)
  })

  it('n4 returns 5', () => {
    expect(staircase(4)).toBe(5)
  })

  it('n5 returns 8', () => {
    expect(staircase(5)).toBe(8)
  })
})
