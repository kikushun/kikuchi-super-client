<template>
  <v-container :fluid="$device.isMobile" :class="{ 'px-8': $device.isDesktop, 'px-2': $device.isMobile }" class="mt-20 pt-10">
    <base-animation class="px-4">
      <base-goto />
      <template v-if="$device.isDesktop">
        <v-row no-gutters class="bg-[#ffffffb8] pa-4">
          <v-col cols="4">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/daihyo_riji.png" class="w-full daihyo-img" />
          </v-col>
          <v-col cols="8" class="pl-8">
            <v-row no-gutters align-content="end" align="end" class="pt-4">
              <v-col cols="auto" class="text-urubrown text-32b pr-3">代表理事</v-col>
              <v-col cols="auto" class="text-40b text-urublack pl-3">
                <ruby>長岐<rt>ながき</rt>&nbsp;裕美<rt>ひろみ</rt></ruby>
              </v-col>
            </v-row>
            <div class="text-24 text-urublack pt-4">
              <div class="mb-1">株式会社ながき　夫婦経営</div>
              <div class="mb-1">ながき鍼灸整骨院副院長</div>
              <div class="mb-1">鍼灸師/エステティシャン</div>
              <div class="mb-1">のびのび遊べる・つながる場</div>
              <div class="mb-4">wacca代表</div>
              <div class="mb-1">強烈個性派3兄妹の母</div>
              <div class="mb-1">第2子 ダウン症</div>
              <div class="mb-1">第3子先天性心疾患（根治済）</div>
              <div class="mb-1">NHK目撃！にっぽん</div>
              <div class="mb-1">妹が生まれなかったかもしれない世界</div>
              <div class="mb-1">〜出生前診断と向き合って〜出演</div>
            </div>
          </v-col>
        </v-row>
      </template>
      <template v-if="$device.isMobile">
        <div align="center">
          <v-img src="https://dvso56c4dpyp.cloudfront.net/daihyo_riji.png" class="w-3/4 daihyo-img" />
        </div>
        <v-row no-gutters align-content="end" align="end" justify="center" class="pt-4">
          <v-col cols="auto" class="text-urubrown text-24b pr-3">代表理事</v-col>
          <v-col cols="auto" class="text-28b text-urublack pl-3">
            <ruby>長岐<rt>ながき</rt>&nbsp;裕美<rt>ひろみ</rt></ruby>
          </v-col>
        </v-row>
        <div class="text-18 text-urublack pt-4">
          <v-card color="#ffffffb8" variant="flat" class="mb-2 pa-4">
            <div class="mb-1">株式会社ながき　夫婦経営</div>
            <div class="mb-1">ながき鍼灸整骨院副院長</div>
            <div class="mb-1">鍼灸師/エステティシャン</div>
            <div class="mb-1">のびのび遊べる・つながる場</div>
            <div class="mb-4">wacca代表</div>
            <div class="mb-1">強烈個性派3兄妹の母</div>
            <div class="mb-1">第2子 ダウン症</div>
            <div class="mb-1">第3子先天性心疾患（根治済）</div>
            <div class="mb-1">NHK目撃！にっぽん</div>
            <div class="mb-1">妹が生まれなかったかもしれない世界</div>
            <div class="mb-1">〜出生前診断と向き合って〜出演</div>
          </v-card>
        </div>
      </template>
    </base-animation>
  </v-container>
</template>
<style scoped>
.daihyo-img {
  border-radius: 100% 100% 100% 100%;
}
</style>
