const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const profile = {
  name: '박현지',
  school: '인하공업전문대학',
  major: 'IT융합학부 정보통신공학과',
  grade: '3학년',
  photo: '/images/profile.jpg',
  email: 'aa98229975@gmail.com',
  phone: '010-9822-9975',
  github: 'https://github.com/aa98229975-a11y',
  interests: ['공공데이터', '데이터 분석', '발표'],
  awards: [
    { year: '2025', title: '예강키움희망재단 PoC 해커톤 대상', org: '예강키움희망재단' },
    { year: '2026', title: '임업통계 활용 경진대회 장려상(한국임업진흥원장상)', org: '산림청' },
    { year: '2026', title: '인하 창의·융합 아이디어 캠프 은상', org: '인하공업전문대학' },
    { year: '2026', title: '텍스코어(TeX-Corps) 시장 재검증 프로그램 선정', org: '한국청년기업가정신재단' },
  ],
  goal: '저 높이 올라가는 그날까지 !',
};

app.get('/', (req, res) => {
  res.render('index', { profile });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 실행 중`);
});