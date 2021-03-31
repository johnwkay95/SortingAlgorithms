class BubbleSort {
    constructor(blocks) {
        this.blocks = blocks
    }

    async start() {
        const numberOfBlocks = this.blocks.length
        for (let passes = 1; passes < numberOfBlocks; passes++) {
            for (let i = 0; i < numberOfBlocks - passes; i++) {
                if (i == 0) {
                    setBlockColor(this.blocks, i, queriedColor)
                }
                setBlockColor(this.blocks, i + 1, queriedColor)
    
                if (getBlockHeight(this.blocks, i) > getBlockHeight(this.blocks, i + 1)) {
                    await sleep()
                    swap(this.blocks, i, i + 1)
                }
    
                await sleep()
                setBlockColor(this.blocks, i, defaultColor)
    
                if (i == numberOfBlocks - passes - 1) { // Last element so would be missed
                    setBlockColor(this.blocks, i + 1, sortedColor)
                }
            }
            setBlockColor(this.blocks, 0, sortedColor)
        }
    }
}