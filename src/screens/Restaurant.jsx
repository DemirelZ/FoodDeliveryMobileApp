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
import {COLORS, SIZES} from '../theme/theme';

const Restaurant = ({route, navigation}) => {
  const [restaurant, setRestaurant] = useState(null);
  const [orderItems, setOrderItems] = React.useState([]);

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

  const handleOrder = (x, menuId, price) => {
    let orderList = orderItems.slice();
    let item = orderList.filter(a => a.menuId == menuId);

    if (x == '+') {
      if (item.length > 0) {
        let newQty = item[0].qty + 1;
        item[0].qty = newQty;
        item[0].total = item[0].qty * price;
      } else {
        let newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price,
        };

        orderList.push(newItem);
      }
      setOrderItems(orderList)
    } else {
      if (item.length) {
        if (item[0].qty > 0) {
          let newQty = item[0].qty - 1;
          item[0].qty = newQty;
          item[0].total = newQty * price;
        }
      }
      setOrderItems(orderList)
    }
  };

  const getOrderQty = menuId => {
    let orderItem = orderItems.filter(a => a.menuId == menuId);

    if (orderItem.length > 0) {
      return orderItem[0].qty;
    }

    return 0;
  };

  function getBasketItemCount() {
    let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

    return itemCount
}

function sumOrder() {
    let total = orderItems.reduce((a, b) => a + (b.total || 0), 0)

    return total.toFixed(2)
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

              <View
                style={{
                  position: 'absolute',
                  bottom: -20,
                  width: SIZES.width,
                  height: 50,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                  }}
                  onPress={() => handleOrder('-', item.menuId, item.price)}>
                  <Text style={{fontSize: 20}}>-</Text>
                </TouchableOpacity>

                <View
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{}}>{getOrderQty(item.menuId)}</Text>
                </View>

                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                  }}
                  onPress={() => handleOrder('+', item.menuId, item.price)}>
                  <Text style={{fontSize: 20}}>+</Text>
                </TouchableOpacity>
              </View>
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
          <Text style={{fontSize: 20, fontWeight: '600'}}>{getBasketItemCount()} Items in Cart</Text>
          <Text style={{fontSize: 20, fontWeight: '600'}}>${sumOrder()}</Text>
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
            <Text style={{fontSize: 20, fontWeight: '600'}}>**** 5491</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              padding: 20,
              alignItems: 'center',
              width: '100%',
              borderRadius: 50,
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 20,
                letterSpacing: 4,
                fontWeight: '700',
              }}>
              Order
            </Text>
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
