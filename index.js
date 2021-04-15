const menuList = document.querySelectorAll('#menu li a')
var currentIteration = 0

menuList.forEach(element => {
    element.animate([
        {
            filter: 'drop-shadow(0 0 2rem blue)',
            textShadow: '0 0 1rem blue',
            boxShadow: '0 0 2rem blue, inset 0 0 2rem blue'
        },
        {
            filter: 'drop-shadow(0 0 2rem green)',
            textShadow: '0 0 1rem green',
            boxShadow: '0 0 2rem green, inset 0 0 2rem green'
        },
        {
            filter: 'drop-shadow(0 0 2rem red)',
            textShadow: '0 0 1rem red',
            boxShadow: '0 0 2rem red, inset 0 0 2rem red'
        },
        {
            filter: 'drop-shadow(0 0 2rem blue)',
            textShadow: '0 0 1rem blue',
            boxShadow: '0 0 2rem blue, inset 0 0 2rem blue'
        }
    ],
        {
            duration: 10000,
            iterations: Infinity,
            iterationStart: currentIteration
        })
    currentIteration += 0.25
})
const footerList = document.querySelectorAll('footer a')

footerList.forEach(element => {
    element.animate([
        {
            filter: 'drop-shadow(0 0 .4rem blue)',
        },
        {
            filter: 'drop-shadow(0 0 .4rem green)',
        },
        {
            filter: 'drop-shadow(0 0 .4rem red)',
        },
        {
            filter: 'drop-shadow(0 0 .4rem blue)',
        }
    ],
        {
            duration: 10000,
            iterations: Infinity,
            iterationStart: currentIteration
        })
    currentIteration += 0.25
})

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);