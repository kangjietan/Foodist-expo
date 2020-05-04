module.exports = {
  randomInt: (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  getUserLocation: () => {
    return new Promise((resolve, reject) => {
      const showPosition = (position) => resolve([position.coords.latitude, position.coords.longitude]);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  }
}