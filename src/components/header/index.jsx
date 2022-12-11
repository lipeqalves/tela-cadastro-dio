
import { Button } from '../Button/index';
import { Container } from './styles';

import logo from '../../assets/logo-dio.svg'

export const Header = () => {

    return(
        <Container>
            <img src={logo} alt="logo dio"/>
            <ul>
                <li className="texto-home">Home</li>
                <li><Button title="Entrar"/> </li>
                <li><Button title="Cadastrar"/></li>
            </ul>
        </Container>
    )
}