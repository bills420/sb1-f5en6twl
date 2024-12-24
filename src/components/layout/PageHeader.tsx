import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <img 
        src={imageSrc}
        alt={imageAlt}
        className="rounded-lg shadow-xl"
      />
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-off-white">{description}</p>
      </div>
    </div>
  );
};

export default PageHeader;