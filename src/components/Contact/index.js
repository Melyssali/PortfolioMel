import React, { useEffect, useState, useRef } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const [letterClass, setLetterClass] = useState('text-animate');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('');
    // const [messageSent, setMessageSent] = useState(false); 
    const [hideNotif, setHideNotif] = useState('message_hide')
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])



    const sendEmail = (e) => {
        e.preventDefault();
        console.log({ name, email, subject, message })
        setIsLoading(true);

        emailjs.sendForm('service_boey3cn', 'template_2v0mqm1', form.current, 'Nlnr6NFSksG6J8Ntk')
            .then((result) => {
                console.log(result.text);
                setIsLoading(false)
                setHideNotif('message_sent')
            }, (error) => {
                console.log(error.text);
            });
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');

        setTimeout(() => {
            setHideNotif('message_fadeout')
        }, 5000)


    };

    return (
        <div className="about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', ' c', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>

                <form className="form-contact" ref={form} onSubmit={sendEmail}>
                    <input className="input_name" name="name" type="name" value={name} placeholder="Name" onChange={(event) => setName(event.target.value)} />
                    <input required="required" className="input_email" name="email" type="email" value={email} placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                    <input className="input_subject" name="subject" type="subject" value={subject} placeholder="Subject" onChange={(event) => setSubject(event.target.value)} />
                    <textarea required="required" name="message" className="textarea_message" value={message} placeholder="Message" onChange={(event) => setMessage(event.target.value)} />
                    <button className="button_submit" type="submit" value="Submit"> Envoyer </button>

                </form>
                {isLoading ? <p className='isloading'> L'envoi est en cours... </p> : <p className={hideNotif}> Message envoyé </p>}

            </div>

        </div>


    )
};

export default Contact;
