const IBaseResponse = ({ isSuccess = false, statusCode = 200, message, result = null, error = null }) => {
    return {
        isSuccess,
        statusCode,
        message,
        result,
        error
    }
}

const IBaseResponsePagination = ({ isSuccess = false, statusCode = 200, message, result = null, error = null , totalRecord = 0  }) => {
    return {
        isSuccess,
        statusCode,
        message,
        result,
        totalRecord,
        error
    }
}

module.exports = {
    IBaseResponse,
    IBaseResponsePagination
}