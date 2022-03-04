declare const KB_PW: string;
declare const KB_EMAIL: string;

export abstract class BasePlayerService<T> {
  public token: string = '';
  protected default_opts = {};

  protected abstract getData(): Promise<T>;

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
    const { token } = await response.json();
    this.token = token;
    this.default_opts = {
      headers: {
        cookie: `kkstrauth=${this.token}`
      }
    };
    return this.token;
  }
}
