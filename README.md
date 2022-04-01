# react-email

## Current imports availabe

- Column
- Divider
- Email
- Image
- Section
- Typography
- generateEmail
- generateTextEmail

## Current style overrides

- [Typography](https://github.com/niloysikdar/react-email-scorelab/blob/main/src/components/Typography.tsx#L5) using `sx` props

- Same can be implemented for other components also

## Output

### generateEmail() function returns a minified HTML

    <!DOCTYPE html> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" > <head> <title> </title> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <style type="text/css"> #outlook a { padding: 0; } body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; } table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; } img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; } p { display: block; margin: 13px 0; } </style> <style type="text/css"> @media only screen and (min-width: 480px) { .column-per-100 { width: 100% !important; max-width: 100%; } } </style> <style media="screen and (min-width:480px)"> .moz-text-html .column-per-100 { width: 100% !important; max-width: 100%; } </style> <style type="text/css"> @media only screen and (max-width: 480px) { table.full-width-mobile { width: 100% !important; } td.full-width-mobile { width: auto !important; } } </style> </head> <body style="word-spacing: normal"> <div><div style="margin:0px auto;max-width:600px"><table cellPadding="0" cellSpacing="0" role="presentation" style="width:100%;border:0"><tbody><tr><td align="left" style="direction:ltr;font-size:0;padding:20px 0;text-align:center"><div class="column-per-100 outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%"><table cellPadding="0" cellSpacing="0" role="presentation" style="vertical-align:top;border:0" width="100%"><tbody><tr><td align="left" style="font-size:0;padding:10px 25px;word-break:break-word"><div style="font-size:25px;line-height:1;text-align:center">Hello World</div></td></tr><tr><td align="center" style="font-size:0;padding:10px 25px;word-break:break-word"><p style="border-top:solid 3px grey;font-size:1px;margin:0 auto;width:100%"></p></td></tr><tr><td align="center" style="font-size:0;padding:10px 25px;word-break:break-word"><table cellPadding="0" cellSpacing="0" role="presentation" style="border:0;border-collapse:collapse;border-spacing:0"><tbody><tr><td style="width:500px"><img height="auto" width="500px" src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a" alt="Image" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px"/></td></tr></tbody></table></td></tr><tr><td align="center" style="font-size:0;padding:10px 25px;word-break:break-word"><p style="border-top:solid 3px grey;font-size:1px;margin:0 auto;width:100%"></p></td></tr><tr><td align="left" style="font-size:0;padding:10px 25px;word-break:break-word"><div style="font-size:20px;line-height:1;text-align:left">Hello World 1</div></td></tr></tbody></table></div></td></tr></tbody></table></div></div> </body> </html>

### generateTextEmail() function returns the text version of the Email

    Hello World
    ![Image] (https://images.unsplash.com/photo-1453728013993-6d66e9c9123a)
    Hello World 1

### Screenshot

<p align="center">
  <img src="https://imgur.com/3ZQuG3d.png" alt="Screenshot" width="100%">
</p>
