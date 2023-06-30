import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button, ImageBackground, ScrollView, TouchableOpacity, StatusBar, Platform, SafeAreaView } from 'react-native';
import * as AppConstants from '../constants/AppConstants';
// import { Ionicons, AntDesign } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dash from 'react-native-dash';
import Colors from './../constants/Colors';
// import PleaseWaitComponent from './../component/PleaseWaitComponent';
// import TryAgainComponent from './../component/TryAgainComponent';
// import { useDispatch, useSelector } from 'react-redux';
// import { loadAddresses } from "../stores/actions/addresses";
// import { loadImages } from "../stores/actions/images";
// import { loadThumbnails } from "../stores/actions/thumbnails";
// import { loadShops } from "../stores/actions/shops";
// import { loadShopStatuses } from "../stores/actions/shop_statuses";

export default function ThirdScreen(props) {
    // const dispatch = useDispatch();
    //
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    //
    // const address = useSelector(state => state.addresses.addressesArray);
    //
    // useEffect(() => {
    //     loadMyAddress();
    // }, []);
    //
    // const loadMyAddress = async () => {
    //     try {
    //         setError(null);
    //         setLoading(true);
    //         // await dispatch(loginUser('admin', 'admin@1234'));
    //         await dispatch(loadAddresses());
    //         await dispatch(loadImages());
    //         await dispatch(loadThumbnails());
    //         await dispatch(loadShops());
    //         await dispatch(loadShopStatuses());
    //         setLoading(false);
    //     } catch (e) {
    //         setError(e.message);
    //         setLoading(false);
    //         console.log('loginUser = ' + e.message);
    //     }
    // };

    // const renderShops = () => {
        return (
            <View style={styles.backgroundColor}>
                <View>
                    <View style={styles.MainContainer}>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('Second');
                        }}>
                            <View style={styles.Curve}>
                                <AntDesign name="appstore1" size={16} color="#B5B6B9"
                                    style={{
                                        marginTop: AppConstants.pixelNormalize(1),
                                        marginLeft: AppConstants.pixelNormalize(2),
                                    }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image
                            source={require('../assets/Mask3.png')}
                            style={{
                                width: AppConstants.pixelNormalize(25),
                                height: AppConstants.pixelNormalize(25),
                                marginTop: AppConstants.pixelNormalize(-30),
                                marginLeft: AppConstants.pixelNormalize(325),
                            }}>
                        </Image>
                    </View>
                    <View>
                        <Image
                            source={require('../assets/basket.png')}
                            style={{
                                width: AppConstants.pixelNormalize(28),
                                height: AppConstants.pixelNormalize(28),
                                marginTop: AppConstants.pixelNormalize(-32),
                                marginLeft: AppConstants.pixelNormalize(285),
                            }}>
                        </Image>
                    </View>
                    <View>
                        <Image
                            source={require('../assets/searching.png')}
                            style={{
                                width: AppConstants.pixelNormalize(25),
                                height: AppConstants.pixelNormalize(25),
                                marginTop: AppConstants.pixelNormalize(-30),
                                marginLeft: AppConstants.pixelNormalize(248),
                            }}>
                        </Image>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.map}>
                        <ImageBackground
                            source={require('../assets/map.png')}
                            style={{
                                width: AppConstants.pixelNormalize(336),
                                height: AppConstants.pixelNormalize(275),
                                borderTopLeftRadius: AppConstants.pixelNormalize(15),
                                borderTopRightRadius: AppConstants.pixelNormalize(15),
                                borderBottomLeftRadius: AppConstants.pixelNormalize(15),
                                borderBottomRightRadius: AppConstants.pixelNormalize(15),
                            }}>
                            <Image
                                source={require('../assets/house.png')}
                                style={{
                                    width: AppConstants.pixelNormalize(21),
                                    height: AppConstants.pixelNormalize(18),
                                    marginTop: AppConstants.pixelNormalize(22),
                                    marginLeft: AppConstants.pixelNormalize(263),
                                }}>
                            </Image>
                            <Image
                                source={require('../assets/house.png')}
                                style={{
                                    width: AppConstants.pixelNormalize(21),
                                    height: AppConstants.pixelNormalize(18),
                                    marginLeft: AppConstants.pixelNormalize(49),
                                }}>
                            </Image>
                            <Image
                                source={require('../assets/house.png')}
                                style={{
                                    width: AppConstants.pixelNormalize(21),
                                    height: AppConstants.pixelNormalize(18),
                                    marginTop: AppConstants.pixelNormalize(34),
                                    marginLeft: AppConstants.pixelNormalize(156),
                                }}>
                            </Image>
                            <View style={styles.house}>
                                <Image
                                    source={require('../assets/house.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(21),
                                        height: AppConstants.pixelNormalize(18),
                                        marginTop: AppConstants.pixelNormalize(37),
                                        marginLeft: AppConstants.pixelNormalize(70),
                                    }}>
                                </Image>
                                <Image
                                    source={require('../assets/house.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(21),
                                        height: AppConstants.pixelNormalize(18),
                                        marginTop: AppConstants.pixelNormalize(37),
                                        marginLeft: AppConstants.pixelNormalize(164),
                                    }}>
                                </Image>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.rectangle}>
                        <View style={styles.circular}>
                            <Ionicons name="md-location-sharp" size={16} color="#707070"
                                style={{
                                    marginTop: AppConstants.pixelNormalize(5),
                                    marginLeft: AppConstants.pixelNormalize(5.5),
                                    borderWidth: AppConstants.pixelNormalize(1),
                                    width: AppConstants.pixelNormalize(25),
                                    height: AppConstants.pixelNormalize(25),
                                    borderRadius: AppConstants.pixelNormalize(25),
                                    borderColor: '#AAAAAA',
                                    paddingTop: 4.5,
                                    paddingLeft: 4.5
                                }} />
                            <Dash dashColor={'#AAAAAA'} dashThickness={1}
                                style={{
                                    height: 32,
                                    flexDirection: 'column',
                                    marginLeft: AppConstants.pixelNormalize(18),
                                }} />
                            <Image
                                source={require('../assets/coffeeShop.png')}
                                style={{
                                    marginTop: AppConstants.pixelNormalize(1),
                                    marginLeft: AppConstants.pixelNormalize(5.5),
                                    borderWidth: AppConstants.pixelNormalize(1),
                                    width: AppConstants.pixelNormalize(25),
                                    height: AppConstants.pixelNormalize(25),
                                    borderRadius: AppConstants.pixelNormalize(25),
                                    borderColor: '#AAAAAA',
                                }} />
                        </View>
                        <View>
                            <View>
                                <Text style={{
                                    marginTop: AppConstants.pixelNormalize(-95),
                                    marginLeft: AppConstants.pixelNormalize(60),
                                    fontSize: AppConstants.pixelNormalize(11),
                                    color: '#AAAAAA'
                                }}>Your Location</Text>
                            </View>
                            <View>
                                <Text style={{
                                    marginTop: AppConstants.pixelNormalize(-75),
                                    marginLeft: AppConstants.pixelNormalize(60),
                                    fontSize: AppConstants.pixelNormalize(14),
                                    color: '#000000'
                                }}>4 Green Lake, New York</Text>
                            </View>
                            <View>
                                <Dash dashColor={'#AAAAAA'} dashThickness={1} dashLength={180}
                                    style={{
                                        width: 1,
                                        flexDirection: 'row',
                                        marginLeft: AppConstants.pixelNormalize(60),
                                        marginTop: AppConstants.pixelNormalize(-45),
                                    }} />
                            </View>
                            <View>
                                <Text style={{
                                    marginTop: AppConstants.pixelNormalize(-35),
                                    marginLeft: AppConstants.pixelNormalize(60),
                                    fontSize: AppConstants.pixelNormalize(11),
                                    color: '#AAAAAA'
                                }}>Shop Location</Text>
                            </View>
                            <View>
                                <Text style={{
                                    marginTop: AppConstants.pixelNormalize(-15),
                                    marginLeft: AppConstants.pixelNormalize(60),
                                    fontSize: AppConstants.pixelNormalize(14),
                                    color: '#000000'
                                }}>New York City, United States</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{
                            marginTop: AppConstants.pixelNormalize(20),
                            marginLeft: AppConstants.pixelNormalize(20),
                            fontSize: AppConstants.pixelNormalize(18),
                            color: '#000000'
                        }}>Near Shop Details</Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View>
                            <View style={styles.marketCombine}>
                                <View>
                                    <Image
                                        source={require('../assets/lady.png')}
                                        style={{
                                            width: AppConstants.pixelNormalize(185),
                                            height: AppConstants.pixelNormalize(119),
                                            marginTop: AppConstants.pixelNormalize(13),
                                            marginLeft: AppConstants.pixelNormalize(20),
                                        }}>
                                    </Image>
                                </View>
                                <View>
                                    <Image
                                        source={require('../assets/market.png')}
                                        style={{
                                            width: AppConstants.pixelNormalize(185),
                                            height: AppConstants.pixelNormalize(119),
                                            marginTop: AppConstants.pixelNormalize(13),
                                            marginLeft: AppConstants.pixelNormalize(20),
                                        }}>
                                    </Image>
                                </View>
                                <View>
                                    <Image
                                        source={require('../assets/store.png')}
                                        style={{
                                            width: AppConstants.pixelNormalize(185),
                                            height: AppConstants.pixelNormalize(119),
                                            marginTop: AppConstants.pixelNormalize(13),
                                            marginLeft: AppConstants.pixelNormalize(20),
                                            borderRadius: 10
                                        }}>
                                    </Image>
                                </View>
                                <View>
                                    <Image
                                        source={require('../assets/store1.png')}
                                        style={{
                                            width: AppConstants.pixelNormalize(185),
                                            height: AppConstants.pixelNormalize(119),
                                            marginTop: AppConstants.pixelNormalize(13),
                                            marginLeft: AppConstants.pixelNormalize(20),
                                            borderRadius: 10
                                        }}>
                                    </Image>
                                </View>
                                <View>
                                    <Image
                                        source={require('../assets/store2.png')}
                                        style={{
                                            width: AppConstants.pixelNormalize(185),
                                            height: AppConstants.pixelNormalize(119),
                                            marginTop: AppConstants.pixelNormalize(13),
                                            marginLeft: AppConstants.pixelNormalize(20),
                                            borderRadius: 10
                                        }}>
                                    </Image>
                                </View>
                                <View>
                                    <Image
                                        source={require('../assets/store3.png')}
                                        style={{
                                            width: AppConstants.pixelNormalize(185),
                                            height: AppConstants.pixelNormalize(119),
                                            marginTop: AppConstants.pixelNormalize(13),
                                            marginLeft: AppConstants.pixelNormalize(20),
                                            // marginRight: AppConstants.pixelNormalize(4),
                                            borderRadius: 10
                                        }}>
                                    </Image>
                                </View>
                            </View>
                            <View style={styles.ShopName}>
                                <View>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(8),
                                        marginLeft: AppConstants.pixelNormalize(20),
                                        color: '#000000'
                                    }}>Shop Name</Text>
                                </View>
                                <View >
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(8),
                                        marginLeft: AppConstants.pixelNormalize(129),
                                        color: '#000000'
                                    }}>Shop Name</Text>
                                </View>
                                <View>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(8),
                                        marginLeft: AppConstants.pixelNormalize(129),
                                        color: '#000000'
                                    }}>Shop Name</Text>
                                </View>
                                <View>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(8),
                                        marginLeft: AppConstants.pixelNormalize(129),
                                        color: '#000000'
                                    }}>Shop Name</Text>
                                </View>
                                <View>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(8),
                                        marginLeft: AppConstants.pixelNormalize(129),
                                        color: '#000000'
                                    }}>Shop Name</Text>
                                </View>
                                <View>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(8),
                                        marginLeft: AppConstants.pixelNormalize(129),
                                        color: '#000000'
                                    }}>Shop Name</Text>
                                </View>
                            </View>
                            <View style={styles.Stars}>
                                <View style={styles.star}>
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star-half.png')} />
                                </View>
                                <View style={styles.star2}>
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star-half.png')} />
                                </View>
                                <View style={styles.star3}>
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star-half.png')} />
                                </View>
                                <View style={styles.star4}>
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star-half.png')} />
                                    <Image source={require('../assets/star-half.png')} />
                                </View>
                                <View style={styles.star5}>
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star-half.png')} />
                                    <Image source={require('../assets/star-half.png')} />
                                </View>
                                <View style={styles.star6}>
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star.png')} />
                                    <Image source={require('../assets/star-half.png')} />
                                    <Image source={require('../assets/star-half.png')} />
                                </View>
                            </View>
                            <View style={styles.lastContainer}>
                                <View style={styles.bicycle}>
                                    <Ionicons name="bicycle" size={15} color="black" />
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(-2),
                                        marginLeft: AppConstants.pixelNormalize(5),
                                        fontSize: AppConstants.pixelNormalize(14),
                                        color: '#000000'
                                    }}>2 Km</Text>
                                    <TouchableOpacity onPress={() => {
                                        props.navigation.navigate('Fourth');
                                    }}>
                                        <View style={styles.ShopNow}>
                                            <Text style={{
                                                marginTop: AppConstants.pixelNormalize(5),
                                                marginLeft: AppConstants.pixelNormalize(15),
                                                fontSize: AppConstants.pixelNormalize(10),
                                                color: '#FFF'
                                            }}>Shop Now</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.bicycle2}>
                                    <Ionicons name="bicycle" size={15} color="black" />
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(-2),
                                        marginLeft: AppConstants.pixelNormalize(5),
                                        fontSize: AppConstants.pixelNormalize(14),
                                        color: '#000000'
                                    }}>1.7 Km</Text>
                                    <TouchableOpacity onPress={() => {
                                        props.navigation.navigate('Fourth');
                                    }}>
                                        <View style={styles.ShopNow2}>
                                            <Text style={{
                                                marginTop: AppConstants.pixelNormalize(5),
                                                marginLeft: AppConstants.pixelNormalize(12),
                                                fontSize: AppConstants.pixelNormalize(10),
                                                color: '#FFF'
                                            }}>Shop Now</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.bicycle3}>
                                    <Ionicons name="bicycle" size={15} color="black" />
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(-2),
                                        marginLeft: AppConstants.pixelNormalize(5),
                                        fontSize: AppConstants.pixelNormalize(14),
                                        color: '#000000'
                                    }}>4.4 Km</Text>
                                    <TouchableOpacity onPress={() => {
                                        props.navigation.navigate('Fourth');
                                    }}>
                                        <View style={styles.ShopNow3}>
                                            <Text style={{
                                                marginTop: AppConstants.pixelNormalize(5),
                                                marginLeft: AppConstants.pixelNormalize(15),
                                                fontSize: AppConstants.pixelNormalize(10),
                                                color: '#FFF'
                                            }}>Shop Now</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.bicycle4}>
                                    <Ionicons name="bicycle" size={15} color="black" />
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(-2),
                                        marginLeft: AppConstants.pixelNormalize(5),
                                        fontSize: AppConstants.pixelNormalize(14),
                                        color: '#000000'
                                    }}>5.2 Km</Text>
                                    <TouchableOpacity onPress={() => {
                                        props.navigation.navigate('Fourth');
                                    }}>
                                        <View style={styles.ShopNow4}>
                                            <Text style={{
                                                marginTop: AppConstants.pixelNormalize(5),
                                                marginLeft: AppConstants.pixelNormalize(15),
                                                fontSize: AppConstants.pixelNormalize(10),
                                                color: '#FFF'
                                            }}>Shop Now</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.bicycle5}>
                                    <Ionicons name="bicycle" size={15} color="black" />
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(-2),
                                        marginLeft: AppConstants.pixelNormalize(5),
                                        fontSize: AppConstants.pixelNormalize(14),
                                        color: '#000000'
                                    }}>6.5 Km</Text>
                                    <TouchableOpacity onPress={() => {
                                        props.navigation.navigate('Fourth');
                                    }}>
                                        <View style={styles.ShopNow5}>
                                            <Text style={{
                                                marginTop: AppConstants.pixelNormalize(5),
                                                marginLeft: AppConstants.pixelNormalize(15),
                                                fontSize: AppConstants.pixelNormalize(10),
                                                color: '#FFF'
                                            }}>Shop Now</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.bicycle6}>
                                    <Ionicons name="bicycle" size={15} color="black" />
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(-2),
                                        marginLeft: AppConstants.pixelNormalize(5),
                                        fontSize: AppConstants.pixelNormalize(14),
                                        color: '#000000'
                                    }}>8 Km</Text>
                                    <TouchableOpacity onPress={() => {
                                        props.navigation.navigate('Fourth');
                                    }}>
                                        <View style={styles.ShopNow}>
                                            <Text style={{
                                                marginTop: AppConstants.pixelNormalize(5),
                                                marginLeft: AppConstants.pixelNormalize(15),
                                                fontSize: AppConstants.pixelNormalize(10),
                                                color: '#FFF'
                                            }}>Shop Now</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ScrollView>
                <View>
                    <TouchableOpacity>
                        <View style={styles.LoadMore}>
                            <Text style={{
                                fontSize: AppConstants.pixelNormalize(12),
                                color: '#000000'
                            }}>Load More..</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );

    // }

    // return (
    //     <>
    //         <StatusBar
    //             barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
    //             backgroundColor="#000"
    //         />
    //         <SafeAreaView
    //             style={{ flex: 0, backgroundColor: Colors.headerBackgroundColor }}
    //         />
    //         <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
    //             {loading && <PleaseWaitComponent />}
    //             {!loading && error && (
    //                 <TryAgainComponent
    //                     onClickTryAgain={() => {
    //                         // console.log("I am inside Try again");
    //                         loadMyAddress();
    //                     }}
    //                 />
    //             )}
    //             {!loading && !error && renderShops()}
    //         </SafeAreaView>
    //     </>
    // );
};

