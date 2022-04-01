import ReactDOMServer from 'react-dom/server';
import htmlToPlainText from 'textversionjs';

export const generateEmail = (jsxElement: JSX.Element): string => {
  const htmlString = ReactDOMServer.renderToStaticMarkup(jsxElement);

  return `<!DOCTYPE html> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" > <head> <title> </title> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <style type="text/css"> #outlook a { padding: 0; } body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; } table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; } img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; } p { display: block; margin: 13px 0; } </style> <style type="text/css"> @media only screen and (min-width: 480px) { .column-per-100 { width: 100% !important; max-width: 100%; } } </style> <style media="screen and (min-width:480px)"> .moz-text-html .column-per-100 { width: 100% !important; max-width: 100%; } </style> <style type="text/css"> @media only screen and (max-width: 480px) { table.full-width-mobile { width: 100% !important; } td.full-width-mobile { width: auto !important; } } </style> </head> <body style="word-spacing: normal"> ${htmlString} </body> </html>`;
};

export const generateTextEmail = (jsxElement: JSX.Element): string => {
  const html = generateEmail(jsxElement);
  const plainText = htmlToPlainText(html);
  return plainText;
};
