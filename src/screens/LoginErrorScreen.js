import { View, ImageBackground, StyleSheet, Text, TextInput, Image, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const LoginErrorScreen = (props) => {
    return (
        <View style={styles.sessionContainer}>
            <Text style={styles.Title}>Login error: username o contraseña incorrectos</Text>
            <Button
                title='Volver a intentar'
                color='#109e36'
                onPress={() => props.setLogFailed(false)}
            />
        </View>
        )
};

const styles = StyleSheet.create({
    sessionContainer: {
        flex: 1,
        width: '100',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BannerSection: {
        marginTop: 20,
    },
    Title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 25,
    },
    DataSection: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    DataInput: {
        width: '200%',
        marginLeft: '-50%',
        marginRight: '0%',
        borderWidth: 1,
        borderRadius: 2,
        marginTop: 1.5,
        marginBottom: 1.5,
        padding: 2.5
    },
});

export default LoginErrorScreen;