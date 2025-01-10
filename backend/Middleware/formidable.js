import formidable from "formidable";

const parseForm = (req, res, next) => {
  const form = formidable({ multiples: true, keepExtensions: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      return next(err);
    }
    req.fields = fields;
    req.files = files;
    next();
  });
};

export default parseForm