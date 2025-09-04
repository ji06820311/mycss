// 넘겨진 포로터리는 () 내애 적어 주시면 됩니다
function App({ greeting, welcome }) {
    // console.log('샘플')

    return (
        <header>
            <h1>{greeting}</h1>
            <p>{welcome}</p>
        </header>
    );
}

export default App;