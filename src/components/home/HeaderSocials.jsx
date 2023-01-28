import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaMediumM } from 'react-icons/fa';


const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://www.github.com/dshivam227' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

           
            <a href='https://www.instagram.com/shivamdubey_16/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaInstagram />
            </a>
            <a href='https://medium.com/@dshivam227' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaMediumM />
            </a>

            <a href='https://www.linkedin.com/in/dshivam227/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://wwww.facebook.com/dshivam227' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://www.twitter.com/shivamdubey_16' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
