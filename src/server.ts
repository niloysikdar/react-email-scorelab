import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import htmlToPlainText from 'textversionjs';

const generateEmail = (
  jsxElement: JSX.Element,
  options: { baseTemplate: string; baseStyles: string },
) => {
  const baseHTML = fs.readFileSync(options.baseTemplate).toString();
  const baseCSS = fs.readFileSync(options.baseStyles).toString();

  const JSXtoHTML = ReactDOMServer.renderToStaticMarkup(jsxElement);

  const styleEndPos = baseHTML.indexOf('</style>');
  const styledHTML =
    baseHTML.slice(0, styleEndPos) +
    '\n' +
    baseCSS +
    baseHTML.slice(styleEndPos);

  const bodyEndPos = styledHTML.indexOf('</body>');
  const finalHTML =
    styledHTML.slice(0, bodyEndPos) + JSXtoHTML + styledHTML.slice(bodyEndPos);

  return finalHTML;
};

const generateTextEmail = (fullHTML: string): string => {
  const plainText = htmlToPlainText(fullHTML);
  return plainText;
};

export { generateEmail, generateTextEmail };
