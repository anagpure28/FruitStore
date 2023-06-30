import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    Platform,
    SafeAreaView
} from 'react-native';
import * as AppConstants from '../constants/AppConstants';
// import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Dash from 'react-native-dash';
import Colors from './../constants/Colors';
// import PleaseWaitComponent from './../component/PleaseWaitComponent';
// import TryAgainComponent from './../component/TryAgainComponent';
// import { useDispatch, useSelector } from 'react-redux';
// import { loadImages } from "../stores/actions/images";
// import { loadThumbnails } from "../stores/actions/thumbnails";
// import { loadShops } from "../stores/actions/shops";
// import { loadShopStatuses } from "../stores/actions/shop_statuses";
// import { loadProducts } from "../stores/actions/products";
// import { loadProductTypes } from "../stores/actions/product_types";

export default function FourthScreen(props) {
    // const dispatch = useDispatch();
    //
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    //
    // const token = useSelector(state => state.auth.token);
    //
    // useEffect(() => {
    //     loadMyShop();
    // }, []);
    //
    // const loadMyShop = async () => {
    //     try {
    //         setError(null);
    //         setLoading(true);
    //         // await dispatch(loginUser('admin', 'admin@1234'));
    //         await dispatch(loadProducts());
    //         await dispatch(loadProductTypes());
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

    // const renderSelection = () => {
        return (
            <View style={styles.backgroundColor}>
                <View>
                    <View style={styles.MainContainer}>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('Third');
                        }}>
                            <View style={styles.Curve} >
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
                                marginTop: AppConstants.pixelNormalize(-28),
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
                                marginTop: AppConstants.pixelNormalize(-30),
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
                    <View style={styles.Text}>
                        <Text style={{
                            fontSize: AppConstants.pixelNormalize(18),
                            color: '#000000'
                        }}>Shop Name</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.scroll}>
                        <View style={styles.container}>
                            <View style={styles.centerContainer}>
                                <View>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(63),
                                        marginLeft: AppConstants.pixelNormalize(49),
                                        fontSize: AppConstants.pixelNormalize(20),
                                        color: '#FF3464'
                                    }}>Fresh
                                        <Text style={{
                                            color: '#FBCB59'
                                        }}> Fruits</Text>
                                    </Text>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(4),
                                        marginLeft: AppConstants.pixelNormalize(49),
                                        fontSize: AppConstants.pixelNormalize(12),
                                        color: '#5E5E5E'
                                    }}>10% Discount
                                    </Text>
                                    <TouchableOpacity>
                                        <View style={styles.ShopNow}>
                                            <Text style={{
                                                fontSize: AppConstants.pixelNormalize(12),
                                                color: '#FFF'
                                            }}>Shop Now</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Image
                                        source={require('../assets/Fruits.png')}
                                        style={{
                                            width: AppConstants.pixelNormalize(205),
                                            height: AppConstants.pixelNormalize(148),
                                            marginTop: AppConstants.pixelNormalize(45),
                                            // marginLeft: AppConstants.pixelNormalize(10),
                                        }}>
                                    </Image>
                                </View>
                            </View>
                        </View>
                        <View style={styles.Stable}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <View>
                                    <View style={styles.rowMainContainer}>
                                        <TouchableOpacity>
                                            <View style={styles.rowContainer1}>
                                                <Text style={{
                                                    fontSize: AppConstants.pixelNormalize(14),
                                                    color: '#FFF'
                                                }}>All</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={styles.rowContainer2}>
                                                <Text style={{
                                                    fontSize: AppConstants.pixelNormalize(14),
                                                    color: '#6F7081'
                                                }}>Apple</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={styles.rowContainer3}>
                                                <Text style={{
                                                    fontSize: AppConstants.pixelNormalize(14),
                                                    color: '#6F7081'
                                                }}>Orange</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={styles.rowContainer4}>
                                                <Text style={{
                                                    fontSize: AppConstants.pixelNormalize(14),
                                                    color: '#6F7081'
                                                }}>Pomegranate</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={styles.rowContainer4}>
                                                <Text style={{
                                                    fontSize: AppConstants.pixelNormalize(14),
                                                    color: '#6F7081'
                                                }}>White Grape</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={styles.rowContainer4}>
                                                <Text style={{
                                                    fontSize: AppConstants.pixelNormalize(14),
                                                    color: '#6F7081'
                                                }}>Strawberry</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.dash}>
                                        <Dash dashColor={'#AAAAAA'} dashThickness={1} dashLength={8}
                                            style={{
                                                height: 4,
                                                flexDirection: 'column',
                                                marginLeft: AppConstants.pixelNormalize(68),
                                            }} />
                                        <Dash dashColor={'#AAAAAA'} dashThickness={1} dashLength={8}
                                            style={{
                                                height: 4,
                                                flexDirection: 'column',
                                                marginLeft: AppConstants.pixelNormalize(109),
                                            }} />
                                        <Dash dashColor={'#AAAAAA'} dashThickness={1} dashLength={8}
                                            style={{
                                                height: 4,
                                                flexDirection: 'column',
                                                marginLeft: AppConstants.pixelNormalize(108),
                                            }} />
                                        <Dash dashColor={'#AAAAAA'} dashThickness={1} dashLength={8}
                                            style={{
                                                height: 4,
                                                flexDirection: 'column',
                                                marginLeft: AppConstants.pixelNormalize(120),
                                            }} />
                                        <Dash dashColor={'#AAAAAA'} dashThickness={1} dashLength={8}
                                              style={{
                                                  height: 4,
                                                  flexDirection: 'column',
                                                  marginLeft: AppConstants.pixelNormalize(125),
                                              }} />
                                        <Dash dashColor={'#AAAAAA'} dashThickness={1} dashLength={8}
                                              style={{
                                                  height: 4,
                                                  flexDirection: 'column',
                                                  marginLeft: AppConstants.pixelNormalize(133),
                                              }} />
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.smallCircle1}>
                                            <Image source={require('../assets/Mango.png')}
                                                style={{
                                                    width: AppConstants.pixelNormalize(17),
                                                    height: AppConstants.pixelNormalize(21),
                                                    marginTop: AppConstants.pixelNormalize(5),
                                                    marginLeft: AppConstants.pixelNormalize(8),
                                                }} ></Image>
                                        </View>
                                        <View style={styles.smallCircle2}>
                                            <Image source={require('../assets/apple.png')}
                                                style={{
                                                    width: AppConstants.pixelNormalize(21),
                                                    height: AppConstants.pixelNormalize(20),
                                                    marginTop: AppConstants.pixelNormalize(6),
                                                    marginLeft: AppConstants.pixelNormalize(6),
                                                }} ></Image>
                                        </View>
                                        <View style={styles.smallCircle3}>
                                            <Image source={require('../assets/orange.png')}
                                                style={{
                                                    width: AppConstants.pixelNormalize(25),
                                                    height: AppConstants.pixelNormalize(25),
                                                    marginTop: AppConstants.pixelNormalize(5),
                                                    marginLeft: AppConstants.pixelNormalize(5),
                                                }} ></Image>
                                        </View>
                                        <View style={styles.smallCircle4}>
                                            <Image source={require('../assets/pomegranate4.png')}
                                                style={{
                                                    width: AppConstants.pixelNormalize(21),
                                                    height: AppConstants.pixelNormalize(20),
                                                    marginTop: AppConstants.pixelNormalize(6),
                                                    marginLeft: AppConstants.pixelNormalize(6),
                                                }} ></Image>
                                        </View>
                                        <View style={styles.smallCircle5}>
                                            <Image source={require('../assets/Grape.png')}
                                                   style={{
                                                       width: AppConstants.pixelNormalize(21),
                                                       height: AppConstants.pixelNormalize(20),
                                                       marginTop: AppConstants.pixelNormalize(6),
                                                       marginLeft: AppConstants.pixelNormalize(6),
                                                   }} ></Image>
                                        </View>
                                        <View style={styles.smallCircle6}>
                                            <Image source={require('../assets/strawberry3.png')}
                                                   style={{
                                                       width: AppConstants.pixelNormalize(21),
                                                       height: AppConstants.pixelNormalize(20),
                                                       marginTop: AppConstants.pixelNormalize(6),
                                                       marginLeft: AppConstants.pixelNormalize(6),
                                                   }} ></Image>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        <View>
                            <Text style={{
                                marginTop: AppConstants.pixelNormalize(16),
                                marginLeft: AppConstants.pixelNormalize(29),
                                fontSize: AppConstants.pixelNormalize(18),
                                color: '#000000'
                            }}>Fresh Deals</Text>
                        </View>
                        <ScrollView>
                            <View>
                                <View style={styles.FruitContainers}>
                                    <View style={styles.fruitCont1}>
                                        <View style={styles.basketIcon}>
                                            <FontAwesome5 name="shopping-basket" size={20} color="#CBB73F"
                                                style={{
                                                    marginTop: AppConstants.pixelNormalize(15),
                                                    marginLeft: AppConstants.pixelNormalize(10)
                                                }} />
                                            <Text style={{
                                                //                                 marginTop: AppConstants.pixelNormalize(4),
                                                marginLeft: AppConstants.pixelNormalize(12),
                                                fontSize: AppConstants.pixelNormalize(10),
                                                color: '#CBB73F',
                                            }}>1 Kg</Text>
                                        </View>
                                        <Image source={require('../assets/orangefruit.png')}
                                            style={{
                                                width: AppConstants.pixelNormalize(86),
                                                height: AppConstants.pixelNormalize(73),
                                                marginTop: AppConstants.pixelNormalize(-35),
                                                marginLeft: AppConstants.pixelNormalize(27),
                                            }} ></Image>
                                        <Text style={{
                                            marginTop: AppConstants.pixelNormalize(4),
                                            fontSize: AppConstants.pixelNormalize(12),
                                            textAlign: 'center',
                                            color: '#000000'
                                        }}>Orange</Text>
                                        <View style={styles.addContainer}>
                                            <Text style={{
                                                marginTop: AppConstants.pixelNormalize(12),
                                                marginLeft: AppConstants.pixelNormalize(10),
                                                fontSize: AppConstants.pixelNormalize(12),
                                                color: '#000000'
                                            }}>1kg - $14</Text>
                                            <TouchableOpacity onPress={() => {
                                                props.navigation.navigate('Fifth');
                                            }}>
                                                <View style={styles.Add1}>
                                                    <Text style={{
                                                        fontSize: AppConstants.pixelNormalize(10),
                                                        color: '#FF5882'
                                                    }}>Add</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.fruitCont2}>
                                        <Image source={require('../assets/pomegranate4.png')}
                                            style={{
                                                width: AppConstants.pixelNormalize(94),
                                                height: AppConstants.pixelNormalize(77),
                                                marginTop: AppConstants.pixelNormalize(11),
                                                marginLeft: AppConstants.pixelNormalize(26),
                                            }} ></Image>
                                        <Text style={{
                                            marginTop: AppConstants.pixelNormalize(3),
                                            fontSize: AppConstants.pixelNormalize(12),
                                            textAlign: 'center',
                                            color: '#000000'
                                        }}>Pomegranate</Text>
                                        <View style={styles.addContainer}>
                                            <Text style={{
                                                marginTop: AppConstants.pixelNormalize(12),
                                                marginLeft: AppConstants.pixelNormalize(10),
                                                fontSize: AppConstants.pixelNormalize(12),
                                                color: '#000000'
                                            }}>1kg - $18</Text>
                                            <TouchableOpacity onPress={() => {
                                                props.navigation.navigate('Fifth');
                                            }}>
                                                <View style={styles.Add1}>
                                                    <Text style={{
                                                        fontSize: AppConstants.pixelNormalize(10),
                                                        color: '#FF5882'
                                                    }}>Add</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.FruitContainers2}>
                                    <View style={styles.fruitCont3}>
                                        <Image source={require('../assets/Grape.png')}
                                            style={{
                                                width: AppConstants.pixelNormalize(84),
                                                height: AppConstants.pixelNormalize(79),
                                                marginTop: AppConstants.pixelNormalize(3),
                                                marginLeft: AppConstants.pixelNormalize(31),
                                            }} ></Image>
                                        <Text style={{
                                            marginTop: AppConstants.pixelNormalize(11),
                                            fontSize: AppConstants.pixelNormalize(12),
                                            textAlign: 'center',
                                            color: '#000000'
                                        }}>White Grape</Text>
                                        <View style={styles.addContainer}>
                                            <Text style={{
                                                marginTop: AppConstants.pixelNormalize(12),
                                                marginLeft: AppConstants.pixelNormalize(10),
                                                fontSize: AppConstants.pixelNormalize(12),
                                                color: '#000000'
                                            }}>1kg - $22</Text>
                                            <TouchableOpacity onPress={() => {
                                                props.navigation.navigate('Fifth');
                                            }}>
                                                <View style={styles.Add1}>
                                                    <Text style={{
                                                        fontSize: AppConstants.pixelNormalize(10),
                                                        color: '#FF5882'
                                                    }}>Add</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.fruitCont4}>
                                        <Image source={require('../assets/strawberry3.png')}
                                            style={{
                                                width: AppConstants.pixelNormalize(102),
                                                height: AppConstants.pixelNormalize(102),
                                                marginTop: AppConstants.pixelNormalize(-5),
                                                marginLeft: AppConstants.pixelNormalize(22),
                                            }} ></Image>
                                        <Text style={{
                                            marginTop: AppConstants.pixelNormalize(-5),
                                            fontSize: AppConstants.pixelNormalize(12),
                                            textAlign: 'center',
                                            color: '#000000'
                                        }}>Strawberry</Text>
                                        <View style={styles.addContainer}>
                                            <Text style={{
                                                marginTop: AppConstants.pixelNormalize(13),
                                                marginLeft: AppConstants.pixelNormalize(10),
                                                fontSize: AppConstants.pixelNormalize(12),
                                                color: '#000000'
                                            }}>1kg - $35</Text>
                                            <TouchableOpacity onPress={() => {
                                                props.navigation.navigate('Fifth');
                                            }}>
                                                <View style={styles.Add1}>
                                                    <Text style={{
                                                        fontSize: AppConstants.pixelNormalize(10),
                                                        color: '#FF5882'
                                                    }}>Add</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
                <View style={styles.LastContainer}>
                    <View style={styles.BasicContainer}>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('Third');
                        }}>
                            <View style={styles.homeContainer1}>
                                <Entypo name="home" size={16} color="#FFFFFF"
                                    style={{
                                        // width: AppConstants.pixelNormalize(14),
                                        // height: AppConstants.pixelNormalize(13),
                                        marginTop: AppConstants.pixelNormalize(8),
                                        marginLeft: AppConstants.pixelNormalize(12)
                                    }} />
                                <Text style={{
                                    marginTop: AppConstants.pixelNormalize(7),
                                    marginLeft: AppConstants.pixelNormalize(6),
                                    fontSize: AppConstants.pixelNormalize(14),
                                    color: '#FFF'
                                }}>Home</Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity>
                                <Image source={require('../assets/Pay2.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(24),
                                        height: AppConstants.pixelNormalize(21),
                                        marginTop: AppConstants.pixelNormalize(16),
                                        marginLeft: AppConstants.pixelNormalize(35),
                                    }} ></Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image source={require('../assets/Shop4.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(20),
                                        height: AppConstants.pixelNormalize(20),
                                        marginTop: AppConstants.pixelNormalize(18),
                                        marginLeft: AppConstants.pixelNormalize(35),
                                    }} ></Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image source={require('../assets/percent.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(20),
                                        height: AppConstants.pixelNormalize(21),
                                        marginTop: AppConstants.pixelNormalize(18),
                                        marginLeft: AppConstants.pixelNormalize(35),
                                    }} ></Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image source={require('../assets/Setting.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(21),
                                        height: AppConstants.pixelNormalize(21),
                                        marginTop: AppConstants.pixelNormalize(18),
                                        marginLeft: AppConstants.pixelNormalize(35),
                                    }} ></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
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
    //                         loadMyShop();
    //                     }}
    //                 />
    //             )}
    //             {!loading && !error && renderSelection()}
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
    Text: {
        marginTop: AppConstants.pixelNormalize(-26),
        marginLeft: AppConstants.pixelNormalize(63),
    },
    scroll: {
        height: AppConstants.pixelNormalize(670),
        marginTop: AppConstants.pixelNormalize(5),
    },
    container: {
        width: AppConstants.pixelNormalize(375),
        height: AppConstants.pixelNormalize(189),
        marginTop: AppConstants.pixelNormalize(5),
        backgroundColor: 'yellow'
    },
    ShopNow: {
        height: AppConstants.pixelNormalize(23),
        width: AppConstants.pixelNormalize(76),
        marginTop: AppConstants.pixelNormalize(10),
        marginLeft: AppConstants.pixelNormalize(49),
        backgroundColor: '#FF3464',
        borderTopLeftRadius: AppConstants.pixelNormalize(8),
        borderBottomRightRadius: AppConstants.pixelNormalize(8),
        alignItems: 'center',
        justifyContent: 'center'
    },
    centerContainer: {
        flexDirection: 'row'
    },
    rowMainContainer: {
        flexDirection: 'row'
    },
    rowContainer1: {
        height: AppConstants.pixelNormalize(35),
        width: AppConstants.pixelNormalize(85),
        marginTop: AppConstants.pixelNormalize(10),
        marginLeft: AppConstants.pixelNormalize(25),
        backgroundColor: '#FF3464',
        borderTopLeftRadius: AppConstants.pixelNormalize(10),
        borderBottomRightRadius: AppConstants.pixelNormalize(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowContainer2: {
        height: AppConstants.pixelNormalize(35),
        width: AppConstants.pixelNormalize(85),
        marginTop: AppConstants.pixelNormalize(10),
        marginLeft: AppConstants.pixelNormalize(25),
        backgroundColor: '#F5F6FF',
        borderTopLeftRadius: AppConstants.pixelNormalize(10),
        borderBottomRightRadius: AppConstants.pixelNormalize(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowContainer3: {
        height: AppConstants.pixelNormalize(35),
        width: AppConstants.pixelNormalize(85),
        marginTop: AppConstants.pixelNormalize(10),
        marginLeft: AppConstants.pixelNormalize(25),
        backgroundColor: '#F5F6FF',
        borderTopLeftRadius: AppConstants.pixelNormalize(10),
        borderBottomRightRadius: AppConstants.pixelNormalize(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowContainer4: {
        height: AppConstants.pixelNormalize(35),
        width: AppConstants.pixelNormalize(105),
        marginTop: AppConstants.pixelNormalize(10),
        marginLeft: AppConstants.pixelNormalize(25),
        backgroundColor: '#F5F6FF',
        borderTopLeftRadius: AppConstants.pixelNormalize(10),
        borderBottomRightRadius: AppConstants.pixelNormalize(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    dash: {
        flexDirection: 'row'
    },
    row: {
        flexDirection: 'row'
    },
    Stable: {
        height: AppConstants.pixelNormalize(88),
    },
    smallCircle1: {
        width: AppConstants.pixelNormalize(33),
        height: AppConstants.pixelNormalize(33),
        borderRadius: AppConstants.pixelNormalize(33),
        backgroundColor: '#F5F6FF',
        marginTop: AppConstants.pixelNormalize(5),
        marginLeft: AppConstants.pixelNormalize(52),
        shadowColor: '#0000000F',
        elevation: 1
    },
    smallCircle2: {
        width: AppConstants.pixelNormalize(33),
        height: AppConstants.pixelNormalize(33),
        borderRadius: AppConstants.pixelNormalize(33),
        backgroundColor: '#F5F6FF',
        marginTop: AppConstants.pixelNormalize(5),
        marginLeft: AppConstants.pixelNormalize(77),
        shadowColor: '#0000000F',
        elevation: 1
    },
    smallCircle3: {
        width: AppConstants.pixelNormalize(33),
        height: AppConstants.pixelNormalize(33),
        borderRadius: AppConstants.pixelNormalize(33),
        backgroundColor: '#F5F6FF',
        marginTop: AppConstants.pixelNormalize(5),
        marginLeft: AppConstants.pixelNormalize(76),
        shadowColor: '#0000000F',
        elevation: 1
    },
    smallCircle4: {
        width: AppConstants.pixelNormalize(33),
        height: AppConstants.pixelNormalize(33),
        borderRadius: AppConstants.pixelNormalize(33),
        backgroundColor: '#F5F6FF',
        marginTop: AppConstants.pixelNormalize(5),
        marginLeft: AppConstants.pixelNormalize(87),
        shadowColor: '#0000000F',
        elevation: 1
    },
    smallCircle5: {
        width: AppConstants.pixelNormalize(33),
        height: AppConstants.pixelNormalize(33),
        borderRadius: AppConstants.pixelNormalize(33),
        backgroundColor: '#F5F6FF',
        marginTop: AppConstants.pixelNormalize(5),
        marginLeft: AppConstants.pixelNormalize(94),
        shadowColor: '#0000000F',
        elevation: 1
    },
    smallCircle6: {
        width: AppConstants.pixelNormalize(33),
        height: AppConstants.pixelNormalize(33),
        borderRadius: AppConstants.pixelNormalize(33),
        backgroundColor: '#F5F6FF',
        marginTop: AppConstants.pixelNormalize(5),
        marginLeft: AppConstants.pixelNormalize(100),
        shadowColor: '#0000000F',
        elevation: 1
    },

    FruitContainers: {
        flexDirection: 'row'
    },
    FruitContainers2: {
        flexDirection: 'row'
    },
    addContainer: {
        flexDirection: 'row'
    },
    Add1: {
        height: AppConstants.pixelNormalize(19),
        width: AppConstants.pixelNormalize(42),
        marginTop: AppConstants.pixelNormalize(11),
        marginLeft: AppConstants.pixelNormalize(32),
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: AppConstants.pixelNormalize(10),
        borderBottomRightRadius: AppConstants.pixelNormalize(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    basketIcon: {
        width: AppConstants.pixelNormalize(54),
        height: AppConstants.pixelNormalize(61),
        borderRadius: AppConstants.pixelNormalize(60),
        marginTop: AppConstants.pixelNormalize(-10),
        marginLeft: AppConstants.pixelNormalize(105),
        backgroundColor: '#FFF4B2',

    },
    fruitCont1: {
        width: AppConstants.pixelNormalize(145),
        height: AppConstants.pixelNormalize(150),
        marginTop: AppConstants.pixelNormalize(17),
        marginLeft: AppConstants.pixelNormalize(29),
        backgroundColor: '#FFFBE4',
        borderRadius: 10,
        overflow: 'hidden'
    },
    fruitCont2: {
        width: AppConstants.pixelNormalize(145),
        height: AppConstants.pixelNormalize(150),
        marginTop: AppConstants.pixelNormalize(17),
        marginLeft: AppConstants.pixelNormalize(29),
        backgroundColor: '#FFEFF3',
        borderRadius: 10,
    },
    fruitCont3: {
        width: AppConstants.pixelNormalize(145),
        height: AppConstants.pixelNormalize(150),
        marginTop: AppConstants.pixelNormalize(17),
        marginLeft: AppConstants.pixelNormalize(29),
        backgroundColor: '#F7FFD4',
        borderRadius: 10,
    },
    fruitCont4: {
        width: AppConstants.pixelNormalize(145),
        height: AppConstants.pixelNormalize(150),
        marginTop: AppConstants.pixelNormalize(17),
        marginLeft: AppConstants.pixelNormalize(29),
        backgroundColor: '#F8F8FF',
        borderRadius: 10,
    },
    LastContainer: {
        width: AppConstants.pixelNormalize(375),
        height: AppConstants.pixelNormalize(55),
        // marginTop: AppConstants.pixelNormalize(-3),
        backgroundColor: '#FFFFFF',
    },
    homeContainer1: {
        height: AppConstants.pixelNormalize(35),
        width: AppConstants.pixelNormalize(85),
        marginTop: AppConstants.pixelNormalize(10),
        marginLeft: AppConstants.pixelNormalize(25),
        backgroundColor: '#FF3464',
        borderTopLeftRadius: AppConstants.pixelNormalize(4),
        borderTopRightRadius: AppConstants.pixelNormalize(14),
        borderBottomRightRadius: AppConstants.pixelNormalize(4),
        borderBottomLeftRadius: AppConstants.pixelNormalize(14),
        flexDirection: 'row'
    },
    BasicContainer: {
        flexDirection: 'row'
    },
    backgroundColor: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
    }
});
