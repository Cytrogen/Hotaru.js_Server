const fs = require('fs/promises');
const path = require('path');
const { promisify } = require('util');

/**
 * Get all data from JSON file.
 * @param fileName
 * @returns {Promise<any>}
 */
const getFileData = async fileName => {
    const filePath = path.join(__dirname, `./data/${fileName}`);
    await fs.readFileSync(filePath)
        .then(data => {
            return JSON.parse(data)
        })
}

/**
 * Set data to JSON file.
 * @param fileName
 * @param data
 * @returns {Promise<void>}
 */
const setFileData = async (fileName, data) => {
    const filePath = path.join(__dirname, `./data/${fileName}`);
    const dataList = JSON.stringify(data, null, '  ');
    await fs.writeFile(filePath, dataList);
}

module.exports = { getFileData, setFileData }
