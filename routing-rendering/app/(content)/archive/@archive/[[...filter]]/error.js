"use client";
// 에러가 서버 상에서만 나는게 아니라 클라이언트 코드 상에서 나는 경우도 있기 때문에
// use client를 사용해야 함

export default function FilterError({ error }) {
  return (
    <div id="error">
      <h1>An error occured!</h1>
      <p>{error.message}</p>
    </div>
  );
}
