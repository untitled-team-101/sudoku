"use strict"
export const range = (start, stop, steps) => {
  if(start === undefined)
    return []
  if(stop === undefined){
    stop = start
    start = 0
  }
  if(stop < start)
    steps = steps || -1
  steps = steps || 1
  const n = Math.floor(Math.abs((stop - start)) / Math.abs(steps))
  return [...Array(n)].map((a, i) => (start + (i * steps)))
}

export const removeFromArray = (arr, n) => {
  let i = arr.indexOf(n)
  if(i < 0)
    return
  arr.splice(i, 1)
}
