class Preloader {
  constructor() {}

  static sequential(imageArray: string[]) {
    let len = imageArray.length
    for (let i = 0; i < len; i++) {
      let img = new Image()
      img.src = imageArray[i]
    }
  }

  static parallel(imageArray: string[], idx: number) {
    let index = idx || 0
    if (imageArray && imageArray.length > index) {
      let img = new Image()
      img.onload = () => {
        this.parallel(imageArray, index + 1)
      }
      img.src = imageArray[index]
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
