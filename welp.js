import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router'; 
import React from 'react';

export default function welp() {
  

  return (
    <View style={styles.container}>
      <Text> 
        Login scREEN
      </Text>
      <StatusBar style="auto" />
    </View>
  );         
   
};

