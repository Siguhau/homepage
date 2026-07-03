import norwegian from '../../languages/norwegian.json'
import english from '../../languages/english.json'

const Content = ({ language }: { language: string }) => {
  const content = language === 'norwegian' ? norwegian : english;

  return (content);  
};

export default Content;
