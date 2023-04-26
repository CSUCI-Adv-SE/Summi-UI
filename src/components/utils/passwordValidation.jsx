var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

function is_strong_password(s) {
    return s.match(passwordPattern);
}

export default is_strong_password;