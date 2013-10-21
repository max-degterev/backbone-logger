# =======================================================================================
# Dependencies and constants
# =======================================================================================
logPrefix = "[Cake]:"

{spawn, exec} = require 'child_process'
{print} = require 'sys'

proxyLog = (data)-> print(data.toString())
proxyWarn = (data)-> process.stderr.write(data.toString())
log = (message) -> console.log("[#{(new Date()).toUTCString()}] #{logPrefix} #{message}")

watchCoffee = ->
  log('Spawning coffeescript watcher')

  coffee = spawn('coffee', ['-c', '-w', "./"])
  coffee.stdout.on('data', proxyLog)
  coffee.stderr.on('data', proxyWarn)

task 'dev', '[DEV]: Watch and compile coffee', watchCoffee
