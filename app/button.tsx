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
        width={40}
        height={40}
        // style={{ width: '24px', height: '24px' }}
        style={{ display: 'inline-block', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#235686' }}
    />
  </a>
);

export default SocialButton;
