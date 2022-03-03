declare const KB_PW: string;
declare const KB_EMAIL: string;

class PlayerDataService {

    public token: string = '';
    private default_opts = {};

    async getAllPlayerData(): Promise<void> {
        if (this.token === '') {
            await this.login();
        }

        return await this.getPlayerPoints();
    }

    async getPlayerPoints(): Promise<void> {
        const points = await fetch('https://api.kickbase.com/players/1794/points', this.default_opts).then((res) => res.json());
        console.log(points.s[2]);
        const seasonMappings = {
            "p": "points",
            "mp": "appearances",
            "ms": "startingEleven",
            "m": "matchdays",
            "t": "year"
        }

        const seasonTransforms = {
            "m": (matchDays: any[]) => matchDays.map(matchDay => {
                return {
                    matchDay: matchDay.d,
                    points: matchDay.p,
                    goals: matchDay.g,
                    assists: matchDay.a,
                    home: matchDay.h,
                    playtimeSeconds: matchDay.sp,
                    startingEleven: matchDay.ms,
                    homeTeamId: matchDay.t1i,
                    awayTeamId: matchDay.t2i,
                    homeTeamGoals: matchDay.t1s,
                    awayTeamGoals: matchDay.t2s,
                }
            })
        }
        const playerPointsMappings = {
            "s": "seasons"
        }
        const playerPointsTransforms = {
            "s": (seasons) => {
                return seasons.map(season => mapAndTransform(season, seasonMappings, seasonTransforms))
            }
        }

        return mapAndTransform(points, playerPointsMappings, playerPointsTransforms);
    }

    async login(): Promise<string> {
        const x = await fetch('https://api.kickbase.com/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': "application/json" },
            body: JSON.stringify({ email: KB_EMAIL, password: KB_PW })
        })
        const { token } = await x.json();
        this.token = token;
        // console.log(token)
        this.default_opts = {
            headers: {
                cookie: `kkstrauth=${this.token}`
            }
        }

        return this.token;
    }
}

function mapAndTransform(input: any, mappings: any, transforms: any = {}): any {
    const result: any = {};
    for (const key of Object.keys(mappings)) {

        if (key in transforms) {
            result[mappings[key]] = transforms[key](input[key]);
        } else {
            result[mappings[key]] = input[key];
        }
    }
    return result;
}

export const playerDataService = new PlayerDataService();
