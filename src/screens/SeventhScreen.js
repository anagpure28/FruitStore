import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as AppConstants from '../constants/AppConstants';
import RoundCheckbox from 'react-native-round-checkbox';

export default function SeventhScreen(props) {
    const [isTick4, setIsTick4] = useState(false);
    const [isTick2, setIsTick2] = useState(false);
    const [isTick3, setIsTick3] = useState(false);
    return (
        <View style={styles.backgroundColor}>
            <View style={styles.MainContainer}>
                <View style={styles.Curve} >
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate('Sixth');
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
                <View style={styles.Text}>
                    <Text style={{
                        fontSize: AppConstants.pixelNormalize(18),
                        marginTop: AppConstants.pixelNormalize(-22),
                        color: '#000000'
                        //                        width: AppConstants.pixelNormalize(170),
                        //                        height: AppConstants.pixelNormalize(21),
                    }}>Payment Method</Text>
                </View>
                <View>
                    <Image
                        source={require('../assets/Mask3.png')}
                        style={{
                            width: AppConstants.pixelNormalize(25),
                            height: AppConstants.pixelNormalize(25),
                            marginTop: AppConstants.pixelNormalize(18),
                            marginLeft: AppConstants.pixelNormalize(110),
                        }}>
                    </Image>
                </View>
            </View>
            <View style={styles.BigContainer}>
                <ScrollView>
                    <View style={styles.container1}>
                        <View style={styles.combine}>
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
                                <Text style={{
                                    fontSize: AppConstants.pixelNormalize(16),
                                    marginTop: AppConstants.pixelNormalize(20),
                                    marginLeft: AppConstants.pixelNormalize(25),
                                    color: '#000000'
                                }}>Fresh Orange</Text>
                                <Text style={{
                                    fontSize: AppConstants.pixelNormalize(16),
                                    marginTop: AppConstants.pixelNormalize(5),
                                    marginLeft: AppConstants.pixelNormalize(25),
                                    color: '#AAAAAA'
                                }}>$70 - 5kg</Text>
                            </View>
                        </View>

                    </View>
                    <View>
                        <Text style={{
                            marginTop: AppConstants.pixelNormalize(15),
                            marginLeft: AppConstants.pixelNormalize(15),
                            fontSize: AppConstants.pixelNormalize(15),
                            color: '#000000'
                        }}>Amount to Pay - $70</Text>
                    </View>
                    <View style={styles.container2}>
                        <View style={styles.combine}>
                            <View style={styles.checkIcon}>
                                <RoundCheckbox
                                    size={20}
                                    borderColor={'#B9B9B9'}
                                    backgroundColor={"#000000"}
                                    iconColor={'white'}
                                    checked={isTick4}
                                    onValueChange={checked => setIsTick4(checked)}
                                />
                                <View>
                                    <View>
                                        <Text style={{
                                            fontSize: AppConstants.pixelNormalize(16),
                                            marginTop: AppConstants.pixelNormalize(-30),
                                            marginLeft: AppConstants.pixelNormalize(35),
                                            color: '#000000'
                                        }}>Cash on Delivery</Text>
                                    </View>
                                    <View>
                                        <Text style={{
                                            fontSize: AppConstants.pixelNormalize(16),
                                            // marginTop: AppConstants.pixelNormalize(5),
                                            marginLeft: AppConstants.pixelNormalize(35),
                                            color: '#AAAAAA'
                                        }}>Pay while drop a Delivery</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container3}>
                        <View style={styles.combine}>
                            <View style={styles.checkIcon}>
                                <RoundCheckbox
                                    size={20}
                                    borderColor={'#B9B9B9'}
                                    backgroundColor={"#000000"}
                                    iconColor={'white'}
                                    checked={isTick2}
                                    onValueChange={checked => setIsTick2(checked)}
                                />
                                <View>
                                    <View>
                                        <Text style={{
                                            fontSize: AppConstants.pixelNormalize(16),
                                            marginTop: AppConstants.pixelNormalize(-30),
                                            marginLeft: AppConstants.pixelNormalize(35),
                                            color: '#000000'
                                        }}>Net Banking</Text>
                                    </View>
                                    <View>
                                        <Text style={{
                                            fontSize: AppConstants.pixelNormalize(16),
                                            // marginTop: AppConstants.pixelNormalize(5),
                                            marginLeft: AppConstants.pixelNormalize(35),
                                            color: '#AAAAAA'
                                        }}>Pay via Internet Banking</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container4}>
                        <View style={styles.combine}>
                            <View style={styles.checkIcon}>
                                <RoundCheckbox
                                    size={20}
                                    borderColor={'#B9B9B9'}
                                    backgroundColor={"#000000"}
                                    iconColor={'white'}
                                    checked={isTick3}
                                    onValueChange={checked => setIsTick3(checked)}
                                />
                                <View>
                                    <View>
                                        <Text style={{
                                            fontSize: AppConstants.pixelNormalize(16),
                                            marginTop: AppConstants.pixelNormalize(-30),
                                            marginLeft: AppConstants.pixelNormalize(35),
                                            color: '#000000'
                                        }}>Pay in Wallet</Text>
                                    </View>
                                    <View>
                                        <Text style={{
                                            fontSize: AppConstants.pixelNormalize(16),
                                            // marginTop: AppConstants.pixelNormalize(-1),
                                            marginLeft: AppConstants.pixelNormalize(35),
                                            color: '#AAAAAA'
                                        }}>Pay via Your Wallet Balance</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{
                            marginTop: AppConstants.pixelNormalize(15),
                            marginLeft: AppConstants.pixelNormalize(15),
                            fontSize: AppConstants.pixelNormalize(15),
                            color: '#000000'
                        }}>Coupon</Text>
                    </View>
                    <View style={styles.container5}>
                        <View style={styles.combine}>
                            <View style={styles.coupon}>
                                <Image source={require('../assets/percent.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(25),
                                        height: AppConstants.pixelNormalize(25),
                                        marginTop: AppConstants.pixelNormalize(32),
                                        marginLeft: AppConstants.pixelNormalize(32),
                                    }} ></Image>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: AppConstants.pixelNormalize(16),
                                    marginTop: AppConstants.pixelNormalize(20),
                                    marginLeft: AppConstants.pixelNormalize(25),
                                    color: '#000000'
                                }}>NewUser</Text>
                                <Text style={{
                                    fontSize: AppConstants.pixelNormalize(16),
                                    marginTop: AppConstants.pixelNormalize(5),
                                    marginLeft: AppConstants.pixelNormalize(25),
                                    color: '#AAAAAA'
                                }}>Offer applied on the bill</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.combinelast}>
                        <View>
                            <TouchableOpacity onPress={() => {
                                props.navigation.navigate('Sixth');
                            }}>
                                <View style={styles.Cancel}>
                                    <Text style={{
                                        fontSize: AppConstants.pixelNormalize(14),
                                        color: '#000000'
                                    }}>Cancel</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <View style={styles.Proceed}>
                                    <Text style={{
                                        fontSize: AppConstants.pixelNormalize(14),
                                        color: '#000000'
                                    }}>Proceed</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View >
    );
}

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
        marginTop: AppConstants.pixelNormalize(40),
        marginLeft: AppConstants.pixelNormalize(12),
    },
    BigContainer: {
        height: AppConstants.pixelNormalize(665),
        width: AppConstants.pixelNormalize(337),
        marginTop: AppConstants.pixelNormalize(8),
        marginLeft: AppConstants.pixelNormalize(20),
        borderRadius: 15,
        backgroundColor: '#FFEFF3'
    },
    container1: {
        height: AppConstants.pixelNormalize(90),
        width: AppConstants.pixelNormalize(317),
        marginTop: AppConstants.pixelNormalize(15),
        marginLeft: AppConstants.pixelNormalize(10),
        borderRadius: 15,
        backgroundColor: '#E3E5E8'
    },
    container2: {
        height: AppConstants.pixelNormalize(90),
        width: AppConstants.pixelNormalize(317),
        marginTop: AppConstants.pixelNormalize(15),
        marginLeft: AppConstants.pixelNormalize(10),
        borderRadius: 15,
        backgroundColor: '#FFFFFF'
    },
    container3: {
        height: AppConstants.pixelNormalize(90),
        width: AppConstants.pixelNormalize(317),
        marginTop: AppConstants.pixelNormalize(15),
        marginLeft: AppConstants.pixelNormalize(10),
        borderRadius: 15,
        backgroundColor: '#FFFFFF'
    },
    container4: {
        height: AppConstants.pixelNormalize(90),
        width: AppConstants.pixelNormalize(317),
        marginTop: AppConstants.pixelNormalize(15),
        marginLeft: AppConstants.pixelNormalize(10),
        borderRadius: 15,
        backgroundColor: '#FFFFFF'
    },
    container5: {
        height: AppConstants.pixelNormalize(90),
        width: AppConstants.pixelNormalize(317),
        marginTop: AppConstants.pixelNormalize(10),
        marginLeft: AppConstants.pixelNormalize(10),
        borderRadius: 15,
        backgroundColor: '#E3E5E8'
    },
    box1: {
        width: AppConstants.pixelNormalize(76),
        height: AppConstants.pixelNormalize(73),
        borderTopLeftRadius: AppConstants.pixelNormalize(10),
        borderTopRightRadius: AppConstants.pixelNormalize(10),
        borderBottomLeftRadius: AppConstants.pixelNormalize(10),
        borderBottomRightRadius: AppConstants.pixelNormalize(10),
        marginTop: AppConstants.pixelNormalize(9),
        marginLeft: AppConstants.pixelNormalize(10),
        backgroundColor: '#F7FFD4',
    },
    combine: {
        flexDirection: 'row'
    },
    backgroundColor: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
    },
    Cancel: {
        height: AppConstants.pixelNormalize(36),
        width: AppConstants.pixelNormalize(95),
        marginTop: AppConstants.pixelNormalize(20),
        marginLeft: AppConstants.pixelNormalize(12),
        backgroundColor: '#FF3464',
        borderTopLeftRadius: AppConstants.pixelNormalize(12),
        borderBottomRightRadius: AppConstants.pixelNormalize(12),
        alignItems: 'center',
        justifyContent: 'center'
    },
    Proceed: {
        height: AppConstants.pixelNormalize(36),
        width: AppConstants.pixelNormalize(95),
        marginTop: AppConstants.pixelNormalize(20),
        marginLeft: AppConstants.pixelNormalize(122),
        backgroundColor: '#FF3464',
        borderTopLeftRadius: AppConstants.pixelNormalize(12),
        borderBottomRightRadius: AppConstants.pixelNormalize(12),
        alignItems: 'center',
        justifyContent: 'center'
    },
    combinelast: {
        flexDirection: 'row',
    },
    checkIcon: {
        marginTop: AppConstants.pixelNormalize(28),
        marginLeft: AppConstants.pixelNormalize(26),
    }
});
