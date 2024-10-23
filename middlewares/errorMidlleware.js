const GlobalError = (error,req,res,next) => {
        error.statusCode = error.statusCode || 500;
        error.status = error.status || 'Error';
        res.status(error.statusCode).json
        (
            {
                status:error.statusCode,
                error:error,
                message:error.message,
                stack:error.stack
            }
        );
}

module.exports = GlobalError;