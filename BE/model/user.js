
var userDTO= {
    userName: "",
    password: ""
}

module.exports=(user) =>{
   return userDTO = {
        userName : user.user_name,
        password : user.password
    }
}


