import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const MenuContainer = ({ title, imageSrc, type, setType, onPress }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
    if (onPress) {
      onPress(); // Call the onPress function passed from Discover.js
    }
  };
  
  return (
    <TouchableOpacity 
      className="items-center justify-center space-y-2" 
      onPress={handlePress}
    >
      <View 
        className={`w-24 h-24 shadow-sm rounded-full items-center justify-between ${type === title.toLowerCase() ? "bg-white" : ""}`}
      > 
        <Image
          source={imageSrc} 
          className="w-full h-full object-contain"
        />
      </View>
      <Text className="text-sky-500 text-xl font-semibold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default MenuContainer;
