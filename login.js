const btnLogin = document.querySelector(".login-button")

const inputUserLogin = document.querySelector(".login-email")
const inputPasswordLogin = document.querySelector(".login-password")

btnLogin.addEventListener("click",function(e){
    e.preventDefault()
    if(inputPasswordLogin.value === "" || inputUserLogin.value === ""){
        alert("Xin vui lòng nhập đầy đủ thông tin để tiếp tục")
    } else {
        const userLoginData = JSON.parse(localStorage.getItem("users"));
        for(let i=0; i< userLoginData.length; i++) {
            if(
                userLoginData.name == inputUserLogin.value &&
                userLoginData.password == inputPasswordLogin.value
            ) {
                flag = true;
                break;
            } else {
                flag = false
            }
        }

        if(flag) {
            alert("Đăng nhập thành công")
            window.location.href = ""
        } else {
            alert ("Bạn nhập sai tên đăng nhập hoặc tài khoản")
        }
    }
})