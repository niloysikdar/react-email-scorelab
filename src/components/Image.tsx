interface PropTypes {
  src: string;
  alt: string;
  width: string;
}

const Image = ({ src, alt, width }: PropTypes) => {
  return (
    <tr>
      <td
        align="center"
        style={{ fontSize: '0', padding: '10px 25px', wordBreak: 'break-word' }}
      >
        <table
          cellPadding="0"
          cellSpacing="0"
          role="presentation"
          style={{
            border: '0',
            borderCollapse: 'collapse',
            borderSpacing: '0',
          }}
        >
          <tbody>
            <tr>
              <td style={{ width: width }}>
                <img
                  height="auto"
                  width={width}
                  src={src}
                  alt={alt}
                  style={{
                    border: '0',
                    display: 'block',
                    outline: 'none',
                    textDecoration: 'none',
                    height: 'auto',
                    width: '100%',
                    fontSize: '13px',
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
};

export default Image;
