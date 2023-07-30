import React from 'react';
import Button from '../../common/generic/Button';

/**
 * A component that displays a hero section with a title, subtitle, background image, and a button.
 * @param title - The title to display in the hero section.
 * @param subtitle - The subtitle to display in the hero section.
 * @param backgroundImage - The URL of the background image to display in the hero section.
 * @param btnContent - The content to display in the button.
 */
interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  btnContent: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  btnContent,
}) => {
  const heroStyle: React.CSSProperties = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundColor: backgroundImage ? undefined : '#ccc',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    display: 'flex',
    marginLeft: '19px',
    marginRight: '20px',
    paddingBottom: '20px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
  };

  return (
    <div style={heroStyle}>
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="w-2/5 py-4">{subtitle}</p>
      <Button>{btnContent}</Button>
    </div>
  );
};

export default Hero;
