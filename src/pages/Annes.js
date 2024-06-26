import Profile from "../components/Profile/Profile";
import image from "../assets/annes.png";

export function Annes() {
  return (
    <Profile
      image={image}
      name="Anees Shaik"
      linkedInURL="https://www.linkedin.com/in/anees-shaik-327267210/"
      gitHubURL="https://github.com/anees1203"
      role="Reporter"
      email="anees.shaik@slu.edu"
      about="Hello, I&rsquo;m Anees. I&rsquo;m a 24-year-old developer who loves problem-solving and design. I specialize in full-stack development, creating dynamic and user-friendly applications."
    />
  );
}
