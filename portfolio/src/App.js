
import SideBar from '../src/components/side-bar'; 
import Summary from '../src/components/summary';
import SkillsComponent from '../src/components/skills-component';
import ExperienceComponent from '../src/components/experience-component';
import Footer from '../src/components/footer';


function App() {
  return (
    <div className="app-container">
      <div className="sidebar-content">
        <SideBar />
      </div>
      <div className="main-content">
        <div className="content-container summary-content" id="summary">
          <Summary />
        </div>
        <div className="content-container experience-content" id="experience">
          <ExperienceComponent />
        </div>
        <div className="content-container skill-content" id="skills">
          <SkillsComponent />
        </div>
        <div className="content-container footer-content" id="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App;
