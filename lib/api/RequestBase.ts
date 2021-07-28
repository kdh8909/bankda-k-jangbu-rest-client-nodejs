import { AxiosResponse } from 'axios';
import _ from 'lodash';
import { BankdaClient } from '../BankdaClient';

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface Headers {
    Authorization: string,
    'User-Agent': string,
}

export interface Config {
    url: string,
    method: Method,
    headers?: Headers,
    data: object,
    params: object,
}

class RequestBase {
    public url!: string;
    public method: Method = 'GET';
    public params: any;
    public data: any;
    public isTokenNeeded: boolean = true; // 토큰 필요 여부

    public async request(bankdaClient: BankdaClient): Promise<AxiosResponse> {
        const config: Config = {
            url: this.url,
            method: this.method,
            params: this.params,
            data: this.data,
        };
        if (this.isTokenNeeded) {
            config.headers = await bankdaClient.getHeaders();
        }
        if (this.params) {
            config.url += "?" + config.params;
        }
        return bankdaClient.getApiInstance().request(config)
            .then(async (response: any) => {
                return Promise.resolve(response);
            })
            .catch((error: AxiosResponse) => {
                return Promise.reject(error);
            });
    }
}

export default RequestBase;