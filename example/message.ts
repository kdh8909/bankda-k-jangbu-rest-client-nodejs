import { BankdaClient } from "../lib";
import Message from "../lib/api/Message";

const version = "3.00";
const userType = "jangbu";
const jangbuId = undefined;
const jangbuKey = undefined;

const getResultPushMessageData = {
    "version": version,
    "result_type": "registerCode",
    "register_code": "1",
};

const sendPushMessageData = {
    "version": version,
    "title": "메시지 발송 제목",
    "content": "메시지 발송 내용",
    "target": [
        {
            "uid": "1234567890",
        }
    ]
}

const bankdaClient = new BankdaClient({ version: version, usertype: userType, userid: jangbuId, user_key: jangbuKey });

/** 푸시 메시지 발송결과 조회 */
const getResultPushMessage = async (bankdaClient: BankdaClient) => {
    const resultPushMessage = Message.getResultPushMessage(getResultPushMessageData);
    await resultPushMessage.request(bankdaClient)
        .then(response => {
            console.log('푸시 메시지 발송결과 조회 성공 Response : ', response.data);
        })
        .catch(error => console.log('푸시 메시지 발송결과 조회 실패 Response : ', error.response.data));
};

/** 푸시 메시지 발송 */
const sendPushMessage = async (bankdaClient: BankdaClient) => {
    const sendPushMessage = Message.sendPushMessage(sendPushMessageData);
    await sendPushMessage.request(bankdaClient)
    .then(response => {
        console.log('푸시 메시지 발송 성공 Response : ', response.data);
    })
    .catch(error => console.log('푸시 메시지 발송 실패 Response : ', error.response.data));
};

async function run() {
    await getResultPushMessage(bankdaClient);
    // await sendPushMessage(bankdaClient);
}

run();



