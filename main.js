function Validation(){
    const loginUser = document.getElementById("login").value;
    const passwordUser = document.getElementById("password").value;

    const login = ['admin', 'user', 'tim'];
    const password = ['admin123', 'user123', 'aezakmi'];

    if(login.includes(loginUser) && password.includes(passwordUser)) {
        localStorage.setItem("userName", loginUser)
        location.replace("target.html");
    }
    else{
        alert("Ви ввели погані данні");
    }
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    Validation();
});

let userName = localStorage.getItem("userName");
document.querySelector("#userName").textContent = userName;

class TargetUnit {
    constructor(sn, action) {
      this.sn = sn;
      this.action = action;
    }
}

function Target(event){
    event.preventDefault();
  
    const sn = document.getElementById("snInput").value;
    const action = document.getElementById("actionInput").value;

    if(sn && action) {
        const targetAdd = new TargetUnit(sn, action);

        const targetDatailestContent = document.getElementById("target");
        targetDatailestContent.insertAdjacentHTML('afterbegin', `
            <div class = "target-box" id = "targetDiv-${Date.now()}">
                <div class = "target-content">
                    <div>
                        <p>SN: ${targetAdd.sn}</p>
                        <p>Action: ${targetAdd.action}</p>
                        <img src="./img/close.png" class="img-logo" onclick="targetRemove('targetDiv-${Date.now()}')">
                    </div>
                <div>
            </div>
        `);

        const targetCount = document.querySelectorAll(".target-box").length;
        document.getElementById("quatiti").innerHTML = targetCount;

        snInput.classList.remove("wrong");
        actionInput.classList.remove("wrong");

        document.getElementById("myForm").reset();
    }
    else if(sn){
        snInput.classList.remove("wrong");
        actionInput.classList.add("wrong");
    }
    else if(action){
        snInput.classList.add("wrong");
        actionInput.classList.remove("wrong");
    }
    else{
        snInput.classList.add("wrong");
        actionInput.classList.add("wrong");
    }
}

function targetRemove(targetId) {
    let div = document.getElementById(targetId);
    div.remove();

    const targetCount = document.querySelectorAll(".target-box").length;
    document.getElementById("quatiti").innerHTML = targetCount;
}