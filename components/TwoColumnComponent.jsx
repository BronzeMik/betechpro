import Image from 'next/image';

const TwoColumnComponent = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  text, 
  ctaText, 
  ctaLink, 
  reverse = false 
}) => {
  return (
    <div className={`flex flex-col md:flex-row items-center ${reverse ? 'md:flex-row-reverse' : ''} gap-8 p-8 bg-gray-50 rounded-lg shadow-md`}>
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          width={600} 
          height={400} 
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{text}</p>
        <a 
          href={ctaLink} 
          className="inline-block hover:bg-[#3C3E4F] hover:text-white text-[#3C3E4F] font-bold px-6 py-3 rounded-lg text-lg bg-[#46B3E6] transition duration-300"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default TwoColumnComponent;
