import Profile from "../components/Profile/Profile";
import image from "../assets/bhavana.png";

export function Bhavana() {
  return (
    <Profile
      image={image}
      name="Bhavana Unnam"
      linkedInURL="https://www.linkedin.com/in/bhavana-unnam-551a1a1b6/"
      gitHubURL="https://github.com/Unnam29"
      role="Reporter"
      email="bhavana.unnam@slu.edu"
      about="My name is Bhavana Unnam, and I am currently pursuing a master's degree in Computer Science at Saint Louis University. With a strong background in programming languages like C++, Java, and Python, as well as one year of industry experience as a full-stack developer, I am well-equipped to tackle the challenges of my graduate studies. I am excited to expand my knowledge, explore new domains within computer science, and apply my skills in both academic and real-world settings. My goal is to continue enhancing my expertise and positioning myself for success in the dynamic field of computer science."
    />
  );
}
