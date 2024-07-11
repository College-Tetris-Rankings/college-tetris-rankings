export async function fetchTetrioUserInfo(user: string) : Promise<UserInfo> {
  const tetrio_api_link: string = "https://ch.tetr.io/api/users/" + user;
  const response: Response = await fetch(tetrio_api_link, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: UserInfo = await response.json();
  return data;
}

// https://tetr.io/about/api/#usersuser
export type UserInfo = {
    success: boolean;
    error?: string;
    cache?: {
        status: string;
        cached_at: number;
        cached_until: number;
    }
    data?: {
        user: {
            _id: string;
            username: string;
            role: string;
            ts?: string;
            botmaster?: string;
            badges: {
                id: string;
                label: string;
                ts?: string;
            }[];
            xp: number;
            gamesplayed: number;
            gameswon: number;
            gametime: number;
            country: string | null;
            badstanding?: boolean;
            supporter: boolean;
            supporter_tier: number;
            verified: boolean;
            league: {
                gamesplayed: number;
                gameswon: number;
                rating: number;
                rank: string;
                bestrank: string;
                standing: number;
                standing_local: number;
                next_rank: string | null;
                prev_rank: string | null;
                next_at: number;
                prev_at: number;
                percentile: number;
                percentile_rank: string;
                glicko?: number;
                rd?: number;
                apm?: number;
                pps?: number;
                vs?: number;
                decaying: boolean;
            };
            avatar_revision?: number;
            banner_revision?: number;
            bio?: string;
            connections: {
                discord?: {
                    id: string;
                    username: string;
                }
            };
            friend_count: number;
            distinguishment?: {
                type: string;
            };
        };
    };
}