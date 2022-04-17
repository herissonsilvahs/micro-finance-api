import { Server } from './server';
const server = new Server()

server.setup()
server.setupDB()
server.start()
