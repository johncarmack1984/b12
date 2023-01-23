import { FunctionComponent } from "react";

export const Card: FunctionComponent = ({
  type = "Ingredient",
  name = "Sample Ingredient",
  description = "A Very Tasty Ingredient",
  image = {
    src: "/img/empty-image.svg",
    alt: "",
  },
}: {
  type?: string;
  name?: string;
  description?: string;
  image?: {
    src?: string;
    alt?: string;
  };
}) => {
  return (
    <div className="m-4 flex divide-x rounded-sm border-[1px] border-solid border-black transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-[1.035] hover:shadow-lg active:scale-[1.02] dark:border-gray-light dark:bg-gray dark:hover:border-white">
      <div className="w-[110px] bg-gray-light text-center dark:text-gray sm:w-[175px]">
        <div className="absolute rounded-br-sm bg-[rgba(0,0,0,0.4)] p-[0.15rem] text-xs capitalize text-white">
          {type}
        </div>
        <img
          src={image.src}
          className="aspect-[175/110] h-full w-full object-cover object-center"
          alt=""
        />
      </div>
      <div className="flex flex-1 items-center justify-start bg-white p-2 dark:bg-gray-dark dark:text-white">
        <div className="min-w-[27%] self-start sm:mr-10 sm:p-1 md:mr-7">
          <div className="whitespace-normal font-serif text-3xl font-light dark:text-white md:text-4xl">
            {name}
          </div>
          <div className="text-2xl font-light tracking-widest">000</div>
          <div className="text-xs font-light tracking-wide">
            Calories Per Serving
          </div>
        </div>
        <div className="hidden max-w-[66%] whitespace-normal sm:contents sm:p-1 md:p-3">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
