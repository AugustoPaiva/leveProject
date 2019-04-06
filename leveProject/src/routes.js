import { createStackNavigator } from "react-navigation";

import People from "./pages/people";
import PeopleInformation from "./pages/peopleInformation";
import AddPerson from "./pages/addPerson";
export default createStackNavigator({
  People,
  PeopleInformation,
  AddPerson
});
