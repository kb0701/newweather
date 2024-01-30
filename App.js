import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router'; 
import React from 'react';

export default function App() {
  const router = useRouter(); 

  const handleLogin = () => {  
   router.push('doo');              
};

  
  return (
    <View style={styles.container}>
      <Text> 
        Login scREEN
      </Text>

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                    <Text style={styles.buttonText}>pRESS HERE PLS</Text>
                </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
