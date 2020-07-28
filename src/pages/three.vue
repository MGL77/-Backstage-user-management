<template>
  <div class="one">
    <p>
      Welcome to use next time /
      <span @click="jin">get into</span>
    </p>
  </div>
</template>
<script>
export default {
  methods: {
    jin() {
      this.$router.push({
        path: "/home",
      });
    },
  },
};
</script>
<style scoped>
.one {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  text-align: center;
  line-height: 800px;
}
p {
  font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑,
    STHeiti, MingLiu;
  overflow: hidden;
  font-size: 30px;
  font-style: oblique;
  font-weight: bold;
  line-height: 800px;
  background-image: -webkit-linear-gradient(
    left,
    rgb(29, 88, 29),
    rgb(238, 238, 57),
    pink,
    rgb(5, 62, 109),
    rgb(172, 41, 41) 25%,
    rgb(48, 145, 48) 35%,
    rgb(77, 77, 156) 50%,
    rgb(165, 165, 3) 60%,
    rgb(112, 60, 60) 75%,
    pink 85%,
    rgb(35, 35, 63) 100%
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: stream 15s infinite linear;
  background-size: 200% 100%;
}
@keyframes stream {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
span {
  cursor: pointer;
}
</style>