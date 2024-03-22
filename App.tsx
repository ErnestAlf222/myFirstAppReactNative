
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons';

import { HomeWorkScreen } from './src/presentation/screens/HomeWorkScreen';

export const App = () => {
  return (
    <PaperProvider settings={{ 
      icon: (props) =>  <IonIcon { ...props } />
      }}>
    <SafeAreaView style={{ flex:1 }}>
      <HomeWorkScreen />
    </SafeAreaView>
    </PaperProvider>
  )
}
