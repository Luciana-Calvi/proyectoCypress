class login{

    form = {

        buttonSignIn : '#MenuContent > a:nth-child(3)',

        username : 'input[name="username"]',
        password : '[name="password"]',

        buttonLogin : '[name="signon"]',

        msj : '#Content > ul',

        msj2 : '#WelcomeContent'
        
    }

}

module.exports = new login();