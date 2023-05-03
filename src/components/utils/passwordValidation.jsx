var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

function is_strong_password(s) {
    return passwordPattern.test(s);
}

export default is_strong_password;