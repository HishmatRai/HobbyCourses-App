import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import {  Ionicons } from '@expo/vector-icons';
import DatePciker from './../../components/DatePicker/DatePicker';
export default function ClassSessionList(props) {
    let CardData = [
        { date: "15-Sep-2016" },
        { date: "15-Sep-2016" },
        { date: "15-Sep-2016" },
        { date: "15-Sep-2016" },
        { date: "15-Sep-2016" },
        { date: "15-Sep-2016" },
        { date: "15-Sep-2016" },
        { date: "15-Sep-2016" },
        { date: "15-Sep-2016" },
    ]
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* ===============> <================== */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                    {/* ===============> <================== */}
                    <View style={styles._header_main}>
                        <TouchableOpacity>
                            <Ionicons name="md-arrow-back-sharp" size={24} color="#656565" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, color: "black" }}>Class Session List</Text>
                        <Ionicons name="md-arrow-back-sharp" size={24} color="white" />
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <DatePciker />
                    </View>
                    {/* ===============> <================== */}
                    {CardData.map((v, i) => {
                        return (
                            <View style={styles._card_main}>
                                <View style={styles._card}>
                                    <View style={styles._card_header}>
                                        <View style={styles._card_header_column1_main}>
                                            <Text style={{ fontSize: 16, color: "black" }}>{v.date}</Text>
                                            <Text style={{ fontSize: 12, color: "#707070" }}>Sunday,09:00pm</Text>
                                        </View>
                                        <View style={styles._card_header_column2_main}>
                                            <Text style={{ fontSize: 16, color: "#707070", fontWeight: "bold" }}>STUDENT LIST</Text>
                                        </View>
                                        <View style={styles._card_header_column3_main}>
                                            <TouchableOpacity style={{ backgroundColor: "#89CCCA", width: "100%", height: 30, borderRadius: 10, alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
                                                <Text style={{color:"white",fontSize:16,fontWeight:"bold"}}>Check</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
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
        marginTop: 20,
    },
    _card: {
        width: "99%",
        margin: 1,
        padding: 10,
    },
    _card_main: {

        marginTop: 1
    },
    _card_header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        borderBottomColor:"gray",
        borderBottomWidth:2,
        paddingBottom:5
    },
    _card_header_column1_main: {
        width: "35%",
    },
    _card_header_column2_main: {
        width: "35%",
    },
    _card_header_column3_main: {
        width: "20%",
    },
});
