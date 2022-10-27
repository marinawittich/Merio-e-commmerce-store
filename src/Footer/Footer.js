import insta from './../image/insta.png';
import facebook from './../image/facebook.png';
import twitter from './../image/twitter.png';
import geo from './../image/geo.png';
import phone from './../image/phone.png';
import mail from './../image/mail.png';


function Footer(){
    return(
        <div className='footerContainer'>
            <div>
                <h3 className='footertitle'>Merio</h3>
                <a href="https://www.instagram.com/"><img className='footerLink' src={insta} width='40px' alt='instagram'/></a>
                <a href="https://www.facebook.com/"><img className='footerLink' src={facebook} width='40px' alt='facebook'/></a>
                <a href="https://twitter.com/"><img className='footerLink' src={twitter} width='40px' alt='twitter'/></a>
            </div>
            <div className='footerCont'>
            <h3 className='footertitle'>Our Products</h3>
            <div className='footerProducts'>
            <div className='footerText'>
            <p>SHIRT STYLE</p>
            <p>LOVE SHOES</p>
            <p>COMFY SHORTS</p>
            </div>
            <div className='footerText'>
            <p>LIGHT JACKET</p>
            <p>NICE DRESSES</p>
            <p>THE PERFECT JEANS</p>
            </div>
            </div>
            </div>
            <div>
                <h3 className='footertitle'>Contact</h3>
                <div className='footerContact'>
                <img className='footerIcon' src={geo} width='40px' height='40px' alt='geo'/>
                <p className='footerText'>1525 S Parker Rd, Denver CO, 80231</p>
                
                </div>
                <div className='footerContact'>
                <img className='footerIcon' src={phone} width='40px' height='40px' alt='phone'/>
                <p className='footerText'> +1 303-123-4567</p>
                </div>
                <div className='footerContact'>
                <img className='footerIcon' src={mail} width='40px' height='40px' alt='mail'/>
                <a href="mailto: merio@gmail.com" className='footerText'>merio@gmail.com</a>
                
                </div>
            </div>
        </div>
    )
}

export default Footer;