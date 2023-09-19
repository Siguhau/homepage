import Portrait from 'components/Portrait';
import About from 'components/About';
import './index.css'


function Presentation() {
  return (
    <div className="container">
      <div className="left">
        {/* Content for the left side */}
        <Portrait src="" alt="Your Image" />
      </div>
      <div className="right">
        {/* Content for the right side */}
        <About />
      </div>
    </div>
  );
}

export default Presentation;