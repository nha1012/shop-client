import { IconButton } from "@chakra-ui/react";
import { RiUser3Line } from "react-icons/ri";
const CartIcon = () => {
  return (
    <IconButton
      aria-label="theme toggle"
      icon={<RiUser3Line/>}
    />
  );
};

export default CartIcon;
