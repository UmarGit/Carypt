/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image, Text } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ image }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image src={image} alt="carpyt" width={40} sx={{marginRight: 2}} />
      <Text
        sx={{
          fontSize: 4,
          fontWeight: "bolder",
        }}
      >
        Carypt
      </Text>
    </Link>
  );
}
