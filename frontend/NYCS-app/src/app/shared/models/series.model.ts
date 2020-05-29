export interface Series {
    _id: String;
    tag: string;
    team1: string;
    team2: string;
    team1ID: string;
    team2ID: string;
    winner: string;
    loser: string;
    half: string;
    team1Score: number;
    team2Score: number;
    isComplete: boolean;
    isChampComplete?: boolean;
}