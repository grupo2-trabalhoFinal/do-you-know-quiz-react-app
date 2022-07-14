import { ExitButton } from "../../components/ExitButton";
import QuestionBackground from "../../components/QuestionBackground/style";
import QuestionContainer from "../../components/QuestionContainer";
import LOGO from "../../Assets/LOGO.svg";
import { motion } from "framer-motion";

const QuestionPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ opacity: 0 }}
    >
      <QuestionBackground>
        <img src={`${LOGO}`} alt="quiz logo" />
        <QuestionContainer />
        <ExitButton />
      </QuestionBackground>
    </motion.div>
  );
};

export default QuestionPage;
