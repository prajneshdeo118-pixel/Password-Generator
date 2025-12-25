let password = document.getElementById("Password");
let copy = document.getElementById("copy");
let Generate_button = document.getElementById("Generate-Button");
// password.value="Hello";
function PasswordGenerator() {
    const length = 12;
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '0123456789';
    const special = '!@#$%^&*()_+[]{}|;:,.<>?';
    const all = lower + upper + number + special;
    let NewPassword = "";
    NewPassword += upper[Math.floor(Math.random() * upper.length)];
    NewPassword += lower[Math.floor(Math.random() * lower.length)];
    NewPassword += number[Math.floor(Math.random() * number.length)];
    NewPassword += special[Math.floor(Math.random() * special.length)];
    while (NewPassword.length <= 12) {
        NewPassword += all[Math.floor(Math.random() * all.length)];
    }
    console.log(NewPassword);
    password.value = NewPassword;
}
function CopyText() {
    if (password.value == "") {
        alert("Please generate Password");
    }
    else {
        navigator.clipboard.writeText(password.value).then(() => {
            alert("Text copied");
        })
            .catch(err => {
                alert("Failed to copy: " + err);
            })
    }
}
Generate_button.addEventListener("click", PasswordGenerator);
copy.addEventListener("click", CopyText);