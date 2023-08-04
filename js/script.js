
// 전적 함수 안에 로컬변수로 넣으면 함수 호출할때마다 0으로 초기화 되기 때문에 글로벌로 선언
let win = 0; 
let lose = 0;
let draw = 0;


function rps(n){
    let com = Math.ceil(Math.random()*3);  // 컴퓨터 가위바위보 난수발생기
    const myImage = document.getElementById('mimg');  // 내 가위바위보 이미지박스 id 값 저장
    const mrps = document.getElementById('mrps');   // 내 가위바위보 내용 들어가는 p태그 id값 저장
    const comImage = document.getElementById('cimg'); // 컴퓨터 가위바위보 이미지박스 id값 저장
    const crps = document.getElementById('crps');    // 컴퓨터 가위바위보 내용 들어가는 p태그 id값 저장
    const rbox = document.getElementById('result-box');  // 전적 출력되는 박스 id값 저장
    let message;
    
    // 컴퓨터 이미지/하단 텍스트 변경
    switch(com){
        case 1 : 
            comImage.src='images/scissors.png';
            crps.innerHTML = '가위';
        break;
        case 2 : 
            comImage.src='images/rock.png';
            crps.innerHTML = '바위';
        break;
        case 3 : 
            comImage.src='images/paper.png';
            crps.innerHTML = '보';
        break;
    }

    // 내 이미지/하단 텍스트 변경
    if(n == 1){
        myImage.src = 'images/scissors.png';
        mrps.innerHTML = '가위';
    }
    else if(n == 2){
        myImage.src = 'images/rock.png';
        mrps.innerHTML = '바위';
    }
    else if(n == 3){
        myImage.src = 'images/paper.png';
        mrps.innerHTML = '보';
    }
    
    // 가위바위보 결과에 따라서 나오는 결과 / 전적 / 승률 내용이 display : flex 된 박스 안에 결과에 따라서 win lose draw 값 증가시켜서 전적/승률 만들 수 있음
    if(n == com){
        message = "비겼네요, 다시해요!"
        draw++;
        rbox.innerHTML += `<div class="result"><p class="winner">비겼습니다!</p><p class="score">${win}승 ${draw}무 ${lose}패</p><p class="rate">승률 ${winRate()}%</p></div>`;
    }
    else if(n == 1 && com == 2){
        message = "푸하하, 내가 이겼어요. 메롱~"
        npc.classList.add('npcmove');
        lose++;
        rbox.innerHTML += `<div class="result"><p class="winner">My Melody Win!</p><p class="score">${win}승 ${draw}무 ${lose}패</p><p class="rate">승률 ${winRate()}%</p></div>`;
    }
    else if(n == 2 && com == 3){
        message = "푸하하, 내가 이겼어요. 메롱~"
        npc.classList.add('npcmove');
        lose++;
        rbox.innerHTML += `<div class="result"><p class="winner">My Melody Win!</p><p class="score">${win}승 ${draw}무 ${lose}패</p><p class="rate">승률 ${winRate()}%</p></div>`;
    }
    else if(n == 3 && com == 1){
        message = "푸하하, 내가 이겼어요. 메롱~"
        npc.classList.add('npcmove');
        lose++;
        rbox.innerHTML += `<div class="result"><p class="winner">My Melody Win!</p><p class="score">${win}승 ${draw}무 ${lose}패</p><p class="rate">승률 ${winRate()}%</p></div>`;
    }
    else if(n == 1 && com == 3){
        message = "실력자시군요. 다시 도전합니다."
        win++;
        rbox.innerHTML += `<div class="result"><p class="winner">You Win!</p><p class="score">${win}승 ${draw}무 ${lose}패</p><p class="rate">승률 ${winRate()}%</p></div>`;
    }
    else if(n == 2 && com == 1){
        message = "실력자시군요. 다시 도전합니다."
        win++;
        rbox.innerHTML += `<div class="result"><p class="winner">You Win!</p><p class="score">${win}승 ${draw}무 ${lose}패</p><p class="rate">승률 ${winRate()}%</p></div>`;
    }
    else if(n == 3 && com == 2){
        message = "실력자시군요. 다시 도전합니다."
        win++;
        rbox.innerHTML += `<div class="result"><p class="winner">You Win!</p><p class="score">${win}승 ${draw}무 ${lose}패</p><p class="rate">승률 ${winRate()}%</p></div>`;
    }
    document.getElementById('playgame').innerHTML = message;
}

// npc에 move클레스 지우기
npc.addEventListener('animationend', classrm, false);
function classrm(){
    npc.classList.remove('npcmove');
}

// 전적 초기화 버튼
function reset(){
    document.getElementById('result-box').innerHTML="";
    win=0;
    lose=0;
    draw=0;
}

// 승률 구하는 함수
function winRate(){
    let rate;
    let game = win+lose;
    if(win != 0){
        rate = parseInt((win/game)*100);
    }
    else{
        rate = 0;
    }
    return rate;
}
