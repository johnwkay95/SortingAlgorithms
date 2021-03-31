class SortingController {
    constructor(blocksDivElement) {
        this.blocksDivElement = blocksDivElement
        this.numberOfBlocks = 100
        this.minBlockHeight = 10
        this.maxBlockHeight = calculateMaxBlockHeight()
        this.blockWidth = calculateBlockWidth(this.numberOfBlocks)

        this.running = false
    }

    createBlocks() {
        for (let i = 0; i < this.numberOfBlocks; i++) {
            this.blocksDivElement.appendChild(this.createBlock())
        }
    }

    createBlock() {
        let height = random(this.minBlockHeight, this.maxBlockHeight)
        return createBlock(height, this.blockWidth)
    }

    updateNumberOfBlocks(newNumberOfBlocks) {
        if (this.numberOfBlocks === newNumberOfBlocks) {
            return
        }

        this.blockWidth = calculateBlockWidth(newNumberOfBlocks)

        for (let i = 0; i < this.numberOfBlocks; i++) {
            this.blocksDivElement.children[i].style.width = this.blockWidth + 'px'
        }

        // Delete selection of current blocks
        if (newNumberOfBlocks < this.numberOfBlocks) { 
            let blocks = this.blocksDivElement.children
            let difference = this.numberOfBlocks - newNumberOfBlocks
            for (let i = this.numberOfBlocks - 1; i >= this.numberOfBlocks - difference; i--) {
                this.blocksDivElement.removeChild(blocks[i])
            }
            this.numberOfBlocks = newNumberOfBlocks
            return
        }

        // Add selection of new blocks
        let difference = newNumberOfBlocks - this.numberOfBlocks
        for (let i = 0; i < difference; i++) {
            this.blocksDivElement.appendChild(this.createBlock())
        }
        this.numberOfBlocks = newNumberOfBlocks
    }

    runSort(selectedSortAlgorithm) {
        if (this.running) {
            return
        }

        let sortAlgorithm = NaN
        switch (selectedSortAlgorithm) {
            case 'bubble':
                sortAlgorithm = new BubbleSort(this.blocksDivElement.children)
                break
            case 'quick':
                sortAlgorithm = new QuickSort(this.blocksDivElement.children)
                break
            default:
                return false
        }
        this.running = true
        sortAlgorithm.start()
        return true
    }
}