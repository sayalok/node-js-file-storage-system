module.exports = (res, statusCode, status, message, data) => {

    let responseObj;
    responseObj = {
        status: status,
        message: message,  
    }
    if (data &&  data.error != undefined) {
        __logger.error(`Error: ${data.error}`);
    }else{
        responseObj = {...responseObj,...data}
    }
  
    return res.status(statusCode).send(responseObj);
}