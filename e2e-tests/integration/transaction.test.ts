import supertest from "supertest";

describe('Transaction functional tests', () => {
  it('should list transactions', async () => {
    const { body, status } = await global.testRequest.get('/v1/transaction')
    expect(status).toBe(200)
    // expect(body).toBeGreaterThan(0)
  })
})
