interface Team {
    _id: String;
    name: String;
    half: String;
    teamtag: String;
    description: String;
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
    wlStr: String;
    score: number;
}

export { Team, Stats }