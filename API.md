# REST API
HTTP 요청 리스트(axios)
### GET /myinfo
- 내 로그인 정보를 가져옴, 로그인이 되어 있지 않은 상태라면 false.
- return: {id: number, email: string,  nickname: string, age: numer}

### GET /users
- 유저들의 정보를 가져옴. 유저들의 정보가 없다면 false.
- return: { {user:object}, {user:object}, ... }

### GET /users/:id
- 특정 id에 대한 유저 정보를 가져옴. 일치하는 유저가 없다면 false.
- return: { id: number, email: string,  nickname: string, age: number }

### POST /users
- 회원가입 
- body: {  email: string(이메일), nickname: string(닉네임), password: string(비밀번호) } 
- return: 'ok'

### POST /imagetalk
- 이미지 게시판에 이미지 게시물 업로드.
- body: { id: number, nickname: string, email: string, image: string(이미지), text: string(게시물의 내용) }
