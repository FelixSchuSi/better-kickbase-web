export abstract class BaseService<T> {
  protected token?: string;

  protected get default_opts() {
    if (!this.token) return {};
    return {
      headers: {
        'x-bkb-token': this.token
      }
    };
  }

  public abstract getData(id?: string): Promise<T>;

  protected async ensureLogin(): Promise<void> {
    // if (this.token === '' || !this.isJwtValid(this.token)) {
    //   if (this.isJwtValid(globalThis.token)) {
    //     this.token = globalThis.token;
    //   } else {
    //     console.log(`JWT from env var is expired, gernerate a new one and write it into .env file!`);
    //     await this.login();
    //   }
    // }
  }

  // protected async login(): Promise<string> {
  //   const response: Response = await fetch('https://api.kickbase.com/user/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
  //     body: JSON.stringify({ email: globalThis.KB_EMAIL, password: globalThis.KB_PW })
  //   });
  //   // const responseJson = await response.json();

  //   // this.leagueId = responseJson.leagues[0].id;
  //   // const { token } = responseJson;
  //   // globalThis.token = token;
  //   // this.token = token;

  //   return this.token;
  // }

  // private isJwtValid(token) {
  //   try {
  //     const jwt = JSON.parse(atob(token.split('.')[1]));
  //     return new Date(jwt.exp * 1000) >= new Date();
  //   } catch (e) {
  //     return false;
  //   }
  // }
}
