interface IAuthenticationModel {
  access_token: string;
  refresh_token: string;
  iat: Date;
  exp: Date;
  isAuthenticated: boolean;

  signInWithGoogle: () => void;
}

class AuthenticationModel implements IAuthenticationModel {
  access_token: string;
  refresh_token: string;
  iat: Date;
  exp: Date;

  public get isAuthenticated() {
    return (
      this.access_token.length > 0 && this.exp.getTime() > new Date().getTime()
    );
  }

  constructor(
    access_token: string,
    refresh_token: string,
    iat: Date,
    exp: Date
  ) {
    this.access_token = access_token;
    this.refresh_token = refresh_token;
    this.iat = iat;
    this.exp = exp;
  }

  static fromJson(json: IAuthenticationModel): AuthenticationModel {
    return new AuthenticationModel(
      json.access_token,
      json.refresh_token,
      json.iat,
      json.exp
    );
  }

  signInWithGoogle() {
    //TODO
  }

  async updateAccessToken() {
    //TODO
  }
}

export { AuthenticationModel };
export type { IAuthenticationModel };
