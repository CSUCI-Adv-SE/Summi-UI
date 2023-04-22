import Cookies from "js-cookie";

function get_request_headers() {
  let summi_token = Cookies.get("summi_token");

  let headers = {
    headers: {
      "content-type": "multipart/form-data",
    }
  };

  if (summi_token !== undefined) {
    headers["headers"]["Authorization"] = "Token " + summi_token;
  }
  return headers;
}

export default get_request_headers;