/*
    클래스는 설계도(문서)같은 것. 실체가 아니다. 

    클래스 vs 객체
    붕어빵틀 vs 붕어빵
*/
//#: 은닉화, 캡슐화
export class StorageService {
    #storageName; //전역변수(속성), #이 붙으면 private(비공개) 외부에서 접근할 수 없는 속성 
    #lastId;

    //생성자, 객체를 생성하려면 꼭 생성자를 호출해야 합니다. 
    //메소드지만 특별하다. 객체 생성(객체화)할 때만 호출할 수 있다.
    constructor(storageName) { //파라미터, 객체 생성 때 외부에서 값이 들어온다.
        if(!storageName) {
            throw new Error('스토리지 이름을 입력해주세요.');
        }
        this.#storageName = storageName;
        this.#lastId = 1;
    }

    // 스토리지 데이터 조회 p.161
    #getStorageData() {
        const json = localStorage.getItem(this.#storageName);
        if(json) { return JSON.parse(json); } //json문자열을 객체로 변환 후 리턴
        return {}; //빈 객체 리턴
    }

    // 스토리지 데이터 저장 p.161
    #saveStorageData(data) {
        const json = JSON.stringify(data); //객체(data)를 json문자열(value)로 변환 
        localStorage.setItem(this.#storageName, json); //value를 localStorage에 저장
    }

    // 신규 항목 추가 p.162
    addItem(item) {
        const storageData = this.#getStorageData();
        storageData[this.#lastId++] = item;
        this.#saveStorageData(storageData);
    }

    // 전체 항목 조회
    getItems() {
        return this.#getStorageData();
    }
    
    
}