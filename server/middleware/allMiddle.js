const checkAuthorisation = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.status(401).end();
};

const cookieLogger = (req, res, next) => {
  console.log(req.cookies);
  next();
};

module.exports = { checkAuthorisation, cookieLogger }

