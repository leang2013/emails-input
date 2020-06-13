const env = process.env.NODE_ENV === 'development';

const URL_CSS = {
  style: (env) ? '../dist/style.css' : 'https://emails-input.now.sh/style.css',
};

export default URL_CSS;
