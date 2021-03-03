
const fakeTask = async (seconds) => {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}


module.exports = { fakeTask }