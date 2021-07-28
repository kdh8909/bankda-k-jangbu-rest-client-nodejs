import axios, { AxiosInstance } from 'axios';
import { BASE_URL, USER_AGENT } from './Constants';
import { getCurrentTime } from './Util';
import _ from 'lodash';
import qs from 'qs';

interface UserProperties {
    version: string;
    usertype: string;
    userid: string;
    user_key: string;
}

export interface Token {
    accessToken: string,
    refreshToken: string,
}

export interface Headers {
    Authorization: string,
    'User-Agent': string,
}

export class BankdaClient {
    private version: string;
    private usertype: string;
    private userid: string;
    private user_key: string;

    private accessToken: string | undefined;
    private refreshToken: string | undefined;
    private expdtm: string | undefined;
    private apiInstance: AxiosInstance;

    constructor(p: UserProperties) {
        this.version = p.version;
        this.usertype = p.usertype;
        this.userid = p.userid;
        this.user_key = p.user_key;

        this.apiInstance = axios.create({
            baseURL: BASE_URL,
            paramsSerializer: (params: any) =>
                qs.stringify(params, { arrayFormat: 'brackets' }),
        });
    }

    public getApiInstance(): any {
        return this.apiInstance;
    }

    public getAccessToken(): string | undefined {
        return this.accessToken;
    }

    public getRefreshToken(): string | undefined {
        return this.refreshToken;
    }

    public isValidToken(): boolean {
        if (this.accessToken && this.expdtm) {
            return this.expdtm > getCurrentTime();
        }
        return false;
    }

    private getToken(): Promise<any> {
        return axios.post(`${BASE_URL}/auth`, {
            version: this.version,
            usertype: this.usertype,
            userid: this.userid,
            user_key: this.user_key,
        });
    }

    public async getHeaders(): Promise<Headers> {
        if (!this.isValidToken()) {
            await this.getToken()
                .then((response: any) => {
                    this.accessToken = response.data.access_token;
                    this.refreshToken = response.data.refresh_token;
                    this.expdtm = response.data.expdtm;
                })
                .catch((error: any) => Promise.reject(error));
        }
        return {
            Authorization: `Bearer ${this.accessToken}`,
            'User-Agent': USER_AGENT,
        };
    }
}
