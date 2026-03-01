const isGitHub = import.meta.env.GITHUB_ACTIONS === "true";
export const base = isGitHub ? "/ACSLContestSite" : "";