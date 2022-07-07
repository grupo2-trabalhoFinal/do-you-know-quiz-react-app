import { FirstPageContainer,ButtonFirstPage } from "./style"
import Logo from '../../Assets/LOGO.svg'
import Pessoa from '../../Assets/Pessoa.svg'

const FirstPage = () =>{

    return(
        <FirstPageContainer>
            <img src={Logo}   style={{ width: "35vw" }}/>
            <div className = "person">
                <img src={Pessoa} style={{ width:"20vw" }}/>
                <span>Olá, Juliene 123!</span> {/* mudar o nome com o login */}
            </div>
            <ButtonFirstPage>Jogar</ButtonFirstPage>
            <ButtonFirstPage>Ranking</ButtonFirstPage>
        </FirstPageContainer>
    )
}

export default FirstPage