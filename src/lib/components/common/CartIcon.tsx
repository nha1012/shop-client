import { Badge, Flex, IconButton } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FC } from "react";
import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";
interface Props{
  cartLength?: number;
}
const CartIcon:FC<Props> = ({cartLength}) => {
  return (
  <CartIconContainer>
    <IconButton
      aria-label="theme toggle"
      icon={ <RiShoppingCartLine />}
    />
    {cartLength && <Badge sx={{ position: "absolute", top: 0, right: 0, borderRadius: "100%",}} ml='1' colorScheme='green'>
      {cartLength}
    </Badge>}
  </CartIconContainer>
  );
};

export default CartIcon;
const CartIconContainer = styled.div`
  position: relative;
`
