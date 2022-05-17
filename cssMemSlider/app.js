const body = document.querySelector('body');
const header = document.createElement('header');
const main = document.createElement('main');
const container = document.createElement('div');
const imgWrapper = document.createElement('div');
const controlsWrapper = document.createElement('div');
const text = document.createElement('p')
const buttonR = document.createElement('button')
const buttonL = document.createElement('button')

let data = [
    {'imgUrl': 'url(./assets/img/0.jpg)',
    'text': 'В тренажерном зале'},
    {'imgUrl': 'url(./assets/img/1.jpg)',
    'text': 'Мы ищем кого-то более...реалистичного'},
    {'imgUrl': 'url(./assets/img/2.jpg)',
    'text': 'Сейчас узнаешь!'},
    {'imgUrl': 'url(./assets/img/3.jpg)',
    'text': 'Как ты выдерживаешь весь этот негатив?'}
]

header.classList.add('header');
container.classList.add('container');
main.classList.add('main');
imgWrapper.classList.add('imgWrapper');
controlsWrapper.classList.add('controlsWrapper');
text.classList.add('text')
buttonL.classList.add('buttonL')
buttonR.classList.add('buttonR')


for (let i = 0; i < 4; i ++) {
    const dotBtn = document.createElement('div')
    const dot = document.createElement('div')
    dotBtn.classList.add('dotBtn');
    dot.classList.add('dot');
    dot.dataset.id = i;
    dotBtn.dataset.id = i;
    dotBtn.append(dot)
    controlsWrapper.append(dotBtn)
}

text.append(`${data[0].text}`)
header.append('Wawa Wiwa Comics')
body.append(header)
body.append(main)
main.append(container)
imgWrapper.append(buttonR)
imgWrapper.append(buttonL)
container.append(imgWrapper)
container.append(text)
container.append(controlsWrapper)

controlsWrapper.addEventListener('click', (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.dataset.id)
})
controlsWrapper.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('active')) {return}
    controlsWrapper.querySelector('.dot[data-id=' + `\'${e.target.dataset.id}\']`).classList.add('dotHover')
})
controlsWrapper.addEventListener('mouseout', (e) => {
    controlsWrapper.querySelector('.dot[data-id=' + `\'${e.target.dataset.id}\']`).classList.remove('dotHover')
})



