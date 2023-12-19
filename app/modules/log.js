function logTime(str = '') {
    const date = new Date()
    console.log(`HTTP REQUEST TO: ${str} ON ${date}` )
}

module.exports = logTime