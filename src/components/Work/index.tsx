import Card from 'components/Card'
import './index.css'
import Content from 'components/Content';
const matchmaker = require('img/matchmaker.png');
const lab = require('img/lab.jpg');
const pockball = require('img/pockball.png')

interface WorkProps{
    language: string,
}

const Work: React.FC<WorkProps> = (language) => {
    const content = Content(language)
    const cardData = [
        {
            title: 'MazeMap',
            imageSrc: 'https://use.mazemap.com/images/mazemap_og_image.png',
            content: content.mazeMapContent,
            links: [
                {text: 'MazeMap', url: 'https://use.mazemap.com/'},
                {text: 'About us', url: 'https://www.mazemap.com/about-us/about-us'},

            ]
        },
        {
            title: 'Matchmaker',
            imageSrc: matchmaker,
            content: content.matchGeneratorContent,
            links: [
                {text: 'match.siguhau.no/', url: 'https://match.siguhau.no/'},
                {text: 'GitHub', url: 'https://github.com/Siguhau/matchmaker'}
            ],
        },
        {
            title: 'Lyden Av Byen',
            imageSrc: lab,
            content: content.lydenAvByenContent,
            links: [
                {text: 'GitHub', url: 'https://github.com/KristofferSkare/TTT4850LydenAvByen'}
            ],
        },
        {
            title: 'FFmpeg video compression',
            imageSrc: 'https://antmedia.io/wp-content/uploads/2017/02/How-to-Install-FFmpeg-on-Windows-10-1.jpeg',
            content: content.ffmpegContent,
            links: [
                {text: 'GitHub', url: 'https://github.com/Siguhau/FFmpeg-video-compression'}
            ],
        },
        {
            title: 'Pockball',
            imageSrc: pockball,
            content: content.pockballContent,
            links: [
                {text: 'GitHub', url: 'https://github.com/TormodNy/pockball'}
            ]
        },
        {
            title: 'My GitHub',
            imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg',
            content: content.gitHubContent,
            links: [
                {text: 'My Profile', url: 'https://github.com/siguhau'}
            ]
        }
    ];

    return (
        <div className="work-container">
            <div className="card-container">
                {cardData.map((card, index) => (
                    <Card
                    key={index}
                    title={card.title}
                    imageSrc={card.imageSrc}
                    content={card.content}
                    links={card.links}
                    />
                ))}
            </div>

        </div>
    )
}

export default Work;