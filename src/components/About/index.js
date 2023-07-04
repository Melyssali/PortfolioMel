import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import TagSphere from '../../Tagcloud/index.tsx';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCss3Alt, faHtml5, faJsSquare, faReact, faSass, faPython } from '@fortawesome/free-brands-svg-icons';
// import Loading from '../Loading';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    // const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // setIsLoading(true)
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        // setTimeout(() => {
        //     setIsLoading(false)
        // }, 2000)
    }, [])

    // if (isLoading) {
    //     return <Loading />
    // }

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>

                    <p style={{ lineHeight: "1.5" }}> J'ai développé une passion particulière pour le développement web et la résolution de problèmes complexes. Ma curiosité insatiable m'aide à rester à la pointe des dernières tendances technologiques et à repousser constamment les limites de mes compétences.

                    </p>
                    <p style={{ lineHeight: "1.5" }}> Sur ce site, vous découvrirez mes projets récents, les technologies que j'utilise et ma vision de l'avenir de l'informatique. J'espère que vous apprécierez la visite et n'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez collaborer sur un projet passionnant!</p>


                </div>
                <div className="tagsphere">
                    <TagSphere />
                </div>


                {/* <TagCloud
                    className='tagcloud'
                    options={(w) => ({
                        radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                        maxSpeed: "fast",
                    })}
                >
                    {[
                        "NextJs",
                        "Python",
                        "React",
                        "JavaScript",
                        "Sass",
                        "Git",
                        "HTML5",
                        "CSS3",
                        "React-Router",
                        "React-Redux"

                    ]}

                </TagCloud> */}

                {/* <div className="cube-content">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                    <div className="cubespinner">

                        <div className="face1">
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faCss3Alt} color='#28A4D9' />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faPython} color='#EC4D28' />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faSass} color='#C66593' />
                        </div>
                    </div>

                </div> */}
            </div>

        </>
    )
};

export default About;
