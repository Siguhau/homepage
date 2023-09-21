import './index.css'

interface LanguageSwitcherProps{
    handleLanguageChange: (language: string) => void,
    language: string,
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ handleLanguageChange, language }) => {
  return (
      <div>
    {language !== "norwegian" ?
      <button
      className="flag-button" id="norwegian-flag"
      onClick={() => handleLanguageChange('norwegian')}>
        <img 
        className='flag-img'
        src="https://cdn-icons-png.flaticon.com/256/330/330542.png" alt=''/>
      </button>
      :
      <button
      className="flag-button" id="english-flag"
      onClick={() => handleLanguageChange('english')}>
        <img
        className="flag-img"
        src='https://icons.iconarchive.com/icons/twitter/twemoji-flags/256/United-Kingdom-Flag-icon.png' alt=''/>
      </button>
    }
    </div>
  );
};

export default LanguageSwitcher;
