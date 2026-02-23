class ApprovalAI {
    /**
     * Evaluate procurement request risk & approval recommendation
     * @param {Object} request
     * @param {number} request.amount
     * @param {string} request.category
     * @param {number} request.requesterLevel
     */
    static evaluate(request) {
        const { amount, category, requesterLevel } = request;

        let score = 0;
        let reasons = [];

        // Rule 1: Amount-based risk
        if (amount > 50000) {
            score += 50;
            reasons.push("High amount");
        } else if (amount > 10000) {
            score += 25;
            reasons.push("Medium amount");
        }

        // Rule 2: Category risk
        const riskyCategories = ["IT", "Hardware", "Infrastructure"];
        if (riskyCategories.includes(category)) {
            score += 20;
            reasons.push("Risky category");
        }

        // Rule 3: Requester seniority
        if (requesterLevel < 3) {
            score += 30;
            reasons.push("Junior requester");
        }

        // Decision logic
        let decision;
        if (score >= 70) {
            decision = "REJECT";
        } else if (score >= 40) {
            decision = "MANUAL_REVIEW";
        } else {
            decision = "AUTO_APPROVE";
        }

        return {
            decision,
            riskScore: score,
            reasons,
            evaluatedAt: new Date().toISOString()
        };
    }
}

module.exports = ApprovalAI;
