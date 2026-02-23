const assert = require("assert");
const request = require("supertest");
const express = require("express");
const routes = require("../../cap/api/routes");

const app = express();
app.use(express.json());
app.use("/api", routes);

describe("Procurement API Integration", () => {
    it("should create procurement request", async () => {
        const response = await request(app)
            .post("/api/procurement")
            .send({ requester: "Alice", item: "Laptop", amount: 1200 });
        assert.strictEqual(response.status, 201);
        assert.strictEqual(response.body.requester, "Alice");
    });

    it("should return health status", async () => {
        const response = await request(app).get("/api/health");
        assert.strictEqual(response.status, 200);
        assert.deepStrictEqual(response.body, { status: "UP" });
    });
});
