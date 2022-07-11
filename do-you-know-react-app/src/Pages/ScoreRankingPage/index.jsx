import background from "../../Assets/background.svg"
import BackgroundImg, { Ranking, RetryButton } from "./style";
import Logo from "../../Assets/LOGO.svg"



const ScoreRankingPage = () => {

  return(
        
          <BackgroundImg>
            <img src={background} alt="Logo Do You Know" ></img>

            <div>
              <img src={Logo} style={{width: "15vw"}} alt="LOGO"></img>
            </div>
            
            <Ranking>
              <ol><img src={"https://s3-alpha-sig.figma.com/img/6946/641e/6623c7af52bae1db781ea4f5d664f5eb?Expires=1658707200&Signature=T9qqUdHvEcrOB1Co7ulaSifNmS~rKtDyzxsZbnT6W-NPYfkncuAIVHlcbTN-kF4htcDmmGULyIu-MU4K9WYnvMng9phuXimnZ5gi1R1pmHxfNeKOyiG~L7Fs1jvfvO-T58RhCfQF3OyjlWt~GajZ2rsxVpJ1nf7d4U5LCEWrsGPimOWi~kDYu3Om7Kpt78z2~MOxBCuXLWE1mxwq2wYLnqDvcTfVBH3QehrzLtqJb6iE5BJHSUHbk7U8U9VPCBvl7~chbmjjV5T6LkP79tV5-m2sGvGjGMSXpHmyccAal2eQgLUru09mnZxUrPf8FDIRGXcF6TBNVdItW5lJT88ghg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}></img></ol>
              <ol><img src={"https://s3-alpha-sig.figma.com/img/6946/641e/6623c7af52bae1db781ea4f5d664f5eb?Expires=1658707200&Signature=T9qqUdHvEcrOB1Co7ulaSifNmS~rKtDyzxsZbnT6W-NPYfkncuAIVHlcbTN-kF4htcDmmGULyIu-MU4K9WYnvMng9phuXimnZ5gi1R1pmHxfNeKOyiG~L7Fs1jvfvO-T58RhCfQF3OyjlWt~GajZ2rsxVpJ1nf7d4U5LCEWrsGPimOWi~kDYu3Om7Kpt78z2~MOxBCuXLWE1mxwq2wYLnqDvcTfVBH3QehrzLtqJb6iE5BJHSUHbk7U8U9VPCBvl7~chbmjjV5T6LkP79tV5-m2sGvGjGMSXpHmyccAal2eQgLUru09mnZxUrPf8FDIRGXcF6TBNVdItW5lJT88ghg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}></img></ol>
              <ol><img src={"https://s3-alpha-sig.figma.com/img/6946/641e/6623c7af52bae1db781ea4f5d664f5eb?Expires=1658707200&Signature=T9qqUdHvEcrOB1Co7ulaSifNmS~rKtDyzxsZbnT6W-NPYfkncuAIVHlcbTN-kF4htcDmmGULyIu-MU4K9WYnvMng9phuXimnZ5gi1R1pmHxfNeKOyiG~L7Fs1jvfvO-T58RhCfQF3OyjlWt~GajZ2rsxVpJ1nf7d4U5LCEWrsGPimOWi~kDYu3Om7Kpt78z2~MOxBCuXLWE1mxwq2wYLnqDvcTfVBH3QehrzLtqJb6iE5BJHSUHbk7U8U9VPCBvl7~chbmjjV5T6LkP79tV5-m2sGvGjGMSXpHmyccAal2eQgLUru09mnZxUrPf8FDIRGXcF6TBNVdItW5lJT88ghg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}></img></ol>
              <ol><img src={"https://s3-alpha-sig.figma.com/img/6946/641e/6623c7af52bae1db781ea4f5d664f5eb?Expires=1658707200&Signature=T9qqUdHvEcrOB1Co7ulaSifNmS~rKtDyzxsZbnT6W-NPYfkncuAIVHlcbTN-kF4htcDmmGULyIu-MU4K9WYnvMng9phuXimnZ5gi1R1pmHxfNeKOyiG~L7Fs1jvfvO-T58RhCfQF3OyjlWt~GajZ2rsxVpJ1nf7d4U5LCEWrsGPimOWi~kDYu3Om7Kpt78z2~MOxBCuXLWE1mxwq2wYLnqDvcTfVBH3QehrzLtqJb6iE5BJHSUHbk7U8U9VPCBvl7~chbmjjV5T6LkP79tV5-m2sGvGjGMSXpHmyccAal2eQgLUru09mnZxUrPf8FDIRGXcF6TBNVdItW5lJT88ghg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}></img></ol>
              <ol><img src={"https://s3-alpha-sig.figma.com/img/6946/641e/6623c7af52bae1db781ea4f5d664f5eb?Expires=1658707200&Signature=T9qqUdHvEcrOB1Co7ulaSifNmS~rKtDyzxsZbnT6W-NPYfkncuAIVHlcbTN-kF4htcDmmGULyIu-MU4K9WYnvMng9phuXimnZ5gi1R1pmHxfNeKOyiG~L7Fs1jvfvO-T58RhCfQF3OyjlWt~GajZ2rsxVpJ1nf7d4U5LCEWrsGPimOWi~kDYu3Om7Kpt78z2~MOxBCuXLWE1mxwq2wYLnqDvcTfVBH3QehrzLtqJb6iE5BJHSUHbk7U8U9VPCBvl7~chbmjjV5T6LkP79tV5-m2sGvGjGMSXpHmyccAal2eQgLUru09mnZxUrPf8FDIRGXcF6TBNVdItW5lJT88ghg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}></img></ol>
              <ol><img src={"https://s3-alpha-sig.figma.com/img/6946/641e/6623c7af52bae1db781ea4f5d664f5eb?Expires=1658707200&Signature=T9qqUdHvEcrOB1Co7ulaSifNmS~rKtDyzxsZbnT6W-NPYfkncuAIVHlcbTN-kF4htcDmmGULyIu-MU4K9WYnvMng9phuXimnZ5gi1R1pmHxfNeKOyiG~L7Fs1jvfvO-T58RhCfQF3OyjlWt~GajZ2rsxVpJ1nf7d4U5LCEWrsGPimOWi~kDYu3Om7Kpt78z2~MOxBCuXLWE1mxwq2wYLnqDvcTfVBH3QehrzLtqJb6iE5BJHSUHbk7U8U9VPCBvl7~chbmjjV5T6LkP79tV5-m2sGvGjGMSXpHmyccAal2eQgLUru09mnZxUrPf8FDIRGXcF6TBNVdItW5lJT88ghg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}></img></ol>
              <ol><img src={"https://s3-alpha-sig.figma.com/img/6946/641e/6623c7af52bae1db781ea4f5d664f5eb?Expires=1658707200&Signature=T9qqUdHvEcrOB1Co7ulaSifNmS~rKtDyzxsZbnT6W-NPYfkncuAIVHlcbTN-kF4htcDmmGULyIu-MU4K9WYnvMng9phuXimnZ5gi1R1pmHxfNeKOyiG~L7Fs1jvfvO-T58RhCfQF3OyjlWt~GajZ2rsxVpJ1nf7d4U5LCEWrsGPimOWi~kDYu3Om7Kpt78z2~MOxBCuXLWE1mxwq2wYLnqDvcTfVBH3QehrzLtqJb6iE5BJHSUHbk7U8U9VPCBvl7~chbmjjV5T6LkP79tV5-m2sGvGjGMSXpHmyccAal2eQgLUru09mnZxUrPf8FDIRGXcF6TBNVdItW5lJT88ghg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}></img></ol>
            </Ranking>
            
            <RetryButton>
              <p>Voltar</p>
            </RetryButton>
          </BackgroundImg>
          
  );
};

export default ScoreRankingPage;

