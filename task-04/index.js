function printTriangle(rows) {
  for (let i = 0; i < rows; i++) {
    let output = ''
    for (let j = 0; j < rows - i; j++) output += ' '
    for (let k = 0; k <= i; k++) output += '* '
    console.log(output)
  }
}

console.log('------------')
printTriangle(1)
console.log('------------')
printTriangle(2)
console.log('------------')
printTriangle(3)
console.log('------------')
printTriangle(4)
console.log('------------')
printTriangle(5)
