import { BankdaClient } from "../lib";
import Delivery from "../lib/api/Delivery";

const version = "3.00";
const userType = "jangbu";
const jangbuId = undefined;
const jangbuKey = undefined;

const serviceCode = undefined;
const userId = undefined;
const providerType = undefined;

const registerDeliveryData = {
    "version": version,
    "request_type": "food_delivery",
    "uid": userId,
    "service_name": "음식배달",
    "provider_type": providerType,
    "trans_dtm": "20210614122034",
    "memo": "210614122034 delivery 데이터 요청",
    "record_count": "1",
    "data": [
        {
            "userid": "userid",
            "password": "password",
            "startdate": "20210331",
            "enddate": "20210401",
            "company_number": "1303930000"
        }
    ]
}

const bankdaClient = new BankdaClient({ version: version, usertype: userType, userid: jangbuId, user_key: jangbuKey });

/** 데이터 등록 */
const registerDelivery = async (bankdaClient: BankdaClient) => {
    const registerEdi = Delivery.registerDelivery(jangbuId, serviceCode, userId, registerDeliveryData);
    await registerEdi.request(bankdaClient)
        .then(response => {
            console.log('Delivery 데이터 등록 성공 Response : ', response.data);
        })
        .catch(error => console.log('Delivery 데이터 등록 실패 Response : ', error.response.data));
};

async function run() {
    await registerDelivery(bankdaClient);
}

run();