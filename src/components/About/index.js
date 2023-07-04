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

                    <p>    I'm a very ambitious front-end developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.</p>
                    <p> I'm quiet confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.</p>
                    <p>       If I need to define myself in one sentence that would be a family
                        person, father of a beautiful daughter, a sports fanatic,
                        photography enthusiast, and tech-obsessed!!!</p>

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
