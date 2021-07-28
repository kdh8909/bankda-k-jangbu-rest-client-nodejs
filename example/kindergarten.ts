import { BankdaClient } from "../lib";
import Kindergarten from "../lib/api/Kindergarten";

const version = "3.00";
const userType = "jangbu";
const jangbuId = undefined;
const jangbuKey = undefined;

const serviceCode = "GYEONGGI";
const userId = undefined;

const registerSlipUploadData = {
    "version": version,
    "request_type": "slip_delete_upload",
    "uid": userId,
    "service_name": "경기형",
    "trans_dtm": "20210728135300",
    "memo": "경기형 slip_delete_upload",
    "record_count": "1",
    "data": [
        {
            "TRANS_DATETIME": "20210704",
            "BILL_DATE": "20210709",
            "TRANS_DATE": "20210709",
            "ESTI_CODE": "221-113",
            "ESTI_INOUT": "I",
            "BILL_MEMO": "메모내용",
            "BILL_BIGO": "비고내용",
            "BILL_SUPPORT_AT": "N",
            "BILL_NURI_AT": "N",
            "TRANS_GB": "I",
            "TRANS_MONEY": "150000",
            "TRANS_MONEY_IN": "150000",
            "TRANS_MONEY_OUT": "0",
            "TRANS_REMAIN": "1501000",
            "TRANS_MEMO": "거래내용(적요)",
            "SETLE_MTHD": "100"
        }
    ]
};

const registerSlipCisSendData = {
    "version": version,
    "request_type": "slip_cis_send",
    "uid": userId,
    "service_name": "경기형",
    "trans_dtm": "20190709122034",
    "memo": "전표 회계보고 등록 테스트",
    "record_count": "2",
    "data": [
        {
            "schYearMonth": "202104"
        },
        {
            "schYearMonth": "202105"
        }
    ]
};

const registerSlipSplitDeleteUploadData = {
    "version": version,
    "request_type": "slip_split_delete_upload",
    "uid": userId,
    "service_name": "경기형",
    "trans_dtm": "20210716100200",
    "memo": "뱅크다 경기형 slip_split_delete_upload 업로드",
    "record_count": "2",
    "data": [
        {
            "bank": {
                "TRANS_DATETIME": "20210405",
                "TRANS_DATE": "20210405",
                "TRANS_GB": "I",
                "TRANS_MONEY": "150000",
                "TRANS_MONEY_IN": "150000",
                "TRANS_MONEY_OUT": "0",
                "TRANS_REMAIN": "150000",
                "TRANS_MEMO": "거래내용(적요)"
            },
            "slip": [
                {
                    "BILL_DATE": "20210405",
                    "BILL_ORDER_DATE": "20210405",
                    "ESTI_CODE": "211",
                    "ESTI_INOUT": "I",
                    "BILL_MONEY": "150000",
                    "BILL_MEMO": "적요내용",
                    "BILL_BIGO": "비고내용",
                    "BILL_SUPPORT_AT": "N",
                    "BILL_NURI_AT": "Y",
                    "SETLE_MTHD": "600"
                }
            ]
        },
        {
            "bank": {
                "TRANS_DATETIME": "20210405",
                "TRANS_DATE": "20210405",
                "TRANS_GB": "I",
                "TRANS_MONEY": "150000",
                "TRANS_MONEY_IN": "150000",
                "TRANS_MONEY_OUT": "0",
                "TRANS_REMAIN": "300000",
                "TRANS_MEMO": "거래내용(적요)"
            },
            "slip": [
                {
                    "BILL_DATE": "20210405",
                    "BILL_ORDER_DATE": "20210405",
                    "ESTI_CODE": "211",
                    "ESTI_INOUT": "O",
                    "BILL_MONEY": "120000",
                    "BILL_MEMO": "적요내용",
                    "BILL_BIGO": "비고내용",
                    "BILL_SUPPORT_AT": "N",
                    "BILL_NURI_AT": "Y",
                    "SETLE_MTHD": "600",
                    "VOUCHER": [
                        {
                            "url": "http://test.com",
                            "filename": "abcd.jpg"
                        },
                        {
                            "url": "http://test2.com",
                            "filename": "abcd2.jpg"
                        }
                    ]
                },
                {
                    "BILL_DATE": "20210405",
                    "BILL_ORDER_DATE": "20210405",
                    "ESTI_CODE": "211",
                    "ESTI_INOUT": "I",
                    "BILL_MONEY": "30000",
                    "BILL_MEMO": "적요내용",
                    "BILL_BIGO": "비고내용",
                    "BILL_SUPPORT_AT": "N",
                    "BILL_NURI_AT": "Y",
                    "SETLE_MTHD": "600"
                }
            ]
        }
    ]
};

