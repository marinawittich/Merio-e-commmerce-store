import sent from '../../image/sent.png';

function Newsletter (){
    return(
        <div className='newscontainer'>
            <h2 className='newsHeader'>Newsletter</h2>
            <p className='newsInput'>Be the first to know about new products</p>
            <div className='inputContainer'>
                <input placeholder="Your email..." type="email"></input>
                <button className='sentEmail' onClick={() => alert("You have been added to the mailing list for new products")}><img src={sent} width='40px' alt='sent'/></button>
            </div>
        </div>
    )
}
export default Newsletter;