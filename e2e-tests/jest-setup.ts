import { Server } from "../src/server"
import supertest from "supertest"

beforeAll(async () => {
  const server = new Server()
  server.setup()
  await server.setupDB()
  const app = server.getApp()
  global.testRequest = supertest(app);
})
