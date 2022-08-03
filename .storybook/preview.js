// import * as NextImage from "next/image";

// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, "default", {
//   configurable: true,
//   value: (props) => typeof props.src === 'string' ? (
//     <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
//   ) : (
//     <OriginalNextImage {...props} unoptimized />
//   ),
// });

// Object.defineProperty(NextImage, "__esModule", {
//   configurable: true,
//   value: true
// });

import NextImage from 'next/image';

NextImage.propTypes = {
  unoptimized: null,
};

NextImage.defaultProps = {
  unoptimized: true,
};




export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
