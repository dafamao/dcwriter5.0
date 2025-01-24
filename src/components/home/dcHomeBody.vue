<template>
  <div class="dc-home-body">
    <div class="dc-home-body-Center">
      <div class="dc-home-body-right">
        <div class="dc-home-body-image-bg"></div>
        <img src="../../assets/img/DC-Logo2.png" alt="" />
      </div>
      <div class="dc-home-body-left">
        <div class="dc-home-body-left-top">
          <span class="dc-home-body-left-title">
            DCWriter <span>5.0</span>
          </span>
          <span class="dc-home-body-left-subtitle">{{
            $t("PureFrontFramework")
          }}</span>
        </div>
        <div class="dc-home-body-left-center">{{ $t("textEditor") }}</div>
        <div class="dc-home-body-left-center-desc">
          <span class="dc-home-body-left-center-desc-title"
            >{{ $t("features") }}
          </span>
          <div class="dc-home-body-left-center-desc-title-mobile">
            {{ $t("features1") }}
          </div>
          <span class="dc-home-body-left-center-desc-tag">V5.0</span>
        </div>
        <div class="button-group">
          <div class="button-group1">
            <div class="button-group-item">{{ $t("getStarted") }}</div>
            <div class="button-group-item2" @click="quickStart()">
              {{ $t("quickStart") }}
              <svg
                t="1735194596897"
                class="icon"
                viewBox="0 0 1280 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9782"
                width="16"
                height="16"
                style="margin-left: 5px"
              >
                <path
                  d="M740.07331363 141.33502221c13.09501624 0 24.03945947 4.38766503 32.96928381 13.39164711l324.44000245 324.316406C1106.41860453 488.05323768 1110.84952799 498.9976809 1110.84952799 512c0 13.1320951-4.43092346 24.07653833-13.3669281 32.95692468l-324.44000245 324.44000244c-8.93600464 9.01634193-19.87426758 13.3916471-32.96928381 13.3916471-13.2618711 0-24.34844947-4.37530518-33.11759996-13.1320951-8.80622864-8.88656592-13.22479224-19.96078515-13.22479225-33.21647668 0-13.0023191 4.48036218-23.94676232 13.37928796-32.95692467L952.66494265 558.34857177H230.24520364c-12.79220581 0-23.69338989-4.51126075-32.77153038-13.5214231C188.40789262 535.69338989 183.87809244 524.87872338 183.87809244 512c0-12.74894738 4.52980018-23.68721032 13.59558082-32.70355224C206.55799333 470.16268897 217.45917741 465.65142823 230.23902408 465.65142823h722.42591857L707.11020938 220.51692223c-8.89892578-8.88038635-13.37928796-19.95460487-13.37928796-32.95692467 0-13.2618711 4.4185636-24.33609033 13.22479225-33.08670068C715.72486344 145.58673096 726.81144182 141.21142578 740.07331363 141.21142578v0.12359643z"
                  p-id="9783"
                  fill="var(--text-color)"
                ></path>
              </svg>
            </div>
            <div class="button-group-item3">
              {{ $t("GetLatest5") }}
              <svg
                t="1735190995639"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5073"
                width="16"
                height="16"
                style="margin-left: 5px"
              >
                <path
                  d="M759.250732 63.822584c35.827997 3.815909 54.975079 38.919405 75.459622 59.403948 59.932997 59.932997 119.885438 119.885438 179.818435 179.818435-4.327562 24.464181-37.304627 42.723034-52.980655 57.798381-48.160883 48.695049-96.337115 97.40647-144.497998 146.102542-13.845333 13.847379-41.777499 55.685253-72.248488 35.322483-13.617136-9.100262-19.61985-35.282574-8.02886-51.377134 49.767474-49.76645 99.547227-99.547227 149.314701-149.313677 0-0.535189 0-1.069355 0-1.605567-169.808454-0.599657-294.223045 4.627391-362.849028 102.753245-36.58729 52.317553-48.686862 123.519198-62.615083 199.084221-2.675946 28.361955-5.351891 56.731072-8.027837 85.093027-8.280594 23.984251-47.659463 30.81482-62.615083 8.027837-18.372439-27.992541 14.618952-165.981289 22.476921-194.268542C456.950731 380.509247 544.123117 302.087153 719.11257 272.54021c56.18872 0 112.391766 0 168.579463 0-51.907207-51.907207-103.82874-103.829763-155.734924-155.735947C730.827379 86.35067 732.093209 78.587869 759.250732 63.822584z"
                  fill="var(--text-color)"
                  p-id="5074"
                ></path>
                <path
                  d="M105.803209 136.071072c101.673657 0 203.37699 0 305.049624 0 39.593763 0 91.75168-8.961092 102.754269 20.871353 3.748371 8.340969 0.446162 20.144806-1.605567 27.293623-33.961486 24.842805-241.649666 12.849656-308.260759 12.844539-26.567076-0.002047-58.864666-3.119037-78.670757 4.816702-53.149501 21.295002-48.165999 80.919984-48.165999 155.735947 0 120.937396 0 241.909585 0 362.846982-0.001023 72.669066-7.092535 136.822179 38.532595 163.763784 35.827997 21.154809 122.571616 9.635451 175.001733 9.632381 142.341892 0 284.72881 0 427.068655 0 72.968895-0.00307 151.743006 9.985422 179.818435-35.32146 24.968671-40.293705 11.250228-187.641611 11.238972-252.066923-0.005117-35.997865-6.999414-81.178881 19.265786-91.514273 52.67264-20.726044 43.351344 57.748239 43.349297 97.937566-0.001023 93.871971 17.824971 264.766153-28.89919 311.470871-41.565674 41.549302-140.526547 30.507828-223.167732 30.504758-163.746388 0-327.543941 0-491.290329 0-100.851942 0.00307-181.090405 7.158027-210.324216-64.22065-15.683191-38.293141-6.42227-111.069655-6.421246-160.552649 0-116.655883 0-233.347582 0-350.003466-0.001023-54.43375-11.142781-137.103588 6.421246-179.818435C34.853297 158.090575 62.965565 153.969721 105.803209 136.071072z"
                  fill="var(--text-color)"
                  p-id="5075"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DataCard />
    <div class="dc-home-body-card">
      <div class="dc-home-body-card-item" :title="$t('quickGuide')">
        <div class="dc-home-body-card-item-top">
          <div class="dc-home-body-card-item-icon">
            <jiCheng></jiCheng>
          </div>
          <div class="dc-home-body-card-item-title">
            {{ $t("quickIntegration") }}
          </div>
        </div>
        <div class="dc-home-body-card-item-bottom">
          {{ $t("integrationService") }}
        </div>
      </div>
      <div class="dc-home-body-card-item" :title="$t('browserCompatibility')">
        <div class="dc-home-body-card-item-top">
          <div class="dc-home-body-card-item-icon">
            <qianduan></qianduan>
          </div>
          <div class="dc-home-body-card-item-title">
            {{ $t("frontendMode") }}
          </div>
        </div>
        <div class="dc-home-body-card-item-bottom">
          {{ $t("frontendCall") }}
        </div>
      </div>
      <div class="dc-home-body-card-item" :title="$t('demoDownload')">
        <div class="dc-home-body-card-item-top">
          <div class="dc-home-body-card-item-icon">
            <jsSvg></jsSvg>
          </div>
          <div class="dc-home-body-card-item-title">{{ $t("nativeJS") }}</div>
        </div>
        <div class="dc-home-body-card-item-bottom">
          {{ $t("mainstreamCompatibility") }}
        </div>
      </div>
      <div class="dc-home-body-card-item" :title="$t('customerConsultation')">
        <div class="dc-home-body-card-item-top">
          <div class="dc-home-body-card-item-icon">
            <qiang></qiang>
          </div>
          <div class="dc-home-body-card-item-title">
            {{ $t("strongProductivity") }}
          </div>
        </div>
        <div class="dc-home-body-card-item-bottom">
          {{ $t("responseTeam") }}
        </div>
      </div>
      <div class="dc-home-body-card-item" :title="$t('functionList')">
        <div class="dc-home-body-card-item-top">
          <div class="dc-home-body-card-item-icon">
            <wending></wending>
          </div>
          <div class="dc-home-body-card-item-title">
            {{ $t("powerfulAndStable") }}
          </div>
        </div>
        <div class="dc-home-body-card-item-bottom">
          {{ $t("builtInAPIs") }}
        </div>
      </div>
      <div class="dc-home-body-card-item" :title="$t('structuredElementsDemo')">
        <div class="dc-home-body-card-item-top">
          <div class="dc-home-body-card-item-icon">
            <fengfu></fengfu>
          </div>
          <div class="dc-home-body-card-item-title">
            {{ $t("richComponents") }}
          </div>
        </div>
        <div class="dc-home-body-card-item-bottom">
          {{ $t("customComponents") }}
        </div>
      </div>
      <div class="dc-home-body-card-item" :title="$t('printingDemo')">
        <div class="dc-home-body-card-item-top">
          <div class="dc-home-body-card-item-icon">
            <daYin />
          </div>
          <div class="dc-home-body-card-item-title">
            {{ $t("printingFunction") }}
          </div>
        </div>
        <div class="dc-home-body-card-item-bottom">
          {{ $t("printingModes") }}
        </div>
      </div>
      <div class="dc-home-body-card-item">
        <div class="dc-home-body-card-item-top">
          <div class="dc-home-body-card-item-icon">
            <word></word>
          </div>
          <div class="dc-home-body-card-item-title">
            {{ $t("wordLikeOperation") }}
          </div>
        </div>
        <div class="dc-home-body-card-item-bottom">
          {{ $t("operationConsistency") }}
        </div>
      </div>
      <div
        class="dc-home-body-card-item"
        :title="$t('performanceValidationDemo')"
      >
        <div class="dc-home-body-card-item-top">
          <div class="dc-home-body-card-item-icon">
            <xingneng></xingneng>
          </div>
          <div class="dc-home-body-card-item-title">
            {{ $t("performance") }}
          </div>
        </div>
        <div class="dc-home-body-card-item-bottom">
          {{ $t("documentLoading") }}
        </div>
      </div>
      <div class="dc-home-body-card-item">
        <div class="dc-home-body-card-item-top">
          <div class="dc-home-body-card-item-icon">
            <zhuanYe />
          </div>
          <div class="dc-home-body-card-item-title">
            {{ $t("StrongProfessionalism") }}
          </div>
        </div>
        <div class="dc-home-body-card-item-bottom">
          {{ $t("StrongProfessionalismDesc") }}
        </div>
      </div>
      <div class="dc-home-body-card-item" :title="$t('versionHistory')">
        <div class="dc-home-body-card-item-top">
          <div class="dc-home-body-card-item-icon">
            <shengmingzhouqi></shengmingzhouqi>
          </div>
          <div class="dc-home-body-card-item-title">
            {{ $t("longLifecycle") }}
          </div>
        </div>
        <div class="dc-home-body-card-item-bottom">
          {{ $t("developmentHistory") }}
        </div>
      </div>
      <div class="dc-home-body-card-item" :title="$t('demoProgram')">
        <div class="dc-home-body-card-item-top">
          <div class="dc-home-body-card-item-icon">
            <fengfu></fengfu>
          </div>
          <div class="dc-home-body-card-item-title">
            {{ $t("richExamples") }}
          </div>
        </div>
        <div class="dc-home-body-card-item-bottom">
          {{ $t("apiExamples") }}
        </div>
      </div>
      <div class="dc-home-body-card-item" :title="$t('ClickMeToCustomerCases')">
        <div class="dc-home-body-card-item-top">
          <div class="dc-home-body-card-item-icon">
            <xinchuang></xinchuang>
          </div>
          <div class="dc-home-body-card-item-title">
            {{ $t("SatisfyXinchuang") }}
          </div>
        </div>
        <div class="dc-home-body-card-item-bottom">
          {{ $t("SatisfyXinchuangdesc") }}
        </div>
      </div>
      <div class="dc-home-body-card-item" :title="$t('ClickMeToCustomerCases')">
        <div class="dc-home-body-card-item-top">
          <div class="dc-home-body-card-item-icon">
            <pingji></pingji>

            <!-- <img src="../../assets/img/pingji.svg" alt="" /> -->
          </div>
          <div class="dc-home-body-card-item-title">
            {{ $t("SatisfyRating") }}
          </div>
        </div>
        <div class="dc-home-body-card-item-bottom">
          {{ $t("SatisfyRatingDesc") }}
        </div>
      </div>
      <div class="dc-home-body-card-item" :title="$t('dataFormatDemo')">
        <div class="dc-home-body-card-item-top">
          <div class="dc-home-body-card-item-icon">
            <shujugeshi></shujugeshi>
            <!-- <img src="../../assets/img/shujugeshi.svg" alt="" /> -->
          </div>
          <div class="dc-home-body-card-item-title">
            {{ $t("dataFormatSupport") }}
          </div>
        </div>
        <div class="dc-home-body-card-item-bottom">
          {{ $t("structuredData") }}
        </div>
      </div>
      <div class="dc-home-body-card-item">
        <div class="dc-home-body-card-item-top">
          <div class="dc-home-body-card-item-icon">
            <svg
              t="1735201716365"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="12610"
              width="32"
              height="32"
            >
              <path
                d="M0 512a512 512 0 1 0 1024 0A512 512 0 0 0 0 512z"
                fill="#6DCC29"
                p-id="12611"
              ></path>
              <path
                d="M526.116571 267.410286c32.182857 0 48.347429 16.091429 48.347429 48.420571v415.085714c0 32.329143-16.091429 48.493714-48.347429 48.493715H303.542857c-32.182857 0-48.347429-16.164571-48.347428-48.493715V315.830857c0-32.329143 16.091429-48.420571 48.347428-48.420571h222.573714zM475.794286 599.771429h-111.908572c-16.018286 0-23.990857 7.899429-23.990857 23.698285 0 14.848 6.948571 22.674286 20.845714 23.698286h115.053715c16.018286 0 24.064-7.826286 24.064-23.698286 0-15.798857-8.045714-23.698286-24.064-23.698285z m0-95.012572h-111.908572c-16.018286 0-23.990857 7.972571-23.990857 23.771429 0 14.774857 6.948571 22.674286 20.845714 23.625143l3.145143 0.146285h111.908572c16.018286 0 24.064-7.972571 24.064-23.771428 0-15.798857-8.045714-23.771429-24.064-23.771429z m0-94.939428h-111.908572c-16.018286 0-23.990857 7.899429-23.990857 23.771428 0 15.798857 7.972571 23.698286 23.990857 23.698286h111.908572c16.018286 0 24.064-7.899429 24.064-23.698286 0-15.872-8.045714-23.771429-24.064-23.771428z m195.291428 11.190857h87.698286c21.869714 0 32.768 10.898286 32.768 32.768v292.790857c0 21.869714-10.971429 32.841143-32.768 32.841143H671.085714c-21.796571 0-32.768-10.971429-32.768-32.914286V453.851429c0-21.869714 10.971429-32.768 32.768-32.768z"
                fill="#FFFFFF"
                p-id="12612"
              ></path>
            </svg>
          </div>
          <div class="dc-home-body-card-item-title">
            {{ $t("CrossIndustryApplications") }}
          </div>
        </div>
        <div class="dc-home-body-card-item-bottom">
          {{ $t("CrossIndustryApplicationsdesc") }}
        </div>
      </div>
    </div>
    <div class="dc-home-body-h1-title">
      <div class="dc-home-body-h1-line"></div>
      <div>{{ $t("newFunction") }}</div>
      <div class="dc-home-body-h1-line"></div>
    </div>
    <div class="dc-home-body-view">
      <div class="dc-home-body-view-item">
        <div class="dc-home-body-view-item-Text">
          <div class="dc-home-body-view-item-Text-title">
            {{ $t("OFDFormat") }}
          </div>
          <div class="dc-home-body-view-item-Text-desc">
            {{ $t("OFDFormatDesc") }}
          </div>
          <div class="dc-home-body-view-item-Text-button">
            <div class="dc-home-body-view-item-Text-button1">
              {{ $t("ExperienceNow") }}
            </div>
          </div>
        </div>
        <div class="dc-home-body-view-item-img">
          <img src="../../assets/img/OFD功能.png" alt="" />
        </div>
      </div>
      <div class="dc-home-body-view-item dc-home-body-view-item-reverse">
        <div class="dc-home-body-view-item-img">
          <img src="../../assets/img/JAVA接口.png" alt="" />
        </div>

        <div class="dc-home-body-view-item-Text">
          <div class="dc-home-body-view-item-Text-title">
            {{ $t("JavaSideOperation") }}
          </div>
          <div class="dc-home-body-view-item-Text-desc">
            {{ $t("javaApiSupport") }}
          </div>
          <div class="dc-home-body-view-item-Text-button">
            <div class="dc-home-body-view-item-Text-button1">
              {{ $t("ExperienceNow") }}
            </div>
            <!-- <div class="dc-home-body-view-item-Text-button2">
              随机搭配，风格百变
            </div> -->
          </div>
        </div>
      </div>
      <div class="dc-home-body-view-item">
        <div class="dc-home-body-view-item-Text">
          <div class="dc-home-body-view-item-Text-title">{{ $t("care") }}</div>
          <div class="dc-home-body-view-item-Text-desc">
            {{ $t("careDesc") }}
          </div>
          <div class="dc-home-body-view-item-Text-button">
            <div class="dc-home-body-view-item-Text-button1">
              {{ $t("ExperienceNow") }}
            </div>
            <!-- <div class="dc-home-body-view-item-Text-button2">
              随机搭配，风格百变
            </div> -->
          </div>
        </div>
        <div class="dc-home-body-view-item-img">
          <img src="../../assets/img/重症.png" alt="" />
        </div>
      </div>
      <div class="dc-home-body-view-item dc-home-body-view-item-reverse">
        <div
          class="dc-home-body-view-item-img dc-home-body-view-item-img-chanchengtu"
        >
          <img src="../../assets/img/产程图.png" alt="" />
        </div>
        <div class="dc-home-body-view-item-Text">
          <div class="dc-home-body-view-item-Text-title">
            {{ $t("Partogram") }}
          </div>
          <div class="dc-home-body-view-item-Text-desc">
            {{ $t("PartogramDesc") }}
          </div>
          <div class="dc-home-body-view-item-Text-button">
            <div class="dc-home-body-view-item-Text-button1">
              {{ $t("ExperienceNow") }}
            </div>
            <!-- <div class="dc-home-body-view-item-Text-button2">
              随机搭配，风格百变
            </div> -->
          </div>
        </div>
      </div>
      <div class="dc-home-body-view-item">
        <div class="dc-home-body-view-item-Text">
          <div class="dc-home-body-view-item-Text-title">
            {{ $t("NursingFormDesign") }}
          </div>
          <div class="dc-home-body-view-item-Text-desc">
            {{ $t("NursingFormDesignDesc") }}
          </div>
          <div class="dc-home-body-view-item-Text-button">
            <div class="dc-home-body-view-item-Text-button1">
              {{ $t("ExperienceNow") }}
            </div>
            <!-- <div class="dc-home-body-view-item-Text-button2">
              随机搭配，风格百变
            </div> -->
          </div>
        </div>
        <div class="dc-home-body-view-item-img">
          <img src="../../assets/img/护理.png" alt="" />
        </div>
      </div>
      <div class="dc-home-body-view-item dc-home-body-view-item-reverse">
        <div
          class="dc-home-body-view-item-img dc-home-body-view-item-img-mobile"
        >
          <img src="../../assets/img/移动端.png" alt="" />
        </div>
        <div class="dc-home-body-view-item-Text">
          <div class="dc-home-body-view-item-Text-title">
            {{ $t("SupportMobileDevices") }}
          </div>
          <div class="dc-home-body-view-item-Text-desc">
            {{ $t("SupportMobileDevicesDesc") }}
          </div>
          <div class="dc-home-body-view-item-Text-button">
            <div class="dc-home-body-view-item-Text-button1">
              {{ $t("ExperienceNow") }}
            </div>
            <!-- <div class="dc-home-body-view-item-Text-button2">
              随机搭配，风格百变
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="dc-home-body-footer">
      <div class="dc-home-body-footer-item">南京都昌信息科技有限公司</div>
      <div>苏ICP备13000195号-1</div>
    </div>
  </div>
