import './index.css'

import {BsTelephoneFill} from 'react-icons/bs';

import {MdEmail} from 'react-icons/md'

import {BsFillChatDotsFill} from 'react-icons/bs';

const Contact = () => (
    <div className="contact-container">
        <div className="inner-container">
            <BsTelephoneFill className="icon-contact"/>
            <p>+91 9989379112</p>
        </div>

        <div className="inner-container">
            <MdEmail className="icon-contact"/>
            <p>Veereshkumar956@gmail.com</p>
        </div>

        <div className="inner-container">
            <BsFillChatDotsFill className='icon-contact' />
            <p>Live Chat</p>

        </div>

    </div>

)

export default Contact