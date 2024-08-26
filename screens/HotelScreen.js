import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getHotelsData } from '../api/Hotelapi';

const HotelScreen = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [hotelsData, setHotelsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const data = await getHotelsData();
            setHotelsData(data || []);
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
        <SafeAreaView className="p-7 relative flex-1">
            <View className="flex-row items-center justify-between px-2">
                <View>
                    <Text className="text-[40px] text-sky-800 font-bold">Hotels</Text>
                    <Text className="text-sky-950 text-[28px]">Find your stay</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text className="text-sky-800">Back</Text>
                </TouchableOpacity>
            </View>

            {isLoading ? (
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size="large" color="#0284c7" />
                </View>
            ) : (
                <ScrollView>
                    <View className="px-1 mt-4 flex-row items-center justify-evenly flex-wrap">
                        {hotelsData?.length > 0 ? (
                            hotelsData.map((data, i) => (
                                <View key={i} className="w-full mb-6">
                                    <Image
                                        source={{ uri: data?.cardPhotos?.sizes?.urlTemplate }}
                                        className="w-full h-48 rounded-md object-cover"
                                    />
                                    <Text className="text-sky-800 text-[20px] font-bold mt-2">{data?.title}</Text>
                                    <Text className="text-sky-600 text-[16px]">{data?.secondaryInfo}</Text>
                                </View>
                            ))
                        ) : (
                            <View className="w-full h-[300px] items-center space-y-8 justify-center">
                                <Text className="text-sky-800 text-[24px] font-semibold">No Results Found</Text>
                            </View>
                        )}
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    );
};

export default HotelScreen;
