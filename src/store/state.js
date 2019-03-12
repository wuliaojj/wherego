let defaultCity = '湛江'
try {
    if (localStorage.city) {
      defaultCity = localStorage.city
    }
  } catch (e) {}
export default {
    city: defaultCity
  }