import axios from 'axios';
async function regSw () {
  if ('serviceWorker' in navigator) {
    let url = process.env.PUBLIC_URL + '/sw.js';
    const reg = await navigator.serviceWorker.register (url, {scope: '/'});
    console.log ('service config is', {reg});
    return reg;
  }
  throw Error ('serviceworker not supported');
};


async function subscribe (serviceWorkerReg) {
    let subscription = await serviceWorkerReg.pushManager.getSubscription();
    console.log ({subscription});
    if (subscription === null) {
      subscription = await serviceWorkerReg.pushManager.subscribe ({
        userVisibleOnly: true,
        applicationServerKey: 'BI62g4tnp6vcBQUHPM05tH5L21MlQUo336VirBz9l1GYjHXiWcc94fbhxq2xRgZ1gQovBQdzvQQPOJqZkqXDb_8',
      });
      await axios.post ('/api/subscription/subscribe', subscription);
    }
  }

  export {regSw, subscribe};