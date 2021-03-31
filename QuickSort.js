class QuickSort {
    constructor(blocks) {
        this.blocks = blocks
    }

    setBlockColor(index, color) {
        setBlockColor(this.blocks, index, color)
    }

    getBlockHeight(index) {
        return getBlockHeight(this.blocks, index)
    }

    swap(firstIndex, secondIndex) {
        swap(this.blocks, firstIndex, secondIndex)
    }

    async start() {
        this.quickSort(0, this.blocks.length - 1)
    }

    async quickSort(left, right) {
        if (left === right) {
            this.setBlockColor(left, sortedColor)
            await sleep()
            return
        }

        if (left > right) {
            this.setBlockColor(right, sortedColor)
            this.setBlockColor(left, sortedColor)
            await sleep()
            return
        }

        let newPivotIndex = await this.partition(left, right)
        await this.quickSort(left, newPivotIndex - 1)
        await this.quickSort(newPivotIndex + 1, right)
    }

    async partition(left, right) {
        let pivot = this.getBlockHeight(right)
        let i = left
        let j = right - 1

        this.setBlockColor(right, pivotColor)

        while (i <= j) {
            this.setBlockColor(i, queriedColor)
            this.setBlockColor(j, queriedColor)
            await sleep()

            while (this.getBlockHeight(i) < pivot) {
                i++
                this.setBlockColor(i, queriedColor)
                await sleep(shortSleepTime)
            }
            while (this.getBlockHeight(j) > pivot) {
                j--
                this.setBlockColor(j, queriedColor)
                await sleep(shortSleepTime)
            }
            if (i <= j) {
                this.setBlockColor(i, swapColor)
                this.setBlockColor(j, swapColor)
                await sleep()
                this.swap(i, j)
                await sleep()
                this.setBlockColor(i, queriedColor)
                this.setBlockColor(j, queriedColor)
                await sleep()
                i++
                j--
            }
        }
        this.setBlockColor(i, pivotColor)
        await sleep()
        this.swap(right, i)
        await sleep()
        this.setBlockColor(i, sortedColor)
        this.setBlockColor(right, queriedColor)
        await sleep()
        for (let r = left; r <= right; r++) {
            if (r !== i) {
                this.setBlockColor(r, defaultColor)
            }
        }
        await sleep()
        return i
    }
}

/*async function performQuickSort(blocks) {
    quickSort(this.blocks, 0, blocks.length - 1)
}

async function quickSort(this.blocks, left, right) {
    if (left === right) {
        this.setBlockColor(left, sortedColor)
        await sleep()
        return
    }

    if (left > right) {
        this.setBlockColor(right, sortedColor)
        this.setBlockColor(left, sortedColor)
        await sleep()
        return
    }

    let newPivotIndex = await partition(this.blocks, left, right)
    await quickSort(this.blocks, left, newPivotIndex - 1)
    await quickSort(this.blocks, newPivotIndex + 1, right)
}

async function partition(this.blocks, left, right) {
    let pivot = this.getBlockHeight(right)
    let i = left
    let j = right - 1

    this.setBlockColor(right, pivotColor)

    while (i <= j) {
        this.setBlockColor(i, queriedColor)
        this.setBlockColor(j, queriedColor)
        await sleep()

        while (this.getBlockHeight(i) < pivot) {
            i++
            this.setBlockColor(i, queriedColor)
            await sleep(shortSleepTime)
        }
        while (this.getBlockHeight(j) > pivot) {
            j--
            this.setBlockColor(j, queriedColor)
            await sleep(shortSleepTime)
        }
        if (i <= j) {
            this.setBlockColor(i, swapColor)
            this.setBlockColor(j, swapColor)
            await sleep()
            swap(this.blocks, i, j)
            await sleep()
            this.setBlockColor(i, queriedColor)
            this.setBlockColor(j, queriedColor)
            await sleep()
            i++
            j--
        }
    }
    this.setBlockColor(i, pivotColor)
    await sleep()
    swap(this.blocks, right, i)
    await sleep()
    this.setBlockColor(i, sortedColor)
    this.setBlockColor(right, queriedColor)
    await sleep()
    for (let r = left; r <= right; r++) {
        if (r !== i) {
            this.setBlockColor(r, defaultColor)
        }
    }
    await sleep()
    return i
}*/

/*var list = [61, 85, 97, 52, 17, 87, 36, 74, 9, 71, 24, 22, 13, 40, 10, 96, 96, 42, 14, 83, 95, 96, 78, 50, 86, 25, 83, 1, 74, 49, 21, 52, 35, 99, 61, 21, 45, 83, 55, 67, 86, 24, 6, 35, 4, 24, 54, 60, 46, 47, 35, 47, 11, 34, 55, 26, 11, 90, 64, 72, 22, 97, 100, 64, 65, 5, 36, 6, 90, 72, 3, 58, 47, 97, 56, 90, 74, 70, 42, 35, 51, 27, 5, 32, 32, 23, 37, 43, 32, 28, 65, 38, 12, 42, 40, 94, 20, 72, 3, 4]

print('start')
quickSort(0, list.length - 1)
print('end')

function quickSort(left, right) {
    if (left < right) {
        let newPivotIndex = partition(left, right)
        quickSort(left, newPivotIndex - 1)
        quickSort(newPivotIndex + 1, right)
    }
}

function partition(left, right) {
    let pivot = list[right]
    let i = left
    let j = right - 1

    let iteration = 0
    while (i <= j) {
        while (list[i] < pivot) {
            i++
        }
        while (list[j] > pivot) {
            j--
        }
        if (i <= j) {
            swap(i, j)
            i++
            j--
        }
    }
    // Swap pivot to correct place
    swap(right, i)
    return i
}

function swap(i, j) {
    let temp = list[i]
    list[i] = list[j]
    list[j] = temp
}

function print(message) {
    console.log(list.join(', ') + ' - ' + message)
}*/