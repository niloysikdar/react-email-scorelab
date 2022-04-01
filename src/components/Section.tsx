import { FC } from 'react';

const Section: FC = (props) => {
  return (
    <div style={{ margin: '0px auto', maxWidth: '600px' }}>
      <table
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
        style={{ width: '100%', border: '0' }}
      >
        <tbody>
          <tr>
            <td
              align="left"
              style={{
                direction: 'ltr',
                fontSize: '0',
                padding: '20px 0',
                textAlign: 'center',
              }}
            >
              {props.children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Section;
