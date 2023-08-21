const btnRegister = document.querySelector(".signup-button")


const inputNameRegister = document.querySelector(".user-name")
const inputPhoneRegister = document.querySelector(".phone-number")
const inputUserRegister = document.querySelector(".signup-email")
const inputPasswordRegister = document.querySelector(".signup-password")


btnRegister.addEventListener("click", function(e){
    e.preventDefault()
    if(inputUserRegister.value === "" || inputPhoneRegister.value === "" || inputNameRegister.value === "" || inputPasswordRegister.value === "") {
        alert("Vui lòng điền đầy đủ thông tin để tiếp tục")
    } else {
        const user = {
            name: inputNameRegister.value,
            phone: inputPhoneRegister.value,
            email: inputUserRegister.value,
            password: inputPasswordRegister.value
        }
        localStorage.setItem("users", JSON.stringify(user));
        alert("Bạn đã đăng kí thành công")
        window.location.href = "login.html"
    }
    }
)