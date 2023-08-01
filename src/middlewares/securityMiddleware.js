function securityMiddleware(req, res, next) {
    // Implement your security measures here
    // For simplicity, this middleware just adds an "X-Powered-By" header to the response
    res.setHeader('X-Powered-By', 'Express');
    next();
  }
  
  module.exports = securityMiddleware;
  