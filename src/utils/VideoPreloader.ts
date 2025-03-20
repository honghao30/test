class Preloader {
  constructor() {}

  static sequential(videoArray: string[]) {
    let len = videoArray.length
    for (let i = 0; i < len; i++) {
      let video = document.createElement('video')
      video.src = videoArray[i]
    }
  }

  static parallel(videoArray: string[], idx: number) {
    let index = idx || 0
    if (videoArray && videoArray.length > index) {
      let video = document.createElement('video')
      video.onload = () => {
        this.parallel(videoArray, index + 1)
      }
      video.src = videoArray[index]
    }
  }

  static inject(id) {
    let $div = document.createElement('div')
    $div.id = id
    $div.style.position = 'absolute'
    $div.style.top = '-9999px'
    $div.style.left = '-9999px'
    document.body.appendChild($div)
  }
}

export default Preloader
