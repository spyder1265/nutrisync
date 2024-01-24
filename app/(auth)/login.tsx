import { StatusBar } from "expo-status-bar";
import React from "react";
import { BackButton, Text, TextInput, View } from "../../components/Themed";
import LoginForm from "../../components/Form/Login";
import { Image } from "expo-image";

interface ILogin {}

const Login: React.FC<ILogin> = ({}) => {
  return (
    <>
      <StatusBar style='auto' translucent />
      <View className='flex-1 items-center pt-[50px] justify-start'>
        {/* header */}
        <View className='flex basis-1/12 items-start w-full px-2 justify-center'>
          <BackButton />
        </View>
        {/* body */}
        <View className='flex flex-col h-full w-full items-center justify-around'>
          <View className='h-2/3 w-full items-center justify-start'>
            <View className='h-[150px] '>
              <Image
                source={require("../../assets/images/NutrisyncDark.png")}
                className='w-[200px] h-[200px] scale-150 mb-8'
                contentFit='contain'
              />
            </View>
            <LoginForm />
          </View>
        </View>
      </View>
    </>
  );
};
export default Login;
