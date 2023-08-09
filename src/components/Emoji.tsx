import { Image, ImageProps } from "@chakra-ui/react";
import bullseye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsup from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsup, alt: "good", boxSize: "25px" },
    5: { src: bullseye, alt: "excellent", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
