let arr = new Array(5)
console.log('----------------------------')

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function fillArray(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i] = getRandom(-100, 101)
  }
}

fillArray(arr)
console.log(arr, 'заполнили')

function replaceFromArray(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] <= 0) {
      arr[i] = 0
    }
  }
}

replaceFromArray(arr)
console.log(arr, 'заменили на ноль отрицательные')

function addToArray(arr) {
  for (let i = arr.length; i > 0; i--) {
    if (i % 2 !== 0 && arr[i] === 0) {
      arr.splice(i + 1, 0, -1)
    }
  }
}

addToArray(arr)
console.log(arr, 'после каждого четного элемента равного нулю вставили -1')
