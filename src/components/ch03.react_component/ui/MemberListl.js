function App(){
   // console.log('샘플');
   const memberList = [
    {
        id: "hong123",
        name: "홍길동",
        email: "hong123@example.com",
        joinDate: "2024-06-15",
        age: 10
    },
    {
        id: "kimc456",
        name: "김철수",
        email: "kimc456@example.com",
        joinDate: "2024-07-20",
        age: 15
    },
    {
        id: "park789",
        name: "박영희",
        email: "park789@example.com",
        joinDate: "2024-08-05",
        age: 20
    },
    {
        id: "lee101",
        name: "이민수",
        email: "lee101@example.com",
        joinDate: "2024-09-12",
        age: 25
    }
];
    
    const mem = memberList.map((member)=>(
        <tr key={member.id}>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.email}</td>
            <td>{member.joinDate}</td>
            <td>{member.age}</td>
            <td>{member.age >=20 ? "성인" : "미성년자"}</td>
        </tr>
    ));


    return(
         <table border="1">
            <thead>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>메일 주소</th>
                    <th>업데이트</th>
                    <th>나이</th>
                    <th>성인여부</th>
                </tr>
            </thead>
            <tbody>
                {mem}
            </tbody>
        </table>
    );
}

export default App;