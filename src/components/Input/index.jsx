import { InputContainer, IconContainer } from './styles'


export const  Input = ({leftIcon, value, name, placeholder, ...rest}) => {
  return (
    <InputContainer >
    {leftIcon?(<IconContainer>{leftIcon}</IconContainer>):null}
       <input value={value} name={name} placeholder={placeholder}/>
    </InputContainer>
  )
}