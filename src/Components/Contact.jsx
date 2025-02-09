import { Row, Col } from 'react-bootstrap'
import BgImg from '../assets/images/contact_text_bg.webp'
import HangerImg from '../assets/images/hanger-icon.png'
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import Button from './Button';

export default function Contact() {
    return (
        <section className="contact">
            <div className='hanger'>
                <img src={HangerImg} alt="Hanger Icon" />
            </div>
            <div className='contact_content text-center'>

                <Button className={"black"} label={"View More"} />
                <h2> Contact us </h2>
                <div className='contact_box'>
                    <Row>
                        <Col>
                            <h2> FOR PARTICIPATION</h2>
                        </Col>

                        <Col>
                            <h2> FOR PARTNERSHIP OPPORTUNITY</h2>
                        </Col>
                    </Row>
                    <hr className="hr" />
                    <Row>
                        <Col>
                            <p> VIVEK SHETH </p>
                            <p>   +91 80826 67585           vivek@iamai.in </p>
                        </Col>

                        <Col>
                            <p> SIDDHARTHA SENGUPTA </p>
                            <p>   +91 97681 31042           siddhartha@iamai.in </p>
                        </Col>
                    </Row>
                </div>
                <Row className='copyright'>
                    <Col>
                        <p>Copyright © {new Date().getFullYear()} Intersec. All rights reserved.  </p>
                    </Col>
                    <Col>
                        <div className='social_icon'>
                            <FaFacebookSquare />
                            <FaTwitterSquare />
                            <FaInstagram />
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="curve_bg">
                <img src={BgImg} alt="Curved bg" />
            </div>
        </section>
    )
}
