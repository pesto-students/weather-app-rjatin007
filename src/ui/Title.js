import H1 from "./ui-library/H1";
import { webSizes } from "../utility/Fonts";
import Colors from "../utility/Colors";
const Title = () => (
  <H1 size={webSizes.title} color={Colors.darkTeal}>
    Tornado
  </H1>
);
export default Title;
