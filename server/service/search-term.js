function isLetter(c) {
  return c !== ' ' && c !== '(' && c !== ')' && c !== '.' && c !== '!'
}

function doesWordContainTerm(word, term) {
  for (let i = 0; i < term.length; i++) {
    if (i >= word.length) {
      return false
    }
    if (term[i] !== word[i]) {
      return false
    }
  }
  return true
}

function getSubString(string, start, end) {
  let result = ''
  for (let i = start; i < end; i++) {
    result += string[i]
  }
  return result
}

export function searchTerm(text, subTexts) {
  const searchTerms = subTexts.map(text => text.toLowerCase())
  const results = searchTerms.map(searchTerm => ({
    subtext: searchTerm,
    result: ''
  }))

  let preIndex = -1;
  [...text].forEach((c, i) => {
    if (isLetter(c)) {
      if (preIndex < 0) {
        preIndex = i
      }
    }
    else {
      if (preIndex < 0) {
        return
      }

      const word = getSubString(text, preIndex, i).toLowerCase()

      searchTerms.forEach((term, i) => {
        if (doesWordContainTerm(word, term)) {
          const { result } = results[i]
          results[i].result += (result ? ', ' : '') + (preIndex + 1)
        }
      })
      preIndex = -1
    }
  })
  return results
}