const styles = StyleSheet.create({
    Curve: {
        width: AppConstants.pixelNormalize(34),
        height: AppConstants.pixelNormalize(28),
        borderTopLeftRadius: AppConstants.pixelNormalize(5),
        borderTopRightRadius: AppConstants.pixelNormalize(15),
        borderBottomLeftRadius: AppConstants.pixelNormalize(5),
        borderBottomRightRadius: AppConstants.pixelNormalize(15),
        marginTop: AppConstants.pixelNormalize(14),
        marginLeft: AppConstants.pixelNormalize(20),
        padding: AppConstants.pixelNormalize(5),
        backgroundColor: '#F5F6FF'
    },
    MainContainer: {
        flexDirection: 'row',
    },
    map: {
        marginTop: AppConstants.pixelNormalize(20),
        marginLeft: AppConstants.pixelNormalize(20),
    },
    house: {
        flexDirection: 'row'
    },
    rectangle: {
        height: AppConstants.pixelNormalize(114),
        width: AppConstants.pixelNormalize(284),
        marginTop: AppConstants.pixelNormalize(-57),
        marginLeft: AppConstants.pixelNormalize(45),
        backgroundColor: '#ffffff',
        shadowColor: '#00000014',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        shadowOpacity: 0.26,
        elevation: 10,
        borderRadius: 15
    },
    circular: {
        height: AppConstants.pixelNormalize(95),
        width: AppConstants.pixelNormalize(35),
        marginTop: AppConstants.pixelNormalize(9),
        marginLeft: AppConstants.pixelNormalize(11),
        backgroundColor: 'white',
        shadowColor: '#00000014',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        shadowOpacity: 0.16,
        elevation: 5,
        borderRadius: 50,
        flexDirection: 'column',
    },
    marketCombine: {
        flexDirection: 'row'
    },
    ShopName: {
        flexDirection: 'row'
    },
    Stars: {
        flexDirection: 'row'
    },
    star: {
        flexDirection: 'row',
        width: AppConstants.pixelNormalize(10),
        height: AppConstants.pixelNormalize(10),
        marginTop: AppConstants.pixelNormalize(3),
        marginLeft: AppConstants.pixelNormalize(20),
    },
    star2: {
        flexDirection: 'row',
        width: AppConstants.pixelNormalize(10),
        height: AppConstants.pixelNormalize(10),
        marginTop: AppConstants.pixelNormalize(3),
        marginLeft: AppConstants.pixelNormalize(195),
    },
    star3: {
        flexDirection: 'row',
        width: AppConstants.pixelNormalize(10),
        height: AppConstants.pixelNormalize(10),
        marginTop: AppConstants.pixelNormalize(3),
        marginLeft: AppConstants.pixelNormalize(195),
    },
    star4: {
        flexDirection: 'row',
        width: AppConstants.pixelNormalize(10),
        height: AppConstants.pixelNormalize(10),
        marginTop: AppConstants.pixelNormalize(3),
        marginLeft: AppConstants.pixelNormalize(195),
    },
    star5: {
        flexDirection: 'row',
        width: AppConstants.pixelNormalize(10),
        height: AppConstants.pixelNormalize(10),
        marginTop: AppConstants.pixelNormalize(3),
        marginLeft: AppConstants.pixelNormalize(195),
    },
    star6: {
        flexDirection: 'row',
        width: AppConstants.pixelNormalize(10),
        height: AppConstants.pixelNormalize(10),
        marginTop: AppConstants.pixelNormalize(3),
        marginLeft: AppConstants.pixelNormalize(195),
    },
    bicycle: {
        flexDirection: 'row',
        marginTop: AppConstants.pixelNormalize(10),
        marginLeft: AppConstants.pixelNormalize(20),
    },
    bicycle2: {
        flexDirection: 'row',
        marginTop: AppConstants.pixelNormalize(10),
        marginLeft: AppConstants.pixelNormalize(22),
    },
    bicycle3: {
        flexDirection: 'row',
        marginTop: AppConstants.pixelNormalize(10),
        marginLeft: AppConstants.pixelNormalize(20),
    },
    bicycle4: {
        flexDirection: 'row',
        marginTop: AppConstants.pixelNormalize(10),
        marginLeft: AppConstants.pixelNormalize(24),
    },
    bicycle5: {
        flexDirection: 'row',
        marginTop: AppConstants.pixelNormalize(10),
        marginLeft: AppConstants.pixelNormalize(22),
    },
    bicycle6: {
        flexDirection: 'row',
        marginTop: AppConstants.pixelNormalize(10),
        marginLeft: AppConstants.pixelNormalize(25),
    },
    ShopNow: {
        height: AppConstants.pixelNormalize(25),
        width: AppConstants.pixelNormalize(75),
        marginTop: AppConstants.pixelNormalize(-3),
        marginLeft: AppConstants.pixelNormalize(54),
        backgroundColor: '#FF3464',
        borderTopLeftRadius: AppConstants.pixelNormalize(4),
        borderTopRightRadius: AppConstants.pixelNormalize(14),
        borderBottomLeftRadius: AppConstants.pixelNormalize(14),
        borderBottomRightRadius: AppConstants.pixelNormalize(4),
    },
    ShopNow2: {
        height: AppConstants.pixelNormalize(25),
        width: AppConstants.pixelNormalize(75),
        marginTop: AppConstants.pixelNormalize(-2),
        marginLeft: AppConstants.pixelNormalize(45),
        backgroundColor: '#FF3464',
        borderTopLeftRadius: AppConstants.pixelNormalize(4),
        borderTopRightRadius: AppConstants.pixelNormalize(14),
        borderBottomLeftRadius: AppConstants.pixelNormalize(14),
        borderBottomRightRadius: AppConstants.pixelNormalize(4),
    },
    ShopNow3: {
        height: AppConstants.pixelNormalize(25),
        width: AppConstants.pixelNormalize(75),
        marginTop: AppConstants.pixelNormalize(-2),
        marginLeft: AppConstants.pixelNormalize(40),
        backgroundColor: '#FF3464',
        borderTopLeftRadius: AppConstants.pixelNormalize(4),
        borderTopRightRadius: AppConstants.pixelNormalize(14),
        borderBottomLeftRadius: AppConstants.pixelNormalize(14),
        borderBottomRightRadius: AppConstants.pixelNormalize(4),
    },
    ShopNow4: {
        height: AppConstants.pixelNormalize(25),
        width: AppConstants.pixelNormalize(75),
        marginTop: AppConstants.pixelNormalize(-2),
        marginLeft: AppConstants.pixelNormalize(42),
        backgroundColor: '#FF3464',
        borderTopLeftRadius: AppConstants.pixelNormalize(4),
        borderTopRightRadius: AppConstants.pixelNormalize(14),
        borderBottomLeftRadius: AppConstants.pixelNormalize(14),
        borderBottomRightRadius: AppConstants.pixelNormalize(4),
    },
    ShopNow5: {
        height: AppConstants.pixelNormalize(25),
        width: AppConstants.pixelNormalize(75),
        marginTop: AppConstants.pixelNormalize(-2),
        marginLeft: AppConstants.pixelNormalize(40),
        backgroundColor: '#FF3464',
        borderTopLeftRadius: AppConstants.pixelNormalize(4),
        borderTopRightRadius: AppConstants.pixelNormalize(14),
        borderBottomLeftRadius: AppConstants.pixelNormalize(14),
        borderBottomRightRadius: AppConstants.pixelNormalize(4),
    },
    lastContainer: {
        flexDirection: 'row'
    },
    LoadMore: {
        height: AppConstants.pixelNormalize(36),
        width: AppConstants.pixelNormalize(95),
        marginBottom: AppConstants.pixelNormalize(15),
        marginLeft: AppConstants.pixelNormalize(142),
        backgroundColor: '#F5F6FF',
        borderTopLeftRadius: AppConstants.pixelNormalize(12),
        borderBottomRightRadius: AppConstants.pixelNormalize(12),
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundColor: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
    }

});
