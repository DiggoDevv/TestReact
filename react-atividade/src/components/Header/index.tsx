import logoConexos from '../../assets/logo-conexos-white.png'
import { HeaderStyled, Container, Menu } from './style'

export default function Header(){
    return(
        <>
            <HeaderStyled>
            <Container>
                <img src={logoConexos} alt="logo conexos" />
                <Menu>
                    <ul>
                        <li>
                            <a href="#"> Inicio</a>
                        </li>
                        <li>
                            <a href="#"> Serviços</a>
                        </li>
                        <li>
                            <a href="#"> Relatórios</a>
                        </li>
                    </ul>
                </Menu>
            </Container>
            </HeaderStyled>
        </>
    )
}