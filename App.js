import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import task1 from "./src/screens/task1";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import task2 from "./src/screens/task2";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    task1: task1,
    Components: ComponentsScreen,
    List: ListScreen,
    task2: task2
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
