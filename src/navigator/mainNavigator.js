import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps201953Navigator from '../features/Maps201953/navigator';
import Additem201952Navigator from '../features/Additem201952/navigator';
import Maps201948Navigator from '../features/Maps201948/navigator';
import UserProfile201944Navigator from '../features/UserProfile201944/navigator';
import BlankScreen49201532Navigator from '../features/BlankScreen49201532/navigator';
import Maps201514Navigator from '../features/Maps201514/navigator';
import Additem201513Navigator from '../features/Additem201513/navigator';
import Maps201509Navigator from '../features/Maps201509/navigator';
import UserProfile201505Navigator from '../features/UserProfile201505/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps201953: { screen: Maps201953Navigator },
Additem201952: { screen: Additem201952Navigator },
Maps201948: { screen: Maps201948Navigator },
UserProfile201944: { screen: UserProfile201944Navigator },
BlankScreen49201532: { screen: BlankScreen49201532Navigator },
Maps201514: { screen: Maps201514Navigator },
Additem201513: { screen: Additem201513Navigator },
Maps201509: { screen: Maps201509Navigator },
UserProfile201505: { screen: UserProfile201505Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
