let boardStateFunction = ()=>{}
export const setBoardStateFunction = (func) => {
  boardStateFunction = func
}

export const setBoardState = (state) => {
  boardStateFunction(state)
}
