import React from 'react';
import styles from '@/styles/add-item';
import { Text, View, Image, TouchableOpacity } from 'react-native';

type DropdownTypes = {
  name: string;
  active: boolean;
  quantity: number;
  onPress: () => void;
};

const ItemDropdownButton = ({
  name,
  active,
  quantity,
  onPress,
}: DropdownTypes) => {
  return (
    <TouchableOpacity style={styles.containers} onPress={onPress}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Text style={{ fontWeight: '600', flex: 1 }} numberOfLines={1}>
          {name}
        </Text>
        {quantity > 0 && (
          <View style={styles.badge}>
            <Text style={{ textAlign: 'center' }}>{`+${quantity} items`}</Text>
          </View>
        )}
        <Image
          source={
            active
              ? require('@/assets/icons/upload.png')
              : require('@/assets/icons/dropdown.png')
          }
          style={{ width: 16, height: 16 }}
        />
      </View>
    </TouchableOpacity>
  );
};
export default ItemDropdownButton;
