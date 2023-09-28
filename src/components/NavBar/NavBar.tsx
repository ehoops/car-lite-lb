import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { StyledWrapper } from "./nav_bar_style";

export const NavBar = () => {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split("-") : ["en"];

  const redirectLocale = shortLocale === "en" ? "es" : "en";

  return (
    <StyledWrapper>
      <Link href={"/"} locale={redirectLocale}>
        <p>
          <FormattedMessage id="changeLanguage" defaultMessage={"En Español"} />
        </p>
      </Link>
    </StyledWrapper>
  );
};
