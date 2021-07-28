import RequestBase from './RequestBase';

interface RegisterEdiRequest {
    version: string;
    request_type: string;
    uid: string;
    service_name: string;
    trans_dtm: string;
    memo: string;
    record_count: string;
    data: {
       mgmtNo: string;
       yyyyMM: string;
    }[];
}

class Edi extends RequestBase {
    constructor() {
        super();
    }
    /* 데이터 등록 */
    public static registerEdi(jangbuId: string, serviceCode: string, requestType: string, userId: string, data: RegisterEdiRequest): Edi {
        const edi = new Edi();
        edi.url = `/edi/jangbu/${jangbuId}/service/${serviceCode}/${requestType}/user/${userId}`;
        edi.method = 'POST';
        edi.data = data;
        return edi;
    }
}

export default Edi;