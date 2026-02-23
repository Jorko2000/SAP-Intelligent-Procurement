exports.calculateConfidence = (score) => {
  if (score > 0.8) return "HIGH";
  if (score > 0.5) return "MEDIUM";
  return "LOW";
};
