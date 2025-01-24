import { defineStore } from 'pinia';
import { onlineEnXml } from "../assets/js/onlineDemo.js";


export const useCounterStore = defineStore('counter', {
  state: () => ({
    ctl: null,
    xml: onlineEnXml,
    pageSetting: {},
    currentStyle: {},
    CurrentParagraphStyle: {},
    ctlTitleListVisible: false,
    ctlTitleList: [],
    pageViewMode: false,//页面视图模式，true为单页，false为分页
    currentPage: {
      allPageIndex: 1,
      currentPageIndex: 1,
    },
    totalWords: 0,
    scale: 1,
    isFullScreen: false,
    isLoafing: true,
  }),
  actions: {
    changexml(xml) {
      this.xml = xml ? xml : onlineEnXml;
    },
    changeCtl(ctl) {
      this.ctl = ctl ? ctl : null;
    },
    changePageSetting(setting) {
      this.pageSetting = setting ? setting : {};
    },
    changeCurrentStyle(setting) {
      this.currentStyle = setting ? setting : {};
    },
    changeCurrentParagraphStyle(setting) {
      this.CurrentParagraphStyle = setting ? setting : {};
    },
    changeCtlTitleListVisible(visible) {
      this.ctlTitleListVisible = visible ? visible : false;
    },
    changeCtlTitleList(list) {
      this.ctlTitleList = list ? list : [];
    },
    changePageViewMode(mode) {
      this.pageViewMode = mode ? mode : false;
    },
    changeCurrentPageIndex(index) {
      this.currentPage = index ? index : { allPageIndex: 1, currentPageIndex: 1 };
    },
    changeTotalWords(length) {
      this.totalWords = length ? length : 0;
    },
    changeScale(scale) {
      this.scale = scale ? scale : 1;
    },
    changeIsFullScreen(isFullScreen) {
      this.isFullScreen = isFullScreen ? isFullScreen : false;
    },
    changeIsLoafing(isLoafing) {
      this.isLoafing = isLoafing ? isLoafing : false;
    }
  },
});
