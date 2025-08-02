import React from "react";
function FeatureGate() {
  const plan = "free"; // simulate plan state
  return (
    <div className="mt-4 text-sm text-gray-600">
      Feature access for plan: <strong>{plan}</strong> 🔒 (Some features are gated)
    </div>
  );
}
export default FeatureGate;
