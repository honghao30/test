import ImageWorker from '/Workers/image.worker?worker'

const resolveImages = (urlArray: string[]) => {
  const createImage = (url: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        resolve(img)
      }
      img.onerror = () => {
        resolve(null)
      }
      img.src = url
    })
  }
  return new Promise((resolve, reject) => {
    const worker = new ImageWorker()
    worker.postMessage(urlArray)
    worker.onmessage = async function (event) {
      resolve(event.data)
      // const imagePromises = event.data.map(async (url: string) => {
      //   if (url) {
      //     return await createImage(url)
      //   }
      // })
      // const imageElements = await Promise.all(imagePromises)
      // resolve(imageElements.filter(Boolean))
    }
  })
}

export default resolveImages
