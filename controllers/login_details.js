try {
    const Operations = require ('../operations/login_details')
    const Response = require('../services/response');
    exports.login = async (req, res, next) => {
        try {
    
            let { loginId,password } = req.body;
    
            let response = await Operations.login(loginId,password);
    
            res.status(response.code).send(response);
    
        }
        catch (error) {
    
            res.status(Response.internal_server_error.code).send(Response.internal_server_error)
    
        }
    }
} catch (error) {
    console.log(error)
    
}

