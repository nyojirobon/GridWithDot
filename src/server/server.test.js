import request from 'supertest'
import app from './app'

describe('/', () => {
  it('should response the GET method', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
  })
})
