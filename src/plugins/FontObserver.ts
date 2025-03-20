import FontFaceObserver from 'fontfaceobserver'

const font = new FontFaceObserver('Pretendard')

font.load().then(function () {
  console.log('Pretendard has loaded.')
  document.body.classList.add('fonts-loaded')
})
