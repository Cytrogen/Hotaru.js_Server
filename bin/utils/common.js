const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// Read and write data using promises.
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

/**
 * Get all data from JSON file.
 * @param fileName
 * @returns {Promise<any>}
 */
const getFileData = async fileName => {
    const filePath = path.join(__dirname, `./data/${fileName}.json`);
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

/**
 * Set data to JSON file.
 * @param fileName
 * @param data
 * @returns {Promise<void>}
 */
const setFileData = async (fileName, data) => {
    const filePath = path.join(__dirname, `./data/${fileName}.json`);
    const datas = JSON.stringify(data, null, '  ');
    await writeFile(filePath, datas);
}