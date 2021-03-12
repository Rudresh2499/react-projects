import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, FlatList, SafeAreaView, Text, View } from "react-native";
import ListingParameterModel from "../modelClasses/ListingParameterModel";
import ProductListModel from "../modelClasses/ProductListModel";

var traversalObject = new ProductListModel()
var DashboardArray = new Array();
var CarouselArray = new Array();

function DashboardRandomGeneratorScreen(props) {

    function appendStates() {
        randomProductFetcher(10)//For Carousel
        randomProductFetcher(30)//For Dashboard
    }

    function jsonHandler(jsonData, numberOfProducts) {
        console.log("jsonHandler")
        if(numberOfProducts === 10){
            jsonData.forEach(traversalObject => {
                CarouselArray.push(traversalObject)
                console.log(CarouselArray)
            });
        }
        else{
            jsonData.forEach(traversalObject => {
                DashboardArray.push(traversalObject)
                console.log(DashboardArray)
            });
        }
    }

    function randomProductFetcher (numberOfProducts) {
        console.log("RandomPicker")
        let randomnessChecker = []

        for (let index = 0; index < numberOfProducts; index++) {

            let randomPageNumber = (Math.floor((Math.random() * 400) + 1));
            
            if(randomnessChecker.includes(randomPageNumber))
            {
                numberOfProducts++
                continue;
            }
            randomnessChecker.push(randomPageNumber)

            var tempListingParameterObject = new ListingParameterModel(1, randomPageNumber, "");

            fetch('http://10.0.3.108:3001/parts/getParts', {
                method: "POST",
                body: JSON.stringify(tempListingParameterObject),
                headers: {"Content-type": "application/json; charset=UTF-8"},
            })
            .then(response => response.json())
            .then(json => jsonHandler(json.data, numberOfProducts))
        }    
    }

    useEffect(() => {
        appendStates()
    },[])

    return(
        <SafeAreaView style = {{flex: 1, borderWidth: 1,}}>
            <View style = {{flex: 1, borderWidth: 1,}}>
                <FlatList 
                    data = {DashboardArray}
                    renderItem = {({item}) => 
                        <Text>Hello</Text>
                    }
                />
            </View>
        </SafeAreaView>
    )
}

export default DashboardRandomGeneratorScreen