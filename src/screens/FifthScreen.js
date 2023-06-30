import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, StatusBar, Platform, SafeAreaView } from 'react-native';
import * as AppConstants from '../constants/AppConstants';
// import { AntDesign } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
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

export default function FifthScreen(props) {
    // const dispatch = useDispatch();
    //
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    //
    // const token = useSelector(state => state.auth.token);
    //
    // useEffect(() => {
    //     loadMyProduct();
    // }, []);
    //
    // const loadMyProduct = async () => {
    //     try {
    //         setError(null);
    //         setLoading(true);
    //         // await dispatch(loginUser('admin', 'admin@1234'));
    //         await dispatch(loadProducts());
    //         await dispatch(loadProductTypes());
    //         await dispatch(loadImages());
    //         await dispatch(loadThumbnails());
    //         await dispatch(loadOrders());
    //         await dispatch(loadOrderStatuses());
    //         setLoading(false);
    //     } catch (e) {
    //         setError(e.message);
    //         setLoading(false);
    //         console.log('loginUser = ' + e.message);
    //     }
    // };

    // const renderCart = () => {
        return (
            <View style={styles.backgroundColor}>
                <View>
                    <View style={styles.MainContainer}>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('Fourth');
                        }}>
                            <View style={styles.Curve}>
                                <AntDesign
                                    name="arrowleft"
                                    size={18}
                                    color="black"
                                    style={{
                                        marginTop: AppConstants.pixelNormalize(3),
                                        marginLeft: AppConstants.pixelNormalize(4),
                                    }} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Image
                            source={require('../assets/Mask3.png')}
                            style={{
                                width: AppConstants.pixelNormalize(28),
                                height: AppConstants.pixelNormalize(28),
                                marginTop: AppConstants.pixelNormalize(-30),
                                marginLeft: AppConstants.pixelNormalize(325),
                            }}>
                        </Image>
                    </View>
                </View>
                <View>
                    <ScrollView>
                        <View style={styles.rectangle}>
                            <Image
                                source={require('../assets/orangefruit.png')}
                                style={{
                                    width: AppConstants.pixelNormalize(228),
                                    height: AppConstants.pixelNormalize(193),
                                    marginLeft: AppConstants.pixelNormalize(45)
                                }}>
                            </Image>
                            <View style={styles.text}>
                                <Text style={{
                                    fontSize: AppConstants.pixelNormalize(18),
                                    textAlign: 'center',
                                    color: '#000000'
                                }}>Fresh Orange</Text>
                            </View>
                            <View style={styles.$}>
                                <Text style={{
                                    fontSize: AppConstants.pixelNormalize(16),
                                    textAlign: 'center',
                                    color: '#000000'
                                }}>$14.00 - 1kg</Text>
                            </View>
                            <View style={styles.star}>
                                <Image source={require('../assets/star.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(15),
                                        height: AppConstants.pixelNormalize(15),
                                        marginLeft: AppConstants.pixelNormalize(4),
                                    }} />
                                <Image source={require('../assets/star.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(15),
                                        height: AppConstants.pixelNormalize(15),
                                        marginLeft: AppConstants.pixelNormalize(4),
                                    }} />
                                <Image source={require('../assets/star.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(15),
                                        height: AppConstants.pixelNormalize(15),
                                        marginLeft: AppConstants.pixelNormalize(4),
                                    }} />
                                <Image source={require('../assets/star.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(15),
                                        height: AppConstants.pixelNormalize(15),
                                        marginLeft: AppConstants.pixelNormalize(4),
                                    }} />
                                <Image source={require('../assets/star-half.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(15),
                                        height: AppConstants.pixelNormalize(15),
                                        marginLeft: AppConstants.pixelNormalize(4),
                                    }} />
                            </View>
                        </View>
                        <View style={styles.semicontainer}>
                            <View style={styles.circle}>
                                <Image source={require('../assets/cart2.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(35),
                                        height: AppConstants.pixelNormalize(30),
                                        marginTop: AppConstants.pixelNormalize(27),
                                        marginLeft: AppConstants.pixelNormalize(25),
                                    }}></Image>
                            </View>

                            <View style={styles.combine}>
                                <TouchableOpacity>
                                    <View style={styles.rect1}>
                                        <Text style={{
                                            marginTop: AppConstants.pixelNormalize(5),
                                            marginLeft: AppConstants.pixelNormalize(14),
                                            fontSize: AppConstants.pixelNormalize(11),
                                            color: '#000000'
                                        }}>500g</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.rect2}>
                                        <Text style={{
                                            marginTop: AppConstants.pixelNormalize(5),
                                            marginLeft: AppConstants.pixelNormalize(18),
                                            fontSize: AppConstants.pixelNormalize(11),
                                            color: '#FFFFFF'
                                        }}>1kg</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.rect3}>
                                        <Text style={{
                                            marginTop: AppConstants.pixelNormalize(5),
                                            marginLeft: AppConstants.pixelNormalize(14),
                                            fontSize: AppConstants.pixelNormalize(11),
                                            color: '#000000'
                                        }}>1.5kg</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.rect4}>
                                        <Text style={{
                                            marginTop: AppConstants.pixelNormalize(5),
                                            marginLeft: AppConstants.pixelNormalize(18),
                                            fontSize: AppConstants.pixelNormalize(11),
                                            color: '#000000'
                                        }}>2kg</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.row}>
                                <TouchableOpacity>
                                    <View style={styles.smallCircle1}>
                                        <Image source={require('../assets/Grape.png')}
                                            style={{
                                                width: AppConstants.pixelNormalize(32),
                                                height: AppConstants.pixelNormalize(30),
                                                marginTop: AppConstants.pixelNormalize(6),
                                                marginLeft: AppConstants.pixelNormalize(8),
                                            }} ></Image>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.smallCircle2}>
                                        <Image source={require('../assets/strawberry3.png')}
                                            style={{
                                                width: AppConstants.pixelNormalize(35),
                                                height: AppConstants.pixelNormalize(35),
                                                marginTop: AppConstants.pixelNormalize(6),
                                                marginLeft: AppConstants.pixelNormalize(6),
                                            }} ></Image>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.smallCircle3}>
                                        <Image source={require('../assets/pomegranate4.png')}
                                            style={{
                                                width: AppConstants.pixelNormalize(32),
                                                height: AppConstants.pixelNormalize(30),
                                                marginTop: AppConstants.pixelNormalize(8),
                                                marginLeft: AppConstants.pixelNormalize(6),
                                            }} ></Image>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate('Sixth');
                                }}>
                                    <View style={styles.Checkout}>
                                        <Text style={{
                                            fontSize: AppConstants.pixelNormalize(14),
                                            marginTop: AppConstants.pixelNormalize(9),
                                            marginLeft: AppConstants.pixelNormalize(9),
                                            color: '#FFF'
                                        }}>Checkout</Text>
                                        <AntDesign
                                            name="right"
                                            size={16}
                                            color="#FFFFFF"
                                            style={{
                                                marginTop: AppConstants.pixelNormalize(11),
                                                marginLeft: AppConstants.pixelNormalize(6)
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
    //                         loadMyProduct();
    //                     }}
    //                 />
    //             )}
    //             {!loading && !error && renderCart()}
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
    rectangle: {
        height: AppConstants.pixelNormalize(400),
        width: AppConstants.pixelNormalize(309),
        marginTop: AppConstants.pixelNormalize(25),
        marginLeft: AppConstants.pixelNormalize(31),
    },
    text: {
        marginTop: AppConstants.pixelNormalize(29),
    },
    $: {
        marginTop: AppConstants.pixelNormalize(11),
    },
    star: {
        flexDirection: 'row',
        marginTop: AppConstants.pixelNormalize(10),
        justifyContent: 'center',
    },
    semicontainer: {
        marginTop: AppConstants.pixelNormalize(30),
        width: AppConstants.pixelNormalize(376),
        height: AppConstants.pixelNormalize(250),
        borderTopLeftRadius: AppConstants.pixelNormalize(180),
        borderTopRightRadius: AppConstants.pixelNormalize(180),
        backgroundColor: '#FFEFF3',
    },
    circle: {
        width: AppConstants.pixelNormalize(84),
        height: AppConstants.pixelNormalize(84),
        borderRadius: AppConstants.pixelNormalize(84),
        backgroundColor: '#FFFFFF',
        marginTop: AppConstants.pixelNormalize(-30),
        marginLeft: AppConstants.pixelNormalize(144),
        shadowColor: '#00000014',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.25,
        elevation: 2,
    },
    combine: {
        flexDirection: 'row'
    },
    rect1: {
        width: AppConstants.pixelNormalize(53),
        height: AppConstants.pixelNormalize(26),
        borderTopLeftRadius: AppConstants.pixelNormalize(5),
        borderTopRightRadius: AppConstants.pixelNormalize(5),
        borderBottomLeftRadius: AppConstants.pixelNormalize(5),
        borderBottomRightRadius: AppConstants.pixelNormalize(5),
        marginTop: AppConstants.pixelNormalize(28),
        marginLeft: AppConstants.pixelNormalize(65),
        backgroundColor: '#FFFFFF'
    },
    rect2: {
        width: AppConstants.pixelNormalize(53),
        height: AppConstants.pixelNormalize(26),
        borderTopLeftRadius: AppConstants.pixelNormalize(5),
        borderTopRightRadius: AppConstants.pixelNormalize(5),
        borderBottomLeftRadius: AppConstants.pixelNormalize(5),
        borderBottomRightRadius: AppConstants.pixelNormalize(5),
        marginTop: AppConstants.pixelNormalize(28),
        marginLeft: AppConstants.pixelNormalize(10),
        backgroundColor: '#FF3464'
    },
    rect3: {
        width: AppConstants.pixelNormalize(53),
        height: AppConstants.pixelNormalize(26),
        borderTopLeftRadius: AppConstants.pixelNormalize(5),
        borderTopRightRadius: AppConstants.pixelNormalize(5),
        borderBottomLeftRadius: AppConstants.pixelNormalize(5),
        borderBottomRightRadius: AppConstants.pixelNormalize(5),
        marginTop: AppConstants.pixelNormalize(28),
        marginLeft: AppConstants.pixelNormalize(10),
        backgroundColor: '#FFFFFF'
    },
    rect4: {
        width: AppConstants.pixelNormalize(53),
        height: AppConstants.pixelNormalize(26),
        borderTopLeftRadius: AppConstants.pixelNormalize(5),
        borderTopRightRadius: AppConstants.pixelNormalize(5),
        borderBottomLeftRadius: AppConstants.pixelNormalize(5),
        borderBottomRightRadius: AppConstants.pixelNormalize(5),
        marginTop: AppConstants.pixelNormalize(28),
        marginLeft: AppConstants.pixelNormalize(10),
        backgroundColor: '#FFFFFF'
    },
    row: {
        flexDirection: 'row'
    },
    smallCircle1: {
        width: AppConstants.pixelNormalize(45),
        height: AppConstants.pixelNormalize(45),
        borderRadius: AppConstants.pixelNormalize(45),
        backgroundColor: '#FFFFFF',
        marginTop: AppConstants.pixelNormalize(33),
        marginLeft: AppConstants.pixelNormalize(25),
    },
    smallCircle2: {
        width: AppConstants.pixelNormalize(45),
        height: AppConstants.pixelNormalize(45),
        borderRadius: AppConstants.pixelNormalize(45),
        backgroundColor: '#FFFFFF',
        marginTop: AppConstants.pixelNormalize(33),
        marginLeft: AppConstants.pixelNormalize(21),
    },
    smallCircle3: {
        width: AppConstants.pixelNormalize(45),
        height: AppConstants.pixelNormalize(45),
        borderRadius: AppConstants.pixelNormalize(45),
        backgroundColor: '#FFFFFF',
        marginTop: AppConstants.pixelNormalize(33),
        marginLeft: AppConstants.pixelNormalize(20),
    },
    Checkout: {
        height: AppConstants.pixelNormalize(40),
        width: AppConstants.pixelNormalize(95),
        marginTop: AppConstants.pixelNormalize(35),
        marginLeft: AppConstants.pixelNormalize(46),
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
