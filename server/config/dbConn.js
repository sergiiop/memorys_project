import { connect } from 'mongoose'
import { config } from './config.js'

export const connectDB = async () => {
  try {
    await connect(config.dbUrl)
  } catch (error) {
    console.log(error)
  }
}
