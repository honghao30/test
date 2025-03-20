export function getOSByUserAgent() {
  const isIos = window.navigator.userAgent.match(/ipad|iphone/i) !== null

  if (isIos) {
    return 'ios'
  }

  const isAndroid = window.navigator.userAgent.match(/Android/i) !== null

  if (isAndroid) {
    return 'android'
  }

  return 'web'
}
