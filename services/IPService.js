import {Dimensions, Platform} from 'react-native';

class IPService {
  async saveUserInfo() {
    const response = await fetch(
      `https://niklab.herokuapp.com/ips/get-detail`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nameOs: `${Platform.OS}-${Platform.Version}`,
          nameBrowser: 'Android React Native',
          screenWidth: Dimensions.get('window').width,
          screenHeight: Dimensions.get('window').height,
          mobileInfo: JSON.stringify({typeDevice: 'Android app'}),
        }),
      },
    );
    let result = await response.json();
    console.log('===IP infor', result);
    return result;
  }
}
export default new IPService();
