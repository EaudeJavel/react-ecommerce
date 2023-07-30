import React from 'react';
import Button from '../../common/generic/Button';
import Spacer from '../../common/generic/Spacer';

/**
 * A component that displays a section with a three-part design, with the first one being a 66%/33% split of two divs, and the second one is under the first one with a width of 100%.
 *
 * @param {string} content - The content to display in the left div.
 * @param {string} btnContent - The content to display in the button in the right div.
 * @param {string} backgroundImage - The URL of the background image to display in the section.
 */
interface BestsellersProps {
  content: string;
  backgroundImage?: string;
  btnContent: string;
}

const Bestsellers: React.FC<BestsellersProps> = ({
  btnContent,
  content,
  // backgroundImage,
}) => {
  return (
    <section className="px-5">
      <Spacer />
      <div className="flex h-80 items-center justify-center">
        <div className="flex h-full w-1/3 flex-col-reverse p-5 outline">
          <p>{content}</p>
        </div>
        <div className="flex h-full w-2/3 items-center justify-center bg-gray-300 outline">
          <Button>{btnContent}</Button>
        </div>
      </div>
      <div className="h-28 w-full translate-y-px p-5 outline">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full w-full hover:underline"
        >
          Lorem ipsum dolor sit amet -&gt;
        </a>
      </div>
      <Spacer />
    </section>
  );
};

export default Bestsellers;
