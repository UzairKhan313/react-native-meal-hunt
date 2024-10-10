import { useState, useRef } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Button, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";

import { useAuthContext } from "../services/auth/Auth-Context";
import { Text } from "../components//typography/Text";

const CameraContainer = styled(View)`
  flex: 1;
  justify-content: center;
`;

const ButtonContainer = styled(View)`
  position: absolute;
  bottom: 0px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  gap: 20px;
  background-color: black;
  padding: ${(props) => props.theme.space[4]};
  opacity: 0.7;
`;

const StyledCamera = styled(CameraView)`
  flex: 1;
`;

export default function CameraScreen({ navigation }) {
  const [facing, setFacing] = useState("front");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const { user } = useAuthContext();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <CameraContainer>
        <Text varant="error">We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </CameraContainer>
    );
  }

  // Take a picture and store it in AsyncStorage
  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri); // Store photo URI in AsyncStorage
      navigation.navigate("Setting");
    }
  };

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <CameraContainer>
      <StyledCamera facing={facing} ref={cameraRef}>
        {/* Button Container for Camera and Flip icons */}
        <ButtonContainer>
          {/* Take Picture Button */}
          <TouchableOpacity onPress={takePicture}>
            <Ionicons name="camera-outline" size={50} color="white" />
          </TouchableOpacity>
          {/* Flip Camera Button */}
          <TouchableOpacity onPress={toggleCameraFacing}>
            <Ionicons name="camera-reverse-outline" size={50} color="white" />
          </TouchableOpacity>
        </ButtonContainer>
      </StyledCamera>
    </CameraContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   message: {
//     textAlign: "center",
//     paddingBottom: 10,
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: "row",
//     backgroundColor: "transparent",
//     margin: 64,
//   },
//   button: {
//     flex: 1,
//     alignSelf: "flex-end",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "white",
//   },
// });
