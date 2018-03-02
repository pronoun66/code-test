import { searchTerm } from './search-term'

describe('test2', () => {
  it('should return search result', () => {
    const text = 'Peter told me (actually he slurrred) that peter the pickle piper piped a pitted pickle before he petered out. Phew!'
    const subTexts = [
      'Peter',
      'peter',
      'Pick',
      'Pi',
      'Z'
    ]

    const expected = [
      {
        subtext: 'peter',
        result: '1, 43, 98'
      },
      {
        subtext: 'peter',
        result: '1, 43, 98'
      },
      {
        subtext: 'pick',
        result: '53, 81'
      },
      {
        subtext: 'pi',
        result: '53, 60, 66, 74, 81'
      },
      {
        subtext: 'z',
        result: ''
      }
    ]

    const results = searchTerm(text, subTexts)
    expect(results).toEqual(expected)
  })
})
