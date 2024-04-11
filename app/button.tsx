import Image from "next/image";
import React from 'react';

type SocialButtonProps = {
  icon: string;
  url: string;
  alt: string;
};

const SocialButton: React.FC<SocialButtonProps> = ({ icon, url, alt }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <Image
        src={icon}
        alt={alt}
        style={{ width: '24px', height: '24px' }}
    />
  </a>
);

export default SocialButton;
