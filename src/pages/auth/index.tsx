import { useRouter } from 'next/router'
const AuthPage = ()=>{
  const router = useRouter();
  return router.push("/auth/login")
}
export default AuthPage;
