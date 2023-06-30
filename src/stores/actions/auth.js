import AsyncStorage from '@react-native-community/async-storage';

export const LOGIN = 'LOGIN';

export const loginUser = (username, password) => {
    return async dispatch => {
        try {
            let url = 'http://api-fruit.o2t2.com/api/Users/token.json';
            let postData = JSON.stringify({
                username: username,
                password: password,
            });
            console.log('resendOTP url =', url);
            console.log('resendOTP postData =', postData);

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: postData,
            });
            console.log('response raw', response);

            let data = await response.json();

            console.log('data' + JSON.stringify(data));

            let token = data.data.token;
            await AsyncStorage.setItem('TOKEN', token);
            dispatch({
                type: LOGIN,
                payload: data.data.token,
            });
        } catch (e) {
            console.log(e.message);
        }
    };
};
