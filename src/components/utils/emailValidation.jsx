function is_email_valid(s) {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return s.test(pattern);
}

export default is_email_valid;