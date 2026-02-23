CREATE TABLE IF NOT EXISTS procurement_requests (
  id UUID PRIMARY KEY,
  requester VARCHAR(100),
  item VARCHAR(100),
  amount DECIMAL(10,2),
  status VARCHAR(30),
  score DECIMAL(3,2)
);
