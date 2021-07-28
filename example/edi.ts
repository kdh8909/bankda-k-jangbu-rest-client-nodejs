import { BankdaClient } from "../lib";
import Edi from "../lib/api/Edi";

const version = "3.00";
const userType = "jangbu";
const jangbuId = undefined;
const jangbuKey = undefined;

const serviceCode = undefined;
const requestType = undefined;
const userId = undefined;

const registerEdiData = {
    "version": version,
    "request_type": requestType,
    "uid": userId,
    "service_name": "EDI",
    "trans_dtm": "20210712111631",
    "memo": "EDI 업로드",
    "record_count": "1",
    "data": [
        {
            "mgmtNo": "91100488551",
            "yyyyMM": "202106"
        }
    ]
};

const bankdaClient = new BankdaClient({ version: version, usertype: userType, userid: jangbuId, user_key: jangbuKey });

/** 데이터 등록 */
const registerEdi = async (bankdaClient: BankdaClient) => {
    const registerEdi = Edi.registerEdi(jangbuId, serviceCode, requestType, userId, registerEdiData);
    await registerEdi.request(bankdaClient)
        .then(response => {
            console.log('EDI 데이터 등록 성공 Response : ', response.data);
        })
        .catch(error => console.log('EDI 데이터 등록 실패 Response : ', error.response.data));
};

async function run() {
    await registerEdi(bankdaClient);
}

run();