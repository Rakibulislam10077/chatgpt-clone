import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import AnimatedIntro from '~/components/AnimatedIntro';
import BottomLoginSheet from '~/components/BottomLoginSheet';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <View style={styles.container}>
        <AnimatedIntro />
        <BottomLoginSheet />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
