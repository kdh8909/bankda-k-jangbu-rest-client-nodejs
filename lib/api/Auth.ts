import RequestBase from './RequestBase';

export interface AuthRequest {
    version: string;
    usertype: string;
    userid: string;
    user_key: string;
}

export interface RefreshTokenRequest {
    version: string;
    refresh_token: string;
}

class Auth extends RequestBase {
    constructor() {
        super();
        this.isTokenNeeded = false;
    }
    /* 토큰 발급 */
    public static createToken(data: AuthRequest): Auth {
        const auth = new Auth();
        auth.url = '/auth';
        auth.method = 'POST';
        auth.data = data;
        return auth;
    }
    /* 토큰 재발급 */
    public static refreshToken(data: RefreshTokenRequest): Auth {
        const auth = new Auth();
        auth.url = '/auth';
        auth.method = 'PUT';
        auth.data = data;
        return auth;
    }
}

export default Auth;