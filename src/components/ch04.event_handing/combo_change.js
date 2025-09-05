function App() {
  console.log("샘플");

  // 콤보 선택 시 실행되는 함수
  function handleChange(e) {
    const value = e.target.value;
    const listArea = document.getElementById("listArea");

    // 초기화
    listArea.innerHTML = "";

    if (value === "빵") {
      const breads = ["식빵", "바게트", "크루아상"];
      const ul = document.createElement("ul");
      breads.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = item;
        li.style.cursor = "pointer";
        li.onclick = () => {
          alert(item); // 클릭한 항목 alert
        };
        ul.appendChild(li);
      });
      listArea.appendChild(ul);
    } else if (value === "음료수") {
      const drinks = ["콜라", "사이다", "주스"];
      const ol = document.createElement("ol");
      drinks.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = item;
        li.style.cursor = "pointer";
        li.onclick = () => {
          alert(item); // 클릭한 항목 alert
        };
        ol.appendChild(li);
      });
      listArea.appendChild(ol);
    }
  }

  return (
    <div className="App">
      <h2>콤보 change + 목록 클릭 이벤트</h2>

      {/* 콤보박스 */}
      <select onChange={handleChange}>
        <option value="">-- 선택하세요 --</option>
        <option value="빵">빵</option>
        <option value="음료수">음료수</option>
      </select>

      {/* 목록 표시 영역 */}
      <div id="listArea" style={{ marginTop: "15px" }}></div>
    </div>
  );
}

export default App;