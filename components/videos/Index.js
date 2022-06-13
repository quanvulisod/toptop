import React, {useState, useEffect} from 'react';
import AutoHeightImage from 'react-native-auto-height-image';
import {useNavigation} from '@react-navigation/native';
import IPService from '../../services/IPService';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const Item = ({item}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          console.log('====You tapped the item', item.id);
          navigation.navigate('Show', {video: item});
        }}>
        <AutoHeightImage
          width={300}
          source={{
            uri: item.urlThumb,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
};

export default function Index() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    IPService.saveUserInfo();
    const fetchData = async () => {
      const response = await fetch(`https://niklab.herokuapp.com/videos/all`);
      const result = await response.json();
      setVideos(result);
    };
    fetchData();
    return () => {};
  }, []);
  const renderItem = ({item}) => <Item item={item} />;
  return (
    <View>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: '100%',
    height: 360,
  },
});
