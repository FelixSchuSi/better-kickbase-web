declare const KB_PW: string;
declare const KB_EMAIL: string;
declare const KB_TOKEN: string;
declare const KB_LEAGUE_ID: string;
if (KB_TOKEN) {
  globalThis.KB_TOKEN = KB_TOKEN;
  globalThis.KB_PW = KB_PW;
  globalThis.KB_EMAIL = KB_EMAIL;
  globalThis.KB_LEAGUE_ID = KB_LEAGUE_ID;
}

export abstract class BaseService<T> {
  protected token: string = globalThis.KB_TOKEN;
  protected leagueId: string = '2335868';
  protected get default_opts() {
    return {
      headers: {
        'cookie': `kkstrauth=${this.token}`,
        'credentials': 'include',
        'x-bkb-cookie': this.token
      }
    };
  }

  public abstract getData(id?: string): Promise<T>;

  protected async ensureLogin(): Promise<void> {
    if (this.token === '' || !this.isJwtValid(this.token)) {
      if (this.isJwtValid(globalThis.token)) {
        this.token = globalThis.token;
      } else {
        console.log(`JWT from env var is expired, gernerate a new one and write it into .env file!`);
        await this.login();
      }
    }
  }

  protected async login(): Promise<string> {
    const response: Response = await fetch('https://api.kickbase.com/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ email: globalThis.KB_EMAIL, password: globalThis.KB_PW })
    });
    const responseJson = await response.json();

    this.leagueId = responseJson.leagues[0].id;
    const { token } = responseJson;
    globalThis.token = token;
    this.token = token;

    return this.token;
  }

  private isJwtValid(token) {
    try {
      const jwt = JSON.parse(atob(token.split('.')[1]));
      return new Date(jwt.exp * 1000) >= new Date();
    } catch (e) {
      return false;
    }
  }
}
