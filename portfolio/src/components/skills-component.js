import './skills-component.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
function SkillsComponent(){
    return(<div className="skills-font">
        <h1 className='heading-font'><span class="material-symbols-outlined">code_blocks</span> Skills</h1>
        <ul>
            <li><span class='google-fonts-side-headings'>Programming Languages:</span> Python, SQL, R, Bash Scripting, Matlab, C#, GIT</li>
            <li><span class='google-fonts-side-headings'>Frontend Technologies:</span> ReactJS</li>
            <li><span class='google-fonts-side-headings'>Mark up Languages:</span> HTML, CSS</li>
            <li><span class='google-fonts-side-headings'>Version Control:</span> Gitlab, Github</li>
            <li><span class='google-fonts-side-headings'>Data Science Frameworks:</span> Pandas, Numpy, Sci-Kit Learn</li>
            <li><span class='google-fonts-side-headings'>Analytics:</span> Tableau, Seaborn</li>
            <li><span class='google-fonts-side-headings'>OS:</span> MacOS, Windows, Ubuntu, centOS</li>
            <li><span class='google-fonts-side-headings'>Cloud:</span> AWS (EC2, EBS, RDS, S3, ELB, CloudWatch)</li>
            <li><span class='google-fonts-side-headings'>Software Development Methodologies:</span> Scrum</li>
            <li><span class='google-fonts-side-headings'>CI/CD (Continuous Integration/Continuous Deployment):</span> Jenkins</li>
            <li><span class='google-fonts-side-headings'>Automated Testing:</span> Selenium, Postman</li>
        </ul>

        <h1 className='heading-font'><span class="material-symbols-outlined">folder_data</span> Projects</h1>

  <ul>
    <li>
      <span class='google-fonts-side-headings'>Meals Ordering Application</span> - Python, Django, SQL, ReactJs, HTML, CSS, Bootstrap, Postman, Visual Studio Code
      <p>
        Developed a full-stack Django, ReactJS, and MySQL meal ordering application. Created CRUD APIs, designed a normalized
        database, and used the React-testing library and Pytest to carry out extensive testing. Utilized GitHub version control,
        Selenium for end-to-end testing, and Postman for API testing.
      </p>
      <p>
        <span><FontAwesomeIcon icon={faGithub} /> Repository link:</span> <a href="https://github.com/ssiddamr3/FullStack_FoodOrder.git" target="_blank">https://github.com/ssiddamr3/FullStack_FoodOrder.git</a>
      </p>
    </li>

    <li>
      <span class='google-fonts-side-headings'>Social Media Clone Project</span> – Python, Django, HTML, CSS, JavaScript, Visual Studio Code
      <p>
        Developed a Django project, with a focus on posting, group creation, and user authentication. The project was developed
        with Django modules such as mixins, slugify, and reverse lazy to improve features and guarantee an organized web
        application architecture. The primary goal was to demonstrate Django's ability to create dynamic, interactive webpages.
      </p>
      <p>
       <span><FontAwesomeIcon icon={faGithub} /> Repository Link:</span> <a href="https://github.com/ssiddamr3/Social_Media_Project.git" target="_blank">https://github.com/ssiddamr3/Social_Media_Project.git</a>
      </p>
    </li>

    <li>
      <span class='google-fonts-side-headings'>Task Management Project</span> – C#, ASP.NET, SQL, ReactJs, Bootstrap, Microservices, Visual Studio Code, Postman
      <p>
        Developed a feature-rich task management system with ASP.NET, MySQL, Postman, ReactJS, and C#. Created a dynamic
        React frontend, implemented CRUD APIs for tasks, using microservices, and tested APIs with Postman.
      </p>
    </li>

    <li>
      <span class='google-fonts-side-headings'>Automated Testing of a Hotel Booking Web Application</span> – Python, Selenium, Visual Studio Code
      <p>
        Used Selenium with Python to test a hotel booking website. Created and implemented automated scripts to guarantee the
        booking platform's dependability and functionality. Performed thorough end-to-end testing, recognizing possible bugs and fixing them to improve the user experience as a whole.
      </p>
    </li>
  </ul>
        </div>)
}
export default SkillsComponent;