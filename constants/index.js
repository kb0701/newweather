import {View, Text} from  'react-native'
import React, {useEffect, useState} from 'react'
import * as Location from 'expo-location'

const openWeatherKey = 'eeae29c7d58fed9e2d3cdfefb7c95af4'
let url = `https://api.openweathermap.org/data/2.5/onecall?&units=metric&exclude=minutely&appid=${openWeatherKey}`

const Weather = () => {
    const [ forecast, setForecast] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    const loadForecast = async () => {
        setRefreshing(true);
        
    }
}