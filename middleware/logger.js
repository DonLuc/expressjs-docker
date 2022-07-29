const logger = function (req, res, next) {
  console.log(`LOGGED:::: ${req.hostname}`);
  next();
};

module.exports = logger;
