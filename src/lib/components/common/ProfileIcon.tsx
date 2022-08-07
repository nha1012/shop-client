import { IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { RiUser3Line } from "react-icons/ri";
const CartIcon = () => {
  return (
  <Link href="/profile" passHref>
    <IconButton
      as="a"
      aria-label="theme toggle"
      icon={<RiUser3Line/>}
    />
  </Link>
  );
};

export default CartIcon;
