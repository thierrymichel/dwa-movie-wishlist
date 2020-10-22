// Dummy function to mimic a delay
export const pause = (delay = 1000) =>
  new Promise(resolve => {
    setTimeout(resolve, delay)
  })
