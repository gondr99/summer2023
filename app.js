window.onload = ()=>{
    const lectureList = 
    [
        {name:"2D Parkour Runner 게임 개발반", file:"01.png", difficulty:"중급", teacher: "이재희", grade:[1,2], desc:"파쿠르 러너 게임을 처음부터 끝까지 만들어보는 수업"},
        {name:"유니티 뱀서라이크 게임개발반", file:"03.png", difficulty:"상급", teacher: "채한승", grade:[1], desc:"뱀파이어 서바이버 게임 클로닝과 출시, 광고삽입, 앱스토어별 규정 학습"},
        {name:"유니티 왕기초 어몽어스구현반", file:"04.png", difficulty:"초급", teacher: "김인옥", grade:[1,2], desc:"어몽어스 게임속에 나오는 미션 미니게임들을 유니티로 구현해보는 반"},
        {name:"길건너 친구들 클론닝을 통해 유니티 기초 배우기", file:"08.png", difficulty:"초급", teacher: "이준호", grade:[1, 2], desc:"길건너 친구들 게임을 클론닝하면서 게임개발의 기초학습을 배움"},
        {name:"유니티 최적화 기법 프로그래밍반", file:"05.png", difficulty:"상급", teacher: "유준무", grade:[2], desc:"유니티 최적화 기법, 딥 프로파일링, Gc, 힙익스플로러를 학습하고 유니티 신규 시스템인 Job과 DOTS의 개념도 익힌다."},
        {name:"비동기 프로그래밍&게임서버 제작반", file:"06.png", difficulty:"중급", teacher: "최홍석", grade:[1,2], desc:"C# 비동기 프로그래밍 기법을 이용한 서버와 유니티 클라이언트를 활용하여 멀티플레이어 세균전 게임 만들기"},
        {name:"유니티 ScriptableObject 프로그래밍반", file:"02.png", difficulty:"중급", teacher: "이상진", grade:[2], desc:"Scriptable Object의 이해와 이를 활용한 Skinned Mesh 장비교체 알고리즘 개발"},
        {name:"유니티 CG, HLSL 셰이더 프로그래밍반", file:"07.png", difficulty:"중급", teacher: "최선한", grade:[1, 2], desc:"유니티 CG 프로그래밍 기법과 URP변환, HLSL 프로그래밍, 라이트 셰이더 등을 학습"},
        
        {name:"3D 게임 그래픽 기초(1학년)", file:"09.png", difficulty:"초급", teacher: "최용준", grade:[1], desc:"게임에서 사용하는 이미지의 이해와, 노말, 라이팅, PBR에 대한 이해"},
        {name:"3D 게임 그래픽 심화(2학년)", file:"10.png", difficulty:"중급", teacher: "김종엽", grade:[2], desc:"PBR텍스쳐, 서브스턴스 디자이너, 텍스쳐 제작 등을 학습"},
        
        {name:"게임기획", file:"11.png", difficulty:"초,중급", teacher: "정직한", grade:[1, 2], desc:"게임기획의 기초지식 학습"},
    ];
    const popup = document.querySelector("#popup");
    const image = document.querySelector("#descImg");
    const container = document.querySelector("#card_box");
    container.innerHTML = "";
    lectureList.forEach(lec => {
        let dom =  makeTemplate(lec);
        container.append(dom);
    });

    document.querySelector("#closeBtn").addEventListener("click", e => {
        popup.classList.remove("on");
    });
    document.querySelector(".container").addEventListener("click", e => {
        if(e.target.classList.contains("btn"))
        {
            const btn = e.target;
            image.src = `images/${btn.dataset.file}`;
            popup.classList.add("on");
        }
    });
}    

function makeTemplate({name, difficulty, teacher, grade, desc, file})
{
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card d-flex">
        <div class="card-header">
            <h4>${name} - ${teacher}</h4>
        </div>
        <div class="card-content">
            <div class="info-box">
                <div class="difficulty">${difficulty}</div>
                <div class="grade">${makeGradeBadge(grade)}</div>
            </div>
            <div class="desc">${desc}</div>
        </div>
        <div class="card-footer">
            <button class="btn" data-file="${file}">상세보기</button>
        </div>
    </div>`;
    return div.firstElementChild;
}

function makeGradeBadge(gradeArr)
{
    return gradeArr.map(x => `<div class="badge">${x}학년</div>`).join("");
}