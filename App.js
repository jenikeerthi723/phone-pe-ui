// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import header from './components/Header';
// import Header from './components/Header';
// export default function App() {
//   return (
//     <View>
//      <Header/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})
import { View, Text } from 'react-native';
import React from 'react';
import Routes from './components/src/Navigation/Routes';


const App=()=>{
  return (
    <View style={{flex:1}}> 
      <Routes/>
    </View>
  )
}

export default App;