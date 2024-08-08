import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { YinImage } from '../assets';
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({ 
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="p-6 relative flex-1">
            {/* First section */}
            <View className="flex-row px-1 mt-8 space-x-1 items-center">
                <View className="bg-sky-500 w-24 h-9 rounded-full items-center justify-center">            
                    <Text className="text-xl font-semibold">Exclusive</Text>
                </View>
                <Text className="text-xl font-semibold">Lifestyle</Text>
            </View>

            {/* Second section */}
            <View className="px-1 mt-6 space-y-3">
                <Text className="text-[30px]"> 
                    Enjoy Bleisure Travel with
                </Text>
                <Text className="text-sky-600 text-[32px] font-bold">
                    Unforgettable Memories
                </Text>
                <Text className="text-xl">
                    Our tailored solutions redefine business and leisure travel.
                </Text>
            </View>

            {/* Circle Section */}
            <View className="w-[300px] h-[300px] bg-sky-400 rounded-full absolute bottom-36 -right-36"></View>
            <View className="w-[300px] h-[300px] bg-emerald-500 rounded-full absolute bottom-9 -left-36"></View>

            {/* Image Container */}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image 
                    animation="fadeIn"
                    easing="ease-in-out"
                    source={YinImage} 
                    className="w-full h-80 object-center mt-44" 
                />
                <View 
                    className="absolute 
                    bottom-20 
                    w-24 h-24 
                    border-l-2 
                    border-r-2 
                    border-t-4
                    border-sky-500 
                    rounded-full 
                    items-center 
                    justify-center
                    mb-44"
                >
                    <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
                        <Animatable.View 
                            animation="pulse" 
                            easing="ease-in-out" 
                            iterationCount="infinite" 
                            className="w-20 h-20 items-center justify-center bg-sky-500 rounded-full"
                        >
                            <Text className="font-semibold">
                                Travel Now
                            </Text>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
