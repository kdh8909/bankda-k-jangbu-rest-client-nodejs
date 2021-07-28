import RequestBase from './RequestBase';

export interface UserRequest {
    version: string;
    service_name: string;
    jid: string;
    uid: string;
    name: string;
    ceo: string;
    phone: string;
    email: string;
};

class User extends RequestBase {
    constructor() {
        super();
    }
    /* 고객 회원 등록 */
    public static registerUser(data: UserRequest): User {
        const user = new User();
        user.url = '/user';
        user.method = 'POST';
        user.data = data;
        return user;
    }
}

export default User;