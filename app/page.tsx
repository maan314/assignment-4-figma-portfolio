import { TiArrowDown } from "react-icons/ti";
import WordCount from "@/public/images/wordcount.png";
import Currency from "@/public/images/currency.jpg";
import PortFo from "@/public/images/port.jpg";
import Card from "@/app/components/Card";

export default function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row px-6 md:px-20 items-center h-[70vh] gap-8 md:gap-16">
        <div className="w-full md:w-[45%] text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-title text-[#181717]">
            Hello, I&apos;m <br /> Muhammad Usman.
          </h1>
        </div>
        <div className="w-full md:w-[55%] flex text-lg md:text-xl mt-8 md:mt-24">
          <p className="font-normal font-title text-[#606060] leading-relaxed">
            A Senior Web Development Student with ambition to learn AI
            <br />
            also know about the basics of Front-end web development.
            <br />
            Getting closer to becoming Agentic AI.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 -mt-6 md:-mt-10 mb-16 md:mb-36">
        <p className="text-4xl md:text-5xl font-extrabold text-center">
          <TiArrowDown />
        </p>
      </div>

      <Card
        cardNo="01"
        cardTitle="Word Count"
        cardParagraph="Word count developed using TypeScript and CLI."
        cardSpan="It's helpful when we just want to count our lengthy paragraphs."
        cardLink="Want to count your words?"
        cardImage={WordCount}
      />

      <hr className="w-[88%] mx-auto h-0.5 bg-[#181717]" />

      <Card
        cardNo="02"
        cardTitle="Currency Converter"
        cardParagraph="Used only TypeScript to develop this awesome CLI in our GIAIC classes."
        cardSpan="A good project makes you good, but a unique one will make you the best in the industry."
        cardLink="More shots from this project"
        cardImage={Currency}
      />

      <hr className="w-[88%] mx-auto h-0.5 bg-[#181717]" />

      <Card
        cardNo="03"
        cardTitle="Portfolio"
        cardParagraph="All about me, what I learned in GIAIC and got the opportunity to deliver."
        cardSpan="A path many choose, but only those who have consistency stay. You can know more about me in this portfolio."
        cardLink="You can contact me through"
        cardImage={PortFo}
      />
    </>
  );
}
