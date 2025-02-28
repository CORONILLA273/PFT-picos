import { useUser } from "@clerk/clerk-expo";
import { Link, Redirect, useRootNavigationState, useRouter } from "expo-router";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";

export default function Index() {

  const { user } =useUser()

  const rootNavigationState = useRootNavigationState()

  useEffect(() => {
    checkNavLoaded()
  }, [])

  const checkNavLoaded= () => {
    if (!rootNavigationState.key)
      return null;
  }
  return  user && (
    <View
      style={{
        flex: 1,
        
      }}
    >
      <Text>{user?.fullName}</Text>
      {
        user ?
        <Redirect href={'/(tabs)/home'} />
        : <Redirect href={'/login/index'} />
      } 
      
    </View>
  );
}
