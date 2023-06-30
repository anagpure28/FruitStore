import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const LOAD_USER_STATUSES = 'LOAD_USER_STATUSES';


export const loadUserStatuses = () => {
    return async dispatch => {
        try {
            let url = 'http://api-fruit.o2t2.com/api/UserStatuses.json';
            let token = await AsyncStorage.getItem('TOKEN');
            console.log('resendOTP url =', url);

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + token,
                },
            });
            console.log(response.status);

            let data = await response.json();

            console.log('data' + JSON.stringify(data));

            if (data.success === true) {
                let content = data.data;
                console.log('Inside true')

                dispatch({type: LOAD_USER_STATUSES, payload: content});
            } else {
                console.log('Inside false')
                throw new Error('not found');
            }

        } catch (e) {
            if (response.status === 404) {
                throw new Error(404);
            }
            console.log(e.message);
        }
    };
};
