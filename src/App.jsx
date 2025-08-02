import React from "react";
import ChatAgent from "./components/ChatAgent";
import FeatureGate from "./components/FeatureGate";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">FlightSleuth AI Assistant</h1>
      <ChatAgent />
      <FeatureGate />
    </div>
  );
}
export default App;
