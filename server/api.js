import { reckonUrl, authorName } from './config.json'
import { searchTerm } from './service/search-term'

export function getRangeInfo() {
  return fetch(`${reckonUrl}/test1/rangeInfo`)
    .then(res => {
      if (res.status < 300) {
        return res.json()
      }
      // try to fetch again if failed
      return fetch(`${reckonUrl}/test1/rangeInfo`)
        .then(res => {
          if (res.status < 300) {
            return res.json()
          }
          return Promise.resolve(null)
        })
    })
    .then(json => {
      console.log('getRangeInfo', json)
      return json
    })
    .catch(e => {
      console.error(e); // eslint-disable-line
    })
}

export function getDivisorInfo() {
  return fetch(`${reckonUrl}/test1/divisorInfo`)
    .then(res => {
      if (res.status < 300) {
        return res.json()
      }
      // try to fetch again if failed
      return fetch(`${reckonUrl}/test1/divisorInfo`)
        .then(res => {
          if (res.status < 300) {
            return res.json()
          }
          return Promise.resolve(null)
        })
    })
    .then(json => {
      console.log('getDivisorInfo', json)
      return json
    })
    .catch(e => {
      console.error(e); // eslint-disable-line
    })
}

function getTextToSearch() {
  return fetch(`${reckonUrl}/test2/textToSearch`)
    .then(res => res.json())
    .then(json => json.text)
}

function getSubText() {
  return fetch(`${reckonUrl}/test2/subTexts`)
    .then(res => res.json())
    .then(json => json.subTexts)
}

export function test2() {
  return Promise.all([
    getTextToSearch(),
    getSubText()
  ]).then(([text, subTexts]) => ({
    candidate: authorName,
    text,
    results: searchTerm(text, subTexts).map(result => {
      if (!result.result) {
        result.result = '<No Output>'
      }
      return result
    })
  }))
}
