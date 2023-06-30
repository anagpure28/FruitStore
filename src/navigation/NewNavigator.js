import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';
import FourthScreen from '../screens/FourthScreen';
import FifthScreen from '../screens/FifthScreen';
import SixthScreen from '../screens/SixthScreen';
import SeventhScreen from '../screens/SeventhScreen';
import RegisterScreen from '../screens/RegisterScreen';

const NewNavigator = createStackNavigator({
    First: {
        screen: FirstScreen ,
        navigationOptions: {
          header:() => false,
        }
     },
     Second: {
        screen: SecondScreen ,
        navigationOptions: {
          header:() => false,
        }
     },
    Third: {
        screen: ThirdScreen ,
        navigationOptions: {
          header:() => false,
        }
     },
    Fourth: {
        screen: FourthScreen ,
        navigationOptions: {
          header:() => false,
        }
     },
    Fifth: {
        screen: FifthScreen ,
        navigationOptions: {
          header:() => false,
        }
     },
    Sixth: {
        screen: SixthScreen ,
        navigationOptions: {
          header:() => false,
        }
     },
     Seventh: {
      screen: SeventhScreen ,
      navigationOptions: {
        header:() => false,
      }
   },
   Register: {
    screen: RegisterScreen ,
    navigationOptions: {
      header:() => false,
    }
 },

});

export default createAppContainer(NewNavigator);
