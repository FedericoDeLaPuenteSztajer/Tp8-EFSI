import { View, ImageBackground, StyleSheet, Text, TextInput, Image, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const SignUpScreen = (props) => {
    return (<View style={styles.sessionContainer}>
        <View style={styles.BannerSection}>
            <Text style={styles.Title}>Registrate Hoy!</Text>
        </View>

        <View style={styles.DataSection}>
            <TextInput
                style={styles.DataInput}
                numberOfLines={1}
                maxLength={40}
                onChangeText={(text) =>
                    props.setUserTry(prev => ({
                        ...prev,
                        username: text
                    }))}
                value={props.userTry["username"]}
            />
            <TextInput
                style={styles.DataInput}
                editable
                numberOfLines={1}
                maxLength={40}
                onChangeText={(text) =>
                    props.setUserTry(prev => ({
                        ...prev,
                        password: text
                    }))}
                value={props.userTry["password"]}
            />
        </View>

        <View>
            <Button
                title='Sign Up'
                color='#b62edf'
                onPress={() => props.signUp()}
            />
        </View>
    </View>)
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
        textAlign: 'center'
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


export default SignUpScreen;