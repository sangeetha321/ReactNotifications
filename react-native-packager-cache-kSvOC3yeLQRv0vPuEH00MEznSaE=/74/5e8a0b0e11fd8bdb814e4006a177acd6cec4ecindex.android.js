Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/sangeetha/AndroidStudioProjects/ReactNotifications/index.android.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var PushNotification = require('react-native-push-notification');
PushNotification.configure({
    onRegister: function onRegister(token) {
        console.log(token);
        console.log('TOKEN:', token);
        fetch('https://iid.googleapis.com/iid/v1/' + token.token + '/rel/topics/notification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'key=AAAAXbZQeck:APA91bF4Jo1LYJXa-sDjgff16LgKTkFaZoOL-17iyMG0fDSyBWD8WlVOF5GDB3OPKJljNHgCJDWwMQEWn-RlgHRZckM4VSg4QQNI6x1V_W6YCtQP5LwDArl_NTFSkCneobvsMSLefBgH'
            }
        }).then(function (result) {
            console.log(result);
        });
    },

    onNotification: function onNotification(notification) {
        console.log("entered");
        console.log('NOTIFICATION:', notification);
        PushNotification.localNotification({
            id: '0',
            ticker: "My Notification Ticker",
            autoCancel: true,
            largeIcon: "ic_launcher",
            smallIcon: "ic_notification",
            bigText: "This is a test message for Notifications",
            subText: "This is a Message",
            color: "red",
            vibrate: true,
            vibration: 300,
            tag: 'some_tag',
            group: "group",
            ongoing: false,
            title: "New Notification",
            message: notification.message,
            playSound: true,
            soundName: 'default',
            number: '10',
            actions: '["View", "Cancel"]' });
    },

    senderID: "402490685897",

    permissions: {
        alert: true,
        badge: true,
        sound: true
    },

    popInitialNotification: true,

    requestPermissions: true
});

var ReactNotifications = function (_Component) {
    babelHelpers.inherits(ReactNotifications, _Component);

    function ReactNotifications(props) {
        babelHelpers.classCallCheck(this, ReactNotifications);

        var _this = babelHelpers.possibleConstructorReturn(this, (ReactNotifications.__proto__ || Object.getPrototypeOf(ReactNotifications)).call(this, props));

        _this.notify = function () {};

        return _this;
    }

    babelHelpers.createClass(ReactNotifications, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNative.View,
                { style: styles.container, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 104
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: styles.welcome, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 107
                        }
                    },
                    'Welcomes to React Native!',
                    this.props.name,
                    ' '
                ),
                _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: this.notify, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 112
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 115
                            }
                        },
                        'Click'
                    )
                )
            );
        }
    }]);
    return ReactNotifications;
}(_react.Component);

exports.default = ReactNotifications;


var styles = _reactNative.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

_reactNative.AppRegistry.registerComponent('ReactNotifications', function () {
    return ReactNotifications;
});