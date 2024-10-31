import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from './../../constants/Colors'
import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

export const useWarmUpBrowser = () => {
    React.useEffect(() => {
        void WebBrowser.warmUpAsync()
        return () => { 
            void WebBrowser.coolDownAsync()
        }
    }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen () {

    useWarmUpBrowser()
    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google'})

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, SignIn, SignUp, setActive } = await startOAuthFlow({
                redirectUrl: Linking.createURL('/home', {scheme: 'myapp'}),

            })
            
            if (createdSessionId) {
            } else {
                // Use signIn or SigUp for next steps such MFA
            }
        }    catch (err) {
            console.error('OAuth error', err)
        }
    }, [])
    return (
        <View style ={{
            backgroundColor: Colors.WHITE,
            height: '100%'
        }}>
           <Image source ={require('./../../assets/images/login.png')}
                style ={{
                    width: '100%',
                    height: 500
                }} />
            <View style = {{
                padding: 20,
                display: 'flex',
                alignItems: 'center'
            }}>
                <Text style = {{
                    fontFamily: 'firasans-bold',
                    fontSize: 30,
                    textAlign: 'center'
                }}>
                    Are You Ready? 
                </Text>
                <Text style = {{
                    fontFamily: 'firasans',
                    fontSize: 18,
                    textAlign: 'center',
                    color: Colors.GRAY
                }}>
                    Vamos a entrenar con personalización para ti
                </Text>

                <Pressable 
                    onPress={onPress}
                    style = {{
                        padding: 14,
                        marginTop: 100,
                        backgroundColor: Colors.PRIMARY,
                        width: '100%',
                        borderRadius: 14
                }}>
                 <Text 
                    style = {{
                      fontFamily: 'firasans-medium',
                      fontSize: 20,
                      textAlign: 'center'  
                    }}> Crear cuenta </Text>   
                </Pressable>
            </View>
        </View>
    )
}