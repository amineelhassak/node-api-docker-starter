const GlobalError = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'Error';
    
    // Don't send stack trace in production
    const errorResponse = {
        status: error.statusCode,
        message: error.message,
        ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
    };
    
    res.status(error.statusCode).json(errorResponse);
};

module.exports = GlobalError;