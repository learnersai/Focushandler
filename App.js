import React from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.box}><Button
        title='Left Top'
    onPress={()=>alert('CLICKED Left Top')}
    />
         <View style={styles.inner}>
          </View>
      </View>
      <View style={styles.box}><Button
        title='Righ Top'
    onPress={()=>alert('CLICKED Righ Top')}
    />
         <View style={styles.inner}>
          </View>
      </View>
      <View style={styles.box}><Button
        title='Left Bottom'
    onPress={()=>alert('CLICKED Left Bottom ')}
    />
         <View style={styles.inner}>
          </View>
      </View>
      <View style={styles.box}><Button
        title='Right Bottom'
    onPress={()=>alert('CLICKED Right Bottom')}
    />
         <View style={styles.inner}>
          </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container :{
    width:'90%',
    height:'55%',
    padding:5,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  box:{
    width:'50%',
    heigh:'50%',
    padding:5,
  },
  inner:{
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'lightblue',
  justifyContent:'space-evenly',
  flex:1,
 
  }
});
