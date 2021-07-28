import { BankdaClient } from '../lib';
import User from '../lib/api/User';

const version = "3.00";
const userType = "jangbu";
const jangbuId = undefined;
const jangbuKey = undefined;
const userId = undefined;

const registerUserData = {
    "version": version,
    "service_name": "경기형",
    "jid": jangbuId,
    "uid": userId,
    "name": "테스트유저",
    "ceo": "테스트유저",
    "phone": "01012345678",
    "email": "test@test.com",
};

const bankdaClient = new BankdaClient({ version: version, usertype: userType, userid: jangbuId, user_key: jangbuKey });
const registerUser = async (bankdaClient: BankdaClient) => {
    /** 고객 회원 등록 */
    const createToken = User.registerUser(registerUserData);
    await createToken.request(bankdaClient)
        .then(response => {
            console.log('고객 회원 등록 성공 Response : ', response.data);
        })
        .catch(error => console.log('고객 회원 등록 성공 Response : ', error.response.data));
};

async function run() {
    await registerUser(bankdaClient);
}

run();



