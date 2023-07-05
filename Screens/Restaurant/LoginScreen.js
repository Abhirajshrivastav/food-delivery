import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <SafeAreaView style={{ display: 'flex' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'start' }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: '#FFD700',
            padding: 8,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            marginLeft: 16,
          }}
        >
          <ArrowLeftIcon size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Image
          source={require('../../assets/images/login.png')}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </SafeAreaView>
      <View 
      style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }} className="flex-1 bg-white px-8 pt-8">
      <View style={{ marginBottom: 8 }}>
        <Text style={{ color: '#4B5563', marginLeft: 16 }}>Email Address</Text>
        <TextInput
          style={{ padding: 16, backgroundColor: '#F3F4F6', color: '#4B5563', borderRadius: 20, marginBottom: 12 }}
          placeholder="email"
          value="john@gmail.com"
        />
      </View>
      <View>
        <Text style={{ color: '#4B5563', marginLeft: 16 }}>Password</Text>
        <TextInput
          style={{ padding: 16, backgroundColor: '#F3F4F6', color: '#4B5563', borderRadius: 20 }}
          secureTextEntry
          placeholder="password"
          value="test12345"
        />
        <TouchableOpacity style={{ display: 'flex', alignItems: 'flex-end' }}>
        <Text style={{ color: '#4B5563', marginBottom: 5 }}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ paddingVertical: 12, backgroundColor: '#FFD700', borderRadius: '20px' }}>
        <Text style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center', color: '#4B5563' }}>Login</Text>
      </TouchableOpacity>
      
          </View>
          <Text style={{ fontSize: 'xl', color: '#4B5563', fontWeight: 'bold', textAlign: 'center', paddingTop: 20 }}>
  Or
</Text>
<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 24 }}>
  <TouchableOpacity style={{ padding: 2, backgroundColor: '#F3F4F6', borderRadius: '50%' }}>
    <Image
      source={require('../../assets/icons/google.png')}
      style={{ width: 40, height: 40 }}
    />
  </TouchableOpacity>
  <TouchableOpacity style={{ padding: 2, backgroundColor: '#F3F4F6', borderRadius: '50%' }}>
    <Image
      source={require('../../assets/icons/apple.png')}
      style={{ width: 40, height: 40 }}
    />
  </TouchableOpacity>
  <TouchableOpacity style={{ padding: 2, backgroundColor: '#F3F4F6', borderRadius: '50%' }}>
    <Image
      source={require('../../assets/icons/facebook.png')}
      style={{ width: 40, height: 40 }}
    />
  </TouchableOpacity>
</View>

<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 28 }}>
<Text style={{ color: '#718096', fontWeight: 'bold' }}>Don't have an account?</Text>
<TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
  <Text style={{ fontWeight: 'bold', color: '#FCD34D' }}> Sign Up</Text>
</TouchableOpacity>
</View>

          
      </View>
    </View>
    
  )
}
