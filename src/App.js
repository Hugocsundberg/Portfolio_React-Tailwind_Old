import AboutMe from './Components/AboutMe';
import FirstProject from './Components/FirstProject';
import Hero from './Components/Hero';
import MoveShape from './Components/MoveShape';
import Project from './Components/Project';
import leafs from './Components/leaf.jpeg'

function App() {
  return (
    <div className="App bg-gradient-to-b from-blue-100 to-purple-100">
      <MoveShape />
      <Hero />
      <FirstProject/>
      <Project name="SaladBowl" image={leafs} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, gravida neque massa bibendum erat laoreet ornare vitae elementum. Diam porta massa in eget sed congue pretium at arcu. Scelerisque etiam tristique pulvinar dui eleifend praesent mi mi. Eu mauris quam vel condimentum egestas habitant malesuada vitae diam."/>
      <Project left={true} name="SaladBowl" image={leafs} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, gravida neque massa bibendum erat laoreet ornare vitae elementum. Diam porta massa in eget sed congue pretium at arcu. Scelerisque etiam tristique pulvinar dui eleifend praesent mi mi. Eu mauris quam vel condimentum egestas habitant malesuada vitae diam."/>
      <AboutMe body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, gravida neque massa bibendum erat laoreet ornare vitae elementum. Diam porta massa in eget sed congue pretium at arcu. Scelerisque etiam tristique pulvinar dui eleifend praesent mi mi. Eu mauris quam vel condimentum egestas habitant malesuada vitae diam." />
    </div>
  );
}

export default App;
