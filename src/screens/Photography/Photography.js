import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
export default function Photography(props) {
    let CardData = [
        { icon1: require("./../../img/home2card1.png"), title1: "Art & Craft (109)", icon2: require("./../../img/home2card2.png"), title2: "Beauty & Fashion (9)" },
        { icon1: require("./../../img/home2card1.png"), title1: "Art & Craft (109)", icon2: require("./../../img/home2card2.png"), title2: "Beauty & Fashion (9)" },
        { icon1: require("./../../img/home2card1.png"), title1: "Art & Craft (109)", icon2: require("./../../img/home2card2.png"), title2: "Beauty & Fashion (9)" },
        { icon1: require("./../../img/home2card1.png"), title1: "Art & Craft (109)", icon2: require("./../../img/home2card2.png"), title2: "Beauty & Fashion (9)" },
        { icon1: require("./../../img/home2card1.png"), title1: "Art & Craft (109)", icon2: require("./../../img/home2card2.png"), title2: "Beauty & Fashion (9)" },
    ]
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* ===============> <================== */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* ===============> <================== */}
                    <View style={styles._header_main}>
                        <EvilIcons name="location" size={24} color="white" />
                        <Text style={{ fontSize: 20, color: "black" }}>Photography</Text>
                        <EvilIcons name="location" size={34} color="#FF3480" />
                    </View>

                    {/* ===============> <================== */}
                    {CardData.map((v, i) => {
                        return (
                            <View style={styles._card_main}>
                                <View style={styles._card}>
                                    <Image source={v.icon1} style={styles.home2cardimg} />
                                    <Text style={styles._Card_title}>{v.title1}</Text>
                                </View>
                                <View style={styles._card}>
                                    <Image source={v.icon2} style={styles.home2cardimg} />
                                    <Text style={styles._Card_title}>{v.title2}</Text>
                                </View>
                            </View>
                        )
                    })}
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
    _header_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20
    },
    home2cardimg: {
        // width:160,
        // height:60
    },
    _Card_title: {
        color: "#FF3480",
        fontSize: 15
    },
    _card: {
        backgroundColor: "white",
        elevation: 5,
        width: "48%",
        margin: 1,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        paddingVertical: 20,
        height: 130
    },
    _card_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20
    }
});
