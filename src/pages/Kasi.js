import Profile from "../components/Profile/Profile";
import image from "../assets/kasi.png";

export function Kasi() {
  return (
    <Profile
      image={image}
      name="Kasi Viswanadh Mogali"
      linkedInURL="https://www.linkedin.com/in/kasi-viswanadh-mogali-2ba322234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
      gitHubURL="https://github.com/KasiMogali"
      role="Reporter"
      email="kasiviswanadh.mogali@slu.edu"
      about="I am currently pursuing my Master's in Computer Science from Saint Louis University. My skill set encompasses a variety of programming languages and technologies, including C, Java, Python, Spring Boot, and PostgreSQL. This diverse expertise equips me with the ability to tackle complex software development projects and engage in advanced computational research."
    />
  );
}
