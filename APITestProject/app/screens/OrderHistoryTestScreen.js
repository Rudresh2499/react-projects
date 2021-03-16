import React, { useState } from "react"
import { useEffect } from "react";
import { Button, FlatList, Image, SafeAreaView, ScrollView, SectionList, StyleSheet, Text, TextInput, View } from "react-native";
import OrderListingModelClass from "../modelClasses/OrderListingModelClass";

var traversalObject = new OrderListingModelClass();
var tempArray = new Array();

function OrderHistoryTestScreen(props) {
    const [listData, setListData] = useState([]);
    const [productData, setProductData] = useState([]);
    
    var authToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImVtYWlsIjoieHl6enl4QGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6Ilh5eiIsImxhc3ROYW1lIjoiWnl4IiwicGhvbmVOdW1iZXIiOiI3ODk0NTYxMjMiLCJpYXQiOjE2MTU4NzQ0NTksImV4cCI6MTYxNTg4ODg1OX0.pvTBDFmG2fXrfim4KPJknuhrfmTjbWZti55y6mnXnb0"

    function responseHandler(jsonData){
        setListData(jsonData);
        tempArray = []
        jsonData.forEach(traversalObject => {
            console.log(traversalObject)
            tempArray.push(traversalObject)
        });
        console.log(tempArray)
        console.log("List Data")
    }

    function apiCallHandler() {
        var newHeader = new Headers()

        newHeader.append("Content-Type", "application/json");
        newHeader.append("Authorization", authToken);

        fetch("http://10.0.3.108:3001/orders/", {
            method: "POST",
            headers: newHeader,
        })
        .then(response => response.json())
        .then(json => responseHandler(json.data))
    }

    useEffect(() => {
        apiCallHandler();
    }, [])

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.viewContainer}>
                <FlatList 
                    data = {listData}
                    keyExtractor = { item => item.order_id.toString() }
                    bounces = {false}
                    renderItem = {({item, index}) => 
                        <View style = {styles.individualItemContainer}>
                            <View style = {styles.deliveryDetailsContainer}>
                                <Text style = {{flex: 1, padding: 2, marginLeft: 5,}}>Delivered To:</Text>
                                <View style = {styles.addressDataContainer}>
                                    <Text style = {styles.addressDetails}>{item.address_line_1}, {item.address_line_2}</Text>
                                    <Text style = {styles.addressDetails}>{item.city}</Text>
                                    <Text style = {styles.addressDetails}>{item.state}</Text>
                                    <Text style = {styles.addressDetails}>Pincode : {item.pincode}</Text>
                                    <Text style = {styles.addressDetails}>Contact Number : {item.contact_number}</Text>
                                </View>
                            </View>
                            <View style = {styles.orderContentsContainer}>
                                <Text style = {{marginBottom: 5,}}>Order Details</Text>
                                <View style = {{flex: 1, width: 350,}}>
                                    <FlatList
                                        data = {item.item}
                                        renderItem = {({item, index}) => 
                                            <View style = {styles.productDetailContainer}>
                                                <Text style = {{margin: 2,}}>{item.f5}</Text>
                                                <Text style = {{textAlign: "right", margin: 2,}}>$ {item.f4}</Text>
                                            </View>
                                        }
                                    />
                                </View>
                            </View>
                        </View>
                    }
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        addressDataContainer: {
            flex: 3,
            // height: 100,
            // alignItems: "center",
            justifyContent: "center",
            // borderWidth: 1,
            padding: 5,
        },
        
        addressDetails: {
            margin: 1,
        },

        container: {
            flex: 1,
            // borderWidth: 1,
            backgroundColor: "#ffffff",
        },

        deliveryDetailsContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "#ffffff",
            borderWidth: 1,
            // borderBottomWidth: 2,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
        },

        individualItemContainer: {
            flex: 1,
            margin: 5,
            padding: 5,
            backgroundColor: "#ffffff",
            // borderWidth: 1,
            borderRadius: 15,
            shadowColor: "#aaaaaa",
            shadowOpacity: 1,
            shadowRadius: 5,
            shadowOffset: {height: 2,},
        },

        orderContentsContainer: {
            flex: 3,
            // height: 100,
            borderWidth: 1,
            borderRadius: 15,
            alignItems: "center",
            marginTop: 5,
            padding: 5,
        },

        productDetailContainer: {
            flex: 1,
            // borderWidth: 1,
            padding: 5,
        },

        viewContainer: {
            flex: 1,
            backgroundColor: "#ffffff",
            paddingLeft: 5,
            paddingRight: 5,
            // borderWidth: 1,
        },
    }
)

export default OrderHistoryTestScreen