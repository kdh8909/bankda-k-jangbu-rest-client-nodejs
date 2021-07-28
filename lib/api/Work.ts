import RequestBase from './RequestBase';
import qs from 'qs';

interface GetWorkStatusRequest {
    version: string;
}

interface GetWorkResultRequest {
    version: string;
}

interface GetVoucherRequest {
    version: string;
    yearmonth: string;
}

class Work extends RequestBase {
    constructor() {
        super();
    }
    /* 등록 상태 조회 */
    public static getWorkStatus(jangbuId: string, registerCode: string, params: GetWorkStatusRequest): Work {
        const work = new Work();
        work.url = `/jangbu/${jangbuId}/status/${registerCode}`;
        work.method = 'GET';
        work.params = qs.stringify(params);
        return work;
    }

    /* 등록 결과 조회 */
    public static getWorkResult(jangbuId: string, registerCode: string, params: GetWorkResultRequest): Work {
        const work = new Work();
        work.url = `/jangbu/${jangbuId}/result/${registerCode}`;
        work.method = 'GET';
        work.params = qs.stringify(params);
        return work;
    }

    /* 전표/증빙자료 조회 */
    public static getVoucher(jangbuId: string, serviceCode: string, userId: string, params: GetVoucherRequest): Work {
        const work = new Work();
        work.url = `/jangbu/${jangbuId}/service/${serviceCode}/user/${userId}/voucher`;
        work.method = 'GET';
        work.params = qs.stringify(params);
        return work;
    }
}

export default Work;