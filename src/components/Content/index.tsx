const norwegian = require('languages/norwegian.json')
const english = require('languages/english.json')

const Content = ({ language }) => {
  const content = language === 'norwegian' ? norwegian : english;

  return (content);  
};

export default Content;
