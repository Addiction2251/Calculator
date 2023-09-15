import {StyleSheet, Text, View} from 'react-native';

function Screen({screenText}): JSX.Element {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{screenText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 2,
    textAlign: 'justify',
  },
  text: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Screen;
