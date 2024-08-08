// screens/Discover.js
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Hotels, Events, Travel } from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MenuContainer from '../components/MenuContainer';
import Entypo from '@expo/vector-icons/Entypo';
import ItemCardContainer from '../components/ItemCardContainer';
import { getEventsData } from '../api';

const Discover = () => {
    const navigation = useNavigation();
    const [type, setType] = useState("hotels");
    const [isLoading, setIsLoading] = useState(false);
    const [mainData, setMainData] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({ 
            headerShown: false, 
        });
    }, [navigation]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const data = await getEventsData();
            setMainData(data || []);
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
        <SafeAreaView className="p-7 relative flex-1">
            <View className="flex-row items-center justify-between px-2">
                <View>
                    <Text className="text-[40px] text-sky-800 font-bold">Explore</Text>
                    <Text className="text-sky-950 text-[28px]">the lifestyle today</Text>
                </View>
                <View className="w-12 h-12 bg-slate-600 rounded-md items-center justify-center">
                    <Image 
                        source={Avatar}
                        className="w-full h-full rounded-md object-cover"
                    />
                </View>
            </View>
            <View className="flex-row items-center bg-white rounded-xl py-1 px-4 shadow-lg mt-4">
                <GooglePlacesAutocomplete
                    GooglePlacesDetailsQuery={{ fields: "geometry" }}
                    placeholder='Search'
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        console.log(details?.geometry?.viewport);
                    }}
                    query={{
                        key: "AIzaSyDWpuVw2apNXgX3gmrzsHrZgr1AG4sCxQ",
                        language: 'en',
                    }}
                />
            </View>
            {isLoading ? (
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size="large" color="#0284c7" />
                </View>
            ) : (
                <ScrollView>
                    <View className="flex-row items-center justify-center px-3 mt-8">
                        <MenuContainer
                            key="Hotel"
                            title="Hotels"
                            imageSrc={Hotels}
                            type={type}
                            setType={setType}
                        />
                        <MenuContainer
                            key="Events"
                            title="Events"
                            imageSrc={Events}
                            type={type}
                            setType={setType}
                        />
                        <MenuContainer
                            key="Travel"
                            title="Travel"
                            imageSrc={Travel}
                            type={type}
                            setType={setType}
                        />
                    </View>

                    <View>
                        <View className="flex-row items-center justify-between px-1 mt-8">
                            <Text className="text-sky-800 text-[20px] font-bold">
                                Best Events
                            </Text>
                            <TouchableOpacity className="flex-row items-center justify-center space-x-1">
                                <Text>Explore</Text>
                                <Entypo name="arrow-with-circle-right" size={24} color="black" />
                            </TouchableOpacity>
                        </View>

                        <View className="px-1 mt-4 flex-row items-center justify-evenly flex-wrap">
                            {mainData?.length > 0 ? (
                                mainData.map((data, i) => (
                                    <ItemCardContainer
                                        key={i}
                                        imageSrc={
                                            data?.thumbnail
                                                ? data.thumbnail 
                                                : "https://leviamice.com/wp-content/uploads/2024/04/Logo-1-e1714642940201.png"
                                        }
                                        title={data?.name}
                                        location={data?.venue?.city}
                                        data={data}
                                    />
                                ))
                            ) : (
                                <View className="w-full h-[300px] items-center space-y-8 justify-center">
                                    <Image 
                                        source={{ uri: 'https://leviamice.com/wp-content/uploads/2024/04/Logo-1-e1714642940201.png' }} 
                                        className="w-32 h-32 object-cover" 
                                    />
                                    <Text className="text-sky-800 text-[24px] font-semibold">No Results Found</Text>
                                </View>
                            )}
                        </View>
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    );
}

export default Discover;
