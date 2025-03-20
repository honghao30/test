type optionType = {
  round?: number
  rate: 'KR' | 'US'
}

const defaultOption: optionType = {
  round: 0,
  rate: 'KR',
}

export const getComma = (v: number | string) => {
  if (isNaN(+v)) return v
  let number = v.toString()
  if (number.includes('.')) {
    const splitted = number.split('.')
    return `${splitted[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.${splitted[1]}`
  } else return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const getValue = (v: string) => {
  let number = v.replace(/,/g, '')
  if (isNaN(+number)) return number
  return number
}

export const formatFileSize = (size: number) => {
  const scale = 1024
  const orders = ['GB', 'MB', 'KB', 'Bytes']
  let max = Math.pow(scale, orders.length - 1)
  for (const order of orders) {
    if (size > max) {
      return order === 'Bytes'
        ? `${size} Bytes`
        : `${(size / max).toFixed(2)} ${order}`
    }
    max /= scale
  }
  return '0 Bytes'
}

export const getPrecision = (v: number, round: number): string => {
  if (!round) return `${Math.round(v)}`
  else return (Math.round(v * Math.pow(10, round)) / 10 ** round).toFixed(round)
}

export const price3 = (v, options = defaultOption) => {
  const isMinus = v < 0
  const { rate, round } = options
  const offset = 3
  const priceTextTable = {
    US: ['K', 'M', 'B', 'T', 'Qa', 'Qi'],
    KR: ['천', '백만', '십억', '조', '천조'],
  }
  const priceSymbolTable = {
    US: '$',
    KR: '',
  }
  let temp = Math.abs(v)
  let idx = -1
  while (temp > Math.pow(10, offset)) {
    temp /= Math.pow(10, offset)
    idx += 1
  }

  return idx === -1
    ? `${isMinus ? '-' : ''}${priceSymbolTable[rate]}${getPrecision(temp, 1)}`
    : `${isMinus ? '-' : ''}${priceSymbolTable[rate]}${getPrecision(temp, 1)} ${
        priceTextTable[rate][idx]
      }`
}

export const price4 = (v, options = defaultOption) => {
  const { rate, round } = options
  const offset = 4
  const priceTextTable = {
    KR: ['만', '억', '조', '경', '해'],
  }
  const priceSymbolTable = {
    US: '$',
    KR: '',
  }
  let temp = Math.abs(v)
  let idx = -1
  while (temp > Math.pow(10, offset)) {
    temp /= Math.pow(10, offset)
    idx += 1
  }

  return idx === -1
    ? `${v < 0 ? '-' : ''}${priceSymbolTable[rate]}${getPrecision(temp, 1)}`
    : `${v < 0 ? '-' : ''}${priceSymbolTable[rate]}${getPrecision(temp, 1)} ${
        priceTextTable[rate][idx]
      }`
}

export const percent = (v, options = defaultOption) => {
  const round = options.round
  return `${getPrecision(v, round)}%`
}

export const string = (v, options = defaultOption) => {
  return `${v}`
}

export const area = (v, options = defaultOption) => {
  const { round, rate } = options
  const val = getComma(getPrecision(v, round))
  return rate === 'KR' ? `${val}m²` : `${val}ft²`
}

export const length = (v, options = defaultOption) => {
  const { round, rate } = options
  const val = getComma(getPrecision(v, round))
  return rate === 'KR' ? `${val}m` : `${val}ft`
}

export const getOptions = (options, position: 'data' | 'round') => {
  return {
    round: options[`round_${position}`] ?? 0,
    rate: options.rate ?? 'KR',
  }
}

export default {
  price4,
  price3,
  default: (v, ...args) => v,
  getPrecision,
  getComma,
  getValue,
  percent,
  string,
  area,
  length,
  getOptions,
}
