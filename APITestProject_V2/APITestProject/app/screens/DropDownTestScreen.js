import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dropdown } from "sharingan-rn-modal-dropdown";
import { SubCategoryList } from "../staticData/subCategoryData"
import { PageValues } from "../staticData/PageData";
import AntIcons from "react-native-vector-icons/AntDesign";
import ProductListModel from '../modelClasses/ProductListModel';
import ListingParameterModel from '../modelClasses/ListingParameterModel';
import { FlatList } from 'react-native-gesture-handler';

var traversalObject = new ProductListModel();
var tempArray = new Array();

function DropDownTestScreen(props) {
    const [categoryId, setCategoryId] = useState(null);
    const [perPageSize, setPerPageSize] = useState(null);
    const [pageNumber, setPageNumber] = useState(1)
    const [maxPages, setMaxPages] = useState(null)
    const [renderList, setRenderList] = useState([])

    function responseHandler(jsonData){
        tempArray = [];
        jsonData.forEach(traversalObject => {
            tempArray.push(traversalObject)
        });
        setRenderList(tempArray)
    }

    function apiCallHandler() {

        var parameterObject = new ListingParameterModel(perPageSize, pageNumber, categoryId);

        console.log(parameterObject)

        fetch('http://10.0.3.108:3001/parts/getParts', {
            method: "POST",
            body: JSON.stringify(parameterObject),
            headers: {"Content-type": "application/json; charset=UTF-8"},
        })
        .then(response => response.json())
        .then(json => responseHandler(json.data))
    }

    return(
        <SafeAreaView style = {styles.safeViewContainer}>
            <View style = {styles.viewContainer}>
            <View style = {styles.topContainer}>
                <View style = {styles.individualContainer}>
                    <Dropdown 
                        label = "Category"
                        data = {SubCategoryList}
                        value = {categoryId}
                        required
                        onChange = {(val) => setCategoryId(val)}
                    />
                </View>
                <View style = {styles.individualContainer
                }>
                    <Dropdown 
                        label = "Items per Page"
                        data = {PageValues}
                        value = {perPageSize}
                        required
                        onChange = {(val) => setPerPageSize(val)}
                        disableSort
                    />
                </View>
            </View>
            <View style = {styles.flatListWrapper}>
                <FlatList 
                    data = {renderList}
                    keyExtractor = { item => item.part_id.toString() }
                    renderItem = {({item}) => 
                        <View style = {styles.renderItemContainer}>
                            <Text style = {{fontSize: 14}}>{item.part_title}</Text>
                        </View>
                    }
                />
            </View>
            <View style = {styles.pagingNavigator}>
                <TouchableOpacity 
                    style = {styles.centerBottomElementConatiner}
                    onPress = {apiCallHandler}
                >
                    <Text style = {{fontSize: 20}}>Load Data</Text>
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        bottomElementConatiner: {
            flex: 1,
            height: 43,
            // borderWidth: 1,
            backgroundColor: "#ffffff",
            marginLeft: 5,
            marginRight: 5,
            marginTop: 2,
            alignItems: "center",
            justifyContent: "center",
            
        },
        
        centerBottomElementConatiner: {
            flex: 3,
            height: 43,
            borderWidth: 2,
            borderRadius: 15,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 2,
            alignItems: "center",
            justifyContent: "center",
        },

        flatListWrapper: {
            flex: 12,
            // borderWidth: 1,
            padding: 2,
        },

        individualContainer: {
            flex: 1,
            margin: 5,
            padding: 5,
        },

        pagingNavigator: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "#ffffff",
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 5,
            // borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#444444",
            shadowOpacity: 1,
            shadowRadius: 3,
            shadowOffset: {height: -6,},
        },

        renderItemContainer: {
            flex: 1,
            height: 60,
            margin: 5,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 15,
        },

        safeViewContainer: {
            flex: 1,
            backgroundColor: "#ffffff",
        },

        topContainer: {
            flex: 2,
            flexDirection: "row",
        },

        viewContainer: {
            flex: 1,
            // borderWidth: 1,
        },
    }
)

export default DropDownTestScreen;