import { BankdaClient } from "../lib";
import W4c from "../lib/api/W4c";

const version = "3.00";
const userType = "jangbu";
const jangbuId = undefined;
const jangbuKey = undefined;

const serviceCode = "W4C";
const userId = undefined;
const subCode = undefined;

const registerW4cSlipUploadData = {
    "version": version,
    "request_type": "slip_upload",
    "uid": userId,
    "service_name": "w4c",
    "sub_code": subCode,
    "trans_dtm": "20210604160129",
    "memo": "2021년 01월 업로드",
    "record_count": "2",
    "data": [
        {
            "DFRT_DE": "20210128",
            "ACC_NM": "기타차입금",
            "REMK": "조을현",
            "CR_TMM_OCUR_AMT": "5000000",
            "DR_TMM_OCUR_AMT": "0",
            "OPNT_ACC_NM": "기타차입금",
            "FDSRC_NM": "수익사업",
            "BCNC_NM": "",
            "BSNS_NM": "주야간보호",
            "ACCT_NUMBER": "3010284831361",
            "ACCT_MNGT_NM": "수익사업"
        },
        {
            "DFRT_DE": "20210128",
            "ACC_NM": "공공요금 및 각종 세금공과금",
            "REMK": "배상책임보험",
            "CR_TMM_OCUR_AMT": "0",
            "DR_TMM_OCUR_AMT": "966100",
            "OPNT_ACC_NM": "기타차입금",
            "FDSRC_NM": "수익사업",
            "BCNC_NM": "현대해상",
            "BSNS_NM": "주야간보호",
            "ACCT_NUMBER": "3010284831361",
            "ACCT_MNGT_NM": "수익사업"
        }
    ]
};

const registerSlipUploadMonthly = {
    "version": version,
    "request_type": "slip_upload_monthly",
    "uid": userId,
    "service_name": "w4c",
    "sub_code": subCode,
    "trans_dtm": "20210601181126",
    "memo": "2021년05월 업로드",
    "record_count": "2",
    "data": [
        {
            "DFRT_DE": "20210520",
            "ACC_NM": "시군구보조금",
            "REMK": "5월 생계비",
            "CR_TMM_OCUR_AMT": "668340",
            "DR_TMM_OCUR_AMT": "0",
            "OPNT_ACC_NM": "",
            "FDSRC_NM": "보조금",
            "BCNC_NM": "",
            "BSNS_NM": "일반사업",
            "ACCT_NUMBER": "140012339315",
            "ACCT_MNGT_NM": "기초수급(생계비지원)"
        },
        {
            "DFRT_DE": "20210530",
            "ACC_NM": "생계비",
            "REMK": "식자재",
            "CR_TMM_OCUR_AMT": "0",
            "DR_TMM_OCUR_AMT": "668340",
            "OPNT_ACC_NM": "시군구보조금",
            "FDSRC_NM": "보조금",
            "BCNC_NM": "",
            "BSNS_NM": "일반사업",
            "ACCT_NUMBER": "140012339315",
            "ACCT_MNGT_NM": "기초수급(생계비지원)"
        }
    ]
};

const bankdaClient = new BankdaClient({ version: version, usertype: userType, userid: jangbuId, user_key: jangbuKey });

/** 데이터 등록 */
const registerSlipUpload = async (bankdaClient: BankdaClient) => {
    const registerSlipUpload = W4c.registerW4cSlipUpload(jangbuId, serviceCode, userId, registerW4cSlipUploadData);
    await registerSlipUpload.request(bankdaClient)
        .then(response => {
            console.log('W4C 데이터 등록 성공 Response : ', response.data);
        })
        .catch(error => console.log('W4C 데이터 등록 실패 Response : ', error.response.data));
};

/** 월간 데이터 등록 */
const registerW4cSlipUploadMonthly = async (bankdaClient: BankdaClient) => {
    const registerW4cSlipUploadMonthly = W4c.registerW4cSlipUploadMonthly(jangbuId, serviceCode, userId, registerSlipUploadMonthly);
    await registerW4cSlipUploadMonthly.request(bankdaClient)
        .then(response => {
            console.log('W4C 월간 데이터 등록 성공 Response : ', response.data);
        })
        .catch(error => console.log('W4C 월간 데이터 등록 실패 Response : ', error.response.data));
};

async function run() {
    await registerSlipUpload(bankdaClient);
    await registerW4cSlipUploadMonthly(bankdaClient);
}

run();