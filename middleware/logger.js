
function logger (req,res, next) {
console.log(`[${new Date().toLocaleTimeString()} ${req.method} ${req.url} ${req.ip}]`)
next();
 
}

module.exports = logger;