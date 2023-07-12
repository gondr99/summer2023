window.onload = ()=>{
    const lectureList = 
    [
        {
            name:"3매치 퍼즐게임 개발반(with Unity)", 
            file:"01.png", 
            difficulty:"중급", 
            teacher: "이재희", 
            grade:[1], 
            desc:"3매치 퍼즐 게임을 개발하는 중급 유니티반",
            part:2,
        },
        {
            name:"C++ 프로그래밍반(초급)", 
            file:"02.png", 
            difficulty:"초급", 
            teacher: "이혜령", 
            grade:[1], 
            desc:"c++ 기초 문법과 텍스트 기반 게임을 만들어보는 반",
            part:2,
        },
        {
            name:"뱀서라이크 게임 심화편", 
            file:"03.png", 
            difficulty:"중급", 
            teacher: "채한승(외부강사)", 
            grade:[1], 
            desc:"뱀서라이크 게임에 시네머신을 활용한 카메라 무빙 학습",
            part:1,
        },
        {
            name:"유니티 VR게임 개발반", 
            file:"04.png", 
            difficulty:"중급", 
            teacher: "표재석", 
            grade:[1], 
            desc:"구글 카드보드를 활용한 VR게임과 포톤 네트워크를 활용한 멀티플레이어 VR게임 개발",
            part:2,
        },
        {
            name:"유니티 타워디펜스", 
            file:"05.png", 
            difficulty:"초급", 
            teacher: "박서린", 
            grade:[1], 
            desc:"코루틴, 싱글톤, SO를 활용한 타워디펜스 게임 개발",
            part:2,
        },
        {
            name:"유니티 2D 디펜스 게임", 
            file:"07.png", 
            difficulty:"중급", 
            teacher: "이명희", 
            grade:[1], 
            desc:"URP에서 만드는 2D 타워디펜스 게임 개발반",
            part:2,
        },
        {
            name:"언리얼 게임개발반", 
            file:"08.png", 
            difficulty:"고급", 
            teacher: "송윤지", 
            grade:[2], 
            desc:"블루프린트부터 C++까지 모두 사용한 언리얼 게임 개발학습",
            part:1,
        },
        {
            name:"유니티 심화반(외부강사)", 
            file:"09_no.png", 
            difficulty:"고급", 
            teacher: "유준무", 
            grade:[2], 
            desc:"아직 외부강사의 정보가 없습니다.",
            part:1,
        },
        {
            name:"C++ SFML 라이브러리를 활용한 게임 프레임워크 개발", 
            file:"10.png", 
            difficulty:"중급", 
            teacher: "이준용", 
            grade:[2], 
            desc:"SFML 라이브러리를 이용한 멀티 플랫폼 게임 개발",
            part:1,
        },
        {
            name:"HTML5 웹 및 게임개발반", 
            file:"11.png", 
            difficulty:"중급", 
            teacher: "최선한", 
            grade:[2], 
            desc:"Node.js, TypeScript, React를 이용한 웹앱 및 Phaser엔진을 활용한 웹게임 개발",
            part:1,
        },
        {
            name:"유니티 심화반", 
            file:"12.png", 
            difficulty:"중급", 
            teacher: "이상진", 
            grade:[2], 
            desc:"유니티 게임 개발 관련 AI 작성법",
            part:1,
        },
        {
            name:"게임기획 심화", 
            file:"13_no.png", 
            difficulty:"중급", 
            teacher: "외부기획선생님", 
            grade:[2], 
            desc:"아직 외부강사님 정보가 없습니다.",
            part:1,
        },
        {
            name:"게임아트 기초반", 
            file:"14.png", 
            difficulty:"초급", 
            teacher: "이수진, 현소연", 
            grade:[1], 
            desc:"손맵 그리기",
            part:1,
        },
        {
            name:"게임아트 심화반", 
            file:"15_no.png",
            difficulty:"중급", 
            teacher: "외부 아트선생님", 
            grade:[2], 
            desc:"아직 외부강사님 정보가 없습니다.",
            part:1,
        },
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

function makeTemplate({name, difficulty, teacher, grade, desc, file, part})
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
                <div class="part">${part}회</div>
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