const body = document.querySelector('body');
const header = document.createElement('header');
const main = document.createElement('main');
const container = document.createElement('div');
const imgWrapper = document.createElement('div');
const controlsWrapper = document.createElement('div');
const text = document.createElement('p')


header.classList.add('header');
container.classList.add('container');
main.classList.add('main');
imgWrapper.classList.add('imgWrapper');
controlsWrapper.classList.add('controlsWrapper');
text.classList.add('text')

for (let i = 0; i < 4; i ++) {
    const dot = document.createElement('div')
    dot.classList.add('dot');
    controlsWrapper.append(dot)
}

text.append('Sample text')
header.append('Wawa Wiwa Comics')
body.append(header)
body.append(main)
main.append(container)
container.append(imgWrapper)
container.append(text)
container.append(controlsWrapper)



