import Image from '../node_modules/next/image';
// Image.propTypes = {
//   unoptimized: null,
// };

// Image.defaultProps = {
//   unoptimized: true,
// };

const NextImage = (props) => <Image unoptimized {...props} />;
export default NextImage;
