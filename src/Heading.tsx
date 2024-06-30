
import './BoxContainer.css';
import { Scrollbar } from 'react-scrollbars-custom';
import Sidebar from './components/Sidebar';
import './Sidebar.css';

function Heading(){
    const classes = ['page', 'motion'];
    return (
    <div><header className='header'></header> 
    <div className={classes.join(' ')}>
        
        <h2>Sanskriti Bench App</h2>
        
        <form className='box'>
            <h3>Login</h3>
            <label>Username</label>
            <input
                type='text'
                required
            />
            <label>Password</label>
            <input
                type='text'
                required
            />
            <button>Login</button>
        </form>
        <h4>Welcome</h4>
        <div className='box'>
            
        
            
        
            <p>Welcome to Sanskriti Bench. To your left side you will find navigation. Please check out the guidelines before contributing. Also you can find our tutorials on how to contribute question and answer in your language through phone and web platform. You should have got your username and password from our admin, if not please contact them in discord or fill out this google form</p>
            <h5>Quick Start:</h5>
            <p>Once you join to become a contributor, please do the following:</p>
            <ol>
                <li>Join Discord</li>
                <li>Fill out this google form if you do not have your credentials for contributing.</li>
                <li>Join this whatsapp group: Group Link. Although we prefer discord, it is only for them who are not well versed with Discord.</li>
                <li>Checkout the Guideline section to understand the rules.</li>
            </ol>
            <p>Mail us at: guneetsk99@gmail.com / proanindyadeep@gmail.com / ashishvashist024@gmail.com for any kind of personal questions or ask that in discord. Kindly check out the Guidelines page in the left navigation bar for further questions.</p>
        </div>

        <p>Please enter your username and password</p>
        
    </div>
    </div>
    );
}

export default Heading;