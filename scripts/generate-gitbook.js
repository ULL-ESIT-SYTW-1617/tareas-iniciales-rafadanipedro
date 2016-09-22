import path from 'path'

const spawn = require('child_process').spawn;

export default function main() {
  return new Promise((res, rej) => {
    const gb = spawn('node', [
      path.resolve('node_modules/gitbook-cli/bin/gitbook.js'),
      'build',
      './txt',
      './gh-pages'
    ])

    gb.stdout.on('data', data => process.stdout.write(data.toString()))

    gb.on('close', res)
  })
}
