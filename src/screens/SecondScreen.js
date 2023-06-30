import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    StatusBar,
    Platform,
    SafeAreaView
} from 'react-native';
import * as AppConstants from '../constants/AppConstants';
// import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Colors from './../constants/Colors';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../stores/actions/auth';
import { loadTypes } from "../stores/actions/types";

export default function SecondScreen(props) {
    // const dispatch = useDispatch();
    // const token = useSelector(state => state.auth.token);
    // // const Types = useSelector(state => state.types.typesArray);
    //
    // useEffect(() => {
    //     // loginHere();
    // }, []);
    //
    // const loginHere = async () => {
    //     try {
    //         await dispatch(loginUser('admin', 'admin@1234'));
    //         // await dispatch(loadTypes());
    //     } catch (e) {
    //         console.log('loginUser = ' + e.message);
    //     }
    // };

        return (
            <View style={styles.color}>
                <View style={styles.MainContainer}>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate('First');
                    }}>
                        <View style={styles.Curve} >
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
                    <View style={styles.container}>
                        <Text style={styles.welcomeText}>
                            Welcome Back!</Text>
                    </View>
                </View>
                <View style={styles.rectangle}>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['#FFFFFF', '#FFFFFF00']}
                        style={styles.background} />
                    <Text style={styles.Login}>Login to Continue</Text>
                    <Text style={styles.info}>Please enter information below</Text>
                    <View style={styles.userName}>
                        <View style={styles.combine}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="User Name"
                                secureTextEntry={false}
                                placeholderTextColor="#7A7A7A"
                            />
                            <MaterialIcons style={styles.person} name="person" size={22} color="#7A7A7A" position="fixed" />
                        </View>
                    </View>
                    <View style={styles.Password}>
                        <View style={styles.combine2}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Password"
                                secureTextEntry={false}
                                placeholderTextColor="#7A7A7A"
                            />
                            <MaterialIcons style={styles.lock} name="lock-outline" size={22} color="#7A7A7A" />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate('Third');
                    }}>
                        <View style={styles.LoginNow}>
                            <Text style={{ color: '#FFF' }}>Login Now</Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('Register');
                        }}>
                            <Text
                                style={{
                                    marginTop: AppConstants.pixelNormalize(13),
                                    fontSize: AppConstants.pixelNormalize(13),
                                    marginLeft: AppConstants.pixelNormalize(126),
                                    color: 'black'
                                }}>Create New Account</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity>
                            <View style={styles.Facebook}>
                                <Text style={{ color: '#FFF' }}>Facebook</Text>
                                <Image
                                    source={require('../assets/facebook3.png')}
                                    style={{
                                        height: AppConstants.pixelNormalize(14),
                                        width: AppConstants.pixelNormalize(7),
                                        marginTop: AppConstants.pixelNormalize(3),
                                        marginLeft: AppConstants.pixelNormalize(26),
                                    }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.Google}>
                                <Text style={{ color: '#FFF' }}>Google</Text>
                                <Image source={require('../assets/google3.png')}
                                    style={{
                                        width: AppConstants.pixelNormalize(14),
                                        height: AppConstants.pixelNormalize(14),
                                        marginTop: AppConstants.pixelNormalize(3),
                                        marginLeft: AppConstants.pixelNormalize(35),
                                    }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }


const styles = StyleSheet.create({
    color: {
        width: AppConstants.pixelNormalize(375),
        height: AppConstants.pixelNormalize(812),
        backgroundColor: '#D5E3F8'
    },
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
    welcomeContainer: {
        flexDirection: 'row',
    },
    welcomeText: {
        textAlign: 'right',
        fontSize: AppConstants.pixelNormalize(22),
        color: '#000000'
    },
    container: {
        marginTop: AppConstants.pixelNormalize(14),
        marginLeft: AppConstants.pixelNormalize(143),
        marginRight: AppConstants.pixelNormalize(20),
    },
    background: {
        position: 'absolute',
        height: AppConstants.pixelNormalize(444),
        width: AppConstants.pixelNormalize(328),
        marginTop: AppConstants.pixelNormalize(19),
        marginLeft: AppConstants.pixelNormalize(24),
        borderRadius: 15
    },
    Login: {
        marginTop: AppConstants.pixelNormalize(35),
        marginLeft: AppConstants.pixelNormalize(56),
        color: '#000000'
    },
    inputStyle: {
        marginTop: AppConstants.pixelNormalize(2),
        marginLeft: AppConstants.pixelNormalize(15),
        width: AppConstants.pixelNormalize(200),
        color: 'black',
    },
    info: {
        marginTop: AppConstants.pixelNormalize(6),
        marginLeft: AppConstants.pixelNormalize(56),
        color: '#AAAAAA'
    },
    person: {
        marginTop: AppConstants.pixelNormalize(14),
        marginLeft: AppConstants.pixelNormalize(2),
    },
    userName: {
        height: AppConstants.pixelNormalize(50),
        width: AppConstants.pixelNormalize(266),
        marginTop: AppConstants.pixelNormalize(13),
        marginLeft: AppConstants.pixelNormalize(55),
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    combine: {
        flexDirection: 'row',
    },
    combine2: {
        flexDirection: 'row',
    },
    lock: {
        marginTop: AppConstants.pixelNormalize(14),
        marginLeft: AppConstants.pixelNormalize(1),
    },
    Password: {
        height: AppConstants.pixelNormalize(50),
        width: AppConstants.pixelNormalize(266),
        marginTop: AppConstants.pixelNormalize(13),
        marginLeft: AppConstants.pixelNormalize(55),
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    contact: {
        marginTop: AppConstants.pixelNormalize(13),
        marginLeft: AppConstants.pixelNormalize(290),
    },
    LoginNow: {
        height: AppConstants.pixelNormalize(50),
        width: AppConstants.pixelNormalize(266),
        marginTop: AppConstants.pixelNormalize(19),
        marginLeft: AppConstants.pixelNormalize(55),
        backgroundColor: '#FF3464',
        borderTopLeftRadius: AppConstants.pixelNormalize(20),
        borderBottomRightRadius: AppConstants.pixelNormalize(20),
        alignItems: 'center',
        padding: AppConstants.pixelNormalize(15),
        fontSize: AppConstants.pixelNormalize(16),
    },
    Facebook: {
        height: AppConstants.pixelNormalize(45),
        width: AppConstants.pixelNormalize(125),
        marginTop: AppConstants.pixelNormalize(31),
        marginLeft: AppConstants.pixelNormalize(56),
        backgroundColor: '#7C96FE',
        borderTopLeftRadius: AppConstants.pixelNormalize(10),
        borderBottomRightRadius: AppConstants.pixelNormalize(10),
        padding: AppConstants.pixelNormalize(13),
        fontSize: AppConstants.pixelNormalize(13),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    Google: {
        height: AppConstants.pixelNormalize(45),
        width: AppConstants.pixelNormalize(125),
        marginTop: AppConstants.pixelNormalize(31),
        marginLeft: AppConstants.pixelNormalize(16),
        backgroundColor: '#7C96FE',
        borderTopLeftRadius: AppConstants.pixelNormalize(10),
        borderBottomRightRadius: AppConstants.pixelNormalize(10),
        padding: AppConstants.pixelNormalize(13),
        fontSize: AppConstants.pixelNormalize(13),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonContainer: {
        flexDirection: 'row',
    }
});
