import background from "../../Assets/background.svg"
import BackgroundImg, { RetryButton } from "./style";
import Logo from "../../Assets/LOGO.svg"




const ScoreRankingPage = () => {


  
  return(
        
          <BackgroundImg>
            <img src={background} alt="Logo Do You Know" ></img>

            <div>
              <img src={Logo}></img>
            </div>
            
            <label></label>
            
            <RetryButton>
              <p>Voltar</p>
            </RetryButton>
            
          
          </BackgroundImg>
          
  );
};

export default ScoreRankingPage;

