import React, { useState }from "react";
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import ListingParametersModel from "../modelClasses/ListingParametersModel";
import ProductListModel from "../modelClasses/ProductListModel";
import CategoryData from "../staticData/CategoryData";
import SubCategoryData from "../staticData/SubCategoryData";
import AntIcons from "react-native-vector-icons/AntDesign";
import DropDownPicker from "react-native-dropdown-picker";

//TODO UI Changes.

let traversalElement = new ProductListModel();
let tempArray = new Array();
let pageSizeArray = ["1","2","3","4","5","6","7","8","9","10"];

function ProductListingTestScreen(props) {
    const [pageSize, setPageSize] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [categoryId, setCategoryId] = useState(null);
    const [responseData, setResponseData] = useState([]);

    function productNavigationHandler(productObject) {
        var tempProductObject = productObject;
        console.log(tempProductObject);
    }

    function responseHandler(jsonResponse){
        var jsonData = jsonResponse.data
        
        // To concat the Array each time the user changes search parameters
        if(tempArray.length > 0) {
            tempArray = [];
        }

        // Populating the temporary array with values from data in the form of objects
        jsonData.forEach(traversalElement => {
            tempArray.push(traversalElement)
        });

        // setting the State Array for Flatlist
        setResponseData(tempArray);
    }

    function loadParametersHandler() {
        var listingParameterModel = new ListingParametersModel(parseInt(pageSize), parseInt(pageNumber), parseInt(categoryId));

        fetch('http://10.0.3.108:3001/parts/getParts', {
            method: "POST",
            body: JSON.stringify(listingParameterModel),
            headers: {"Content-type": "application/json; charset=UTF-8"},
        })
        .then(response => response.json())
        .then(json => responseHandler(json))
    }

    return(
        <SafeAreaView style = {styles.viewContainer}>
            <View style = {styles.parametersContainer}>
            </View>
            <View style = {styles.flatListWrapper}>
                <Text>FlatList Wrapper</Text>
            </View>
            <View style = {styles.pagingNavigator}>
                <TouchableOpacity style = {styles.bottomElementConatiner}>
                    <AntIcons name = "stepbackward" size = {30}/>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.bottomElementConatiner}>
                    <AntIcons name = "banckward" size = {30}/>
                </TouchableOpacity>
                <View style = {styles.bottomElementConatiner}>
                    <Text style = {{ fontSize: 20, }}>{pageNumber}</Text>
                </View>
                <TouchableOpacity style = {styles.bottomElementConatiner}>
                    <AntIcons name = "forward" size = {30}/>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.bottomElementConatiner}>
                    <AntIcons name = "stepforward" size = {30}/>
                </TouchableOpacity>
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
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            alignItems: "center",
            justifyContent: "center",
        },

        flatListWrapper: {
            flex: 12,
            borderWidth: 1,
        },

        pagingNavigator: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            paddingLeft: 5,
            paddingRight: 5,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
        },

        parametersContainer: {
            flex: 1,
            borderWidth: 1,
        },

        viewContainer: {
            flex: 1,
            borderWidth: 1,
        },
    }
)

export default ProductListingTestScreen;