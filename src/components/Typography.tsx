import React, { FC } from 'react';

interface PropTypes {
  children: React.ReactNode;
  sx?: React.CSSProperties;
}

const Typography: FC<PropTypes> = (props) => {
  return (
    <tr>
      <td
        align="left"
        style={{
          fontSize: '0',
          padding: '10px 25px',
          wordBreak: 'break-word',
        }}
      >
        <div
          style={{
            fontSize: '20px',
            lineHeight: 1,
            textAlign: 'left',
            ...props.sx,
          }}
        >
          {props.children}
        </div>
      </td>
    </tr>
  );
};

export default Typography;
