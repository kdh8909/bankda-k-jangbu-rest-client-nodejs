import { BankdaClient } from "../lib";
import Auth from "../lib/api/Auth";

const version = "3.00";
const userType = "jangbu";
const jangbuId = undefined;
const jangbuKey = undefined;

const createTokenData = {
    "version": version,
    "usertype": userType,
    "userid": jangbuId,
    "user_key": jangbuKey,
};

let refreshTokenData = {
    "version": version,
    "refresh_token": "",
};

const bankdaClient = new BankdaClient({ version: version, usertype: userType, userid: jangbuId, user_key: jangbuKey });

/** 토큰 발급 */
const createToken = async (bankdaClient: BankdaClient) => {
    const createToken = Auth.createToken(createTokenData);
    await createToken.request(bankdaClient)
        .then(response => {
            console.log('토큰 발급 성공 Response : ', response.data);
            refreshTokenData.refresh_token = response.data.refresh_token;
        })
        .catch(error => console.log('토큰 발급 실패 Response : ', error.response.data));
};

/** 토큰 재발급 */
const refreshToken = async (bankdaClient: BankdaClient) => {
    const refreshToken = Auth.refreshToken(refreshTokenData);
    await refreshToken.request(bankdaClient)
        .then(response => {
            console.log('토큰 재발급 성공 Response : ', response.data);
        })
        .catch(error => console.log('토큰 재발급 실패 Response : ', error.response.data));
};

async function run() {
    await createToken(bankdaClient);
    await refreshToken(bankdaClient);
}

run();



