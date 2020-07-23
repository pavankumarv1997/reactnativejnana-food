import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer mz5b78sQIih8zagxfrJiZJUd35nhegWeIW9-s3sEGHkMPkC2EQr4XyjBp-Yg4q1hAa99k1I2BMyqx6uv996h8xPVOKTlANps2PM9vthhmugYg3C9S-xbIHWr3ugWX3Yx",
  },
});
