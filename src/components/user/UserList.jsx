import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // API 호출
    axios
      .get("http://localhost:8080/user/userList")
      .then((response) => {
        // 데이터를 받은 후 permission으로 정렬
        const sortedUsers = response.data.sort(
          (a, b) => a.permission - b.permission
        );
        setUsers(sortedUsers);
        console.log(users);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생: " + error);
      });
  }, []);

  // "승인하기" 클릭 시 실행되는 함수
  const grantPermission = (userId) => {
    updatePermission(userId, 1); // 1은 승인을 나타냅니다
  };
  // "취소하기" 클릭 시 실행되는 함수
  const revokePermission = (userId) => {
    updatePermission(userId, 0); // 0은 철회를 나타냅니다
  };

  const updatePermission = async (userId, permissionValue) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/user/setPermission",
        { userId: userId, permission: permissionValue }
      );

      if (response.status === 200) {
        //권한 변경 성공시 로그인창으로 이동;
        window.location.replace("/userList");
      } else {
        window.alert("입니다.");
        console.log(response.message);
      }
    } catch (error) {
      console.error("API 호출 중 오류 발생: " + error);
    }
  };

  return (
    <div>
      <h1>사용자 목록</h1>
      <table>
        <thead>
          <tr>
            <th>아이디</th>
            <th>이메일</th>
            <th>닉네임</th>
            <th>연락처</th>
            <th>성별</th>
            <th>생년월일</th>
            <th>나이</th>
            <th>권한</th>
            <th>승인</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.userId}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.nickname}</td>
              <td>{item.phone}</td>
              <td>{item.gender}</td>
              <td>{item.userBirth}</td>
              <td>{item.userAge}</td>
              <td>{item.permission}</td>
              <td>
                {item.permission === 0 ? (
                  <button onClick={() => grantPermission(item.userId)}>
                    승인하기
                  </button>
                ) : item.permission === 1 ? (
                  <button onClick={() => revokePermission(item.userId)}>
                    취소하기
                  </button>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
