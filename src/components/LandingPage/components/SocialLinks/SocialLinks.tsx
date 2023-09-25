import InstagramLogo from "@/common/images/Instagram_logo_2016.svg";
import TwitterXLogo from "@/common/images/x-logo.svg";
import { Link } from "czifui";
import Image from "next/image";
import { ImageSizer, StyledWrapper } from "./social_links_style";

export const SocialLinks = () => {
  return (
    <StyledWrapper>
      <Link href="https://www.instagram.com/carlitelb/">
        <ImageSizer>
          <Image src={InstagramLogo} alt="Instagram Logo" />
        </ImageSizer>
      </Link>
      <Link href="https://twitter.com/carlitelb">
        <ImageSizer>
          <Image src={TwitterXLogo} alt="Twitter Logo" />
        </ImageSizer>
      </Link>
    </StyledWrapper>
  );
};
