import React, {useState, useEffect} from 'react';
import Video from 'react-native-video';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';

export default function Show({route, navigation}) {
  const {video} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>itemId: {JSON.stringify(video.id)}</Text>
      <Video
        controls
        paused
        muted
        source={{uri: video.url}} // Can be a URL or a local file.
        style={styles.backgroundVideo}
      />
    </View>
  );
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
