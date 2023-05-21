console.log("GetCookies");

function getCookies() {
    /* 로컬에 저장된 쿠키 뿌려주기 */
    const allCookies = document.cookie;
    // 하나의 문자열로 리턴 --> cookie1=value; cookie2=value; cookie3=value
    console.log(typeof allCookies); // string

    /* if 조건문 -> 쿠키가 있으면 */
    if(allCookies != '')
        alert(`저장된 쿠키의 값은 ${allCookies} \n다시 방문해주셔서 환영합니다.`)
    else
        alert(`저장된 쿠키가 없습니다. \n(첫방문을 환영합니다.)`)
}

function setCookies() {
    // 기본적인 날짜 출력 -> 날짜 쓸일? -> 만료일 -> expiration, expire
    // let nowDate = new Date();
    // console.log(nowDate);

    // 만료일 생성
    // let expiration = nowDate.getDate() + 10; // 30
    // console.log(typeof expiration);

    // 20일 -> 30일로 날짜가 나타나도록 생성
    let expiration = new Date();
    expiration.setDate(expiration.getDate()+10);
    console.log(expiration);

    // 날짜를 쿠키로 저장하기 위해서 -> UTC 방식으로 표기 -> toUTCString() 메서드 사용.
    console.log(expiration.toUTCString());

    // 쿠키 생성하기
    let cookies = '';
    cookies = `userid=helloworld; expires=${expiration.toUTCString()};`;
    console.log(cookies);

    // 쿠키 저장하기
    document.cookie = cookies;
    alert('쿠키를 생성하였습니다.');
}

function delCookies() {
    // document.cookie에 값을 대입하는 형태로 -> 쿠키 삭제(or 생성/수정)
    // 직접 삭제가 아니라 수정이라고 봐야함. 만료일을 정해놓은 쿠키를 과거의 날짜로 수정해서 쿠키를 수정하는 것 -> 수정이 즉 삭제의 의미
    // 쿠키 삭제는? 이미 한참 지나간 시간을 입력해버림으로써 쿠키를 삭제시킨다.
    document.cookie = 'username=honggildong;'; // 쿠키생성
    document.cookie = 'username=leesoonsin;'; // 쿠키수정
    document.cookie = 'username=leesoonsin; expires=Sat, 01 Jan 1972 00:00:00 GMT' // 쿠키삭제
    document.cookie = 'userid=leesoonsin; expires=Sat, 01 Jan 1972 00:00:00 GMT' // 쿠키삭제
    alert('쿠키를 삭제하였습니다.');
}