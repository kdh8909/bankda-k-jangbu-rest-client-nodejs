import { BankdaClient } from "../lib";
import Work from "../lib/api/Work";

const version = "3.00";
const userType = "jangbu";
const jangbuId = undefined;
const jangbuKey = undefined;

const serviceCode = "GYEONGGI";
const userId = undefined;
const registerCode = undefined;
const yearmonth = "202006";

const getResultParams = {
    version: version
};

const getVoucherParams = {
    version: version,
    yearmonth: yearmonth
};

const bankdaClient = new BankdaClient({ version: version, usertype: userType, userid: jangbuId, user_key: jangbuKey });

/** 등록 상태 조회 */
const getWorkStatus = async (bankdaClient: BankdaClient) => {
    const getWorkStatus = Work.getWorkStatus(jangbuId, registerCode, getResultParams);
    await getWorkStatus.request(bankdaClient)
        .then(response => {
            console.log('등록 상태 조회 성공 Response : ', response.data);
        })
        .catch(error => console.log('등록 상태 조회 실패 Response : ', error.response.data));
};

/** 등록 결과 조회 */
const getWorkResult = async (bankdaClient: BankdaClient) => {
    const getWorkResult = Work.getWorkResult(jangbuId, registerCode, getResultParams);
    await getWorkResult.request(bankdaClient)
        .then(response => {
            console.log('등록 결과 조회 성공 Response : ', response.data);
        })
        .catch(error => console.log('등록 결과 조회 실패 Response : ', error.response.data));
};

/** 전표/증빙자료 조회 */
const getVoucher = async (bankdaClient: BankdaClient) => {
    const getVoucher = Work.getVoucher(jangbuId, serviceCode, userId, getVoucherParams);
    await getVoucher.request(bankdaClient)
        .then(response => {
            console.log('전표/증빙자료 조회 성공 Response : ', response.data);
        })
        .catch(error => console.log('전표/증빙자료 조회 실패 Response : ', error.response.data));
};

async function run() {
    await getWorkStatus(bankdaClient);
    await getWorkResult(bankdaClient);
    await getVoucher(bankdaClient);
}

run();