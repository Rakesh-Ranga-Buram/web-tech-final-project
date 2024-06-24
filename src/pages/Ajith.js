import Profile from "../components/Profile/Profile";
import image from "../assets/ajith.png";

export function Ajith() {
  return (
    <Profile
      image={image}
      name="Ajith Akuthota "
      linkedInURL="https://www.linkedin.com/in/ajith-akuthota-4693081a8/"
      gitHubURL="https://github.com/AjithAkuthota23"
      role="Content Coordinator "
      email="ajith.akuthota@slu.edu"
      about="I'm currently enrolled as a master’s student in Computer Science program at Saint Louis University, where I am honing my skills and expanding my knowledge in various aspects of Computer Science.I possess a robust skillset in programming languages such as C, Java, and Python. I’m an Oracle certified Associate as JAVA SE8 programmer."
    />
  );
}
