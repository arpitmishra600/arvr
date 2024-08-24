// import {
//   ViroARScene,
//   ViroARSceneNavigator,
//   ViroCamera,
//   ViroText,

//   ViroTrackingReason,
//   ViroTrackingStateConstants,
//   ViroVideo,
// } from "@reactvision/react-viro";

// import React, { useCallback, useEffect, useRef, useState } from "react";
// import { Alert, Button, StyleSheet, View,Dimensions } from "react-native";
// import Video from "react-native-video";
// import ViewShot from "react-native-view-shot";
// const { width, height } = Dimensions.get('window');
// const HelloWorldSceneAR = () => {
//   const [text, setText] = useState("Initializing AR...");
//   const [videoUri, setVideoUri] = useState(null);
//   const viewShotRef = useRef(null);

//   const captureScreen = async () => {
//     try {
//       const uri = await viewShotRef.current?.capture();
//       setVideoUri(uri);
//     } catch (error) {
//       console.error('Failed to capture screen: ', error);
//     }
//   };

//  captureScreen()


  



  
//   function onInitialized(state: any, reason: ViroTrackingReason) {
//     console.log("onInitialized", state, reason);
//     if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
//       setText("Hello World!");
//     } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
//       // Handle loss of tracking
//     }


//   }
 

//   return (
    
//       <ViroARScene  onTrackingUpdated={onInitialized}>
//         <ViroVideo
//     source={require('./vdo.webm')}
//     height={2}
//     width={2}
//     loop={true}
//     position={[0,2,-5]}
//   />
//       </ViroARScene>
   
//   );
// };

// export default () => {
  
  
 
  
//   return (
    
//       <View style={{flex:1}}>
//         <ViewShot style={{flex:1}}>
//           <ViroARSceneNavigator
//             autofocus={true}
//             initialScene={{
//               scene: HelloWorldSceneAR,
//             }}
//             style={styles.f1}
//           />
//         </ViewShot>
        // <View style={{flex:1}}></View>
        // {/* {props.videoUri && (
        //   <Video
        //     source={{ uri: props.videoUri }}
        //     style={{height:"100%",width:"100%"}}
        //     resizeMode="contain"
        //     repeat
        //     controls
        //   />
        // )} */}
//       </View>
    
    
//   );
// };

// var styles = StyleSheet.create({
//   f1: { flex: 0.5 },
//   helloWorldTextStyle: {
//     fontFamily: "Arial",
//     fontSize: 30,
//     color: "#ffffff",
//     textAlignVertical: "center",
//     textAlign: "center",
//   },
// });
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { AppProvider, AppContext } from './context/ContextHoc';
import { ViroARSceneNavigator } from '@reactvision/react-viro';
import Initial from './components/Initial';

const App: React.FC = () => {

  return (
    <View style={styles.container}>
       
         <View style={{flex:1}}>
            <ViroARSceneNavigator
              autofocus={true}
              initialScene={{
                scene:Initial,
              }}
              style={{flex:1}}
            />
         </View>
         
         <View style={{flex:1}}>
            <ViroARSceneNavigator
              autofocus={true}
              initialScene={{
                scene:Initial,
              }}
              style={{flex:1}}
            />
         </View>
         
          
       
    </View>
  );
};

// Define the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#6200ea',
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    color: '#333',
  },
});

const WrappedApp: React.FC = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

export default WrappedApp;

