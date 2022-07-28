export interface LoginResponse {
  token: string;
  token_expire: Date;
  username: string;
  password: string;
}
export interface UserData {
  id: string;
  email: string;
  name: string;
  notifications: number;
  profile: string;
}

export class AuthService {
  #token?: string;

  public get token(): string | undefined {
    return this.#token;
  }

  public async login(email: string, password: string): Promise<string> {
    const response = await fetch('https://api.kickbase.com/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const responseJson = await response.json();

    // id: str = None
    // email: str = None
    // name: str = None
    // notifications: int = None
    // profile_image_path: str = None
    // league_data = [LeagueData(d) for d in j["leagues"]]

    return responseJson.token;
  }
}

export const authService = new AuthService();
