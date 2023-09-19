import Card from 'components/Card'
import './index.css'
const matchmaker = require('img/matchmaker.png');
const lab = require('img/lab.jpg');
const pockball = require('img/pockball.png')

function Work() {
    const cardData = [
        {
            title: 'MazeMap',
            imageSrc: 'https://use.mazemap.com/images/mazemap_og_image.png',
            content: 'I currently work as a Software Engineer Intern at Mazemap, you are most welcome to check out what we do! ' +
            'I started at MazeMap in 2022 as a summer intern, and continued in the position as a part time intern. ' + 
            'That summer i worked together with one other intern to create a standalone full-stack webapp to help add new customers. ' +
            '\n \tThe app consisted of a backend written in Java along with a React frontend. ' +
            'This year, I have worked more closely together with one of the engineering teams and their roadmap tasks.',
            links: [
                {text: 'MazeMap', url: 'https://use.mazemap.com/'},
                {text: 'About us', url: 'https://www.mazemap.com/about-us/about-us'},

            ]
        },
        {
            title: 'Matchmaker',
            imageSrc: matchmaker,
            content: 'Ever wanted to create a matchplan for a football tournament where everyone plays everyone? This simple SPA i made lets you generate a matchplan for up to 100 teams.',
            links: [
                {text: 'https://match.siguhau.no/', url: 'https://match.siguhau.no/'},
                {text: 'GitHub', url: 'https://github.com/Siguhau/matchmaker'}
            ],
        },
        {
            title: 'Lyden Av Byen',
            imageSrc: lab,
            content: 'In the classical NTNU course "EIT" we created a webapp with a map of noise levels in the city center of Trondheim. It was also possible to listen in on different locations where we had recorded the sounds of the area. I worked mostly with creating components that played these sounds. Unfortunately, the map is currently not live.',
            links: [
                {text: 'GitHub', url: 'https://github.com/KristofferSkare/TTT4850LydenAvByen'}
            ],
        },
        {
            title: 'FFmpeg video compression',
            imageSrc: 'https://antmedia.io/wp-content/uploads/2017/02/How-to-Install-FFmpeg-on-Windows-10-1.jpeg',
            content: 'In the NTNU course "Customer Driven Project" i was on a team that looked into video compression for a customer. We used the already existing software FFmpeg wrapped in our own python script to compress eye-tracking videos.  ',
            links: [
                {text: 'GitHub', url: 'https://github.com/Siguhau/FFmpeg-video-compression'}
            ],
        },
        {
            title: 'Pockball',
            imageSrc: pockball,
            content: 'In the NTNU course "Software Architecture my group developed an android game called "Pockball", it was basicly a 8ball-pool clone we created from scratch using the library Lib-GDX. The game featured online multiplayer, where one could play vs a friend.',
            links: [
                {text: 'GitHub', url: 'https://github.com/TormodNy/pockball'}
            ]
        },
        {
            title: 'My GitHub',
            imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg',
            content: 'Have a look at my GitHub profile! Most of what I have presented here you can find in my profile.',
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