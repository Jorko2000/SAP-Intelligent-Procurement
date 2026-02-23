const pool = require("../postgres");

exports.save = async (entity) => {
  await pool.query(
    `INSERT INTO procurement_requests
     (id, requester, item, amount, status, score)
     VALUES ($1,$2,$3,$4,$5,$6)`,
    [
      entity.id,
      entity.requester,
      entity.item,
      entity.amount,
      entity.status,
      entity.score
    ]
  );
};
