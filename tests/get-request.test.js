const request = require("supertest")
const app = require("../src/app")

describe("Test the get request", () => {
  test("It should return 200 when words parameter is informed", async() => {
    response = await request(app).get("/?type=words")
    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty("text")
  })

  test("It should return 200 when sentences parameter is informed", async() => {
    response = await request(app).get("/?type=sentences")
    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty("text")
  })

  test("It should return 200 when paragraphs parameter is informed", async() => {
    response = await request(app).get("/?type=paragraphs")
    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty("text")
  })

  test("It should return 422 when no parameter is informed", async() => {
    response = await request(app).get("/")
    expect(response.statusCode).toBe(422)
  })

  test("It should return 422 when invalid parameter is informed", async() => {
    response = await request(app).get("/?type=foo")
    expect(response.statusCode).toBe(422)
  })
})