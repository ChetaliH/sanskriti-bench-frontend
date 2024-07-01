import '../Guidelines.css';
import { Scrollbar } from 'react-scrollbars-custom';
/*import YoutubeEmbed from './YouTubeComponent';*/
import Sidebar  from './Sidebar';

function Guidelines(){
    const classes = ['page', 'motion'];
    return(
        <div><header className='header'></header>
            <Sidebar />
            <div className={classes.join(' ')}>

               <h3 >Guidelines</h3> 
               <p >We expect you to follow these guidelines when contributing to this project.</p>
                <h4 >General rules</h4>
                <ul >
                    <li>It would be best to join the Discord server and request in the #general chat discussion regarding which group you want to contribute to and what role you are interested in.</li>
                    <li>Fill out this google form if you do not have your credentials for contributing.</li>
                    <li>Please mail us at: guneetsk99@gmail.com / proanindyadeep@gmail.com / ashishvashist024@gmail.com for any kind of personal questions or ask that in discord.</li>
                    <li>If you apply as a contributor role, you need to log in to the platform and contribute as many examples as possible. You need to provide the question and answer in your indic / native language. Please make sure the answer you put is correct.</li>
                    <li>Be kind to all. It's an open science; our work is for the Indian Language and our cultures.</li>
                    <li>Mentors would be available for any help related to data building.</li>
                    <li>All the contributor's contributions will be mentioned and shown publicly in the Hall of Fame once the project is completed.</li>
                </ul>
                <h4>How should you frame the question:</h4>
                <p>Here are some rules and suggestions on how you should make different questions:</p>
                <ol>
                    <li><p>DO NOT include any topics that are super controversial or very political. Like asking for opinions, etc. You can always ask questions related to political facts or anything related to history. Refrain from questions related to recent politics (post-2000).</p></li>
                    <li>Please DO NOT question super generic questions. For example, what is the capital of India, and who created the Taj Mahal? Etc etc. Ask questions which are related to your culture and questions that are not often asked for daily lives. Example: Question related to Durga Puja, when the language is Bengali, because it is an essential cultural part of Bengal.</li>
                    <li>It would be great to ask questions starting with a negation or the answer should start with No. For example, Instead of asking Is Onam celebrated on Kerala?, ask: Is Onam not celebrated on Kerala?</li>
                    <li>Always ask questions using your indic / native language. It should not be any mixture of two languages. Complete question and answer in native language.</li>
                    <li>Do not repeat or copy questions from others. Each question should be unique. Please remember this is not a competition. There is absolutely no pressure.</li>
                    <li>Avoid questions related to personal biases and views.</li>
                </ol>
                <h4>Some suggestion for question and answer</h4>
                <ol>
                    <li>One of popular question you can frame is topics on folklore you have heard in your childhood.</li>
                    <li>Another type of question could be any kind of local historical or political facts.</li>
                    <li>One popular type is to ask tricky questions. For example question related to family relationship. Example:</li>
                    <p className='box'>Question: What relation does my uncle's son have with me?<br></br>
                    Answer: Cousin (paternal)</p>
                    <p>Note: I intentionally wrote the translated version of Hindi, so that almost all of the contributors can understand.</p>
                    <li>Any question to religious facts. Be careful when asking religious question, it SHOULD NOT be OPINION BASED question. For example:</li>
                    <p className='box'>Question: How many lotus flowers are used for Durga Puja<br></br>
                    Answer: 108</p>
                    <p>Note: I intentionally wrote this in english so that everyone can understand this.</p>
                    <li>There is another type of question we can suggest which are question that intentionally asked with wrong answer. For example:</li>
                    <p className='box'>Question: Are't 110 lotus flower used in Durga Puja? <br></br>Answer (expected): No, 108 is used</p>
                    
                    
                </ol>

                <p>This is also known as: "leading question" with an incorrect presumption. The above question is intentionally phrased to prompt a correction, leading the respondent to provide the accurate information.</p>

                <p>Other than this, the sky is your limit, use your creativity and ask as many question you would like to ask.</p>
            </div>

        </div>
    );
}

export default Guidelines;