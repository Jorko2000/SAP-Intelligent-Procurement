const assert = require("assert");
const ApprovalAI = require("../../cap/ai/approvalAI");

describe("ApprovalAI", () => {
    it("should auto approve low-risk request", () => {
        const request = { amount: 500, category: "Office", requesterLevel: 5 };
        const result = ApprovalAI.evaluate(request);
        assert.strictEqual(result.decision, "AUTO_APPROVE");
    });

    it("should recommend manual review for medium-risk request", () => {
        const request = { amount: 20000, category: "IT", requesterLevel: 2 };
        const result = ApprovalAI.evaluate(request);
        assert.strictEqual(result.decision, "MANUAL_REVIEW");
    });

    it("should reject high-risk request", () => {
        const request = { amount: 60000, category: "IT", requesterLevel: 1 };
        const result = ApprovalAI.evaluate(request);
        assert.strictEqual(result.decision, "REJECT");
    });
});
