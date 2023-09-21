const pb = require('img/pb.png')
interface PortraitProps {
  src: string;
  alt: string;
}

const Portrait: React.FC<PortraitProps> = ({ src, alt }) => {
  return (
    <div style={{
      backgroundColor: '#008080',
      overflow: 'hidden',
      width: '400px',
      height: '400px'
      }}>
      <img
        src={pb}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default Portrait;