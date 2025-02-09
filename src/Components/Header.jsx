
import Button from './Button'
import BeachImg from '../assets/images/beach.webp'
import Logo from "../assets/images/logo.png"
import LogoTwo from "../assets/images/logo_2.png"
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Header() {
  return (
    <section className="header">
      <div className='text-center'>
        <div className='logo'>
          <img src={Logo} alt="Logo" loading='lazy' />
        </div>
        <h4>presents</h4>
        <div className='logo_two'>
          <img src={LogoTwo} alt="Logo" loading='lazy' />
        </div>
        <div className='btns-group'>
          <button className='btn-skew'>
            <span>Past Participants</span>
          </button>
          <button className='btn-skew'>
            <span>Become a Partner</span>
          </button>
        </div>
        <div className='content'>
          <h2>Ideate. Network. Collaborate.</h2>
          <div className='line'></div>
          <p> <FaCalendarAlt/> 15<sup>th</sup> - 17<sup>th</sup> April 2022</p>
          <p><FaLocationDot /> The Zuri White Sands, Goa</p>
          <Button label={"Request an Invite"} className={"black"} />
        </div>
      </div>



      <div className="beach">
        <img src={BeachImg} alt="Beach" loading='lazy' />
      </div>
    </section>
  )
}
