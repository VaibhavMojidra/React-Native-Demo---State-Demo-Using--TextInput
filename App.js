import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import TextScreen from './src/screens/TextScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TextScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS==="android"? StatusBar.currentHeight:0,
  },
});
