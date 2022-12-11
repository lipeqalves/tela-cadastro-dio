import { Input } from "../../components/Input"
import { Container, TextPrincipal,FormContainer, Titulo,TextForm , TextFormFinal, TextFormFinalCor } from "./styles"

import { Button } from "../../components/Button";
import {MdEmail, MdLock} from 'react-icons/md';
import {FaUser} from 'react-icons/fa';


export const TelaCadastro = () => {

    return(
        <Container>
          <TextPrincipal>
          A plataforma para você aprender com experts, 
          dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </TextPrincipal>
          <FormContainer>
          <Titulo>
          Comece agora grátis
          </Titulo>
          <TextForm>
          Crie sua conta e make the change._
          </TextForm>
          
          <form >
            <Input name="email"   placeholder="Nome completo" leftIcon={<FaUser/>}/>
            <Input name="email"   placeholder="Email" leftIcon={<MdEmail/>}/>
            <Input name="password"   placeholder="Password" type="password" leftIcon={<MdLock/>} />
           
            <Button title="Entrar" variant="secondary"  type='submit'/>

          </form>
          <TextForm> 
          Ao clicar em "criar minha conta grátis", 
          declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
          </TextForm>
         
            <TextFormFinal> 
          Já tenho conta. <TextFormFinalCor>Fazer login</TextFormFinalCor>
          </TextFormFinal>
          </FormContainer>
         
        </Container>
        
    )

}