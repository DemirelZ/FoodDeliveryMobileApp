import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/theme';
import {Star1} from 'iconsax-react-native';

const Home = ({navigation}) => {
  // Dummy Datas

  /*

 const initialCurrentLocation = {
    streetName: "Kuching",
    gps: {
        latitude: 1.5496614931250685,
        longitude: 110.36381866919922
    }
}


*/
  // price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  const categoryData = [
    {
      id: 1,
      name: 'Rice',
      icon: require('../assets/icons/rice-bowl.png'),
    },
    {
      id: 2,
      name: 'Noodles',
      icon: require('../assets/icons/noodle.png'),
    },
    {
      id: 3,
      name: 'Hot Dogs',
      icon: require('../assets/icons/hotdog.png'),
    },
    {
      id: 4,
      name: 'Salads',
      icon: require('../assets/icons/salad.png'),
    },

    {
      id: 5,
      name: 'Burgers',
      icon: require('../assets/icons/hamburger.png'),
    },
    {
      id: 6,
      name: 'Pizza',
      icon: require('../assets/icons/pizza.png'),
    },
    {
      id: 7,
      name: 'Snacks',
      icon: require('../assets/icons/rice-bowl.png'),
    },
    {
      id: 8,
      name: 'Sushi',
      icon: require('../assets/icons/sushi.png'),
    },
    {
      id: 9,
      name: 'Desserts',
      icon: require('../assets/icons/donut.png'),
    },
    {
      id: 10,
      name: 'Drinks',
      icon: require('../assets/icons/drink.png'),
    },
  ];

  const restaurantData = [
    {
      id: 1,
      name: 'Burgers',
      rating: 4.8,
      categories: [5, 7],
      priceRating: affordable,
      photo: require('../assets/images/burger-restaurant.jpg'),
      duration: '30 - 45 min',
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
      courier: {
        avatar: require('../assets/images/avatar-1.jpg'),
        name: 'Amy',
      },
      menu: [
        {
          menuId: 1,
          name: 'Crispy Chicken Burger',
          photo: require('../assets/images/crispy-chicken-burger.jpg'),
          description: 'Burger with crispy chicken, cheese and lettuce',
          calories: 200,
          price: 10,
        },
        {
          menuId: 2,
          name: 'Crispy Chicken Burger with Honey Mustard',
          photo: require('../assets/images/honey-mustard-chicken-burger.jpg'),
          description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
          calories: 250,
          price: 15,
        },
        {
          menuId: 3,
          name: 'Crispy Baked French Fries',
          photo: require('../assets/images/baked-fries.jpg'),
          description: 'Crispy Baked French Fries',
          calories: 194,
          price: 8,
        },
      ],
    },

    {
      id: 2,
      name: 'Pizzas',
      rating: 4.8,
      categories: [2, 4, 6],
      priceRating: expensive,
      photo: require('../assets/images/pizza-restaurant.jpg'),
      duration: '15 - 20 min',
      location: {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
      },
      courier: {
        avatar: require('../assets/images/avatar-2.jpg'),
        name: 'Jackson',
      },
      menu: [
        {
          menuId: 4,
          name: 'Hawaiian Pizza',
          photo: require('../assets/images/hawaiian-pizza.jpg'),
          description: 'Canadian bacon, homemade pizza crust, pizza sauce',
          calories: 250,
          price: 15,
        },
        {
          menuId: 5,
          name: 'Tomato & Basil Pizza',
          photo: require('../assets/images/pizza.jpg'),
          description:
            'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
          calories: 250,
          price: 20,
        },
        {
          menuId: 6,
          name: 'Tomato Pasta',
          photo: require('../assets/images/tomato-pasta.jpg'),
          description: 'Pasta with fresh tomatoes',
          calories: 100,
          price: 10,
        },
        {
          menuId: 7,
          name: 'Mediterranean Chopped Salad ',
          photo: require('../assets/images/salad.jpg'),
          description: 'Finely chopped lettuce, tomatoes, cucumbers',
          calories: 100,
          price: 10,
        },
      ],
    },
    {
      id: 3,
      name: 'Hotdogs',
      rating: 4.8,
      categories: [3],
      priceRating: expensive,
      photo: require('../assets/images/hot-dog-restaurant.jpg'),
      duration: '20 - 25 min',
      location: {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
      },
      courier: {
        avatar: require('../assets/images/avatar-3.jpg'),
        name: 'James',
      },
      menu: [
        {
          menuId: 8,
          name: 'Chicago Style Hot Dog',
          photo: require('../assets/images/chicago-hot-dog.jpg'),
          description: 'Fresh tomatoes, all beef hot dogs',
          calories: 100,
          price: 20,
        },
      ],
    },
    {
      id: 4,
      name: 'Sushi',
      rating: 4.8,
      categories: [8],
      priceRating: expensive,
      photo: require('../assets/images/japanese-restaurant.jpg'),
      duration: '10 - 15 min',
      location: {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
      },
      courier: {
        avatar: require('../assets/images//avatar-4.jpg'),
        name: 'Ahmad',
      },
      menu: [
        {
          menuId: 9,
          name: 'Sushi sets',
          photo: require('../assets/images/sushi.jpg'),
          description: 'Fresh salmon, sushi rice, fresh juicy avocado',
          calories: 100,
          price: 50,
        },
      ],
    },
    {
      id: 5,
      name: 'Cuisine',
      rating: 4.8,
      categories: [1, 2],
      priceRating: affordable,
      photo: require('../assets/images/noodle-shop.jpg'),
      duration: '15 - 20 min',
      location: {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
      },
      courier: {
        avatar: require('../assets/images/avatar-4.jpg'),
        name: 'Muthu',
      },
      menu: [
        {
          menuId: 10,
          name: 'Kolo Mee',
          photo: require('../assets/images/kolo-mee.jpg'),
          description: 'Noodles with char siu',
          calories: 200,
          price: 5,
        },
        {
          menuId: 11,
          name: 'Sarawak Laksa',
          photo: require('../assets/images/sarawak-laksa.jpg'),
          description: 'Vermicelli noodles, cooked prawns',
          calories: 300,
          price: 8,
        },
        {
          menuId: 12,
          name: 'Nasi Lemak',
          photo: require('../assets/images/nasi-lemak.jpg'),
          description: 'A traditional Malay rice dish',
          calories: 300,
          price: 8,
        },
        {
          menuId: 13,
          name: 'Nasi Briyani with Mutton',
          photo: require('../assets/images/nasi-briyani-mutton.jpg'),
          description: 'A traditional Indian rice dish with mutton',
          calories: 300,
          price: 8,
        },
      ],
    },
    {
      id: 6,
      name: 'Desserts',
      rating: 4.9,
      categories: [9, 10],
      priceRating: affordable,
      photo: require('../assets/images/kek-lapis-shop.jpg'),
      duration: '35 - 40 min',
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar: require('../assets/images/avatar-1.jpg'),
        name: 'Jessie',
      },
      menu: [
        {
          menuId: 12,
          name: 'Teh C Peng',
          photo: require('../assets/images/teh-c-peng.jpg'),
          description: 'Three Layer Teh C Peng',
          calories: 100,
          price: 2,
        },
        {
          menuId: 13,
          name: 'ABC Ice Kacang',
          photo: require('../assets/images/ice-kacang.jpg'),
          description: 'Shaved Ice with red beans',
          calories: 100,
          price: 3,
        },
        {
          menuId: 14,
          name: 'Kek Lapis',
          photo: require('../assets/images/kek-lapis.jpg'),
          description: 'Layer cakes',
          calories: 300,
          price: 20,
        },
      ],
    },
  ];

  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  //const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

  const onSelectCategory = category => {
    const restourantList = restaurantData.filter(a =>
      a.categories.includes(category.id),
    );

    setRestaurants(restourantList);

    setSelectedCategory(category);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
        }}>
        <View style={{paddingHorizontal: 30}}>
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/nearby.png')}
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
            <Text>Location</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 30}}>
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/shopping-basket.png')}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 40}}>Main</Text>
          <Text style={{fontSize: 40}}>Categories</Text>
        </View>
        <View>
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  padding: 15,
                  paddingBottom: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor:
                    selectedCategory?.id === item.id
                      ? COLORS.primary
                      : COLORS.lightGray2,
                  borderRadius: 40,
                  marginHorizontal: 10,
                }}
                onPress={() => onSelectCategory(item)}>
                <View
                  style={{
                    backgroundColor: COLORS.white,
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={item.icon}
                    resizeMode="contain"
                    style={{width: 30, height: 30}}
                  />
                </View>

                <Text
                  style={{
                    fontSize: 12,
                    color:
                      selectedCategory?.id === item.id
                        ? COLORS.white
                        : COLORS.black,
                    marginTop: 20,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{padding: 10}}>
          <FlatList
            data={restaurants}
            contentContainerStyle={{paddingBottom: 600}}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{marginVertical: 10}}
                onPress={() => navigation.navigate('Restaurant', {item})}>
                <View>
                  <Image
                    source={item.photo}
                    style={{
                      width: '100%',
                      height: 200,
                      borderRadius: 30,
                      marginBottom: 5,
                    }}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      backgroundColor: COLORS.white,
                      bottom: 0,
                      padding: 16,
                      borderBottomLeftRadius: 30,
                      borderTopRightRadius: 30,
                    }}>
                    <Text style={{fontWeight: '700'}}>{item.duration}</Text>
                  </View>
                </View>
                <Text style={{fontWeight: '700', fontSize: 26}}>
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                    gap: 8,
                  }}>
                  <Star1 color={COLORS.primary} variant={'Bold'} />
                  <Text style={{fontSize: 20}}>{item.rating}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