const registerBudgetDeleteUploadData = {
    "version": version,
    "request_type": "budget_delete_upload",
    "uid": userId,
    "service_name": "경기형",
    "budget_year": "2021",
    "estim_name": "본예산",
    "trans_dtm": "20210625104142",
    "memo": "2021년 본예산 업로드",
    "record_count": "2",
    "data": [
        {
            "ESTI_DISPLAY": "111",
            "ESTI_INOUT": "I",
            "TOTAL_MONEY": "133932000",
            "budget_item": [
                {
                    "ESTI_OUT_NAME": "만3세",
                    "ESTI_OUT_MONEY": "353000",
                    "ESTI_OUT_BASICNUM1": "5",
                    "ESTI_OUT_BASICTEXT1": "명",
                    "ESTI_OUT_BASICNUM2": "12",
                    "ESTI_OUT_BASICTEXT2": "개월",
                    "ESTI_OUT_TOTMONEY": "21180000"
                },
                {
                    "ESTI_OUT_NAME": "만1세",
                    "ESTI_OUT_MONEY": "484000",
                    "ESTI_OUT_BASICNUM1": "6",
                    "ESTI_OUT_BASICTEXT1": "명",
                    "ESTI_OUT_BASICNUM2": "12",
                    "ESTI_OUT_BASICTEXT2": "개월",
                    "ESTI_OUT_TOTMONEY": "34848000"
                },
                {
                    "ESTI_OUT_NAME": "만2세",
                    "ESTI_OUT_MONEY": "426000",
                    "ESTI_OUT_BASICNUM1": "10",
                    "ESTI_OUT_BASICTEXT1": "명",
                    "ESTI_OUT_BASICNUM2": "12",
                    "ESTI_OUT_BASICTEXT2": "개월",
                    "ESTI_OUT_TOTMONEY": "51120000"
                },
                {
                    "ESTI_OUT_NAME": "만4세",
                    "ESTI_OUT_MONEY": "260000",
                    "ESTI_OUT_BASICNUM1": "2",
                    "ESTI_OUT_BASICTEXT1": "명",
                    "ESTI_OUT_BASICNUM2": "12",
                    "ESTI_OUT_BASICTEXT2": "개월",
                    "ESTI_OUT_TOTMONEY": "6240000"
                },
                {
                    "ESTI_OUT_NAME": "만5세",
                    "ESTI_OUT_MONEY": "260000",
                    "ESTI_OUT_BASICNUM1": "1",
                    "ESTI_OUT_BASICTEXT1": "명",
                    "ESTI_OUT_BASICNUM2": "12",
                    "ESTI_OUT_BASICTEXT2": "개월",
                    "ESTI_OUT_TOTMONEY": "3120000"
                },
                {
                    "ESTI_OUT_NAME": "만0세",
                    "ESTI_OUT_MONEY": "484000",
                    "ESTI_OUT_BASICNUM1": "3",
                    "ESTI_OUT_BASICTEXT1": "명",
                    "ESTI_OUT_BASICNUM2": "12",
                    "ESTI_OUT_BASICTEXT2": "개월",
                    "ESTI_OUT_TOTMONEY": "17424000"
                }
            ]
        },
        {
            "ESTI_DISPLAY": "211",
            "ESTI_INOUT": "I",
            "TOTAL_MONEY": "20160000",
            "budget_item": [
                {
                    "ESTI_OUT_NAME": "특별활동비",
                    "ESTI_OUT_MONEY": "70000",
                    "ESTI_OUT_BASICNUM1": "24",
                    "ESTI_OUT_BASICTEXT1": "명",
                    "ESTI_OUT_BASICNUM2": "12",
                    "ESTI_OUT_BASICTEXT2": "개월",
                    "ESTI_OUT_TOTMONEY": "20160000"
                }
            ]
        }
    ]
};

