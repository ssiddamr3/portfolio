import './experience-component.css'

function ExperienceComponent(){
    return(
    <div className="experience-font">
    <h1 className='heading-font'><span class="material-symbols-outlined">computer</span> Experience</h1>
    <h2 className='heading-font'><span class="material-symbols-outlined">terminal</span> Programmer Analyst</h2>
    <p>
        <h3><span className='cts-color'>Cognizant Technologies, Hyderabad, India, July 2020 - June 2022</span></h3>
    </p>
    <ul>
        <li>
        Completed in-depth training in cutting-edge software development technologies,such as<span className='exp-higlight'> C# Asp.net</span> for server-side development,<span className='exp-higlight'> ReactJs</span> for responsive user interfaces, and <span className='exp-higlight'>Selenium</span>for automated testing.
        </li>
        <li>
        Automated web testing with Selenium and crafted detailed scripts for the client’s "Products & Systems" module, emphasizing permissions and authorization. Generated comprehensive bug reports for collaborative resolution.
        </li>
        <li>
        Gained real-time project experience by developing reusable functional components in React JS by employing hooks, states, and lifecycle methods, to optimize and implement additional features for the client’s "Team Budget and status of the product" module.
        </li>
        <li>
        Engineered RESTful APIs, optimizing CRUD operations via <span className='exp-higlight'>Entity Framework and HTTP verbs (GET, PUT, POST)</span> to enhance the "Product Resources" module efficiency by 15% through seamless retrieval and updating of database tables.
        </li>
        <li>
        Conducted thorough testing using <span className='exp-higlight'>Nunit</span> for unit testing, Moq for mocking dependencies, and <span className='exp-higlight'>Postman</span> for API endpoint testing.
        </li>
        <li>
        Committed to <span className='exp-higlight'>Agile methodologies</span>, actively engaging in Scrum calls for flexible collaboration. Implemented <span className='exp-higlight'>Jenkins</span> for CI/CD pipelines, employed <span className='exp-higlight'>JIRA</span> for Scrum management, and <span className='exp-higlight'>GitLab</span> for code management and version control.
        </li>
    </ul>
    </div>
    )
}

export default ExperienceComponent