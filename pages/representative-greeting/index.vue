<template>
  <v-container :fluid="$device.isMobile" :class="{ 'px-8': $device.isDesktop, 'px-2': $device.isMobile }" class="mt-20 pt-10">
    <base-animation class="px-4">
      <base-goto />
      <h2 class="title text-20b pl-2 py-1">代表メッセージ</h2>
      <v-card class="mt-8 pa-4" outlined>
        <div class="mt-4">
          <v-row no-gutters>
            <v-col cols="4">
              <v-img src="https://dvso56c4dpyp.cloudfront.net/representative_greeting.jpeg" class="w-full" />
            </v-col>
            <v-col cols="8" class="text-urubrown pl-4" :class="{ 'text-18': $device.isDesktop, 'text-16': $device.isMobile, 'pb-4': $device.isMobile }">
              代表理事 長岐 裕美<br />
              株式会社ながき 夫婦経営<br />
              ながき鍼灸整骨院 副院長<br />
              鍼灸師/エステティシャン<br />
              のびのび遊べる・つながる場<br />
              wacca代表<br />
            </v-col>
          </v-row>
        </div>
      </v-card>
    </base-animation>
  </v-container>
</template>
<style scoped>
.title {
  color: #8c6d65;
  position: relative;
  background: #ebddd9;
  box-shadow: 0px 0px 0px 5px #ebddd9;
  border: dashed 2px white;
}

.title:before {
  position: absolute;
  content: "";
  left: -7px;
  top: -7px;
  border-width: 0 0 15px 15px;
  border-style: solid;
  border-color: #fff #fff #8c6d65;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
}
</style>
