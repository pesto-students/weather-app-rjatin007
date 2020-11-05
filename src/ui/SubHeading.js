import H1 from "./ui-library/H1";
import { webSizes } from "../utility/Fonts";
import Colors from "../utility/Colors";
const SubHeading = () => (
  <H1 size={webSizes.label} color={Colors.darkTeal}>
    Weather Tracking App
  </H1>
);
export default SubHeading;
