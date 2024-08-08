import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const ItemScreen = ({ route }) => {

    const navigation = useNavigation();

    const data = route?.params?.param;
    useLayoutEffect(() => {
        navigation.setOptions({ 
            headerShown: false,
        });
      }, []);
     
      
      return (
    <SafeAreaView className="flex-1 bg-white relative">
    <ScrollView className="flex-1 pz-4 py-6">
        <View className="relative bg-white shadow-lg">
            <Image
                source={
                    {uri : 
                        data?.thumbnail
                        ? data.thumbnail 
                        : "https://leviamice.com/wp-content/uploads/2024/04/Logo-1-e1714642940201.png"
                     }
                }
                className="w-ful h-72 object-cover rounded-2xl"
            />
            <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
                <TouchableOpacity 
                onPress={() => navigation.navigate("Discover")}
                className="w-10 h-10 rounded-md items-center justify-center bg-white">
                <AntDesign name="left" size={20} color="black" />
                </TouchableOpacity>

                <TouchableOpacity className="w-10 h10 rounded-md items-center justify-center bg-blue-500">
                <AntDesign name="heart" size={20} color="black" />
                </TouchableOpacity>
            </View>
                  
        </View>
            
        <View className="mt-6">
            <Text className="text-sky-800 text-[24px] font-bold px-4">
                {data?.name}
            </Text>        
        <View className="flex-row items-center space-x-2 mt-2 px-4">
        <Ionicons name="location" size={20} color="#075985" />
            <Text className="text-[#075985] text-[20px] font-bold">            
                {data?.venue?.city}, {data?.venue?.country}
            </Text>
        </View>
        </View>
        <View className="mt-4 flex-row items-cener justify-between">
        {data?.start_time && (
            <View className=" flex-row items-center space-x-2 px-3">
            <View className="w-8 h-8 rounded-2xl bg-sky-500 items-center justify-center shadow-md">
            <Ionicons name="time" size={20} color="black" />
            </View>
            <View>
                <Text className="text-sky-800 font-bold">{data?.start_time}</Text>
                <Text className="text-sky-900 font-bold">Start Time</Text>
            </View>
            </View>
        )}

        {data?.venue?.timezone && (
            <View className=" flex-row items-center space-x-2 px-8">
            <View className="w-8 h-8 rounded-2xl bg-sky-500 items-center justify-center shadow-md">
            <Ionicons name="globe" size={20} color="black" />
            </View>
            <View>
                <Text className="text-sky-800 font-bold">{data?.venue?.timezone}</Text>
                <Text className="text-sky-900 font-bold">Timezone</Text>
            </View>
            </View>
        )}   

        </View>
        {data?.description && (
            <Text className="text-sky-800 font-semibold items-center justify-center px-3 mt-2 space-x-1">{data?.description}</Text>
            )}   

        <View className=" space-y-4 mt-4 bg-sky-400 rounded-3xl px-6 py-2">
            {data?.venue?.phone_number && (
                <View className="items-center flex-row space-x-6">
                <Ionicons name="call" size={20} color="black" />
                <Text className="text-lg">{data?.venue?.phone_number}</Text>
                </View>
            )}
 
        <View className=" space-y-4 mt-4 bg-sky-400 rounded-3xl px-0 py-2">
            {data?.venue?.website && (
                <View className="items-center flex-row space-x-6">
                <MaterialCommunityIcons name="web" size={20} color="black" />
                <Text className="text-lg">{data?.venue?.website}</Text>
                </View>
            )}

              
        <View className=" space-y-4 mt-4 bg-sky-400 rounded-3xl px-0 py-2">
            {data?.venue?.full_address && (
                <View className="items-center flex-row space-x-6">
                <FontAwesome5 name="map-pin" size={20} color="black" />
                <Text className="text-lg">{data?.venue?.full_address}</Text>
                </View>
            )}
            <View className="mt-4 px-4 py-4 rounded-lg bg-blue-500 items-center justify-center mn-12">
                <Text className="text-white text-3xl font-semibold uppercase tracking-wider">Book Now</Text>
            </View>
        </View>
        </View>
        </View>
    
        </ScrollView>
    </SafeAreaView>
  )
}

export default ItemScreen