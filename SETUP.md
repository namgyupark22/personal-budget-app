# 나의 가계부 — GitHub Pages 독립 버전

ChatGPT 구독이나 로그인 없이 실행되는 정적 웹앱입니다. Google 로그인 후 본인에게 권한이 있는 시트만 읽고 씁니다. 앱 코드에는 개인 시트 주소, 기록, 토큰을 포함하지 않습니다.

## 배포
새 공개 저장소 personal-budget-app을 만들고 dist 안의 파일을 저장소 루트에 업로드합니다. Settings → Pages → Deploy from a branch → main / (root)로 설정합니다. 기존 비공개 웨딩 저장소를 공개로 전환하지 않습니다.

배포 후 setup.html 안내에 따라 Google Sheets API와 OAuth 웹 클라이언트를 설정하세요. 승인된 JavaScript 원본은 https://namgyupark22.github.io 이며 /personal-budget-app 경로는 넣지 않습니다. 클라이언트 보안 비밀은 사용하지 않습니다.

앱에서 클라이언트 ID → Google 연결 → 설정 → 2026 및 원본 시트 링크를 등록합니다. 시트는 비공개로 유지합니다. 연도별 설정은 브라우저마다 입력하며 새해에는 새 파일을 추가합니다.

로그인 토큰은 메모리에만 저장합니다. 거래 데이터는 Google Sheets에 저장하고, 저장 재시도 정보만 탭의 세션 저장소에 일시 보관합니다. Google 접근 권한은 계정의 스프레드시트 읽기·쓰기 범위입니다. 동일 기록의 여러 기기 동시 수정은 피하세요.

## 검증
node test.cjs — 가상 시트 검증. 실제 Google OAuth 및 쓰기는 최초 설정 후 별도로 확인해야 합니다.

