import Portrait from 'components/Portrait';
import About from 'components/About';
import './index.css'

interface PresentationProps{
  language: string,
}

const Presentation: React.FC<PresentationProps> = ({ language }) => {
  return (
    <div className="container">
      <div className="left">
        <Portrait src="" alt="Image of me" />
      </div>
      <div className="right">
        <div className="about-content">
        <About language={language}/>
        </div>
      </div>
    </div>
  );
}

export default Presentation;