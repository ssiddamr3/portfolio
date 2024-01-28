
import './summary.css'
function Summary(){
    return(
        <div className="summary-main">
            
            <span className='front'>
            <h2 className='name'>Sai Sreekar Reddy Siddamreddy</h2>
            </span>
            <span id="trial">Seeking Software Development Roles</span>
            <div className='font-trial'>
            <h1 className='heading-font'><span class="material-symbols-outlined">waving_hand </span> SUMMARY</h1>
            <p>
            Results-oriented software developer with 2 years of experience in C#, SQL, Git, and React, currently pursuing a master's in data science.
            Seeking full-time opportunities in software development. Adaptable to diverse technologies, excelling in collaborative, high-pressure environments.
            </p>

            <h3 className='heading-font'><span class="material-symbols-outlined">school</span> EDUCATION</h3>
            <ul>
            <li>
                <span className='exp-higlight'>University at Buffalo, The State University of New York</span>
                <br/>
                Masters of Science in Data Science, Expected December 2023, <span className='exp-higlight'>GPA: 3.1</span>
                <br/>
                Relevant course work: Machine Learning, Statistical Data Mining, Data Intensive Computing, Introduction to Probability Theory, Introduction to Programming and Database Systems.
            </li>
            <li>
                <span className='exp-higlight'>VIT University, Vellore, India</span>
                <br/>
                Bachelors of Technology in Information Technology, June 2020, <span className='exp-higlight'>GPA: 3.2</span>
                <br/>
                Relevant course work: Database Management Systems, Big Data Analytics, Data Mining, Software Engineering Systems, Data Structures and Algorithms.
            </li>
            </ul>
            </div>
            </div>
    )}
export default Summary;