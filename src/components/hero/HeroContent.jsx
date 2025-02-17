import Container from '../Container';


const HeroContent = ({ imageSrc = image, children }) => {
  return (
    <div className="hero">
      <div className="img_wrapper">
        <div className="overlay"></div>
      </div>
      <div className="content">
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default HeroContent;
