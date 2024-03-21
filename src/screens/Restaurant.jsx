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
            <View
              style={{
                width: Dimensions.get('window').width,
                marginTop: 15,
                paddingHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'center',
                gap: 20,
              }}>
              <Text style={{fontSize: 26, fontWeight: 'bold'}}>
                {item.name} - {item.price.toFixed(2)}$
              </Text>
              <Text tyle={{fontSize: 24}}>{item.description}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
              }}>
              <Image
                source={require('../assets/icons/fire.png')}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text style={{color: COLORS.darkgray, fontSize: 18}}>
                {item.calories.toFixed(2)} cal
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderOrder() {
    return (
      <View style={{backgroundColor: COLORS.lightGray3, padding: 30}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Items in Cart</Text>
          <Text style={{fontSize: 20, fontWeight: '600'}}>$45</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 20,
          }}>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Image
              source={require('../assets/icons/location.png')}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
            />
            <Text style={{fontSize: 20, fontWeight: '600'}}>Location</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Image
              source={require('../assets/icons/mastercard.png')}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
              }}
            />
            <Text style={{fontSize: 20, fontWeight: '600'}}>888</Text>
          </View>
        </View>
        <View
          style={{
          
            alignItems: 'center',
            justifyContent: 'center',
            
            
          }}>
          <TouchableOpacity style={{
            backgroundColor:COLORS.primary,
            padding:20,
            alignItems:'center',
            width:'100%',
            borderRadius:50

          }}>
            <Text style={{color:COLORS.white, fontSize:20, letterSpacing:4, fontWeight:'700'}}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightGray}}>
      {renderHeader()}
      {renderFoodInfo()}
      {renderOrder()}
    </SafeAreaView>
  );
};

export default Restaurant;

const styles = StyleSheet.create({});
