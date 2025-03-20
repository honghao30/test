// @ts-ignore
self.onmessage = async function (e) {
  const urls = e.data
  const images = await Promise.all(
    urls.map(async (url: string) => {
      try {
        const response = await fetch(url)
        const fileBlob = await response.blob()

        if (fileBlob.type.startsWith('image/'))
          return URL.createObjectURL(fileBlob)
      } catch (e) {
        return null
      }
    })
  )
  self.postMessage(images)
}
