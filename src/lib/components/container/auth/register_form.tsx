import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import TextField from "lib/components/common/fields/text_field";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box as="form" mt={10}>
        <Stack spacing={4}>
          <TextField name="full_name" placerholder="Họ và tên" />
          <TextField name="email" placerholder="email@gmail.com" />
          <TextField name="number_phone" placerholder="+84 (___) - ___ - ___" />
          <TextField name="password" type="password" placerholder="Mật khẩu" />
          <TextField
            name="password_cofirmation"
            type="password"
            placerholder="Nhập lại mật khẩu"
          />
        </Stack>
        <Button
          fontFamily="heading"
          mt={8}
          w="full"
          bgGradient="linear(to-r, red.400,pink.400)"
          color="white"
          _hover={{
            bgGradient: "linear(to-r, red.400,pink.400)",
            boxShadow: "xl",
          }}
        >
          Đăng ký
        </Button>
        <Link href="/auth/login">
          <Flex mt={2} justifyContent="flex-end">
            <Text textDecoration="underline" flex="right" color="#F56565">
              Đăng nhập
            </Text>
          </Flex>
        </Link>
      </Box>
    </form>
  );
};
export default RegisterForm;
