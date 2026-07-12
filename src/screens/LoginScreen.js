import { View, ImageBackground, StyleSheet, Text, TextInput, Image, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const LoginScreen = (props) => {
    return (<>
        <View style={styles.BannerSection}>
            <Text style={styles.Title}>Inicia Sesión!</Text>
        </View>

        <View style={styles.DataSection}>
            <TextInput
                style={styles.DataInput}
                numberOfLines={1}
                maxLength={40}
                onChangeText={props.setUserTry["username"]}
                value={props.userTry["username"]}
            />
            <TextInput
                style={styles.DataInput}
                editable
                numberOfLines={1}
                maxLength={40}
                onChangeText={props.setUserTry["password"]}
                value={props.userTry["password"]}
            />
        </View>

        <View>
            <Button
                title='Join'
                color='#b62edf'
                onPress={() => props.login()}
            />
        </View>
    </>)
};

const styles = StyleSheet.create({
    BannerSection: {
        marginTop: 20,
    },
    Title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    DataSection: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    DataInput: {
        width: '50%',
        marginLeft: '25%',
        marginRight: '25%',
        borderWidth: 1,
        borderRadius: 2,
        marginTop: 1.5,
        marginBottom: 1.5,
        padding: 2.5
    },
});

export default LoginScreen;