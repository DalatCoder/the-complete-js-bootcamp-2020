/**
 * Function to generate a 2D array and fill all cells with false
 * @param {int} row
 * @param {int} column
 */
const generateGrid = (row, column) => {
  return Array(row)
    .fill(null)
    .map(() => Array(column).fill(false))
}
