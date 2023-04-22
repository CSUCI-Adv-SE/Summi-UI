var passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function is_strong_password(s) {
    return s.match(passwordPattern);
}

export default is_strong_password;