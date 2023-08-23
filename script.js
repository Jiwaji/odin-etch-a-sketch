const sizeButton = document.createElement('button')
sizeButton.textContent = 'Change Size'
sizeButton.type = "button"
document.body.appendChild(sizeButton)

const container = document.createElement("div")
container.classList.add("container")

sizeButton.addEventListener('click', function(e) {
    size = prompt('Enter a number between 2 and 100')
    while(size < 2 || size > 100) {
        size = prompt('Enter a number between 2 and 100')
    }
    drawGrid(size)
})

function drawGrid(size = 16) {
    container.innerHTML = ''
    for(let i = 0; i < size; i++) {
        const row = document.createElement("div")
        for(j = 0; j < size; j++) {
            const column = document.createElement("div")
            column.classList.add('column')
            column.style.width = 400 / size
            column.style.height = 400 / size
            column.addEventListener("mouseenter", function(e) {
                // this.classList.add('hover')
                const red = Math.floor(Math.random() * 255) 
                const green = Math.floor(Math.random() * 255) 
                const blue = Math.floor(Math.random() * 255) 
                this.style.backgroundColor = `rgb(${red},${green},${blue})`
            })
            row.appendChild(column)
        }
        container.appendChild(row)
    }
}

document.body.appendChild(container)

drawGrid()
