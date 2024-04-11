import Image from "next/image";
import React from 'react';

type SocialButtonProps = {
  icon: string;
  url: string;
  alt: string;
};

const SocialButton: React.FC<SocialButtonProps> = ({ icon, url, alt }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#235686' }}>
    <Image
        src={icon}
        alt={alt}
        width={40}
        height={40}
        style={{ width:"auto", height:"auto" }}
    />
  </a>
);

export default SocialButton;
