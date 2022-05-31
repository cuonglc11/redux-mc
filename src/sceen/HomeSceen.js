import React, { useEffect } from "react";
import { View, Text } from 'react-native'
import { useDispatch } from "react-redux";
import { getLapTop } from "../redux/action/LaptopAction";
import callApi from "../utits/apiCaller";
const HomeSceens = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLapTop({
            ipAddress: 'https://6278c15cd00bded55addc679.mockapi.io/'
        }))
        callApi(null).then((res)=>{
            console.log(res , "data");
        })
    }, [])
    return (
        <View>
            <Text>HomeSceens</Text>
        </View>
    )
}
export default HomeSceens