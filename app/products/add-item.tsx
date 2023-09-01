import React, { useState } from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BarcodeMask from 'react-native-barcode-mask';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import * as Haptics from 'expo-haptics';
import sleep from '@/utils/sleep';

type BarCodeScannerScreenProps = {
  visible: boolean;
  onClose: () => void;
  scannedData?: (data: any) => void;
};
const finderWidth: number = 250;
const finderHeight: number = 250;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const viewMinX = (width - finderWidth) / 2;
const viewMinY = (height - finderHeight) / 2;
/**
 * Bar Code Scanner Screen
 */
const BarCodeScannerScreen = ({
  visible,
  onClose,
  scannedData,
}: BarCodeScannerScreenProps) => {
  const [scanned, setScanned] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState<any>(BarCodeScanner.Constants.Type.back);

  const permission = React.useCallback(async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  }, []);

  React.useEffect(() => {
    permission();
  }, []);

  const handleBarCodeScanned = React.useCallback(
    async (result: BarCodeScannerResult) => {
      setScanned(true);
      if (!scanned) {
        const { data } = result;
        console.log('scanningResult', data);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        scannedData && scannedData(data);
        await sleep(500);
        onClose();
        setScanned(false);
      }
    },
    [onClose, scanned]
  );

  const toggleFlash = React.useCallback(async () => {
    // try {
    //   await NativeModules.Camera.toggleTorch(isTorchOn);
    //   setIsTorchOn(!isTorchOn);
    // } catch (e) {
    //   toast.show('We seem to have an issue accessing your torch');
    // }
    setType(
      type === BarCodeScanner.Constants.Type.back
        ? BarCodeScanner.Constants.Type.front
        : BarCodeScanner.Constants.Type.back
    );
  }, [type]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    controls: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      bottom: 40,
      width: '100%',
      paddingHorizontal: 40,
    },
    circle: {
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: 'rgba(255,255,255,0.2)',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  console.log({ scanned });

  // if (hasPermission === null) {
  //   return <Text>Requesting camera permission...</Text>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera.</Text>;
  // }
  return (
    <Modal visible={visible} animationType="slide">
      <View
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          type={type}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={[StyleSheet.absoluteFillObject, styles.container]}
        >
          <BarcodeMask
            edgeColor={scanned ? '#008000' : 'rgba(255, 255, 255, 4)'}
            showAnimatedLine={false}
            edgeRadius={16}
            edgeBorderWidth={8}
            width={250}
            height={250}
            outerMaskOpacity={1}
            edgeHeight={30}
            edgeWidth={30}
          />

          <View style={styles.controls}>
            <TouchableOpacity
              style={styles.circle}
              // onPress={() => {
              //   setType(
              //     type === BarCodeScanner.Constants.Type.back
              //       ? BarCodeScanner.Constants.Type.front
              //       : BarCodeScanner.Constants.Type.back
              //   );
              // }}
              onPress={() => {
                toggleFlash();
              }}
              activeOpacity={0.7}
            >
              <Ionicons name="camera-reverse" size={28} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circle}
              activeOpacity={0.7}
              onPress={() => {
                onClose();
                setScanned(false);
              }}
            >
              <Ionicons name="close" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        </BarCodeScanner>
      </View>
    </Modal>
  );
};

export default BarCodeScannerScreen;
