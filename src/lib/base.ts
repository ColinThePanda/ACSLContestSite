let base = "";
if (import.meta.env.GITHUB_ACTIONS === "true") {
  base = "/ACSLContestSite";
}
console.log("GITHUB_ACTIONS:", import.meta.env.GITHUB_ACTIONS);
console.log("base:", base);
export { base };