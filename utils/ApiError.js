class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);  // Call the parent class's constructor with the error message
        this.statusCode = statusCode;  // Assign the status code
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';  // Define the status as 'fail' or 'error' based on the code
        this.isOperational = true;  // Mark this as an operational error for error-handling purposes
    }
}

module.exports = ApiError;