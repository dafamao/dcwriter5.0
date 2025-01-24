<template>
  <div class="dc-demo-content">
    <div class="dc-demo-writer-control">
      <div id="myWriterControl" dctype="WriterControlForWASM" style="height: 100%" RuleVisible="false" AllowDrop="true"
        AllowDragContent="true" RuleBackColor="rgb(155, 187, 227)" PageCssString="box-shadow:0px 0px 0px grey"
        RegisterCode="05F7A35CE21D66665A042D8CBFFCA39138CD04B98A8B318F61DF321B5140ADAEF4662D11C1EE06684A38AE3D15642DB8ECCDCA47A693192D05468BD0B38373846A1E5A6F2EDE9218DB2AE3170A3CE2AB4727CABE5AF35955C429AA62CDAD1EB7828722A8767CA3C2D4C3F764C6CEF77347"
        autoCreateControl="false" DocumentOptions.ViewOptions.ShowParagraphFlag="false"
        DocumentOptions.ViewOptions.ShowInputFieldStateTag="false" DocumentOptions.ViewOptions.ShowFormButton="true"
        pagetitleposition="BottomRight">
        正在加载...
      </div>
    </div>
    <dcCurrencyDialog ref="dcCurrencyDialogRef" />
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import { useCounterStore } from "../../stores/counter.js";
import dcCurrencyDialog from "./dcCurrencyDialog.vue";
const store = useCounterStore();
import i18n from '@/language';
const { t } = i18n.global;
// 监听 count 的变化
watch(
  () => store.changexml, // 监听的属性
  (newCount, oldCount) => {
    console.log("count changed", newCount, oldCount);
  }
);

let ctl = ref(null);
//加载编辑器
window.WriterControl_OnLoad = function (rootElement) {
  store.changeIsLoafing(false); //加载完成
  if (rootElement && rootElement.id) {
    ctl.value = document.getElementById(rootElement.id);
    ctl && store.changeCtl(ctl); //将编辑器实例存入store中

    ctl.value.DocumentLoad = function () {
      //保留一遍页面设置的数据
      const pageSettings = ctl.value.GetDocumentPageSettings();
      store.changePageSetting(pageSettings);

      //设置导航节点数据
      const ctlTitleList = store.ctl.GetNavigateNodesString() || "";
      store.changeCtlTitleList(ctlTitleList);

      //先存储一遍现在的页面视图模式：页面视图模式（默认）、普通页面模式
      const pageViewMode =
        ctl.value.__DCWriterReference.invokeMethod("GetNormalViewMode") ||
        false;
      store.changePageViewMode(pageViewMode);

      //默认存储一遍字数和页码信息
      changeKeyDownAndKeyUpToStore();
    };
    //加载默认文档
    ctl.value.LoadDocumentFromString(store.xml, "xml");
    //开启表单模式
    // ctl.value.DCExecuteCommand("FormViewMode", false, "Normal");
    //单栏展示
    ctl.value.SetPageLayoutMode("SingleColumn");

    //光标点击事件
    ctl.value.ondocumentclick = function () {
      if (ctl.value.CurrentStyle) {
        let styleOptions = ctl.value.CurrentStyle; //当前样式
        let Superscript = ctl.value.CurrentSuperscript; //上标
        let Subscript = ctl.value.CurrentSubscript; //下标
        //存储当前文本样式
        store.changeCurrentStyle({
          ...styleOptions,
          Superscript,
          Subscript,
        });

        //存储段落样式
        var CurrentParagraphStyle = ctl.value.GetCurrentParagraphStyle();
        let CurrentParagraphAlign = ctl.value.CurrentParagraphAlign; //段落对齐方式
        let FormViewMode =
          (ctl.value.FormView() && ctl.value.FormView()) || "Disable"; //表单模式
        store.changeCurrentParagraphStyle({
          ...CurrentParagraphStyle,
          CurrentParagraphAlign,
          FormViewMode,
        });
        //更新字数和页码信息
        changeKeyDownAndKeyUpToStore();
      }
    };
    ctl.value.EventShowContextMenu = Handle_EventShowContextMenu;
    //键盘按下事件
    ctl.value.ondocumentkeydown = function () {
      changeKeyDownAndKeyUpToStore();
    };
    //键盘抬起事件
    ctl.value.ondocumentkeyup = function () {
      changeKeyDownAndKeyUpToStore();
    };
    //编辑器缩放
    ctl.value.EventPageResize = function () {
      //存储缩放比例
      const scale = ctl.value.GetZoomRate();
      store.changeScale(scale);
    };
  }
};

