export interface LeaderboardEvent {
  eventId: string;
  eventName: string;
  points: number;
  rank: number;
}

export interface LeaderboardAthlete {
  rank: number;
  userId: string;
  name: string;
  affiliateName: string;
  events: LeaderboardEvent[];
  totalPoints: number;
}

export interface LeaderboardDivision {
  id: string;
  name: string;
  athletes: LeaderboardAthlete[];
}

export interface GymAthleteEvent {
  eventId: string;
  eventName: string;
  points: number;
  contributing: boolean;
}

export interface GymAthlete {
  name: string;
  division: string;
  divisionRank: number;
  events: GymAthleteEvent[];
  contributingTotal: number;
}

export interface LeaderboardGym {
  name: string;
  rank: number;
  athleteCount: number;
  totalScore: number;
  athletes: GymAthlete[];
}

export interface LeaderboardData {
  competition: {
    id: string;
    name: string;
  };
  divisions: LeaderboardDivision[];
  gyms: LeaderboardGym[];
}
