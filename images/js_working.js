let local = JSON.parse(localStorage.getItem("items")) || [];


function signup(s) {
    let inp_Email = document.querySelector(".inp_Email")
    let inp_password = document.querySelector(".inp_password")
    let inp_Number = document.querySelector(".inp_Number")

    let EmailValue = inp_Email.value
    let PasswordValue = inp_password.value
    let NumberValue = inp_Number.value

    let Uppercase = /[A-Z]/g
    let LowerCase = /[a-z]/g
    let num = /[0-9]/g
    let obj = { EmailValue, PasswordValue, NumberValue }
    if (!EmailValue.includes("gmail.com")) { alert("Enter Correct Email") }
    else if (PasswordValue == "") { alert("Enter Password") }
    else if (PasswordValue.length < 8) { alert("Password Must be at least 8 characters long."); }
    else if (!PasswordValue.match(num)) { alert("please add 1 number in password"); }
    else if (!PasswordValue.match(Uppercase)) { alert("please add 1 UpperCase in password"); }
    else if (!PasswordValue.match(LowerCase)) { alert("please add 1 LowerCase in password"); }
    else if (NumberValue == "") { alert("Enter Number") }
    else {
        local.push(obj)
        localStorage.setItem("items", JSON.stringify(local))
        alert("Your Acount has been created")
        window.open("./Log out.html")
    }
    s.preventDefault();
}


function Signin() {
    let inp_email = document.querySelector(".inp_email")
    let inp_password = document.querySelector(".inp_password")
    let out = document.querySelector(".out")
    let p_forgot1 = document.querySelector(".p_forgot")


    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("items"))
        ? JSON.parse(localStorage.getItem("items")) : [];
    let userName = local.filter((elem) => {
        return elem.EmailValue === inp_email.value && elem.PasswordValue === inp_password.value
    })
    console.log(userName);
    if (
        userName = local.some((elem) => {
            return elem.EmailValue === inp_email.value && elem.PasswordValue === inp_password.value
        })
    ) {
        out.classList.remove("out_none")
        setTimeout(function () {
            out.classList.add("out_none")
            location.href = "./Creative Project.html"
        },4000)
        alert("User logged in");
        let Current_User = user_records.filter((ele) => {
            return ele.EmailValue === inp_email.value && ele.PasswordValue === inp_password.value
        })[0];
        localStorage.setItem("name", Current_User.NameValue)
        localStorage.setItem("email", Current_User.EmailValue)
    }
    else {
        alert("Error Log In")

    }

}
function Forgot() {
    let inp_email = document.querySelector(".inp_email")
    let inp_password = document.querySelector(".inp_password")
    let out = document.querySelector(".out")
    let p_forgot1 = document.querySelector(".p_forgot")
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("items"))
        ? JSON.parse(localStorage.getItem("items")) : [];
    let userName = local.filter((elem) => {
        return elem.EmailValue === inp_email.value
    })
    if (
        userName = local.some((elem) => {
            return elem.EmailValue === inp_email.value
        })
    ) {
        alert("Recover Password Successful");
        let Current_User = user_records.filter((ele) => {
            return ele.EmailValue === inp_email.value
        })[0];
        p_forgot1.innerHTML = Current_User.PasswordValue
        // localStorage.setItem("name",Current_User.NameValue)
        localStorage.setItem("email", Current_User.EmailValue)
        // location.href = "./Log out.html"
    }
    else {
        alert("Error in EMail")

    }
}
// function user_value() {
//     loc
//     let inp_email = document.querySelector(".inp_email")
//     let inp_password = document.querySelector(".inp_password")
//     let out = document.querySelector(".out")
//     let p_forgot1 = document.querySelector(".p_forgot")
//     let p_email = document.querySelector(".p_email")
//     let p_password = document.querySelector(".p_email")

//     let user_records = new Array();
//     user_records = JSON.parse(localStorage.getItem("items"))
//         ? JSON.parse(localStorage.getItem("items")) : [];
//     let userName = local.filter((elem) => {
//         return elem.EmailValue === inp_email.value
//     })
//     if (
//         userName = local.some((elem) => {
//             return elem.EmailValue === inp_email.value
//         })
//     ) {
//         alert("Recover Password Successful");
//         let Current_User = user_records.filter((ele) => {
//             return ele.EmailValue === inp_email.value
//         })[0];
//         p_email.innerHTML = Current_User.EmailValue
//         p_password.innerHTML = Current_User.PasswordValue
//         // localStorage.setItem("name",Current_User.NameValue)
//         localStorage.setItem("email", Current_User.EmailValue)
//         // location.href = "./Log out.html"
//     }
//     else {
//         alert("Error in EMail")

//     }
// }

