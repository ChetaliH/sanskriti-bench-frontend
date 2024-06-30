import '../Guidelines.css';
import { Scrollbar } from 'react-scrollbars-custom';
import image3 from '../assets/Images/SBPic3.png';
import image4 from '../assets/Images/SBPic4.png';

function About(){
    const classes = ['page', 'motion'];
    
    return(
    <div><header className='header'></header>
        <div className={classes.join(' ')}>
            <div className='headerAbout'>SanskritiBench: Bridging NLP and Indian Cultural Richness</div>
            <div className='subheader'>Abstract</div>
            <div className='text'>The aim of the project is to develop a state-of-the-art Indian Cultural benchmark that can test these models for their cultural accuracies, especially in a country like India which is rich in diversity. With Hugging Face initiative of DATA-IS-BETTER-TOGETHER, our aim is to expand the benchmark into an alignment dataset and release it for preference tuning tasks.<br></br>We will be covering the official languages of India and their corresponding dialects. This is a community-driven project and your support and collaboration can make this initiative a success.</div>
            <div className='subheader'>Motivation and Process</div>
            <div className='text'>Our goal is to ensure cultural accuracy and depth in NLP models by creating an Indic Cultural Benchmark. The process involves forming questions about the state across various categories. Context can change drastically for different states, highlighting the rich diversity of India. For instance:<br></br>
                <ul>
                    <li>Geographical Features: The geography of Kerala, with its backwaters and coastal line, contrasts sharply with the deserts of Rajasthan.</li>
                    <li>Demographics: The linguistic diversity of Karnataka, with Kannada as the official language, differs from the multilingual population of Delhi, where Hindi, Punjabi, and Urdu are commonly spoken.</li>
                    <li>Historical System: The historical influence of the Maratha Empire in Maharashtra is distinct from the Dravidian architecture and history of the Chola Dynasty in Tamil Nadu.</li>
                    <li>Economy: Punjab's agricultural economy, known for its wheat production, contrasts with the IT and service-driven economy of Telangana, particularly in Hyderabad.</li>
                    <li>Culture and Society: The classical dance form Bharatanatyam from Tamil Nadu is different from Kathak, which originated in northern India.</li>
                    <li>Great Personalities: Contributions of Rabindranath Tagore in Bengal's literary world differ from those of Dr. A.P.J. Abdul Kalam in Tamil Nadu's scientific community.</li>
                    <li>Infrastructure: The architectural marvel of the Konark Sun Temple in Odisha contrasts with the modern infrastructure of cities like Bengaluru.</li>
                    <li>Education and Healthcare: Kerala's high literacy rate and robust healthcare system stand out compared to other states.</li>
                    <li>Tourism and Attractions: The spiritual allure of Varanasi in Uttar Pradesh is distinct from the scenic beauty of the backwaters in Kerala.</li>
                    <li>Proverbs: Proverbs in Punjabi may convey different cultural wisdom compared to those in Gujarat.</li>
                    <li>Challenges and Future Outlook: Addressing economic disparities in Bihar is different from tackling environmental concerns in the Sundarbans of West Bengal.</li>

                </ul>
                <br></br>
                Figurative Language: Figurative language holds an essential role in the cultural context of each state. It includes proverbs, poems, similes, and other expressions that reflect the unique identity and wisdom of the people. For instance:<br></br>
                <ul>
                    <li>In Tamil, a common proverb "கற்றது கைமண் அளவு, கல்லாதது உலகளவு" (What one has learned is only a handful of sand; what one hasn't learned is the size of the world) emphasizes the vastness of knowledge yet to be acquired.</li>
                    <li>In Bengali literature, the use of similes and metaphors is profound, as seen in the works of Rabindranath Tagore, where nature and human emotions are often intertwined.</li>
                    <li>Hindi poems often employ rich figurative language to express deep emotions and cultural narratives, as evident in the works of poets like Kabir and Tulsidas.</li>
                </ul>
                <br></br>
                By understanding and integrating these elements, we aim to enhance NLP models to better interpret and generate culturally rich and contextually accurate content. In parallel, our team will also be working on development of preference datasets for these languages.
            </div>
            <div className='subheader'>Example</div>
            <img src={image3} alt="Image" />
            <div className='subheader'>Goals and Milestones</div>
            <div className='text'>Goals:<br></br>
                <ul>
                    <li>Develop a state-of-the-art Indian Culture Benchmark.</li>
                    <li>Enhance NLP models with cultural and social awareness by working on cultural alignment datasets.</li>
                    <li>Extend the research into deeper levels for each Indian Language.</li>
                </ul><br></br>
                Milestones:<br></br>
                <ul>
                    <li>Milestone 1: Initial research and dataset collection.</li>
                    <li>Milestone 2: Model benchmarking and preliminary testing.</li>
                    <li>Milestone 3: Dataset Release and Feedback.</li>
                    <li>Milestone 4: Final evaluation and publication.</li>
                </ul>
                <div className="side-by-side-container">
                <div className="left-content">
                    <div className='leftSubHeader'>Principal Investigator</div>
                    <div className='leftText'>
                        Guneet Singh Kohli<br></br>
                        Research Lead and NLP Engineer
                    </div>
                 </div>
                <div className="right-content">
                     <div className='rightSubHeader'>Research Advisors</div>
                     <div className='rightText'>
                        Industry:<br></br>
                        - Daniel van Strien, Hugging Face<br></br>
                        - Dr. Shantipriya Parida, Silo AI<br></br>
                        - Anindyadeep Sannigrahi, Prem AI<br></br><br></br>
                         Academia:<br></br>
                        - Dr. Satya Ranjan Dash, Associate Professor, KIIT University<br></br>
                        - Dr. Prashant Singh Rana, Assistant Professor, Thapar University
                    </div>
                </div>
                <br></br>
            </div>
            <br></br>
            <div className='text'><img src={image4} alt="Image" /></div>
            <br></br>
            <div className='subheader'>Contact Us or Join Us</div><br></br>
            <div className='text'>If you are interested in joining our project or want to know more about our research, please contact us at:<br></br><br></br>Email: guneetfateh07@gmail.com</div>
            
            
            <button className='externalButton'>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScHB7hv3_rJW1iEXBbbol3SuuRpjiSztxUGE25vjBRKr1WAog/viewform" target="_blank">Join us</a>
            </button>
            
            
        </div>
    </div>
    </div>
    

        
    );
}

export default About;