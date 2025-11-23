function errorHandler (err, req, res, next) {
    if (err.name === "ValidationError" )
    {res.status(400).json({message:"invalid validation"})}

    if (err.name === "CastError")
     {res.status(400).json({message:"Internal Server Error"})
}   
}


module.exports = errorHandler;