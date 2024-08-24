import { Alert, Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import { ViroARScene, ViroTrackingReason, ViroTrackingStateConstants, ViroVideo } from '@reactvision/react-viro'
import { AppContext } from '../context/ContextHoc';

const Initial = () => {

  const [text, setText] = useState("Initializing AR...");


   




  
  function onInitialized(state: any, reason: ViroTrackingReason) {
    console.log("onInitialized", state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText("Hello World!");
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
    }

  }

  return (
   
 


    
     <View style={{flex:1}}>
        <ViroARScene  style={{flex:1}}  onTrackingUpdated={onInitialized}>
          <ViroVideo
      source={require('../vdo.webm')}
      height={2}
      width={2}
      loop={true}
      position={[0,2,-5]}
    />
        </ViroARScene>
        
     </View>
   


  )
}

export default Initial

const styles = StyleSheet.create({})