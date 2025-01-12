import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { StaticImageData } from 'next/image';

const Card = ({
  cardNo,
  cardTitle,
  cardParagraph,
  cardSpan,
  cardLink,
  cardImage,
}: {
  cardNo: string;
  cardTitle: string;
  cardParagraph: string;
  cardSpan: string;
  cardLink: string;
  cardImage: StaticImageData | string;
}) => {
  return (
    // Project container
    <div className="flex flex-col lg:flex-row justify-between gap-12 mx-6 lg:mx-20 my-12 lg:my-24">
      <div className="flex flex-col justify-between w-full lg:w-[400px]">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-xl lg:text-2xl font-medium font-title">{cardNo}/{cardTitle}</h2>
          </div>
          <div>
            <p className="text-base lg:text-lg font-normal font-title">{cardParagraph}</p>
          </div>
          <div>
            <span className="text-sm lg:text-base text-[#606060] font-title">{cardSpan}</span>
          </div>
        </div>
        <div className="project-link flex items-center font-semibold underline mt-4">
          <p className="font-medium text-base lg:text-lg font-title">{cardLink}</p>
          <div className="text-base ml-1">
            <GoArrowUpRight />
          </div>
        </div>
      </div>

      {/* Project image */}
      <div className="lg:w-[670px] w-full">
        <Image src={cardImage} alt="project" layout="responsive" objectFit="cover" />
      </div>
    </div>
  );
};

export default Card;
