import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import DBTestModel from "../modelClasses/DBTestModel";

function ProductDetailScreen(props) {
    var passedObject = new DBTestModel(props.route.params.item.part_id.toString(), props.route.params.item.part_title)

    return(
        <SafeAreaView>
            <TextInput 
                value = {passedObject.part_id}
            />
            <TextInput 
                value = {passedObject.part_title}
            />
        </SafeAreaView>
    )
}

export default ProductDetailScreen