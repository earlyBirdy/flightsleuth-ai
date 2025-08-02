// Placeholder agent setup
export const getToolsByTier = (tier) => {
  const baseTools = ["parseQuery", "flightSearch"];
  const proTools = [...baseTools, "visaCheck"];
  const hackerTools = [...proTools, "suggestHiddenCityRoutes"];
  return tier === "hacker" ? hackerTools : tier === "pro" ? proTools : baseTools;
};