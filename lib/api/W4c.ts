import RequestBase from './RequestBase';

interface RegisterW4cSlipUploadRequest {
    version: string;
    request_type: string;
    uid: string;
    service_name: string;
    sub_code: string;
    trans_dtm: string;
    memo: string;
    record_count: string;
    data: {
        DFRT_DE: string;
        ACC_NM: string;
        REMK: string;
        CR_TMM_OCUR_AMT: string;
        DR_TMM_OCUR_AMT: string;
        OPNT_ACC_NM: string;
        FDSRC_NM: string;
        BCNC_NM: string;
        BSNS_NM: string;
        ACCT_NUMBER: string;
        ACCT_MNGT_NM: string;
    }[];
}

class W4c extends RequestBase {
    constructor() {
        super();
    }
    /* 데이터 등록 */
    public static registerW4cSlipUpload(jangbuId: string, serviceCode: string, userId: string, data: RegisterW4cSlipUploadRequest): W4c {
        const w4c = new W4c();
        w4c.url = `/w4c/jangbu/${jangbuId}/service/${serviceCode}/slip/user/${userId}`;
        w4c.method = 'POST';
        w4c.data = data;
        return w4c;
    }

    /* 월간 데이터 등록 */
    public static registerW4cSlipUploadMonthly(jangbuId: string, serviceCode: string, userId: string, data: RegisterW4cSlipUploadRequest): W4c {
        const w4c = new W4c();
        w4c.url = `/w4c/jangbu/${jangbuId}/service/${serviceCode}/slip-monthly/user/${userId}`;
        w4c.method = 'POST';
        w4c.data = data;
        return w4c;
    }
}

export default W4c;