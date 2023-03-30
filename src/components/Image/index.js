import { useState, forwardRef } from "react";
import images from "~/assets/images";

const Image = forwardRef((props, ref) => {
  const {
    src,
    alt,
    fallback: customFallback = images.noImage,
    ...rest
  } = props;

  const [fallback, setFallback] = useState(src);

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img ref={ref} src={fallback} alt={alt} {...rest} onError={handleError} />
  );
});

export default Image;