//键盘事件中需要改变的状态
const changeKeyDownAndKeyUpToStore = () => {
  //存储总字数
  let totalWords = ctl.value.BodyText || "";
  store.changeTotalWords(totalWords.length);
  //设置页码信息
  let currentPageIndex = ctl.value.FocusedPageIndexBase0 || 0; //当前页码
  let allPageIndex = ctl.value.GetAllPageIndexs() || []; //当前页码
  store.changeCurrentPageIndex({
    allPageIndex: allPageIndex.length,
    currentPageIndex: currentPageIndex + 1,
  });
  //缩放比例
  const scale = ctl.value.GetZoomRate();
  store.changeScale(scale);
};

// 初始化控件
const scriptUrls = ["./_framework/dcwriter5.js", "./_framework/jquery.js"];

const scriptPromises = scriptUrls.map((url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
});

Promise.all(scriptPromises)
  .then(() => {
    //autoCreateControl属性为false时禁止自动加载，true会自动加载
    var newCtl = document.getElementById("myWriterControl");

    if (window.CreateWriterControlForWASM) {
      window.CreateWriterControlForWASM(newCtl); //手动加载编辑器
    } else {
      //EventBeforeCreateControl方法为js加载完成之后除法，避免window.CreateWriterControlForWASM方法未挂载
      newCtl.EventBeforeCreateControl = function () {
        window.CreateWriterControlForWASM(newCtl); //手动加载编辑器
      };
    }
  })
  .catch((error) => {
    console.error("Failed to load scripts:", error);
  });

const Handle_EventShowContextMenu = (eventSender, args) => {
  var typename = args.ElementType;
  console.log(args);
  if (typename != null && typename != "") {
    typename = typename.toLowerCase();
    var options = [
      {
        label: t('DcContextMenu.Revoke'),
        exec: () => {
          console.log("撤销");
          eventSender.DCExecuteCommand("Undo", false, null);
        },
      },
      {
        label: t('DcContextMenu.Redo'),
        exec: () => {
          console.log("重做");
          eventSender.DCExecuteCommand("Redo", false, null);
        },
      },
      "-",
      {
        label: t('DcContextMenu.Copy'),
        exec: () => {
          console.log("复制(Ctrl+C)");
          eventSender.DCExecuteCommand("Copy", false, null);
        },
      },
      {
        label: t('DcContextMenu.Paste'),
        exec: () => {
          eventSender.DCExecuteCommand("Paste", false, null);
        },
      },
      {
        label: t('DcContextMenu.Cut'),
        exec: () => {
          eventSender.DCExecuteCommand("Cut", false, null);
        },
      },
      {
        label: t('DcContextMenu.CopyAsText'),
        exec: () => {
          eventSender.DCExecuteCommand("CopyAsText", false, null);
        },
      },
      {
        label: t('DcContextMenu.PasteAsText'),
        exec: () => {
          console.log("纯文本粘贴");
          eventSender.DCExecuteCommand("PasteAsText", false, null);
        },
      },
      "-",
      {
        label: t('DcContextMenu.Attributes'),
        exec: () => {
          //非只读模式下可以打开属性对话框
          if (eventSender.Readonly === false) {
            // eventSender.DCExecuteCommand('ElementProperties', true, null);
            let chooseElement = eventSender.CurrentElement();
            if (chooseElement) {
              let Props = eventSender.GetElementProperties(chooseElement);
              switch (Props.TypeName) {
                case "XTextCheckBoxElement":
                case "XTextRadioBoxElement":
                  openEditDialog("dcCheckBox");
                  break;
                default:
                  openEditDialog("dcTextInput");
                  break;
              }
            }
          }
        },
      },
    ];
    if (typename == "xtexttablecellelement") {
      //单元格
      var options2 = [
        {
          label: t('DcContextMenu.TableRowsAndColumns'),
          exec: () => {
          },

          subMenu: [
            {
              label: t('DcContextMenu.DeleteRow'),
              exec: () => {
                eventSender.DCExecuteCommand("Table_DeleteRow", false, null);
              },
            },
            {
              label: t('DcContextMenu.DeleteColumn'),
              exec: () => {
                eventSender.DCExecuteCommand("Table_DeleteColumn", false, null);
              },
            },
            {
              label: t('DcContextMenu.InsertRowsAbove'),
              exec: () => {
                eventSender.DCExecuteCommand("Table_InsertRowUp", false, null);
              },
            },
            {
              label: t('DcContextMenu.InsertRowsBottom'),
              exec: () => {
                eventSender.DCExecuteCommand(
                  "Table_InsertRowDown",
                  false,
                  null
                );
              },
            },
            {
              label: t('DcContextMenu.InsertRowsLeft'),
              exec: () => {
                eventSender.DCExecuteCommand(
                  "Table_InsertColumnLeft",
                  false,
                  null
                );
              },
            },
            {
              label: t('DcContextMenu.InsertRowsRight'),
              exec: () => {
                eventSender.DCExecuteCommand(
                  "Table_InsertColumnRight",
                  false,
                  null
                );
              },
            },
          ],
        },

        "-",
        {
          label: t('DcContextMenu.MergeCell'),
          exec: () => {
            if (eventSender.Readonly === false) {
              eventSender.DCExecuteCommand("Table_MergeCell", false, null);
            }
          },
        },
        {
          label: t('DcContextMenu.SplitCell'),
          exec: () => {
            if (eventSender.Readonly === false) {
              eventSender.DCExecuteCommand("Table_SplitCellExt", true, null);
            }
          },
        },

      ];

      options = options.concat(options2);
    } else {
    }
    ContextMenu(options, args, eventSender);
  }
};

