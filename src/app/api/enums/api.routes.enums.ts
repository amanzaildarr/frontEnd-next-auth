
enum ApiRoutes {
    // Define your Backend API endpoints here
    /* Auth routes */
    Login = '/auth/login',
    SocialLogin = '/auth/social',
    Signup = '/auth/signup',
    ForgotPassword = '/auth/forgotPassword',
    ResetPassword = '/auth/resetPassword',
    SendForgotPasswordLink = '/auth/sendlink',

    /*User routes*/
    DeleteUser = '/user/', // Delete /user/:id
    GetOneUser = '/user/', // Get    /user/:id
    GetAllUsers = '/user', // Get    /user
    // ... add more endpoints as needed
}

export default ApiRoutes;
