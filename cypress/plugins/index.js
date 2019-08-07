
module.exports = (on, config) => {
  on('task', require('@cypress/code-coverage/task'))
  on('task', require('@percy/cypress/task'));
  on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))

  return config
}