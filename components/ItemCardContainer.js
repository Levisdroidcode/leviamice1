import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ItemCardContainer = ({ imageSrc, title = '', location = '', data }) => {
  const navigation = useNavigation();

  const truncateText = (text, length) => {
    return text.length > length ? `${text.slice(0, length)}...` : text;
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Item", { param: data })}
      className="rounded-md border border-gray-300 space-y-2 px-1 py-2 shadow-md bg-white w-[139px] my-2"
    >
      <Image 
        source={{ uri: imageSrc }}
        className="w-full h-36 rounded-md object-cover"
      />
      <Text className="text-sky-500 text-[18px] font-bold">
        {truncateText(title, 14)}
      </Text>
      <View className="flex-row items-center">
        <Ionicons name="location" size={16} color="#0284c7" />
        <Text className="text-sky-500 text-[18px] font-bold ml-1">
          {truncateText(location, 14)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
