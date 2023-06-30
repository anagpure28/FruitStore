import React, { useState } from 'react';
import { StyleSheet, Text, Image, TextInput, View, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import * as AppConstants from '../constants/AppConstants';
// import { AntDesign } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Dash from 'react-native-dash';
import CheckBox from '@react-native-community/checkbox';

export default function RegisterScreen(props) {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.backgroundColor}>
            <View style={styles.combine}>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('Second');
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
                <View>
                    <Text style={{
                        marginTop: AppConstants.pixelNormalize(19),
                        fontSize: AppConstants.pixelNormalize(18),
                        marginLeft: AppConstants.pixelNormalize(18),
                        color: 'black'
                    }}>Create Your Account</Text>
                </View>
            </View>
            <View style={styles.MainContainer}>
                <KeyboardAvoidingView behavior='padding'>
                    <ScrollView>
                        <View style={styles.container1}>
                            <Text style={{
                                marginTop: AppConstants.pixelNormalize(8),
                                fontSize: AppConstants.pixelNormalize(18),
                                marginLeft: AppConstants.pixelNormalize(26),
                                color: 'black'
                            }}>First Name</Text>
                            <View style={styles.innerContainer}>
                                <TextInput
                                    style={{
                                        marginLeft: AppConstants.pixelNormalize(13),
                                        fontSize: AppConstants.pixelNormalize(16),
                                        marginBottom: AppConstants.pixelNormalize(-5),
                                        color: '#7A7A7A',
                                    }} />
                            </View>
                        </View>
                        <View style={styles.container1}>
                            <Text style={{
                                marginTop: AppConstants.pixelNormalize(8),
                                fontSize: AppConstants.pixelNormalize(18),
                                marginLeft: AppConstants.pixelNormalize(26),
                                color: 'black'
                            }}>Last Name</Text>
                            <View style={styles.innerContainer}>
                                <TextInput
                                    style={{
                                        marginLeft: AppConstants.pixelNormalize(13),
                                        fontSize: AppConstants.pixelNormalize(16),
                                        marginBottom: AppConstants.pixelNormalize(-5),
                                        color: '#7A7A7A',
                                    }} />
                            </View>
                        </View>
                        <View style={styles.container1}>
                            <Text style={{
                                marginTop: AppConstants.pixelNormalize(8),
                                fontSize: AppConstants.pixelNormalize(18),
                                marginLeft: AppConstants.pixelNormalize(26),
                                color: 'black'
                            }}>Email</Text>
                            <View style={styles.innerContainer}>
                                <TextInput
                                    style={{
                                        marginLeft: AppConstants.pixelNormalize(13),
                                        fontSize: AppConstants.pixelNormalize(16),
                                        marginBottom: AppConstants.pixelNormalize(-5),
                                        color: '#7A7A7A',
                                    }} />
                            </View>
                        </View>
                        <View style={styles.container1}>
                            <Text style={{
                                marginTop: AppConstants.pixelNormalize(8),
                                fontSize: AppConstants.pixelNormalize(18),
                                marginLeft: AppConstants.pixelNormalize(26),
                                color: 'black'
                            }}>Mobile No.</Text>
                            <View style={styles.innerContainer}>
                                <TextInput
                                    style={{
                                        marginLeft: AppConstants.pixelNormalize(13),
                                        fontSize: AppConstants.pixelNormalize(16),
                                        marginBottom: AppConstants.pixelNormalize(-5),
                                        color: '#7A7A7A',
                                    }} />
                            </View>
                        </View>
                        <View style={styles.container1}>
                            <Text style={{
                                marginTop: AppConstants.pixelNormalize(8),
                                fontSize: AppConstants.pixelNormalize(18),
                                marginLeft: AppConstants.pixelNormalize(26),
                                color: 'black'
                            }}>Address</Text>
                            <View style={styles.innerContainer}>
                                <TextInput
                                    style={{
                                        marginLeft: AppConstants.pixelNormalize(13),
                                        fontSize: AppConstants.pixelNormalize(16),
                                        marginBottom: AppConstants.pixelNormalize(-5),
                                        color: '#7A7A7A',
                                    }} />
                            </View>
                        </View>
                        <View style={styles.container1}>
                            <Text style={{
                                marginTop: AppConstants.pixelNormalize(8),
                                fontSize: AppConstants.pixelNormalize(18),
                                marginLeft: AppConstants.pixelNormalize(26),
                                color: 'black'
                            }}>User Name</Text>
                            <View style={styles.innerContainer}>
                                <TextInput
                                    style={{
                                        marginLeft: AppConstants.pixelNormalize(13),
                                        fontSize: AppConstants.pixelNormalize(16),
                                        marginBottom: AppConstants.pixelNormalize(-5),
                                        color: '#7A7A7A',
                                    }} />
                            </View>
                        </View>
                        <View style={styles.container1}>
                            <Text style={{
                                marginTop: AppConstants.pixelNormalize(8),
                                fontSize: AppConstants.pixelNormalize(18),
                                marginLeft: AppConstants.pixelNormalize(26),
                                color: 'black'
                            }}>Password</Text>
                            <View style={styles.innerContainer}>
                                <TextInput
                                    style={{
                                        marginLeft: AppConstants.pixelNormalize(13),
                                        fontSize: AppConstants.pixelNormalize(16),
                                        marginBottom: AppConstants.pixelNormalize(-5),
                                        color: '#7A7A7A',
                                    }} />
                            </View>
                        </View>
                        <View style={styles.container2}>
                            <View style={styles.combine}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkBox}
                                />
                                <View>
                                    <Text style={{
                                        fontSize: AppConstants.pixelNormalize(14),
                                        marginTop: AppConstants.pixelNormalize(10),
                                        marginLeft: AppConstants.pixelNormalize(5),
                                    }}>To register, Please tick to agree to our</Text>
                                    <Text style={{
                                        fontSize: AppConstants.pixelNormalize(14),
                                        marginTop: AppConstants.pixelNormalize(3),
                                        marginLeft: AppConstants.pixelNormalize(5),
                                        color: '#7C96FE'
                                    }}>Terms and Conditions</Text>
                                    <TouchableOpacity onPress={() => {
                                        props.navigation.navigate('Second');
                                    }}>
                                        <View style={styles.rectangle}>
                                            <Text style={{
                                                marginTop: AppConstants.pixelNormalize(5),
                                                marginLeft: AppConstants.pixelNormalize(38),
                                                fontSize: AppConstants.pixelNormalize(16),
                                                color: '#FFFFFF'
                                            }}>Register</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </View>
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
    backgroundColor: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
    },
    combine: {
        flexDirection: 'row'
    },
    container1: {
        height: AppConstants.pixelNormalize(80),
        width: AppConstants.pixelNormalize(317),
        marginTop: AppConstants.pixelNormalize(20),
        marginLeft: AppConstants.pixelNormalize(10),
        borderRadius: 15,
        backgroundColor: '#FFFFFF'
    },
    container2: {
        height: AppConstants.pixelNormalize(105),
        width: AppConstants.pixelNormalize(317),
        marginTop: AppConstants.pixelNormalize(30),
        marginLeft: AppConstants.pixelNormalize(10),
        borderRadius: 15,
        backgroundColor: '#FFFFFF'
    },
    checkBox: {
        marginTop: AppConstants.pixelNormalize(18),
        marginLeft: AppConstants.pixelNormalize(15),
    },
    MainContainer: {
        height: AppConstants.pixelNormalize(660),
        width: AppConstants.pixelNormalize(337),
        marginTop: AppConstants.pixelNormalize(10),
        marginLeft: AppConstants.pixelNormalize(20),
        borderRadius: 15,
        backgroundColor: '#FFEFF3'
    },
    rectangle: {
        height: AppConstants.pixelNormalize(35),
        width: AppConstants.pixelNormalize(130),
        marginTop: AppConstants.pixelNormalize(6),
        marginLeft: AppConstants.pixelNormalize(50),
        backgroundColor: '#ff0303',
        borderTopLeftRadius: AppConstants.pixelNormalize(20),
        borderBottomRightRadius: AppConstants.pixelNormalize(20),
    },
    innerContainer: {
        height: AppConstants.pixelNormalize(35),
        width: AppConstants.pixelNormalize(285),
        marginTop: AppConstants.pixelNormalize(4),
        marginLeft: AppConstants.pixelNormalize(15),
        borderRadius: 15,
        backgroundColor: '#FFEFF3'
    }
});
