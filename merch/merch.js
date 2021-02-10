const dragNdrop = document.querySelector('#dragNdrop')
const input = dragNdrop.querySelector('input')
const imgList = document.querySelectorAll('img')
const merchList = document.querySelectorAll('.merch')

input.onchange = () => {
    if (input.value != '') {
        setBackgroundFromFile(dragNdrop.querySelector('input').files[0])
    }
}

dragNdrop.onclick = () => {
    input.click()
}

dragNdrop.ondragover = () => {
    dragNdrop.classList.add('hover')
    return false
}

dragNdrop.ondragleave = () => {
    dragNdrop.classList.remove('hover')
    return false
}

dragNdrop.ondrop = (e) => {
    e.preventDefault()
    setBackgroundFromFile(e.dataTransfer.files[0])
    dragNdrop.classList.remove('hover')
}

function setBackgroundFromFile(file) {
    if (file.type.match('image.*')) {
        let reader = new FileReader()
        reader.onload = (e) => {

            imgList.forEach(img => {
                img.classList.add('hidden')
            })
            setTimeout(() => {
                imgList.forEach(img => {
                    img.src = e.target.result
                    img.classList.remove('hidden')
                })
                dragNdrop.classList.add('selected')
            }, 500);
        }
        reader.readAsDataURL(file)
    }
}

// window.addEventListener('scroll', function () {
//     document.body.focus()
//     console.log("Focus")
// }, false); 