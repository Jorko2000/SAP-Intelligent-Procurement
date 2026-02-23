class ProcurementModel {
    constructor({
        id,
        requester,
        department,
        item,
        category,
        amount,
        currency = "EUR",
        requesterLevel,
        status = "PENDING",
        createdAt = new Date(),
        updatedAt = new Date()
    }) {
        this.id = id || ProcurementModel.generateId();
        this.requester = requester;
        this.department = department;
        this.item = item;
        this.category = category;
        this.amount = amount;
        this.currency = currency;
        this.requesterLevel = requesterLevel;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    approve(approver) {
        this.status = "APPROVED";
        this.approvedBy = approver;
        this.updatedAt = new Date();
    }

    reject(reason) {
        this.status = "REJECTED";
        this.rejectionReason = reason;
        this.updatedAt = new Date();
    }

    markForReview() {
        this.status = "IN_REVIEW";
        this.updatedAt = new Date();
    }

    static generateId() {
        return `PR-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }

    toJSON() {
        return {
            id: this.id,
            requester: this.requester,
            department: this.department,
            item: this.item,
            category: this.category,
            amount: this.amount,
            currency: this.currency,
            requesterLevel: this.requesterLevel,
            status: this.status,
            approvedBy: this.approvedBy || null,
            rejectionReason: this.rejectionReason || null,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

module.exports = ProcurementModel;
