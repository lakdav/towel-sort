// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        const shape = i % 2 !== 0 ? matrix[i].reverse() : matrix[i];
        arr.push(...shape);
    }
    return arr;
};
