// Sample controller for your APIs

function getHello(req, res) {
    res.json({ message: 'Hello, World!' });
  }
  
  function getGreeting(req, res) {
    const name = req.params.name || 'Anonymous';
    res.json({ message: `Hello, ${name}!` });
  }
  
  module.exports = {
    getHello,
    getGreeting,
  };
  