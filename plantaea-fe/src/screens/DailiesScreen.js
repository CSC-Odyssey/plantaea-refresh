import React from "react";
import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";

import { activities } from '../data/dailyActivities'

import ListActiviy from "../components/dailies-screen/DailiesScreen-Activities";

export default function DailiesScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView className="mt-10">
        <View className="flex-1 items-center">
          <Image
            source={require('../assets/images/gamepad.png')}
            resizeMode="contain"
            className="h-20 w-20"
          />
          <Text className="font-bold text-2xl text-green-700">DAILIES</Text>
        </View>
        <View className="p-2 border-t-2 border-t-slate-200 mt-5" />
        {activities.map(e => (
          <ListActiviy key={e.id} title={e.title} total={e.total} />
        ))
        }
      </ScrollView>
    </SafeAreaView>
  )
}