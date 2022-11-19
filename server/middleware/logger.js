import { format } from 'date-fns'
import { v4 as uuid } from 'uuid'
import { existsSync } from 'fs'
import { mkdir, appendFile } from 'node:fs/promises'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(import.meta.url)

const { pathname: root } = new URL('../logs', import.meta.url)
const newRoot = root.slice(1)

export const logEvents = async (message, logFileName) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`

  // if (existsSync(root)) console.log('exist')
  try {
    if (!existsSync(newRoot)) {
      await mkdir(newRoot, { recursive: true })
    }
    await appendFile(`${newRoot}/${logFileName}`, logItem)
  } catch (error) {
    console.log(`error ocurrido ${error}`)
  }
}

export const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
  console.log(`${req.method} ${req.path}`)
  next()
}
