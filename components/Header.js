import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Header() {
  return (
    <View style={styles.container}>

      <View style={styles.navbar}>
        <TouchableOpacity>
          <Icon name="account-circle" size={65} color="white" />
        </TouchableOpacity>


        <View style={styles.leftNav}>
          <TouchableOpacity>
            <Icon style={styles.navItem} name="qr-code-scanner" size={35} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.navItem} name="notifications-none" size={35} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.navItem} name="help-outline" size={35} color="white" />
          </TouchableOpacity>
        </View>
      </View>
 





    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    height: 75,
    backgroundColor: 'purple',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  leftNav: {
    marginLeft: 150,
    marginTop: 10,
    flexDirection:"row",
    // justifyContent: 'space-between'
  },
  navItem:{
    // justifyContent: 'space-evenly'
    margin:5
  },
  body:{
    flex:1
  },
  tabBar:{
    backgroundColor:"purple",
    height:60,
    borderTopWidth:0.5,
    borderColor:"#E5E5E5",
    flexDirection:"row",
    justifyContent:"space-around"
    
  },
})

