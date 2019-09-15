const noAwaitBeforeSetState = require('./rules/no-await-before-setstate')
const noComponentWillMount = require('./rules/no-component-will-mount')

module.exports = {
    rules: {
        ...noAwaitBeforeSetState,
        ...noComponentWillMount
    }
}