<template>
  <v-container :fluid="$device.isMobile" :class="{ 'px-8': $device.isDesktop, 'px-2': $device.isMobile }" class="mt-20 pt-10">
    <base-animation class="px-4">
      <base-goto />
      <template v-if="$device.isDesktop">
        <v-row no-gutters class="bg-[#ffffffb8] pa-4">
          <v-col cols="4">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/riji_nomoto.png" class="w-full daihyo-img" />
          </v-col>
          <v-col cols="8" class="pl-8">
            <v-row no-gutters align-content="end" align="end" class="pt-4">
              <v-col cols="auto" class="text-urubrown text-32b pr-3">理事</v-col>
              <v-col cols="auto" class="text-40b text-urublack pl-3">
                <ruby>野本<rt>のもと</rt>&nbsp;茂夫<rt>しげお</rt></ruby>
              </v-col>
            </v-row>
            <div class="text-24 text-urublack pt-4">
              <div class="mb-1">渡辺学園理事</div>
              <div class="mb-1">日本言語障害児教育研究会副会長</div>
              <div class="mb-1">國學院大學人間開発学部前教授</div>
              <div class="mb-1">東京学芸大学大学院修了後、障がい幼児の教育相談員・障害児通園施設相談員・全国療育相談センター言語相談員 國學院大學幼况教育專門学校專任教員、主事を経て、</div>
              <div class="mb-1">2011年4月より</div>
              <div class="mb-1">國學院大学人間開発学部（2022年3月まで）にて教授を務める。 この間、巡回保育相談、園内研究会等、保育現場での保育臨床相談を通した保育支援を行ってきた。</div>
              <div class="mb-1">「障害児保育入門ーどの子にもうれしい保育をめざして」</div>
              <div class="mb-1">「地域における保育臨床相談のあり方」</div>
              <div class="mb-1">「基礎からわかる言語障害児教育」等、その他、執筆に携わる書籍・論文多数。</div>
            </div>
          </v-col>
        </v-row>

        <v-row no-gutters class="bg-[#ffffffb8] pa-4 mt-8">
          <v-col cols="4">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/riji_omameuda.png" class="w-full daihyo-img" />
          </v-col>
          <v-col cols="8" class="pl-8">
            <v-row no-gutters align-content="end" align="end" class="pt-4">
              <v-col cols="auto" class="text-urubrown text-32b pr-3">理事</v-col>
              <v-col cols="auto" class="text-40b text-urublack pl-3">
                <ruby>大豆生田<rt>おおまめうだ</rt>&nbsp;啓友<rt>ひろとも</rt></ruby>
              </v-col>
            </v-row>
            <div class="text-24 text-urublack pt-4">
              <div class="mb-1">所属玉川大学教育学教授</div>
              <div class="mb-1">日本保育学会理事</div>
              <div class="mb-1">日本こども環境学会理事</div>
              <div class="mb-1">日本乳幼児教育学会理事</div>
              <div class="mb-1">内閣官房（こども家庭庁準備室）</div>
              <div class="mb-1">「就学前のこどもの育ちに係る基本的な指針」に関する有識者懇談会委員（座長代理）</div>
              <div class="mb-1">文部科学省「幼保小の接続期の教育の質的向上に関する検討チーム」委員</div>
              <div class="mb-1">よこはま★保育・教育宣言運用協議会委員</div>
              <div class="mb-1">yahoo japan公式コメンテーター</div>
              <div class="mb-1">NHK・Eテレ「すくすく子育て」出演</div>
              <div class="mb-1">テレビ静岡「テレビ寺子屋」出演など</div>
              <div class="mb-1">幅広く活動している</div>
              <div class="mb-1">保育者向け、保護者向け・一般向け</div>
              <div class="mb-1">など著者多数</div>
            </div>
          </v-col>
        </v-row>

        <v-row no-gutters class="bg-[#ffffffb8] pa-4 mt-8">
          <v-col cols="4">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/riji_sasaki.png" class="w-full daihyo-img" />
          </v-col>
          <v-col cols="8" class="pl-8">
            <v-row no-gutters align-content="end" align="end" class="pt-4">
              <v-col cols="auto" class="text-urubrown text-32b pr-3">理事</v-col>
              <v-col cols="auto" class="text-40b text-urublack pl-3">
                <ruby>佐々木<rt>ささき</rt>&nbsp;誠<rt>まこと</rt></ruby>
              </v-col>
            </v-row>
            <div class="text-24 text-urublack pt-4">
              <div class="mb-1">学校法人 渡辺学園参与</div>
              <div class="mb-1">認定こども園</div>
              <div class="mb-1">ゆうゆうのもり幼保園事務長</div>
            </div>
          </v-col>
        </v-row>

        <v-row no-gutters class="bg-[#ffffffb8] pa-4 mt-8">
          <v-col cols="4">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/riji_sadakane.png" class="w-full daihyo-img" />
          </v-col>
          <v-col cols="8" class="pl-8">
            <v-row no-gutters align-content="end" align="end" class="pt-4">
              <v-col cols="auto" class="text-urubrown text-32b pr-3">理事</v-col>
              <v-col cols="auto" class="text-40b text-urublack pl-3">
                <ruby>定金<rt>さだかね</rt>&nbsp;雅子<rt>まさこ</rt></ruby>
              </v-col>
            </v-row>
            <div class="text-24 text-urublack pt-4">
              <div class="mb-1">小児専門作業療法士</div>
              <div class="mb-1">育児発達支援室ここん代表</div>
              <div class="mb-1">10年ほど医療機関でリハビリテーションの仕事をしたのちに渡米</div>
              <div class="mb-1">自閉スペクトラム症の専門機関で研修を受ける</div>
              <div class="mb-1">その後カンボジアで幼稚園の先生を経て</div>
              <div class="mb-1">カンボジア初となる赤ちゃん教室を開室</div>
              <div class="mb-1">日本に帰国後、発達外来で勤務しながら、『かかりつけ療法士』として、地域の中で誰もがいつでも相談できる専門機関として育児発達支援室ここんを開設</div>
              <div class="mb-1">専門職向けの講座や講演会</div>
              <div class="mb-1">保育施設での保育者向け研修などでも活躍している</div>
            </div>
          </v-col>
        </v-row>

        <v-row no-gutters class="bg-[#ffffffb8] pa-4 mt-8">
          <v-col cols="4">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/riji_tsukazaki.png" class="w-full daihyo-img" />
          </v-col>
          <v-col cols="8" class="pl-8">
            <v-row no-gutters align-content="end" align="end" class="pt-4">
              <v-col cols="auto" class="text-urubrown text-32b pr-3">理事</v-col>
              <v-col cols="auto" class="text-40b text-urublack pl-3">
                <ruby>墳﨑<rt>つかざき</rt>&nbsp;知美<rt>ともみ</rt></ruby>
              </v-col>
            </v-row>
            <div class="text-24 text-urublack pt-4">
              <div class="mb-1">幼稚園教諭／保育士</div>
              <div class="mb-1">2児の母</div>
              <div class="mb-1">長男に先天性心疾患があり、</div>
              <div class="mb-1">2度の手術を乗り越え元気に成長中です。</div>
              <div class="mb-1">のびのび遊べる・つながる場</div>
              <div class="mb-1">wacca主催者</div>
            </div>
          </v-col>
        </v-row>

        <v-row no-gutters class="bg-[#ffffffb8] pa-4 mt-8">
          <v-col cols="4">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/riji_nagaki.png" class="w-full daihyo-img" />
          </v-col>
          <v-col cols="8" class="pl-8">
            <v-row no-gutters align-content="end" align="end" class="pt-4">
              <v-col cols="auto" class="text-urubrown text-32b pr-3">社員（役員）</v-col>
              <v-col cols="auto" class="text-40b text-urublack pl-3">
                <ruby>長岐<rt>ながき</rt>&nbsp;祐良<rt>ゆうすけ</rt></ruby>
              </v-col>
            </v-row>
            <div class="text-24 text-urublack pt-4">
              <div class="mb-1">ながき鍼灸整骨院院長</div>
              <div class="mb-1">鍼灸師/柔道整復師</div>
              <div class="mb-1">のびのび遊べる・つながる場</div>
              <div class="mb-1">waccaスポンサー</div>
              <div class="mb-1">涙もろい3児のパパ</div>
              <div class="mb-1">第2子ダウン症児</div>
              <div class="mb-1">第3子先天性心疾患児（根治済）</div>
            </div>
          </v-col>
        </v-row>

        <v-row no-gutters class="bg-[#ffffffb8] pa-4 mt-8">
          <v-col cols="4">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/riji_watanabe_chinami.png" class="w-full daihyo-img" />
          </v-col>
          <v-col cols="8" class="pl-8">
            <v-row no-gutters align-content="end" align="end" class="pt-4">
              <v-col cols="auto" class="text-urubrown text-32b pr-3">社員（役員）</v-col>
              <v-col cols="auto" class="text-40b text-urublack pl-3">
                <ruby>渡邉<rt>わたなべ</rt>&nbsp;千奈美<rt>ちなみ</rt></ruby>
              </v-col>
            </v-row>
            <div class="text-24 text-urublack pt-4">
              <div class="mb-1">幼稚園教諭/保育士</div>
              <div class="mb-1">のびのび遊べる・つながる場</div>
              <div class="mb-1">wacca主催者</div>
            </div>
          </v-col>
        </v-row>

        <v-row no-gutters class="bg-[#ffffffb8] pa-4 mt-8">
          <v-col cols="4">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/riji_watanabe_hidenori.png" class="w-full daihyo-img" />
          </v-col>
          <v-col cols="8" class="pl-8">
            <v-row no-gutters align-content="end" align="end" class="pt-4">
              <v-col cols="auto" class="text-urubrown text-32b pr-3">顧問</v-col>
              <v-col cols="auto" class="text-40b text-urublack pl-3">
                <ruby>渡辺<rt>わたなべ</rt>&nbsp;英則<rt>ひでのり</rt></ruby>
              </v-col>
            </v-row>
            <div class="text-24 text-urublack pt-4">
              <div class="mb-1">学校法人渡辺学園 理事長</div>
              <div class="mb-1">港北幼稚園園長</div>
              <div class="mb-1">認定こども園</div>
              <div class="mb-1">ゆうゆうのもり幼保園園長</div>
              <div class="mb-1">横浜市幼稚園協会副会長</div>
              <div class="mb-1">全国認定こども園連絡協議会副会長</div>
              <div class="mb-1">文科省 中央教育審議会（幼児教育と小学校教育の架け橋特別検討会委員）</div>
              <div class="mb-1">関東学院大学、國學院大学、田園調布学園大学大学院にて非常勤講師を務める。</div>
              <div class="mb-1">幼児教育についての講演活動や執筆活動なども行う。</div>
            </div>
          </v-col>
        </v-row>
      </template>

      <template v-if="$device.isMobile">
        <div>
          <div align="center">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/riji_nomoto.png" class="w-3/4 daihyo-img" />
          </div>
          <v-row no-gutters align-content="end" align="end" justify="center" class="pt-4">
            <v-col cols="auto" class="text-urubrown text-24b pr-3">理事</v-col>
            <v-col cols="auto" class="text-28b text-urublack pl-3">
              <ruby>野本<rt>のもと</rt>&nbsp;茂夫<rt>しげお</rt></ruby>
            </v-col>
          </v-row>
          <div class="text-18 text-urublack pt-4">
            <v-card color="#ffffffb8" variant="flat" class="mb-2 pa-4">
              <div class="mb-1">渡辺学園理事</div>
              <div class="mb-1">日本言語障害児教育研究会副会長</div>
              <div class="mb-1">國學院大學人間開発学部前教授</div>
              <div class="mb-1">東京学芸大学大学院修了後、障がい幼児の教育相談員・障害児通園施設相談員・全国療育相談センター言語相談員 國學院大學幼况教育專門学校專任教員、主事を経て、</div>
              <div class="mb-1">2011年4月より</div>
              <div class="mb-1">國學院大学人間開発学部（2022年3月まで）にて教授を務める。 この間、巡回保育相談、園内研究会等、保育現場での保育臨床相談を通した保育支援を行ってきた。</div>
              <div class="mb-1">「障害児保育入門ーどの子にもうれしい保育をめざして」</div>
              <div class="mb-1">「地域における保育臨床相談のあり方」</div>
              <div class="mb-1">「基礎からわかる言語障害児教育」等、その他、執筆に携わる書籍・論文多数。</div>
            </v-card>
          </div>
        </div>

        <div class="mt-4">
          <div align="center">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/riji_omameuda.png" class="w-3/4 daihyo-img" />
          </div>
          <v-row no-gutters align-content="end" align="end" justify="center" class="pt-4">
            <v-col cols="auto" class="text-urubrown text-24b pr-3">理事</v-col>
            <v-col cols="auto" class="text-28b text-urublack pl-3">
              <ruby>大豆生田<rt>おおまめうだ</rt>&nbsp;啓友<rt>ひろとも</rt></ruby>
            </v-col>
          </v-row>
          <div class="text-18 text-urublack pt-4">
            <v-card color="#ffffffb8" variant="flat" class="mb-2 pa-4">
              <div class="mb-1">所属玉川大学教育学教授</div>
              <div class="mb-1">日本保育学会理事</div>
              <div class="mb-1">日本こども環境学会理事</div>
              <div class="mb-1">日本乳幼児教育学会理事</div>
              <div class="mb-1">内閣官房（こども家庭庁準備室）</div>
              <div class="mb-1">「就学前のこどもの育ちに係る基本的な指針」に関する有識者懇談会委員（座長代理）</div>
              <div class="mb-1">文部科学省「幼保小の接続期の教育の質的向上に関する検討チーム」委員</div>
              <div class="mb-1">よこはま★保育・教育宣言運用協議会委員</div>
              <div class="mb-1">yahoo japan公式コメンテーター</div>
              <div class="mb-1">NHK・Eテレ「すくすく子育て」出演</div>
              <div class="mb-1">テレビ静岡「テレビ寺子屋」出演など</div>
              <div class="mb-1">幅広く活動している</div>
              <div class="mb-1">保育者向け、保護者向け・一般向け</div>
              <div class="mb-1">など著者多数</div>
            </v-card>
          </div>
        </div>

        <div class="mt-4">
          <div align="center">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/riji_sasaki.png" class="w-3/4 daihyo-img" />
          </div>
          <v-row no-gutters align-content="end" align="end" justify="center" class="pt-4">
            <v-col cols="auto" class="text-urubrown text-24b pr-3">理事</v-col>
            <v-col cols="auto" class="text-28b text-urublack pl-3">
              <ruby>佐々木<rt>ささき</rt>&nbsp;誠<rt>まこと</rt></ruby>
            </v-col>
          </v-row>
          <div class="text-18 text-urublack pt-4">
            <v-card color="#ffffffb8" variant="flat" class="mb-2 pa-4">
              <div class="mb-1">学校法人 渡辺学園参与</div>
              <div class="mb-1">認定こども園</div>
              <div class="mb-1">ゆうゆうのもり幼保園事務長</div>
            </v-card>
          </div>
        </div>

        <div class="mt-4">
          <div align="center">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/riji_sadakane.png" class="w-3/4 daihyo-img" />
          </div>
          <v-row no-gutters align-content="end" align="end" justify="center" class="pt-4">
            <v-col cols="auto" class="text-urubrown text-24b pr-3">理事</v-col>
            <v-col cols="auto" class="text-28b text-urublack pl-3">
              <ruby>定金<rt>さだかね</rt>&nbsp;雅子<rt>まさこ</rt></ruby>
            </v-col>
          </v-row>
          <div class="text-18 text-urublack pt-4">
            <v-card color="#ffffffb8" variant="flat" class="mb-2 pa-4">
              <div class="mb-1">小児専門作業療法士</div>
              <div class="mb-1">育児発達支援室ここん代表</div>
              <div class="mb-1">10年ほど医療機関でリハビリテーションの仕事をしたのちに渡米</div>
              <div class="mb-1">自閉スペクトラム症の専門機関で研修を受ける</div>
              <div class="mb-1">その後カンボジアで幼稚園の先生を経て</div>
              <div class="mb-1">カンボジア初となる赤ちゃん教室を開室</div>
              <div class="mb-1">日本に帰国後、発達外来で勤務しながら、『かかりつけ療法士』として、地域の中で誰もがいつでも相談できる専門機関として育児発達支援室ここんを開設</div>
              <div class="mb-1">専門職向けの講座や講演会</div>
              <div class="mb-1">保育施設での保育者向け研修などでも活躍している</div>
            </v-card>
          </div>
        </div>

        <div class="mt-4">
          <div align="center">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/riji_tsukazaki.png" class="w-3/4 daihyo-img" />
          </div>
          <v-row no-gutters align-content="end" align="end" justify="center" class="pt-4">
            <v-col cols="auto" class="text-urubrown text-24b pr-3">理事</v-col>
            <v-col cols="auto" class="text-28b text-urublack pl-3">
              <ruby>墳﨑<rt>つかざき</rt>&nbsp;知美<rt>ともみ</rt></ruby>
            </v-col>
          </v-row>
          <div class="text-18 text-urublack pt-4">
            <v-card color="#ffffffb8" variant="flat" class="mb-2 pa-4">
              <div class="mb-1">幼稚園教諭／保育士</div>
              <div class="mb-1">2児の母</div>
              <div class="mb-1">長男に先天性心疾患があり、</div>
              <div class="mb-1">2度の手術を乗り越え元気に成長中です。</div>
              <div class="mb-1">のびのび遊べる・つながる場</div>
              <div class="mb-1">wacca主催者</div>
            </v-card>
          </div>
        </div>

        <div class="mt-4">
          <div align="center">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/riji_nagaki.png" class="w-3/4 daihyo-img" />
          </div>
          <v-row no-gutters align-content="end" align="end" justify="center" class="pt-4">
            <v-col cols="auto" class="text-urubrown text-24b pr-3">社員(役員)</v-col>
            <v-col cols="auto" class="text-28b text-urublack pl-3">
              <ruby>長岐<rt>ながき</rt>&nbsp;祐良<rt>ゆうすけ</rt></ruby>
            </v-col>
          </v-row>
          <div class="text-18 text-urublack pt-4">
            <v-card color="#ffffffb8" variant="flat" class="mb-2 pa-4">
              <div class="mb-1">ながき鍼灸整骨院院長</div>
              <div class="mb-1">鍼灸師/柔道整復師</div>
              <div class="mb-1">のびのび遊べる・つながる場</div>
              <div class="mb-1">waccaスポンサー</div>
              <div class="mb-1">涙もろい3児のパパ</div>
              <div class="mb-1">第2子ダウン症児</div>
              <div class="mb-1">第3子先天性心疾患児（根治済）</div>
            </v-card>
          </div>
        </div>

        <div class="mt-4">
          <div align="center">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/riji_watanabe_chinami.png" class="w-3/4 daihyo-img" />
          </div>
          <v-row no-gutters align-content="end" align="end" justify="center" class="pt-4">
            <v-col cols="auto" class="text-urubrown text-24b pr-3">社員(役員)</v-col>
            <v-col cols="auto" class="text-28b text-urublack pl-3">
              <ruby>渡邉<rt>わたなべ</rt>&nbsp;千奈美<rt>ちなみ</rt></ruby>
            </v-col>
          </v-row>
          <div class="text-18 text-urublack pt-4">
            <v-card color="#ffffffb8" variant="flat" class="mb-2 pa-4">
              <div class="mb-1">幼稚園教諭/保育士</div>
              <div class="mb-1">のびのび遊べる・つながる場</div>
              <div class="mb-1">wacca主催者</div>
            </v-card>
          </div>
        </div>

        <div class="mt-4">
          <div align="center">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/riji_watanabe_hidenori.png" class="w-3/4 daihyo-img" />
          </div>
          <v-row no-gutters align-content="end" align="end" justify="center" class="pt-4">
            <v-col cols="auto" class="text-urubrown text-24b pr-3">顧問</v-col>
            <v-col cols="auto" class="text-28b text-urublack pl-3">
              <ruby>渡辺<rt>わたなべ</rt>&nbsp;英則<rt>ひでのり</rt></ruby>
            </v-col>
          </v-row>
          <div class="text-18 text-urublack pt-4">
            <v-card color="#ffffffb8" variant="flat" class="mb-2 pa-4">
              <div class="mb-1">学校法人渡辺学園 理事長</div>
              <div class="mb-1">港北幼稚園園長</div>
              <div class="mb-1">認定こども園</div>
              <div class="mb-1">ゆうゆうのもり幼保園園長</div>
              <div class="mb-1">横浜市幼稚園協会副会長</div>
              <div class="mb-1">全国認定こども園連絡協議会副会長</div>
              <div class="mb-1">文科省 中央教育審議会（幼児教育と小学校教育の架け橋特別検討会委員）</div>
              <div class="mb-1">関東学院大学、國學院大学、田園調布学園大学大学院にて非常勤講師を務める。</div>
              <div class="mb-1">幼児教育についての講演活動や執筆活動なども行う。</div>
            </v-card>
          </div>
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
