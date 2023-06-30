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
// import { AntDesign } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Dash from 'react-native-dash';
import Colors from './../constants/Colors';
// import PleaseWaitComponent from './../component/PleaseWaitComponent';
// import TryAgainComponent from './../component/TryAgainComponent';
// import { useDispatch, useSelector } from 'react-redux';
// import { loadImages } from "../stores/actions/images";
// import { loadThumbnails } from "../stores/actions/thumbnails";
// import { loadProducts } from "../stores/actions/products";
// import { loadProductTypes } from "../stores/actions/product_types";
// import { loadOrders } from "../stores/actions/orders";
// import { loadOrderStatuses } from "../stores/actions/order_statuses";
// import { loadAddresses } from "../stores/actions/addresses";
// import { loadShops } from "../stores/actions/shops";
// import { loadShopStatuses } from "../stores/actions/shop_statuses";

export default function SixthScreen(props) {
    // const dispatch = useDispatch();
    //
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    //
    // const token = useSelector(state => state.auth.token);
    //
    // useEffect(() => {
    //     loadMyOrder();
    // }, []);
    //
    // const loadMyOrder = async () => {
    //     try {
    //         setError(null);
    //         setLoading(true);
    //         // await dispatch(loginUser('admin', 'admin@1234'));
    //         await dispatch(loadOrders());
    //         await dispatch(loadOrderStatuses());
    //         await dispatch(loadProducts());
    //         await dispatch(loadProductTypes());
    //         await dispatch(loadImages());
    //         await dispatch(loadAddresses());
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

    // const renderFinal = () => {
        return (
            <View style={styles.backgroundColor}>
                <View>
                    <View style={styles.MainContainer}>
                        <View style={styles.Curve} >
                            <TouchableOpacity onPress={() => {
                                props.navigation.navigate('Fifth');
                            }}>
                                <AntDesign
                                    name="arrowleft"
                                    size={18}
                                    color="black"
                                    style={{
                                        marginTop: AppConstants.pixelNormalize(3),
                                        marginLeft: AppConstants.pixelNormalize(4),
                                    }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Image
                            source={require('../assets/Mask3.png')}
                            style={{
                                width: AppConstants.pixelNormalize(25),
                                height: AppConstants.pixelNormalize(25),
                                marginTop: AppConstants.pixelNormalize(-28),
                                marginLeft: AppConstants.pixelNormalize(330),
                            }}>
                        </Image>
                    </View>
                    <View style={styles.Text}>
                        <Text style={{
                            fontSize: AppConstants.pixelNormalize(17),
                            color: '#000000'
                        }}>Checkout and Address</Text>
                    </View>
                </View>
                <View style={styles.scroll}>
                    <ScrollView>
                        <View>
                            <View style={styles.box1}>
                                <Image
                                    source={require('../assets/orangefruit.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(50),
                                        height: AppConstants.pixelNormalize(41),
                                        marginTop: AppConstants.pixelNormalize(16),
                                        marginLeft: AppConstants.pixelNormalize(13),
                                    }}>
                                </Image>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        marginTop: AppConstants.pixelNormalize(-78),
                                        marginLeft: AppConstants.pixelNormalize(113),
                                        fontSize: AppConstants.pixelNormalize(14),
                                        color: '#000000'
                                    }}>Fresh Orange</Text>
                                <View style={styles.circle}>
                                    <Image
                                        source={require('../assets/trash.png')}
                                        style={{
                                            width: AppConstants.pixelNormalize(9),
                                            height: AppConstants.pixelNormalize(11),
                                        }} />
                                </View>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        marginTop: AppConstants.pixelNormalize(-59),
                                        marginLeft: AppConstants.pixelNormalize(113),
                                        fontSize: AppConstants.pixelNormalize(14),
                                        color: '#AAAAAA'
                                    }}>$14 - 1kg</Text>
                            </View>
                            <TouchableOpacity>
                                <View style={styles.rect1}>
                                    <Text style={{
                                        fontSize: AppConstants.pixelNormalize(11),
                                        color: '#000000'
                                    }}>500g</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.rect2}>
                                    <Text style={{
                                        fontSize: AppConstants.pixelNormalize(11),
                                        color: '#FFFFFF'
                                    }}>1kg</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.rect3}>
                                    <Text style={{
                                        fontSize: AppConstants.pixelNormalize(11),
                                        color: '#000000'
                                    }}>1.5kg</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.rect4}>
                                    <Text style={{
                                        fontSize: AppConstants.pixelNormalize(11),
                                        color: '#000000'
                                    }}>2kg</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={styles.box2}>
                                <Image
                                    source={require('../assets/pomegranate4.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(50),
                                        height: AppConstants.pixelNormalize(41),
                                        marginTop: AppConstants.pixelNormalize(16),
                                        marginLeft: AppConstants.pixelNormalize(13),
                                    }}>
                                </Image>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        marginTop: AppConstants.pixelNormalize(-78),
                                        marginLeft: AppConstants.pixelNormalize(113),
                                        fontSize: AppConstants.pixelNormalize(14),
                                        color: '#000000'
                                    }}>Fresh Pomegranate Fruit</Text>
                                <View style={styles.circle}>
                                    <Image
                                        source={require('../assets/trash.png')}
                                        style={{
                                            width: AppConstants.pixelNormalize(9),
                                            height: AppConstants.pixelNormalize(11),
                                        }} />
                                </View>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        marginTop: AppConstants.pixelNormalize(-59),
                                        marginLeft: AppConstants.pixelNormalize(113),
                                        fontSize: AppConstants.pixelNormalize(14),
                                        color: '#AAAAAA'
                                    }}>$36 - 2kg</Text>
                            </View>
                            <TouchableOpacity>
                                <View style={styles.rect1}>
                                    <Text style={{
                                        fontSize: AppConstants.pixelNormalize(11),
                                        color: '#000000'
                                    }}>500g</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.rect5}>
                                    <Text style={{
                                        fontSize: AppConstants.pixelNormalize(11),
                                        color: '#000000'
                                    }}>1kg</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.rect3}>
                                    <Text style={{
                                        fontSize: AppConstants.pixelNormalize(11),
                                        color: '#000000'
                                    }}>1.5kg</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.rect6}>
                                    <Text style={{
                                        fontSize: AppConstants.pixelNormalize(11),
                                        color: '#FFFFFF'
                                    }}>2kg</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.text}>
                            <Text style={{
                                marginTop: AppConstants.pixelNormalize(26),
                                marginLeft: AppConstants.pixelNormalize(22),
                                fontSize: AppConstants.pixelNormalize(18),
                                color: '#000000'
                            }}>Address</Text>
                            <Text style={{
                                marginTop: AppConstants.pixelNormalize(32),
                                marginLeft: AppConstants.pixelNormalize(122),
                                fontSize: AppConstants.pixelNormalize(12),
                                color: '#AAAAAA'
                            }}>Change Delivery Location</Text>
                        </View>
                        <View style={styles.rectangle}>
                            <View style={styles.boxCircle}>
                                <Image source={require('../assets/house.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(16),
                                        height: AppConstants.pixelNormalize(16),
                                        marginTop: AppConstants.pixelNormalize(10),
                                        marginLeft: AppConstants.pixelNormalize(10),
                                    }}></Image>
                            </View>
                            <Dash dashColor={'#707070'} dashThickness={1}
                                style={{
                                    height: 16,
                                    flexDirection: 'column',
                                    marginLeft: AppConstants.pixelNormalize(30),
                                }} />
                            <View style={styles.boxCircle2}>
                                <Image source={require('../assets/house1.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(16),
                                        height: AppConstants.pixelNormalize(16),
                                        marginTop: AppConstants.pixelNormalize(10),
                                        marginLeft: AppConstants.pixelNormalize(10),
                                    }}></Image>
                            </View>
                            <View>
                                <View>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(-90),
                                        marginLeft: AppConstants.pixelNormalize(63),
                                        fontSize: AppConstants.pixelNormalize(14),
                                        color: '#2E1610'
                                    }}>Coffee Shop Name</Text>
                                </View>
                                <View>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(-65),
                                        marginLeft: AppConstants.pixelNormalize(63),
                                        fontSize: AppConstants.pixelNormalize(10),
                                        color: '#AAAAAA'
                                    }}>2 items - Expected Delivery 15mints</Text>
                                </View>
                                <View>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(-35),
                                        marginLeft: AppConstants.pixelNormalize(63),
                                        fontSize: AppConstants.pixelNormalize(14),
                                        color: '#2E1610'
                                    }}>45/A Godfrey Road, New York, US</Text>
                                </View>
                                <View>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(-10),
                                        marginLeft: AppConstants.pixelNormalize(63),
                                        fontSize: AppConstants.pixelNormalize(10),
                                        color: '#AAAAAA'
                                    }}>Home</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={{
                                marginTop: AppConstants.pixelNormalize(25),
                                marginLeft: AppConstants.pixelNormalize(20),
                                fontSize: AppConstants.pixelNormalize(18),
                                color: '#000000'
                            }}>Bill Details</Text>
                        </View>
                        <View style={styles.Combine}>
                            <View style={styles.billContainer}>
                                <Text style={{
                                    marginTop: AppConstants.pixelNormalize(-4),
                                    // marginLeft: AppConstants.pixelNormalize(20),
                                    fontSize: AppConstants.pixelNormalize(14),
                                    color: '#6F7081'
                                }}>Item Total</Text>
                                <Text style={{
                                    marginTop: AppConstants.pixelNormalize(6),
                                    // marginLeft: AppConstants.pixelNormalize(20),
                                    fontSize: AppConstants.pixelNormalize(14),
                                    color: '#6F7081'
                                }}>Taxes and Charges</Text>
                                <Text style={{
                                    marginTop: AppConstants.pixelNormalize(6),
                                    // marginLeft: AppConstants.pixelNormalize(20),
                                    fontSize: AppConstants.pixelNormalize(14),
                                    color: '#6F7081'
                                }}>Delivery Fees</Text>
                                <View style={styles.coupon}>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(6),
                                        // marginLeft: AppConstants.pixelNormalize(20),
                                        fontSize: AppConstants.pixelNormalize(14),
                                        color: '#6F7081'
                                    }}>Coupon</Text>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(7),
                                        marginLeft: AppConstants.pixelNormalize(2),
                                        fontSize: AppConstants.pixelNormalize(13),
                                        color: '#AAAAAA'
                                    }}>(New User Coupon)</Text>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(9),
                                        marginLeft: AppConstants.pixelNormalize(2),
                                        fontSize: AppConstants.pixelNormalize(12),
                                        color: '#FF3464'
                                    }}>Change</Text>
                                </View>
                            </View>
                            <View style={styles.amountContainer}>
                                <Text style={{
                                    marginTop: AppConstants.pixelNormalize(-4),
                                    marginLeft: AppConstants.pixelNormalize(35),
                                    fontSize: AppConstants.pixelNormalize(14),
                                }}>$50</Text>
                                <Text style={{
                                    marginTop: AppConstants.pixelNormalize(6),
                                    marginLeft: AppConstants.pixelNormalize(42),
                                    fontSize: AppConstants.pixelNormalize(14),
                                }}>$0</Text>
                                <Text style={{
                                    marginTop: AppConstants.pixelNormalize(6),
                                    marginLeft: AppConstants.pixelNormalize(42),
                                    fontSize: AppConstants.pixelNormalize(14),
                                }}>$0</Text>
                                <Text style={{
                                    marginTop: AppConstants.pixelNormalize(8),
                                    marginLeft: AppConstants.pixelNormalize(17),
                                    fontSize: AppConstants.pixelNormalize(14),
                                }}>-$5.00</Text>
                            </View>
                        </View>
                        <Dash dashColor={'#C4D9EE'} dashThickness={1}
                            style={{
                                width: 312,
                                flexDirection: 'row',
                                marginLeft: AppConstants.pixelNormalize(20),
                            }} />
                        <View style={styles.pay}>
                            <Text style={{
                                marginTop: AppConstants.pixelNormalize(12),
                                marginLeft: AppConstants.pixelNormalize(20),
                                fontSize: AppConstants.pixelNormalize(15),
                                color: '#000000'
                            }}>To Pay</Text>
                            <Text style={{
                                marginTop: AppConstants.pixelNormalize(10),
                                marginLeft: AppConstants.pixelNormalize(228),
                                fontSize: AppConstants.pixelNormalize(15),
                                color: '#FF3464'
                            }}>$45.00</Text>
                        </View>
                        <View>
                            <View style={styles.totalPayContainer}>
                                <View style={styles.totalPay}>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(28),
                                        marginLeft: AppConstants.pixelNormalize(20),
                                        fontSize: AppConstants.pixelNormalize(18),
                                        color: '#000000'
                                    }}>Total Pay</Text>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(3),
                                        marginLeft: AppConstants.pixelNormalize(20),
                                        fontSize: AppConstants.pixelNormalize(14),
                                        color: '#FF3464'
                                    }}>$45.00</Text>
                                </View>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate('Seventh');
                                }}>
                                    <View style={styles.Continue}>
                                        <Text style={{
                                            fontSize: AppConstants.pixelNormalize(14),
                                            marginTop: AppConstants.pixelNormalize(10),
                                            marginLeft: AppConstants.pixelNormalize(12),
                                            color: '#FFF'
                                        }}>Continue to Pay</Text>
                                        <AntDesign
                                            name="right"
                                            size={16}
                                            color="#FFFFFF"
                                            style={{
                                                marginTop: AppConstants.pixelNormalize(13),
                                                marginLeft: AppConstants.pixelNormalize(8)
                                            }} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
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
    //                         loadMyOrder();
    //                     }}
    //                 />
    //             )}
    //             {!loading && !error && renderFinal()}
    //         </SafeAreaView>
    //     </>
    // );
};

