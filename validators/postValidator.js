exports.postValidator = (req, res, next) => {
  //Title Validation
  req.check("title", "Write a title").notEmpty();
  req.check("title", "Title Must be between 4 to 100 characters").isLength({
    min: 4,
    max: 100,
  });
  //Description Validation
  req.check("description", "Write a description").notEmpty();
  req
    .check("description", "Description Must be between 0 to 200 characters")
    .isLength({
      min: 4,
      max: 200,
    });

  //Handle Errors
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  next();
};
