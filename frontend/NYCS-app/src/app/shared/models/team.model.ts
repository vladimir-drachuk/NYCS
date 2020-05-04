interface Team {
    _id: String;
    name: String;
    half: String;
    teamtag: String;
    description: String;
    score: number;
    stats: Stats;
}

interface Stats {
    wins: number;
    winsOT: number;
    loses: number;
    losesOT: number;
    roundWin: number;
    roundLost: number;
    wlStr: String;
}

export { Team, Stats }