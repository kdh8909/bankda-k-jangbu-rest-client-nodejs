# 뱅크다K 장부사 API 클라이언트 (NodeJS)

## 설치

```
$ npm install bankda-k-jangbu-rest-client-nodejs
```

## 사용
### 인스턴스 생성

```ts
BankdaClient bankda = new BankdaClient(
    {
        version: "버전",
        usertype: "유저타입",
        userid: "아이디",
        user_key: "비밀번호"
    });
```

- bankda : BankdaClient 인스턴스
- jangbuId : 장부사 ID
- serviceCode : 서비스 코드(경기형: GYEONGGI, 인천형: INCHEON, 대구형: DAEGU, 서울형: SEOUL, W4C, EDI, FOOD_DELIVERY)
- requestType : 요청 타입
- userId : 회원 ID
- data : 업무별 Request Data

### 인증

> 토큰 발급

```ts
await Auth.createToken(
    {
        version: "버전",
        usertype: "유저타입",
        userid: "아이디",
        user_key: "비밀번호"
    })
    .request(bankda)
    .then(response => console.log('토큰 발급 성공 : ', response.data))
    .catch(error => console.log('토큰 발급 실패 : ', error.response.data));
```

> 토큰 재발급

```ts
await Auth.refreshToken(
    {
        version: "버전",
        refresh_token: "Refresh Token"
    })
    .request(bankda)
    .then(response => console.log('토큰 재발급 성공 : ', response.data))
    .catch(error => console.log('토큰 재발급 실패 : ', error.response.data));
```

### 회원

> 고객 회원 등록

```ts
await User.registerUser(
    {
        version: "버전",
        service_name: "서비스명",
        jid: "장부사 ID",
        uid: "회원 ID",
        name: "회원명",
        ceo: "대표명",
        phone: "연락처",
        email: "이메일"
    }
    .request(bankda)
    .then(response => console.log('고객 회원 등록 성공 : ', response.data))
    .catch(error => console.log('고객 회원 등록 실패 : ', error.response.data));
)
```

### 어린이집

> 전표, 전표 + 증빙 등록
 
```ts
await Kindergarten.registerSlipUpload(jangbuId, serviceCode, requestType, userId, data)
    .request(bankda)
    .then(response => console.log('전표, 전표+증빙 등록 성공 : ', response.data))
    .catch(error => console.log('전표, 전표+증빙 등록 실패 : ', error.response.data));
```

> 전표 CIS 등록

```ts
await Kindergarten.registerSlipCisSend(jangbuId, serviceCode, requestType, userId, data)
    .request(bankda)
    .then(response => console.log('전표 CIS 등록 성공 : ', response.data))
    .catch(error => console.log('전표 CIS 등록 실패 : ', error.response.data));
```

> 전표/거래내역 분할 등록

```ts
await Kindergarten.registerSlipSplitUpload(jangbuId, serviceCode, requestType, userId, data)
    .request(bankda)
    .then(response => console.log('전표/거래내역 분할 등록 성공 : ', response.data))
    .catch(error => console.log('전표/거래내역 분할 등록 실패 : ', error.response.data));
```

> 예산 등록

```ts
await Kindergarten.registerBudgetUpload(jangbuId, serviceCode, requestType, userId, data)
    .request(bankda)
    .then(response => console.log('예산 등록 성공 : ', response.data))
    .catch(error => console.log('예산 등록 실패 : ', error.response.data));
```

> 예산 CIS 등록

```ts
await Kindergarten.registerBudgetCisSend(jangbuId, serviceCode, requestType, userId, data)
    .request(bankda)
    .then(response => console.log('예산 CIS 등록 성공 : ', response.data))
    .catch(error => console.log('예산 CIS 등록 실패 : ', error.response.data));
```
---
### W4C

> 데이터 등록

```ts
await W4c.registerW4cSlipUpload(jangbuId, serviceCode, userId, data)
    .request(bankda)
    .then(response => console.log('W4C 데이터 등록 성공 : ', response.data))
    .catch(error => console.log('W4C 데이터 등록 실패 : ', error.response.data));
```

> 월간 데이터 등록

```ts
await W4c.registerW4cSlipUploadMonthly(jangbuId, serviceCode, userId, data)
    .request(bankda)
    .then(response => console.log('W4C 월간 데이터 등록 성공 : ', response.data))
    .catch(error => console.log('W4C 월간 데이터 등록 실패 : ', error.response.data));
```
---
### EDI

> 데이터 등록

```ts
await Edi.registerEdi(jangbuId, serviceCode, requestType, userId, data)
    .request(bankda)
    .then(response => console.log('EDI 데이터 등록 성공 : ', response.data))
    .catch(error => console.log('EDI 데이터 등록 실패 : ', error.response.data));
```
---
### 음식배달

> 데이터 등록

```ts
await Delivery.registerDelivery(jangbuId, serviceCode, userId, data)
    .request(bankda)
    .then(response => console.log('음식배달 데이터 등록 성공 : ', response.data))
    .catch(error => console.log('음식배달 데이터 등록 실패 : ', error.response.data));
```

---
### 업무 내역

> 등록 상태 조회

```ts
await Work.getWorkStatus(jangbuId, registerCode, params)
    .request(bankda)
    .then(response => console.log('등록 상태 조회 성공 : ', response.data))
    .catch(error => console.log('등록 상태 조회 실패 : ', error.response.data));
```

> 등록 결과 조회

```ts
await Work.getWorkResult(jangbuId, registerCode, params)
    .request(bankda)
    .then(response => console.log('등록 결과 조회 성공 : ', response.data))
    .catch(error => console.log('등록 결과 조회 실패 : ', error.response.data));
```

> 전표/증빙자료 조회

```ts
await Work.getVoucher(jangbuId, serviceCode, userId, params)
    .request(bankda)
    .then(response => console.log('전표/증빙자료 조회 성공 : ', response.data))
    .catch(error => console.log('전표/증빙자료 조회 실패 : ', error.response.data));
```