declare const KB_PW: string;
declare const KB_EMAIL: string;
declare const KB_TOKEN: string;
declare const KB_LEAGUE_ID: string;
globalThis.KB_EMAIL = KB_EMAIL;
globalThis.KB_PW = KB_PW;
// globalThis.KB_TOKEN = KB_TOKEN;
globalThis.KB_LEAGUE_ID = KB_LEAGUE_ID;

export abstract class BasePlayerService<T> {
  // protected token: string = globalThis.KB_TOKEN ?? '';
  protected token: string = '';
  protected leagueId: string = '2335868';
  protected default_opts = {};

  public abstract getData(playerId: string): Promise<T>;

  protected async ensureLogin(): Promise<void> {
    // TODO: Check how to reduce number of login calls
    // TODO: Check if token is valid
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
    globalThis.KB_TOKEN = token;
    this.default_opts = {
      headers: {
        cookie: `kkstrauth=${this.token}`
      }
    };
    // if (document?.cookie) {
    document.cookie = `kkstrauth=${this.token}`;
    // }

    return this.token;
  }
}
