import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <p className="footer-contact-access">Email: ssang004@odu.edu</p>
            </div>
            <div>
                <h1>Social Links</h1>
                <div className="social-icons">
                    <a href=""><i><FaFacebook /></i></a>
                    <a href="https://instagram.com/saikiran.sangam?igshid=OGQ5ZDc2ODk2ZA=="><i><FaInstagram /></i></a>
                    <a href=""><i><FaTwitter /></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;