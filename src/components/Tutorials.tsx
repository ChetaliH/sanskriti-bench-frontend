import '../Guidelines.css';
import { Scrollbar } from 'react-scrollbars-custom';
import image2 from '../assets/Images/SBPic2.png';
import image1 from '../assets/Images/SBPic1.png';
import Sidebar from './Sidebar';
import '../Sidebar.css';

function Tutorials(){
    const classes = ['page', 'motion'];

    return(
        <div><header className='header'></header>
            <Sidebar />
            <div className={classes.join(' ')}>
                <h2>Resources</h2>
                <p>Here are some list of resources which will help you to get started.</p>
                <h4>Contributing through Mobile</h4>
                <p>You can contribute to mobile by using Google voice typing. If you do not have voice typing you can download it from <a href='https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin&hl=en_IN' target='_blank'>playstore</a>.</p>
                
                <iframe
                    width="650"
                    height="480"
                    src={"https://www.youtube.com/embed/uUSiuKp5zf8?si=wmiVxVQsP2vEjeoe"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube" />

                <h4 className='videoSp'>Contributing through Desktop</h4>

                <p>For those who want to conrtribute in desktop mode (with a keyboard) here are some list of source which can help to input your indic language keyboard.</p>

                <p><a href='https://www.google.com/intl/en/inputtools/try/'><h5>Google Input Tools</h5></a></p>

                <p>This is one of the most popular multi-lingual keyboard input supported.</p>

                <img src={image1} alt="Image" />

                <p>Google Input tools is very easy. Just select the language and start writing in english and it will give you suggestion of the corresponding selected language character by character.</p>

                <p>Once you type in the question ans answer, copy the question, answer and paste it to our "Question" and "Answer" fields.</p>

                <p>We also recommend to see this <a href='https://www.youtube.com/watch?v=5aRPY1bMvXI'>YouTube tutorial</a>.</p>

                <a href='https://www.lexilogos.com/english/index.htm' target='_blank'><h4>Lexilogos</h4></a>

                <img src={image2} alt="Image" />

                <p>Lexilogos provide a very basic multilingual keyboard input support. So if you want to type in this method, you can check out lexilogos.</p>
                    
                
            </div>
        </div>
    );

}

export default Tutorials;