const styles = StyleSheet.create({
    Curve: {
        width: AppConstants.pixelNormalize(39),
        height: AppConstants.pixelNormalize(35),
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
        marginTop: AppConstants.pixelNormalize(-29),
        marginLeft: AppConstants.pixelNormalize(72),
    },
    box1: {
        width: AppConstants.pixelNormalize(76),
        height: AppConstants.pixelNormalize(73),
        borderTopLeftRadius: AppConstants.pixelNormalize(10),
        borderTopRightRadius: AppConstants.pixelNormalize(10),
        borderBottomLeftRadius: AppConstants.pixelNormalize(10),
        borderBottomRightRadius: AppConstants.pixelNormalize(10),
        marginTop: AppConstants.pixelNormalize(14),
        marginLeft: AppConstants.pixelNormalize(20),
        backgroundColor: '#FFFBE4',
    },
    box2: {
        width: AppConstants.pixelNormalize(76),
        height: AppConstants.pixelNormalize(73),
        borderTopLeftRadius: AppConstants.pixelNormalize(10),
        borderTopRightRadius: AppConstants.pixelNormalize(10),
        borderBottomLeftRadius: AppConstants.pixelNormalize(10),
        borderBottomRightRadius: AppConstants.pixelNormalize(10),
        marginTop: AppConstants.pixelNormalize(34),
        marginLeft: AppConstants.pixelNormalize(20),
        backgroundColor: '#FFEFF3',
    },
    circle: {
        width: AppConstants.pixelNormalize(21),
        height: AppConstants.pixelNormalize(21),
        borderRadius: AppConstants.pixelNormalize(21),
        backgroundColor: '#FFEFF3',
        marginTop: AppConstants.pixelNormalize(-18),
        marginLeft: AppConstants.pixelNormalize(327),
        alignItems: 'center',
        justifyContent: 'center'
    },
    rect1: {
        width: AppConstants.pixelNormalize(50),
        height: AppConstants.pixelNormalize(26),
        borderTopLeftRadius: AppConstants.pixelNormalize(5),
        borderTopRightRadius: AppConstants.pixelNormalize(5),
        borderBottomLeftRadius: AppConstants.pixelNormalize(5),
        borderBottomRightRadius: AppConstants.pixelNormalize(5),
        marginTop: AppConstants.pixelNormalize(-27),
        marginLeft: AppConstants.pixelNormalize(113),
        backgroundColor: '#F5F6FF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rect2: {
        width: AppConstants.pixelNormalize(50),
        height: AppConstants.pixelNormalize(26),
        borderTopLeftRadius: AppConstants.pixelNormalize(5),
        borderTopRightRadius: AppConstants.pixelNormalize(5),
        borderBottomLeftRadius: AppConstants.pixelNormalize(5),
        borderBottomRightRadius: AppConstants.pixelNormalize(5),
        marginTop: AppConstants.pixelNormalize(-26),
        marginLeft: AppConstants.pixelNormalize(172),
        backgroundColor: '#FF3464',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rect3: {
        width: AppConstants.pixelNormalize(50),
        height: AppConstants.pixelNormalize(26),
        borderTopLeftRadius: AppConstants.pixelNormalize(5),
        borderTopRightRadius: AppConstants.pixelNormalize(5),
        borderBottomLeftRadius: AppConstants.pixelNormalize(5),
        borderBottomRightRadius: AppConstants.pixelNormalize(5),
        marginTop: AppConstants.pixelNormalize(-26),
        marginLeft: AppConstants.pixelNormalize(232),
        backgroundColor: '#F5F6FF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rect4: {
        width: AppConstants.pixelNormalize(50),
        height: AppConstants.pixelNormalize(26),
        borderTopLeftRadius: AppConstants.pixelNormalize(5),
        borderTopRightRadius: AppConstants.pixelNormalize(5),
        borderBottomLeftRadius: AppConstants.pixelNormalize(5),
        borderBottomRightRadius: AppConstants.pixelNormalize(5),
        marginTop: AppConstants.pixelNormalize(-26),
        marginLeft: AppConstants.pixelNormalize(292),
        backgroundColor: '#f5f6ff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rect5: {
        width: AppConstants.pixelNormalize(50),
        height: AppConstants.pixelNormalize(26),
        borderTopLeftRadius: AppConstants.pixelNormalize(5),
        borderTopRightRadius: AppConstants.pixelNormalize(5),
        borderBottomLeftRadius: AppConstants.pixelNormalize(5),
        borderBottomRightRadius: AppConstants.pixelNormalize(5),
        marginTop: AppConstants.pixelNormalize(-26),
        marginLeft: AppConstants.pixelNormalize(172),
        backgroundColor: '#F5F6FF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rect6: {
        width: AppConstants.pixelNormalize(50),
        height: AppConstants.pixelNormalize(26),
        borderTopLeftRadius: AppConstants.pixelNormalize(5),
        borderTopRightRadius: AppConstants.pixelNormalize(5),
        borderBottomLeftRadius: AppConstants.pixelNormalize(5),
        borderBottomRightRadius: AppConstants.pixelNormalize(5),
        marginTop: AppConstants.pixelNormalize(-26),
        marginLeft: AppConstants.pixelNormalize(292),
        backgroundColor: '#FF3464',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        flexDirection: 'row'
    },
    scroll: {
        marginTop: AppConstants.pixelNormalize(14),
        height: AppConstants.pixelNormalize(665),
    },
    rectangle: {
        height: AppConstants.pixelNormalize(110),
        width: AppConstants.pixelNormalize(328),
        marginTop: AppConstants.pixelNormalize(14),
        marginLeft: AppConstants.pixelNormalize(20),
        borderTopLeftRadius: AppConstants.pixelNormalize(10),
        borderTopRightRadius: AppConstants.pixelNormalize(10),
        borderBottomLeftRadius: AppConstants.pixelNormalize(10),
        borderBottomRightRadius: AppConstants.pixelNormalize(10),
        backgroundColor: '#F4F6F8'
    },
    boxCircle: {
        width: AppConstants.pixelNormalize(36),
        height: AppConstants.pixelNormalize(36),
        borderRadius: AppConstants.pixelNormalize(36),
        backgroundColor: '#FFFFFF',
        marginTop: AppConstants.pixelNormalize(11),
        marginLeft: AppConstants.pixelNormalize(13),
    },
    boxCircle2: {
        width: AppConstants.pixelNormalize(36),
        height: AppConstants.pixelNormalize(36),
        borderRadius: AppConstants.pixelNormalize(36),
        backgroundColor: '#FFFFFF',
        marginTop: AppConstants.pixelNormalize(0),
        marginLeft: AppConstants.pixelNormalize(13),
    },
    billContainer: {
        width: AppConstants.pixelNormalize(246),
        height: AppConstants.pixelNormalize(100),
        marginTop: AppConstants.pixelNormalize(15),
        marginLeft: AppConstants.pixelNormalize(20),
        backgroundColor: '#FFFFFF',
        flexDirection: 'column'
    },
    coupon: {
        flexDirection: 'row',
    },
    amountContainer: {
        width: AppConstants.pixelNormalize(62),
        height: AppConstants.pixelNormalize(100),
        marginTop: AppConstants.pixelNormalize(15),
        marginLeft: AppConstants.pixelNormalize(18),
        backgroundColor: '#FFFFFF',
        // flexDirection: 'column'
    },
    Combine: {
        flexDirection: 'row',
    },
    pay: {
        flexDirection: 'row',
    },
    totalPayContainer: {
        flexDirection: 'row'
    },
    Continue: {
        height: AppConstants.pixelNormalize(40),
        width: AppConstants.pixelNormalize(148),
        marginTop: AppConstants.pixelNormalize(33),
        marginLeft: AppConstants.pixelNormalize(101),
        backgroundColor: '#FF3464',
        borderTopLeftRadius: AppConstants.pixelNormalize(4),
        borderTopRightRadius: AppConstants.pixelNormalize(14),
        borderBottomLeftRadius: AppConstants.pixelNormalize(14),
        borderBottomRightRadius: AppConstants.pixelNormalize(4),
        flexDirection: 'row'
    },
    backgroundColor: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
    }
});
