import friendlyWords from 'friendly-words'

export const getWord = () =>
  friendlyWords.objects[
    new Date().getMilliseconds() % friendlyWords.objects.length
  ]
  
export const getFont = (size) =>
  `bold ${size + (new Date().getDay() + 1) * 2}pt mono`
