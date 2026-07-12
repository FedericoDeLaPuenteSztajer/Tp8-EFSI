import { View, ImageBackground, StyleSheet, Text, TextInput, Image, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const LoginErrorScreen = (props) => {
    return (
        <>
            <View>
                <Text>Login error: username o contraseña incorrectos</Text>
                <Button
                    title='Volver a intentar'
                    color='#109e36'
                    onPress={() => props.setLogFailed(false)}
                />
            </View>
        </>)
};

const styles = StyleSheet.create({

});

export default LoginErrorScreen;