import Content from "components/Content";

interface AboutProps{
  language: string,
}

const About: React.FC<AboutProps> = (language) => {
  const content = Content(language)
  console.log(language)
  console.log(content)
  return (
    <div style={{ marginTop: '10%', width: '100%'}}>
      <h1>{content.aboutContent.title}</h1>
      <p>{content.aboutContent.p1}</p>

      <p>
        {content.aboutContent.p2} <a
        style={{color: 'white'}} 
        href="https://www.linkedin.com/in/sigurd-hauan-482a34252/">Sigurd Hauan</a>
        
      </p>
    </div>
  );
};

export default About;