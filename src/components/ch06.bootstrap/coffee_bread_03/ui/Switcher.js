// 프로그램 모드에 따라서 화면을 분기해주는 스위치 앱
import Display from './Display';
import CreateContent from './CreateContent'

function App({ mode, product, onSubmitInsert }) {
    console.log(`현재 모드 : ${mode}`);

    const onSwitchInsert = (formDate) => {
        console.log(`등록 버튼 누름(Switcher)`);
        onSubmitInsert(formDate); //넘어온 폼 정보를 main 파일로 넘김
    }

    switch (mode) {
        case 'detail':
            return <Display product={product} />;

        case 'get_insert': // 상품 등록 화면으로 이동
            return <CreateContent onSubmitInsert={onSwitchInsert} />;

        case 'read': // 읽기 모드
            return <div />;

        default:
            return null;
    }


}

export default App;