</template>
<script setup>
import xinchuang from "@/components/svgComponents/xinchuang.vue";
import shengmingzhouqi from "@/components/svgComponents/shengmingzhouqi.vue";
import pingji from "@/components/svgComponents/pingji.vue";
import xingneng from "@/components/svgComponents/xingneng.vue";
import shujugeshi from "@/components/svgComponents/shujugeshi.vue";
import wending from "@/components/svgComponents/wending.vue";
import fengfu from "@/components/svgComponents/fengfu.vue";
import word from "@/components/svgComponents/word.vue";
import jsSvg from "@/components/svgComponents/js.vue";
import qiang from "@/components/svgComponents/qiang.vue";
import qianduan from "@/components/svgComponents/qianduan.vue";
import zhuanYe from "@/components/svgComponents/zhuanYe.vue";
import jiCheng from "@/components/svgComponents/jiCheng.vue";
import daYin from "@/components/svgComponents/daYin.vue";
import DataCard from "@/components/home/dataCard.vue";

const emits = defineEmits(["changeIndexFun"]);

const quickStart = () => {
  emits("changeIndexFun",2)
};

</script>
<style scoped>
.dc-home-body {
  width: 100%;
  height: auto;
  padding: 0;
  padding-top: 88px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow-x: hidden;
}
.dc-home-body-card,
.dc-home-body-h1-title,
.dc-home-body-view,
.dc-home-body-footer {
  max-width: 1300px;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
}
.dc-home-body-Center {
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
}
.dc-home-body-left-subtitle {
  position: relative;
  left: -140px;
  top: -60px;
  z-index: 9;
  display: inline-block;
  line-height: 1;
  background: -webkit-linear-gradient(120deg, #259e84 30%, #8cbe41);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 18px;
  font-weight: 700;
  transform-origin: bottom center;
  animation: swing 2s ease infinite;
}

@keyframes swing {
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0);
  }
}

