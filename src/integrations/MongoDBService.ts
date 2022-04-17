import mongoose, { Mongoose } from 'mongoose';

const connect = async (): Promise<Mongoose> => (
  await mongoose.connect(process.env.DATABASE_URL || '', {
    authSource: 'admin',
    loggerLevel: 'debug'
  })
)

const close = async (): Promise<void> => mongoose.connection.close()

export default {
  connect,
  close
}
