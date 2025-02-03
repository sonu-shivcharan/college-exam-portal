class AuthService{
    async signin(credentials:{email:string; password:string}){
        try {
            const response = await fetch("/api/sign-in",{
                method:"POST",
                body:JSON.stringify(credentials)
            });
            console.log(response.ok)
            if(!response.ok){
                console.log(response)
                const err = await response.json()
                throw new Error(err.message)
            }
            const data = await response.json();
            return data;
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
    async signout(){
        
    }
}
const authService = new AuthService();
export default authService;