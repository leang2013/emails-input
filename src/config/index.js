const env = process.env.NODE_ENV === 'development';
const cdn = '../dist/style.css';
const URL_CSS = {
  style: (env) ? '../dist/style.css' : cdn,
};

export default URL_CSS;
