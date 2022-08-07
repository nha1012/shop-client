import {
  Box, Button, Flex, Input, Stack, Text, FormErrorMessage,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import TextField from "lib/components/common/fields/text_field";
import { setCookie } from "lib/helpers/cookie";
import { LoginParams } from "lib/types/auth";
import Link from "next/link";
import { login } from "pages/api/auth";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router"
const RegisterForm = () => {
  const router = useRouter()
  const methods = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = async (data: LoginParams) => {
    try {
      const res = await login(data);
      if(res.data){
        setCookie('access_token', res.data.token)
        router.push('/profile')
      }
    } catch (error) {

    }
  }
  return (
    <FormProvider {...methods}>
      <FormControl isInvalid={true}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Box mt={5}>
            <Stack spacing={4}>
              <TextField name="email" type="eamil" placerholder="Nhập email" />
              <TextField name="password" type="password" placerholder="Mật khẩu" />
            </Stack>
            <Button
              type="submit"
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}>
              Đăng nhập
            </Button>
            <Link href="/auth/register">
              <Flex mt={2} justifyContent="flex-end">
                <Text textDecoration={"underline"} flex="right" color={"#F56565"}>Đăng ký</Text>
              </Flex>
            </Link>
          </Box>
        </form>
      </FormControl>
    </FormProvider>
  )
}
export default RegisterForm;
