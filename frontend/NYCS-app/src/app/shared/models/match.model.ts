interface Match {
    _id: String;
    team1: String;
    team2: String;
    team1ID: String;
    team2ID: String;
    team1Score: Number;
    team2Score: Number;
    isComplete: Boolean;
    isOT: Boolean;
    isKR: Boolean;
    tourneyStatus: String;
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
}

export { Match, defaultMatch };