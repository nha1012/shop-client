import { Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { FC } from "react";
interface Props {
  placerholder: string
  name: string
  type?: string
}
const TextField:FC<Props> = ({placerholder, name, type}) => {
const { register } = useFormContext()
  return (
    <Input
      {...register(name)}
      type={type ?? "text"}
      placeholder={placerholder}
      bg={'gray.100'}
      border={0}
      color={'gray.500'}
      _placeholder={{
        color: 'gray.500',
      }}
    />
  )
}

export default TextField;
