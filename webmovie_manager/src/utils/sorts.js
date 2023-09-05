export const mapOrder = (originalArray) => {
    if (!originalArray) return []

    const clonedArray = [...originalArray]
    const orderedArray = clonedArray.sort()

    return orderedArray
}