import './index.css'

interface Link {
    text: string;
    url: string;
  }

interface CardProps {
  title: string;
  imageSrc: string;
  content: string[];
  links?: Link[];
}

const Card: React.FC<CardProps> = ({ title, imageSrc, content, links }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="card-text">
        <div className="card-header">
          <h2>{title}</h2>
        </div>
        <div className="card-content">
          {content.map((paragrap, index) => (
            <p key={"p"+index}>{paragrap}</p>
          ))}
          {links && 
            <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default Card;
