const Procurement = require("../models/procurement.model");
const { generateId } = require("../utils/id.util");
const { calculateApprovalScore } = require("../ai/approval-ai");
const repository = require("../db/repositories/procurement.repository");

exports.createRequest = async (data) => {
  const ai = calculateApprovalScore(data.amount);
  const entity = new Procurement(
    generateId(),
    data.requester,
    data.item,
    data.amount,
    ai.recommendation,
    ai.score
  );
  await repository.save(entity);
  return entity;
};
