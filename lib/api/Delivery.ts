import RequestBase from './RequestBase';

interface RegisterDeliveryRequest {
    version: string;
    request_type: string;
    uid: string;
    service_name: string;
    provider_type: string;
    trans_dtm: string;
    memo: string;
    record_count: string;
    data: {
        userid: string;
        password: string;
        startdate: string;
        enddate: string;
        company_number: string;
    }[];
}

class Delivery extends RequestBase {
    constructor() {
        super();
    }
    /* 데이터 등록 */
    public static registerDelivery(jangbuId: string, serviceCode: string, userId: string, data: RegisterDeliveryRequest): Delivery {
        const delivery = new Delivery();
        delivery.url = `/delivery/jangbu/${jangbuId}/service/${serviceCode}/user/${userId}`;
        delivery.method = 'POST';
        delivery.data = data;
        return delivery;
    }
}

export default Delivery;