function calculateMaxBlockHeight() {
    return (window.innerHeight / 10) * 9
}

function calculateBlockWidth(blocks) {
    return (window.innerWidth - (blocks * 3) - 100) / blocks // Screen width - (number of blocks * margin) - 100px
}

function createBlock(height, width) {
    var block = document.createElement('div')
    block.className = 'block'
    block.style.height = height + 'px'
    block.style.width = width + 'px'
    return block
}

function random(min, max) {
    return Math.floor((Math.random() * ((max + 1) - min)) + min)
}

function setBlockColor(blocks, position, color) {
    if (position >= 0 && position < blocks.length) {
        blocks[position].style.backgroundColor = color
    }
}

function getBlockHeight(blocks, position) {
    if (position < 0) // Todo; why is this happening?
        return
    return parseInt(blocks[position].style.height)
}

function swap(blocks, firstIndex, secondIndex) {
    let tempHeight = blocks[firstIndex].style.height
    blocks[firstIndex].style.height = blocks[secondIndex].style.height
    blocks[secondIndex].style.height = tempHeight

    let swaps = document.getElementById('numberOfSwaps') // Todo; can be done elsewhere?
    swaps.innerHTML = parseInt(swaps.innerHTML) + 1 
}