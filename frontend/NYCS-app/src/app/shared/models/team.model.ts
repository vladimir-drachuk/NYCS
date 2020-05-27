interface Team {
    _id: string;
    name: string;
    half: string;
    teamtag: string;
    description: string;
    stats: Stats;
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

export { Team, Stats }