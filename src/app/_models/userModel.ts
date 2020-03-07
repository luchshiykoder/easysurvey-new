export interface userModel {    
    firstName:string,
    lastName:string,
    email:string,
    status:string,
    password:string,
    confirmPassword:string,
    userRolesEntity:{
        userRolesId:number
        type:string,
        status:string
    }

}