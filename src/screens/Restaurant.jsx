import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../theme/theme';

const Restaurant = ({route, navigation}) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    let {item} = route?.params;
    setRestaurant(item);
  });

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
        }}>
        <View style={{paddingHorizontal: 30}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/icons/back.png')}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: COLORS.lightGray3,
            flex: 1,
            paddingVertical: 10,
            borderRadius: 20,
          }}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 20}}>{restaurant?.name}</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 30}}>
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/list.png')}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderFoodInfo() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}
        //onScroll
      >
        {restaurant?.menu.map((item, index) => (
          <View key={`menu-${index}`} style={{alignItems: 'center'}}>
            <View
              style={{
                height: Dimensions.get('window').height / 3,
                width: Dimensions.get('window').width,
              }}>
              <Image
                source={item.photo}
                resizeMode="cover"
                style={{width: '100%', height: '100%'}}
              />
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightGray}}>
      {renderHeader()}
      {renderFoodInfo()}
    </SafeAreaView>
  );
};

export default Restaurant;

const styles = StyleSheet.create({});
