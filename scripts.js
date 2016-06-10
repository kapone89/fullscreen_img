new Vue({
  el: '#app',
  data: {
    image_url: "",
  },
  ready: function () {
    this.image_url = window.location.hash.substring(1);
  },
});