function ContextMenu(options, menuObj, rootElement) {
  if (options != null && Array.isArray(options)) {
    if (menuObj) {
      //获取到包裹元素
      var pageContainer = rootElement.querySelector("[dctype=page-container]");
      //判断是否为打印预览
      if (rootElement.IsPrintPreview()) {
        pageContainer = rootElement.querySelector("[dctype=page-printpreview]");
      }
      //判断是否存在dcContextMenu的元素
      var hasContextMenu = pageContainer.querySelector("#dcContextMenu");
      if (!hasContextMenu) {
        var meunDiv = document.createElement("div");
        meunDiv.setAttribute("id", "dcContextMenu");
        pageContainer.appendChild(meunDiv);
        meunDiv.innerHTML = `<div class="dcMenu-line"></div>`;
        hasContextMenu = meunDiv;
        //判断是否有css
        var dcHead = document.head;
        //判断是否存在对应的css
        var hasContextMenuCss = dcHead.querySelector("#ContextMenuCss");
        if (!hasContextMenuCss) {
          var newCssString = `
                    #dcContextMenu{
                        position: absolute;
                        margin: 0;
                        padding: 2px;
                        border-width: 1px;
                        border-style: solid;
                        background-color: #fafafa;
                        border-color: #ddd;
                        color: #444;
                        box-shadow: rgb(204, 204, 204) 2px 2px 3px;
                        min-width: 144px;
                        /* left: 8px;
                        top: 481.672px; 
                        overflow: hidden;*/
                        overflow: visible;
                        z-index: 110008;
                        display: none;
                    }
                    #dcContextMenu div.dcMenu-item:hover{
                        color: rgb(0, 0, 0);
                        border-color: rgb(183,210,255);
                        background: rgb(234,242,255);
                    }
                    #dcContextMenu .dcMenu-line{
                        position: absolute;
                        left: 26px;
                        top: 0;
                        height: 100%;
                        font-size: 1px;
                        border-left: 1px solid #ccc;
                        border-right: 1px solid #fff;
                    }
                    #dcContextMenu .dcMenu-item{
                        position: relative;
                        white-space: nowrap;
                        cursor: pointer;
                        margin: 0px;
                        padding: 0px;
                        font-size: 12px;
                        overflow: hidden;
                        border-width: 1px;
                        border-style: solid;
                        border-color: transparent;
                        box-sizing: content-box;
                    }
                    #dcContextMenu .dcMenu-item .dcMenu-text{
                        float: left;
                        padding-left: 28px;
                        padding-right: 20px;
                        font-size: 12px;
                    }

                    #dcContextMenu .dcMenu-icon{
                        position: absolute;
                        width: 16px;
                        height: 16px;
                        left: 2px;
                        top: 50%;
                        margin-top: -8px;
                    }
                    #dcContextMenu .dcMenu-sep{
                        margin: 3px 0px 3px 25px;
                        font-size: 1px;
                        border-top: 1px solid #ccc;
                        border-bottom: 1px solid #fff;
                    }
                    #dcContextMenu .secondaryMenu{
                        position: absolute;
                        z-index: 110011;
                        margin: 0;
                        padding: 2px;
                        border-width: 1px;
                        border-style: solid;
                        border-color: #ddd;
                        min-width: 144px;
                        overflow: hidden;
                        display: none;
                        background-color: #fafafa;
                    }
                    #dcContextMenu .dcMenu-rightarrow {
                        position: absolute;
                        width: 16px;
                        height: 16px;
                        right: 0;
                        top: 50%;
                        margin-top: -8px;
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAZ0lEQVR42u2VMQ7AMAgD+f9XeYBHd+mA2IqrJFJ8EkMGrNiCJMIYY86Eh2otDYA7dNgq2/kLEEzwhxDGGrURQxGlN97gUUrxQCU9DM33ALjYQA0vlRGCcPEUjGxdgasfQX+DxphreAA2tk8BzQnbmgAAAABJRU5ErkJggg==) no-repeat -32px center;
                    }`;
          var ContextMenuCss = document.createElement("style");
          ContextMenuCss.setAttribute("id", "ContextMenuCss");
          dcHead.appendChild(ContextMenuCss);
          ContextMenuCss.innerHTML = newCssString;

          //页面滚动
          pageContainer.addEventListener("scroll", function () {
            var hasContextMenu = rootElement.querySelector("#dcContextMenu");
            if (hasContextMenu) {
              hasContextMenu.remove();
            }
          });
          //丢失焦点
          window.addEventListener("blur", function () {
            var hasContextMenu = rootElement.querySelector("#dcContextMenu");
            if (hasContextMenu) {
              hasContextMenu.remove();
            }
          });
        }
      } else {
        //存在时，清空所有item和sep的元素
        var allItem = hasContextMenu.querySelectorAll(
          ".dcMenu-item, .dcMenu-sep"
        );
        for (var i = 0; i < allItem.length; i++) {
          allItem[i].remove();
        }
      }
      var containerHeight = 0;
      if (Array.isArray(options) && options.length > 0) {
        //根据options显示元素
        for (var option = 0; option < options.length; option++) {
          if (typeof options[option] == "object") {
            var thisItem = insertItem(options[option], hasContextMenu, true);
            //判断是否存在subMenu，如果需要更多可以使用递归调用
            if (
              options[option].subMenu &&
              Array.isArray(options[option].subMenu)
            ) {
              var secondaryMenu = document.createElement("div");
              secondaryMenu.setAttribute("class", "secondaryMenu");
              secondaryMenu.innerHTML = `<div class="dcMenu-line"></div>`;
              hasContextMenu.appendChild(secondaryMenu);
              for (
                var meun = 0;
                meun < options[option].subMenu.length;
                meun++
              ) {
                insertItem(options[option].subMenu[meun], secondaryMenu, false);
              }
              var rightItem = document.createElement("div");
              rightItem.setAttribute("class", "dcMenu-rightarrow");
              thisItem.appendChild(rightItem);
              //添加事件
              thisItem.addEventListener("mouseenter", function (e) {
                //console.log(e)
                //console.log($(e.target))
                //找到下一个子元素
                var targetEle = e.target.nextElementSibling;
                targetEle.style.top = e.target.offsetTop + "px";
                targetEle.style.left =
                  e.target.offsetLeft + e.target.offsetWidth + "px";
                targetEle.style.display = "block";
              });
              thisItem.addEventListener("mouseleave", function (e) {
                var targetEle = e.target.nextElementSibling;
                targetEle.style.display = "none";
              });
              secondaryMenu.addEventListener("mouseenter", function (e) {
                var targetEle = e.target.previousElementSibling;
                e.target.style.top = targetEle.offsetTop + "px";
                e.target.style.left =
                  targetEle.offsetLeft + targetEle.offsetWidth + "px";
                e.target.style.display = "block";
              });
              secondaryMenu.addEventListener("mouseleave", function (e) {
                e.target.style.display = "none";
              });
            }
          } else if (
            typeof options[option] == "string" &&
            options[option] == "-"
          ) {
            var sepEle = document.createElement("div");
            sepEle.setAttribute("class", "dcMenu-sep");
            hasContextMenu.appendChild(sepEle);
            containerHeight += 8;
          }
        }
        var pageElement = menuObj.PageElement;
        //计算展示的高度
        var minHeight = pageContainer.scrollTop;
        var maxHeight = minHeight + pageContainer.clientHeight;
        containerHeight = containerHeight ? containerHeight + 6 : 0;
        hasContextMenu.style.height = containerHeight + "px";
        hasContextMenu.style.left = pageElement.offsetLeft + menuObj.X + "px";
        var cursorTop = pageElement.offsetTop + menuObj.Y;
        var menuLastHeight = cursorTop + containerHeight;
        //计算最下方的距离是否够显示全
        if (menuLastHeight > maxHeight) {
          //显示不全
          var topHasSpacing = -minHeight;
          //判断上边是否存在足够的距离
          if (topHasSpacing > containerHeight) {
            //距离足够
            hasContextMenu.style.top = cursorTop - containerHeight + "px";
          } else {
            //距离不够
            if (maxHeight - cursorTop > cursorTop - minHeight) {
              //下方的距离大于上方
              hasContextMenu.style.top = cursorTop + "px";
            } else {
              //上方的距离大于下方
              hasContextMenu.style.top = cursorTop - containerHeight + "px";
            }
          }
        } else {
          //显示全
          hasContextMenu.style.top = cursorTop + "px";
        }
        hasContextMenu.style.display = "block";
      }
    }
  }

  //插入内部的item项
  function insertItem(options, hasContextMenu, needHeight) {
    if (typeof options == "object") {
      var itemEle = document.createElement("div");
      itemEle.setAttribute("class", "dcMenu-item");
      itemEle.style.cssText = "height: 22px;line-height: 22px";
      hasContextMenu.appendChild(itemEle);
      itemEle.innerHTML = `
                <div class="dcMenu-text" style="height: 22px; line-height: 22px;">${options.label}</div>
                <div class="dcMenu-icon"></div>
            `;
      itemEle.addEventListener("mousedown", function (e) {
        e.stopPropagation();
        e.preventDefault();
      });
      itemEle.onclick;
      itemEle.addEventListener("click", function () {
        options.exec();
        hasContextMenu.remove();
      });
      if (needHeight) {
        containerHeight += 24;
      }
      return itemEle;
    } else if (typeof options == "string" && options == "-") {
      var sepEle = document.createElement("div");
      sepEle.setAttribute("class", "dcMenu-sep");
      hasContextMenu.appendChild(sepEle);
      if (needHeight) {
        containerHeight += 24;
      }
      return sepEle;
    }
  }
}

//#region 打开公用弹窗
const dcCurrencyDialogRef = ref(null);
const openEditDialog = (typeName) => {
  if (dcCurrencyDialogRef.value) {
    dcCurrencyDialogRef.value.showDialog(typeName, { type: "edit" });
  }
};

</script>
<style>
.dc-demo-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0 20px;
  box-sizing: border-box;
}

.dc-demo-writer-control {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#myWriterControl .qs-key-board tr {
  height: auto;
}

.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}

.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}

.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}

.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>
