import RequestBase from './RequestBase';
import qs from 'qs';

export interface SendMessageRequest {
    version: string;
    title: string;
    content: string;
    target: { uid: string }[];
};

export interface GetResultMessageRequest {
    version: string;
    result_type: string;
    register_code?: string;
    uid?: string;
    from?: string;
    to?: string;
    date?: string;
}

class Message extends RequestBase {
    constructor() {
        super();
    }
    /* 푸시 메시지 발송 */
    public static sendPushMessage(data: SendMessageRequest): Message {
        const message = new Message();
        message.url = '/message';
        message.method = 'POST';
        message.data = data;
        return message;
    }

    /* 푸시 메시지 발송결과 조회*/
    public static getResultPushMessage(data: GetResultMessageRequest): Message {
        const message = new Message();
        message.url = '/message';
        message.method = 'GET';
        message.params = qs.stringify(data);
        return message;
    }
}

export default Message;