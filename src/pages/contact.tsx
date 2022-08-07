import { setCookie } from "lib/helpers/cookie";
import { useEffect } from "react";

const contact = ()=>{
  useEffect(()=>{
    setCookie("access_token", "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4LCJleHAiOjE2NTk3NDk2MDh9.2DoImKpJ9EiD_pwI5uEptZP3BAC9JgbIjjN6OUT-AKk")
  })
  return (
    <div>
      contact page
    </div>
  )
}
export default contact;
