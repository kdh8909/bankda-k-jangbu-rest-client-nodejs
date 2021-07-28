import RequestBase from './RequestBase';

interface RegisterSlipUploadRequest {
    version: string;
    request_type: string;
    uid: string;
    service_name: string;
    trans_dtm: string;
    memo: string;
    record_count: string;
    data: {
        TRANS_DATETIME: string;
        BILL_DATE: string;
        TRANS_DATE: string;
        ESTI_CODE: string;
        ESTI_INOUT: string;
        BILL_MEMO: string;
        BILL_BIGO: string;
        BILL_SUPPORT_AT: string;
        BILL_NURI_AT: string;
        TRANS_GB: string;
        TRANS_MONEY: string;
        TRANS_MONEY_IN: string;
        TRANS_MONEY_OUT: string;
        TRANS_REMAIN: string;
        TRANS_MEMO: string;
        SETLE_MTHD: string;
        VOUCHER?: {
            url: string;
            filename: string;
        }[];
    }[];
}

interface RegisterSlipCisSendRequest {
    version: string;
    request_type: string;
    uid: string;
    service_name: string;
    trans_dtm: string;
    memo: string;
    record_count: string;
    data: {
        schYearMonth: string;
    }[];
}

interface RegisterSlipSplitUploadRequest {
    version: string;
    request_type: string;
    uid: string;
    service_name: string;
    trans_dtm: string;
    memo: string;
    record_count: string;
    data: {
        bank: {
            TRANS_DATETIME: string;
            TRANS_DATE: string;
            TRANS_GB: string;
            TRANS_MONEY: string;
            TRANS_MONEY_IN: string;
            TRANS_MONEY_OUT: string;
            TRANS_REMAIN: string;
            TRANS_MEMO: string;
        },
        slip: {
            BILL_DATE: string;
            BILL_ORDER_DATE: string;
            ESTI_CODE: string;
            ESTI_INOUT: string;
            BILL_MONEY: string;
            BILL_MEMO: string;
            BILL_BIGO: string;
            BILL_SUPPORT_AT: string;
            BILL_NURI_AT: string;
            SETLE_MTHD: string;
            VOUCHER?: {
                url: string;
                filename: string;
            }[];
        }[];
    }[];

}

interface RegisterBudgetUploadRequest {
    version: string;
    request_type: string;
    uid: string;
    service_name: string;
    trans_dtm: string;
    memo: string;
    record_count: string;
    budget_year: string;
    estim_name: string;
    data: {
        ESTI_DISPLAY: string;
        ESTI_INOUT: string;
        TOTAL_MONEY: string;
        budget_item: {
            ESTI_OUT_NAME: string;
            ESTI_OUT_MONEY: string;
            ESTI_OUT_BASICNUM1?: string;
            ESTI_OUT_BASICTEXT1?: string;
            ESTI_OUT_BASICNUM2?: string;
            ESTI_OUT_BASICTEXT2?: string;
            ESTI_OUT_BASICNUM3?: string;
            ESTI_OUT_BASICTEXT3?: string;
            ESTI_OUT_BASICNUM4?: string;
            ESTI_OUT_BASICTEXT4?: string;
            ESTI_OUT_BASICNUM5?: string;
            ESTI_OUT_BASICTEXT5?: string;
            ESTI_OUT_BASICNUM6?: string;
            ESTI_OUT_BASICTEXT6?: string;
            ESTI_OUT_BASICNUM7?: string;
            ESTI_OUT_BASICTEXT7?: string;
            ESTI_OUT_BASICNUM8?: string;
            ESTI_OUT_BASICTEXT8?: string;
            ESTI_OUT_BASICNUM9?: string;
            ESTI_OUT_BASICTEXT9?: string;
            ESTI_OUT_TOTMONEY: string;
          }[];
      }[];
}

interface RegisterBudgetCisSendRequest {
    version: string;
    request_type: string;
    uid: string;
    service_name: string;
    trans_dtm: string;
    memo: string;
    record_count: string;
    data: {
        ESTI_YEAR: string;
        ESTIM_NAME: string;
    }[];
}

class Kindergarten extends RequestBase {
    constructor() {
        super();
    }
    /* 전표, 전표+증빙 등록 */
    public static registerSlipUpload(jangbuId: string, serviceCode: string, requestType: string, userId: string, data: RegisterSlipUploadRequest): Kindergarten {
        const kindergarten = new Kindergarten();
        kindergarten.url = `/kindergarten/jangbu/${jangbuId}/service/${serviceCode}/slip/${requestType}/user/${userId}`;
        kindergarten.method = 'POST';
        kindergarten.data = data;
        return kindergarten;
    }

    /* 전표 CIS 등록 */
    public static registerSlipCisSend(jangbuId: string, serviceCode: string, requestType: string, userId: string, data: RegisterSlipCisSendRequest): Kindergarten {
        const kindergarten = new Kindergarten();
        kindergarten.url = `/kindergarten/jangbu/${jangbuId}/service/${serviceCode}/slip-cis/${requestType}/user/${userId}`;
        kindergarten.method = 'POST';
        kindergarten.data = data;
        return kindergarten;
    }

    /* 전표/거래내역 분할 등록 */
    public static registerSlipSplitUpload(jangbuId: string, serviceCode: string, requestType: string, userId: string, data: RegisterSlipSplitUploadRequest): Kindergarten {
        const kindergarten = new Kindergarten();
        kindergarten.url = `/kindergarten/jangbu/${jangbuId}/service/${serviceCode}/slip-split/${requestType}/user/${userId}`;
        kindergarten.method = 'POST';
        kindergarten.data = data;
        return kindergarten;
    }

    /* 예산 등록 */
    public static registerBudgetUpload(jangbuId: string, serviceCode: string, requestType: string, userId: string, data: RegisterBudgetUploadRequest): Kindergarten {
        const kindergarten = new Kindergarten();
        kindergarten.url = `/kindergarten/jangbu/${jangbuId}/service/${serviceCode}/budget/${requestType}/user/${userId}`;
        kindergarten.method = 'POST';
        kindergarten.data = data;
        return kindergarten;
    }

    /* 예산 CIS 등록 */
    public static registerBudgetCisSend(jangbuId: string, serviceCode: string, requestType: string, userId: string, data: RegisterBudgetCisSendRequest): Kindergarten {
        const kindergarten = new Kindergarten();
        kindergarten.url = `/kindergarten/jangbu/${jangbuId}/service/${serviceCode}/budget-cis/${requestType}/user/${userId}`;
        kindergarten.method = 'POST';
        kindergarten.data = data;
        return kindergarten;
    }
}

export default Kindergarten;