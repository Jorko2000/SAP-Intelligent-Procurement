class Procurement {
  constructor(id, requester, item, amount, status, score) {
    this.id = id;
    this.requester = requester;
    this.item = item;
    this.amount = amount;
    this.status = status;
    this.score = score;
  }
}
module.exports = Procurement;
