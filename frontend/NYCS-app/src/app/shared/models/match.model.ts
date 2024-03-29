interface Match {
    _id: string;
    team1: string;
    team2: string;
    team1ID: string;
    team2ID: string;
    team1Score: number;
    team2Score: number;
    isComplete: boolean;
    isOT: boolean;
    isKR: boolean;
    tourneyStatus: string;
    winner: string;
    loser: string;
}

const defaultMatch: Match = {
    _id: null,
    team1: null,
    team2: null,
    team1ID: null,
    team2ID: null,
    team1Score: null,
    team2Score: null,
    isComplete: false,
    isOT: false,
    isKR: false,
    tourneyStatus: null,
    winner: null,
    loser: null
}

export { Match, defaultMatch };