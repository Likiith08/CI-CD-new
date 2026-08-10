const request = require("supertest");
const app = require("./app");
 
describe("GET /hello", () => {
 
    test("should return Hello java", async () => {
 
        const response = await request(app).get("/hello");
 
        expect(response.statusCode).toBe(200);
 
        expect(response.body.message).toBe("Hello java");
    });
 
});
 
//  expect(response.body.message).toBe("Hello World"); make it to fail
 