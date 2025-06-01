function startTest() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  setQuestion();
}


const questions = ['1. 계획 세우는 걸 좋아하나요?', '2. 색감이 강한 것을 좋아하나요?', '3. 집 안에 포인트 아이템이 많은 편인가요?', '4. 친구에게 먼저 연락하는 편인가요?', '5. 즉흥 여행을 좋아하나요?', '6. 고전보다 현대적인 것을 선호하나요?', '7. 주변에서 감성적이라는 말을 자주 듣나요?', '8. 자연 속에서 에너지를 얻는 편인가요?', '9. 선택에 시간이 오래 걸리는 편인가요?', '10. 독특하다는 이야기를 자주 듣나요?', '11. 가구보다 인테리어 소품을 더 많이 사나요?', '12. 논리적으로 설명하는 걸 좋아하나요?', '13. 전통적인 것을 좋아하나요?', '14. 주변 분위기를 살피는 편인가요?', '15. 창의적인 활동을 즐기나요?'];
let current = 0;
let score = 0;

function chooseAnswer(type) {
  if (type === 'A') score += 1;
  current++;
  if (current < questions.length) {
    setQuestion();
  } else {
    showResult();
  }
}

function setQuestion() {
  document.getElementById("question").innerText = questions[current];
  document.getElementById("btnA").innerText = "예";
  document.getElementById("btnB").innerText = "아니요";
}

function showResult() {
  document.getElementById("quiz-box").style.display = "none";
  const results = [{'name': '바르셀로나 체어', 'desc': '기하학적 구조와 절제미가 있는 당신은 이성적이고 논리적인 사람입니다.', 'img': 'images/barcelona.jpg'}, {'name': '이임스 라운지 체어', 'desc': '안정감과 부드러움을 중시하는 당신은 조용하지만 배려심이 깊어요.', 'img': 'images/eames.jpg'}, {'name': '토넷 No.14 체어', 'desc': '실용적인 동시에 클래식한 감각을 가진 당신은 소박하고 균형 잡힌 사람입니다.', 'img': 'images/thonet.jpg'}, {'name': '레드 앤 블루 체어', 'desc': '선명한 기준과 독창성을 지닌 당신은 예술적 감각이 뛰어나요.', 'img': 'images/redblue.jpg'}, {'name': '와실리 체어', 'desc': '산업적 감성과 논리를 좋아하는 당신은 계획형 현실주의자입니다.', 'img': 'images/wassily.jpg'}, {'name': '파이프 체어', 'desc': '단단한 논리와 효율을 중시하는 당신은 차분하고 분석적인 성격이에요.', 'img': 'images/pipe.jpg'}, {'name': '체스카 체어', 'desc': '고전과 현대를 조화시키는 당신은 섬세하면서도 유연한 사고를 가졌어요.', 'img': 'images/cesca.jpg'}, {'name': '합하우스 체어', 'desc': '질서와 절제를 중요시하는 당신은 깔끔하고 신중한 편이에요.', 'img': 'images/haus.jpg'}, {'name': 'LC2 체어', 'desc': '단단한 논리와 신뢰감이 돋보이는 당신은 친구들에게 의지가 되는 사람이에요.', 'img': 'images/lc2.jpg'}, {'name': '안티 체어', 'desc': '독특한 감각으로 규칙을 유쾌하게 비트는 창의적인 성격이에요.', 'img': 'images/ant.jpg'}, {'name': '립 체어', 'desc': '톡톡 튀고 감정을 솔직히 표현하는 당신은 개성 넘치는 예술가 타입!', 'img': 'images/lip.jpg'}, {'name': '마시멜로 체어', 'desc': '말랑하고 귀여운 분위기의 당신은 모두에게 따뜻함을 주는 사람이에요.', 'img': 'images/marshmallow.jpg'}, {'name': '벨에어 체어', 'desc': '자유로운 상상력과 유머가 있는 당신은 창의적인 아이디어 뱅크!', 'img': 'images/belair.jpg'}, {'name': '프로스트 암체어', 'desc': '클래식함 속에 반전이 있는 당신, 과거와 현재를 자유롭게 넘나드는 스타일!', 'img': 'images/frost.jpg'}, {'name': '루이 고스트 체어', 'desc': '투명하고 고급스러운 감성을 지닌 당신은 신비롭고 세련된 사람이에요.', 'img': 'images/louisghost.jpg'}, {'name': '애로우 체어', 'desc': '날카로운 직관과 정확함을 중시하는 당신은 똑부러진 실천가!', 'img': 'images/arrow.jpg'}, {'name': '톱백 체어', 'desc': '뒤틀린 구조 속의 질서를 찾는 당신은 복잡하지만 매력적인 성격!', 'img': 'images/topback.jpg'}, {'name': '모나리자 체어', 'desc': '예술과 현실을 넘나드는 당신은 이미지로 감정을 표현하는 사람!', 'img': 'images/monalisa.jpg'}, {'name': '자나두 체어', 'desc': '기하학적이고 몽환적인 성격의 당신은 남들이 이해 못하는 독특한 매력!', 'img': 'images/xanadu.jpg'}, {'name': '잔디 의자', 'desc': '자연과 함께 어우러지고 싶어하는 당신은 따뜻하고 순한 사람입니다.', 'img': 'images/grass.jpg'}];
  const index = score % results.length;
  const result = results[index];
  document.getElementById("chair-name").innerText = result.name;
  document.getElementById("result-desc").innerText = result.desc;
  document.getElementById("chair-img").src = result.img;
  document.getElementById("result-box").style.display = "block";
}

window.onload = setQuestion;