.dc-home-body-left-title {
  line-height: 64px;
  font-size: 56px;
  background: -webkit-linear-gradient(120deg, #259e84 30%, #8cbe41);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}
.dc-home-body-left {
  padding-right: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.dc-home-body-left-center {
  line-height: 64px;
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 18px;
}
.dc-home-body-left-center-desc {
  display: flex;
  align-items: center;
}
.dc-home-body-left-center-desc-title,
.dc-home-body-left-center-desc-title-mobile {
  font-size: 24px;
  color: var(--text-color);
}
.dc-home-body-left-center-desc-title-mobile {
  display: none;
}
.dc-home-body-left-center-desc-tag {
  font-weight: 900;
  padding: 6px 10px;
  box-sizing: border-box;
  margin-left: 6px;
  color: #fff;
  background-color: #8cbe41;
  border-radius: 10px;
  line-height: 1;
}
.dc-icon-top-right {
  font-size: 16px;
}
.dc-home-body-right {
  position: relative;
}

.dc-home-body-right img {
  height: 360px;
}
.button-group1 {
  display: flex;
  margin-top: 32px;
}
.button-group1 > div {
  padding: 0 20px;
  line-height: 38px;

  font-weight: 700;
  flex-shrink: 0;
  border-radius: 20px;
  margin: 6px;
  cursor: pointer;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
}
.button-group1 > div:hover {
  opacity: 0.7;
}
.button-group1 > .button-group-item1 {
  box-sizing: border-box;
  background: #5672cd;
  color: #ffffff;
  margin-left: -6px;
}
.button-group1 > .button-group-item {
  box-sizing: border-box;
  background: #259e84;
  color: #ffffff;
  margin-left: 0;
  padding: 0 26px;
}
.button-group-item2 {
  background: var(--bg2);
}
.button-group-item3 {
  background: var(--bg2);
  border: 1px solid #259e84;
}

.dc-home-body-image-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  width: 360px;
  height: 360px;
  background-image: linear-gradient(-45deg, #259e8461 50%, #8dbe4175 50%);
  filter: blur(72px);
  transform: translate(-50%, -50%);
}
.button-group2 {
  display: flex;
  margin-top: 5px;
}
.button-group-item4 {
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;

  cursor: pointer;
  border: 1px solid #ffffff;
  margin-top: 10px;
  font-weight: 600;
  margin-right: 12px;
}
.button-group-item4:hover {
  background: var(--bg2);
  color: var(--text-color);
  border: 1px solid #259e84;
}
.dc-home-body-card {
  width: 100%;
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.dc-home-body-card-item {
  width: 268px;
  min-height: 230px;
  margin: 10px;
  background-color: var(--bg2);
  border-radius: 10px;
  padding: 24px;
  box-sizing: border-box;
  cursor: pointer;
}
.dc-home-body-card-item:hover {
  opacity: 0.6;
}
.dc-home-body-card-item-icon {
  background: var(--bg1);
  border-radius: 6px;
  width: 48px;
  height: 48px;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.dc-home-body-card-item-title {
  margin-left: 10px;
  font-size: 18px;
  font-weight: 600;
}
.dc-home-body-card-item-bottom {
  padding-top: 8px;
  line-height: 24px;

  font-weight: 500;
  overflow: hidden;
  color: var(--text-color-secondary);
}
.dc-home-body-card-item-top {
  display: flex;
  align-items: center;
  color: var(--text-color);
}
.dc-home-body-h1-title {
  width: 1040px;
  margin: 0 auto;
  margin-top: 100px;

  font-size: 36px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
}
.dc-home-body-h1-line {
  width: 100px;
  height: 5px;
  background: var(--bg2);
  border-radius: 2px;
  margin: 0 30px;
}
.dc-home-body-view {
  width: 100%;
  margin: 64px auto;
}
.dc-home-body-view-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
}

.dc-home-body-view-item-Text-title {
  font-size: 36px;
  font-weight: 700;
  line-height: 36px;
  color: var(--text-color);
}

.dc-home-body-view-item-Text-desc {
  margin: 20px 0;
  font-size: 20px;
  font-weight: 500;
  color: var(--text-color-secondary);
}

.dc-home-body-view-item-Text-button1 {
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 500;
  white-space: nowrap;
  transition:
    color 0.25s,
    border-color 0.25s,
    background-color 0.25s;
  background: #259e84;
  color: #ffffff;
  border-radius: 12px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 16px;
  cursor: pointer;
}
.dc-home-body-view-item-Text-button1:hover {
  opacity: 0.8;
}

.dc-home-body-view-item-Text-button2 {
  display: inline-block;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  border-radius: 12px;
  padding: 0 20px;
  line-height: 38px;

  cursor: pointer;
  margin-left: 20px;
  background: var(--bg2);
}
.dc-home-body-view-item-img {
  background: var(--bg2);
  width: auto;
  height: auto;
  max-width: 600px;
  max-height: 600px;
  border-radius: 12px;
  padding: 24px;
  box-sizing: border-box;
  overflow: hidden;
}
.dc-home-body-view-item-img-mobile,
.dc-home-body-view-item-img-chanchengtu {
  width: auto;
  height: auto;
}
.dc-home-body-view-item-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.dc-home-body-view-item-Text {
  width: 500px;
  padding-right: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.dc-home-body-view-item-reverse .dc-home-body-view-item-Text {
  display: flex;
  align-items: flex-end;
  padding-right: 0;
  padding-left: 30px;
  box-sizing: border-box;
}
.dc-home-more {
  width: 100%;
  margin: 0 auto;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  text-align: center;
  color: var(--text-color-secondary);
}

.dc-home-body-footer {
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #eeeeee;
  margin-top: 100px;
  color: var(--text-color-secondary);
  line-height: 24px;
  max-width: 100%;
}
/* 当屏幕宽度小于1300px时应用的样式 */
@media (min-width: 0) and (max-width: 1300px) {
  .dc-home-body-Center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .dc-home-body-Center,
  .dc-home-body-card,
  .dc-home-body-h1-title,
  .dc-home-body-view,
  .dc-home-more,
  .dc-home-body-footer {
    height: auto;
    margin: 0 auto;
  }
  .dc-home-body-right img {
    height: 260px;
  }
  .dc-home-body-left {
    padding-right: 0;
    line-height: 0;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
  }
  .dc-home-body-left-center {
    font-size: 22px;
    line-height: 24px;
    padding: 0 50px;
    box-sizing: border-box;
  }
  .dc-home-body-left-center-desc {
    display: flex;
    align-items: center;
    padding: 0 50px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  .dc-home-body-left-center-desc-title {
    display: none;
  }
  .dc-home-body-left-center-desc-title-mobile {
    display: block;
    line-height: 16px;
    font-size: 14px;
    color: #8b8b8b;
  }
  .dc-home-body-left-subtitle {
    display: none;
  }
  .dc-home-body-left-title {
    font-size: 32px;
  }
  .dc-home-body-left-center-desc-tag {
    padding: 4px 6px;
  }
  .dc-home-body-image-bg {
    width: 200px;
    height: 200px;
  }
  .dc-home-body {
    padding-top: 40px;
  }
  .button-group1 {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .button-group1 > div:hover {
    opacity: 0.8;
  }
  .dc-home-body-card {
    margin-top: 30px;
  }
  .dc-home-body-card-item {
    width: 100%;
    height: auto;
    min-height: auto;
    overflow: hidden;
  }
  .dc-home-body-h1-title {
    width: 100%;
    margin-top: 20px;
  }
  .dc-home-body-h1-line {
    flex: 1;
  }
  .dc-home-body-view-item {
    flex-direction: column;
    margin-top: 0;
    padding: 10px;
    box-sizing: border-box;
  }
  .dc-home-body-view-item-Text {
    width: 100%;
    align-items: center;
    padding: 0;
  }

  .dc-home-body-view-item-img {
    width: 100%;
    height: auto;
  }
  .dc-home-body-view-item-Text-title {
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    margin-top: 40px;
  }
  .dc-home-body-view-item-Text-desc {
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    margin: 14px 0;
  }
  .dc-home-body-view-item-Text-button1 {
    line-height: 14px;
    padding: 6px 20px;

    margin-bottom: 20px;
  }
  .dc-home-body-view-item.dc-home-body-view-item-reverse {
    flex-direction: column-reverse;
  }
  .dc-home-body-view-item.dc-home-body-view-item-reverse
    .dc-home-body-view-item-Text {
    padding: 0;
    align-items: center;
  }
  .dc-home-more {
    font-size: 16px;
    margin: 20px auto;
    line-height: 16px;
  }
}
/* 当屏幕宽度大于1200px时应用的样式 */
@media (min-width: 1301px) {
  .dc-home-body-Center {
    max-width: 1300px;
    height: auto;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
}
</style>
