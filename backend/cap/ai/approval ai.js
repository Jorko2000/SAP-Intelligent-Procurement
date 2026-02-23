exports.calculateApprovalScore = (amount) => {
  if (amount < 1000) return { score: 0.9, recommendation: "AUTO_APPROVE" };
  if (amount < 5000) return { score: 0.6, recommendation: "MANUAL_REVIEW" };
  return { score: 0.3, recommendation: "REJECT" };
};
