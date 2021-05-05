import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function ReportAttendance(props) {
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
                        <Text style={{ fontSize: 20, color: "black" }}>Report</Text>
                        <Text style={{ fontSize: 20, color: "black" }}>Attendance</Text>
                    </View>
                    <Text style={{ fontSize: 20, color: "#707070", marginTop: 30, marginBottom: 10, paddingLeft: 20, paddingRight: 20 }}>Thomas Michael Voss : Cha Cha Cha, Samba, Rumba, Paso Doble, Jive, Waltz, Tango, Viennese Waltz, Foxtrot</Text>
                    {/* ===============> <================== */}
<View style={styles._Card_main}>

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
        marginTop: 30
    },
    _header_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
});
