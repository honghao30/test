const stringValidationFunction = (
  str: string,
  min: number = 0,
  max: number = 50
) => {
  const payload = str.trim()
  return (
    typeof payload === 'string' &&
    payload.length >= min &&
    payload.length <= max
  )
}

const emailValidationFunction = (v: any): boolean => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return !!v && typeof v === 'string' && emailRegex.test(v)
}

const promotionCodeValidationFunction = (v: any): boolean => {
  return String(v).trim().toLocaleLowerCase() === 'bisnow38' || !v
}

const phoneValidationFunction = (v: any): boolean => {
  return !!v && String(v).length > 8
}

export default {
  string: stringValidationFunction,
  email: emailValidationFunction,
  promotion: promotionCodeValidationFunction,
  phone: phoneValidationFunction,
}
