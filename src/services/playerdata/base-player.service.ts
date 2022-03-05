declare const KB_PW: string;
declare const KB_EMAIL: string;

export abstract class BasePlayerService<T> {
  protected token: string = '';
  protected leagueId: string = '';
  protected default_opts = {};

  public abstract getData(playerId: string): Promise<T>;

  protected async ensureLogin(): Promise<void> {
    if (this.token === '') {
      await this.login();
    }
  }

  protected mapAndTransform(input: any, mappings: any, transforms: any = {}): any {
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

  protected async login(): Promise<string> {
    const response: Response = await fetch('https://api.kickbase.com/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ email: KB_EMAIL, password: KB_PW })
    });
    const responseJson = await response.json();
    this.leagueId = responseJson.leagues[0].id;
    const { token } = responseJson;
    this.token = token;
    this.default_opts = {
      headers: {
        cookie: `kkstrauth=${this.token}`
      }
    };
    return this.token;
  }
}
