import './side-bar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faTerminal, faToolbox, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import yourImage from '../images/profile_image.jpeg';

function SideBar() {
  const [isSumDisabled, setIsSumDisabled] = useState(true);
  const [isExperienceDisabled, setIsExperienceDisabled] = useState(false);
  const [isSkillDisabled, setIsSkillDisabled] = useState(false);
  const [isContactDisabled,setIsContactDisabled]= useState(false);

  const summaryHandler = async () => {
    await setIsSumDisabled(true);
    await setIsExperienceDisabled(false);
    await setIsSkillDisabled(false);
    scroll.scrollToTop({ smooth: true }); 
  };

  const experienceHandler = async () => {
    await setIsSumDisabled(false);
    await setIsExperienceDisabled(true);
    await setIsSkillDisabled(false);
    scroll.scrollTo(750, { smooth: true });
  };

  const skillHandler = async () => {
    await setIsSumDisabled(false);
    await setIsExperienceDisabled(false);
    await setIsSkillDisabled(true);
    scroll.scrollTo(1490,{ smooth: true });
  };

  const contactHandler = async ()=> {
    await setIsSumDisabled(false);
    await setIsExperienceDisabled(false);
    await setIsSkillDisabled(false);
    await setIsContactDisabled(true);
    scroll.scrollToBottom({ smooth: true });
    
  }

  useEffect(() => {
    const handleScroll = async() => {
        console.log(window.scrollY)
      if(window.scrollY > 0 && window.scrollY <=749){
        await setIsExperienceDisabled(false);
        await setIsSumDisabled(true);
        await setIsSkillDisabled(false);
        await setIsContactDisabled(false);
      }
      if(window.scrollY >= 750 && window.scrollY <=1000){
        await setIsExperienceDisabled(true);
        await setIsSumDisabled(false);
        await setIsSkillDisabled(false);
        await setIsContactDisabled(false);
      }
      if(window.scrollY >= 1000 && window.scrollY <= 1500){
        await setIsExperienceDisabled(false);
        await setIsSumDisabled(false);
        await setIsSkillDisabled(true);
        await setIsContactDisabled(false);
      }
      if(window.scrollY >= 1610){
        await setIsExperienceDisabled(false);
        await setIsSumDisabled(false);
        await setIsSkillDisabled(false);
        await setIsContactDisabled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="side-bar">
      <div className="section-buttons">
        <img src={yourImage} alt="Circle Image" className="circular-image" />
        <br/>
        <Link to="summary" spy={true} smooth={true} offset={-70} duration={500}>
          <button type="button" className='btn btn-outline-primary button sidebar-font' disabled={isSumDisabled} onClick={summaryHandler}>
          <FontAwesomeIcon icon={faQuoteLeft} /> Summary
          </button>
        </Link>
        <br />
        <Link to="experience" spy={true} smooth={true} offset={-70} duration={500}>
          <button className='button sidebar-font' disabled={isExperienceDisabled} onClick={experienceHandler}>
          <FontAwesomeIcon icon={faTerminal} /> Experience
          </button>
        </Link>
        <br />
        <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}>
          <button className='btn btn-secondary button sidebar-font' disabled={isSkillDisabled} onClick={skillHandler}>
          <FontAwesomeIcon icon={faToolbox} /> Skills & Project
          </button>
        </Link>
        <br/>
        <Link to="footer" spy={true} smooth={true} offset={-70} duration={500}>
        <button className='button sidebar-font' disabled={isContactDisabled} onClick={contactHandler}>
        <FontAwesomeIcon icon={faAddressBook} /> Contact
        </button>
        </Link>
        <br />
      </div>
    </div>
  );
}

export default SideBar;
