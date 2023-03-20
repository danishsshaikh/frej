import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import store from "./components/store/store";
import ListScreen from "./components/ListScreen";
import Tab2Screen from "./components/Tab2Screen";
import Tab3Screen from "./components/Tab3Screen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="FreJ" component={ListScreen} />
          <Tab.Screen name="Tab 2" component={Tab2Screen} />
          <Tab.Screen name="Tab 3" component={Tab3Screen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
