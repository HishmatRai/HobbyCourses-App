import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';
export default function Login(props) {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [eyeIcon, setEyeIcon] = useState(true);
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* ===============> <================== */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={require("./../../img/groupImages.png")} style={styles._logo} />
                    <Text style={styles._heading}>My Hobby Courses</Text>
                    {/* ===============> <================== */}
                    <View style={styles._input_main}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder="Email or Phone Number"
                            color="#8F9BB3"
                        />
                    </View>
                    <View style={styles._input_main}>
                        <TextInput
                            style={styles.input_pass}
                            onChangeText={onChangePassword}
                            value={password}
                            placeholder="Password"
                            color="#8F9BB3"
                            secureTextEntry={eyeIcon}
                        />
                        {eyeIcon ? (
                            <Ionicons
                                name="eye-off"
                                size={24}
                                color="#C5CEE0"
                                onPress={() => setEyeIcon(!eyeIcon)}
                            />
                        ) : (
                            <Ionicons
                                name="eye"
                                size={24}
                                color="#C5CEE0"
                                onPress={() => setEyeIcon(!eyeIcon)}
                            />
                        )}
                    </View>

                    {/* ===============> <================== */}
                    <TouchableOpacity style={styles._forgot_pass_btn}>
                        <Text style={styles._forgot_pass_btn_txt}>Forgot Password?</Text>
                    </TouchableOpacity>

                    {/* ===============> <================== */}
                    <TouchableOpacity style={styles._signIn_btn} onPress={() => props.navigation.navigate("Home")}>
                        <Text style={styles._signIn_btn_txt}>Sign In</Text>
                    </TouchableOpacity>

                    {/* ===============> <================== */}
                    <View style={styles._social_login_main}>
                        <TouchableOpacity style={styles._social_login_btn}>
                            <AntDesign name="twitter" size={24} color="#1C96BC" />
                            <Text style={styles._social_login_btn_txt}>Continue with Twitter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._social_login_btn}>
                            <Image source={require("./../../img/google-logo.png")} style={styles.google_logo} />
                            <Text style={styles._social_login_btn_txt}>Connect with Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._social_login_btn}>
                            <FontAwesome5 name="facebook-f" size={24} color="#1D44C5" />
                            <Text style={styles._social_login_btn_txt}>Continue with Facebook</Text>
                        </TouchableOpacity>
                    </View>

                    {/* ===============> <================== */}
                    <View style={styles._sign_up_main}>
                        <Text style={styles._sign_up_text}>You don't have an account?</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
                            <Text style={styles._sign_up_btn_txt}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    {/* ===============> <================== */}
                    <Text style={{ color: "#BEBEBE", fontSize: 18, letterSpacing: 0.5 }}>By tapping Continuous, Create Account  or More options, I agree to Holiday Activities Terms of service.</Text>
                    <View style={styles._pricacy_main}>
                        <Text style={{ color: "#BEBEBE", fontSize: 18, letterSpacing: 0.5 }}>our</Text>
                        <TouchableOpacity>
                            <Text style={styles._pricacy_btn_txt}>Terms and Privacy Policy .</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    _main: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30
    },
    _logo: {
        alignItems: "center",
        marginTop: 50,
        justifyContent: "center",
        alignSelf: "center",
        width: 135,
        height: 44
    },
    _heading: {
        fontSize: 23,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 30
    },
    _input_main: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
        backgroundColor: "white",
        elevation: 3,
        margin: 1,
        height: 56
    },
    input: {
        width: "85%",
        marginLeft: 10,
        color: "#8F9BB3",
        fontSize: 15,
        letterSpacing: 0.5
    },
    input_pass: {
        width: "85%",
        marginLeft: 10,
        color: "#8F9BB3",
        fontSize: 15,
        letterSpacing: 0.5
    },
    _forgot_pass_btn: {
        alignSelf: "flex-end",
        marginTop: 5
    },
    _forgot_pass_btn_txt: {
        color: "#00A89B",
        fontSize: 15
    },
    _signIn_btn: {
        backgroundColor: "#FF3480",
        height: 56,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: 'center',
        width: "100%",
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 20
    },
    _signIn_btn_txt: {
        color: "white",
        fontSize: 15,
        textAlign: "center"
    },
    _social_login_main: {
        marginBottom: 20
    },
    _social_login_btn: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
        backgroundColor: "white",
        elevation: 3,
        margin: 1,
        height: 56,
        alignSelf: "center",
        width: "99%",
        justifyContent: "center"
    },
    _social_login_btn_txt: {
        fontSize: 15,
        color: "#8F9BB3",
        letterSpacing: 0.5,
        marginLeft: 15
    },
    google_logo: {
        height: 25,
        width: 25
    },
    _sign_up_main: {
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    _sign_up_text: {
        color: "#8F9BB3",
        fontSize: 15,
        letterSpacing: 0.5,
        marginRight: 5
    },
    _sign_up_btn_txt: {
        color: "#00A89B",
        fontSize: 15
    },
    _pricacy_main: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    _pricacy_btn_txt: {
        color: "#BEBEBE",
        fontSize: 18,
        letterSpacing: 0.5,
        fontWeight: "bold",
        marginLeft: 10,
    }
});
