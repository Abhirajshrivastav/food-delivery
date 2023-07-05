import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
// import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <SafeAreaView style={{ display: 'flex' }}>
    <View style={{ flexDirection: 'row', justifyContent: 'start' }}>
      <TouchableOpacity 
        onPress={()=> navigation.goBack()}
        style={{
          backgroundColor: '#FFD700',
          padding: 8,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          marginLeft: 4,
        }}
      >
        <ArrowLeftIcon size="20" color="black" />
      </TouchableOpacity>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Image 
        source={require('../../assets/images/signup.png')} 
        style={{ width: 165, height: 110 }}
      />
    </View>
  </SafeAreaView>
    
     <View style={{ flex: 1, backgroundColor: '#fff', paddingLeft: 8, paddingTop: 8, borderTopLeftRadius: 50, 
      borderTopRightRadius: 50 }}>

      <View style={{ display: 'flex', marginTop: 8 }}>
      <Text style={{ color: '#4B5563', marginLeft: 16 }}>Full Name</Text>
      <TextInput
        style={{ padding: 16, backgroundColor: '#F3F4F6', color: '#4B5563', borderRadius: 8, marginBottom: 8 }}
        value="john snow"
        placeholder='Enter Name'
      />
      <Text style={{ color: '#4B5563', marginLeft: 16 }}>Email Address</Text>
      <TextInput
        style={{ padding: 16, backgroundColor: '#F3F4F6', color: '#4B5563', borderRadius: 8, marginBottom: 8 }}
        value="john@gmail.com"
        placeholder='Enter Email'
      />
      <Text style={{ color: '#4B5563', marginLeft: 16 }}>Password</Text>
      <TextInput
        style={{ padding: 16, backgroundColor: '#F3F4F6', color: '#4B5563', borderRadius: 8, marginBottom: 16 }}
        secureTextEntry
        value="test12345"
        placeholder='Enter Password'
      />
      <TouchableOpacity
        style={{ paddingVertical: 12, backgroundColor: '#FFD700', borderRadius: 20 }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#4B5563' }}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
    
    <Text style={{ fontSize: 'xl', color: '#4B5563', fontWeight: 'bold', textAlign: 'center', paddingVertical: 20 }}>
    Or
  </Text>
  
  <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 12 }}>
  <TouchableOpacity style={{ padding: 2, backgroundColor: '#F3F4F6', borderRadius: '2xl' }}>
    <Image source={require('../../assets/icons/google.png')} 
        style={{ width: 40, height: 40 }} />
  </TouchableOpacity>
  <TouchableOpacity style={{ padding: 2, backgroundColor: '#F3F4F6', borderRadius: '2xl' }}>
    <Image source={require('../../assets/icons/apple.png')} 
        style={{ width: 40, height: 40 }} />
  </TouchableOpacity>
  <TouchableOpacity style={{ padding: 2, backgroundColor: '#F3F4F6', borderRadius: '2xl' }}>
    <Image source={require('../../assets/icons/facebook.png')} 
        style={{ width: 40, height: 40 }} />
  </TouchableOpacity>
</View>

<View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 28 }}>
<Text style={{ color: '#A0AEC0', fontWeight: '600' }}>Already have an account?</Text>
<TouchableOpacity onPress={()=> navigation.navigate('Home')}>
  <Text style={{ fontWeight: '600', color: '#F6E05E' }}> Login</Text>
</TouchableOpacity>
</View>
      </View>
    </View>
  )
}
