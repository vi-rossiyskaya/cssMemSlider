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
    'text': 'Мы ищем кого-то более... реалистичного'},
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
text.classList.add('text');
buttonL.classList.add('buttonL');
buttonR.classList.add('buttonR');



for (let i = 0; i < 4; i ++) {
    const dotBtn = document.createElement('div')
    const dot = document.createElement('div')
    const p = document.createElement('p')

    dotBtn.classList.add('dotBtn');
    dot.classList.add('dot');
    p.classList.add('sign')

    dot.dataset.id = i;
    dotBtn.dataset.id = i;
    p.dataset.id = i;
    p.classList.add('flip-scale-2-hor-bottom')
    

    if (i === 0) {
        p.classList.add('current')
        dot.classList.add('active')
    }
    
    p.append(`${data[i].text}`)
    text.append(p)
    dotBtn.append(dot)
    controlsWrapper.append(dotBtn)
}


header.append('Wawa Wiwa Comics')
body.append(header)
body.append(main)
main.append(container)
imgWrapper.append(buttonL)
imgWrapper.append(buttonR)
container.append(imgWrapper)
container.append(text)
container.append(controlsWrapper)


controlsWrapper.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('active')) {return}
    controlsWrapper.querySelector('.dot[data-id=' + `\'${e.target.dataset.id}\']`).classList.add('dotHover')
})
controlsWrapper.addEventListener('mouseout', (e) => {
    controlsWrapper.querySelector('.dot[data-id=' + `\'${e.target.dataset.id}\']`).classList.remove('dotHover')
})


controlsWrapper.addEventListener('click', (e) => {

    if (e.target.dataset.id === controlsWrapper.querySelector('.active').dataset.id) {return}

    text.querySelector('.current').classList.remove('current')
    text.querySelector('[data-id=' + `\'${e.target.dataset.id}\']`).classList.add('current')

    imgWrapper.style.background = 'url(./assets/img/' + e.target.dataset.id + '.jpg) no-repeat'
    imgWrapper.style.backgroundSize = 'contain'

    controlsWrapper.querySelector('.active').classList.remove('active')
    controlsWrapper.querySelector('.dot[data-id=' + `\'${e.target.dataset.id}\']`).classList.add('active')
    
})

buttonR.addEventListener('click', () => {
    console.log('hello')
    console.log(text.querySelector('.current'))
    console.log(text.querySelector('.current').dataset.id)
    const id = text.querySelector('.current').dataset.id;
    console.log(id)
    console.log(text.querySelector('[data-id=' + `\'${id + 1}\']`))
    text.querySelector('.current').classList.remove('current')
    text.querySelector('[data-id=' + `\'${id + 1}\']`).classList.add('current')
    // text.dataset.id =('[data-id=' + `\'${id + 1}\']`).classList.add('current')
})