import { FC } from 'react';

const Column: FC = (props) => {
  return (
    <div
      className="column-per-100 outlook-group-fix"
      style={{
        fontSize: '0',
        textAlign: 'left',
        direction: 'ltr',
        display: 'inline-block',
        verticalAlign: 'top',
        width: '100%',
      }}
    >
      <table
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
        style={{ verticalAlign: 'top', border: '0' }}
        width="100%"
      >
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
};

export default Column;
