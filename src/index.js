module.exports = function check(str, bracketsConfig) {

  let bracketsOpen = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
  if (bracketsConfig[i][0]===bracketsConfig[i][1] && !bracketsOpen.includes('X')) {    bracketsOpen.push('X')}
  else if (bracketsOpen.includes('X') && bracketsConfig[i][0]===bracketsConfig[i][1]) {bracketsOpen.push('Y')}
    else {bracketsOpen.push(bracketsConfig[i][0])}
  }

  let bracketsPair = {
  }

  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0]===bracketsConfig[i][1] && !Object.keys(bracketsPair).find(key => bracketsPair[key] === 'X') )
     {bracketsPair[bracketsConfig[i][1]] = 'X'}
     else if (Object.keys(bracketsPair).find(key => bracketsPair[key] === 'X')) {bracketsPair[bracketsConfig[i][1]] = 'Y'}
    else {bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0]}
  }

  let currentBracket = '';

  let stack = [];
 
  for (let i = 0; i < str.length; i++) {

    currentBracket = str[i];
    if (currentBracket == Object.keys(bracketsPair).find(key => bracketsPair[key] === 'X')
     && !stack.includes('X')
     ) 
     {currentBracket='X'}

     else if (currentBracket == Object.keys(bracketsPair).find(key => bracketsPair[key] === 'Y')
      && !stack.includes('Y')
      ) {currentBracket='Y'}

    let stackTop = stack[stack.length-1];

    if (bracketsOpen.includes(currentBracket)) {stack.push(currentBracket)}
    
    else {
      if (bracketsPair[currentBracket] === stackTop) {
      stack.pop()
    }
    else {return false}
  }
}
  return stack.length === 0
}
