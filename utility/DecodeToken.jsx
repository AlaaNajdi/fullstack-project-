import { jwtDecode } from "jwt-decode";

const DecodeToken = (token) => {
  const decoded = jwtDecode(token);

  console.log(decoded);
  return decoded;
}

export default DecodeToken
