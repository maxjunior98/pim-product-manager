function logTime(str = '') {
    const date = new Date()
    console.log(date)
    console.log(`HTTP REQUEST TO: ${str}` )
}

module.exports = logTime