const registerBudgetCisSendData = {
    "version": version,
    "request_type": "budget_cis_send",
    "uid": userId,
    "service_name": "경기형",
    "trans_dtm": "20210624153000",
    "memo": "20210624153000 예산 업로드 테스트",
    "record_count": "1",
    "data": [
        {
            "ESTI_YEAR": "2021",
            "ESTIM_NAME": "본예산"
        }
    ]
};

const bankdaClient = new BankdaClient({ version: version, usertype: userType, userid: jangbuId, user_key: jangbuKey });
/** 전표, 전표+증빙 등록 */
const registerSlipUpload = async (bankdaClient: BankdaClient) => {
    await Kindergarten.registerSlipUpload(jangbuId, serviceCode, "slip_delete_upload", userId, registerSlipUploadData)
        .request(bankdaClient)
        .then(response => {
            console.log('전표, 전표+증빙 등록 성공 Response : ', response.data);
        })
        .catch(error => console.log('전표, 전표+증빙 등록 실패 Response : ', error.response.data));
};
/** 전표 CIS 등록 */
const registerSlipCisSend = async (bankdaClient: BankdaClient) => {
    await Kindergarten.registerSlipCisSend(jangbuId, serviceCode, "slip_cis_send", userId, registerSlipCisSendData)
        .request(bankdaClient)
        .then(response => {
            console.log('전표 CIS 등록 성공 Response : ', response.data);
        })
        .catch(error => console.log('전표 CIS 등록 실패 Response : ', error.response.data));
};
/** 전표/거래내역 분할 등록 */
const registerSlipSplitUpload = async (bankdaClient: BankdaClient) => {
    await Kindergarten.registerSlipSplitUpload(jangbuId, serviceCode, "slip_split_delete_upload", userId, registerSlipSplitDeleteUploadData)
        .request(bankdaClient)
        .then(response => {
            console.log('전표/거래내역 분할 등록 성공 Response : ', response.data);
        })
        .catch(error => console.log('전표/거래내역 분할 등록 실패 Response : ', error.response.data));
};
/** 예산 등록 */
const registerBudgetUpload = async (bankdaClient: BankdaClient) => {
    await Kindergarten.registerBudgetUpload(jangbuId, serviceCode, "budget_delete_upload", userId, registerBudgetDeleteUploadData)
        .request(bankdaClient)
        .then(response => {
            console.log('예산 등록 성공 Response : ', response.data);
        })
        .catch(error => console.log('예산 등록 실패 Response : ', error.response.data));
};
/** 예산 CIS 등록 */
const registerBudgetCisSend = async (bankdaClient: BankdaClient) => {
    await Kindergarten.registerBudgetCisSend(jangbuId, serviceCode, "budget_cis_send", userId, registerBudgetCisSendData)
        .request(bankdaClient)
        .then(response => {
            console.log('예산 CIS 등록 성공 Response : ', response.data);
        })
        .catch(error => console.log('예산 CIS 등록 실패 Response : ', error.response.data));
};

async function run() {
    await registerSlipUpload(bankdaClient);
    await registerSlipCisSend(bankdaClient);
    await registerSlipSplitUpload(bankdaClient);
    await registerBudgetUpload(bankdaClient);
    await registerBudgetCisSend(bankdaClient);
}

run();
