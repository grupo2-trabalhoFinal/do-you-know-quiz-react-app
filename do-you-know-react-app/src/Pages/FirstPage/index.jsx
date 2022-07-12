import { FirstPageContainer,ButtonFirstPage } from "./style"
import Logo from '../../Assets/LOGO.svg'
import Pessoa from '../../Assets/Pessoa.svg'
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { Redirect, useHistory } from "react-router-dom"
import { TokenContext } from "../../context/TokenContent"

const FirstPage = ({auth,setAuth}) =>{

    const {userName, changeName} = useContext(UserContext)
    
    const history = useHistory();

    if(!auth){
        history.push("/")
    }
    return(
        
        <FirstPageContainer>
            <img src={Logo}   style={{ width: "35vw" }}/>
            <div className = "person">
                <img src={Pessoa} style={{ width:"20vw" }}/>
                <span>{userName}</span>
            </div>
            <ButtonFirstPage onClick={()=>history.push("/category")}>Jogar</ButtonFirstPage>
            <ButtonFirstPage>Ranking</ButtonFirstPage>
        </FirstPageContainer>
    )
}

export default FirstPage