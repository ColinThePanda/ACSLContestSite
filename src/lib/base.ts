const isGitHub = import.meta.env.GITHUB_ACTIONS === "true";
console.log("GITHUB_ACTIONS:", import.meta.env.GITHUB_ACTIONS);
console.log("base:", isGitHub ? "/ACSLContestSite" : "");
export const base = isGitHub ? "/ACSLContestSite" : "";