import { StyleSheet, View } from 'react-native';

import AnimatedIntro from '~/components/AnimatedIntro';
import BottomLoginSheet from '~/components/BottomLoginSheet';

export default function Home() {
  return (
    <>
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
