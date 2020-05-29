interface Team {
    _id: string;
    name: string;
    shortname: string;
    half: string;
    teamtag: string;
    description: string;
    stats: Stats;
    logo: TeamLogo;
}

interface Stats {
    wins: number;
    winsOT: number;
    loses: number;
    losesOT: number;
    roundWin: number;
    roundLost: number;
    winsHalf: number;
    losesHalf: number;
    wlStr: string;
    score: number;
    points: number;
    games: number;
    nycsPercent: number;
    halfPercent: number;
    halfLeader: boolean;
    totalPlace: number;
}

interface TeamLogo {
    src: string;
    alt: string;
}

interface StatsTeam {
    _id: string;
    stats: Stats;
}

export { Team, Stats, StatsTeam }