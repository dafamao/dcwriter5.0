export const journalData = [
    {
        "year": "2025",
        "time": "3月",
        "version": "",
        "number": "",
        "pre": `修改痕迹列表中批注对应的文本显示的问题
修改当文档内容由于权限原因只读时的提示信息
修改清洁模式下，用户登录删除高权限用户等级痕迹，提示高等级用户信息
修改输入域项目分隔符
新增TrendChartDataSourceToDocument接口允许自定义插入图片宽高
新增SetElementLogicDeleted接口函数
新增ValidateBlankIncludingNewLine属性功能
新增对macos下搜狗输入法中文句号的支持
修改GetPrintPreviewHTML3接口报错
修改多选下拉输入域列表项目分隔符
修改输入域下拉分隔符添加中文句号和换行符
新增属性PasteAllowDeletionAndEditing用于控制是否粘贴不可删除不可编辑元素
新增FocusLineByPageIndexLineIndex定位指定页的制定行的功能
修复不同子文档内同ID元素的属性值表达式相互影响的问题
修复体温单下载pdf宽高与svg宽高不相同的问题
修复嵌套输入域里层绑定图片宽高计算错误的问题
修复分部绑定时不相关容器内表格数据被清空的问题
修改时间下拉的弹出显示不全的问题
新增SearchAllText接口函数
SetImagePageData接口新增通过传空参数删除图片数据
修复存在表格时选择打印不显示表格边框
修复SetImagePageData后台报错问题
修复前端扩展查找函数参数允许设置高亮显示查找结果
新增ClearTextHighlight清空文档高亮状态
修改选择打印时会出现空白页的问题
修改通过命令table_insertrowdown插入表格行时无效的问题`
    },
    {
        "year": "",
        "time": "2月",
        "version": "",
        "number": "",
        "pre": `修改保存大文档到PDF的接口性能
修改只读文档节阅读视图模式的设置
修复使用iframe嵌套剪切和复制判断选中范围出错的问题
修改选中打印遮罩不准的问题
下拉搜索事件中增加AddResultItemByTextValueTextInList方法
修复颜色属性值表达式失效的问题
修复当打印预览使用选中是会打印选中的内容
对产程图增加范围控制，仅允许绘制产程开始时间后的24小时
产程图增加一个新接口，用于修改产程的开始时间
新增SetDocumentCommentProperties接口支持修改单个批注对象的属性
新增setDocumentCommentsBackColor接口支持批量设置批注背景色
修改体温单阴影在谷歌浏览器打印时，颜色会加深的问题
修改单元格内容生成HTML时不输出的问题
新增全局属性CustomFontFamily自定义字体,用于打印加载网络字体
体温单新增功能：文本对齐绘点的格子
体温单新增一个属性showtip控制文本值鼠标悬浮提示
修复下拉展开时，中文禁用不掉的问题
修复表格PropertyExpressions属性重复序列化的问题
修复合并预览HTML相关接口新增forcelocalpageindex参数属性
修复MAX公式在特殊参数下不起作用的问题
新增SaveDocumentToPdfBase64String2接口函数
新增灯笼值增加自定义悬浮提示
编辑器新增属性 PrintSVG_CheckboxChecked,PrintSVG_CheckboxUnChecked,PrintSVG_RadioChecked,PrintSVG_RadioUnChecked，能使用SVG代码替换打印时勾选框的图片。
增加一个属性TitleLineSerialDateCompletion控制日期数据补0
修复灯笼字符位置垂直居中
体温单value值中增加了新属性控制复测标记
新增属性CopyNoKeepReadOnlyImages用于控制是否在图片只读时不复制
图片编辑增加剪切和旋转功能
修复编辑器属性为DCDorpDownAllowKeyBoardEntry=true时，下拉输入域中文输入不能被禁用的问题`
    },
    {
        "year": "",
        "time": "1月",
        "version": "",
        "number": "",
        "pre": `修复日期输入域格式化字符串移出光标内容丢失的问题
单击编辑器时取消其他位置的选择内容
修复SaveSubDocumentToString新增参数支持不输出不勾选的选框文本
修复处理插入音视频使用FileSystemName时无法播放的问题
修改输入域内容校验结果缺失违禁关键字内容
新增FormatDateTimeUsingUpperString属性
添加HeaderFooterSelect属性用来控制"打印预览时是否允许选中和复制页眉页脚内容"
设置页眉页脚元素不可选
添加文字水印设置不可选中功能
新增输入域属性编辑界面支持新的格式化样式
体温单删除值RemoveTemperatureDocumentValue接口增加默认值
新增体温单绘点垂直连线功能
修复体温单Y轴右对齐
修改SetDomImageByBase64String接口后台可通过传空值恢复默认图标
修改FocusElement接口后台不处理隐藏元素防止光标乱跳
新增体温单绘点垂直连线功能
修复体温单Y轴右对齐
修复接口粘贴时选中单元格时粘贴到一个单元格的问题
修复SaveDocumentToText补充输出页眉页脚文本
修改取消打印预览下刷新文档的操作避免排版变化问题
修复体温单圆形图标以外的图形阴影不生效问题
修改体温单下载文件接口，支持下载为json
修复体温单Y轴设置对齐方式
修复体温单标签增加图例样式
修复体温单自定义体温差>=1.5时，在value处悬浮图标V
修复设置页面背景颜色(PageBackColorString)样式不能实时更新的问题
GetDocumentPageSettings新增输出客户区宽高
添加GetPDFByFiles方法可以自定义下载PDF名称的功能`
    },
    {
        "year": "2024",
        "time": "12月",
        "version": "",
        "number": "",
        "pre": `修复下拉输入域勾选项执行表达式不正确的问题
产程图新增保存和加载接口
产程图增加结束位置向下箭头及文本
修复生成SVGHTML的代码防止页面偏移新增横向打印
修改复制多个单元格，粘贴进一个单元格的场景下，复制内容样式丢失问题
修复右键菜单的高度超出编辑器的高度导致编辑器滚动条是否显示导致抖动的问题
添加SetContentStylesByIndex修改指定序号的格式
添加GetAllContentStyles和SetContentStylesByIndex接口，设置指定序号的样式，解决字体替换
修复存在两个编辑器，一个是阅读模式时复制不了内容的问题
修改ExecuteAllEffectExpressions在打印预览下禁止执行
修改RefreshInnerView在预览下禁止刷新
修改设计器中样式选择下拉项
修改新生儿体温单SetTemperatureBottomTableGroupData接口名称
新生儿体温单新增两个接口：GetTablesDataSource、GetTablesDataSource
修复体温单允许断线默认加载错误的问题
修复blob.arrayBuffer在chrome76以下的兼容问题
第五代BS前端引入四代SUMINNERVALUE公式
修复后台保存为RTF字符串时表格内容出不来的问题
修改GetElementCoordinateByID当未找到元素时的报错
`
    },
    {
        "year": "",
        "time": "11月",
        "version": "",
        "number": "",
        "pre": `修复SetChildElements后台输入域赋文本丢失痕迹的问题
修复导出RTF时某些情况下段落对齐样式不正确的问题
体温单页眉页脚数据行增加属性：ExtendGridLineType
解决图片编辑全屏时位置错乱问题
区域选择打印时使用Canvas生成的图片，避免Canvas打印完全覆盖的问题（chrome93版本）
修复SetChildElements插入输入域中的文本与输入域样式保持一致
修改为预览后的文档对象若所属控件为空就不执行表达式了
修复精简版HTML解析模块对加粗倾斜上标下标的处理
修改产程图警戒线偏移量
修改时间下拉遮住输入域的问题
getHtmlByFiles接口新增ForceLocalPageIndex参数支持强制指定页码类型
体温单设计器增加一个布尔值类型的列表渲染
体温单注册码信息修改
产程图增加默认字体宋体
产程图增加一个打印接口
修复某些情况下文档对象所属编辑器控件为空导致表达式执行失败的问题
修改体温单默认字体全部为宋体
新增SetDefaultFont对PDF生成特点字体名称
修改图片编辑，支持矩形椭圆嵌套文本
修改SetElementInnerValueStringByID后台兼顾只读元素与不同输出格式元素的赋值
修复带痕迹绑定输入域时新增痕迹样式处理不正确的问题
修复shift+f12删除表格行列不生效问题
修复多文档合并PDF时页码页号不顺延的问题
增加创建产程图
体温单设计器特殊项目增加展示类型
修复SelectSubDocumentByID打印预览下定位未渲染病程的问题
修改多个单元格的粘贴处理
RefreshDocument和RefreshInnerView添加在阅读模式或者打印预览模式禁止调用，防止编辑器排版变化
添加SelectSubDocumentByID在打印预览模式下的定位病程问题
修改多选项选中逻辑为先判断Value属性，没有Value属性时再判断Text属性
修改接口GetPDFByFiles新增支持混合合并文档
添加HightlightInsertedString属性支持插入字符串后是否选中高亮
修改自定义批注选中时显示更粗的边框，使用阴影来显示更粗的边框，避免影响高度
新增PrintByPDF接口
修复合并预览HTML跨页内容被其它页截取时输出不正确的问题
修改自定义批注计算高度错误的问题
修改SetElementInnerValueStringByID对不可编辑元素的赋值限制
修复自定义批注位置不对的问题
修复特殊勾选字符在生成PDF时不显示的问题
修改InsertHtml命令在精简版下无效的问题
修改InsertContentByInputID在精简版下对html加载的错误
修复GetPrintPreviewHTML2接口后台处理覆盖主文档选项的问题
修改SaveDocumentToBase64String保存PDF不再走四代服务
修改ClearUserTrace对输入域无效的问题
新增bExecuteExpressionAfterLoadingDocument属性支持加载文档后追加执行一次表达式
新增前端控件的IsExecuteAllValueExpressionAfterLoad属性，在加载文档后是否执行表达式，默认值是true执行
修改当存在带搜索的下拉框时,tab键切换依旧能生效
修复合并打印时里层元素打印可见性表达式失效的问题
修复输入域留痕绑定换行元素时换行符重复出现的问题
新增Get/SetImagePageData接口函数支持获取设置指定页的图片数据
修改SetElementTextByID增加是否聚集元素的参数`
    },
    {
        "year": "",
        "time": "10月",
        "version": "",
        "number": "",
        "pre": `修改HTML预览超出字体缩减后对不齐的问题
修改SetElementTextByID不会及时修改输出样式的问题
修复楷体字体样式失效的问题
新增embedsimsunboldforofd属性
修改打印预览下文本空格粘贴格式不对
修改在打印预览中只选中编辑器文本时处理复制逻辑，在其他场景下不处理
新增getHtmlByFiles后台防止输出HTML格式不对的问题
新增Get/SetPageLabelText接口支持设置标签多页文本
修改GetElementsByTypeName支持字符属性
修改版本防止出现插入数据多出一行的问题
体温单术后天数中内容修改文本颜色
新增插入多个单选框/复选框后触发事件
修复设计器不加载数据的问题
修改EventPrintPreviewContextMenu事件中参数X，Y表示基于打印预览页面的位置；OriginallyEvent是默认的右键事件的Event
修复getHtmlByFiles多文档合并只显示一个的问题
修改体温单兼容大标题加粗属性
修改医学表达式线变虚线和表格边框展示不全的问题
修改体温单兼容大标题加粗属性
修改体温单设计器，兼容新属性
修复并HTML预览的字体收缩程度
新增SetContainerCharStyle对指定的字符设置格式
修复setchildelements接图图片被截取的问题
iframe下加载多个编辑器并且分别加载病历文档，其中病历文档中的时间输入域无法激活显示时间弹窗。单个编辑器界面就正常
修复数据源绑定防止输入域ID重复
新生儿体温单开发-修复标签多行时，文本会偏移的问题
修复表达式链式反应不执行的问题
修复打印预览无法触发EventAfterPrintPreview事件的问题
设置精简版对GetPrintPreviewHTML2的限制
添加rootElement.SetPageContainerVisible(bolVisible)，可以在编辑模式下设置编辑视图的显示和隐藏
新增纯DOM操作接口SetChildElements
新增数据源绑定的纯DOM操作接口
新增纯DOM操作接口SetDocumentParameterValue
修复合并预览时文档表达式不执行的问题
修复表格数据源绑定丢失原先单元格内删除痕迹的问题
修复存在格式化字符串单选列表没有“无”后面内容的问题
新增HOURDIFF/DAYDIFF/MINUTEDIFF时间差计算公式
新增支持婚育史医学表达式
修复目前svg生成图片失效的问题
修复切换留痕和清洁模式时DocumentOptions未刷新的问题【DCExecuteCommand第二个参数为true时未刷新】
修改getElementByAttribute接口支持取回单无格/表格行
修复PRODUCT计算公式不生效的问题
添加控件的属性OutputSVGWhitespace，判断在生成svg时是否生成空格
第五代BS优化带选中值相同的选框组的表格数据源绑定处理逻辑
修改复选框属性赋值报错的问题
修改抢光标问题
修复时间框输入域清除按钮失效的问题
修复数值下拉输入域编辑数值回显报错的问题
修复跨页表格行预览html时内容在不同页重复输出的问题
修改SaveDocumentToString保存纯文本时对复选框和按钮的处理
修复表达式判断复合元素容器值不正确的问题
修改多个单元格同时粘贴内容的性能
修复留痕绑定输入域时误删除了原先输入域内逻辑删除元素的问题
新增GetPDFByFiles2接口新增夹带元素坐标信息返回
前端GetPDFByFiles2接口新增支持数据源绑定功能
新增GetElementCoordinateByID获取输入域元素坐标的准确性
前端GetPrintPreviewHtml2后台新增夹带元素坐标位置信息
修改SaveSubDocumentToString在保存纯文本时支持text和txt
第五代BS表格数据源绑定新增支持单元格内分割线分别绑定两个分开数据的功能
修复恒牙牙位图在iframe下渲染报错的问题
新增SaveToOFD接口支持保存夹带自定义信息的OFD文档
修改体温单加载xml是转成json的方法
修改SetElementInnerValueStringByID接口的赋值处理逻辑
修复属性表达式与外层属性重复的问题
预览控件AddDocumentByText接口新增支持加载BASE64文档
修复恒牙乳牙牙位图cs的模板在五代bs渲染有差异的问题
增加属性表达式对话框功能
修复从WORD复制内容粘贴失效的问题
GetHtmlByFiles接口新增压缩子文档内表格列宽使其不至于超出主文档边界
修复表格行跨页时标签连接字符串生成不正确的问题
修改表格边框颜色值无效问题
修复数据源单值绑定失效的问题
修复体温单注册码只在第一页生效的问题
修改体温单一般项目的默认值：刻度步长和数据类型
修改NewHtmlLoader针对火狐浏览器的兼容性
修改无文本文档导出OFD报错的问题
修改后台数据源绑定使用DCSystemXml.XmlDocument类型提供实体数据
修复体温单修改一般项目的指定高度后，文本错位问题
修改页眉空输入域打印预览报错问题
修复体温单缩放后，点击元素高亮位置不准确
修改svg打印预览不被浏览器和系统的缩放影响，修复打印预览界面显示过大的问题
修改表格行列单元格对话框的颜色值
修复选中非首页内容时SelectionHtml2获取不到打印内容的问题`
    },
    {
        "year": "",
        "time": "9月",
        "version": "",
        "number": "",
        "pre": `修改输入域字体色，背景文字颜色，背景颜色等逻辑。
修改预览控件ClearDocument接口未及时刷新的问题
修改图片编辑放大缩小按钮位置
修复演示程序首页关闭tab报错
修复功能演示页面，自定义表格下拉不触发
修改图片编辑对话框的样式
新增OutputSVGWhiteColorUsingNoneStroke属性支持生成none样式的白色SVG线条
修复报错问题
修复生成SVG报错和主文档刷没了的问题
修复编辑器只读时复制不了的问题
修复字体颜色和背景色添加透明度不准确问题
修复下拉弹框中滚动不了的问题
修复下拉弹框没有搜索框时两栏展示标题未固定在下拉弹框顶部的问题
修复多选下拉弹框没有搜索框时列表项展示不全的问题
新增纯DOM的SetElementTextByID接口
修复设置元素值后文档修改状态不改变的问题
修复进入快捷辅助录入下拉列表时上下方向键无法选中下拉项的问题
修复编辑器初始化标尺未绘制的问题
新增GetPrintPreviewHTML3支持生成混合合并的SVG样式的预览HTML
修复存在多个编辑器时无法剪切的问题
修改SetChildElements时图片的内边距属性
修改SetElementInnerValueStringByID主动刷新元素的功能
修复LoadDocumentFromString2接口增加绘制水印接口
增加GetPrintPreviewPageCount打印预览控件获取总页数
新增插入元素确定后，返回新插入的元素属性
增加修改体温单更新页面注册码信息逻辑
增加演示程序前端框架demo下载功能
修复svg打印预览右键菜单问题
修复打印预览界面的鼠标滚轮放大缩小
修复修改已有的页面元素的盒子模型导致页面模糊的问题
修复时间下拉位置问题
修改时间下拉对话框的位置
修改单元格复制模式为ClearDirectContentAndFieldContent时删除空白段落符号的问题
修复预览控件中病程定位失效问题
GetPrintPreviewHtml2接口新增参数支持对所有合并文档提供统一页眉页脚
修改工具条插入特殊字符和插入图片报错的问题
修复体温单阴影不生效问题
修复按钮字体样式下拉为空问题
修复主文档元素样式引用非法时合并子文档样式错乱的问题
修复体温单阴影失效问题
打印预览控件示例页面添加区域选择打印功能（subdir/WriterPrintPreviewControl.html）
新增AppendSubDocuments接口支持添加复杂合并子文档
DCFormTransmission新增参数支持直接引用编辑器文档优化性能
修复表达式对下拉型输入域不起作用的问题
修改SetFieldDropListItemByValue主动执行表达式
新增纯DOM接口GetSpecifyPageImages
修改批注定位滚动位置不准确问题
修复关闭区域选择打印报错的问题
修复打印预览模式下缩放界面时区域选择没有关闭的问题
修改InsertSubDocuments增加是否在后面追加的参数
修复预览HTML后编辑器原文档选项被意外修改的问题
增加一个新方式绑定数据源的示例
修复backspace多个tab页下的问题
修改GetElementCoordinateByID在获取单元格信息时使用像素单位
修改GetElementCoordinateByID在获取单元格时不准确的问题
修复下拉展示使用此文本功能
修复下拉框滚动无效问题
新增输出line:/\HTML预览端终结文本样式文本
修改接口GetAllSubdocumentsBorderAndBackgroundColor刷新不及时的问题
修改GetAllSubdocumentsBorderAndBackgroundColor去除边框无效的问题
修复文本标签不生效问题`
    },
    {
        "year": "",
        "time": "8月",
        "version": "",
        "number": "",
        "pre": "1.修改网格线、标签宽度\r\n2.修改页眉固定滚动\r\n3.修改单复选框对话框在没有单复选框的位置时还可以弹出来\r\n4.修复官网例子中输入域/弹框插入输入域中弹框没有蒙版\r\n5.增加一个根据性别显隐月经史的demo\r\n6.增加五代下拉表格输入域的选择改变监听事件\r\n7.修改SaveSubDocumentToString对纯文本的支持\r\n8.修改时间轴对象不再是document.WriterControl\r\n9.修改SaveSubDocumentToString对纯文本\r\n10.第五代BS后台调整设置元素数据源绑定属性的处理逻辑\r\n11.第五代BS后台优化勾选框表格行数据源绑定的处理逻辑DUWRITER5_0-3161\r\n12.修复LoadDocumentFromString2在添加病程时，不会带入样式的问题\r\n13.新增时间轴y轴属性bordervisible控制侧边是否显示\r\n14.时间轴Y轴新增BorderVisible底层属性\r\n15.增加一个接口GetInputFieldsByInputNameInSub,获取指定病程下指定名称的输入域\r\n16.修改布局模式Cascade对多层的支持\r\n17.新增时间轴小标题自动换行\r\n18.ActiveCommentByIndex增加批注定位功能\r\n19.增加ActiveCommentByIndex，激活指定序号的批注\r\n20.取消对GetPrintPreviewHTML2接口的模式限制\r\n21.修复字体对话框字体样式展示不正确\r\n22.取消对GetPrintPreviewHTML2接口的模式限制\r\n23.修复字体对话框字体样式展示不正确\r\n24.增加GetInputFieldsByInputNameInSub，获取制定病程下制定名称的输入域\r\n25.修改ClearAllFields增加是否清空输入域内部的图片的功能\r\n26.修改DeleteElementByID记录撤销\r\n27.提交表格头固定问题\r\n28.新增了全局方法DisposeDCWriterDocument，在调用完rootelement.dispose方法后再调用该方法 清除遗留方法及属性，可以让GC回收部分内存\r\n29.修改时间赋值不正确的问题\r\n30.修复下拉输入域搜索功能异常问题\r\n31.第五代BS时间轴新增解析Y轴LineWidth属性\r\n32.增加时间输入域无法赋值demo\r\n33.编辑器时间输入域弹框展示在输入域上方时，会遮挡住输入域\r\n34.将日期控件对象从windows对象中放入rootelement中\r\n35.表格行和单元格属性对话框增加【复制类型：复制清空内容，并清空输入域 】\r\n36.修改SetElementCheckedByID只读时无效的问题\r\n37.修改SetElementInnerValueStringByID赋值方式\r\n38.修复GetPrintNowHTML样式忘记添加的问题\r\n39.修改SaveDocumentToText对逻辑删除的控制"
    },
    {
        "year": "",
        "time": "7月",
        "version": "",
        "number": "",
        "pre": "1.修复演示程序首页左侧列表显隐后滚动条丢失问题\r\n2.修改点击事件触发位置,防止点击单复选框时，当前元素依旧指向上一次点击位置\r\n3.修改SetSubDocumentDown支持引用对象\r\n4.修改CurrentElement参数为空的判断\r\n5.修复违禁关键字用户登录后为null的问题\r\n6.新增SortRootContent接口\r\n7.修改滚动切换可能导致报错的问题\r\n8.修改SetSubDocumentDown支持后台引用对象\r\n9.修改iframe下报错的问题\r\n10.插入文本标签设置宽度\r\n11.修改页眉固定滚动\r\n12.修复官网例子中单复选框对话框在没有单复选框的位置时还可以弹出来\r\n13.修复官网例子中输入域/弹框插入输入域中弹框没有蒙版\r\n14.增加五代下拉表格输入域的选择改变监听事件\r\n15.修改SaveSubDocumentToString对纯文本的支持\r\n16.修改时间轴对象不再是document.WriterControl\r\n17.修改SaveSubDocumentToString对纯文本的支持\r\n18.提交表单模式下页面页面滚动问题\r\n19.修复LoadDocumentFromString2在添加病程时，不会带入样式的问题\r\n20.新增时间轴y轴属性bordervisible控制侧边是否显示\r\n21.时间轴Y轴新增BorderVisible底层属性\r\n22.增加一个接口GetInputFieldsByInputNameInSub,获取指定病程下指定名称的输入域\r\n23.提交时间轴小标题自动换行\r\n24.ActiveCommentByIndex增加批注定位功能\r\n25.增加ActiveCommentByIndex，激活指定序号的批注\r\n26.取消对GetPrintPreviewHTML2接口的模式限制\r\n27.修复字体对话框字体样式展示不正确\r\n28.取消对GetPrintPreviewHTML2接口的模式限制\r\n29.修复字体对话框字体样式展示不正确\r\n30.增加GetInputFieldsByInputNameInSub，获取制定病程下制定名称的输入域\r\n31.修改ClearAllFields增加是否清空输入域内部的图片的功能\r\n32.修改DeleteElementByID记录撤销\r\n33.提交表格头固定问题\r\n34.修复设计器在修改字体大小时出现的问题\r\n35.修改段落对话框的样式\r\n36.修改了部分内部的匿名回调函数引发的内存泄露问题\r\n37.新增了全局方法DisposeDCWriterDocument，在调用完rootelement.dispose方法后再调用该方法 清除遗留方法及属性，可以让GC回收部分内\r\n38.修复MedicalReportDiagnosisPopUpEntry.html报错\r\n39.修改时间赋值不正确的问题\r\n40.修复下拉输入域搜索功能异常问题\r\n41.第五代BS时间轴新增解析Y轴LineWidth属性DCWRITER4_0-1496\r\n42.增加时间输入域无法赋值demo\r\n43.编辑器时间输入域弹框展示在输入域上方时，会遮挡住输入域\r\n44.表格行和单元格属性对话框增加【复制类型：复制清空内容，并清空输入域 】\r\n45.修改SetElementCheckedByID只读时无效的问题\r\n46.修改SetElementInnerValueStringByID赋值方式\r\n47.修复GetPrintNowHTML样式忘记添加的问题\r\n48.添加打印HTML时可以处理续打模式和区域选择模式，只支持当前文档\r\n49.第五代BS插入或保存子病程新增参数允许保存子文档加载原文的页眉页脚\r\n50.第五代BS本地打印修复不指定打印页号时判断错误问题\r\n51.SetElementCheckedByID 放开只读模式下的限制\r\n52.修改SetElementProperties和GetElementProperties，在传递的是json对象时，优先使用handle对象\r\n53.修改SetElementInnerValueStringByID支持\r\n54.修改删除批注对病程的modify的影响\r\n55.扩展getDataWithDataSources可以指定父元素与数据源名称\r\n56.增加SaveDocumentToText，获取正文的文本内容接口\r\n57.第五代BS前端CommitDocumentUserTrace追加清除选框痕迹\r\n58.扩展setDataWithDataSources可以指定父元素\r\n59.修改表头无下边框的问题\r\n60.修改ofd按钮样式，调用后台上传ofd文件接口改为https接口\r\n61.在表格行对话框中增加设置多个表格行高度（使用SetElementProperties修改RowsHeight属性实现）\r\n62.增加单元格属性对话框一次性设置多个单元格的内边距\r\n63.增加选中多个单元格，通过对话框拆分功能\r\n64.第五代BS后台表格行复制模式新增新的特性支持清除输入域以外内容DUWRITER5_0-3147\r\n65.修改查找替换按钮错位问题\r\n66.修复对话框自定义属性无法赋值问题\r\n67.修改GetDocumentUserTrackInfos增加返回所属输入域的handle对象\r\n68.第五代BS解除GetPrintPreviewHtml2在预览下不可调用的限制\r\n69.ExecuteAllEffectExpressions接口添加回调函数\r\n70.修改SetSubDocumentBorderByID导致的病程无效的问题\r\n71.修改SetElementInnerValueStringByID支持handle对象\r\n72.修复双列下拉时，鼠标悬浮显示\r\n73.修复iframe嵌套，document指向报错\r\n74.修复粘贴不触发粘贴前事件\r\n75.修改SetChildElements，在插入图片时设置图片的属性innervalue，此时会自动设置外部输入域的innervalue属性\r\n76.第五代BS前端LocalPrintDocuments新增参数支持获取本地打印机列表\r\n77.修复动态下拉只有字典来源时不会触发动态下拉事件EventDropdownEditor\r\n78.第五代BS前端PrintDocument参数新增属性支持精细化的续打设置\r\n79.修复下拉框展开，鼠标滚轮滚动会导致页面一起滚动问题\r\n80.修改SetElementAttribute支持.NET对象和handle对象\r\n81.新增接口XTextDocumentBodyElement.GetLineByPageIndexLineIndex(int pageIndexBase0, int lineIndexBase0)\r\n82.第五代BS修复绑定图片时图惩丢失宽高的问题\r\n83.新增三个属性：DropDownListMinWidth下拉项最小宽度， DropDownListMaxWidth下拉框最大宽度，DropDownListHeight下拉框最大高度\r\n84.第五代BS后台修复数据源绑定在登录用户或加粗下丢失文本换行符的问题\r\n85.第五代BS后台调整GetElementsByAttributes接口绕开底层报错问题\r\n86.第五代BS优化数据源绑定单元格选框的处理逻辑DUWRITER5_0-3085\r\n87.修改SetElementText在未登录时没有清除已有内容的功能\r\n88.处理火狐浏览器打开时间下拉会发生错位\r\n89.第五代BS补充修复合并预览时非首个文档的右边缘对不齐的问题\r\n90.第五代BS后台修复针对嵌套输入域内容非空校验不准确的问题\r\n91.修改DisplayAllVisibleElement颜色无效的问题\r\n92.第五代BS改进命令table_writedatatotable填充数据时继承对齐样式的处理逻辑DUWRITER5_0-3098\r\n93.修改SetElementTextByID接口，支持痕迹\r\n94.新增showtoolbar=\"true\"实现在普通视图模式下表格行固定\r\n95.第五代BS修复前端CommitUserTrace未清除选框勾选痕迹的问题\r\n96.修复NotScrollWithCaret='true'导致的编辑器在没有滚动条的时候无法编辑的问题"
    },
    {
        "year": "",
        "time": "6月",
        "version": "",
        "number": "",
        "pre": "新增事件EventQueryTableListDataPageChanged、EventQueryTableListDataSearch\r\n新增通过QueryListItems事件中的eventObject.AddTableListData方法传入表格数据，支持以表格形式展开下拉\r\n修改当编辑器开启痕迹时，编辑器内部复制粘贴后，选中粘贴出来的内容，点击backspace删除,会出现文本删除，标点符号没删除的情况\r\n修复生成预览HTML时丢失计算公式值的问题\r\n新增属性ReadonlySectionGraying=true/false,用于启用只读文档节字体变灰的设置\r\n修复图片编辑弹框报错\r\n修复放大倍数影响定位病程\r\n修改SetFieldDropListItemByValue在数值不存在时报错\r\n修复时间下拉会影响下拉输入域宽度的问题\r\n增加一个下拉表格展示的文件\r\n修复在演示程序首页关闭tab页报错问题\r\n解开对获取批注列表接口、只读模式下的限制\r\n修改前端医学表达式对话框中自动大小默认值为true\r\n修改SetFieldDropListItemByValue参数支持Nativehandle对象\r\n修改SortTableRowsByDateTime支持handle对象\r\n新增SortTableRowsByDateTime对表格行进行日期时间排序\r\n第五代BS后台修复输入域连续插入样式有变化的问题DUWRITER5_0-2956\r\n修复在表格属性对话框中输入自定义属性，点击表格边框确认后，自定义属性失效问题\r\n右键菜单的点击事件不管是否成功，都需要删除右键菜单【DUWRITER5_0-2943】\r\n在医学表达式中增加自动调整大小\r\n修改SetChildElements继承的边框设置\r\n修复GetPrintNowHTML会清除另外添加的样式的问题\r\n混合牙位图中增加第九牙位和sutosize自动调整大小\r\n修复输入域对话框修改值不生效问题\r\n取消对CleanViewMode接口在只读模式下的限制\r\n第五代BS后台修复留痕模式下数据源绑定内容不应用容器样式的问题DUWRITER5_0-2901\r\n修改获取pdf字体报错问题\r\n新逻辑的区域选择打印，编辑器加上属性BoundsSelectionViewModeUseNewLogic=true\r\n修改电活力测试牙位图字体保存PDF报错的问题\r\n混合牙位图增加第四磨牙\r\n修复分组互斥展示不正确问题\r\n修改本地pdf回调函数不执行的问题\r\n第五代BS医学表达式新增AutoSize属性功能\r\n修改insertlabel命令，在第二个参数为false时无效的问题\r\n痕迹/留痕痕迹列表 默认初始化加载本身带有痕迹的文档\r\n第五代BS前端修复SaveSubDocumentToString新增参数支持从四代服务生成PDF字节流\r\n新增接口MoveProjectUpAndDown上下移元素\r\n修改行间距LineHeight命令导致的首行缩进无效的问题\r\n新增全局属性ShowMediaOnMask\r\n第五代BS前端修复SaveSubDocumentToString保存不出PDF内容的问题DUWRITER5_0-2879\r\n第五代BS优化ConvertTextContentToElementLabel命令允许附加参数设置标签属性DUWRITER5_0-2859\r\n修改SetTableCellPadding第一个参数支持NativeHandle对象\r\n修改初始化不生效的问题\r\n在表格对话框中增加可见性表达式\r\n修复LoadDocumentFromString2加载网络地址的xml报错问题\r\n解决使用dcinsertimage命令插入图片第三个参数为false时报错问题。\r\n修复表格行对话框中，设置可见性表达式无效问题\r\n提交TemperatureFileNew不生效的问题\r\n表格属性对话框中增加了可见性表达式输入框\r\n在命令对话框中完善了命令列表并增加参数输入框，对于需要传参数但是内部没有对话框时，可以在命令对话框中写入参数使用\r\n第五代BS修复打印HTML后丢失单元格表格式计算结果的问题DUWRITER5_0-2840\r\n修改部分接口在其他模式下的使用\r\n补全命令对话框中所有的命令\r\n功能页面导航目录增加点击跳转到指定目录功能\r\n新增数据数组的为空判断\r\n第五代BS前端扩展SelectElementByID参数支持传入.NET后台引用对象与NativeHandle\r\n修改SetElementText光标丢失的问题\r\n新增pdf相关设置\r\nWriteDataFromDataSourceToDocument接口中增加触发文档内容改变事件DocumentContentChanged\r\n修改headerbottomlinevisible命令的支持\r\n修改InsertSubDocuentAtCurrentPosition对属性的支持\r\n修改InsertSubDocuentAtCurrentPosition无效的问题\r\n第五代BS前端GetPrintPreviewHTML2支持合并前以JSON格式绑定数据\r\n添加SetRegisterCode动态注册功能\r\n第五代BS前端GetPrintPreviewHtml2接口新增参数支持合并前分别绑定数据DUWRITER5_0-2840\r\n处理多栏展示情况下，编辑模式下区域选择打印或者反向区域选择打印第二页，开启打印预览，蒙版区域位置不对的问题【DUWRITER5_0-2828】\r\n处理编辑模式下区域选择打印或者反向区域选择打印，开启打印预览，编辑器的宽度变化，导致蒙版区域位置不对的问题【DUWRITER5_0-2828】\r\n第五代BS时间轴修复加载文档时文本框丢失字体与图片数据的问题\r\n修改InsertSubDocuentAtCurrentPosition在指定位置插入病程\r\n修改设置全局属性报错的问题"
    },
    {
        "year": "",
        "time": "5月",
        "version": "",
        "number": "",
        "pre": "1.第五代BS后台修复输入域留痕模式下数据源绑定不出痕迹的问题\r\n2.第五代BS调整输入域在留痕模式下数据源绑定的赋值处理逻辑\r\n3.第五代BS前端DCFormTranssmion接口补充输出单个选框的自定义属性信息\r\n4.第五代BS编辑器扩展PD牙位图支持探诊深度医学表达式\r\n5.增加UnderlineStyle的命令支持\r\n6.第五代BS编辑器新增出血指数医学表达式\r\n7.修改ShowFormButton命令无效的问题\r\n8.修改SetChildElements对非容器元素的前后可以添加内容\r\n9.修改SetChildElements对子元素的添加\r\n10.修改SetChildElements，支持在元素前或后添加内容\r\n11.第五代BS表格列横向扩充绑定取消对单元格ID进行标记DUWRITER5_0-2826\r\n12.修改InsertElements参数不正确的问题\r\n13.修改接口文档跳转的位置\r\n14.修改GetCommandNameList接口返回值，去除UpdateDataSourceForView、UpdateViewForDataSource\r\n15.修改复制表格为纯文本的效果\r\n16.第五代BS编辑器扩展病变上牙牙位图表达式支持新的牙位图\r\n17.添加insertlabel命令\r\n18.添加自动缩放下拉列表字体大小属性(AutoZoomDropdownListFontSize)的支持，比例是12*缩放比率\r\n19.添加FileOpen后的回调函数\r\n20.修改SetTableColumnVisible的参数超出表格列数的判断\r\n21.修改GetRootElementsByTypeName返回值不正确的问题\r\n22.修改Table_DeleteColumn命令第三个参数对bool值的兼容\r\n23.增加对属性PropertyExpressions的支持\r\n24.修改ShowFormButton表单按钮命令显示不正确的问题\r\n25.第五代BS后台修复文档出现重复绑定路径时数据源回填报错的问题\r\n26.打印预览模式下，需要修复打印预览界面的高度\r\n27.增加一个混合牙位图对话框\r\n28.修复DownloadFile模式下下载的PDF无法打开问题【GetPDFByFiles】\r\n29.支持options参数中returntype或者resulttype，有一个属性等于'DownloadFile'时下载PDF文件，否则返回BASE64【GetPDFByFiles2】\r\n30.修改ConvertTextContentToElementLabel无效的问题\r\n31.第五代BS新增“恒牙/乳牙/多生牙混合牙位图”医学表达式\r\n32.添加GetStandardImage获取系统内置的图标\r\n33.修改GetDocumentUserTrackInfos获取痕迹不正确的问题\r\n34.新增InsertContentByInputID的参数是否留痕，默认值是false\r\n35.添加音频视频元素对图片属性的支持\r\n36.新增XTextMediaElement.Image属性。\r\n37.修改下拉列表默认字体大小变大时会自动撑大\r\n38.修复单选下拉展示为两栏样式时无法滚动的问题\r\n39.新增固定桥牙位图对话框\r\n40.修复下拉框中搜索框内容删除为空时不展示全部下拉项的问题\r\n41.修复多选下拉列表项多出一个的问题\r\n42.修改按钮对话框，增加字体样式设置选择项\r\n43.修改style参数转换时对Underline和Italic的支持\r\n44.修改DeleteElementByID带有痕迹时子元素没有带有痕迹的问题\r\n45.修改InsertContentByInputID参数支持nativeHandle\r\n46.如果是选中多个单元格打开属性对话框，则只允许修改垂直对齐方式\r\n47.没有选中或者只选中了一个单元格，则执行原来的逻辑\r\n48.在按钮对话框中增加一个背景颜色属性\r\n49.修改区域选择打印防止出现宽度为空的情况\r\n50.第五代BS后台修复未登录用户时导出文档痕迹丢失选框勾选痕迹的问题\r\n51.修改GetDocumentUserTrackInfos在清洁模式下获取痕迹不正确的问题\r\n52.修改时间输入域，在默认未选择时赋值不成功的问题）\r\n53.关闭打印预览界面时，修正编辑界面的区域选择打印蒙版位置\r\n54.在编辑器元素大小改变时修正区域选择打印蒙版位置\r\n55.修改区域选择位置在修改比例尺后不正确的问题\r\n56.修复插入下拉输入域变成文本输入域问题\r\n57.修复在表格属性中打开边框对话框报错问题\r\n58.修复医学表达式-电话力测试牙位图双击时会新插入电话力测试牙位图的问题\r\n59.扩展区域选择打印时按住shift键，可以选择多个区域进行打印\r\n60.第五代BS后台DCGetElementProperties2防止为空报错\r\n61.修改区域选择打印比例问题\r\n62.添加区域选择打印时可以按shift选择多个区域的功能\r\n63.编辑器元素不在文档中时，复制剪切走默认逻辑\r\n64.在只读病程中的医学表达式，不允许弹出对话框修改\r\n65.屏蔽GetDocumentDomStructure在多层嵌套输入域时报错的问题\r\n66.修改表单模式下光标跳转\r\n67.修复在只读模式下双击编辑批注\r\n68.修改在执行FormViewMode命令后不能修改选项的功能\r\n69.新增GetElementTextByIDInSub、SetElementTextByIDInSub在病程中设置或获取指定元素的文本"
    },
    {
        "year": "",
        "time": "4月",
        "version": "",
        "number": "",
        "pre": "1.修复区域选择打印能反向选择\r\n2.在输入域对话框中增加内容复制来源功能\r\n3.修复GetElementsByTypeName支持表格行\r\n4.新增SetJumpPrintInfo、SetJumpPrintInfoForPrintPreview获取打印信息\r\n5.修复生成预览HTML时文档安全选项未起效果的问题\r\n6.修复设置文档网格线不生效\r\n7.修复对元素的点击事件触发自动获取焦点\r\n8.修复图片编辑增，如果没有图片属性、或者有图片属性但是图片的路径是空，则不弹出图片编辑对话框\r\n9.修复批注对话框在谷歌浏览器124版本中，导致崩溃的问题\r\n10.增加接口GetElementInnerBase64XmlByID\r\n11.修复insertparagraphbeforetable\r\n12.添加GetElementInnerBase64XmlByID，返回元素的BASE64格式的xml\r\n13.修复当下拉输入域没有设置动态下拉，但是有字典来源和静态下拉值时，不触发QueryListItems，默认展示自身静态下拉\r\n14.修复window平板下选中文本右键不自动触发的问题\r\n15.修复调整输入域边界元素打印HTML时不齐的问题\r\n16.修复图片元素的属性RawFormat为空的报错\r\n17.修复区域选择打印，在预览时偏移问题\r\n18.修复预览HTML下输入域边界元素宽度输出不正确的问题\r\n19.增加一个文档属性的接口SetDocumentPartProperties\r\n20.增加SetDocumentPartProperties设置页眉页脚正文属性的接口\r\n21.修复输入域对话框校验，光标点击校验会直接修复校验类型问题\r\n22.修复功能列表拖拽页面卡顿问题\r\n23.修复单栏展示时打印预览不居中的问题\r\n24.修复时间下拉框样式\r\n25.修复ServicePageUrl\r\n26.修复canvas间距\r\n27.增加属性PrintRuleOccupying，用于判断打印预览标尺是否占位\r\n28.增加GetSubDocumentDomStructure两种获取格式\r\n29.增加接口GetSubDocumentDomStructure，用于获取某一病程下所有结构化元素\r\n30.添加GetSubDocumentDomStructure获取指定病程的DOM结构\r\n31.修复BindingColumnExpandingTables\r\n32.修复Table_IncreaseRowHeightToPageBottom命令\r\n33.修复后台生成HTML时单元格斜分割线不生效的问题\r\n34.新增GetCellDiagonalBase64Image函数\r\n35.修复SetElementPrintVisibility对部分元素无效的问题\r\n36.新增BindingColumnExpandingTables接口参数指定扩展表格是否另起一页\r\n37.新增事件EventCanvasCountChange\r\n38.修复DocumentOptions.BehaviorOptions.AcceptDataFormats属性\r\n39.新增executecommand支持弹出对话框\r\n40.修复autozoom自动缩放\r\n41.修复时间输入域下拉兼容火狐浏览器样式\r\n42.修复ReadViewMode在预览模式下不能设置阅读模式\r\n43.修复Copy在预览模式下的生效的问题\r\n44.修复alllineheight只对正文有效\r\n45.修复setFontObject在只读时报错的问题\r\n46.修复readonlyautofocus的值的范围\r\n47.修复moveto接口不生效问题\r\n48.修复合并文档二维码不展示问题\r\n49.修复批注展示隐藏会导致标尺不准确的问题\r\n50.修复LastPrintResult不生效问题\r\n51.修复SetDocumentGridLine方法\r\n52.修复ScrollToCaret接口\r\n53修复PrintCurrentPage接口限制区域选择和续打模式下的调用\r\n54.修复下拉输入域的tab快捷键控制\r\n55.修复点击单复选框并设置readonlyautofocus会主动抢走光标\r\n56.更新SetChildElements旧版的兼容的问题\r\n57.修复SetChildElements参数的默认值\r\n58.修复图片属性中修复宽高刷新不及时问题\r\n59.修复图片刷新不及时问题\r\n60.给SetJumpPrintByElementID接口增加id判断\r\n61.修复获取最后一次打印位置的demo\r\n62.修复SetImageElementProperties需要刷新文档的问题\r\n63.修复通过shift+F12插入输入域报错问题\r\n64.修复ValueValidateStyle属性赋值时的日期最小值\r\n65.修复时间校验的输入域\r\n66.修复ValueValidateStyle的日期时间初始值\r\n67.修复校验属性设置DateTimeMinValue的默认值\r\n68.修复LastPrintPosition最后一次打印位置不生效问题\r\n69.修复SetSelectTableCellBorder、SetTableBorder、Table_MergeCell、Table_SplitCellExt、SetElementProperties对文档Modified的影响\r\n70.修复insertparagraphbeforetable执行后对Modified的影响\r\n71.修复api日志开启时 dispose报错问题\r\n72.修复HTML生成样式避免竖向文本预览偏移问题\r\n73.修复校验选择时间校验不设置时间,再次获取时间变成1980/1/1问题\r\n74.修复图片编辑全屏-取消全屏后样式错位问题\r\n75.修复加载RTF文档后台报错的问题\r\n76.新增设计模式下光标动态修复位置\r\n77.修复RejectUserTrace在非管理员模式下无效的问题\r\n78.增加接口GetloadAPIRecordData\r\n79.setMouseDragScrollMode打印预览下也可以通过光标拖拽页面滚动\r\n80.修复loaddocumentfromstrimg2传网络路径报错问题\r\n81.修复打印HTML文字超出表格边框的问题\r\n82.修复表格行对话框设置可见性表达式无效问题\r\n83.第五代BS前端GetElementsByTypeName新增参数指定查找的父容器\r\n84.修复只读模式下单击不能关闭右键菜单\r\n85.页面设置对话框增加启用页眉页脚属性\r\n86.修复接口在模式下的使用\r\n87.修复GetPrintPreviewHTML的四代服务调用接口\r\n88.新增MergeDocumentByFileContent2用于五代本地，原有函数保留调用四代\r\n89.修复将GetPDFByFiles四代调用转发全部改成同步调用\r\n90.修复LoadDocumentFromString2加载文档无效问题\r\n91.修复LoadDocumentFromString2接口参数是LoadFromUrl时，报错strURL找不到问题\r\n92.修复LoadDocumentFromString2文档加载无效的问题"
    },
    {
        "year": "",
        "time": "3月",
        "version": "",
        "number": "",
        "pre": "1.修改接口ShowAboutDialog、AboutDialog、AboutControl\r\n2.修改ReplaceAll的参数LogUndo无效的问题\r\n3.修改ReplaceAll的参数ExcludeBackgroundText无效的问题\r\n当页面中存在超过两个编辑器时，超过部分的显示就会不正常\r\n4.增加表达式：ADDDAY（新增天数）、ADDHour（新增小时数）、ADDMINUTES（新增分钟数）\r\n5.修改文档校验的返回值ExcludeKeywordText\r\n6.修改DocumentValueValidate返回值中的ExcludeKeywordText为空的问题\r\n7.修改DocumentValueValidate的返回值为json\r\n8.修复LoadDocumentFromString2加载文档无效问题\r\n9.修复LoadDocumentFromString2接口参数是LoadFromUrl时，报错strURL找不到问题\r\n10.修改loadDocumentFromMixString底层加载文档的方法\r\n11.修改LoadDocumentFromString2文档加载无效的问题\r\n12.修改LoadDocumentFromString2加载方式\r\n13.接口LoadDocumentFromString、LoadDocumentFromBase64String、LoadDocumentFromMixString在打印预览下执行\r\n14.增加TestLoadDocument，测试文档是否可以正常加载，该接口不会在编辑器中加载文档\r\n15.第五代BS调整loadDocumentFromMixString接口若设置页眉页脚为null则清空内容，不设置或设置成空字符串则不处理\r\n16.第五代BS修复loadDocumentFromMixString只加载body时加载出全文档的问题\r\n17.新增 ctl.DownLoadFile(\"local.pdf\")在本地生成PDF文件。\r\n18.GetPDFByFiles四代调用转发全部改成同步调用\r\n19.修改AllowDragContent属性对区域选择打印的影响\r\n20.第五代BS前端修改GetPrintPreviewHTML的四代服务调用接口                      \r\n21.修复PrintPreviewByHtml接口报错\r\n22.修改页面设置对EnableHeaderFooter属性的支持\r\n23.修改多编辑器时粘贴\r\n24.新增fontsizepro命令，在输入域设置不允许直接编辑内容时，设置字体大小\r\n25.修改阅读模式下的只读判断，之前是通过在阅读模式下设置只读控制的光标现在单独控制不再使用只读\r\n26.修复DocumentValueValidateWithCreateDocumentComments接口在不同使用场景下的问题\r\n27.修改GetDocumentUserTrackInfos添加单独元素是图片时的返回属性\r\n28.修改GetDocumentUserTrackInfos清洁模式下的刷新功能\r\n29.新增在SetChildElements接口中增加用户痕迹\r\n30.修改SetElementTextByID在参数为空值无效的问题\r\n31.第五代BS前端新增InsertElements接口支持当前位置插入任意元素集合\r\n32.SetChildElements接口增加一个参数。表示是否需要刷新，默认刷新不需要传值。若传false则表示不刷新\r\n33.修改SelectElementById在严格表单模式下对输入域的选择\r\n34.修复可见性表达式弹框不弹出问题\r\n35.修改违禁关键词没有返回ExcludeKeywordText的问题\r\n36.修改SetElementCheckedByID对参数为空的判断\r\n37.增加根据json插入表格的demo\r\n38.第五代BS扩展AutoFixTableWidth接口参数支持修正表格自身\r\n39.增加图片编辑中箭头功能\r\n40.修改恒牙牙位图、乳牙牙位图样式\r\n41.修改编辑器属性的ReadOnlyAutoFocus的适用范围从移动端适用到全局\r\n42.修改光标和软键盘在移动端的展示通过MobileDisableSoftKeyboard控制"
    },
    {
        "year": "",
        "time": "1月",
        "version": "",
        "number": "",
        "pre": "1.新增对微前端框架qiankun的支持\r\n2.优化光标显示效果\r\n3.修改flasharea接口禁止页眉页脚调用并防止出现颜色残留\r\n4.增加//图片环绕和嵌入文本\r\n5.第五代BS修复设置非容器元素Text属性失败的问题\r\n6.调整数值运算表达式的代码结构第五代BS调整SUM求和函数若所有参数为空则返回空值不返回0\r\n7.修改MoveToPage命令参数无效的问题基本属性\r\n8.添加GrayingDisabledHeaderFooter属性\r\n9.调整图片元素HTML功能\r\n10.添加ElementEditorRefreshView刷新单个元素的接口\r\n11.第五代BS后台修复打印到HTML时文档选项BothBlackWhenPrint失效的问题\r\n12.调整GetPrintPreviewHTML2的前端补充后处理流程\r\n13.开发普通视图模式功能\r\n14.注释最大和最小的缩放率修改自动缩放下导致的页面刷新不及时问题\r\n15.新增SetInputTextByIDIgnoreChildInput，在忽略子元素的同时给输入域赋值增加接口GetInputTextByIDIgnoreChildInpu\r\n16.修改输入域静态属性表格样式\r\n17.修改DocumentValueValidateWithCreateDocumentComments返回值无效的问题\r\n18.修改时间下拉样式生效\r\n19.修改输入域自定义模态框功能\r\n20.修改SplitTableCellForRowLine无效的问题\r\n21.获取页码元素属性补充DisplayFormat，新增NumberDisplayedInTibetan属性，并将页码改变为藏文\r\n22.修改获取图片方案\r\n23.修改Comments属性的返回值\r\n24.增加渲染病程，设置边框渲染过慢\r\n25.修改SetSubDocumentBorderByID的刷新处理\r\n26.增加SetCourseRecordByID根据编号修改病程信息\r\n27.修改SaveSubDocumentToString对数组的判断\r\n28.删除EventGetDeleteText事件\r\n29.修复时间输入域不触发文档改变事件问题\r\n30.SetSubDocumentBorderByID：增加一个参数：是否全文刷新，默认值是true\r\n31.修改下拉EventElementMouseDblClick不触发的问题\r\n32.修改SetFontSource的使用范围，只在移动端生效"
    },
    {
        "year": "2023",
        "time": "11月1日-12月25日",
        "version": "",
        "number": "",
        "pre": "1. 修改时间下拉展示样式\r\n2. 修复PRODUCT计算乘积表达式报错问题\r\n3. 修复合并单元格不生效问题\r\n4. 修改留痕下右对齐保存失效问题\r\n5. 修复图片编辑时，没有id无法编辑的问题\r\n6. 修复sum表达式报错问题\r\n7. 新增接口PrintAsImage用于获取打印下canvas图片数据\r\n8. 第四代BS后台调整HTML生成器的文档选项处理逻辑\r\n9. 修复重新绑定竖表格的数据源多出一个分页符，导致打印多一页的问题\r\n10. 第四代GS后台解决预览下有些字符显示不出来的问题\r\n11. 修改插入单选框复选框时，获取当前样式无效的问题\r\n12. 只读输入域设置签名图片\r\n13. 对表格设置了固定的字体，想要插入单选框和复选框的内容值与插入的字体一样\r\n14. 加载编辑器使用ShowFooterLine，需要确保横线一直存在\r\n15. 修改粘贴权限判断\r\n16. 插入html，获取文档为图片，获取dom结构中输入域不包含边框\r\n17. 修改inserthtml返回值错误\r\n18. 修改GetModifiedElements对病程记录无效的问题\r\n19. 修复插入图片没有设置宽度时超出文档最大宽度的问题\r\n20. 修改DCFormTransmission输出输入域文本带有边框的问题\r\n21. 修改GetDocumentDomStructure输出文本不正确的问题\r\n22. 修改移动端软键盘问题\r\n23. 修改医学表达式绘制重叠的问题\r\n24. 修改医学表达式重叠的问题\r\n25. 修复合并单元格不生效问题\r\n26. 通过SetTableCellElementPoperties接口修改单元格属性\r\n27. 添加Options.DocumentOptions为空的判断\r\n28. 修改SetTableCellElementPoperties支持更多的属性\r\n29. 对microapp中的window写入后端对象防止报错\r\n30. 修改瞳孔图对齐问题\r\n31. 修改光定位对齐问题\r\n32. 增加一个EnableEditImageAdditionShape，用于标记图片是否允许编辑\r\n33. 修改移动端只读时禁止软键盘弹出\r\n34. 修改切换tab页时对选中删除的设置\r\n35. 增加一个左侧预览html，右侧为编辑器的\r\n36. 修改单选下拉框可能丢失焦点的问题\r\n37. 修改SetDomImageByBase64String参数无效的问题\r\n38. 修改闪烁样式颜色\r\n39. 修复右键菜单在空输入域中粘贴文字变成灰色的问题\r\n40. 增加GetElementTextByIDPro是否获取逻辑删除的元素\r\n41. 修改FocusAdjacent，屏蔽逻辑删除和隐藏的元素\r\n42. 修改GetElementTextByIDPro，增加参数屏蔽逻辑删除元素和隐藏元素\r\n43. 修改图片编辑和打印模式下展示位置不一致的问题\r\n44. 修改ModifiedInputFields返回无效的问题\r\n45. 修复：插入一组单复选框元素，当在options里面的ListItem里面分别对元素设置属性，插入元素之后设置的属性无效果。\r\n46. 增加：通过tab键跳转到上一个输入域demo\r\n47. 修复输入域内容锁导致固定宽度丢失的问题\r\n48. 修改圆圈数字段落列表样式\r\n49. 新增编辑器MobileDisableAutoSoftKeyboard属性，当表单模式下控制软键盘的弹出\r\n50. 新增属性tabIndex和tabStop\r\n51. 处理合并行的单元格的固定高度情况\r\n52. 修复IE下表单模式下点击不可编辑地方报错的问题\r\n53. 调整CA签名算法，会造成旧的签名失效\r\n54. CS编辑器输入域下拉框新增弹出时根据光标位置文本模糊判断并定位滚动到相应下拉项\r\n55. 修复在chrome低版本或者IE下报错的问题\r\n56. CS编辑器输入域下拉框检索码框防止多按回退键将下拉框关闭\r\n57. 在表格行属性对话框和单元格属性对话框中添加设置id的功能\r\n58. 增加一个通过接口设置文本的上标下标文本\r\n59. 新增DCTools20221228.MakeImageTransparent方法\r\n60. 第四代BS防止文档自定义属性中有特殊字符导致解析失效的问题\r\n61. 第四代BS修复文档自定义属性内含特殊字符在前端解析错误的问题\r\n62. 第四代BS前端输入域对话框修复日期格式被截断字符的问题\r\n63. SetElementTextByID设置带有上标下标的文本demo\r\n64. 增加一个视野图公式\r\n65. 第四代BS前端修复插入子文档函数接口的Parameters参数对重复ID元素不赋值的问题\r\n66. EventChangeSearchInputSpellCode对输入域重新填充下拉，并点击赋值\r\n67. SetElementText接口增加使用nativeHandle参数\r\n68. 添加粘贴时处理font元素的处理\r\n69. 修复SUM表达式计算没有效果问题\r\n70. 对剪切的执行增加限制\r\n71. 通过搜索自定义下拉，点击不会自动赋值问题\r\n72. 获取上标下标问题\r\n73. 修改删除font元素的代码，防止字符丢失\r\n74. 修改表格删除可能存在的失效的问题\r\n75. 第四代BS调整纯HTML医学表达式在文档中的垂直对齐处理逻辑\r\n76. 修复粘贴时光标位置不正确的问题\r\n77. 修复撤销重做时光标可能丢失的问题\r\n78. 在获取痕迹列表时，删除SaveDocumentToString\r\n79. CS编辑器保存文档到html时新增通过文档选项控制输入域是否输出背景文字\r\n80. 第四代BS前端getHtmlByFiles新增commitusertrace参数支持合并预览前提交文档痕迹\r\n81. 修复输入域设置用户最长输入长度，中文控制不住的问题\r\n82. 增加一个接口InsertXMLbyEementTag\r\n83. 添加InsertXMLbyEementTag，在指定在指定元素的相对位置（前或后）加入一个指定的XML或JSON文档\r\n84. 第四代BS修复纯HTML样式的医学表达式前端应用字号失败的问题\r\n85. 修改GetElementTextByIDPro对痕迹信息的处理\r\n86. 第四代BS前端Get/SetTableCellAttributes补充支持设置单元格跨页镜像属性\r\n87. 增加一个接口GetElementTextByIDPro\r\n88. 修改GetElementTextByIDPro，支持后台引用对象\r\n89. 增加GetElementTextByIDPro，获取元素的文本，包含段落、软回车、上标、下标\r\n90. 修改XTextMedicalExpressionFieldElement使用新的医学表达式\r\n91. CS编辑器修复动态下拉输入域的下拉项排序失效的问题\r\n92. 第五代BS后端掩盖GetHtmlText获取选中内容HTML返回为空的问题\r\n93. 修复delete删除换行无法删除并且丢失光标的问题\r\n94. 修改表单模式下delete时光标不对的问题\r\n95. CS编辑器输入域按勾选时间排序功能添加倒序排序机制\r\n96. 通tab健进行激活下拉输入域，如果检索下拉输入域存在内容可以进行正常的检索赋值的功能，如果内容不存在可以自定义内容并且使用回车进行赋值\r\n97. 第四代BS前端修复PrintDocument接口打印时上下标文本行高不一致的问题\r\n98. 修改输入域属性BackgroundTextColorString赋值无效的问题\r\n99. 修复点击不是空输入域时光标跳到输入域最前面的问题\r\n100. 修复微软输入法中文输入时backspace回退时中文输入被断开的问题\r\n101. 第四代BS后台WEBFORM下监听forms[0]提交事件时不再显示加载界面\r\n102. 输入域校验，必须保证输入域校验有一种校验方式，默认是Text\r\n103. 第四代BS前端插入XML/插入病程接口补充初始化文档批注列表\r\n104. 修复输入域前后边框设置成空格没有展示的问题\r\n105. 修复删除时可能丢失光标问题\r\n106. 视图设置只读模式，右击属性禁止编辑修改结构化元素\r\n107. 下拉搜索触发事件修改参数使用\r\n108. 修改SetElementProperties中条形码二维码对text属性的支持\r\n109. 修复绑定数据源对于单元格所在行是固定高度时保存样式丢失问题\r\n110. CS时间轴修复自定义绘图报错的问题\r\n111. 修改多编辑器时复制剪切存在的多次执行的问题\r\n112. 第五代BS前端新增getHtmlByFileWithSource兼容四代接口\r\n113. 修改linux下中文输入不进去的问题\r\n114. 修改FocusAdjacent的参数判断，支持字符串\r\n115. 第四代BS前端InsertXMLString接口追加病程插入后事件的回调\r\n116. 修改单选框或复选框的必勾项属性无效的问题\r\n117. 第四代BS后台补充解析单元格的打印可见性属性\r\n118. 编辑器加载文档后通过ctl.GetCustomAttribute(key);方法获取属性\r\n119.修改SetCustomAttribute，增加空值和空字符串的判断\r\n120. 修改GetCustomAttribute，增加对null值和空字符串的判断\r\n121. 修改GetElementXMLFragmentByID，增加参数是否包含元素自身\r\n122. 增加兼容FocusNextInput接口，键盘右键离开时间输入域，收起时间下拉\r\n123. 第四代BS修改表格行属性接口新增设置可见性表达式\r\n124. 第四代BS编辑器前端初始化时不再传输明文框架HTML而使用编码字节防止跨站攻击\r\n125. 增加GetCurrentLineElements，获取当前行的元素\r\n126. 第四代BS调整后台SpecifyOrigin服务端配置项的处理逻辑\r\n127. 新增页数改变的事件EventAfterPageCountChange\r\n128. 修改移动端下拉时的软键盘弹出次数\r\n129. 修改SetChildElements，支持当前元素的样式\r\n130.修改当标签存在换行缩进的时候能通过backspace进行删除样式\r\n131.修改SetChildElements，支持各类元素\r\n132.修复快速辅助录入无法使用的问题\r\n133.修改AverageTableRows无效的问题\r\n134.修复文档只读时插入批注报错问题\r\n135.表格的列宽改变后，客户想要使列宽平均分布\r\n136.添加用ID获取元素文本，使用判断条件来过滤元素文本接口【ctl.GetElementTextByIDUseJudgment(id,specifySubDocID, JudgmentConditions)】\r\n137. CS编辑器调整恒牙、乳牙牙位图插入时允许空白数据\r\n138. CS编辑器微调页面设置控件属性\r\n139. 添加SetSelectTableCellGridLineInfo，设置所有选择的单元格网格线\r\n140. 添加GetSelectTableCells，获取所有选择的单元格\r\n141. 第四代BS时间轴前端新增直接保存PDF的接口函数\r\n142. 修复删除时光标可能无法进入单元格的问题\r\n143. 第四代BS时间轴优化前端生成图片的清晰度\r\n144. 在插入元素时，添加自动校正元素编号的功能\r\n145. 时间轴修复自动撑大行高数据行内文本排版缺字的问题\r\n146. 客户设置完水印后想要打印时不显示水印，编辑模式下正常显示\r\n147. 修改下拉框样式问题\r\n148. 修改下拉边界时的样式问题\r\n149. 更新GetDocumentDomStructure无效的问题\r\n150. 更新GetDocumentDomStructure的nativehandle不唯一的问题\r\n151. 第四代BS新增InsertHtml接口允许在指定ID的输入域的指定位置处插入HTML内容\r\n152. 修改多编辑器标尺过高时的显示错误的问题\r\n153. 修改日期弹出框遮挡问题\r\n154. 修复使用只加载文档体后加载整体文档时页眉页脚没有变化的问题\r\n155. 修复部分加载文档不触发文档加载事件的问题\r\n156. 第四代BS前端新增获取元素HTML与当前位置插入HTML的接口\r\n157. 修改GetElementXMLFragmentByID，返回元素的XML字符串\r\n158. 第四代BS修复文档页面横向时获取页面设置宽高颠倒的问题\r\n159. 第四代BS修复图片高度高于固定行高的表格行时在预览下把排版往下撑大的问题\r\n160. 修改GetDocumentDomStructure，返回文档的完整DOM结构\r\n161. 添加GetDocumentDomStructure，获取文档DOM结构\r\n162. 修改编辑器无法复制图片到word的问题\r\n163. 增加通过命令直接修改字体和输入域字体颜色demo\r\n164. 第五代BS修改主页演示代码中的错误\r\n165. 输入域通过弹框修改属性会有刷新页面的问题。\r\n166. 新增colorforfieldtextcolor命令，修改当前输入域或选择输入域的TextColor属性和color样式\r\n167. 修改InsertXmlByIdUserCurrentStyle，使用当前光标处的段落和字体格式\r\n168. 修改InsertXmlByIdUserCurrentStyle，使用当前的行间距和字体格式\r\n169. 增加InsertXmlStringByStyle,通过指定的样式在当前位置插入XML\r\n170. 增加InsertXmlByIdUserCurrentStyle，在指定的输入域内插入文档,并使用当前插入点的样式\r\n171. 添加属性DropdownList_TwoColumnDisplay='true'让单选下拉展示为两栏样式\r\n172. 第四代BS前端DCFormTransmission接口函数新增ReturnMergedContent支持返回合并带痕迹的文档\r\n173. 调整字体操作，新增WriterControl.GetDCWriterVersion()\r\n174. 修改标签文本元素对Text的属性的设置和读取\r\n175. setElementText接口增加一个参数，用于判断是否将光标跳转到文本结尾处\r\n176. 修复标签文本多选框不生效问题\r\n177. 第四代BS后台优化LoadDocumentFromBase64String的执行性能\r\n178. 第四代BS修改对老版ASP.NET服务端控件的兼容性支持\r\n179. 添加属性DragImageAllowedExceedBoundary用来控制在图片拖拽大小时是否允许超出当前的边界，默认(false)可以超出。【ctl.Options.DragImageAllowedExceedBoundary = true】\r\n180. CS编辑器输入域数据源绑定改为值为null时不做绑定处理\r\n181. 添加图片的SmoothZoom的解析\r\n182. 修改外部粘贴增加事件对象属性\r\n183. 第四代BS的ASP.NET服务端控件添加NoJQuery属性支持拉取无jquery库的JS\r\n184. 修改EditorSetContentStyle接口，避免影响原有的其他文档样式\r\n185. 修改编辑器旧光标的位置从WriterControl_UI到rootElement本身\r\n186. 当一个单元格里面插入一个加粗的文本标签，一个不加粗，调用方法EditorSetContentStyle会把不加粗文本标签，变成加粗。同理checkbox，也是一样的效果，可能还有其它元素的样式也会改变\r\n187. 第四代BS修复单元格内一组选框表达式生成不正常的问题\r\n188. 修改让下拉搜索框内容改变能触发EventChangeSearchInputSpellCode\r\n189. 第四代BS修复表格行填充到页底再预览时少填一行的问题\r\n190. 第五代BS优化FlashElement/s接口的参数传递机制\r\n191. 第五代BS输入域属性解析补充添加解析分组互斥属性\r\n192. 第五代BS优化单元格数据源绑定机制应用单元格原有的元素样式\r\n193. 修改RuleVisible属性控制标尺的是否显示\r\n194. 新增编辑器属性EditorNoObtainFocus，值为once,always表示编辑器不获取焦点\r\n195. 新增移动端选中文本写法\r\n196. 修复删除列报错问题【DCExecuteCommand('Table_DeleteColumn', false, null)】\r\n197. 时间轴修复AutoHeight数据行扩充行高高度不正确的问题\r\n198. 时间轴数据点对象新增Superscript支持用上标显示的排便样式\r\n199. 修复方法AppendSubDocuments\r\n200. 修改移动端存在点击光标自动定位问题\r\n201. 修改多编辑器点击滚动和打印预览全屏问题\r\n202. 第四代BS掩盖对段落文字居中后将段落内表格内容也居中的问题\r\n203. 第四代BS前端合并对比文档接口新增参数支持合并前先提交原有痕迹\r\n204. 第四代BS前端修复ContentReadonly表达式失效的问题\r\n205. 页面设置增加页眉页脚高度\r\n206. 第四代BS新增WEB选项为预览下删除段落前空白字符功能添加开关\r\n207. 第四代BS前后端调整月经史/光定位/视野图表达式的HTML显示样式\r\n208. 取消在插入输入域时触发EventInsertObject事件，否则会影响其他客户的使用\r\n209. 在通过命令创建输入域时，触发EventInsertObject事件\r\n210. 悬浮图片样式属性，在布局方式为普通时，其他属性置灰禁用\r\n211. 添加SelectCurrentElement，选中当前元素的接口\r\n212. 修改下拉框位置问题，可能存在遮挡输入域的情况\r\n213. 第四代BS调整单元格内容预览下不再两端对齐避免排版切字问题\r\n214. 第四代BS后台修复留痕预览下痕迹列表项与预览html元素不对应的问题\r\n215. 修改下拉框弹出遮挡文本的问题\r\n216. 修改当表格设置固定高且不可改变的时候导致的排版问题\r\n217. 当存在编辑器失去焦点后，再次点击编辑器可能存在ShowCaret不触发的问题，此处判断如果不触发就手动调用\r\n218. 修改GetDocumentSpecifyPageImages，返回值改为base64\r\n219. 第四代BS前端支持在预览界面下直接保存当前文档\r\n220. 第四代BS前端编辑端支持使用HTML样式显示月经史/光定位/视野图医学表达式\r\n221. 新增图片属性增加悬浮的样式属性\r\n222. 第五代BS对图片元素属性的获取设置新增支持透明色与垂直对齐方式\r\n223. 解决输入域属性对话框校验先设置成长度校验然后重新进入输入域属性对话框，长度校验变成了数值校验\r\n224. 修改SelectElementById的参数判断\r\n225. 修改GetContextMenuTypeName，先判断表格\r\n226. 修复下拉弹框在zoom放大情况下左边可能展示不全的问题\r\n227. 第五代BS前端优化插入图片时对保持图片宽高比例的参数的处理逻辑\r\n228. 增加特殊字符的转换\r\n229. 第四代BS前端修复缩小字体填充单元格内容被遮盖的问题\r\n230. 修改输入域辅助录入获取焦点自动跳转的方法\r\n231. 第五代BS优化接口函数CommitContentUserTrace的参数传递机制\r\n232. 第四代BS完成编辑端输出HTML医学表达式的后台代码\r\n233. 修改复制粘贴生僻字不显示问题\r\n234. 第四代BS新增编辑模式下输出HTML医学表达式的WEB选项开关\r\n235. CS编辑器调整医学表达式数据同步的机制\r\n236. 第四代BS调整医学表达式在预览下输出HTML的样式全部靠上对齐\r\n237. 修改数值下拉框的滚动条\r\n238. 多选下拉隐藏用户自定义的下拉项\r\n239. 修改下拉时按上下键可能报错问题\r\n240. 修改复制时的状态标记保证每次复制完成后能重置\r\n241. 修改SetElementProperties，返回是否修改属性的返回值\r\n242. 修改GetCustomAttribute、SetCustomAttribute，获取和设置文档的自定义属性\r\n243. 修改SelectContentByStartEndElement，参数支持id、后台引用对象、NativeHandle对象\r\n244. 通过当前输入域的listItems长度判断是否展示默认下拉项\r\n245. 第四代BS修复FourValues表达式预览输出HTML时对不齐的问题\r\n246. 修改InsertRowsToPageBottomByAfterRowHasNewPage，铺满整个页面\r\n247. 调整输入域的对话框宽度，避免属性显示不全的问题\r\n248. 修改GetDocumentUserTrackInfos，在清洁模式下获取痕迹信息\r\n249. 修复选择表格单元格并且放开鼠标在编辑器整体左边时删除表格行把编辑器整体删除的问题\r\n250. 修改下拉输入域在没有静态下拉列表数据时无法触发EventDropdownEditor的问题\r\n251. 修改Table_InsertRowsToPageBottomByRow命令，在任何一行执行会在表格占据的每一页的最后铺满\r\n252. 增加IsRowHasNewPage判断指定编号的表格是否存在换页，增加InsertRowsToPageBottomByAfterRowHasNewPage在指定表格行下面插入新行，使表格延伸到当前页面的最底端\r\n"
    },
    {
        "year": "",
        "time": "9月25日-10月23日",
        "version": "",
        "number": "",
        "pre": "1.单独元素进行撤销的功能\r\n2.删除指定表格行、指定的元素、指定的表格列\r\n3.增加一个页脚水平线的功能\r\n4.文字设置上下标后，再设置文字的背景色，背景色异常\r\n5.插入标签文本属性自动换行无效\r\n6.兼容四代接口LockContentByTableRow\r\n7.兼容四代接口GetAllElementsWithoutCharElement\r\n8.兼容四代接口GetAllElements\r\n9.兼容四代接口SetTableCellSettings\r\n10.兼容四代接口ResetModifiedSpecifyElement\r\n11.兼容四代接口GetElementCoordinateByID\r\n12.兼容四代接口GetDocumentSpecifyPageImages\r\n13.兼容四代接口GetDocumentSpecifyPageImages\r\n14.区域选择打印、选择内容打印\r\n15.病程合并打印，单独加载一个页面创建编辑器，偶发会出现文档加载不出来的现象，鼠标下拉下就加载出来了\r\n16.单个保存病程记录编辑器报错\r\n17.兼容四代接口SetTableCellDirection\r\n18.五代设置快速录入模式，不能通过键盘下键来选择项录入内容\r\n19.双击进入页眉，左下角的编辑器信息获取有误\r\n20.打印的指定页面从0开始，不符合用户习惯，能否修改成从1开始\r\n21.Linux服务的GetPrintPreviewHTML接口错误\r\n22.从WPS复制“踇”这个字到编辑器，无法显示\r\n23.下拉输入域，时间输入域，清除背景文字，下拉选项和时间选框无法正常弹出\r\n24.新增EventAfterFieldContentEdit下拉元素选择后事件\r\n25.输入域的背景文字的文本套圈不能被撤销\r\n26.添加对比视图功能\r\n27.从WPS中无法复制“踇”这个字到编辑器\r\n28.打印选择的内容\r\n29.表格粘贴排版错乱\r\n30.表格需要支持二次数据源绑定，用来支持追加，覆盖，清除的业务功能\r\n31.域本身有背景文字，直接打印背景文字会隐藏掉，但是如果在域内输入内容，然后再用回退键删除内容，恢复至背景文字，此时再打印，背景文字不会再隐藏\r\n32.插入下拉输入域，并设置Alignment属性值为Far居右对齐，双击本来是需要弹出下拉选项框，现在双击会把输入域中的内容选中\r\n33.合并生成的html 文字颜色会受外部元素的color 所影响导致字体颜色不统一\r\n34.加载后编辑器标尺会重叠\r\n35.当编辑器设置的宽度很小的时候，但是里面下拉输入域的下拉选项的长度超过了编辑器的宽度，下拉选项就会显示不全\r\n36.客户需要一个配置和一个回调函数来手动创建编辑器\r\n37.当客户删除掉某个结构化元素（删除元素，不是删除元素的内容）的时候，需要有事件进行监听\r\n38.客户需要在预览界面添加续打功能\r\n39.容器高度小于编辑器高度出现滚动条时候，下拉显示不全\r\n40.客户粘贴功能失效\r\n41.文档五代和cs加载效果不一致，使用cs 加载和打印会出现特无法识别的殊字符\r\n42.次髎穴，中间那个字从word复制到编辑器不行，从微信复制到编辑器可以\r\n43.下拉输入域激活模式默认default 打开，设置属性 ctl.DocumentOptions.BehaviorOptions.DefaultEditorActiveMode = 'MouseDblClick' 双击不生效（客户说输入域激活模式不好用）\r\n44.打印预览之后的回调EventAfterPrintPreview事件，这个事件触发的时候canvas还没有绘制完编辑器内容，我们在这个事件回调里面调用浏览器打印编辑器内容时会出现空白页面\r\n45.腘，文档里有这个字，会导致整个word复制不到编辑器\r\n46.有无办法可以统计编辑器无法复制粘贴的生僻字\r\n47.现在编辑器 无法从word中复制粘贴内容（无论有无生僻字）到编辑器中，wps 中可以复制粘贴\r\n48.调用命令：ctl.WriterControl.DCExecuteCommand ('DocumentValueValidate', false, null);文档中元素设置了校验属性，校验失败，没有返回值\r\n49.修改自定义样式 例如： 修改指定表格边框是否显示 $(ctrlDiv.GetContentContainer()).find('table[dctype=XTextTableElement][dc_attributes*='{\'Name\':\'NsoElementTypeName\',\'Value\':\'Region\'}']').css('border', bVisible? '1px solid black': '1px hidden black')\r\n50.客户想要在表单模式情况下插入表格行\r\n51.多个病程合并的时候，获取其中一个病程的xml和text，现在是先获取xml，text返回就是Null,先获取text，xml返回的就是null ,总之就是第二次不行\r\n52.追加病程的方法里“ cssStyle ” 自定义样式没有效果\r\n53.图片的拖拽大小失效\r\n54.int startPoint = this.writerControl1.Selection.NativeStartIndex;  目前只存在后台获取数据的方式\r\n55.int startPoint =this.writerControl1.Selection.NativeLength; ;目前只存在后台获取数据的方式 希望添加接口可以在前端获取值\r\n56.客户希望在选择区域打印的时候 可以控制是否打印表格边框\r\n57.第五代编辑器使用CASignature签名，保存过后，在4代打开签名无效\r\n58.通过iframe加载五代编辑器报错\r\n59.打印为Html异常\r\n60.五代单复选框属性对话框需要内置上自定义属性\r\n61.单复选框无法添加删除线\r\n62.document.createElement()修改为rootElement.ownerDocument.createElement()\r\n63.制作iframe嵌套页面\r\n64.有序列表无序列表无法取消\r\n65.linux版本插入一个带有内容的输入域元素，内容赋值不上\r\n66.屏蔽右键浏览器信息\r\n67.客户前端项目引入一个框架js文件，编辑器插入一个时间输入域，时间下拉框显示是个空白框\r\n68.客户通过InsertXmlById在编辑器中插入一段xml片段，需要鼠标在编辑器中聚焦滑动下插入的内容才会显示出来，客户偶发问题\r\n69.标签元素的自动大小属性无效\r\n70.下载Doc失效\r\n71.下拉输入域通过上下及enter键确认报错\r\n72.开启阅读模式后，加载xml在关闭阅读模式输入域边框会消失\r\n73.输入域设置数据源绑定，值无法绑定到输入域中\r\n74.占位问题，打印预览模式需要续打\r\n75.客户想要光标点击每个病程是显示病程边框，打印时不需要有边框，只呈现当前光标所在病程的边框，并且需要可以修改指定病程的边框样式\r\n76.五代编辑器获取指定病程里面的所有输入域，（GetAllInputFields）会报错\r\n77.重写FileOpen\r\n78.单复选框的显示样式异常\r\n79.表格内容选中后光标位置不准\r\n80.CurrentSubDoc 这个api发生变化了，之前返回的是string类型病程id，新版本返回的是number类型  -1   0  这种值了\r\n81.在点击事件中 弹出弹框 ，现在这个弹框的 位置 需要获取到.希望返回网页中事件位置\r\n82.【4代接口升级5代】如何查询所有病程下的签名节点\r\n83.【4代接口升级5代】获取病程页面子病程签名的节点2\r\n84.【4代接口升级5代】获取当前文档的签名节点3\r\n85.【4代接口升级5代】如何获取病历页面radio选中的值\r\n86.MergeDocumentByFileContent目前是返回对比的xml文档，客户想跟四代的设计一样，调用该api之后，在当前界面直接显示出对比的效果也不是返回对应的xml\r\n87.【4代接口升级5代】如何清空页面中所有内容\r\n88.【4代接口升级5代】获取当前节点是否是下拉\r\n89.修改内部的名称前缀\r\n90.【4代接口升级5代】获取当前节点判断判断其是不是不可编辑的；要是不可编辑双击事件返回false\r\n91.【4代接口升级5代】获取当前节点判断其是否带有双击事件\r\n92.文档中存在多个ID相同的输入域元素，客户需要每个元素进行赋值，目前赋值都是给第一个ID相同的元素进行了赋值\r\n93.【4代接口升级5代】双击元素出来自定义下拉列表数据\r\n94.【4代接口升级5代】双击元素出来自定义下拉列表数据 如何动态添加数据\r\n95.【4代接口升级5代】双击元素出来自定义下拉列表数据点击列表数据进行赋值\r\n96.【4代接口升5代】获取获取元素的内容\r\n97.下拉框的位置\r\n98.当前页面中五代编辑器内选中内容后，在对编辑器以外的内容进行复制粘贴，粘贴出来的结果还是编辑器内选中的内容\r\n99.选中某一行，先设置字体大小为初号，然后在选中该行，设置成一开始的字体大小，内容样式变小了，但是行的高度还在\r\n100.选中某一行，先设置字体大小为初号。菜单栏上面不会出现对应的字号了\r\n101.客户插入一组单选框，需要每一项都是从上往下排版，也就是一个单选框占一个段落\r\n102.五代插入电子签名，如何插入到指定的容器元素。目前需要先把光标定位到指定输入域里面才能插入\r\n103.客户需要把光标定位到指定单元格的前端\r\n104.获取指定结构下所有嵌套的结构\r\n105.【新需求】客户希望在使用弹窗插入表格时候确定按钮添加一个回调函数来处理自己的业务\r\n106.【功能失效】插入一个按钮，按钮的ScriptTextForClick: 'alert('哦呵呵呵呵呵')'设置上，点击按钮不会触\r\n107.【优化问题】调出查找替换属性对话框，拖动到文档下方时 有时候拖动对话框无效\r\n108.20231011版本调用SetElementTextByID对输入域赋值，当第一个参数设置的元素ID在文档中不存在的时候，浏览器控制台会报错，20230802版本没有报错信息\r\n109.加载病程记录，有的病程记录中设置了批注，当把批注删除掉的时候，调用方法getModifiedElements('XTextSubDocumentElement')获取到文档中已经被修改过的病程记录列表，获取不到这个删除了批注的病程\r\n110.同时设置删除线和上下标展示有问题\r\n111.客户，在表格中插入下拉输入域，第一个输入域选择好之后当前列对应的下一个下拉输入域无法打开\r\n112.选中文本设置背景色后添加字符边框，背景色被遮挡\r\n113.shift+f12背景色和前景色功能无效\r\n"
    },
    {
        "year": "",
        "time": "4月25日-6月30日",
        "version": "",
        "number": "",
        "pre": "1.第五代BS新增大小写转换的前端编辑器命令与四代兼容\r\n2.BS修复系统中没有ODT注册信息时打不开ODT文件的问题\r\n3.第五代BS扩展获取与设置表格元素属性的接口函数功能\r\n4.BS前端粗略修复表格后台设置只读前端没控住的问题\r\n5.添加四代兼容接口InsertXmlBase64String\r\n6.BS后台修复全局文字设置颜色后输出不正常的问题\r\n7.新增EventZoomChanged事件，新增GetElementBy2IDs()\r\n8.第五代BS重写GetPDFByFiles函数调用四代服务接口\r\n9.BS后台更新WASM命令允许第五代调用GetPDFByFiles接口\r\n10.第五代开发辅助录入的功能\r\n11.第代病程套打接口\r\n12.第五代加密显示的设置\r\n13.修改属性的大小写判断\r\n14.修改数据校验最大值最小值的设置\r\n15.修改InsertSubDocuments接口\r\n16.修改打印预览导致的输入法的问题\r\n17.修改SetCurrentSubDocumentReadOnly接口样式\r\n18.修复表单模式下删除输入域的问题\r\n19.修改两端对齐的属性,保证能正确展示效果\r\n20.再次提交互惠复制保存打开格式不正确的问题\r\n21.修改复制保存打开换行问题\r\n22.修改pdf中存在的换行dcpf导致的后台保存导致的元素首行缩进\r\n23.输入域属性对话框中自定义弹窗有问题。插入一个下拉输入域，下拉选项都变成了null\r\n24.第五代BS新增SetLabelElementContactSettings与四代兼容接口\r\n25.第五代添加shift+f12命令\r\n26.修改可能出现键盘操作cut不生效的问题\r\n27.第五代BS新增CASignature签名函数与四代兼容接口\r\n28.修改上下键操作,当shift时不在内部操作上下键\r\n29.修改表单模式下点击输入域同时键盘输入，会输入到格子外面\r\n30.第五代BS修复自定义属性名称重复报错问题\r\n31.BS前端修复向右向下合并单元素时丢失颜色框线的问题\r\n32.EventBeforePrint的位置保证canvas绘制完成,修改EventBeforePrintToGetHtml通过printAsHtml返回打印的html给回调函数\r\n33.添加EventBeforePrintToGetHtml/ondocumentmousedown/ondocumentmouseup事件\r\n34.添加EventBeforeCut/EventAfterPrintPreview/EventBeforePaste/EventFieldOnFocus/EventBeforePrint事件\r\n35.第五代BS前端优化获取设置元素属性的接口函数的参数兼容性\r\n36.修改日期输出格式的时候能直接把现有数据替换出来\r\n37.新增GetLastPageInfo()\r\n38.BS编辑器新增WEB选项AutoFixFontSize9试图避开9号字体意外报错的问题\r\n39.BS前端修复带缩进段落的输入域内文本中间按回车后预览保存样式不对的问题\r\n40.处理当从预览模式下复制数据时保证数据展示(换行)在复制完之后和保存完之后显示效果一致\r\n41.BS前端修复被逻辑删除的表格在编辑端输出结构不正确的问题\r\n42.新增方法用于在DataBindingFromObjToXML是能实现后端加载数据源并展示\r\n43.第五代修改刷新不及时的问题\r\n44.第五代BS添加Get/SetElementCustomAttributes\r\n45.修复表格单元格复制模式未生效\r\n46.修复表格新增加一列，不均分宽度\r\n47.修改复制粘贴时处理id的逻辑从复制移到粘贴中去\r\n48.修改复制的时候如果存在带有id的元素时,自动处理为不一样的id值\r\n49.BS前端修复网格线单元格跨页时预览报错问题\r\n50.页面设置纸张大小适配数值类型\r\n51.BS本地打印后台修复打印可见性表达式失效的问题\r\n52.修复输入域分隔符为\r\n应该为换行\r\n53.给输入域新增CopySource来实现设置元素同步复制,先接收对应的输入域id值\r\n54.对EventChangeSearchInputSpellCode回调进行处理新增ElementID: currentInput和ListSourceName属性\r\n55.第五代BS调整InsertSubDocuments/AppendSubDocuments接口函数代码完整兼容第四代\r\n56.修复剪切单个输入域时粘贴出来的不是输入域的问题\r\n57.修改printashtml添加回调能把html和打印的方法返回\r\n58.第五代新增GetPrintNowHTML和PrintByHtml方法,用于打印html\r\n59.第五代BS接口ApplyDocumentOptions追加重绘文档\r\n60.BS修复编辑器掩盖预览下表格行超过页脚问题\r\n61.CS编辑器添加斜视符号医学表达式\r\n62.修改数值下拉影响其他下拉宽度的问题\r\n63.CS编辑器添加眼球突出度医学表达式\r\n64.CS编辑器添加电活力测试牙位图医学表达式\r\n65.第五代对Get/SetTableCellAttribute和TableCellPopUpWindow中添加slantsplitlinestyle来显示斜分割线\r\n66.第五代新增图片的悬浮样式在InsertImageByJsonText中添加属性imgPosition属性控制,当设置悬浮时不能进行图片编辑\r\n67.CS编辑器添加固定桥牙位图医学表达式\r\n68.修改设置get/SetTableRowAttribute和TableRowPopUpWindow,新增两个属性fixrowheight和specifyheight两个值\r\n69.第五代新增表单模式、内容保护\r\n70.第五代添加获取内容保护状态的接口\r\n71.第五代增加获取文档表单模式的接口\r\n72.第五代插入表格、拆分单元格、批注、表单模式、内容保护模式、用户登录排版\r\n73.处理在不可编辑输入域时可能出现的ondocumentclick事件触发两次的问题\r\n74.修改在tab页切换的时候，第一页之后的所有也存在下拉框位置显示不正确的问题\r\n75.新增dcexecutecomment(copy/paste)复制粘贴的方法\r\n76.添加合并全部的医学表达式对话框【WriterControl_Dialog.MedicalExpressionDialo\r\n77.在api中添加GetPrintPreviewHTMLByMixedFiles和PrintPreviewByHtml两个方法用于多问档合并打印\r\n78.CS编辑器输入域绑定新增支持直接绑定图片\r\n79.BS编辑器后台保存追加异常文档记录日志功能\r\n80.添加单复选框属性对话框【CheckboxAndRadioDialog】\r\n81.修复右键菜单点击事件问题\r\n82.CS编辑器修复letterspacing无法设置默认值0的问题\r\n83.BS修复保存TEXT格式字符串时仍然显示出隐藏输入域文本的问题\r\n84.添加打开页面设置弹框方法【DocumentSettingsDialog】\r\n85.修复下拉列表中回车赋值导致dc_innervalue不对的问题\r\n86.BS前端修复页眉只读在表单模式下输入域只读失效的问题\r\n87.第五代BS编辑器本地客户端打印扩充支持参数并补上示例\r\n88.BS前端修复日期输入域编辑后事件触发过早的问题\r\n89.BS修复下拉中的INPUT可能被删除问题\r\n90.BS修复时间差公式结果+N后计算错误的问题\r\n91.CS编辑器新增对第五代BS编辑器本地打印的接应处理\r\n92.第五代BS编辑器新增本地客户端打印的兼容接口函数\r\n93.替换setelementtextbyid方法防止替换\n出错出现多个换行\r\n94.第五代BS编辑器的按钮元素允许配置ScriptTextForClick在前端直接执行\r\n95.修改图片PDF的问题\r\n96.BS修改使用属性对话框后可能出现的动态下拉不生效的问题\r\n97.第五代BS编辑器新增页码元素的插入命令/获取元素属性/设置元素属性\r\n98.第五代BS编辑器新增水平线元素的插入命令/获取元素属性/设置元素属性\r\n99.第五代BS编辑器新增标签元素的插入命令/获取元素属性/设置元素属性\r\n100.BS编辑器DCFORM输入域新增usereditable属性输出\r\n101.CS编辑器COM接口新增ComCreateUserLoginInfo\r\n102.BS修改表格从右往左拖拽的逻辑\r\n103.BS调整选框元素预览端无条件输出图片选框而不输出字符了\r\n104.第五代新增LoadDocumentFromBase64String与InsertImageFromJSONText\r\n105.CS分区图像文档元素追加支持鼠标点击文档元素事件\r\n106.处理复制输入域时可能造成从右向左选中和从左向右选中的结果不一样的问题\r\n107.BS处理复制无法把图片复制进正文的问题\r\n108.第五代新增输入域/条形码/二维码/单选多选框/医学表达式元素的Get/SetElementProperties接口\r\n109.第五代新增输入域/条形码/二维码/单选多选框/医学表达式元素的元素属性导入导出的工具函数接口\r\n110.BS修改清除数据源路劲不生效的问题和下拉为null的问题\r\n111.第五代新增在指定元素中加入元素的功能\r\n112.第五代新增输入域元素的插入命令\r\n113.第五代新增XTextDocumentList.SaveImagePDF()\r\n114.BS修改换行复制输入域导致排版混乱的问题\r\n115.BS新增条形码元素的插入命令\r\n116.BS修改属性对话框删除输入域宽度试给默认宽度0\r\n117.第五代新增页面用于显示各种对话框\r\n118.第五代新增医学表达式插入命令\r\n119.第五代添加选择内容的json格式的功能SelectionJson\r\n120.第五代添加保存选择内容的json格式的接口SelectionJson\r\n121.BS修改删除可能出现删不掉的情况\r\n122.BS修复输入内容时清除多余的后边框\r\n123.BS新增DCWriterPublish.VersionString导出内核版本号\r\n124.BS修改跨病历复制出现样式丢失的问题\r\n125.CS编辑器恒乳牙医学表达式添加全选按钮\r\n126.BS修改删除纯文本时可能出现报错的问题\r\n127.BS修改enter时可能会多给一个br标签的问题，优化上下键操作\r\n128.BS修复通过输入域对话框删除掉固定宽度不生效问题\r\n129.BS水平线元素在预览下的展示做成垂直居中\r\n130.BS修复回车时把前面内容删除的问题\r\n131.BS处理删除可能会没有效果的问题\r\n132.BS表格存在不可删除元素时，不让删除表格行\r\n133.BS修复删除时会把光标定位到输入域外的问题\r\n134.BS修复可以删除设置为不可删除input的问题\r\n135.BS修复合并单元格带表达式的表格行加载显示不对的问题\r\n"
    },
    {
        "year": "",
        "time": "4月25日-6月30日",
        "version": "",
        "number": "",
        "pre": "1.第五代BS新增大小写转换的前端编辑器命令与四代兼容\r\n2.BS修复系统中没有ODT注册信息时打不开ODT文件的问题\r\n3.第五代BS扩展获取与设置表格元素属性的接口函数功能\r\n4.BS前端粗略修复表格后台设置只读前端没控住的问题\r\n5.添加四代兼容接口InsertXmlBase64String\r\n6.BS后台修复全局文字设置颜色后输出不正常的问题\r\n7.新增EventZoomChanged事件，新增GetElementBy2IDs()\r\n8.第五代BS重写GetPDFByFiles函数调用四代服务接口\r\n9.BS后台更新WASM命令允许第五代调用GetPDFByFiles接口\r\n10.第五代开发辅助录入的功能\r\n11.第代病程套打接口\r\n12.第五代加密显示的设置\r\n13.修改属性的大小写判断\r\n14.修改数据校验最大值最小值的设置\r\n15.修改InsertSubDocuments接口\r\n16.修改打印预览导致的输入法的问题\r\n17.修改SetCurrentSubDocumentReadOnly接口样式\r\n18.修复表单模式下删除输入域的问题\r\n19.修改两端对齐的属性,保证能正确展示效果\r\n20.再次提交互惠复制保存打开格式不正确的问题\r\n21.修改复制保存打开换行问题\r\n22.修改pdf中存在的换行dcpf导致的后台保存导致的元素首行缩进\r\n23.输入域属性对话框中自定义弹窗有问题。插入一个下拉输入域，下拉选项都变成了null\r\n24.第五代BS新增SetLabelElementContactSettings与四代兼容接口\r\n25.第五代添加shift+f12命令\r\n26.修改可能出现键盘操作cut不生效的问题\r\n27.第五代BS新增CASignature签名函数与四代兼容接口\r\n28.修改上下键操作,当shift时不在内部操作上下键\r\n29.修改表单模式下点击输入域同时键盘输入，会输入到格子外面\r\n30.第五代BS修复自定义属性名称重复报错问题\r\n31.BS前端修复向右向下合并单元素时丢失颜色框线的问题\r\n32.EventBeforePrint的位置保证canvas绘制完成,修改EventBeforePrintToGetHtml通过printAsHtml返回打印的html给回调函数\r\n33.添加EventBeforePrintToGetHtml/ondocumentmousedown/ondocumentmouseup事件\r\n34.添加EventBeforeCut/EventAfterPrintPreview/EventBeforePaste/EventFieldOnFocus/EventBeforePrint事件\r\n35.第五代BS前端优化获取设置元素属性的接口函数的参数兼容性\r\n36.修改日期输出格式的时候能直接把现有数据替换出来\r\n37.新增GetLastPageInfo()\r\n38.BS编辑器新增WEB选项AutoFixFontSize9试图避开9号字体意外报错的问题\r\n39.BS前端修复带缩进段落的输入域内文本中间按回车后预览保存样式不对的问题\r\n40.处理当从预览模式下复制数据时保证数据展示(换行)在复制完之后和保存完之后显示效果一致\r\n41.BS前端修复被逻辑删除的表格在编辑端输出结构不正确的问题\r\n42.新增方法用于在DataBindingFromObjToXML是能实现后端加载数据源并展示\r\n43.第五代修改刷新不及时的问题\r\n44.第五代BS添加Get/SetElementCustomAttributes\r\n45.修复表格单元格复制模式未生效\r\n46.修复表格新增加一列，不均分宽度\r\n47.修改复制粘贴时处理id的逻辑从复制移到粘贴中去\r\n48.修改复制的时候如果存在带有id的元素时,自动处理为不一样的id值\r\n49.BS前端修复网格线单元格跨页时预览报错问题\r\n50.页面设置纸张大小适配数值类型\r\n51.BS本地打印后台修复打印可见性表达式失效的问题\r\n52.修复输入域分隔符为\r\n应该为换行\r\n53.给输入域新增CopySource来实现设置元素同步复制,先接收对应的输入域id值\r\n54.对EventChangeSearchInputSpellCode回调进行处理新增ElementID: currentInput和ListSourceName属性\r\n55.第五代BS调整InsertSubDocuments/AppendSubDocuments接口函数代码完整兼容第四代\r\n56.修复剪切单个输入域时粘贴出来的不是输入域的问题\r\n57.修改printashtml添加回调能把html和打印的方法返回\r\n58.第五代新增GetPrintNowHTML和PrintByHtml方法,用于打印html\r\n59.第五代BS接口ApplyDocumentOptions追加重绘文档\r\n60.BS修复编辑器掩盖预览下表格行超过页脚问题\r\n61.CS编辑器添加斜视符号医学表达式\r\n62.修改数值下拉影响其他下拉宽度的问题\r\n63.CS编辑器添加眼球突出度医学表达式\r\n64.CS编辑器添加电活力测试牙位图医学表达式\r\n65.第五代对Get/SetTableCellAttribute和TableCellPopUpWindow中添加slantsplitlinestyle来显示斜分割线\r\n66.第五代新增图片的悬浮样式在InsertImageByJsonText中添加属性imgPosition属性控制,当设置悬浮时不能进行图片编辑\r\n67.CS编辑器添加固定桥牙位图医学表达式\r\n68.修改设置get/SetTableRowAttribute和TableRowPopUpWindow,新增两个属性fixrowheight和specifyheight两个值\r\n69.第五代新增表单模式、内容保护\r\n70.第五代添加获取内容保护状态的接口\r\n71.第五代增加获取文档表单模式的接口\r\n72.第五代插入表格、拆分单元格、批注、表单模式、内容保护模式、用户登录排版\r\n73.处理在不可编辑输入域时可能出现的ondocumentclick事件触发两次的问题\r\n74.修改在tab页切换的时候，第一页之后的所有也存在下拉框位置显示不正确的问题\r\n75.新增dcexecutecomment(copy/paste)复制粘贴的方法\r\n76.添加合并全部的医学表达式对话框【WriterControl_Dialog.MedicalExpressionDialo\r\n77.在api中添加GetPrintPreviewHTMLByMixedFiles和PrintPreviewByHtml两个方法用于多问档合并打印\r\n78.CS编辑器输入域绑定新增支持直接绑定图片\r\n79.BS编辑器后台保存追加异常文档记录日志功能\r\n80.添加单复选框属性对话框【CheckboxAndRadioDialog】\r\n81.修复右键菜单点击事件问题\r\n82.CS编辑器修复letterspacing无法设置默认值0的问题\r\n83.BS修复保存TEXT格式字符串时仍然显示出隐藏输入域文本的问题\r\n84.添加打开页面设置弹框方法【DocumentSettingsDialog】\r\n85.修复下拉列表中回车赋值导致dc_innervalue不对的问题\r\n86.BS前端修复页眉只读在表单模式下输入域只读失效的问题\r\n87.第五代BS编辑器本地客户端打印扩充支持参数并补上示例\r\n88.BS前端修复日期输入域编辑后事件触发过早的问题\r\n89.BS修复下拉中的INPUT可能被删除问题\r\n90.BS修复时间差公式结果+N后计算错误的问题\r\n91.CS编辑器新增对第五代BS编辑器本地打印的接应处理\r\n92.第五代BS编辑器新增本地客户端打印的兼容接口函数\r\n93.替换setelementtextbyid方法防止替换\n出错出现多个换行\r\n94.第五代BS编辑器的按钮元素允许配置ScriptTextForClick在前端直接执行\r\n95.修改图片PDF的问题\r\n96.BS修改使用属性对话框后可能出现的动态下拉不生效的问题\r\n97.第五代BS编辑器新增页码元素的插入命令/获取元素属性/设置元素属性\r\n98.第五代BS编辑器新增水平线元素的插入命令/获取元素属性/设置元素属性\r\n99.第五代BS编辑器新增标签元素的插入命令/获取元素属性/设置元素属性\r\n100.BS编辑器DCFORM输入域新增usereditable属性输出\r\n101.CS编辑器COM接口新增ComCreateUserLoginInfo\r\n102.BS修改表格从右往左拖拽的逻辑\r\n103.BS调整选框元素预览端无条件输出图片选框而不输出字符了\r\n104.第五代新增LoadDocumentFromBase64String与InsertImageFromJSONText\r\n105.CS分区图像文档元素追加支持鼠标点击文档元素事件\r\n106.处理复制输入域时可能造成从右向左选中和从左向右选中的结果不一样的问题\r\n107.BS处理复制无法把图片复制进正文的问题\r\n108.第五代新增输入域/条形码/二维码/单选多选框/医学表达式元素的Get/SetElementProperties接口\r\n109.第五代新增输入域/条形码/二维码/单选多选框/医学表达式元素的元素属性导入导出的工具函数接口\r\n110.BS修改清除数据源路劲不生效的问题和下拉为null的问题\r\n111.第五代新增在指定元素中加入元素的功能\r\n112.第五代新增输入域元素的插入命令\r\n113.第五代新增XTextDocumentList.SaveImagePDF()\r\n114.BS修改换行复制输入域导致排版混乱的问题\r\n115.BS新增条形码元素的插入命令\r\n116.BS修改属性对话框删除输入域宽度试给默认宽度0\r\n117.第五代新增页面用于显示各种对话框\r\n118.第五代新增医学表达式插入命令\r\n119.第五代添加选择内容的json格式的功能SelectionJson\r\n120.第五代添加保存选择内容的json格式的接口SelectionJson\r\n121.BS修改删除可能出现删不掉的情况\r\n122.BS修复输入内容时清除多余的后边框\r\n123.BS新增DCWriterPublish.VersionString导出内核版本号\r\n124.BS修改跨病历复制出现样式丢失的问题\r\n125.CS编辑器恒乳牙医学表达式添加全选按钮\r\n126.BS修改删除纯文本时可能出现报错的问题\r\n127.BS修改enter时可能会多给一个br标签的问题，优化上下键操作\r\n128.BS修复通过输入域对话框删除掉固定宽度不生效问题\r\n129.BS水平线元素在预览下的展示做成垂直居中\r\n130.BS修复回车时把前面内容删除的问题\r\n131.BS处理删除可能会没有效果的问题\r\n132.BS表格存在不可删除元素时，不让删除表格行\r\n133.BS修复删除时会把光标定位到输入域外的问题\r\n134.BS修复可以删除设置为不可删除input的问题\r\n135.BS修复合并单元格带表达式的表格行加载显示不对的问题\r\n"
    },
    {
        "year": "",
        "time": "2月21日-4月25日",
        "version": "",
        "number": "",
        "pre": "1.回车时判断下拉是否正在显示\r\n2.BS前端修复保存子文档后台报错\r\n3.修改复制和下拉问题\r\n4.修改加粗（Ctrl+B），斜体（Ctrl+I）快捷键使用\r\n5.添加设置段落对齐方式，文档状态变为已修改状态【'alignleft', 'aligncenter', 'alignright', 'alignjustify'】\r\n6.添加设置段落行间距，文档状态变为已修改状态【'lineheight'】\r\n7.添加设置全局样式，文档状态变为已修改状态【'allfontsize', 'allfontfamily', 'alllineheight'】\r\n8.添加表格行上移的接口【ctl.DCExecuteCommand('table_rowmoveup', true, row)//row 表格行元素或者ID字符串；null表示当前表格行】\r\n9.添加表格行下移的接口【ctl.DCExecuteCommand('table_rowmovedown', true, row)//row 表格行元素或者ID字符串；null表示当前表格行】\r\n10.BS前端加载函数支持后台直接从WEBURL请求数据加载文档\r\n11.修改上下标问题\r\n12.修改只读下添加批注\r\n13.BS前端新增Get/SetDocumentInfos接口支持对文档本身设置是否显示页眉下边线\r\n14.BS修复横向扩充表格数据源提取时报错的问题\r\n15.BS优化获取输入域文本的处理逻辑补充带上标签和单位文本\r\n16.BS修复文档打开带计算公式的空输入域自动填0的问题\r\n17.添加悬浮图片设置\r\n18.修复点击输入域前后边框时chrome49中文输入有问题\r\n19.时间轴数据点新增函数添加覆盖模式支持覆盖先前时间重合的数据\r\n20.BS修复前端编辑器命令filesave返回值不正常的问题\r\n21.修复粘贴出来有注释的问题\r\n22.BS前端新增工具函数用于保存现场数\r\n23.修改上下键报错的问题\r\n24.修复InsertXmlById可能报错的问题\r\n25.修改上下键跳转的逻辑\r\n26.修复固定宽度输入域中输入中文的问题\r\n27.修改，光标在跳转后可能不再闪烁的问题\r\n28.修改tab页可能导致光标无法进入新页的问题\r\n29.对重置输入域边框的方法进行判断，保证边框位置的准确\r\n30.BS前端GetHtmlByFiles新增autoaddpageinfo参数支持合并时后台自动加页码\r\n31.BeginFormatBrush添加第二个参数来设置是否可以重复使用格式刷\r\n32.添加判断是否是格式刷模式的接口【isFormatBrushMode()】\r\n33.添加取消格式刷功能接口【CancelBrushFormat()】\r\n34.BS前端优化在多文档合并预览场景下页码页号的处理\r\n35.修改可能在输入域中文输入时报错\r\n36.BS改进downloadfile的后台保存RTF的处理逻辑\r\n37.修复获取不到病程记录中的单复选框内容的问题\r\n38.继续补充BS后台接口的释放文档对象操作\r\n39.BS前端绑定下拉列表输入域时将根据数据选定下拉项\r\n40.修改了高DPI的显示问题\r\n41.CS模拟器调整菜单项删除表格行的操作逻辑去除限制\r\n42.修改可能出现中文输入时光标跳转的问题\r\n43.BS修复前端P元素加样式保存后样式丢失的问题\r\n44.修复粘贴word多出空行问题\r\n45.BS增强了接口函数SaveDocumentToFile后台报错输出的处理机制\r\n46.修改enter按键顺序问题\r\n47.上传注册码获取失败时尝试二次获取\r\n48.上传当获取badsystem时的尝试二次获取\r\n49.修复表单模式下可以删除input问题\r\n50.BS前端修正空文字段落的判断逻辑并补充文档选项WordBreak的样式输出处理\r\n51.修复报错时导致正文元素取不到的报错问题\r\n52.BS打印类接口函数后台取消并发与授权限制\r\n53.BS前端LoadDocumentFromString2接口新增加载时提交痕迹功能\r\n54.BS前端新增GetElementXmlByID接口支持获取单个元素的XML\r\n55.BS前端修复预览时上下标字体的字号过大的问题\r\n56.BS版前端打印小程序打印文档始终维持已注册状态\r\n57.修复表单模式下，换行没有修改dc_innervalu\r\n58.修改粘贴操作\r\n59.修改图片编辑对话框的问题\r\n60.修复UseDCWriterMiniJS='false'报错问题\r\n61.输入域属性对话框添加列表格式化和列表项目分割字符两个选项\r\n62.BS调整MergeDocumentByFileContent前端处理逻辑\r\n63.GetElementProperties/SetElementProperties添加ListValueFormatString(列表格式化)和InnerItemSpliter(列表项目分割字符)两个属性获取和设置\r\n64.处理mootools和jquery冲突问题【先引用jquery，再?js=1,之后mootools】\r\n65.修复表单模式下只处理最外输入域的光标问题\r\n66.修复在输入域外面输入到内部问题\r\n67.CS端时间轴新增自定义数据点核实标志对齐与颜色\r\n68.开放时间轴数据点对象的TextColorString的COM接口\r\n69.BS调整手机设备下选框元素在预览端的选框图标\r\n70.修复IE上中文输入可能到背景文字中\r\n71.补充修复表格数据源回填丢回车的问题\r\n72.修复插入xml字符串时自定义属性断开问题\r\n73.修复普通空输入域无法换行问题\r\n74.BS修改ChangeDocumentSettings接口函数\r\n75.BS前端MergeDocument接口函数新增参数支持直接返回对比预览HTML\r\n76.修复拖拽框的双击事件可能丢失问\r\n77.修复医学表达式粘贴后或者撤销后事件丢失问题\r\n78.BS前端接口GetPDFByFiles请求头补充浏览器指纹信息\r\n79.BS前端新增LoadDocumentFromString2接口支持\r\n80.修改表格单元格上下键跳转\r\n81.添加插入表格时可以自定义表格边框的可见性和颜色\r\n82.BS修复当useclassattributes为true时表格颜色边框前端属性不正确的问题\r\n83.给ctl.DCExecuteCommand('elementproperties',true,{Element:'field1'})增加一个参数可以通过{Element：}来判断特定的输入域或单复选框\r\n84.修改输入域属性判断是否只读\r\n85.时间轴修复Y轴警戒线自定义颜色失效的问题\r\n86.BS修复printbyhtml打印时多一页的问题\r\n87.BS前端插入选框与图片的函数新增处理自定义属性参数\r\n88.修改上下标大小在保存后自动改变的问题\r\n89.给表格新增方法ctl.DCExecuteCommand('ShowCellId')显示表格单元格编号\r\n90.修改拖拽放入文本的方法\r\n91.CS编辑器修复开发者工具在对隐藏元素下方的元素做定位时报错的问题\r\n92.修复chrome88到108时表单模式下,无法选中的问题\r\n93.BS修复预览下单行整行文本带痕迹不输出痕迹提示的问题\r\n94.BS前端修复GetLastJumpPrintPosition记录成结束位置的问题\r\n95.修改在未设置FieldFocusedBackColorValue配置时，导致字符边框报错\r\n96.新增下载方法通过前端a标签下载\r\n97.BS修复保存PDF函数与下载PDF函数导出格式不一致的问题\r\n98.修改输入域宽度为负数且比单元格宽度大时的样式\r\n99.修改输入域上下键的没有边框时报错的问题\r\n100.修改在固定宽度的时候丢失宽度的问题\r\n101.改进藏文的支持\r\n102.防止表单模式下没有光标时无法触发EventChangeContent事件\r\n// @method 添加获得当前编辑器元素相关数据[getCurrentElementData()]// @return { ID: 元素的ID, ElementType: 元素的类型,Element:元素 }103.CS端编辑器新增PDFForeTextBlackColorOnce命令临时输出黑前景色PDF\r\n104.BS前端修复选框元素刚插入与刚打开时自定义选框图标不起作用的问题\r\n105.修改打印续打位置问题\r\n106.修改获得水印图片的功能\r\n107.BS前端补充FINDINDEX公式的支持\r\n108.修改可能导致ie报错的问题\r\n109.修改插入输入域后可能没有宽度的问题\r\n110.修改复制粘贴逻辑\r\n111.修改删除可能报错的问题\r\n112.修改打印的回调事件\r\n113.BS修复多个元素引用同一批注时元素批注显示样式出错的问题\r\n114.修改打印预览的回调位置,保证返回的html包含续打和选中打印\r\n115.BS修复GetHtmlByXMLString后台丢失页眉页脚的问题\r\n116.BS修复前端水平线颜色使用RGB数值赋值时保存颜色丢失的问题\r\n117.BS修复数字列表样式段落左侧缩进前端显示不正常的问题\r\n118.BS前端修复空白单元格内设置文字样式失效的问题\r\n119.修改复制粘贴方法\r\n120.BS前端修复CA签名函数后台相关文档选项不起作用的问题\r\n121.修改表单模式下的崩溃问题\r\n122.BS前端新增WEB选项HeaderFooterPrintVisibility支持设成Hidden后页眉页脚不打印但占位\r\n123.修改输入域换行导致的光标位置不准确的问题\r\n124.修改输入域在值为负的时存在边框位置不准确的问题\r\n125.修改输入域修改大小时进行span和input切换时导致的字体大小不一致的问题\r\n126.修改浏览器可能会崩溃的问题并对浏览器进行版本控制\r\n127.BS前端GetDocumentUserTrackInfos支持返回指定子文档痕迹列表\r\n128.修改初始化多一个边框导致报错的问题\r\n129.BS前端修复某些情况下设置行间距失效的问题\r\n"
    },
    {
        "year": "",
        "time": "1月1日-2月21日",
        "version": "",
        "number": "",
        "pre": "1.修改表单模式下可能的崩溃问题\r\n2.BS前端新增WEB选项HeaderFooterPrintVisibility支持设成Hidden后页眉页脚不打印但占位\r\n3.修改输入域换行可能导致的光标位置不准确的问题\r\n4.修改输入域在值为负的时可能存在边框位置不准确的问题\r\n5.修改输入域修改大小时进行span和input切换时导致的字体大小不一致的问题\r\n6.修改浏览器可能会崩溃的问题并对浏览器进行版本控制\r\n7.BS前端GetDocumentUserTrackInfos支持返回指定子文档痕迹列表\r\n8.修改初始化多一个边框导致报错的问题\r\n9.BS前端修复某些情况下设置行间距失效的问题\r\n10.修复输入域按下Enter可能报错问题\r\n11.BS端修复前端打印小程序开机初次启动显示未注册的问题\r\n12.BS前端InsertSubDocuments接口属性通用数新增AutoFitTableWdith自适应子文档表格列宽\r\n13.修改在表单模式下,当光标在p标签的最后时,delete的删除\r\n14.修改粘贴的操作对元素类型进行判断\r\n15.在IE上触发修改内容事件EventChangeContent\r\n16.修改当输入域存在tabindex的时候,shift+enter需要能生效来实现换行\r\n17.修改包括输入域背景颜色,左右键上下键\r\n18.BS修复输入域内包含数字列表样式段落时输出前端\r\n19.编辑器打印功能免费\r\n20.BS前端补充添加二维码元素的数据源绑定功能\r\n21.取消对整行空格的判断,可能会导致留痕不正确\r\n22.处理固定宽度输入域选中内容包括了后边框，多出边框内容的问题\r\n23.修复可以在输入域背景文字中输入内容的问题\r\n24.BS前端SetControlReadonly补充初始化所有子文档内元素的可编辑性\r\n25.防止在输入域背景文字中输入内容\r\n26.BS修复内容改变时外层容器输入域在数据源回写时数据提取错误的问题\r\n27.修改ie下对输入域内容进行删除时可能报错的问题\r\n28.BS端本地打印小程序的开机自启动功能移除对管理员权限的依赖\r\n29.修改赋值粘贴时的格式转换,直接将剪切板的数据返回\r\n30.修改左右键不移动到边框上和上下键移动顺序和tab\r\n31.修复表单模式下输入域中中文输入光标问题\r\n32.BS前端保存加载文档补充对元素内容保护属性\r\n33.修改当模拟光标移出可视区域时,会自定对可视区域进行偏移\r\n34.CS端InsertXML命令传入XML兼容开头带不可见字符防止报错\r\n35.修改输入域弹出框的位置,保证不被其他元素遮挡\r\n36.CS端MergeDocument编辑器命令新增通过参数对象进行文档对比功能\r\n37.修改表格行大小不能正常触发的问题\r\n38.修改之前的tabindex属性影响到的正常上下键操作\r\n39.修改输入域ctl.SetElementProperties()方法中的VisibleExpression和PropertyExpressions属性\r\n40.修改输入域对enter键的支持,能在输入域拥有tabindex属性的时候进行类似tab的快速跳转\r\n41.新增输入域设置tabindex属性后的上下键进行自定义切换的功能\r\n42.BS接口函数GetPrintPreviewHTMLByMixedFiles补充添加设置水印参数\r\n43.修改单复选框修改属性后报错的问题\r\n44.BS前端避免空段落内保存加载出现空格\r\n45.修改添加文本边框时背景颜色修改不正确的问题\r\n46.新增接口GetRootElementFromSelection,在不知道最外层包裹元素id的情况下获取当前选中元素的最外层包裹div\r\n47.BS前端ServerLog接口添加下载日志到本地的功能\r\n48.调整图标的透明色\r\n49.BS前端ServerLog接口添加上传日志单独分析的功能\r\n50.修复取消插入图片后无法插入内容的问题\r\n51.修复本地打开HTML的时候插入图片报错问题\r\n52.BS前端修复GetPrintPreviewHTML接口函数无法携带水印信息的问题\r\n53.修改单复选框设置属性左对齐取消后,修改tootip报错的问题\r\n54.新增XTextControlHostElement.VAlign属性\r\n55.重新修改光标定位,从window到编辑器包裹元素\r\n56.修改样式元素防止不被解析导致包裹整个body\r\n57.修改index.hmtl的样式引用,不使用本地链接\r\n58.BS前端修复SetElementProperties修改输入域只读属性失效的问题\r\n59.BS前端Table_WriteDataToTable命令新增TableRowExtendable参数支持写入数据时不扩充表格行\r\n60.修改页面的滚动事件,重新计算可视区域为编辑器最外层div\r\n61.BS后端修复上下标设置后预览下字体变化的问题\r\n62.修复分页预览模式时不进行新建文件【FileNew】\r\n63.CS编辑器防止多窗体环境内输入域下拉项打开后关闭窗体系统报错\r\n64.BS改善单元格内垂直居中排版的处理逻辑\r\n65.BS对已插入文档的饼图元素添加修改数据的功能\r\n66.BS文字元素追加输出padding样式属性辅助前端分析\r\n67.修改当输入域存在嵌套且id相同时可能会把内部输入域的边框属性格式化的问题\r\n68.BS前端插入子文档的接口函数允许文档XML传空字符串\r\n69.修复固定输入域代码边框问题\r\n70.修复输入域对于背景文字颜色的设置\r\n71.修改,在表格内三击再输入的时候或出现清空前一个单元格的行为\r\n72.修复输入域属性对话框的对齐方式问题\r\n73.修复输入域对边框的处理\r\n74.修改输入域去除元素宽度不生效的问题,ctl.SetElementproperties\r\n75.修改输入域后换行中文输入异常的问题\r\n76.修改表单模式下光标无法正常跳转,表格能正常选中的问题 \r\n77.BS修复选框设置样式保存失效的问题\r\n78.BS调整表达式引发的勾选框改变勾选行为的处理逻辑\r\n79.修改插入水平线时不好删除的问题\r\n80.修改输入域边框文本存在空格时会,光标自动定位到边框左右两边\r\n81.BS前端新增对Checked属性值表达式的支持\r\n82.拆分数值和时间弹窗到特定的文档并将编辑器丢失焦点时隐藏光标和下拉框\r\n83.修复输入域光标问题\r\n84.BS前端LoadPrintPreview预览函数支持添加水印信息\r\n85.修改在输入文本后因为重复绑定定时器导致光标显隐过快的问题\r\n86.新增日期时间输入域弹窗和中文输入时对textarea进行字体字号修改\r\n87.BS修复没有设置绑定路径的单选多选框在数据源回填时失效的问题\r\n88.修改复制输入域的背景颜色\r\n89.复制的时候添加上输入域的背景色\r\n90.更新在文本域中进行中文输入时的前端事件响应并返回文本\r\n91.BS修复合并多文档时后台报错的问题\r\n92.BS修复GetDocumentUserTrack后台报错的问题\r\n93.BS保存文档接口保存到PDF补充处理文档选项设置\r\n94.修改调用输入域属性对话框报错的问题\r\n95.修复输入内容出现在输入域外的问题\r\n96.BS前端新增ADDDAY/ADDHOUR/ADDMINUTE公式\r\n97.修改复制纯文本可能报错的问题\r\n98.修改输入域复制时可能被解析为纯文本的问题\r\n99.BS调整输入域边框颜色设置ARGB值的处理逻辑\r\n100.时间轴日期数据行新增空文档不显示的功能\r\n101.清除字体样式使用默认样式【DCExecuteCommand('removeformat', true, '')】\r\n"
    },
    {
        "year": "2022",
        "time": "11月30日-12月22日",
        "version": "",
        "number": "",
        "pre": "1.修改输入域在表格中因display不一致导致上下移动的问题\r\n2.修改在输入域有最小宽度且行高不为1时手动赋值行高为1的行为\r\n3.BS优化输入域输入时间样式字符串时的格式化逻辑\r\n4.修改时间输入域在失去焦点时对时间做判断\r\n5.规避输入域被删除时赋值报错问题【DCInputFieldManager.SetCurrentInputFieldValue】\r\n6.BS前端改进InsertXMLById清除样式的前端处理逻辑\r\n7.重写文本边框方法,ctl.DCExecuteCommand('Fontborder',true,null)\r\n8.修改getModified(true)\r\n9.修改WriterCommandModuleFormat.SetCss可能赋值为空的问题\r\n10.BS前端新增插入图片不保存图片数据进文档的功能\r\n11.处理表格数据源绑定导致输入域下拉列表事件丢失问题\r\n12.BS前端DCFormTransmission函数扩展解析表格成JSON对象的能力\r\n13.BS前端DCFormTransmission函数新增解析文档图片元素\r\n14.修复剪切内容的问题修复DCExecuteCommand('Cut',true,null)和ctrl+x不同问题修复剪切触发EventBeforeCopy事件问题\r\n15.修复获取选中内容错误问题\r\n16.修改批注文本弹窗样式\r\n17.BS后台MVC加载页面后强行追加调用全文档初始化的前端JS函数BSDCWRIT1382\r\n18.修改删除标签文本产生的问题\r\n19.修改未注册时随机修改文档内容\r\n20.修改了未注册时随机修改文档的功能\r\n21.修复粘贴时光标问题修改粘贴代码\r\n22.修改在浏览器缩放时,元素是否可滚动计算不准确\r\n23.GetAllCheckboxOrRadio添加第三个参数：specifyRootElement(指定父节点下查找所有单选框或者复选框)\r\n24.BS优化水平线元素在预览下的排版展示\r\n25.新增表格未选中一行时,删除提示框\r\n26.新增修改表格宽度的属性并修改合并单元格接口\r\n27.新增删除文档是判断是否将批注删除,如果删除批注元素,同时刷新批注列表\r\n28.新增重置标记,resetModified扩展参数'resetText'重置文本'reseltHtml'重置html'setModify将文档状态修改为已修改\r\n29.BS优化设置文字边框样式的处理逻辑\r\n30.修改复制外部文件时,会将文本内容清空的问题\r\n31.设置只读时不插入元素【ctl.SetChildElements等】修复元素可能插入到不可编辑区域的问题【ctl.SetChildElements】\r\n32.修复图片可能插入到不可编辑区域的问题【ctl.InsertImageByJsonText】\r\n33.新增属性borderVisible控制单独的输入域边框可见性,ctl.SetElementProperties(field,{BorderVisible:''Hidden'}),表示元素不可见,Hidden/Visible/Defalut可用参数\r\n34.修改BS本地打印后台处理的代码\r\n35.回退输入域有最小宽度时能enter回车的问题\r\n36.新增表格属性,能修改表格宽度ctl.SetTableAttribute(table,{width:xxx})\r\n37.插入元素后删除背景文本【SetChildElements】\r\n38.在光标处插入时，判断是否可以插入元素【InsertXmlString,InsertXmlBase64String】\r\n39.父元素是P标签，设置样式不设置P标签\r\n40.添加设置组合样式的接口【ctl.DCExecuteCommand('setcss',false,cssObj)】\r\n41.添加删除病程接口【ctl.deleteSubDoc(subdoc)】添加设置病程记录是否分页接口【ctl.subDocCrossPage(subdoc,isCross)】\r\n42.修复清除所有字体样式接口问题【DCExecuteCommand('removeformat',true,'')】\r\n43.修改delete出现公司名的问题\r\n44.添加获得当前光标处的病程记录接口[CurrentSubDoc()]\r\n45.修改调用ctl.ResetDocumentModified()报错\r\n46.删除console分页线添加当前是第几页\r\n47.BS修复前端样式设置后保存多一空行问题\r\n48.修复回车复制输入域问题\r\n49.修改跨病例复制不生效的问题\r\n50.BS前端掩盖表格行跨页只剩下一行高度时镜像内容出不来的问题\r\n51.新增表格上下键跳转,和输入域校验在只有时间控制时默认会带有最大值最小值影响最大最小时间判断的问题\r\n52.修改分页线对后台返回内容的处理\r\n53.BS修复writedatatotable绑空数据时单元格光标进不去的问题\r\n54.检测光标在div中时，把光标移动到P标签中\r\n55.修改oninput事件修改分页代码\r\n56.修改ctl.ResetDocumentModified()方法不能修改样式改变后的状态\r\n57.修改删除接口问题【DCDomTools.delectNode】\r\n58.修改DCInputFieldManager.SetInputAttribute()修改输入域属性方法中的单双击切换报错的问题\r\n59.优化复制粘贴时会出现元素嵌套导致保存时浏览器崩溃的问题\r\n60.插入内容发现空文本节点，删除文本节点\r\n61.BS修复只读模式下授权提示与JS版本提示框关闭不掉的问题\r\n62.修改格式刷不带背景颜色的问题ctl.BeginFormatBrush()\r\n63.BS编辑器调整前后端元素只读机制的处理逻辑\r\n64.修改表格cid显示不准确的问题\r\n65.BS前端WriteDataToTR支持对单元格内的输入域赋值\r\n66.修改输入域换行后调用对话框会导致换行符丢失的问题\r\n67.修改BSDCWRIT-1287当输入域有最小宽时enter换行不生效的问题\r\n68.修改在不可删除不可编辑输入域前换行会导致新的p元素的br标签不被删除的问题\r\n69.新增方法ctl.DCExecuteCommand('RequiredValidate',ele)只校验必填项,不做其他校验\r\n70.修复清除字号失效问题【DCExecuteCommand('Removefontsize',true,null)】\r\n71.修改批注修改弹窗位置\r\n72.修复删除线和下划线不能取消的问题【DCExecuteCommand('Strikethrough',false,'')，DCExecuteCommand('Underline',false,'')】\r\n73.通过属性来判断图片是否启用图片编辑【DCFileUploadManager.ShowImgEditorDialog】\r\n74.修改只在打印时触发清除空格的方法\r\n75.修改在一行中用p进行靠右排版时,清除p标签并修改为align=right\r\n76.修改复制粘贴问题\r\n77.BS前端新增LoadDocumentFromMixString支持提供分部XML合并后加载文档\r\n78.BS前端LoadDocumentFromBase64String增加第三个参数支持分部加载\r\n79.BS修复回车后插表格保存后多一空行的问题\r\n80.BS添加前端混合合并函数添加加载BASE64文档合并功能\r\n81.通过setelementproperties修改输入域属性后ctl.EventQueryListItems回调函数不生效的问题\r\n82.输入域勾选动态加载时而且没有值时清除缓存\r\n83.修复撤销导致分页线丢失问题\r\n84.修改bs插入表格获取的cid和cs插入表格获取的cid不同的问题\r\n85.BS前端修复下拉项输入域保存后空字符下拉项丢失的问题\r\n86.修改插入输入域超出表格单元格宽度后的问题\r\n87.BS调整GetPDFByFiles后台交互逻辑\r\n88.BS前端SaveDocumentToString新增AttachedCustomAttributes参数支持保存时夹带自定义属性\r\n89.修改文档键盘backspace报错\r\n90.新增label文本标签的获取和设置属性的方法通过Get/SetElementProperties()方法获取\r\n91.BS前端新增接口函数GetPrintPreviewHTMLByMixedFiles支持混合模式合并预览\r\n92.在使用编辑器内部paste方法粘贴时,EventBeforePaste回调的事件对象是一个类似ClipboardEvent的对象\r\n93.修改时间输入域写入非时间格式报错的问题\r\n94.修改backspace键在表单模式下使用默认操作，防止排版变化\r\n95.对表格中的input输入域删除时进行判断,当为单元格唯一标签时,会手动插入br标签\r\n96.修改插入输入域时的光标默认在输入域内,而不在输入域外\r\n97.修改输入域为input时backspace无法删除的问题\r\n98.修复imagedataembedinhtml='false'加载带图片的文档报错问题\r\n100.修改isHasTag未定义问题\r\n101.修复粘贴时清理空的span标签修复word内容粘贴不带样式问题\r\n102.修改撤销最后一次还是回退到body最开始\r\n103.BS时间轴删除后台并发控制且删除前端注册函数避免影响到同服务下的编辑器授权\r\n104.BS前端GetPDFByFiles参数新增forceblacktextcolor强制导出PDF字体为黑色\r\n105.修改RemoveFormat方法把清除所有字体类样式回退为只清除字体\r\n106.保存在合并单元格后,删除涉及合并单元格的行时,colspan的值未能更改造成表格不正常的问题\r\n107.修复删除报错问题\r\n108.修改在撤销到最后一次记录时光标不会回退到最上方\r\n109.修改输入域样式能在更改span->input元素标签时继承\r\n110.修改时间格式数据校验年月日时不准确的问题\r\n111.BS前端修复对比文档接口函数后台报错的问题\r\n112.BS前端表格数据源绑定支持从表格内输入域上存取值\r\n113.修改撤销问题\r\n114.稍微修改下复制粘贴问题\r\n115.修复新建文档问题【DCExecuteCommand('filenew')】\r\n116.修复前端求和问题\r\n117.BS前端修复段落下文字全选后设置删除线预览或保存样式丢失的问题\r\n118.将粘贴事件扩散到整个文档中，防止事件丢失\r\n119.BS前端修复标签元素保存后丢失加粗样式的问题\r\n120.BS补充修复表格行保存后变只读的问题\r\n121.修改批注元素被删除后,点击批注列表删除按钮死循环的问题\r\n122.修改删除输入域后插入数据会存在背景颜色\r\n123.BS前端修复getHtmlByXMLString接口函数报错问题\r\n124.添加在启用ondocumentkeydown时上下键不触发\r\n125.BS前端增强单元格表达式计算的处理逻辑\r\n126.BS端修复InsertTableRowToPageBottom接口函数后台处理逻辑错\r\n误127.修复图片不可编辑时不弹出图片编辑页面\r\n128.分页问题：文档初次加载，使用本来带的页码信息\r\n129.BS前端FileNew新建文档去除多余空格\r\n130.修改当br标签外部被嵌套元素时,无法正常删除br标签\r\n131.修改单复选框在useclassattribute不同时的展示效果\r\n"
    },
    {
        "year": "",
        "time": "10月31日",
        "version": "",
        "number": "",
        "pre": "1.修改拖入一个输入域，后面进行回车，然后删除，输入域就删除不了\r\n2.新增WebWriterControlEngine.SetCacheFileDirectory().\r\n3.调整注册码倒计时为15天开始。\r\n4.CS编辑器修复单选框组清除所有选框后回写数据源数据没有清空的问题\r\n5.修改新建文档多出个空格。\r\n6.新增新版的分割线属性对话框\r\n7.BS防止多层次表达式计算时频繁记录撤销导致堆栈溢出。\r\n8.改进WebWriterControlOptions.AutoFixFontName行为。\r\n9.BS前端SaveSubDocumentToString新增SmartMode属性改进前后端数据交互\r\n10.BS调整子文档保存加载的后台属性处理\r\n11.新增XTextElement.GetText()函数，能精细控制要输出的文本。\r\n12.修改单复选框required拼写问题\r\n13.修改不合并批注时,单击批注元素报错\r\n14.修改相关图片为相对路径\r\n15.BS编辑器新增SetControlReadonly支持前端设置或取消控件只读\r\n16.修改复选框绘制问题\r\n17.修改使用ctl.deleteComment()删除批注不生效的问题\r\n18.新增WebWriterControlOptions.AutoFixFontName属性。\r\n19.BS编辑器前端精细化对水平线元素的加载保存添加编辑操作\r\n20.修复打印问题【rootElement.PrintByHtml】\r\n21.在通过ctl.DCExecuteCommand('elementproperties', true,options)\r\n22.BS后台保存对旧版条形码自动替换成新版\r\n23.BS避免固定宽度的输入域预览时超过单元格边界\r\n24.修改使用ctl.DCExecuteCommand('DocumentValueValidate', false, null)会给必勾的单复选框加上样式提示\r\n25.修改插入单复选框时添加Required属性,ctl.DCExecuteCommand('insertcheckboxorradio, true, options)\r\n26.修改当文本位于元素内无法复制的问题\r\n27.CS下插入CA签名，保存在加载，CA签名无效\r\n28.CS下单选框在单元格里面显示不全\r\n29.修改暂时使用zoom缩放【InnerLoadPrintPreview】\r\n30.bs版输入域新增ViewEncryptType属性\r\n31.修改前端预览下GetDocumentUserTrackInfos报错\r\n32.BS前端SetElementProperties支持设置输入域加密属性\r\n33.修改单元格之间选中时的样式不在有蓝色的文本选中反馈\r\n34.表格中输入内容，按住shift+右键选中内容，在按左键无效\r\n35.CS下设置PreserveBackgroundTextWhenPrint文档选项，阅读模式下无效，输入域背景文字不会占位\r\n36.CS下使用旧版命令插入医学表达式，点击医学表达式，视图会乱跳，需要修复\r\n37.CS下，模板中输入域设置级联，条件符合，输入域显示时间很长。月经史行，输入域选择有，然后在选择已绝经，然后就很慢\r\n38.CS下页面设置上边距设置成0，然后导出为pdf，页眉的高度丢失\r\n39.BS编辑器前端页面设置接口函数新增设置装订线属性\r\n40.修改当单元格内输入域宽度大于单元格宽度时,显示不正确的问题\r\n41.BS编辑器前端新增Get/SetDocumentCustomAttributes支持编辑Document下的自定义属性\r\n42.BS前端DOM结构输出文档全局自定义属性\r\n43.BS前端AppendSubDocuments后台写死compressownerline=true\r\n44.调整BS生成PDF的报错\r\n45.修改ctl.DCExecuteCommand('DCInsertImage', true, null)在liunx下报跨域错误\r\n46.修改打印隐藏授权的逻辑\r\n47.修改使用ctl.AppendSubDocuments()时批注不会删除的问题\r\n48.修改BS前端合并文档写死compressownerline=true\r\n49.修改插入输入域表达式时缺少FormulaValue的问题\r\n50.修改网格线修改样式不生效的问题和全文只读时还能通过dom插入元素的问题\r\n51.bs前端printbyhtml函数单独添加隐藏授权码\r\n52.修复IE打印预览会触发onDocumentLoad问题（BSDCWRIT-1130）\r\n53.清除表格边框拖拽,宽度计算不正确的问题\r\n54.修改无序列表样式\r\n55.BS前端修复表格行固定行高不撑大时前端编辑端不输出行高信息的问题\r\n56.修改在选中编辑器外使ie报错的问题\r\n57.BS时间轴getpageimage后台取消工作强度避免前端刷新和打印操作额外占用\r\n58.BS编辑器前端修复插入二维码返回初始图片大小有问题\r\n59.修改大文档打印缓慢的问题\r\n60.BS前端SUM求和表达式规避JS底层浮点计算精度缺失的问题\r\n61.修改ctl.DCExecuteCommand('DCInsertImage', false,src)方法不支持https开头的地址问题\r\n62.修改自定义css样式处理代码\r\n63.修改layui.css影响编辑器全局样式的问题\r\n64.修改多次改变css样式对内存的影响\r\n65.修改表格对话框报错的问题\r\n66.修改了痕迹等级过高无法展示的问题。\r\n67.修改BS服务器内存增长的问题。\r\n68.修改了电子签名图片变黑的问题。\r\n69.修改本地使用插入按钮时获取不到服务地址的问题\r\n70.修复在输入域边框前后插入超链接时会影响超链接的dom结构\r\n71.修改输入域中键盘按下事件会触发两次的问题\r\n72.修改处理dchttpserver的base64转换逻辑\r\n73.修改处理缩放scale字体模糊的问题\r\n74.修改clt.DCExecuteCommand('lineheight'/'alllineheight')当没有第三个参数时返回当前段落的行高\r\n75.修改页眉页脚撤销操作不生效的问题\r\n76.修改插入批注报错问题\r\n77.修改ShowCellNoneBorder只对单元格生效\r\n78.清除layui.css对编辑器分割线的样式影响\r\n79.在通过弹窗插入按钮时,按钮打印宽高显示不正确的问题\r\n80.修复设置表格虚边框的问题【DCDomTools.SetElementBorder】\r\n81.BS前端优化transformusebase64前后端交互逻辑\r\n82.BS调整前端justify段落预览下对不齐的问题\r\n83.调整server日志统计内存的写法\r\n84.修复表单模式下全选输入域粘贴时无法覆盖问题\r\n85.修改当输入域所在段落为首行缩进时,清除缩进对输入域的影响\r\n"
    },
    {
        "year": "",
        "time": "9月30日",
        "version": "",
        "number": "",
        "pre": "1.BS修复输入域嵌套的情况下tab键无效问题\r\n2.BS修改在点击到编辑区域外后不会在自动定位到编辑区最上方\r\n3.BS修复下拉列表项高度问题【DCDomTools.GetSizeFromSpecifyFont】\r\n4.BS修改当文档控件上下都不全是,显示在下\r\n5.BS更改按钮对话框界面元素换行的问题\r\n6.BS清除iframe内引入jquery报错的问题\r\n7.BS编辑器日志新增统计电脑内存硬盘空间\r\n8.CS端时间轴新增SaveToPDFFile接口函数支持保存出图片PDF文件\r\n9.BS前端当前单选框如果为必勾项且当前选中则不允许取消选中\r\n10.BS修复加载文档指定其它格式时报错的问题\r\n11.BS前端编辑器改进输入域数据源绑定的处理逻辑新增支持BindingPathForText\r\n12.BS新增ctl.Options.CellLinkageCheckbox = true;如果当前的单元格中存在单复选框,第一个单复选框的选中状态会被改变\r\n13.修改CS单元格数值表达式无法运算的问题\r\n14.开发BS前端绘图功能\r\n15.CS修改下选择5页的内容，然后连续使用快捷键ctrl+c，编辑器会报复制操作错误，所请求剪切板操作失败\r\n16.CS修改下出现切字现象\r\n17.BS修改输入域属性新增级联表达式DefaultEventExpression\r\n18.BS修改getModified(true)在插入图片时会被检验为文档改变\r\n19.BS前端新增Deconstruct函数辅助释放内存\r\n20.BS调整表格分页算法\r\n21.BS编辑器前端新增使用表格行PrintCellBorder控制行内框线在打印时是否显示\r\n22.BS修复文字套圈样式解析时混乱的问题\r\n23.BS新增方法ctl.ReadOnlyMask()使页面新增遮罩层模仿只读效果\r\n24.BS新增插入图片错误提示,在调用ErrorCallBack回调函数时会新增提示\r\n25.BS版修改授权状态输出信息\r\n26.BS编辑器前端数据源绑定新增支持对条形码元素绑定\r\n27.BS修改按钮插入宽高问题\r\n28.BS修改使用getElementProperties时默认为字体加粗\r\n29.BS修改客户端绘图功能\r\n30.BS时间轴调整打印代码兼容chrome49浏览器\r\n31.BS前端SaveDocumentToSpecificXMLString函数输出包括页眉和页脚内的元素\r\n32.BS修复不设置FieldBorderColorValue时默认颜色为透明的问题\r\n33.BS编辑器前端补充使用文档选项FieldBorderColorValue控制前端输入域边框颜色\r\n34.BS修改拖拽进表格影响高度的问题\r\n35.BS修改打印预览时表格行固定行高无效的问题.调整处理字体文件的一个错误\r\n36.BS前端补充TableCellBorderVisibility选项的功能新增控制表格框线在编辑与预览下的显示和隐藏\r\n37.BS修改拖拽进表格时高度问题\r\n38.BS修改waitimg图片高度改变的问题\r\n39.BS修改复制粘贴格式不统一的问题\r\n40.BS修改数字校验前后带有空格校验通过问题\r\n41.BS前端打印函数新增InsertLastTableRowToPageBottom2参数支持高级扩展表格行到页尾功能\r\n42.BS编辑器前端编辑端不再处理段落元素的边框样式\r\n43.BS修改自定义样式id名修改\r\n44.BS修改违禁关键字校验时的选中和样式ctl.DCExecuteCommand45.BS修改使用InsertImageByJsonText插入图片对宽高进行重新赋值\r\n46.BS前端编辑器新增接口函数SaveDocumentToSpecificXMLString支持导出精简XML\r\n47.BS前端接口函数DCFormTransmission新增NestedMode参数支持输出嵌套节点\r\n48.BS优化属性对话框在chrome49下的显示效果\r\n49.BS修改输入域新增FontWeighth属性控制内容是否加粗\r\n50.BS编辑器修复页码元素字体样式前端保存时丢失的问题\r\n51.BS调整修复段落列表不为左对齐时表格下方元素排版\r\n52.BS修复下拉滚动问题\r\n53.BS编辑器新增处理输入域内容为空则隐藏的机制\r\n54.BS修改掩盖预览下段落右对齐时段落内表格之后的元素排版的问题\r\n55.BS修改输入域校验时纯文本的Text为String\r\n56.BS修改输入域在修改specifywidth时没有新增输入域的问题,和撤销时页面跳动的问题\r\n57.BS修改防止意外的dc_contentreadonly值被解析成只读\r\n58.时间轴修复Y轴异常数值区域为空时绘制出错问题\r\n59.时间轴修复字符型图例使用自定义字符设置不保存的问题\r\n60.BS修改当无诊断时去除换行\r\n61.BS修改更新ctl.GetDocumentParameterValue()返回输入域数据源时会把BindingPathForText\r\n62.BS修改单复选框数据源绑定时id相同不赋值的问题\r\n63.BS修改ValidateFieldUsingText对时间输入域的影响\r\n64.BS编辑器精细化预览端的文档总页数的计算逻辑\r\n65.BS编辑器前端新增兼容C端选框元素的勾选级联表达式功能\r\n66.BS修改选中表格行防止报错\r\n67.BS修改输入域只读时光标问题\r\n68.BS修改单复选框光标定位问题\r\n69.BS修改防止useclassattributes为true时段落样式丢失问题\r\n70.BS修复chrome49下字体缩小打印\r\n71.BS编辑器修复前端段落样式保存时丢失的问题\r\n72.BS前端调整InitJSUsingAJAX释放JS的方式\r\n73.BS新增违禁关键字校验\r\n74.BS添加Options.ShowPageLineForEdit属性来控制是否实时展示分页线\r\n75.BS编辑器新增接口函数GetElementsInnerXmlByIDs支持批量保存元素XML\r\n76.BS修复GetElementInnerXmlById导致源元素消失的问题\r\n"
    },
    {
        "year": "",
        "time": "8月31日",
        "version": "",
        "number": "",
        "pre": "1.调整BS实时分页\r\n2.CS编辑器修复输入域日期编辑控件设置日期相同时间不同时不赋值的问题\r\n3.新增在为输入域时使用GetElementInnerXmlById()不会解析其内部结构\r\n4.修改CS版粘贴HTML出现乱码的问题\r\n5.新增输入域分组互斥功能\r\n6.修复IE兼容性\r\n7.修改CS中BACKSPACE删除输入域的错误\r\n8.修改CS退格删除文档节的错误\r\n9.修改属性对话框背景色问题\r\n10.修改分页线\r\n11.修改BS解析CSS长度的错误\r\n12.BS前端加载保存输入域新增对下拉项分组互斥相关信息的解析\r\n13.改进对JSON文件格式的支持\r\n14.修改输入域属性对话框\r\n15.BS前端新增WEB选项InitJSUsingAJAX将所有初始化引用JS替换成AJAX请求可以附带自定义请求头\r\n16.修改属性对话框问题\r\n17.修改输入域属性方法setInputAttribute\r\n18.调整BS并发数计算\r\n19.修复IE兼容性\r\n20.BS前端修复打印函数LocalPrintDocument在预览界面下不生效的问题\r\n21.BS前端扩充SetElementProperties接口函数新增支持修改标签元素的属性\r\n22.BS修复SetFieldDropListItemByValue对多选框只选择一项失效的问题\r\n23.新增backspace清除br标签\r\n24.修改新增表格行等于单复选框的处理【WriterCommandModuleTable.editorCloneTableRow】\r\n25.修改单复选框属性的代码【DCInputFieldManager.SetCheckboxOrRadioTextAndValue】\r\n26.修改SetCheckboxOrRadioTextAndValue相关代码【DCInputFieldManager.SetCheckboxOrRadioTextAndValue】\r\n27.修改获取单复选框的代码【ctl.CurrentCheckboxOrRadio】\r\n28.修复页眉页脚提示框位置不对的问题\r\n29.BS前端修复了NAME不同但组内ID相同的多组选框选择某组中一项影响其它组的问题\r\n30.修复页眉页脚提示框位置不对的问题\r\n31.添加BS展示分页线接口ctl.autoPaging({isauto:true,intervalTime:5000})\r\n32.修改输入域默认选中和自定义属性为空\r\n33.调整授权文字位置处理逻辑\r\n34.修复页眉页脚提示框位置不对的问题\r\n35.修改单复选框批注问题\r\n36.插入输入域时使用对话框多出undefined\r\n37.修改边框为null\r\n38.BS前端新增WEB选项PageTitlePosition支持自定义授权文本显示角落位置\r\n39.修改病程加载过多时超出浏览器缓存报错\r\n40.TemplatePrintingWithCells添加第三个参数isStart,用来是否启动功能(默认开启，false为不启动)\r\n41.打印时添加下单元格打印需要的样式\r\n42.添加TemplatePrintingWithCells打印预览时可以使用\r\n43.BS后台新增按日统计最大并发数的接口\r\n44.当按下事件在右键菜单上触发时,不会清除选中的单元格\r\n45.调整BS版注册码锁定机制\r\n46.修改表格数据源绑定设置\r\n47.BS前端新增接口函数GetServerLog获取后台性能日志\r\n48.解决删除文本后换行\r\n49.修改输入域数据源绑定设置\r\n50.修改表格对话框和输入域对话框设置\r\n51.BS设置输入域属性新增设置数据源绑定“操作状态”属性\r\n52.给mousedown事件中选中的td的值加上限制\r\n53.新增方法ctl.DiagnosticTree()使插入的数据树状展示\r\n54.更改服务器日志分析报告.netCore和.net配置位置\r\n55.BS补充更多小数点位数校验判断逻辑\r\n56.BS前端新增WEB选项ValidateFieldUsingText支持输入域只校验text不管innervalue\r\n57.修改XTextImageElement新增ValueBinding属性\r\n58.BS新增处理表格数据源一次性绑定的机制\r\n59.解决ASP.NETCORE的偶发未注册问题\r\n60.BS修复批注新增删除编辑时报错问题\r\n61.调整数值表达式性能\r\n62.新增单元格属性\r\n63.新增表格所有单元格属性修改\r\n64.修改分页符的插入方式\r\n65.修改表达式运行速度\r\n66.BS编辑器新增处理输入域与多选框数据源只绑定一次的机制\r\n67.BS新增Get/SetElementValueBindingAttr脚手架函数辅助解析数据源绑定信息\r\n68.改进ASP.NETCORE版的多线程并发导致的问题\r\n69.调整BS版高并发下多线程卡死问题\r\n70.更新纵向表格拼接方法\r\n71.BS解决多选单选批注前端排序与显示的问题\r\n72.修改纵向表格数据源绑定背景色问题\r\n73.添加trycatch避免报错【DCDomTools.GetElementCustomAttributes】\r\n74.添加自定义表格的边框样式【GetPrintNowHTML|PrintPreviewByHtml|WriterCommandModuleFile.FilePrint】\r\n75.添加修改和获取BS自定义表格边框样式的接口CustomBorderOnlyInWeb\r\n76.加载文档时渲染自定义边框样式【DCWriterControllerEditor.InitFileContentDom】\r\n77.解决单选多选框带批注在前后台加载保存不丢失的问题\r\n78.修改纵向表格数据源返回不全的问题\r\n79.解决选框批注在前端显示的问题\r\n80.调整CORE版本的并发阻塞问题\r\n81.调整BS版中粗体字体的测量过程\r\n82.ctl.TableCurrentTrResult()修改表单模式下无法自动获取选中的表格\r\n83.CS端编辑器文档保存HTML时强制嵌入图片数据到HTML内\r\n84.修复日期问题，当前字符串可以转为时间格式时直接转【ValueFormater.strToDate】\r\n85.BS编辑器修复设置表格所属段落居中后在预览下失效的问题\r\n86.修改不可编辑输入域下拉赋值后背景颜色去不掉的问题【DCInputFieldManager.HandleInputFieldEvent】\r\n87.CS编辑器避开带列表格式化的有无列表打开报错的问题\r\n88.添加回调函数ErrorCallback,在请求报错时执行\r\n89.页眉插入表格后br标签无法删除问题\r\n90.修改单选框组设置流式排版删除报错\r\n91.调整电子签名中关于时间的误差\r\n92.修改多编辑器ctl获取不准确的问题\r\n93.修复下拉框滚动问题\r\n94.BS编辑器优化对旧版条形码元素的兼容性\r\n95.BS编辑器接口函数SaveDocumentToString新增ClearDataBindingContent参数支持返回清空数据源内容的文档\r\n96.ctl.SetTableRowAttribute()新增判断值为空时不赋值\r\n97.调用ctl.SetTableRowAttribute()同时删除单复选框只读\r\n98.修改ctl.SetElementProperties()在弹窗是修改不正确的问题\r\n99.新增表格行弹窗ctl.tableRowPopWindow()\r\n100.BS编辑器前端新增WEB选项BindingDataOnlyToBlankField支持只绑定空输入域\r\n101.修复固定宽度输入域不展示时不进行下列操作\r\n102.BS前端修复预览下按钮元素打印不可见但占位失效的问题\r\n103.ctl.TableCurrentTrResult()新增属性\r\n104.更新ctl.FocusTableRow()和ctl.TableCurrentTrResult()返回值\r\n105.BS编辑器新增前端web选项HeaderFooterReadonly实现轻量级的页眉页脚只读功能\r\n106.修改ctl.tableCurrentTrResult()返回的样式\r\n107.新增接口ctl.FocusTableRow(),ctl.TableCurrentTrResult()\r\n108.BS编辑器改进contentreadonly表达式兼容C端返回布尔值的写法\r\n109.修改两端对齐代码【DCExecuteCommand('alignJustify',false,'')】\r\n110.修改ctl.GetElementProperties()会获取上一个输入域的属性\r\n111.BS时间轴开放Y轴AlertLineColorValue属性\r\n112.时间轴Y轴对象新增AlertLineColor属性支持自定义警戒线颜色\r\n113.更新setChildElements()方法插入html后位置错乱的问题\r\n114.修改属性对话框下拉不会自动增加行的问题\r\n115.BS前端优化签名接口函数CASignature取消回调并直接加载签名后文档HTML\r\n116.BS编辑器前端新增SUM/MAX/MININGROUP公式支持对多选框进行求和极大极小限高的计算\r\n117.新增数值表达式函数MAXINGROUP,MININGROUP,SUMINGROUP\r\n118.添加属性可以插入标签文本时样式设置\r\n"
    },
    {
        "year": "",
        "time": "7月31日",
        "version": "",
        "number": "",
        "pre": "1.BS前端修复当PagePreviewHTML呈现模式下单元格缩小字体填充失效的问题\r\n2.BS前端调整SaveDocumentToBase64String函数将其功能归并到SaveDocumentToString\r\n3.修改getElementProperties获取背景颜色错位问题\r\n4.修改网格线默认值\r\n5.修改单元格弹窗在保存打开后的值获取问题\r\n6.selectionText()方法向老版本兼容\r\n7.修改setChildElement()方法,支持插入html\r\n9.修改保存再打开后网格线样式不能正确显示的问题\r\n10.修复绑定数据源报错问题\r\n11.BS前端新增编辑器选项CommentPrintVisible支持在预览模式下临时展示元素的批注信息\r\n12.打印预览时双页展示【rootElement.changePreviewTwoPageDisplay(isTwoPage),//isTwoPage 是否双页展示】\r\n13.BS编辑器改善表达式在IE浏览器下的兼容性\r\n14.修改使用SelectionText获取不带边框和隐藏元素的文本\r\n15.CS编辑器XML导出处理逻辑输出单选多选框元素\r\n16.设置单元格弹窗的修改 ctl.TableCellPopUpWindow()\r\n17.修改输入域对话框样式\r\n18.BS编辑器补充输出后台报错时的堆栈字符串\r\n19.BS编辑器前端新增GetXMLsByHTMLs接口用来批量保存文档\r\n20.修改BS版网格线输出。\r\n21.更新表格单元格统一设置网格线\r\n22.处理回车时会复制输入域的问题\r\n23.修改CS中属性列表中中文不显示的问题。新增XTextDocument.BodyGridLineOffset属性，用于调整文档网格线的显示位置。\r\n24.时间轴时间轴数据行对象新增PageTitleTexts属性支持不同页显示动态标题功能\r\n25.时间轴数据行对象新增PageTitleTexts属性支持不同页显示动态标题功能\r\n26.新增输入域违禁关键字,ctl.DCExecuteCommandDocumentVa27.处理空格不在文档内部输入时的问题\r\n28.BS修复加载文档体分部时可能会有的报错问题\r\n29.BS前端修复加载文档分部功能时丢失样式的问题\r\n30.给背景文本为空时加上占位字符，修复光标的问题【DCInputFieldManager.FixInputElementDom;DCInputFieldManager.FixSpanInputElementDomForDocumentLoad】\r\n31.处理下光标问题\r\n32.对单复选框添加批注进行修改,但前后端复选框批注样式不互通,等待修改\r\n33.禁止内部图片拖拽\r\n34.BS前端修复水平线元素在预览下出不来的问题\r\n35.修改属性对话框属性展示和单复选框修改字体大小的问题\r\n36.BS前端扩展SaveSubDocumentToString函数参数支持同时保存多个子文档\r\n37.修复设置行间距的问题(BSDCWRIT-842)[WriterCommandModuleFormat.LineHeight]\r\n38.解决单元格弹窗跨域问题\r\n39.BS前端接口函数WriteDataFromDataSourceToDocument新增指定更新某个子文档内数据源\r\n40.BS新增WEB选项AllowSmallPiecesWhenMergeDocument\r\n47.修改在编辑模式下复制不会展示为html\r\n42.解决打印预览下复制带html标签的问题\r\n43.更新输入域设置背景文本在没有数据的情况下不会动改变的问题: ctl.setElemeentProperties()\r\n44.修改setChildElements在表单模式下顺序错乱的问题:ctl.setChilsElements()\r\n45.修改BSDCWRIT-835问题.当表格删除一行后使用向下合并单元格报错 ctl.DCExecuteCommand('mergedown', false, null)\r\n46.BS前端数据源新增给表格元素绑定与提取图片的功能\r\n47.修改下划线问题【WriterCommandModuleFormat.Underline】\r\n48.BS前端数据源绑定新增给输入域元素绑定图片的功能\r\n49.修复修改样式时可能失去选中问题【WriterCommandModuleFormat.SetCss】\r\n50.修改valuebinding设置\r\n51.更新输入域数据源绑定修改方法\r\n52.BS编辑器修复前端图片无宽度高度时保存到后台宽高为零的问题\r\n53.新增属性属性bindingpathfortext\r\n54.新增节点ctl.Get/SetChildElements(ele)用来获取和设置目标元素内的子元素\r\n55.CS编辑器数值校验逻辑补充对逻辑删除元素的判断\r\n56.新增方法ctl.TableCellPopUpWindow()展示单元格属性对话框\r\n57.处理初始文档时调用堆栈严重的问题【DCWriterControllerEditor.InitFileContentDom】\r\n58.新增接口设置单元格数值表达式 ctl.Get/SetTableCellExpression() \r\n59.BS前端新增Get/SetTableCellGridLineInfo用于获取或设置单元格网格线\r\n60.处理时间格式的问题【ValueFormater.strToDate || ValueFormater.DateTimeFormater】\r\n"
    },
    {
        "year": "",
        "time": "6月30日",
        "version": "",
        "number": "",
        "pre": "1.取消使用属性对话框时会自动添加内容必填校验 \r\n2.修改复制单输入域变成纯文本的问题  \r\n3.修改MVC下文档元素自定义属性输出前端被截断的问题\r\n4.删除文本边框时保留自带的样式\r\n5.对setElementProperties方法的属性判断进行修改\r\n6.修改文本边框方法,不再选中整个输入域\r\n7.修改重装操作系统后注册码可能无效的问题\r\n8.CS编辑器新增EWELL编辑器命令生成XML导出格式\r\n9.添加单元格套打接口TemplatePrintingWithCells(doc, hiddenCellData)\r\n  单元格套打  param {*} doc 打印的document  param {*} hiddenCellData 需要隐藏的单元格数据   returns {*} CellData 打印过的单元格数据 \r\n10.修改本地打印问题\r\n11.添加快捷键在任何行都允许新增行的功能\r\n12.BS前端扩展DCFormTransmission接口函数新增输出元素自身XML\r\n13.修改属性对话框数据源名称显示不全\r\n14.修复删除不可删除输入域问题\r\n15.BS编辑器修复前端hr水平线被挤出p标签导致样式失效的问题\r\n16.修改加载图片元素时修复尺寸数据错误\r\n17.BS修复前端创建图片不设置STYLE保存后报错的问题\r\n18.修复单元格Tab切换失效问题\r\n19.增加判断解决tab切换报错\r\n20.对边框删除判断进行更改\r\n21.BS前端修复单元格水平垂直对齐设置保存后失效的问题 \r\n22.对文本添加边框方法进行从写,解决删除边框时分割输入域的现象\r\n23.BS前端修复容器内全选文本设置样式保存丢失的问题\r\n24修改设置了输入域文本颜色时的HTML解析功能\r\n25.BS调整前端输入域处理逻辑补充设置纯文本的颜色\r\n26.更新输入域光标跳行的chrome版本到91\r\n27.对chrome低版本进行适配\r\n28.修改表单模式下光标跳行的问题\r\n29.修复加载文档时批注报错的问题\r\n30.BS前端修复设置已存在的子文档只读控制失效的问题\r\n31.BS编辑器前端插入标签的函数参数新增PageTexts指定每一页的自定义文本\r\n32.BS修复多选框captionflowlayout失效的问题\r\n33.修改表格宽度的计算方法\r\n34.修改表格边框拖拽修改单元格宽度的方法,只修改拖动左右两个单元格的宽度.不再影响其他单元格,超出表格边框时会修改单元格宽度防止超出页面\r\n25.BS修复Readonly设置只读后输入域不输出自定义属性问题\r\n26.BS前端修复当全文档ReadOnly时输入域的读写状态错误问题\r\n27..BS编辑器改善对旧版医学表达式的兼容性\r\n28.添加GetElementTextByID第三个参数可以为function，用来过滤内容（returnfalse;为过滤）\r\n29.解决复制单输入域时粘贴格式不正确的问题\r\n30.BS编辑器前端添加对ContentReadonly属性值表达式的支持\r\n31.当GetAllInputFields添加第四个参数时,嵌套显示节点\r\n32.BS编辑器修复条形码刚插入不显示文本问题以及精细化宽高的后台处理 \r\n33.BS前端防止表达式输入中文引号导致前端报错\r\n"
    },
    {
        "year": "",
        "time": "5月31日",
        "version": "",
        "number": "",
        "pre": "1.更新在TidyHtmlForEdit下批注自定义属性格式问题\r\n2.BS编辑器前端打印预览接口新增MorePermissionMarkPieces参数显示碎片化的痕迹\r\n3.输入法完成后修复输入域样式 修正输入域元素DOM结构时还原原本光标位置（DCInputFieldManager.FixInputElementDom）\r\n4.BS编辑器前端修复INPUT输入域边框设置错误的问题\r\n5.修改加载图片的定位位置 \r\n6.更新输入域边框写法不需要再获取焦点就能更新:SetElementProperties()\r\n7.修改批注删除方法,防止一个元素有多个批注时批注定位不准确:deleteComment()\r\n8.BS编辑器修复前端dcinsertimage命令无法插入多张选中图片的问题\r\n9.BS编辑器前端批注新增设置自定义属性\r\n10.修改输入域,获取输入域方法修改:SetElementProperties,GetElementProperties\r\n11.BS编辑器前端插入批注新增设置批注ID\r\n12.新增鼠标在下拉框中时禁止外部滚动（DCDropdownControlManager.GetDropdownContainer）\r\n13.修改表格拖拽到文档外时,宽度不会生效\r\n14.BS修复四围边框空输入域内前端输入文字保存后重复设置文字边框的问题\r\n15.解决直接调用DCWriterControllerEditor.InsertHtmlAtCurentPosition() ,导致插入数据不准确\r\n16.修改getSelectionHtml方法获取的文本: SelectionHtml(),SelectionXml(),SelectionText() \r\n17.修改属性对话框\r\n18.新增添加批注超过文档是显示滚动条\r\n19.增加allTimeAfterCreate方法\r\n20.BS跨域请求头添加chrome新策略\r\n21.对批注选中节点进行合并,当开启设置MergeCommentNode时生效:NewComment(),getCommentList(),setCommentContent(),deleteComment()\r\n22.改进BS版PDF的输出。新增WriterControlOptions.ShowPageLineForEdit属性，能在编辑的时候不精确的模拟分页线\r\n23.BS调整表格table和子文档div元素不再单独输出而是正常在p标签下输出\r\n24.删除控制台打印\r\n25.BS保存文档纯文本防止背景文字不输出\r\n26.修改表格拖拽超出边界进行修改\r\n27.BS防止横向文档打印时上边缘突出页边距问题\r\n28.修改在不选中文档时调用selectionHtml方法报错的问题\r\n29.修复输入文字时输入域前边框删除问题\r\n30.BS修复文档只读控制错误的问题\r\n31.BS前端多选单选框的插入与属性修改接口新增处理captionflowlayout属性\r\n32.修改批注方法,在使用自定义接口时同步增减上标:deleteComment(),setCommentContent()\r\n"
    },
    {
        "year": "",
        "time": "4月30日",
        "version": "",
        "number": "",
        "pre": "1.修改TAB标签页编辑器焦点切换问题\r\n2.更新项目文件\r\n3.修改BS版文档网格线的问题\r\n4.BS扩展接口函数InputFieldUnderline添加取消设置下划线\r\n5.调整BS的网格线输出\r\n6.修改批注条件判断,防止特殊情况报错:ctl.NewComment()\r\n7.删除控制台打印\r\n8.修改属性对话框颜色修改实现:ElementProperties\r\n9.修改粘贴代码\r\n10.添加表单模式下可以撤销和重做\r\n11.修改剪切判断ctrl+x\r\n12.BS编辑器前端修复输入域contentreadonly与usereditable属性冲突的问题\r\n13.修改输入域若无属性会报错的问题:GetElementProperties\r\n14.修改设置输入域属性的方法:GetElementProperties/SetElementProperties\r\n15.改进BS中打印中网格线的输出\r\n16.发现浏览器在火狐下报错,已优化\r\n17.优化对原有文档就无批注作者的报错:NewComment\r\n18.修改ctrl+x的回调函数,优化第一次剪切不掉的问题\r\n19.BS改进文档末尾有跨页表格且设置网格线时预览下网格线的绘制逻辑\r\n20.改进BS版读取HTML的功能\r\n21.处理中文输入时不可删除元素可删除问题\r\n22.改进BS版性能\r\n23.对批注参数不全时进行默认值赋值:NewComment()\r\n24.更新属性对话框:GetInputAttribute,SetInputAttribute,ElementProperties\r\n25.添加WebServerLog中的授权工作量的记录。\r\n26.修复IE兼容性\r\n27.修复SetCheckboxOrRadioTextAndValue修改text问题\r\n28.修复属性对话框\r\n29.修改BS版插入表格行填充页面的功能。\r\n30.BS时间轴精细化LINUX下绘制竖形文本绘制高度的计算逻辑\r\n31.修改BS版空白输入域解析的问题\r\n32.SetCheckboxOrRadioTextAndValue新增修改单复选框id功能\r\n33.BS新增接口函数获取内置的更新日志\r\n34.修改上标的判断范围:ctl.NewComment()\r\n35.更新在获取纯文本时可能会报错\r\n36.BS新增使用attribute保存文档批注的背景色\r\n37.改进BS版性能\r\n38.当元素为空或者没有子节点时不进行获取输入域元素（innerGetAllInputFields）\r\n39.改进BS对比留痕\r\n40.对新增配置项TidyHtmlForEdit做兼容处理\r\n41.改进BS版内存占用\r\n42.修改LoadSubDocumentFromString病程ID不变\r\n43.修改CS版InsertElements命令，插入元素使用当前样式\r\n44.修复LINUX时间轴重叠字的问题\r\n45.新增方法moveCursorToElement将光标移动到当前文档体的结尾\r\n46.BS优化前端表格文档元素判断逻辑\r\n47.GetPrintNowHTML添加判断避免传入字符串不是正常html\r\n48.BS前端表格补充输出表格行和表格单元格的dctype属性方便前端判断\r\n49.在编辑器初始化出错后,优化img对象无法找到报错\r\n50.更新加载时间接口EventAfterWorkCompleted\r\n51.CS编辑器修复数值型输入域获取焦点激活时计算器弹出后数值不选中问题\r\n52.BS提升InsertTableRowToPageBottom接口函数的精准度\r\n53.BS前端接口InsertTableRowToPageBottom添加参数指定表格行复制模式\r\n54.修复插入表格操作导致输入域增多的问题\r\n55.时间轴新增竖形文本时分秒数字横向其它字符竖向的特殊排列功能\r\n56.新增WebWriterControlOptions.TidyHtmlForEdit属性，用于精简可编辑状态的HTML输出\r\n57.更新打印预览时服务器端响应时间\r\n58.部分ajax请求添加响应头text/plain\r\n59.处理中文输入时不可删除元素可删除问题\r\n60.drawstringformat添加新属性支持时间轴的竖形排版新机制\r\n61.BS修复文档比较痕迹不显示的问题\r\n62.BS前端LoadDocumentFromFile后台请求改为text/plain类型并调整后台\r\n63.BS修复插入条形码报错的问题\r\n64.BS编辑器新增SaveDocumentToStringAsync支持异步保存文档\r\n65.BS修复文档选项BothBlackWhenPrint某些情况下失效的问题\r\n66.新增在中文输入时对空格进行重新插入优化换行问题\r\n67.BS前端修复新增表格保存后表格高度变小的问题\r\n68.修改日期控件双击月份和年份下拉框关闭的问题\r\n69.修改日期控件双击月和年会给输入域附上一个当前日期的问题\r\n70.修改padding属性前面多一个空格的问题\r\n71.在读取Html元素的属性时去除Read_DCCustomAttributes的使用\r\n"
    },
    {
        "year": "",
        "time": "3月31日",
        "version": "",
        "number": "",
        "pre": "1.改进BS性能\r\n2.添加插入输入域时返回新插入输入域元素\r\n3.增加attibute修改属性值是对象的支持\r\n4.增加attrbutes对[{Name:'';Value:''}]的支持\r\n5.改进BS版HTML解析功能\r\n6.更改加载图片定位靠上的问题\r\n7.更改文本空格时,光标定位不准确的问题(目前存在问题)\r\n8.改进BS版处理HTML的性能\r\n9.解决双击日期控件空白区域附上当前时间问题\r\n10.解决日期控件双击异常问题\r\n11.禁止表单模式下删除最外输入域\r\n12.解决表单模式下使用格式刷后点击输入域外能获得焦点并输入的问题\r\n13.改进BS版生成HTML代码\r\n14.BS修复隐藏状态下绑定数值后显示排版错乱问题\r\n15.添加设置控制角标和元素背景颜色\r\n16.改进BS版HTML输出\r\n17.修改批注样式,修改获取单复选框属性\r\n18.BS编辑器前端新增Get/SetDocumentGlobalJavaScript接口函数用于获取或设置文档全局脚本\r\n19.BS前端接口函数ApplyDocumentOptions追加支持对文档全局脚本的修改\r\n20.修复输入域输入文字时光标问题\r\n21.滚动视图时禁止关闭下拉弹框\r\n22.BS编辑器前端InsertTableRowToPageBottom新增参数指定是否扩展到下一页并提升扩展的精准性\r\n23.修改时间插件初始显示为当前时间\r\n24.新增WebWriterControlServicePageExecuter.SetAllowSmallPiecesWhenMergeDocument()\r\n25.改进BS版缓存功能\r\n26.改进CORE版本的缓存问题\r\n27.判断复制内容是否是表格,如果是表格添加table节点包裹tr\r\n28.新增属性WaitingImg自定义加载图片\r\n29.BS编辑器前端新增InsertTableRowToPageBottom接口函数\r\n30.BS前端接口函数WriteDataToTr追加文档改变事件\r\n31.BS前端编辑器DCFORM补充输出输入域数据源绑定信息\r\n32.添加SetInputAttribute对小写属性的兼容\r\n33.对SetInputAttribute/getInputAttribute进行更改\r\n34.重写GetElementProperties和SetElementProperties方法\r\n35.改进BS版内存管理\r\n36.修改了网格线显示\r\n37.修复插入病程报错问题\r\n38.增加复选框属性获取\r\n39.更新获取元素属性是boolean值不正确的问题\r\n40.BS前端编辑器替换文档加载等待LOGO\r\n41.BS编辑器前端时间差计算公式添加参数支持保留小数位数\r\n42.修复InsertHtmlAfterElement插入元素时没有光标问题\r\n43.CS时间轴打印函数新增参数支持不弹窗打印\r\n44.更新接口,获取批注列表,删除批注,修改批注内容\r\n45.BS接口函数InsertXMLByID新增参数支持清除元素样式\r\n46.BS编辑器接口AppendSubDocuments函数参数新增支持绑定多个数据源\r\n"
    },
    {
        "year": "",
        "time": "2月28日",
        "version": "",
        "number": "",
        "pre": "1.调整留痕对比算法\r\n2.添加InsertXmlById第三个参数，插入是否是异步\r\n3.BS前端图片元素调整为当SRC提供BASE64图片数据时保存后台不压缩\r\n4.调整时间轴数据风格区横向网格线的绘制逻辑\r\n5.BS前端localprintdocument后台追加处理文档选项\r\n6.开放GetBufferedListItems函数的COM接口\r\n7.新增WriterControl.GetBufferedListItems()函数\r\n8.增加接口GetElementProperties获取输入域属性\r\n9.修改DCWriterControlEditor设置文档可拖拽\r\n10.开发并发数共享客户端程序\r\n11.输入域无背景文字时不生成空标签\r\n12.BS时间轴试图修复LINUX环境下AUTOHEIGHT数据行多行文本显示错误问题\r\n13.尝试修复LINUX下时间轴多行绘制问题\r\n14.修复插入表格报错问题\r\n15.试图调整时间轴LINUX下AUTOHEIGHT的属性\r\n16.修改一个序列化的问题\r\n17.解决Label标签导出为rtf丢失的问题\r\n18.处理插入表格报错问题\r\n19.时间轴调整多个起始时间关键字的日期排序逻辑\r\n20.BS编辑器保存文档时后台补充解析CaptionFlowLayout属性\r\n21.时间轴上下交替文本恢复upanddown属性手动强制指定其靠上或靠下显示\r\n22.BS编辑器前端动态下拉输入域在没有动态下拉项时调用其静态下拉项\r\n23.修改HandleEventChangeContent触发时机\r\n24.BS编辑器前端SaveDocumentToString函数在留痕模式下追加更新前端文档状态数据\r\n25.修改了GetWebServerInfoJSON()报错的问题\r\n26.修改servicepageurl赋值判断\r\n27.BS编辑器补充DCFORM前端输出多选单选框的所属容器信息\r\n"
    },
    {
        "year": "",
        "time": "1月31日",
        "version": "",
        "number": "",
        "pre": "1.BS编辑器前端接口函数ChangeDocumentSettings新增修改水印功能\r\n2.修复删除单复选框不彻底问题\r\n3.修复插入单复选框没有光标问题\r\n4.新增编辑器控件WriterControl.PageAlignment属性。改进打印操作\r\n5.调整打印功能\r\n6.BS编辑器前端接口函数GetDocumentPageSettings新增输出水印信息\r\n7.CS时间轴修复打印时数据点自身指定图例颜色失效问题\r\n8.改进弹出式列表关闭时焦点切换的问题\r\n9.改进对ServicePageUrl的自动设置\r\n10.改进并发数控制\r\n11.修复单复选框不可删除问题\r\n12.BS编辑器前端单选多选框在预览下也添加支持使用自定义图片的功能\r\n13.改进文档对比留痕\r\n14.BS编辑器新增四个WEB选项支持自定义单选多选元素的选框图标\r\n15.勾选框新增CaptionFlowLayou属性，用于文本参与流式排版\r\n16.BS编辑器修复前端ShowHeaderBottomLine效果不正确的问题\r\n17.添加对勾选框文本流式排版的功能\r\n18.BS前端修复编辑器DIV下设置文档选项失效的问题\r\n19.BS编辑器修复表达式计算时从带逻辑删除元素中提取元素值错误的问题\r\n20.BS编辑器前端改进ExecuteAllEffectExpressions接口函数的处理逻辑\r\n21.修改在输入域中双击不显示左键菜单\r\n22.改进文档对比留痕算法\r\n23.增加接口用来获取和修改输入域/单复选框的属性\r\n24.添加fileopen接口限制为只有xml文件可以打开，其他文件弹出提示\r\n25.添加插入特殊字符触发修改内容事件EventChangeContent\r\n26.BS修复带动态下拉或来源属性的输入域在输出前端并保存后丢失其静态下拉项数据的问题\r\n27.修改批注宽度,内容较多时换行\r\n28.添加批注点击内容对应批注闪烁,修改批注样式\r\n29.修复滚动问题\r\n30.BS前端添加响应web选项显示隐藏批注列表\r\n31.BS编辑器优化打开文档时批注显示按C端样式直接显示在右侧\r\n32.修改左键菜单样式\r\n33.获取数据源地址暂时区分大小写\r\n34.BS前端修复当多个子文档内包含同组名的选框组时勾选互相影响的问题\r\n35.新增输入域/单复选框插入,修改属性弹窗\r\n36.BS前端修正留痕开关判断的错误\r\n37.修复NewComment第二个参数无效的问题\r\n38.BS前端编辑器补充预览状态下的文档痕迹列表的后台输出\r\n39.新增批注新旧版切换NewComment(options,true),第二个参数为true时显示旧版,无值时显示新版\r\n"
    },
    {
        "year": "2021",
        "time": "12月31日",
        "version": "",
        "number": "",
        "pre": "1.BS前端DCFORM新增输出元素的所属容器信息\r\n2.修改滚动到浏览器窗口的可见区域代码\r\n3.调整并发数共享功能\r\n4.修改了PDF的问题\r\n5.时间轴Y轴与数据点新增图例偏移绘制的功能\r\n6.注释对之前批注的引用\r\n7.调整并发数共享\r\n8.发布分布式BS授权模块\r\n9.修复单复选框不可删除的一些问题\r\n10.CS编辑器修复一处表格内输入域影响自身所处表格可见性的表达式失效的问题\r\n11.修复上下标问题\r\n12.改进保存文档时纯空格文本丢失的问题\r\n13.开发集群授权控制\r\n14.BS前端修复文档中隐藏的单选复选框在前端错误显示出来的问题\r\n15.优化BS编辑器前端批注列表的展示逻辑\r\n16.GetElementText可以获取单复选框文本\r\n17.开发分布式授权管理\r\n18.父元素只读时加载单复选框禁止可以切换\r\n19.修复输入域光标位置\r\n20.添加执行EventAfterFieldContentEdit方法后重新校验输入域\r\n21.修复校验时间错误问题\r\n22.添加IE兼容性\r\n23.添加SetElementContentReadonly可以支持传入id字符串\r\n24.调整文档分页算法\r\n25.新增左键选中显示功能菜单\r\n26.调整CS端表达式计算逻辑允许引用纯数字ID的元素\r\n27.修复ondocumentkeydown重复执行问题\r\n28.修复按下v可以触发EventBeforeCopy的问题\r\n29.修复ondocumentkeydown重复执行问题\r\n30.修改Readonly秘Autozoom属性同时使用出现的问题\r\n31.去除minijs中的空行\r\n32.检测下载的js是否是最新的\r\n33.BS前端编辑器修复Readonly秘Autozoom属性不能同时使用的问题\r\n34.处理粘贴问题\r\n35.BS修复前端空白字符串加下划线预览下消失的问题\r\n36.BS前端设置?js=1同时释放编辑器和时间轴的JS\r\n37.BS修复单选多选框必勾项在name为空时判断错误的问题\r\n38.BS修复多选框元素js执行块在前端不执行的问题\r\n39.修改double.NaN在DELPHI中报错的问题\r\n40.优化分区图像元素对表达式的响应逻辑\r\n41.当前元素父元素只读禁止输入域弹出下拉框\r\n42.修复SetElementContentReadonly接口一些问题\r\n43.缩小字体仅保留小数点后两位\r\n44.调整B端时间轴绘制页码使用的字体设置\r\n45.BS修复前端带批注文字的样式输出不正常的问题\r\n46.修复单复选框删除问题\r\n47.BS时间轴修复一处前端多控件下潜在的引用错误\r\n48.修改ldtoken method的问题\r\n49.BS时间轴前端允许直接加载时间轴设置框架CONFIG字符串\r\n50.改进BS版并发数控制\r\n"
    },
    {
        "year": "",
        "time": "11月30日",
        "version": "",
        "number": "",
        "pre": "1.BS保存文档格式设置为text时补充保存文档的页眉页脚文本\r\n2.修复插入表格操作导致输入域增多的问题(BSDCWRIT-496)\r\n3.禁止页眉页脚删除最后一个p标签\r\n4.优化BS文档加载时对前端元素可编辑属性的判断\r\n5.添加获得当前单复选框接口(CurrentCheckboxOrRadio)\r\n6.修复BS加载全是逻辑删除元素且不显示删除痕迹时前端文档体内无光标的问题\r\n7.修复段落方式无法保存问题\r\n8.BS调整前端printvisibility表达式的处理逻辑以兼容C端表达式\r\n9.BS调整前端函数GetElementInnerXmlById使其可以直接接收HTML元素作为参数\r\n10.BS前端编辑器命令InsertPageInfo新增Caption参数指定首次显示的文本\r\n11.BS前端SaveSubDocumentToString函数参数新增SaveOriginHeaderFooter参数控制是否保存出原本的页眉页脚\r\n12.BS前端AppendSubDocuments的参数新增SaveOriginHeaderFooter控制是否保存子文档原本的页眉和页脚，带页眉页脚信息的子文档在单独保存时会保存出全部的内容\r\n13.修复粘贴问题\r\n14.BS前端GetElementTextByID接口函数扩充参数支持从指定子文档中获取\r\n15.调整B端GetDocumentUserTrackInfos的后端处理逻辑\r\n16.BS添加一个获取元素所属子文档的内部函数\r\n17.修复单复选框不支持delete不可删除的问题\r\n18.新增XTextContainerElement.TextInlucdeHidden属性。改进文档对比算法。\r\n19.调整时间轴允许单个Y轴设置多个空心覆盖目标Y轴\r\n20.添加输入域的dc_innertext赋值\r\n21.修复单复选框不支持backspace不可删除的问题\r\n22.修改滚动到浏览器窗口的可见区域代码\r\n23.BS前端修复接口函数CommitDocumentUserTrace后台逻辑错误问题\r\n24.调整BS预览HTML下跨页病程元素避免重复输出属性的处理逻辑\r\n25.BS预览HTML预处理逻辑新增处理WEB选项FieldBorderPrintVisibility属性\r\n26BS编辑器新增WEB选项CloneTableContentWithOnlyCleanField用于控制复制表格行时是否清除输入域以外的其它内容\r\n27.BS预览下补充输出病程子文档的dctype\r\n28.修复BS接口函数GetDocumentUserTrackInfos一处报错的问题\r\n29.BS前端新增ExecuteAllEffectExpressions接口函数用于手动执行所有文档表达式\r\n30.调整时间轴允许单挂阴影Y轴的“心率”数据点\r\n31.BS前端取消对单选多选元素的宽/高/是否多行的属性的解析\r\n32.CS编辑器表达式修改为优先影响同一子文档内的其它元素而不影响其它子文档\r\n33.CS时间轴设计器新增导出整个时间轴文档\r\n34.改进坐标获取接口\r\n35.改进文档对比留痕算法\r\n36.修复插入单选框组默认勾选无效问题\r\n37.开发分布式授权功能\r\n38.修复移动光标到图片后面无效的问题\r\n39.修复插入图片时光标位置不对的问题\r\n40.调整BS前端时间轴打印时授权信息的遮盖范围\r\n41.获取数据源地址不区分大小写\r\n42.处理获取单复选框数据源信息为vlaue值\r\n43.特殊处理单复选框数据源信息\r\n44.BS前端时间轴解决横向文档打印时布局不正常问题以及打印多一页的问题\r\n45.开放新属性到BS前端时间轴JSON模型\r\n46.改进CS编辑器弹出式窗口的控制\r\n"
    },
    {
        "year": "",
        "time": "10月31日",
        "version": "",
        "number": "",
        "pre": "1.调整ENSP空格在打印时的行为\r\n2.BS前端SaveDocumentToString与SaveDocumentToBase64String函数新增InsertLastTableRowToPageBottom参数支持保存时自动扩充表格行\r\n3.改进编辑器命令模块初始化\r\n4.BS前端LocalPrintDocument本地打印函数添加支持续打的参数\r\n5.BS后台打印WEB命令新增支持指定续打位置\r\n6.修复B/S端横向展示时间轴显示不完整的问题\r\n7.BS时间轴开放更多属性到前端JSON模型\r\n8.BS调整保存文档接口当保存PDF时新增对文档预处理符合预览样式\r\n9.修改文本高亮度显示的问题\r\n10.修复右键菜单在页面放大时显示不全的问题\r\n11.修复设置行的对齐方式接口\r\n12.改进单选框勾选行为\r\n13.改进区域选择打印功能\r\n14.MoveFocusHotKeys能叠加效果\r\n15.新增WriterControl.RecreateViewControlHandle()\r\n16.调整COM接口\r\n17.优化BS前端TEXTCOLOR属性值表达式对输入域的处理逻辑\r\n18.BS前端新增支持文档中元素的TextColor属性值表达式的功能\r\n19.新增XTextElement.LeftInOwnerPage/TopInOwnerPage\r\n20.BS前端新增接口函数GetElementCoordinateByID获取元素的布局坐标\r\n21.试图针对LINUX下时间轴竖形文本绘制失败的问题进行调整\r\n22.BS编辑器前端DCFORM新增对横向扩张列表格的前端数据回传处理逻辑\r\n23.修复插入条形码无法显示问题\r\n24.添加条形码文本方向枚举值判断\r\n25.添加DCFORM横向扩充列式表格的前端输出数据\r\n26.FocusAdjacent支持屏幕自动滚动到光标所在位置(AutoScrollToCaretWhenGotFocus = true)\r\n27.前端插入单复选框添加数据元信息\r\n28.修改单复选框绑定数据元功能\r\n29.修复时间轴默认刻度绘制错误\r\n30.改进时间轴在LINUX中的显示\r\n31.开放新属性到前端JSON时间轴模型\r\n32.改进在LINUX中的显示效果。\r\n"
    },
    {
        "year": "",
        "time": "9月30日",
        "version": "",
        "number": "",
        "pre": "1.BS调整后台痕迹处理逻辑\r\n2.BS前端优化SetFieldDropListItemByValue的处理逻辑\r\n3.添加当前位置输入内容是否加粗功能\r\n4.删除零宽度占位符\r\n5.上传代码调整\r\n6.调整标签元素连接字符串的处理逻辑\r\n7.修复getServerInfoJson报错问题\r\n8.B/S调整后台对比文档前获取痕迹数据的处理逻辑\r\n9.修复区域选择打印相关问题\r\n10.BS编辑器修复useclasssattribute为true后前端设置样式保存后台解析的一处错误\r\n11.BS前端扩充DCFORM功能新增对输入域元素的文本以及表格行数据的输出\r\n12.如果当前是标签文本并且是加粗、斜体、下划线，允许执行命令\r\n13.标签文本未完全选中,不修改样式\r\n14.修复取消加粗无效的问题\r\n15.改进ASP.NET字体处理\r\n16.BS修复时间轴数据网格内文本数据点字体字号设置失效的问题\r\n17.同步C端修改让时间轴数据行使用均匀分配的默认刻度来排版\r\n18.改进BS版留痕打印\r\n19.调整BS打印预览功能\r\n20.BS前端打印新增对文档选项BothBlackWhenPrint的处理\r\n21.添加修改单复选框的值的接口（SetCheckboxOrRadioTextAndValue）\r\n22.扩充DCFORM输出输入域元素的文本和值\r\n23.BS调整GetContentXML接口函数的逻辑\r\n24.BS时间轴后台服务添加判断并发的逻辑\r\n25.InsertSubDocuments，AppendSubDocuments添加回调函数，参数为插入的元素\r\n26.BS修复前端页码元素宽高在保存时解析错误的问题\r\n27.调整BS的PDF生成模式为慢速模式避免某些排版问题\r\n28.BS前端新增servicepage?js=1&nojq=1控制不加载内部的jquery库\r\n29.BS前端gethtmlbyfiles接口函数补充处理绑定数据源\r\n30.BS完成DCFormTransmission后端代码并调整DCFormDocument的解析逻辑\r\n31.完成BS前端新增接口函数DCFormTransmission的前端代码\r\n32.扩充BS前端时间轴编程模型\r\n33.jquery版本兼容\r\n34.新增WebWriterControlEngine.SetSourceCodeForJQuery(string src)\r\n35.BS前端扩充获取打印预览HTML相关接口新增支持打印前将表格扩充行至页尾的功能\r\n36.BS前端downloadfile新增指定文件名\r\n37.BS前端优化对图片删除线颜色的处理逻辑\r\n38.BS前端生成PDF使用文档选项指定样式\r\n39.补充修复BS前端页码元素保存到后台属性丢失问题\r\n40.修复BSDCWRIT-393\r\n41.修复limitedchars不可以支持上下左右移动的问题\r\n42.BS编辑器新增接口函数UpdateDocumentOptions用于更新文档状态\r\n"
    },
    {
        "year": "",
        "time": "8月31日",
        "version": "",
        "number": "",
        "pre": "1.调整数据源绑定功能\r\n2.B/S前端扩充编辑器命令InsertLabelElement的参数并新增GetLabelElementContactSettings与SetLabelElementContactSettings接口函数用于支持对标签元素的连接模式属性的修改\r\n3.B/S前端保存文档对特殊空格进行额外处理\r\n4.修复BSDCWRIT-369\r\n5.修改鼠标滚轮选择内容的功能\r\n6.BS预览HTML新增输出输入域的attributes属性\r\n7.B/S编辑器接口函数SetFieldDropListItemByValue新增选择多个下拉项的能力\r\n8.调整时间轴竖形文本的绘制坐标判断逻辑\r\n9.B/S编辑器前端新增接口函数SetFieldDropListItemByValue支持通过给值选中单选下拉项\r\n10.启动输入域hover功能\r\n11.开放新属性到BS时间轴前端模型\r\n12.BS前端修复当readonly为true时编辑界面不输出输入域标签文本和单位文本的问题\r\n13.BS前端修复当readonly为true时前端页眉页脚内的段落对齐样式打印预览丢失的问题\r\n14.修复上标，下标无法重置\r\n15.B/S前端时间轴开放刻度属性到前端JSON模型\r\n16.调整B端时间轴打印当前页的代码防止多出一页\r\n17.调整时间轴文本数据点的位置\r\n18.调整BS编辑器打印留痕的逻辑\r\n19.修复时间轴数据网格中文本数据点位置偏左字形被切的问题\r\n20.修复InitFileContentDom导致输入域的图片被清空的问题\r\n21.勉强完成前端dcform对后台文档中表格元素(扩充行)的数据回填功能\r\n22.添加删除批注接口：DeleteComment(element)【element:批注元素】\r\n23.添加获取批注内容或者修改批注内容接口：CommentOption(element,changeOption)【element:批注元素；changeOption:修改内容】\r\n24.添加属性Options.isActiveCurrentComment来控制当前批注点击是否弹出下拉框，默认为true弹出\r\n25.B/S时间轴新增支持网格数据点的线性X坐标\r\n42.CS时间轴新增支持网格数据点线性X坐标\r\n26.插入单复选框时注释添加点击事件\r\n27.添加输入域可以保存的隐藏标识\r\n28.重新编写单复选框绑定事件\r\n"
    },
    {
        "year": "",
        "time": "7月31日",
        "version": "",
        "number": "",
        "pre": "1.C/S端修复时间轴在真实打印机上打印时页面偏移问题\r\n2.B/S前端表格添加行或列后补充更新UEEditor底层状态信息\r\n3.修复GetPrintPreviewHTML判断是否横向问题\r\n4.B/S前端时间轴开放属性到前端编程模型\r\n5.B/S前端时间轴调整打印文档代码\r\n6.修复GetPrintPreviewHTML代码\r\n7.B/S前端插入输入域命令新增参数Border用于控制插入元素的四围边框\r\n8.B/S编辑器GetAllInputFields方法新增第三个参数指定查找元素的父节点\r\n9.B/S编辑器新增接口函数SetElementVisibility(element,visible)设置文档元素可见性\r\n10.B/S前端补充对页码元素的可见性的处理\r\n11.B/S编辑器新增接口函数GetElementCustomAttributes与SetElementCustomAttributes用于对文档元素的自定义属性以普通JSON对象的形式来存取\r\n12.B/S前端修复编辑器文档体的自定义属性在保存文档时丢失的问题\r\n13.B/S前端SaveDocumentToString接口函数新增SaveBase64String与SpecifySavePart参数\r\n14.B/S前端编辑器LoadDocumentFromString接口函数新增specifyLoadPart参数指定要加载的文档分部\r\n15.B/S前端编辑器新增SetElementContentLock接口函数用于前端指定元素的基于用户锁定属性\r\n16.修复Document.ContentStyles.Styles[xx].Index变动导致预览时签名失效问题\r\n17.修复C端设置时间校验MinValue设置为0时在B端无效的问题\r\n18.修复B/S单元格跨页镜像属性保存丢失的问题\r\n19.B/S编辑器新增接口函数SetElementBorder设置通用文档元素的边框\r\n20.优化对数值表达式的运算处理\r\n21.修复B/S编辑器病程不可编辑时不能选中问题\r\n22.调整B/S时间轴后台生成页面图片的代码\r\n23.优化分页算法\r\n24.优化文档对比算法\r\n25.B/S编辑器试图修复单元格内复制内容后粘贴出乱码的问题\r\n26.修复B/S编辑器复制表格行时单复选框id重复问题\r\n27.新增判断webp文件头的代码\r\n28.优化单元格分割线的绘制\r\n29.新增EventTabInsertRow事件来监听tab键新增表格行\r\n30.优化C/S时间轴打印多个不连续页面的处理逻辑代码\r\n31.B/S编辑器InsertSubDocuments接口函数添加DataBindingXML用于对子文档进行数据源绑定\r\n32.修复B/S编辑器删除空行时可能导致下一行的输入域变成纯文本的问题\r\n33.优化B/S时间轴打印接口函数PrintDocument新增打印多个任意页的能力\r\n34.新增B/S时间轴接口函数GetPrintPreviewHTML获取打印用的HTML\r\n35.优化B/S编辑器InsertImageByJsonText方法添加返回值，返回值为img元素组成的数组\r\n36.优化B/S编辑器接口函数SelectionXML()新增参数控制XML是否保留页眉页脚\r\n37.优化B/S编辑器下的命令DCExecuteCommand新增第三个参数为html中元素结构，来只校验传入元素的内部\r\n38.新增B/S编辑器接口函数LoadSubDocumentFromString用于单独加载某个子文档\r\n"
    },
    {
        "year": "",
        "time": "6月30日",
        "version": "",
        "number": "",
        "pre": "1.改进文档对比留痕算法\r\n2.改进IL加密器\r\n3.改进文档对比算法\r\n4.改进加密器\r\n5.改进文档对比留痕功能\r\n6.修改勾选框痕迹提示信息\r\n7.修改弹出窗口的行为\r\n8.修改BS中文档节痕迹显示\r\n9.修复固定宽度输入域一些问题\r\n10.修复一下backspace键后退问题\r\n11.更新内核DLL\r\n12.更新COM接口\r\n13.优化有无列表\r\n14.优化时间轴保存生成的XML内的属性输出\r\n15.新增dc_allowuserdeleterow为false时阻止表格删除行\r\n16.新增在传入的表格行节点上面插入新的表格行DCExecuteCommand('Table_InsertRowUp', true, tr)//tr 表格行dom\r\n17.新增在传入的单元格节点左侧插入新的表格列DCExecuteCommand('Table_InsertColumnLeft', false, td)//td 单元格dom\r\n18.解决null.match()\r\n19.解决表单模式下输入域获取焦点事件会触发2次问题\r\n20.B/S前端时间轴开放yaxis.ShadowName属性\r\n21.B/S前端修复当useclassattribute为true时前端insertxmlstring插入隐藏元素时隐藏属性失效问题\r\n22.B/S时间轴开放文本框的TextFontName、TextFontSize、ImageDataBase64String属性\r\n23.B/S时间轴开放TitleLineInfo.AutoHeight、SpecifyHeight到前端\r\n24.B/S前端插入输入域函数新增DynamicListItems参数用于设置动态下拉\r\n25.B/S前端处理预览异常问题\r\n26.B/S前端MVC添加对预览HTML的预处理修复编辑预览HTML对齐不一致问题\r\n27.B/S调整生成预览HTML的预处理代码并补充对MVC下预处理\r\n28.B/S编辑器新增SOLARTERM([field1])公式用于对给定日期计算节气\r\n29.B/S前端修复当子文档有痕迹时保存时丢失痕迹信息的问题\r\n30.B/S时间轴前端开放YAxis.SymbolSize与TitleColorValue属性\r\n31.B/S时间轴开放Config.SpecifyTitleHeight、TitleLineInfo.TickLineVisible、ValuePoint.TextAlign属性到前端\r\n32.B/S时间轴试图提升绘制图片的质量，此修改故意不同步到C/S端\r\n33.B/S前端修复带nativeimagedata属性的图片在保存时失去数据的问题\r\n34.B/S修复MVC下空格下加横线前端输出不正常的问题\r\n35.B/S修复某些情况下含签名的输入域预览下签名失效的问题\r\n36.B/S前端修复当表格或文档节所属段落不为左对齐且出现跨页时在预览下第二页重复输出DIV高度导致排版不正常的问题\r\n37.B/S前端扩展SetElementTextByID函数参数新增设置指定子文档内元素值的功能\r\n38.B/S编辑器新增CONCATENATE([field1],[field2],[field3],[field4])连接字符串公式\r\n39.B/S修复调用SetElementInnerValueString接口函数不触发表达式的问题\r\n40.B/S修复前端InsertXMLString后文档元素状态不正确的问题\r\n41.B/S前端修复InsertSubDocuments时给定Title参数输出不正确的问题\r\n42.B/S前端优化SaveSubDocumentToString函数对痕迹保存的处理\r\n43.B/S前端时间轴继续开放若干属性到JS对象模型\r\n44.C/S编辑器新增CONCATENATE([field1],[field2],[field3],[field4])连接字符串公式\r\n45.C/S编辑器新增SOLARTERM([field1])公式用于对给定日期计算节气\r\n46.C/S时间轴数据点对象新增TextAlign指定文本对齐方式\r\n47.开放属性到B/S时间轴前端\r\n48.限制dctable_AllContent表格中的单元格不被合并\r\n49.禁止打印预览时放大字体\r\n50.时间轴补充处理TitleLineInfo.TickLineVisible属性的代码\r\n51.试图修改图像编辑控件在显示分辨率缩放的情况下不正常的问题\r\n52.将keydown方法扩散到整个文档中\r\n53.时间轴数据行对象新增TickLineVisible支持隐藏刻度线功能TIMELINE564\r\n54.添加getModified(true)判断input元素是否被修改\r\n55.签名优化-隐藏签名图片\r\n56.合并单元格方法添加参数来进行指定单元格的合并"
    },
    {
        "year": "",
        "time": "5月31日",
        "version": "",
        "number": "",
        "pre": "1.改进字体文件处理\r\n2.改进EventAfterFieldContentEdit事件处理\r\n3.改进DCILDOM\r\n4.修复IE下下拉列表上下键盘无法选择问题\r\n5.修复点击固定宽度输入域光标不进入问题\r\n6.修复AppendSubDocuments代码问题\r\n7.修复自定义css样式不一样问题\r\n8.修复COM接口函数SaveDocumentsToPDF接收异常参数报错问题\r\n9.调整时间轴分页模式下的注册判断\r\n10.新增WebWriterControlEngine.StartLinuxMode()\r\n11.解决打印预览工具条导致打印预览高度问题\r\n12.B/S时间轴将授权信息隐藏在前端输出的图片中\r\n13.B/S前端时间轴补充输出文本框部件\r\n14.B/S前端避免当复制预览下HTML后在编辑下粘贴将每一个DIV都解析成段落的问题\r\n15.B/S前端修复当表格同时有单元格合并与隐藏列时保存文档出现问题\r\n16.B/S前端完善对饼图元素的加载与保存处理\r\n17.B/S前端修复表格列位于页面宽度之外时打印预览不输出单元格内文本的问题\r\n18.B/S前端预览HTML下对表格新增输出Attributes属性用于辅助前端护理记录单的特殊处理机制\r\n19.B/S前端防止输入域下拉项出现英文引号引发故障\r\n20.B/S前端新增接口函数SetTableColumnVisible用于设置表格列的可见性\r\n21.B/S前端修复留痕模式下打印文档是否打印痕迹设置不正常的问题\r\n22.B/S前端替换输入域下拉项文本中的英文逗号换成中文逗号临时处理在MVC下故障问题\r\n23.C/S端避免设置了Document.PageIndexfix后打印对话框报错的问题\r\n24.初步完成B/S前端直插饼图的功能\r\n25.添加InsertXmlString，InsertXmlBase64String回调函数\r\n26.补充代码修复\r\n27.暂时合并时间轴分页视图授权与时间轴视图授权，为应对TemperatureDocument._SupportTimeLineViewMode属性暂时失效的情况\r\n28.编辑模式和打印预览下 单选框排版优化\r\n29.添加区域选择打印功能（SetBoundsSelectionViewMode(value)是否启用区域选择打印模式）"
    },
    {
        "year": "",
        "time": "5月1日",
        "version": "",
        "number": "",
        "pre": "1.修改关闭下拉列表时是否将光标移到引发下拉列表的输入域修改为‘默认不移动’\r\n2.修复headerfootereditable为false后预览格式出错的问题\r\n3.修复chrome49的兼容性问题\r\n4.修复修改单复选框字体大小无法保存问题\r\n5.调整代码新增释放时间轴前端JS\r\n6.更新IL分析器\r\n7.更新CORE代码新增DCSoft.Writer.Controls.WebWriterControlServicePageExecuter.NoCookieMode\r\n8.解决前端加载属性:dc_attributes=[{Name:aaaa,Value:111}] \r\n9.B/S前端输入域元素新增输出下拉列表里的TEXT2属性\r\n10.B/S后端在前端设置readonly只读时仍然写入dcsave不影响前端保存\r\n11.B/S修复一处设置输出格式后日期编辑控件显示数据不对的问题\r\n12.B/S时间轴后台createpagebmp代码避开使用打印机功能\r\n13.B/S新版时间轴合并后台原有的刷新与获取图像模块功能\r\n14.B/S后端修复表达式对选框元素的id与name引用混乱的问题\r\n15.B/S前端时间轴完成将后台时间轴对象模型输出到前端的功能\r\n16.B/S时间轴采用和编辑器一致的方式释放前端JS\r\n17.B/S后端在设置SpecifyOrigin后过滤所有非法客户端请求\r\n18.B/S前端时间轴新增输出页面设置数据结构\r\n19.C/S编辑器文档表达式的作用目标元素优先从同一个子文档中查找且不影响子文档外的元素\r\n20.上传PROJ修改\r\n21.上传时间轴JS修改\r\n22.上传更新的生成器\r\n23.上传代码调整适应新的codegen\r\n24.上传代码调整\r\n25.上传项目文件\r\n26.上传调整代码试图避免LINUX下划不出字体的问题\r\n27.撤销上一步操作\r\n28.不能删除输入域的边框,移动插入点\r\n29.改善B/S编辑器时间轴的定时器追加销毁操作\r\n30.禁止在输入域前后边框中输入内容\r\n31.试图调整B/S后台时间轴使用的默认字体"
    },
    {
        "year": "",
        "time": "4月1日",
        "version": "",
        "number": "",
        "pre": "1.改进产品发布器对.NET CORE的支持\r\n2.改进产品发布工具\r\n3.修改位移打印功能\r\n4.修复GetInnerText获取错误问题\r\n5.修复在输入域移动光标时背景文本丢失问题\r\n6.修复获取绑定数据源信息出错问题\r\n7.修复测试发现的预览输入域宽度不对的问题\r\n8.修复ondocumentkeydown函数可以控制重写输入域中keydown操作\r\n9.修复二级菜单可自定义内容\r\n10.调整数据源绑定中解析绑定路径分隔符的处理逻辑\r\n11.调整B/S前端插入单选多选框的MultiLine属性的默认值\r\n12.调整输出dcsoft.fw项目的优先级\r\n13.新增 WebWriterControlServicePageExecuter.SpecifyOrigin\r\n14.新增WebWriterControlServicePageExecuter.EventBeforeExecuteCommand事件\r\n15.新增导出代码提示XML文件\r\n16.解决提示文本\r\n17.B/S前端编辑器模块内加入时间轴JS代码群\r\n18.B/S图片添加压缩模式属性输出\r\n19.B/S前端PrintDocument函数新增参数控制临时平移文档功能\r\n20.B/S前端修复输入域预览下空白占位问题\r\n21.B/S前端DCFORMS新增对输入域的数值表达式与可见性表达式属性值的输出\r\n22.B/S前端追加对启用了合并图片数据机制的图片元素的加载保存处理\r\n23.B/S前端修复当LogUserEditTrack为true时绑定表格行导致表格行减少保存时生成逻辑删除行后再次打开前端渲染效果不正常的问题\r\n24.B/S后端防止在一般命令的请求字符串中夹带脚本\r\n25.B/S前端DCFORM提交数据后台补充对元素可见性属性的更新操作\r\n26.B/S后端防范/ServicePage.aspx/'onclick='alert(1)'bad='这样的URL注入\r\n27.B/S前端编辑器模块添加时间轴前端JS代码群\r\n28.B/S后端所有异常输出信息文本全部转为BASE64避免前端恶意夹带脚本\r\n29.B/S前端扩展DCFORM新增输出输入域的是否多选属性\r\n30.C/S对添加了DCDROPDOWNSUM自定义属性的下拉输入域做下拉项求和操作\r\n31.上传更新的产品发布工具\r\n32.上传时间轴B/S迁移代码\r\n33.迁移B/S前端时间轴的15个API的后台处理代码合并到编辑器模块\r\n34.修正上传文档\r\n35.粘贴时清除隐藏元素\r\n36.开放若干COM接口\r\n37.添加EventBeforePaste返回noNeedBorder时粘贴清除输入域边框\r\n38.打印预览时输出元素的字体大小信息nowfontsize到前端\r\n39.添加设置文档的全局行高接口[DCExecuteCommand('allLineHeight', true, 2)]"
    },
    {
        "year": "",
        "time": "3月1日",
        "version": "",
        "number": "",
        "pre": "1.改进字符串常量处理\r\n2.改进IL修改器\r\n3.改进编译时代码生成器\r\n4.改进软件加密\r\n5.改进加载过程\r\n6.改进IL字符串处理\r\n7.改进发布工具\r\n8.改进软件产品化工作\r\n9.修复表格拖拽问题\r\n10.修复编辑器被隐藏时获取‘控件文档内容是否改变’不对问题\r\n11.调整B/S前端ChangeDocumentSettings全部参数统一使用毫米为单位\r\n12.调整代码试图适应.NETCORE环境\r\n13.调整B/S前端接口函数GetDocumentPageSettings的单位为毫米并掩盖转换不精确的问题\r\n14.调整日期格式化处理过程\r\n15.更新内核DLL\r\n16.更新字符串常量处理\r\n17.解决dcformhtmlwriter输出乱码问题\r\n18.B/S前端新增对输入域的最大录入长度与限制录入字符功能的支持\r\n19.B/S前端GetDocumentPageSettings追加Landscape属性\r\n20.B/S前端InsertSubDocuments添加TitleLevel指定导航信息并优化在预览模式下获取导航的处理逻辑\r\n21.B/S前端修复表格行可见性表达式处理错误\r\n22.B/S前端追加写入页眉页脚位置\r\n23.B/S前端优化对文档中表格数据源绑定信息元数据的提取\r\n24.添加WriteDataToTr（向表格行中写入数据）接口\r\n"
    },
    {
        "year": "",
        "time": "2月2日",
        "version": "",
        "number": "",
        "pre": "1.改进IL字符串处理\r\n2.改进混后的程序性能\r\n3.改进计算元素大小的代码\r\n4.改进WEB版对XSS漏洞的处理\r\n5.改进绘图性能\r\n6.改进文档绘制速度，改进WEB版前端打印功能\r\n7.改进字符串常量处理\r\n8.改进藏文的显示\r\n9.改进文档绘制性能，调整表格线条绘制\r\n10.改进BS版对手机端的支持\r\n11.改进程序集字符串常量查看器\r\n12.改进表格绘制速度\r\n13.改进WEB控件对手机端的支持\r\n14.改进WINFROM版的性能\r\n15.改进WEB版对JS XSS漏洞的处理\r\n16.改进字符串常量处理\r\n17.改进程序集字符串值分析器\r\n18.改进文档绘制性能\r\n19.改进WINFORM字符串常量分析器\r\n20.修改了BS版编辑器dcwres的XSS脚本安全漏洞\r\n21.修改表格边框的绘制\r\n22.修改程序集字符串值浏览器\r\n23.修改图片默认选中样式为透明\r\n24.修改藏文字符宽度计算\r\n25.修改WINFORM编辑器中零列表格导致的错误\r\n26.修改表格边框绘制不准确的问题\r\n27.修改ASP.NET WEB API中的报错\r\n28.修改表单模式下加载文档后光标位置不准确的问题\r\n29.修改表达式中表格排版不准确的问题\r\n30.修复B/S前端GetDocumentPageNum接口使其获取的分页数与打印预览保持一致\r\n31.修复表格拖拽问题\r\n32.修复编辑器被隐藏时获取‘控件文档内容是否改变’不对问题\r\n33.修复C/S分区图像区域背景样式填充不清楚的问题\r\n34.调整加载文档时的表达式执行\r\n35.调整表格线条绘制\r\n36.调整BS版中ENSP空格的处理\r\n37.调整输入域固定宽度为负数时的授权控制\r\n38.调整B/S前端输出表格行高的代码并兼顾IE下的问题\r\n39.调整字符串常量管理\r\n40.调整IE嵌控件时的一些绘图行为开发表单数据处理功能\r\n41.调整输入域指定宽度为负数时在打印预览中的行为\r\n42.调整字符串浏览器\r\n43.调整B/S函数FileNew对页眉页脚追加空段落\r\n44.调整图片资源管理\r\n45.优化B/S前端对插入病程记录的判断防止插到容器元素中\r\n46.新增 WebWriterControlOptinos.ResourceReferencePath 属性\r\n47.新增双击执行命令\r\n48.新增COM接口函数创建PageBorderBackgroundStyle对象\r\n49.开发表单元素DOM结构\r\n50.开发IL中字符串处理\r\n51.开发移动端呈现功能\r\n52.开发程序集字符串常量分析功能\r\n53.开发BS版表单提取功能\r\n54.解决自动缩放模式在谷歌浏览器下右键菜单位置异常问题\r\n55.解决FileNew需要光标在文档中才能执行的问题\r\n56.解决预览后 打印指定页\r\n57.B/S前端新增编辑器命令InsertLabelElement用于直接插入带导航信息的标签元素\r\n58.B/S前端WEBFORM新增处理TransformUseBase64属性的解析\r\n59.B/S前端新增编辑器命令InputFieldUnderLine用于直接给输入域设置下划线\r\n60.B/S改进输入域数据源绑定的前端解析输出\r\n61.B/S前端新增支持C端文档元素的打印可见性表达式的功能\r\n62.B/S前端插入标签的接口函数参数新增设置Attributes功能，并优化前端元素自定义Attributes的读写\r\n63.C/S时间轴页脚标题行添加对开始时间关键字的支持（原先只有页眉标题行）\r\n64.C/S分区图像元素新增自定义图像填充区域的功能\r\n65.C/S时间轴新增数据点值标记功能并添加异常区间标记颜色\r\n66.C/S时间轴DAYINDEX类型的数据行新增结束日期关键字支持\r\n67.C/S时间轴新增异常数值区域的画线样式\r\n68.补充修复B/S前端藏文排版不正常的问题\r\n69.DCExecuteCommand('allfontsize', true, )支持修改首页页眉页脚\r\n70.暂时掩盖B/S预览计算行高为负的情况\r\n71.打印时 单元格斜线丢失\r\n72.补充分区图像元素的属性并开放COM接口\r\n73.实现单选框有无列表\r\n74.开放分区图像文档元素的相关COM接口\r\n75.掩盖B/S前端巨量空格段落前端输出样式不对的问题\r\n"
    },
    {
        "year": "",
        "time": "1月4日",
        "version": "",
        "number": "",
        "pre": "1.改进控件加载速度\r\n2.改进XTextContainer.SearchString()\r\n3.改进WINFORM版编辑器运行时的性能\r\n4.改进WEB客户端打印功能\r\n5.改进勾选框导出PDF的行为\r\n6.改进控件加载性能\r\n7.改进图片显示\r\n8.改进复选框行为\r\n9.改进控件加载过程\r\n10.改进勾选框的显示和打印行为\r\n11.改进WEB注册码生成器\r\n12.改进自适应纸张大小的打印\r\n13.改进文档加载性能\r\n14.改进MaxTextLengthForPaste的功能\r\n15.修改插入列插入点重置的问题\r\n16.修改Tab键缩进段落的问题\r\n17.修改输入域固定宽度失效的问题\r\n18.修改SearchString的一个错误\r\n19.修改ie7下脚本报错问题\r\n20.修改FocusAdjacent无效问题\r\n21.修改下拉列表项提示文本\r\n22.修改基于指定页码的奇数偶数页打印\r\n23.修改段落列表样式错误，删除批注更新不及时的问题\r\n24.修改插入表格行导致光标位置复位的问题\r\n25.修改痕迹列表进行时间大小排序\r\n26.修改编辑器在非标准DPI的显示问题\r\n27.修复表单模式下粘贴会插入输入域背景文本问题\r\n28.修复B/S保存文档解析元素样式的一处错误\r\n29.修复B/S前端表格预览框线颜色不对的问题\r\n30.修复撤销重做时插入内容不保存过程问题\r\n31.修复一部分IE浏览器下文本输入域输入后撤销异常\r\n32.修复IE浏览器下文本输入域回车换行异常\r\n33.修复B/S前端SelectionText函数取HTML空格时出现乱码的问题\r\n34.修复C/S端合并上下文菜单的错误处理逻辑\r\n35.修复元素无法通过鼠标切换\r\n36.修复图片选中框和图片之间有偏差问题\r\n37.修复IE下粘贴光标位置问题\r\n38.修复B/S前端LocalPrintDocument函数在预览模式下调用不了的问题\r\n39.修复B/S保存带多倍行距段落时一处判断错误\r\n40.修复固定宽度输入域宽度变化问题\r\n41.修复BS版本时间控件yyyy年MM月dd日 HH时mm分ss秒格式，选择日期带秒，光标离开输入域秒为00的问题\r\n42.修复B/S前端表格单元格设置自身的行内容复制模式在前端失效的问题\r\n43.修复部分IE浏览器下文本输入域回车换行异常\r\n44.修复B/S前端若选中的文本位于统一样式的字符串内部时调用getSelectionHtml获取HTML丢失样式的问题\r\n45.调整C/S时间轴加载的代码允许保留XML属性中的单个空格\r\n46.调整COM接口\r\n47.调整表达式引擎\r\n48.调整JS处理\r\n49.调整绘制文字的过程\r\n50.调整度量转换功能\r\n51.调整打印代码结构\r\n52.调整代码修复B/S处于隐藏状态下的元素再次显示时表达式功能失效的问题\r\n53.调整刷新文档的性能\r\n54.调整C/S时间轴将UpAndDownTextType.ShowByTick的判断从绘制模块移动到布局模块\r\n55.调整PreviewUseAdvancedLayout的处理代码\r\n56.调整时间轴代码\r\n57.调整复选框的绘制\r\n58.优化B/S前端underline命令的处理逻辑\r\n59.优化B/S编辑器GetContentWindow的处理逻辑\r\n60.新增DCWriterLocalHttpServer.SetRegisterCode()\r\n61.新增DocumentComment.Visible属性\r\n62.新增LZWString功能\r\n63.新增DCSoft.DCWriterLocalHttpServer类型\r\n64.B/S前端SaveSubDocumentToString函数新增参数并添加对是否输出带格式与带痕迹的控制\r\n65.B/S前端数值格式化添加对0的支持\r\n66.B/S前端保存文档的接口函数新增参数指定是否要保存出不带痕迹的XML字符串\r\n67.B/S前端新增表格使用JSON对象数组将数据绑定到表格数据源动态扩充行的功能\r\n68.B/S前端InsertSubDocuments函数参数新增options.ShowMaskUI控制是否显示加载等待界面\r\n69.B/S前端InsertXMLString插入元素时覆盖当前选中的元素\r\n70.B/S前端新增表格使用数据源回写功能从带绑定信息的表格行中提取数据到JSON数组的功能\r\n71.B/S前端编辑器新增GetDocumentPageNum接口函数用于获取文档当前的总页数\r\n72.B/S前端新增SaveSubDocumentToBase64String用于将病程保存成BASE64字符串\r\n73.B/S前端保存文档函数调整函数参数并新增options.OutputFormatXML控制是否输出带格式的XML\r\n74.B/S端新增支持C端多选单选框元素使用数值表达式实现勾选联动的功能\r\n75.B/S前端新增WEB选项AJAXAsync，用于全局设置AJAX请求的同步异步属性\r\n76.B/S前端时间轴在前端刷新后新增document.TemperatureControl.NumOfPages属性用于获取文档总页数\r\n77.B/S前端接口函数LocalPrintDocument的参数新增OffsetX、OffsetY、AutoFitPageSize用于直接指定打印的偏移量以及是否适应打印机纸张\r\n78.C/S端时间轴废弃TitleLineInfo.UpAndDownText属性并新增TitleLineInfo.ForceUpWhenPageFirstPoint属性用于控制当每一页的首个带上下交替文本样式的数据点是否强制使用靠上样式\r\n79.C/S端时间轴文档鼠标点击事件参数添加对文本标签是否命中的判断\r\n80.放开C/S时间轴设计器XML查看控件的输入字符限制\r\n81.先上传表格根据属性绑定数据源的代码的框架部分\r\n82.COM下新增SetSpecifyPageIndexs方法\r\n83.改善B/S单页面下容纳多个前端时间轴控件的兼容性\r\n84.添加输入域获取焦点的回调函数EventFieldOnFocus\r\n85.试图修复DCHttpServer异步接收信息时停止服务操作报错的问题\r\n86.开放SelectContentByStartEndIndex的COM接口\r\n87.取消重复删除逻辑删除的内容时的提示行为\r\n88.增强WINFORM编辑器命令控制器的容错性\r\n89.处理IE下粘贴后光标有问题\r\n90.更改InnerValue赋值时间\r\n91.归并部分时间轴Y轴的属性\r\n92.开放DCSoft.DCWriterLocalHttpServer.DoWorkSynch()的混淆特性\r\n93.避开B/S前端自带STYLE(非外挂CLASS)的输入域内部选中文字执行underline命令后将输入域一分为三段的问题\r\n94.时间轴数据行支持显示带整数部分的分数\r\n"
    },
    {
        "year": "2020",
        "time": "12月4日",
        "version": "",
        "number": "",
        "pre": "1.改进勾选框的显示和打印行为\r\n2.改进WINFORM版性能\r\n3.改进文档排版算法\r\n4.改进WINFORM版编辑器在编辑时的性能\r\n5.改进WINFORM版编辑器运行时的性能\r\n6.改进文档加载速度调整文档行高度计算过程\r\n7.改进PDF的生成\r\n8.改进授权提示方式\r\n9.改进机器码生成\r\n10.改进大文档编辑时的性能\r\n11.改进脚本引擎\r\n12.改进WINFORM版大文档编辑时的性能\r\n13.改进绘图性能\r\n14.改进WINFORM版编辑时性能\r\n15.改进复选框行为\r\n16.改进文档加载速度\r\n17.改进文档排版性能\r\n18.改进机器码获取\r\n19.改进勾选框导出PDF的行为\r\n20.改进WINFORM版性能，修改表达式引擎的错误\r\n21.改进对LINUX的支持\r\n22.修改了表达式引擎的一个错误\r\n23.修改复选框打印不准确的问题\r\n24.修改数值表达式和脚本的错误\r\n25.修改主窗体 TopMost导致的弹出框被遮盖的问题\r\n26.修改DPI转换的一个问题\r\n27.修改追加病程记录段落样式发生改变的问题\r\n28.修改控件加载时的错误\r\n29.修改首页页眉页脚时分页算法\r\n30.修改Backspace删除时触发外部事件而导致的问题\r\n31.修复B/S表格边框线前后传输时的信息丢失故障并细化对边框线线型的处理\r\n32.修复B/S保存文档解析段落行距的错误\r\n33.修复B/S前端InsertSubDocuments对函数参数判断的错误\r\n34.修复一处影响B/S前端签名输入域预览失效的地方\r\n35.修复可能报错问题\r\n36.修复B/S前端下拉输入域带指定列表文本时保存丢失信息的问题\r\n37.修复B/S前端原本隐藏的输入域在保存文档时显示出来的问题BSDCWRIT35\r\n38.修复可能清空输入域输入的内容的问题\r\n39.修复B/S前端处理表格行对象的可见性表达式失效的问题\r\n40.修复right,3格式截断错误的问题\r\n41.修复C/S端ConvertFieldToContent处理内容为空的输入域报错的问题\r\n42.修复元素无法通过鼠标切换\r\n43.修复B/S前端合并打印时使用的页眉页脚主文档与合并的子文档相同时打印丢失页眉图片的问题\r\n44.修复B/S前端输入域TAB切换在69版火狐下出现的兼容性故障\r\n45.修复B/S保存带多倍行距段落时一处判断错误\r\n46.修复B/S前端表格单元格设置自身的行内容复制模式在前端失效的问题\r\n47.调整B/S行高由百分比格式转成数字格式\r\n48.调整度量转换功能\r\n49.调整代码结构\r\n50.调整表达式功能\r\n51.调整表达式引擎\r\n52.调整C/S端媒体播放器的代码的兼容性\r\n53.调整WEB版服务器端缓存文件目录的设置\r\n54.调整代码在获取合并子文档时将提供页眉页脚的主文档的文档体清空只用来容纳合并后的子文档内容\r\n55.调整WINFORM版编辑器运行时性能\r\n56.调整B/S后台输出文档痕迹列表信息的方式以及前端GetDocumentUserTrackInfos的代码，配平痕迹列表特征码，为定位痕迹列表项做准备\r\n57.调整分页算法\r\n58.调整文件加密状态\r\n59.调整对内部版本的限制\r\n60.调整复选框的绘制\r\n61.调整表达式引擎的一个错误\r\n62.调整机器码的读取，调整缓存文件目录设置\r\n63.更新文件加密状态\r\n64.更新项目文件\r\n65.更新调用接口\r\n66.更新DELPHI代码自动生成修改BS版的留痕行为\r\n67.更新代码文件\r\n68.优化文档排版算法\r\n69.新增 XTextContainerElement.SearchString()/XTextDocument.SetTextHighlight()\r\n70.新增SetDirectReadTTFFile命令\r\n71.新增DCSoft.DCWriterLocalHttpServer类型\r\n72.新增AxWriterControl.CreateContentBitmapBase64String()\r\n73.新增XTextDocument.SetTextHighlight()函数\r\n74.添加DCPrintPreviewControl.InvalidateLayout函数\r\n75.解决 简单级联 <> 转BS\r\n76.开发界面截图的功能\r\n77.同步代码设置\r\n78.设置表格的行高\r\n79.B/S前端新增FieldBorderPrintVisibility用于控制打印时输入域边框可见性\r\n80.打开本地文件时记录文件名\r\n81.C/S端编辑器命令ConvertFieldToContent新增命令参数指定要转换的特定输入域\r\n82.B/S前端InsertSubDocuments函数参数新增Usebase64指定是否传base64字符串\r\n83.开放.NETCORE下的dcwriterpublish.StartForWebSynch函数的混淆\r\n84.B/S前端新增WEB选项ShowJSVersionConflictTip用于控制是否直接显示JS版本冲突的提示\r\n85.B/S前端InsertSubDocuments函数新增ToolTip属性用于指定前端鼠标提示文本\r\n86.解决输入域宽度设置为负数，输入内容超过设置的宽度，在预览模式下自动撑大到输入内容长度\r\n87.暂时隐藏CORE版本里的CORE截止日期说明DIV\r\n88.B/S前端新增接口函数GetDocumentUserTrackInfos用于获取文档痕迹列表，由于前端痕迹无法保存故此函数暂时不起作用\r\n89.B/S前端新增SaveSubDocumentToBase64String用于将病程保存成BASE64字符串\r\n90.开放WEB下的StartForWeb函数\r\n91.B/S前端新增EventAfterInsertSubDocuments用于在插入病程记录后触发\r\n92.插入的表格没有继承全局样式问题\r\n93.B/S前端时间轴在前端刷新后新增document.TemperatureControl.NumOfPages属性用于获取文档总页数\r\n94.开发压缩DOM功能\r\n95.B/S前端封装dc_sessionid20201022的读写操作试图避免跨域的问题\r\n96.B/S调整后端输出多选框的代码避免前端单击元素造成选框图片被遮挡\r\n97.加载文档失败 索引超出范围\r\n"
    },
    {
        "year": "",
        "time": "11月3日",
        "version": "",
        "number": "",
        "pre": "1.改进BS版本地打印功能\r\n2.改进PDF不输出粗体的问题\r\n3.改进表达式引擎性能\r\n4.改进对SESSIONID的处理\r\n5.改进WINFORM版控件启动速度\r\n6.改进授权信息提示方式\r\n7.改进B/S前端新建文档的处理逻辑\r\n8.改进控件初始化性能\r\n9.改进字体管理\r\n10.改进字符大小计算功能\r\n11.改进B/S前端表单模式下对用户权限锁的处理逻辑\r\n12.改进BS版的并发数控制\r\n13.改进WEB版的SESSIONID的处理\r\n14.改进WINFORM版启动速度\r\n15.改进表达式引擎\r\n16.改进字符大小计算过程\r\n17.改进PDF的功能\r\n18.改进WINFORM版控件加载速度\r\n19.改进文字大小计算过程\r\n20.改进TTF文件的读取过程\r\n21.改进字体读取\r\n22.修改加密字符串的一个错误\r\n23.修改负固定宽度输入域的innervalue实时更新\r\n24.修改RunLocalWebServer错误\r\n25.修改计算字符大小的一个错误\r\n26.修改合并打印时图片显示不全的问题\r\n27.修复B/S前端在表单模式下带下拉弹框的输入域光标离开后样式不正常的问题\r\n28.修复时间轴小标题排版的错误\r\n29.修复负宽度输入域复制粘贴问题\r\n30.调整BS版的SessionID的跨域处理\r\n31.调整授权并发数处理\r\n32.调整LoadFrombase64String的接口处理\r\n33.调整字符尺寸计算\r\n34.调整字体文件处理\r\n35.调整字体处理代码\r\n36.调整TrueTypeFont字体文件的读取\r\n37.调整C/S端时间轴的提示文本显示逻辑\r\n38.调整.NET CORE的代码\r\n39.调整文字尺寸测量过程\r\n40.调整COMVISIBLE标记\r\n41.调整PDF代码结构\r\n42.调整对字符尺寸的计算过程\r\n43.调整C/S时间轴判断数据点是否超限的处理逻辑\r\n44.更新ASP.NET CORE的JS\r\n45.更新PDF的底层操作\r\n46.更新网络注册码生成器\r\n47.更新.NET CORE代码\r\n48.优化控件加载速度\r\n49.优化C/S端时间轴的数据点提示文本的显示逻辑\r\n50.新增了对模板工具里面搜索文档的功能\r\n51.新增了可以对模板工具进行搜索文档的功能\r\n52.新增电子签名可以设置签名图片大小功能\r\n53.开放ValuePoint.Verified属性的COM接口\r\n54.开放ValuePoint.UseAdvVerticalStyle属性的COM接口\r\n55.放开B/S前端输出表格内容时的css:overflow的hidden设置\r\n56.补充输出B/S前端的文档注释的背景色\r\n57.B/S前端新增fileopenbase64支持加载含base64内容的文件"
    },
    {
        "year": "",
        "time": "10月9日",
        "version": "",
        "number": "",
        "pre": "1.调整代码文件属性\r\n2.B/S前端时间轴新增LoadDocumentFromFrontFile支持前端直接选择文档加载的能力\r\n3.新增NewMain的ASP.NET CORE版本的项目文件\r\n4.修复换行回写问题\r\n5.调整XTextSectionElement的代码结构调整.NET CORE的项目文件\r\n6.更新DCWriterForASPNET的项目文件\r\n7.初步更新分区图像元素的改进代码\r\n8.调整爱尔眼科空格问题的修复代码\r\n9.掩盖某些文档在预览模式下右侧边缘内容切除的问题\r\n10.更新WinForm版项目文件\r\n11.改进发布工具\r\n12.调整XTextCheckBoxElementBase的代码结构，将部分代码移动到 NewMain中调整COM开放标记\r\n13.更新.NET CORE的代码\r\n14.调整B/S前端InsertXMLString函数去除DOM结构里的单独的段落元素\r\n15.改进SESSIONID不发送的问题\r\n16.改进项目文件\r\n17.优化护理记录单模板\r\n18.改进WEB性能\r\n19.更新内核DLL\r\n20.B/S前端InsertInputField命令新增参数InsertDirection与TargetID用于控制输入域插入的具体位置，需要测试\r\n21.修改了病程记录图片加载的问题，修改了输入域边界元素打印的问题\r\n22.上传DCWriterForASPNET项目文件\r\n23.优化B/S前端添加页码的JS代码添加各类参数选项\r\n24.改进WINFORM版代码结构，改进发布工具\r\n25.修复插入内容多一空行问题\r\n26.调整加密狗的代码\r\n27.改进程序资源管理\r\n28.修改DELPHI下设置标尺可见性的错误修改IE嵌入控件时光标乱跳的问题\r\n29.修改了一个JS输出的问题，修改了PDF的内存泄露\r\n30.修复在输入域中插入纯文本时的问题\r\n31.更新代码生成器\r\n32.添加表格的单元格支持html标签语言赋值\r\n33.同步更新上传内容\r\n34.改进文档排版性能\r\n35.添加数据源绑定时Text的绑定路径(仅适用于输入域元素)\r\n36.处理DCWRITER3504原本隐藏的元素预览时错误显示出来的问题\r\n37.改进JSON的支持\r\n38.改善B/S前端用户锁权限针对INPUT型输入域的处理\r\n39.调整B/S前端单选多选框的元素输出方式避开冲突\r\n40.调整PDF代码结构\r\n41.改进B/S打印预览时避免重复输出输入域最小宽度的处理逻辑\r\n42.B/S前端时间轴接口函数AddValuePints添加数据点的LanternValue属性的支持\r\n43.上传文件窗口设置默认字体大小\r\n44.修改COM接口的代码，改变COM接口的命名空间比如将DCSoft.Writer.Dom.IXTextElement改为DCSoft.ComInterfaces.IXTextElement用于避免一些IDE自动弹出类型名称列表而导致从代码拼写错误同时更新开发者工具集\r\n45.修复标签文本修改内容无法保存问题\r\n46.改进C/S时间轴数据点覆盖时的鼠标悬浮提示文字\r\n47.改进表格Visible=false时在WEB编辑器中解析和保存的行为\r\n48.修复单复选框无法删除完全的问题\r\n49.解决固定宽度输入域输入中文字符问题\r\n50.修复文档打印预览多空格问题与输入域错误隐藏问题\r\n51.日期数字选择框弹出框与手机输入法冲突问题\r\n52.改进开发者工具\r\n53.修改内容中控件中文档视图不更新的问题\r\n54.新增DocumentViewOptions.FieldBorderVisibility属性\r\n55.改进了读取HTML样式的功能\r\n56.SelectionHtml方法添加参数来判断是否清理HTML的DOM（true:不清理；false或者为空:清理）\r\n57.修改粘贴代码\r\n58.调整C/S版代码结构\r\n59.调整了WEB并发数的判断\r\n60.修改数据源绑定错误问题\r\n61.修复B/S前端表格行在单元格网格线且发生跨页的时候绘制错误的问题\r\n62.改进HTML输出\r\n63.调整可以在续打时手工双面打印\r\n64.更新.NET CORE的项目文件\r\n65.修复B/S前端输入域时间校验结果文字符串时间不对的问题\r\n66.修改BS版编辑器处于编辑模式下页码不正确的问题\r\n67.修复B/S前端InsertSubDocuments接口函数设置Attributes后台解析不正确的问题\r\n68.修复插入内容错误问题\r\n69.修改了BS中空白行在打印预览中很矮的问题\r\n70.开发软件发布器程序\r\n71.更新项目文件\r\n72.初步完成B/S前端接口函数LocalPrintDocuments的功能\r\n73.改进WEB版编辑器解析HTML的功能\r\n74.修复B/S预览模式下呈现表格文档报错的问题\r\n75.修改WEB中cntainer.Text无法修改的问题\r\n76.改进WEB版代码\r\n77.修改电子签名\r\n78.修复病程不可编辑时不能选中问题\r\n79.调整项目文件结构\r\n80.B/S前端新增AppendSubDocuments函数用于在文档末尾追加病程记录\r\n81.调整代码混淆标记\r\n82.修复数字小键盘可能失效问题\r\n83.改进文档排版算法的性能\r\n84.修复表单模式粘贴问题\r\n85.修改了WPF下无法弹窗的问题\r\n86.修复C/S端自定义右键菜单不能添加分隔符的问题\r\n87.改进排版算法\r\n88.改进代码帮助器\r\n89.上传DCWriterForASPNETCore的项目文件\r\n90.修复报错问题\r\n91.添加固定宽度输入域禁止shift+enter换行\r\n92.修复B/S表格单元格上下带颜色框线在遇到合并单元格时输出不正确的问题\r\n93.修改了加载病程记录中签名图片丢失的问题\r\n94.更新文件属性\r\n95.上传DCWriterForWinForm项目文件\r\n96.改进注册码的处理\r\n97.调整代码结构\r\n98.改进WEB版性能\r\n99.改进电子签名操作\r\n100.更新DCWriterForASPNETCore项目文件\r\n101.改进PDF的功能\r\n102.调整字符串值代码结构\r\n103.修改DCWRITER3505,打印时最后一页出现内容残缺\r\n104.调整项目文件\r\n105.掩盖B/S前端选项瞎填在后台解析报错的问题\r\n106.调整内核代码结构\r\n107.调整.NET CORE的项目文件\r\n108.修复C端时间轴数据点重叠时第一个数据点使用自定义图例则不触发重叠绘制事件的问题\r\n109.上传JS聚合文件\r\n110.B/S前端时间轴新增ClearData与SaveDocumentConfigXmlToFrontEndString接口函数\r\n111.改进并发数控制\r\n112.修复粘贴时可能删除多余元素问题\r\n113.改进字符串加密\r\n114.掩盖B/S前端表格单元格隐藏右格或下格的框线颜色的问题\r\n115.调整ASP.NETCORE代码结构\r\n116.更新.NET CORE项目文件\r\n117.改进json和二进制序列化功能\r\n118.调整分区图像元素的区域对象使用XBrushStyle来提供每个区域各自的画刷\r\n119.调整注册码生成器\r\n120.添加ComConvertToXTextNewBarcodeElement、ComConvertToXTextTDBarcodeElement的COM接口\r\n121.新增AxWriterPrintPreviewControl.PrintDocument函数的COM接口\r\n122.调整了一些字符串常量处理\r\n123.改进代码结构\r\n124.修复B/S前端设置页眉页脚只读的时候输入域预览时固定宽度丢失的问题\r\n125.上传项目文件\r\n126.改进文档元素Text,OuterText的功能\r\n127.改进注册码读取器\r\n128.添加Table_WriteDataToTable方法可以传入html字符串\r\n129.改进二进制序列化功能\r\n130.掩盖B/S前端时间输入域使用特殊格式化字符串后功能不正常的问题\r\n131.修改WPS中粘贴问题\r\n132.调整B/S前端LocalPrintDocument函数使其支持传入单个XML文档字符串打印\r\n133.更新专用版的项目文件\r\n134.更新代码帮助器"
    },
    {
        "year": "",
        "time": "8月31日",
        "version": "",
        "number": "",
        "pre": "1.调整网格线绘制\r\n2.改进XML序列化行为\r\n3.调整JSON代码\r\n4.改进编辑器定时器导致的内存泄漏\r\n5.改进授权分发器\r\n6.添加WEB后台命令WC_DCWriterFrontEndPrint\r\n7.开发本地WEB服务器功能\r\n8.改进中标模拟器，改进JSON操作\r\n9.修复剪切无效问题\r\n10.更新项目文件\r\n11.修改手机端样式\r\n12.添加对ASP.NET CORE的支持\r\n13.改善B/S前端创建指定宽度的输入域的保存处理逻辑\r\n14.上传printdocument2的参数调整\r\n15.把月经史公式中天数，周数带上了单位天\r\n16.调整配置文件\r\n17.调整B/S前端本地服务器设置开机自动启动的逻辑\r\n18.改进BeginInvoke和Invoke的调用判断\r\n19.改进XML序列化代码\r\n20.更新内核DLL\r\n21.调整文件属性\r\n22.上传前端测试函数\r\n23.删除多余代码\r\n24.调整前端引用dc_full_mini.js资源文件时的输出内容类型\r\n25.改进本地WEB服务器\r\n26.修复时间输入域输出格式无效问题\r\n27.把脚本按钮里面的字体微软雅黑改成宋体\r\n28.修改粘贴时出现的问题\r\n29.改进授权分发功能\r\n30.临时保存太极的保存导出诊断代码\r\n31.调整授权代码\r\n32.开发打印服务器\r\n33.改进分页算法改进文档批注的问题修改打印当前页的一个问题\r\n34.改进授权分发改进客户端WEB服务器\r\n35.调整授权分发功能\r\n36.修改代码顺序\r\n37.改进前端打印功能\r\n38.B/S前端保存文档若文档体为空添加前端信息警告\r\n39.修改bs插入的固定宽度输入域在前端的操作\r\n40.修改重新加载文档导致的错误\r\n41.改进编辑器扩展功能条\r\n42.为本地WEB服务器添加开机启动的功能设置\r\n43.修复B/S前端初始状态为隐藏的表格元素被可见性表达式设置为可见时无效的问题\r\n44.调整表格边框线绘制过程\r\n45.改进XML序列化过程\r\n46.修复ie8下Array.isArray报错问题\r\n47.改进授权控制\r\n48.修改负固定宽度输入域问题\r\n49.优化B/S前端按钮元素对脚本块的输出处理逻辑\r\n50.修复指定列表文本无效问题\r\n51.B/S前端时间轴AddValuePoints接口函数中的数据点对象新增Title、Color、TextColor支持指定悬浮文字以及前景色背景色的支持\r\n52.调整都昌本地服务器的代码添加试图参数启动程序开机直接最小化的功能，需要测试\r\n53.修改IE无法插入特殊字符和表格问题\r\n54.修复B/S前端里层输入域值发生改变时外层输入域的内容复制不触发的问题\r\n55.补充浏览器类型判断的代码\r\n56.调整本地服务器的代码使用工具栏按钮来控制是否开机自启动\r\n57.调整转换下拉项成JSON的处理代码，所有空字符串照常输出只有NULL时才不输出\r\n58.调整B/S前端时间轴接口函数\r\n59.B/S前端LocalPrintDocument新增Async参数控制是否同步调用\r\n60.改进序列化功能\r\n61.改进JSON处理\r\n62.改进WEB本地打印\r\n63.掩盖B/S前端预览段落右对齐失效的问题\r\n64.B/S前端时间轴接口函数FileNew新增参数控制释放后台对象的功能\r\n65.修改处理文本方法代码，\r\n无效问题\r\n66.初步修改移动端样式\r\n67.医学表达式带单位的问题\r\n68.修复插入元素保存后多出一空白行问题\r\n69.改进分页排版算法\r\n70.改进授权并发\r\n71.B/S前端接口函数InsertSubDocuments新增CSSStyle指定每个病程记录对象的前端样式\r\n72.调整打印代码接收参数里的页码范围设置\r\n73.修改Spechars接口在输入域中插入的格式\r\n74.开发客户端WEB服务器EXE发布功能\r\n75.改进对设计时的支持\r\n76.B/S都昌本地服务器添加最小化时隐藏窗体到任务栏常驻的特性\r\n77.修改获取AcceptDataFormats的方式\r\n78.修复C端时间轴在设置真实打印机后设计器的页面设置对话框不保存纸张类型的问题\r\n79.修复键盘按下ctrl时不阻止键盘操作\r\n80.修复插入特殊字符可能报错问题\r\n81.调整代码结构\r\n82.新增B/S前端选项AutoGenerateOrderedList用来控制是否自动生成段落列表\r\n83.修复ie无法插入表格问题\r\n84.改进授权分发机制，改进TestPrint功能\r\n85.调整授权控制\r\n86.修复IE报错问题（DCDomTools.MoveCaretTo替换成DCDomTools.MoveCaretToIndex）\r\n87.初步上传bs插入固定宽度输入域代码\r\n88.改进并发数分发功能\r\n89.上传项目文件\r\n90.优化移动端单复选框的排列样式\r\n91.调整本地打印JS\r\n92.改进文档节展开的行为\r\n93.更新功能代码\r\n94.改进软件授权分发功能\r\n95.B/S前端编辑器初始化时追加设置document.WriterControl\r\n96.修复ie9以下插入出错问题\r\n97.修复ie8输入内容报错问题\r\n98.修复IE8上获取不到当前元素问题\r\n99.改进WEB本地服务器\r\n100.新增base64字符串进行对比留痕\r\n101.修复特殊情况下段落数字列表文档在B/S前端打开报错的问题\r\n102.调整 AboutExe的生成\r\n103.解决粘贴不了记事本的内容问题\r\n104.新增了com下XTextTextElement元素创建的方法\r\n105.上传LocalPrintDocument代码调整\r\n106.对XTextTextElement进行COM开放\r\n107.改进代码结构\r\n108.调整本地WEB服务器\r\n109.改进本地WEB服务器功能\r\n110.修改设置输入样式为年月日格式数据源绑定报错的问题\r\n111.处理爱尔眼科基于用户锁的功能在表单模式下起冲突的问题\r\n112.修复IE8下固定宽度输入域报错问题\r\n113.修改粘贴后保存丢失问题\r\n114.修复粘贴时数据位置错乱问题\r\n115.改进文档网格线绘制，新增DocumentViewOptions.ShowGlobalGridLineInTableAndSection\r\n116.修改自定义的AJAX请求头的代码\r\n117.调整都昌B/S前端打印服务器的开机自启动以及启动自动最小化的处理逻辑\r\n118.改进客户端WEB服务器\r\n119.B/S前端新增WEB选项AttachedAJAXHeader，用于控制AJAX请求时自定义请求头\r\n120.B/S前端时间轴新增EventLinkClick事件用于处理数据点前端单击响应\r\n121.调整项目文件\r\n122.时间轴新增布局模式Fraction，用于支持分数形式的数据显示\r\n123.改进客户端服务器功能\r\n124.修复留痕合并文档显示工具条\r\n125.改进BS本地打印\r\n126.调整事件代码\r\n127.掩盖带可见性表达式控制以及标签单位文本的输入域在B端预览时标签单位文本仍可见的问题\r\n128.B/S时间轴服务页采用应用程序状态保存文档数据以避开跨域的问题\r\n129.输出可编辑的页脚时，不设置高度\r\n130.修改时间输入域的赋值方法\r\n131.修改一个授权更新的问题\r\n132.改进授权分发机制\r\n133.时间轴数据点对象新增TextColor属性用于提供自身使用字体颜色设置\r\n134.改进授权并发共享控制，改进限制页数控制\r\n135.更改本地WEB服务器通知栏文本为DCWriter-本地打印服务\r\n136.修改bs插入固定宽度输入域保存问题\r\n137.解决移动端输入文字报错问题\r\n138.新增XTextDocument.StaticIsRegistered/IsRegistered属性\r\n139.修改输入域内容为空的时候设置校验时通过校验\r\n140.改进JSON代码\r\n141.改进WEB客户端打印\r\n142.修复带段落列表的文档在B端打不开的问题TEMPLATE128\r\n143.调整B/S前端接口函数InsertXmlByID的代码删除插入内容末尾的多余换行\r\n144.调整对.NET CORE的支持\r\n145.时间轴数据点对象新增Font属性用于提供自身使用字体设置\r\n146.B/S前端接口函数PrintByHtml新增设置弹出窗体大小与位置的参数设置\r\n147.修复时间轴文档页数计算不正确的问题\r\n148.添加粘贴时删除元素后更新当前光标所在位\r\n149.修改isTransformLandscape属性默认值\r\n150.B/S前端接口函数PrintByHtml内部添加触发前端EventBeforePrint事件"
    },
    {
        "year": "",
        "time": "7月27日",
        "version": "",
        "number": "",
        "pre": "1.B/S后台新增WEB命令GetPDFByFiles\r\n2.上传实现预览续打状态下按CTRL+单击设置结束位置遮盖效果的代码，实际打印时效果未实现\r\n3.添加isTransformLandscape属性控制横向文档打印时是否倒转，默认true：倒转，false:不倒转\r\n4.修复B/S前端插入多选单选框后加回车添加内容在预览下多一空行的问题\r\n5.改进释放资源的代码\r\n6.B/S前端导出PDF时对所有打印时不可见的元素做手动隐藏处理\r\n7.调整初始化的代码\r\n8.解决表单模式下输入域失去焦点事件会触发2次问题\r\n9.改进资源处理模式\r\n10.处理B/S前端数据源绑定的所有路径字符串使其忽略大小写和当前的C端保持一致\r\n11.优化B/S前端预览界面下获取最后打印位置的处理逻辑\r\n12.修复B/S前端水平线元素前的段落结尾行在预览下设置成两端对齐导致文字拉开的问题\r\n13.B/S前端时间轴AddValuePoints函数对数据点JSON对象新增Link属性与Endtime属性的支持\r\n14.改进模块加载功能\r\n15.修复B/S前端多行单选多选框在预览时选框图标下垂以及文本排版居中的问题\r\n16.改进初始化功能\r\n17.B/S前端JSON添加数据点的函数添加对指定数据点图例的支持\r\n18.修复页眉下边框线显示不全问题\r\n19.改进授权控制，改进ASP.NET CORE\r\n20.改进加密狗的支持\r\n21.新增WriterControl.PopupFormSizeFix静态属性\r\n22.改进资源处理，调整CS下拉列表的处理\r\n23.改进字符串处理\r\n24.当一行末尾的输入域结束输出，若输入域没有结束边框文字则设置DOM隐藏，防止位于一行尾端的输入域输出DOM长度伸出打印区域边界影响到打印的排版\r\n25.修改打印时出现undefined问题\r\n26.更新AX控件\r\n27.B/S前端调整代码使页眉中只有一个空格和段落符号时仍然不显示页眉下划线\r\n28.调整下拉列表代码结构\r\n29.处理输入域使用下边框后在里面输入文字保存后文字也加上了下边框的问题\r\n30.修改了XTextDocument初始化的代码\r\n31.改进CS控件加载速度\r\n32.B/S前端插入单选多选函数参数新增MultiLine用于设置是否换行\r\n33.改进软件启动性能\r\n34.B/S前端新增接口函数GetDocumentPageSettings用于获取当前文档的纸张类型与大小\r\n35.初步完成前端insertsubdocuments同时携带子文档选项的功能\r\n36.B/S前端时间轴新增AddValuePoints接口函数用于前端批量添加数据点，未测试\r\n37.调整对.NET CORE的支持\r\n38.将ensp;空格替换为标准空格\r\n39.改进资源文件处理\r\n40.调整代码取消打印预览下的localclass的输出\r\n41.B/S前端对医学表达式对话框点确定或取消后添加引发EventAfterFieldContentEdit事件支持\r\n42.上传新文档\r\n43.上传新代码文件\r\n44.处理页眉内无内容，取消显示页眉下横线\r\n45.调整包含contentlock的输入域在前端的样式\r\n46.改进用户记录功能\r\n47.改变图表元素中的图表项目获取颜色的逻辑\r\n48.改进授权控制\r\n49.改进脚本功能\r\n50.B/S前端编辑器新增接口函数CommitDocumentUserTrace()用于提交当前加载文档的用户痕迹\r\n51.添加功能：BehaviorOptions.EnableCalculateControl可以启用停用数字小键盘\r\n52.新增XTextCheckBoxElementBase.AutoHeightForMultiline属性\r\n53.调整B/S前端绑定数据源遇到空值时的处理\r\n54.调整项目代码\r\n55.修改打印背景文字的控制\r\n56.调整保存图片的代码\r\n57.修改下拉列表的点击行为\r\n58.修改一些插入错误问题\r\n59.调整代码结构\r\n60.开放ComSetGlobalPageIndexoffset接口函数\r\n61.修改藏文打印问题\r\n62.调整弹出列表位置的计算调整数据源绑定的代码结构\r\n63.修改为输入域勾选动态加载时清除缓存\r\n64.改进字符串资源管理\r\n65.改进性能代码\r\n66.修改医学表达式在不同系统下的表达方式\r\n67.改进注册码生成器\r\n68.先封锁设置结束打印位置的功能，实际遮盖效果始终有问题，以后再慢慢搞\r\n69.改进控件第一次加载速度\r\n70.调整COM接口\r\n71.修改对输入域下拉框，用键盘的上下箭头来进行选择代码\r\n72.新增COM接口函数ComExecuteObjectMethod用于执行通用性的方法\r\n73.调整数据源绑定代码结构\r\n74.改进字符串内存管理\r\n75.调整初始化代码结构\r\n76.新增PrintLongBmp()\r\n77.修复输入域设置的是左对齐或居中，打印显示不正确，内容分散整个输入域\r\n78.修复B/S前端编辑视图下页眉页脚只读时元素高度被挤出的问题\r\n79.修改数据源绑定不区分大小写\r\n80.修改禁用注册码信息\r\n81.调整绑定代码若输入域为Date格式则将其绑定的innervalue值中的时分秒给略去避免前端DAYDIFF计算少一天\r\n82.改进文档节边框显示，改进字符串资源管理\r\n83.改进加密算法\r\n84.添加EventAfterSpace函数用来下拉展示时可以控制重写空格操作\r\n85.为B/S前端单选多选框的选框添加输出空格优化排版美观\r\n86.调整字符串资源管理\r\n87.修改了文字围绕图片导致的排版错误\r\n88.给B/S前端预览模式下的单选多选元素的方框加上CLASS以方便前端JS处理替换\r\n89.调整授权代码\r\n90.调整字符串资源处理模式\r\n91.页眉页脚不可编辑时强制转为打印模式\r\n92.调整字符串的代码结构\r\n93.修复B/S前端输入域背景文字输出模式在页眉页脚内失效的问题\r\n94.解决快速录入时光标偶然不跳转问题\r\n95.解决固定宽度输入域行高问题\r\n96.修复B/S前端在打开Transformbase64开关后SaveDocumentToBase64String报错的问题\r\n97.修复B/S前端useclassattribute开关打开后加载病程内部输入域CSS输出不正常的问题"
    },
    {
        "year": "",
        "time": "6月30日",
        "version": "",
        "number": "",
        "pre": "1.改进WEB的JS功能\r\n2.修复tab键新增表格行，输入域功能丢失，如时间选择框丢失\r\n3.B/S前端GetPrintPreviewHTML接口函数整合GetPrintNowHTML的处理\r\n4.改进WEB日志功能\r\n5.删除错误代码\r\n6.改进页码输出\r\n7.调整字符串资源\r\n8.新增快速录入模式（DocumentOptions.BehaviorOptions.FastInputMode = true时启动）\r\n9.修改医学表达式在不同系统下的表达方式\r\n10.先解决B/S前端纯文字带边框线做下划线后保存文档边框丢失的问题\r\n11.改进ASP.NET CORE的支持\r\n12.添加反混淆信息\r\n13.改进代码设置\r\n14.调整空格在BS打印模式下的输出\r\n15.修改DCWRITER3336，无背景文字的空输入域在设置了四维边框后打印时让输入域文本置入空字符让四维边框显示出来\r\n16.改进VC中下拉列表的功能\r\n17.删除多余文件\r\n18.修复代码逻辑错误\r\n19.根据dc_allowinsertrowdownusehotkey屏蔽tab键新增表格行\r\n20.修改数据源绑定不区分大小写\r\n21.改进软件启动过程\r\n22.调整字符串的内存操作\r\n23.开始开发新的BS授权控制\r\n24.改进BS中表格逻辑删除后的显示\r\n25.改进WEB版的JS脚本\r\n26.调整B/S前端支持单选多选框的数据源绑定的代码\r\n27.纠正移动端HTML处理中的一处逻辑错误\r\n28.解决复制粘贴bug\r\n29.调整内存管理\r\n30.修改收缩文档节的一个错误\r\n31.改进数值表达式引擎\r\n32.修复BR元素在页眉或页脚内处理时的报错\r\n33.修复B/S前端表达式计算错误的问题\r\n34.修复前端InsertFile命令的BUG\r\n35.上传预览模式下downloadfile的代码调整\r\n36.B/S医学表达式在双击打开编辑值界面之前也触发EventBeforeFieldContentEdit事件\r\n37.上传袁总代码\r\n38.修改CS中多选下拉列表的功能\r\n39.修复B/S前端FileSaveSelection无法触发后台代码的问题以及衍生的一系列小故障\r\n40.更新项目文件\r\n41.改进BS中单元格网格线的输出\r\n42.改良对无COOKIES时的授权控制\r\n43.修改表单模式下tab切换光标在输入域内部\r\n44.改进图片环绕文字功能\r\n45.先上传一部分代码\r\n46.B/S前端针对设置了Date类型的输入域过滤掉赋值中的时分秒信息\r\n47.改进了IE嵌入控件时的键盘行为\r\n48.调整时间轴B/S版前端时间轴视图模式下左侧固定图片的高度\r\n49.掩盖B/S前端合并超过三个文档打印时图片显示不出来的问题DCWRITER3301\r\n50.初步完成前端insertsubdocuments同时携带子文档选项的功能\r\n51.改进Selection.Text\r\n52.修复B/S前端新建文档后立即获取文档修改状态为true的问题\r\n53.修改导出为html输入域标签单位文本丢失的问题\r\n54.改进ENSP在XML加载的处理\r\n55.上传解除混淆\r\n56.扩展B/S后台GetHTMLByFile的功能为前端新增接口做准备\r\n57.调整HTML输出\r\n58.解决时间控件变形问题\r\n59.改进WEB测试工具\r\n60.调整XML序列化的代码\r\n61.修改了校验容许关键字的问题\r\n62.修改拖拽功能需求\r\n63.上传B/S后端代码调整\r\n64.B/S前端编辑器维护并新增事件EventAfterFieldContentEdit与EventBeforeFieldContentEdit，用于响应下拉、数值、日期类输入域的编辑前与编辑后的事件\r\n65.改造时间轴前端B/S的后台服务页代码\r\n66.解决固定宽度输入域高度变大问题\r\n67.修改数值表达式在输入域失去焦点时内容为空时不触发修改\r\n68.修改BS中单元格网格线功能\r\n69.开放COM环境下时间轴控件的相关事件接口\r\n70.改进HTML解析\r\n71.B/S前端数据源绑定新增对单选框与多选框的支持\r\n72.改进B/S版前端时间轴保存换行字符串在后端执行器内的处理逻辑\r\n73.新增PageIndex偏移量功能\r\n74.改进WEB服务器日志功能\r\n75.改进WEBHOST\r\n76.调整数据源绑定代码结构\r\n77.改进代码生成器\r\n78.改进日志功能\r\n79.修改了一下拖拽不绑定数据源的问题\r\n80.处理B/S前端数据源绑定的所有路径字符串使其忽略大小写和当前的C端保持一致\r\n81.解决DCWRITER3145问题\r\n82.修复B/S前端输入域在不同的背景文字输出模式下以及在有无固定宽度的情况下输出到预览模式时的各种错误\r\n83.改进日志输出功能\r\n84.调整B/S版时间轴后端执行器恢复使用应用程序状态来保存信息而不使用会话保存，以避免跨域状态下信息获取不对的问题\r\n85.修改导出html时输入域标签文本不显示的问题\r\n86.调整授权点火机功能\r\n87.新增DocumentBehaviorOptions.EnabledCache100KBImageData选项\r\n88.从后台掩盖保存文档字符串中出现特殊空白字符的问题\r\n89.调整代码结构\r\n90.改进编辑器弹出数值选择框时的焦点控制\r\n91.修复移动端无法弹出输入法问题\r\n92.上传代码结构调整\r\n93.添加新的webwritercontroloptions\r\n94.拖拽数据源问题又修改回来了\r\n95.解决模板工具里设置元素不能删除，但在B端能选中后删除\r\n96.处理前端CustomizeSpanInputElementBorderCssStyle在后台预览输出时发挥作用\r\n97.B/S时间轴后端执行器恢复使用会话来保存信息\r\n98.开发授权打火机功能\r\n99.开发WEB服务器授权打火机功能\r\n100.添加输入域失去焦点的回调函数EventFieldOnBlur\r\n101.阻止动态下拉列表进行二次加载\r\n102.上传代码调整\r\n103.改进JS脚本\r\n104.解决一些跨域问题\r\n105.修改WriterControl.EventScroll事件\r\n106.调整WEB的HTML输出\r\n107.修复B/S前端gethtmlbyfiles接口函数时在设置输入域背景文字在预览下的输出失效的问题\r\n108.改进对藏文的支持\r\n109.修复输入域前后边框隐藏时可能重新出现问题\r\n110.改进DELPHI中的行为\r\n111.修复前端含attributes的输入域CA签名后在预览模式下CA签名失效的问题\r\n112.添加跨域携带COOKIE的处理代码\r\n113.改进输入域边界元素的排版行为\r\n114.调整授权点火器，\r\n115.改进内存管理\r\n116.修复分页预览模式下无法打印文档问题\r\n117.改进WEB日志记录功能\r\n118.修改下拉列表的点击行为\r\n119.初步实现前端InsertSubDocuments函数，先上传\r\n120.修复跨域环境下的会话失效问题\r\n121.调整前端合并文档打印的后台处理代码\r\n122.调整WEB选项序列化过程\r\n123.修改后台加载动态下拉列表事件为同步加载\r\n124.新增KBEntry.DataSource/BindingPath属性\r\n125.上传袁总的代码\r\n126.修复B/S前端加载文档参数的加号被过滤的问题\r\n127.新增B/S编辑器前端命令FileOpen，直接弹出对话框选择文档后直接打开\r\n128.改进子文档操作\r\n129.掩盖输入域空白下拉项保存字符串生成特殊空白字符到前端的问题\r\n130.修复代码编写错误\r\n131.调整弹出列表位置的计算调整数据源绑定的代码结构\r\n132.新增HeaderFooterSelect属性控制页眉页脚是否可选中文本（默认false，可选中）\r\n133.给时间下拉框添加EventAfterFieldContentEdit事件\r\n134.自定义弹出框添加快速录入模式和引发EventAfterFieldEdit事件\r\n135.调整WEB代码\r\n136.改进授权控制\r\n137.调整B/S前端对contentlock属性的处理逻辑\r\n138.B/S前端GetPrintPreviewHTML接口函数新增对预览设置续打效果的支持\r\n139.调整内存管理\r\n140.修复B/S前端绑定数据到表格可能会发生的报错问题\r\n141.B/S前端编辑器函数PrintDocument新增参数PrintWindowWidthPrintWindowHeightPrintWindowTopPrintWindowLeft用于控制弹出的打印窗体的大小和位置\r\n142.改进手动双面打印\r\n143.更新时间轴Y轴对象的COM接口\r\n144.调整样式设置功能\r\n145.修复B/S前端文档处理后立即打印会出现首次打印图片数据显示不出来的问题\r\n146.B/S新增前端编辑器选项与服务端控件属性ShowPageBorderLine属性用于控制当文档体获得焦点后是否显示外边框\r\n147.修复页眉页脚输入域的修复结构问题\r\n148.改进HTML输出\r\n149.改进WEB输出\r\n150.调整文档对比留痕算法\r\n151.调整COOKIES\r\n152.调整BS中ENSP的处理\r\n153.更新打印事件脚本\r\n"
    },
    {
        "year": "",
        "time": "5月31日",
        "version": "",
        "number": "",
        "pre": "1.修复表单模式下插入分页符问题\r\n2.改进WEB日志处理\r\n3.修复B/S前端对时间输入域绑定数据源时年月日与时分秒之间出现特殊空格字符的问题\r\n4.修改一个AJAX请求为POST请求\r\n5.B/S前端接口函数getHtmlByFiles新增splitmode参数用于控制是否在合并的文档中添加分隔\r\n6.调整处理输入域隐藏标签的代码执行顺序\r\n7.修复B/S前端gethtmlbyfiles接口函数时在设置输入域背景文字在预览下的输出失效的问题\r\n8.上传处理输入域为空时隐藏连带隐藏表格行的代码\r\n9.调整.NET CORE项目文件\r\n10.调整元素四维边框的代码\r\n11.改进导出PDF的性能\r\n12.改进序列化行为\r\n13.修复负固定宽度输入域隐藏前后边框无效问题\r\n14.调整B/S后端输出表格的代码在预览HTML里仍然输出表格元素的dctype属性\r\n15.修改数字键盘的高度自适应\r\n16.开发数据保存功能\r\n17.修复时间轴绘制数据点的灯笼图例时误修改数据点的坐标为灯笼点坐标的问题\r\n18.调整数据点气泡提示包含灯笼数据\r\n19.修复B/S前端合并子文档预览HTML中丢失导航信息的问题\r\n20.B/S前端输入域新增根据TABINDEX自定义切换顺序的处理逻辑\r\n21.改进WEB服务器日志查看模块\r\n22.改进授权控制\r\n23.改进WEB版性能\r\n24.改进WEB性能监视功能\r\n25.改进WEB日志功能\r\n26.补充输出单选多选框的不打印可见性信息到B/S前端\r\n27.修复B/S前端使用TransformUseBase64时保存文档失败的问题\r\n28.修复B/S前端当输入域是INPUT标签时文档选项不显示输入域边框设置失效问题\r\n29.调整前端焦点处理模块的处理输入域得到焦点或失去焦点的逻辑代码\r\n30.B/S前端添加对边框线线形信息的输出与回传\r\n31.改进错误处理模式。\r\n32.改进预编译代码生成功能\r\n33.调整WEB压力测试程序\r\n34.添加全局改变字体大小和名称接口(第二个参数true表示也修改可编辑页眉页脚的字体)\r\n35.改进PDF版性能\r\n36.临时处理一下时间类型输入域在前端的innervalue出现特殊空字符的问题\r\n37.修改WriterControl.EventScroll事件\r\n38.修复B/S前端输入域固定宽度为负时打印预览输出宽度为0的问题\r\n39.修复大表格显示问题\r\n40.修改拖拽功能需求\r\n41.对前端界面添加UTF8编码设置\r\n42.更新DOTNETCORE项目文件\r\n43.修改数值表达式在输入域失去焦点时内容为空时不触发修改\r\n44.修复B/S前端文档处理后立即打印会出现首次打印图片数据显示不出来的问题\r\n45.改进EventTableRowHeightChanged事件\r\n46.改进输入域边界元素的排版行为\r\n47.修改拖拽不绑定数据源的问题\r\n48.改进WEB版资源处理方式\r\n49.调整加载保存文件的代码，调整接口\r\n50.新增KBEntry.DataSource/BindingPath属性\r\n51.修复后端文档设置条件判断为空时前端不起作用的问题\r\n52.改进加载保存文件的代码\r\n53.解决联众接口报错的问题\r\n54.改进文档加载保存操作\r\n55.改进WEB测试工具\r\n56.解决B/S前端货币格式数字输入域输出时无法选择四位数的问题，但目前还无法保存，C端还有问题\r\n57.修改背景颜色接口代码\r\n58.改进代码生成器\r\n59.修复表单模式下输入域全选后按backspace后delete会删除输入域问题\r\n60.修改了执行表达式导致的光标定位问题\r\n61.改进编译时代码输出\r\n62.处理WEB加载标记\r\n63.添加初步数字键盘功能\r\n64.改进编辑器弹出数值选择框时的焦点控制\r\n65.输入域选择时间，之后在弹出时间窗是当前系统时间\r\n66.修改授权文本输出\r\n67.对前端合并预览的子文档对象添加导航数据结构\r\n68.修改数字键盘代码\r\n69.改进了eawols 功能\r\n70.修复表单模式下输入域后面可以粘贴的问题\r\n71.数据校验错误修改了一下\r\n72.调整WEB日志功能\r\n73.改进授权服务器功能\r\n74.修改数值表达式的功能\r\n75.JS版时间轴新增前端接口函数SetParameterValue用于在运行时改变文档参数值\r\n76.调整页码设置对话框\r\n77.修改医学表达式获取图片时的AJAX请求为POST请求\r\n78.修复时间输入域前端年月日与时分秒中间有个特殊空白字符的问题\r\n79.修改医学表达式图片更新时的AJAX请求为POST请求\r\n80.处理子文档元素在预览视图中换页时重复输出dc_titlelevel导致前端节点重复的问题\r\n81.上传调整输出前端charset的代码\r\n82.修复B/S前端获取单元格内文本并赋值时多一空行的问题\r\n83.调整B/S前端插入二维码条形码医学表达式的更新图片采用POST方式请求数据\r\n84.改进图形操作记录器\r\n85.新增PrintVisibilityExpression属性\r\n86.修改WEB版等待界面图片\r\n87.调整对B/S前端表格绑定数据源命令的限制\r\n88.解决粘贴时删除不可删除元素问题\r\n89.修改时间轴的一个保存文件的错误\r\n90.修复B/S多选单选框的打印特殊文本输出不起作用的问题\r\n91.精简后台接收图片写数据到前端的编码操作\r\n92.新增CustomizeSpanInputElementBorderCssStyle属性控制自定义输入域边框样式\r\n93.调整格式化货币数字字符串的代码\r\n94.隐藏边框时，输入域有标签文本和单位文本只隐藏边框\r\n95.修改WEB版打印表格的处理\r\n96.B/S新增前端编辑器选项与服务端控件属性ShowPageBorderLine属性用于控制当文档体获得焦点后是否显示外边框\r\n97.修复BS版多选输入域BUG\r\n98.修改文档元素可见性状态更新不及时的问题。调整编程接口。\r\n99.改进资源文件处理模式\r\n100.改进WEB日志记录功能\r\n101.调整B/S前端数值编辑控件的给值代码\r\n102.改进WEB版资源读取模式\r\n103.添加WEB服务器状态查看的功能\r\n104.改进帮助文件查看器\r\n105.为联想的问题调整打印代码\r\n106.调整图形操作记录器\r\n107.修复previewuseadvancedmode报错的情况\r\n108.调整B/S后端输出表格行高的处理代码\r\n109.优化WEB版性能\r\n"
    },
    {
        "year": "",
        "time": "4月30日",
        "version": "",
        "number": "",
        "pre": "B/S前端新增InsertHorizontalLine命令重做插入水平线的功能并开放设置ID线粗与线颜色\r\n2.添加GetElementTextByID获取不到元素,返回null\r\n3.B/S前端新增DeletePageBreak命令用于删除已选中的分页符元素\r\n4.B/S前端编辑器选项新增EnableValueFormat，用于控制是否开启前端输入域的格式化输出判断，默认为true\r\n5.添加DropDownListItemMaxNum属性控制输入域下拉列表最大显示个数\r\n6.新增BehaviorOptions.IgnoreDataBindingWhenMissValue属性\r\n7.文件打印参数新增DoubleBufferPrint属性控制是否开启双缓冲打印模式\r\n8.COM接口新增ComExecuteCMDCommand用于直接执行CMD命令\r\n9.新增EventBeforeRefreshPages事件\r\n10.新增COM接口专用函数ComGetObjectPropertyValue用于通用性的提取对象属性值\r\n11.新增DCSoft.Printing.DCPrintDocumentOptions.DoubleBufferPrint属性\r\n12.新增DocumentBehaviorOptions.IgnoreDataBindingWhenMissDocumentParameter属性\r\n13.增加加载文档时自动退出打印预览模式\r\n14.前端B/S编辑器命令ReadDataFromTable与WriteDataToTable的命令参数新增rowindex属性用于指定从哪一行开始处理\r\n15.B/S前端每一页的DIV块新增dcpageforprint的class方便前端JS解析\r\n16.添加菜单合并当中对二级菜单的处理\r\n17.媒体元素开放了设置是否延迟加载的接口\r\n18.开放表单模式可以插入表格\r\n19.修复水平线文档元素的线粗在B/S保存时丢失的问题\r\n20.修复表单模式下输入域内的内容编辑状态不正常的问题\r\n21.修复当B/S前端输入域位于行尾且有固定宽度时打印HTML时输入域固定宽度会扩充HTML界面宽度的问题\r\n22.修复B/S前端加载文档时编辑器的ServerMessage总是显示上一次加载的信息的问题\r\n23.修复p标签最后插入元素的格式错乱问题\r\n24.修复ondocumentClick点击输入域背景文本无效问题\r\n25.修复在隐藏边框的空输入域中粘贴时边框又显示的问题\r\n26.修复了B/S前端插入分页符保存后再打开选中分页符执行deletepagebreak无法删除的问题\r\n27.修复B/S前端表格单元格直接公式计算失效的问题\r\n28.修复B/S前端输入域赋值带换行的复杂文本功能不正常的问题\r\n29.修复B/S前端单元格赋空值与赋带换行的复杂文本功能不正常的问题\r\n30.修复表单模式下输入域输入文字时可能光标位置不对\r\n31.修复BackgroundTextOutputMode为Underline时爱尔眼科输入域为空隐藏标签机制失效的问题\r\n32.修复前端编辑器FileSave命令出错的问题\r\n33.修复合并二级菜单时丢失图标问题\r\n34.改进编辑器JS版程序性能\r\n35.改进WEB压力测试软件\r\n36.改进WEB控件JS的输出\r\n37.改进HTML输出功能\r\n38.改进EventBeforeRefreshPages事件\r\n39.改进表格性能\r\n40.改进打印机处理\r\n41.改进对.NETCORE的支持\r\n42.改进对LINUX的支持\r\n43.改进用户痕迹中的时间显示\r\n44.修改B/S前端在downloadfile输出PDF时内部根据WEB选项事先控制输入域背景文字是否输出\r\n45.修改GetElementTextByID接口换行无法显示的问题\r\n46.修正B/S前端从单元格提取带换行文本丢失换行信息的问题\r\n47.修改输入域光标移入可能清除本身设置的背景色\r\n48.修改B/S前端InsertElementAtCurentPosition处理粘贴时插入元素的逻辑避免多层嵌套问题\r\n49.修改复选框数据源绑定触发事件\r\n50.修改BS编辑器遮罩层展示代码\r\n51.修改了打印指定页的问题\r\n52.修改了时间输入域的enter键触发回填\r\n53.插入分隔符代码改为DCExecuteCommand(InsertHorizontalLine, false, null)。\r\n54.修改输出服务器状态JSON字符串\r\n55.调整B/S前端加载文档的附加数据的排序\r\n56.调整B/S前端加载保存时的参数顺序以便提高性能\r\n57.调整打印功能\r\n58.调整文档加载算法\r\n59.调整打印页码问题\r\n60.调整网格线设置对话框\r\n61.调整XML数据源绑定\r\n62.调整代码防止在不打印背景文字时输出PDF时输入域的单位文本或标签文本也不输出的问题\r\n63.调整数据源绑定时的脚本触发\r\n64.调整代码确保表格行，表格，表格单元格的属性页面的窗体标题样式一致\r\n65.调整多选下拉框全选按钮的判断逻辑\r\n66.调整UpdateHighlightInfos代码防止报错\r\n67.调整代码应对预览模式下页眉内输入域显示多余边框的问题\r\n68.优化B/S前端保存文档的JSON处理改成拼接字符串以便节省性能\r\n69.优化transformusebase64下解码循环\r\n70.撤销先前加的统计堆栈数量的代码\r\n71.替换编辑器帮助菜单的调试输出功能为编辑脚本功能\r\n72.解决GetElementTextByID获取字符串编码格式问题\r\n"
    },
    {
        "year": "",
        "time": "3月31日",
        "version": "",
        "number": "",
        "pre": "1.新增resetModified方法，重置修改标记，具体使用方法和getModified方法类似\r\n2.新增DocumentBehaviorOptions.WordBreak属性\r\n3.新增重复水印的功能\r\n4.新增bs版脚本功能初始版\r\n5.时间轴新增DocumentMouseMove事件，在开启增强处理逻辑后可以获取到光标所在的时间与对应Y轴数据\r\n6.B/S前端新增命令Table_WriteDataToTable与Table_ReadDataFromTable用于在表格和数据集之间交换数据\r\n7.新增属性XPageSettings.PrintBackgroundImage\r\n8.B/S前端新增SetElementContentReadonly用于设置元素的编辑性\r\n9.提交B/S前端新增支持不同图标的段落列表样式\r\n10.B/S前端命令新增InsertPageInfoElement命令，用于在前端对文档插入页码元素\r\n11.后台输出输入域背景文字添加CLASS方便前端解析\r\n12.上传添加的B/S前端所用的SWITCH样式数据\r\n13.C/S编辑器新增ScrollTo函数用于操作滚动条，需要测试\r\n14.改进JS压缩算法。修改缩小字体自动填充的一个性能问题\r\n15.改进水印和背景图片。\r\n16.改进页面设置中的背景图片功能。\r\n17.改进重复平铺水印的功能，修改注册码的一个错误。\r\n18.改进HTML代码处理功能\r\n19.改进SerializableArrayList\r\n20.改进对ASP.NET CORE的支持\r\n21.改进了背景图片打印的问题\r\n22.改进TTF文件的读取\r\n23.合并打印优化\r\n24.细化了时间轴对起始结束日期设置的处理逻辑\r\n25.修复确保C端保存文档到PDF时按照文档选项正确输出输入域背景文字\r\n26.修复代码编写错误\r\n27.修复一处为空判断\r\n28.修复B/S前端输入域单位文本不打印问题与预览多一空格问题\r\n29.修复一处拼写错误\r\n30.修复WEBFORM下加载文档出乱码的问题\r\n31.修复设置了不可删除的单选多选框在B/S前端仍然可以删除的问题\r\n32.修复手机端文档保存丢失标签元素的问题\r\n33.修复B/S版护理记录单元格网格线预览和编辑不一致\r\n34.修复使用不同的图标段落列表保存到后台信息丢失的问题\r\n35.修复修改样式时可能失去选中问题\r\n36.修复显示对话框突然变大问题\r\n37.修复医学表达式居中失效\r\n38.部分修复表单模式下前端输入域TAB不跳转的问题\r\n39.重新编写设置文字样式代码，修复已知错误\r\n40.解决BS下，首行缩进影响表格单元格内的数据的位置\r\n41.解决拖拽导致表格宽度超出编辑器宽度\r\n42.调整文档保存接口将FileName移入到POST数据当中而不是随URL发送\r\n43.调整XPageSettings的接口\r\n44.调整JS处理医学表达式的代码\r\n45.调整维文版功能\r\n46.调整前端JS判断表单状态的代码\r\n47.调整时间轴自定义绘制事件参数代码转发底层调用\r\n48.调整修复代码以兼容WEBFORM与前端纯JS的场景\r\n49.调整ScrollTo命令的代码\r\n50.调整对.NET CORE的支持\r\n51.调整处理前端缩进冲突的代码\r\n52.调整删除时触发事件的行为。\r\n53.调整修复前端JS编辑器与WEBFORM下加载报错的代码\r\n54.调整前端对单元格赋空值的处理代码\r\n55.调整设置元素文本的前端代码针对单元格做特殊处理\r\n56.调整设置容器元素只读的判断\r\n57.调整B/S打印预览对输入域垫字符的判断\r\n58.调整处理contentlock的前端JS代码\r\n59.B/S前端初始化元素调整处理表单模式下的元素可编辑性\r\n60.修改CommitUserTrack()\r\n61.修改getModified方法，新增传入boolean值为true时，只专注于文字内容的改动\r\n62.修改了WEB版背景图片打印问题\r\n63.修改LoadDocumentFromFile参数\r\n64.将XTextDocument.WebClientScriptText改成XTextDocument.WebClientHtmlText\r\n65.修改未注册字样残影的问题。\r\n66.修改了留痕下校验\r\n67.修改了输入域必填项图片校验\r\n68.修改续打时一些细微差别\r\n69.B/S前端switch开关改用文本元素两端对齐方式展示\r\n70.指定文件打印修改\r\n71.修正无序列表段落内回车后破坏样式的问题\r\n72.改正维文版的功能。\r\n73.时间轴鼠标单击双击移动事件中的光标位置添加对页眉页脚数据行区域的命中的判断\r\n74.B/S前端输出段落列表不输出样式，并记录下后端样式到父元素\r\n75.输入域设置必填项对图片校验\r\n"
    },
    {
        "year": "",
        "time": "2月29日",
        "version": "",
        "number": "",
        "pre": "1.增加WEB版合并打印时，主文档数据源绑定的功能。\r\n2.新增WEB版前端事件EventAfterFieldContentEdit，用于下拉型输入域选择后触发，事件参数是当前输入域对象。\r\n3.新增WEB版前端插入表格的参数Alignment属性用于指定表格的横向对齐特性。\r\n4.增加WEB版前端ResetDocumentModified接口用于手动重置文档修改状态。\r\n5.增加WEB版前端内容锁的功能。\r\n6.修复WEB版更改字体样式的一些问题。\r\n7.修复在当前元素不可编辑情况下，可以执行相关命令的功能。\r\n8.修复WEB版客户SDWKT字符不对齐的问题。\r\n9.修复WEB版前端字符串插入后不更新当前光标位置导致再次插入报错的问题。\r\n10.修改WEB版前端在页眉页脚内容为空的情况下不输出页眉页脚的问题。\r\n11.修改WEB版最新字体大小和字体样式代码。\r\n12.修改WEB版不同客户SDWKT和SDSZ的文档排版兼容问题。\r\n13.修改WEB版前端选区模块定位当前输入域排除表单模式的场景，避免误定位到父元素造成功能错误。\r\n14.修改多机器码验证无效的问题。\r\n15.修改WEB版前端命令执行与删除按键处理前追加对contenteditable的判断。\r\n16.修改WEB版JSON相关的代码。\r\n17.修改WEB版签名图片不显示的问题。\r\n18.解决DCWRITER-3102 。\r\n19.解决DCWRITER-3104多文档合并续打的问题。\r\n20.调整WEB版输入域处理基于用户的内容锁的功能。\r\n21.调整打印功能模块。\r\n22.调整COM接口。\r\n23.调整WEB版前端字符串解析错误的问题。\r\n24.调整WEB版预览前删除段落末尾删除空白符的功能。\r\n25.更新WEB版修改字体大小和样式代码。\r\n26.去除WEB版前端提示信息alter NoStore。\r\n27.修正一处为空的判断。\r\n"
    },
    {
        "year": "",
        "time": "2月17日",
        "version": "",
        "number": "",
        "pre": "1.新增WEB版视图选项IgnoreFieldBorderWhenPrint的处理。\r\n2.修复WEB版输入域中回车字符不对齐的问题。\r\n3.修复WEB版字符串插入后不更新当前光标位置导致再次插入报错的问题。\r\n4.修复WEB版在span输入域中纯文本粘贴时换行无效的问题。\r\n5.修复WEB版粘贴时多一空行问题。\r\n6.修复自定义快捷菜单代码错误。\r\n7.修复WEB版未选中文本时使用SelectionText方法后SaveDocumentToString报错的问题。\r\n8.修复WEB版纯文本粘贴时换行无效问题。\r\n9.修改WEB版时间选择对话框的错误提示信息。\r\n10.修改WEB版输入域边框为不显示不占位。\r\n11.修改PDF的一个替换字体错误。\r\n12.修改WEB版选到两个单元格粘贴的代码。\r\n13.尝试修改WEB版单元格拆分。\r\n14.改进关于对话框的显示过程。\r\n15.改进加载和保存文档的性能。\r\n16.改进开发者工具。\r\n17.改进导出PDF的性能。\r\n18.改进加载XML的性能。\r\n19.调整XML序列化。\r\n20.解决WEB版固定宽度输入域不输出边框的问题DCWRITER-3083。\r\n21.解决WEB版标签元素的导航信息无法在前后台传输的问题。\r\n"
    },
    {
        "year": "",
        "time": "1月31日",
        "version": "",
        "number": "",
        "pre": "1.新增WEB版OutputFieldBorderChar选项。\r\n2.新增WriterControl和XTextDocument的EventDrawPageFrameContent事件。\r\n3.新增WEB版纯JS版时间轴PrintDocument函数用于专门打印文档。\r\n4.新增XTextDocument.CreateContentSearchReplacer、WriterControl.CreateContentSearchReplacer的接口。\r\n5.新增DocumentPaintEventArgs下面的COM接口。\r\n6.添加WEB版插入xml文档时判断插入到输入域中不换行的问题。\r\n7.添加WEB版传入打印预览的HTML获取打印时的HTML接口GetPrintNowHTML。\r\n8.添加WEB版前端插入的输入域所需的事件列表属性。\r\n9.增加WEB版的ImageDataInfo添加Serializable特性支持ASP.NET会话模式。\r\n10.添加重新加载时处理dom下面的子节点接口。\r\n11.新增BehaviorOptions.ForceRaiseEventAfterFieldContentEdit属性。\r\n12.修复WEB版输入域背景文本中空格无法显示问题。\r\n13.修复WEB版输入域边缘点击弹出下拉框时无法修改文本问题。\r\n14.修复WEB版选到两个单元格粘贴的问题。\r\n15.修复WEB版在输入域中将数据通过InsertXmlById插入以后，回车会消失的问题。\r\n16.修复WEB版首行缩进对固定宽度输入域的影响。\r\n17.修复WEB版标签元素在有分页文本的时候写到前端时不储存的问题。\r\n18.修复WEB版表单模式下嵌套输入域粘贴时破坏元素DOM结构问题。\r\n19.修复WEB版选择两个单元格粘贴的问题。\r\n20.修复WEB版粘贴后输入域丢失事件问题。\r\n21.修复WEB版输出内部没有段落元素但位于列表样式段落内的输入域时内部输出逻辑出错的问题。\r\n22.修复设置输入域文本时处理empty的问题。\r\n23.修复某些特定格式的图片在输出到PDF时绘制不正确的问题DCWRITER3062。\r\n24.修复WEB版元素校验信息写到MVC前端双引号输出不正确的问题。\r\n25.修复WEB版前端JS校验代码中针对单引号处理的隐藏BUG。\r\n26.改进PDF代码。\r\n27.改进WEB版文档对比算法。\r\n28.改进WEB负荷限制。\r\n29.修改BehaviorOptions.ForceRaiseEventAfterFieldContentEdit作用不够的问题。\r\n30.修改WEB版单复选框删除的问题。\r\n31.修改WEB版后台对容器元素的内容只读属性的写入。\r\n32.修改WEB版文档对比算法的一个错误。\r\n33.修改WEB版后台对表格输入域单多选框的内容只读属性的写入。\r\n34.修改PrintByHtml接口。\r\n35.修改WEB工作量计数的错误。\r\n36.修改WEB版的留痕打印预览。\r\n37.修改WEB版InitFileContentDom为重新加载处理dom下面的子节点,参数默认是整个html。\r\n38.修改编译警告的提示。\r\n39.修改元素事件不触发的问题。\r\n40.将媒体播放器底层的计时器从System.Timer替换为System.Windows.Forms.Timer。\r\n41.调整WEB版时间轴的代码以适应有网络代理访问的场景。\r\n42.调整COM接口，改进扩展绘图功能。\r\n43.调整脚本功能。\r\n44.调整图片元素的数据缓存功能。\r\n45.调整PDF导出功能。\r\n46.调整类型名称绕过DELPHI导出文件引入后与客户机原有中标控件类型名称冲突的问题。\r\n47.调整处理transformusebase64属性的代码。\r\n48.调整绘图代码。\r\n49.处理WEB版移动端日期时间输入域的值的问题。\r\n50.更新WEB版前端JS代码。\r\n"
    },
    {
        "year": "2019",
        "time": "12月30日",
        "version": "",
        "number": "",
        "pre": "1.调整WEB版的alert为console.log。\r\n2.调整在IE10以下不开启BASE64转码传送的功能。\r\n3.修改DCWRITER3034。\r\n4.修改SpecialFileSystem的混淆标记。\r\n5.调整DCSoft.Drawing.WaittingUIManager，使其避免主动抛出ThreadAbortException异常。\r\n6.调整WEB版输出带痕迹HTML的代码。\r\n7.新增ColorTheme的ComSetColorStringList函数用于应对PB下设置ColorStringListCOM属性失效的问题。\r\n8.修复一处为空错误。\r\n9.修复一处拼写错误。\r\n10.调整使用WEB版TransformUseBase64属性来控制BASE64HTML传递到后台的代码。\r\n11.精简WEB版的javascript代码。\r\n12.修复WEB版表单模式下嵌套输入域中光标问题。\r\n13.初步完成WEB版移动端折叠导航条的功能。\r\n14.修复WEB版表单模式下输入域中不能输入空格问题。\r\n15.修复WEB版表单模式下输入域嵌套输入域输入空格问题。\r\n16.调整WEB版前端操纵后台输出带痕迹预览HTML的代码。\r\n17.新增WEB版通过TransformUseBase64属性传递BASE64格式的HTML到后端。\r\n18.修改WEB版后台留痕预览通过预览函数参数来控制而不是通过文档选项来控制。\r\n19.修改WEB版前端记录痕迹时不显示逻辑删除内容。\r\n20.实现WEB版前端控制后台是否输出带痕迹的预览HTML。\r\n21.新增XTextContainerElement的DeleteAllSign接口，并开放COM接口。\r\n22.改进WEB版清除签名的功能。\r\n23.实现WEB版重新签名。\r\n24.改进WEB版服务器端状态JSON输出。\r\n25.调整质控图表的COM接口代码。\r\n26.修复C端按钮元素中的图片数据不输出到前端的问题。\r\n27.添加WEB版表格定位。"
    },
    {
        "year": "",
        "time": "12月16日",
        "version": "",
        "number": "",
        "pre": "1.添加表格定位。\r\n2.新增SecurityOptions.ShowFlagForOnlySoftwareSign选项，当纯软件签名时是否显示左上角惊叹号。\r\n	3.添加VOIDCOMCustomCommand事件与相关函数的COM接口。\r\n4.新增DocumentEventPrintPDFPage脚本事件，调整代码结构。\r\n5.WEB前端新增使用文档选项DefaultEditorActiveMode来控制所有激活模式设成Default的输入域的激活模式。\r\n6.添加EventBeforePaste返回正则表达式时，根据正则表达式清除符合规则的文本。\r\n7.软签添加软签图标。\r\n8.输入域数据源绑定后新增调用oncontentchanged事件强制触发表达式计算。\r\n9.DCDataBaseType添加混淆。\r\n10.调整留痕模式代码。\r\n11.调整字符串加密。\r\n12.调整KB代码结构。\r\n13.调整数据验证功能代码。\r\n14.调整数据源绑定的代码结构。\r\n15.调整事件处理代码。\r\n	16.调整开发者工具。\r\n17.改进文档对比算法。\r\n18.改进代码结构。\r\n19.改进配置文件读取。\r\n20.改进对D8的支持。\r\n21.修复插入特殊字符换行问题。\r\n22.完善插入特殊字符代码。\r\n23.修复插入特殊字符在输入域后换行无效问题。\r\n24.修复WEB前端加载文件后台消息传不回来的问题。\r\n25.修复WEB时间轴跨域报错的问题。\r\n26.修复输入域同时绑定文本和值不正常的问题。\r\n27.修复输入域有无列表输出不正确的问题。\r\n28.修复EventBeforePaste事件返回正则表达式时，只在输入域前后边框中根据正则表达式清除符合规则的文本。\r\n29.修复带标签文本的输入域在WEB前端页眉行最后一个元素时不输出的问题。\r\n30.修复WEB前端LOOKUP函数计算的错误。\r\n31.修复可能报错问题。\r\n32.修复合并程序集时不输出资源文件的问题。\r\n33.修复插入饼图对话框属性故障。\r\n34.修复图表模块代码关于DOUBLE类型丢失精度的问题。\r\n35.修复输入域输入空格的问题。\r\n36.修复在b端中，元素设置了固定长度后，时间格式设置无效。\r\n37.补充修复合并工具不输出资源文件的问题。\r\n38.补充修复图表绘制模块DOUBLE数据类型丢失精度问题。\r\n39.修改表格单元格选中时的刷新不及时的问题。\r\n40.修改了表格排版算法。\r\n41.修改提示信息事件。\r\n42.修改打印预览导致图片显示错误。\r\n43.修改数据源代码结构。\r\n44.修改粘贴，EventBeforePaste事件返回正则表达式时，只在输入域前后边框中根据正则表达式清除符合规则的文本。\r\n45.修改获取病程xml\r\n46.修改多选列表知识库。\r\n	47.解决setDisplayName的NullReferenceException错误。\r\n	48.解决DCWRITER-2942\r\n49.解决ThrowArgumentNullException问题。\r\n50.解决DCWRITER-2916\r\n51.签名异常处理。\r\n52.消除前端WEB创建图片时的四维黑边框DCWRITER3017\r\n53.上传图表代码调整。\r\n 54.上传初步处理图表元素鼠标划动事件的代码。\r\n	55.上传图表数据点设计器的调整。\r\n	56.上传图表元素代码。\r\n57.上传图表元素处理鼠标移动获取数据点功能的部分代码。\r\n"
    },
    {
        "year": "",
        "time": "11月29日",
        "version": "",
        "number": "",
        "pre": "1.新增WEB版事件处理提示信息的功能。\r\n2.增加CS版图表元素属性。\r\n3.增加ComCreateXTextTDBarcodeElement、ComCreateXTextMediaElement的Com接口。\r\n4.增加ComCreateXTextTDBarcodeElement、ComCreateXTextMediaElement的Com接口。\r\n5.新增CS版设置图表自定义线条两端图例类型与大小的代码。\r\n6.添加CS版自定义特殊字符的功能。\r\n7.增加WEB版清除正文的接口。\r\n8.新增CS版饼图元素功能。\r\n9.增加WEB版前端获取病程xml的接口。\r\n10.开放XTextNewBarcodeElement的Com接口。\r\n11.开放XTextNewBarcodeElement的Com接口。\r\n12.开放医学表达式COM接口。\r\n13.解决时间轴0点数据点的重复绘制隐患问题。\r\n14.解决WEB版续打时能记住上次续打的位置。\r\n15.解决WEB版合并打印。\r\n16.解决WEB版撤销所带来的问题。\r\n17.解决WEB版移动端字符串页面滑动问题。\r\n18.初步解决WEB办悬挂缩进的问题。\r\n19.解决WEB版插入表格文档的一个问题。\r\n20.解决DCWRITER-2963。\r\n21.优化WEB版病程自定义属性。\r\n22.优化CS版图表功能。\r\n23.改进WEB版CA功能。\r\n24.完善WEB版固定输入域代码。\r\n25.修复WEB版表单模式下删除的问题。\r\n26.修复WEB版表单模式下在输入域前输入文字光标不动的问题。\r\n27.修复WEB版表单模式下在输入域前后输入空格的问题。\r\n28.修复WEB版只读输入域可以输入空格的问题。\r\n29.修复WEB版input输入域无法输入空格的问题。\r\n30.修复底层无默认构造函数的类型反射创建实例失败出错的问题。\r\n31.修复WEB版固定宽度输入域后面回车问题。\r\n32.修复WEB版只读输入域backspace和delete按键时的光标问题。\r\n33.修复时间轴画格子错误的问题。\r\n34.修复WEB版前端表格插列时列宽失效的问题。\r\n35.修复WEB版前端新增表格时单元格内多一空格问题。\r\n36.修复WEB版前端键盘选择输入域下拉项后不触发表达式的问题。\r\n37.修复时间轴视图下超长度文档到一定程度下不画点的问题。\r\n38.修复时间轴画点错位问题。\r\n39.修复WEB版前端输入域设置不可删除却能删除掉的情况。\r\n40.修改WEB版MVC下的错误。\r\n41.修改COM下条形码元素GUID。\r\n42.修改WEB版病程顺序调整的接口。\r\n43.修改WEB版输入域固定宽度为正数时，前端为span，可以变长。\r\n44.修改WEB版导航接口。\r\n45.修改WEB版前端输入法状态下不记录撤销操作列表。\r\n46.修改CS版版偏移续打的一个错误。\r\n47.修改CS版收缩文档节的一个错误。\r\n48.修正CS版插入图表的命令名称为InsertChartElement。\r\n49.调整WEB授权控制代码。\r\n50.调整WEB版背景文字颜色的接口。\r\n51.调整DELPHI类型导出的代码为兼容DELPHI10以上的版本。\r\n52.调整CS版开发者工具。\r\n53.调整WEB时间轴用于处理跨域的代码。\r\n54.调整时间轴输出文档图片的代码。\r\n55.调整时间轴画格子的代码布局。\r\n56.调整底层字符串资源处理的问题。\r\n57.清除WEB版段落行高影响固定宽度输入域的问题。\r\n58.处理WEB版输入域中enter报错问题。"
    },
    {
        "year": "",
        "time": "11月15日",
        "version": "",
        "number": "",
        "pre": "1.添加WEB版autofocus参数来控制关闭下拉列表时是否将光标移到引发下拉列表的输入域的问题。\r\n2.新增WEB版SetFieldDropListFont函数用于自定义输入域下拉框中使用的字体和字号。\r\n3.新增WEB版GetPrintPreviewHTML函数用于直接获取当前加载的文档的预览模式下的HTML。\r\n4.新增WEB版前端获取病程xml的接口。\r\n5.添加时间轴鼠标事件中获取到的数据点对象。\r\n6.添加CS版插入图表的功能。\r\n7.添加WEB版输入域前后输入文本修复问题的限制条件。\r\n8.添加WEB版剪切拦截事件。\r\n9.修复CS版InsertSubDocuentAtCurrentPosition插入位置不对的问题。\r\n10.修复HtmlTextWriter为xmlWriter接口。\r\n11.修复WEB版JS函数ID重复元素情况。\r\n12.修复WEB版表格元素的dctype属性问题。\r\n13.修复WEB版ASP.NET后台加载文档写到前端ATTRIBUTES出错的问题。\r\n14.修复WEB版在输入域前后面输入文本所导致的问题。\r\n15.修复WEB版Attrbiutes在ASP.NET后台加载到前端时报错的问题。\r\n16.修复COM接口下的打开压缩文档时取消自动更新数源操作的问题。\r\n17.修复时间轴时间区域添加后无法删除的问题。\r\n18.修复DCWRITER-2917。\r\n19.修复WEB版后端绘制复杂混合状态下的列表样式段落到前端出错的问题。\r\n20.修复WEB版前端列表样式的空段落内在直接回车时破坏文档结构的问题。\r\n21.修复WEB版列表样式段落内空节点回车出错的问题。\r\n22.修复CS版当光标放入容器元素内调用insertSubDocumentAtCurrentPosition出错的问题。\r\n23.修复WEB版图片获取焦点抛异常的问题。\r\n24.修复DCWRITER-2931。\r\n25.修复WEB版图片光标问题。\r\n26.修复DCWRITER-2906中嵌套输入域和输入法所导致的问题。\r\n27.修复WEB版两处标记不可删除但B/S前端可以删除的情况。\r\n28.修复时间轴画点错位问题。\r\n29.优化WEB版签名接口。\r\n30.优化条件判断。\r\n31.解决WEB版签名验证问题。\r\n32.解决DCWRITER-2931。\r\n33.解决WEB版插入表格文档的问题。\r\n34.签名WEB版签名接口修改。\r\n35.修改WEB版签名图片尺寸设置。\r\n36.修改WEB版前端插入表格行命令为带参数格式传入指定要插入的表格行的功能。\r\n37.调整WEB版签名代码。"
    },
    {
        "year": "",
        "time": "10月31日",
        "version": "",
        "number": "",
        "pre": "1.新增WEB接口SetElementCheckedByID，用于设置单选多选是否选中，同时可以关联表达式效果。\r\n2.新增时间轴控件文档单击事件。\r\n3.新增WEB一处为空判断。\r\n4.修复WEB通过BackgroundTextOutputMode属性来控制是否打印输入域背景文字与是否保留背景位置的功能。\r\n5.修复WEB光标处于输入域开始文本前面回车时复制输入域的问题。\r\n6.修复WEB按键backspace时光标不在输入域所在段落时导致的复制输入域的问题。\r\n7.修复WEB一处下拉计算不正常的问题。\r\n8.修复WEB前端上下标删除后重新输入字体不正常的问题。\r\n9.修复WEB不可删除元素的处理逻辑。\r\n10.修复WEB移动端中刷新页面导致文档加载报错的问题。\r\n11.修复WEB手机端采用select mutiply展示多选下拉输入域的问题。\r\n12.修复WEB前端手机端多选下拉框按CTRL键后报错的问题。\r\n13.修复WEB手机端后台下拉多选项输出到前端错误的问题。\r\n14.修复WEB前端手机端对多选下拉输入域操作引发的各类问题。\r\n15.修复WEB中容器元素中的列表样式段落绘制到前端的展示以及保存回后端的问题。\r\n16.修复WEB首页页眉页脚不同的问题。\r\n17.修复WEB一处为空判断。\r\n18.修复WEB数字列表样式段落在单元格内删除导致报错的问题。\r\n19.修复WEB手机端排版同组元素改成不换行的问题。\r\n20.修复WEB手机端排版输入域优先输出提示文本的问题。\r\n21.修复WEB手机端输入域的排版用NAME来分组显示的问题。\r\n22.修复WEB手机端有无选下拉框问题的问题。\r\n23.中有单标签dom，如图片、换行符，判断成内容空白的问题。\r\n24.修复WEB表格设置不可删除时可删除表格的问题。\r\n25.修复WEB表单模式输入域嵌套下拉框时，子下拉框无法选中的问题。\r\n26.修复WEB手机端下拉框显示不全问题。\r\n27.修复WEB打开分页预览视图模式时报错问题。\r\n28.修改后台HtmlTextWriter为XmlWriter。\r\n29.修改WEB手机端日期时间类输入域改用datetime-local来处理。\r\n30.修改WEB移动端展示表单元素时的输出问题。\r\n31.修改DCWRITER-2847。\r\n32.修改WEB页眉页脚网格线无效化 DCWRITER-2814。\r\n33.修改WEB手机端数值型输入域在手机端输出为input type=number的问题。\r\n34.修改WEB单独使用IsMobileLayout来控制是否进行手机端排版的问题。\r\n35.修改WEB获取元素text值时忽略css样式的问题。\r\n36.修改WEB插入输入域name属性没有保存的问题。\r\n37.调整WEB前后端元素边框的代码。\r\n38.调整PDF代码结构。\r\n39.优化WEB标签文本删除异常的问题。\r\n40.优化WEB输入域删除异常的问题。\r\n41.优化WEB单选框样式保存的问题。\r\n42.优化WEB插入xml接口的问题。\r\n43.优化WEB接口。\r\n44.解决WEB数值输入域，在移动端没有值的情况下无法调出输入法的问题。\r\n45.解决WEB导航保存失效的问题。\r\n46.处理WEB列表样式段落，前端编辑回车自动增加新项目符号的问题。\r\n47.处理WEB列表样式段落前端编辑输入光标乱跳的问题。"
    },
    {
        "year": "",
        "time": "10月15日",
        "version": "",
        "number": "",
        "pre": "新增WEB版只读输入域的数据校验。\r\n新增WEB版前端插入条形码二维码的功能。\r\n新增WEB版XTextDocumentBodyElement元素添加自定义属性。\r\n时间轴新增EnableCustomValuePointSymbol设置用于控制是否启用自定义绘制点。\r\n开放加载保存加载二进制函数的COM接口。\r\n处理WEB版标签删除问题。\r\n补充修复WEB版输入域无法删除失效的问题。\r\n修复WEB版时间输入域设置最大最小范围不验证的问题。\r\n修复WEB版时间输入域边界元素消失时修正输入域元素DOM结构。\r\n修复WEB版插入表格行后行高不一致的问题。\r\n修复WEB版前端插入表格宽度比父容器少一点点的问题以及在表格内插表格宽度计算错误的问题。\r\n修复WEB版body重复添加attributes的问题。\r\n修复WEB版修复输入域换行光标问题。\r\n修复WEB版修复打印无格式问题。\r\n修复WEB版处理标签删除问题。\r\n修复WEB版光标位置接口FocusAdjacent。\r\n修复WEB版输入域设置不可删除后前端仍然可以删除的问题。\r\n解决TEMPLATE-91。\r\n优化WEB版后台打印输入域背景文字。"
    },
    {
        "year": "",
        "time": "9月29日",
        "version": "",
        "number": "",
        "pre": "改进绘图性能\r\n修复CS版条形码与二维码在前端更改大小后保存失效的问题\r\n改进排版性能\r\n修复CS版时间输入域不设置格式弹出数值控件报错的问题\r\n添加CS版的COM接口：WriterGetSignToolTipEventArgs、SignBySignImage、CanSignBySignImage、ClearCurrentSign接口\r\n修复WEB版日期输入域设置最大最小范围不验证的问题\r\n修复WEB版输入域换行光标问题\r\n修正CS版双击时产生选区但未collapse时导致的错误\r\n调整WEB版数值格式的输入域在移动端的输出字段\r\n修复时间轴数据点重合后自定义画点事件不触发的问题\r\n修正WEB版撤销操作仍会影响只读的问题\r\n修复WEB版前端打印带分页符的文档时打印内容多一空白页的问题\r\n修复WEB版前端打印文档出现偏移的问题\r\n添加WEB版后端加载文档失败取消返回前端弹框改成返回信息字符串并在前端控制台输出\r\n修改WEB版表格宽度为最大内容行内尺寸\r\n修复WEB版前端内容只读时复制无法拖选的问题\r\n修正WEB版一处报错的SETVALUE代码\r\n改进WEB版全局网格线的设置\r\n添加WEB版字体颜色和背景色的功能\r\n修改WEB版不能点击输入域的错误\r\n修复WEB版的一处判断错误\r\n修复WEB版IE上获取不到input的节点的问题\r\n修复WEB版输入域预览模式下输出层次错误的问题\r\n改进WEB版图片元素的一个错误\r\n改善WEB版打印预览时的内存泄露的问题\r\n修改WEB版联动下拉列表的一个问题\r\n修改WEB版一个隐藏元素输出的问题\r\n处理WEB版backspace键后输入域变成纯文本的问题\r\n处理WEB版回车生成空span的特殊情况，删除空span并重新赋值\r\n修正WEB版前端插输入域添加对模板工具导出的DictionaryID字段的支持\r\n修改WEB版高亮度相关的一个BUG\r\n修复WEB版有背景的空输入域在预览模式下被临时隐藏后多出空格的问题\r\n修复WEB版输入域下拉框弹不出来的问题\r\n修正WEB版表格alignment设成left后导致的一系列连锁问题\r\n改进WEB版打印模式下统一段落表格后方还有元素，添加br会导致空行的问题\r\n解决WEB版空输入域回车后光标消失问题\r\n调整WEB版前端插入分页符的代码以适应新情况\r\n调整WEB版分页符的解析代码以适应新的更改\r\n解决WEB版固定宽度输入域粘贴失效的问题\r\n改进CS版处理大表格时的性能\r\n解决WEB版标签之间的空格不显示问题\r\n解决WEB版普通文字输入域（非单选多选的）在没有值的情况下点击无法调出输入法的问题\r\n改进WEB版高亮度显示的性能问题\r\n修改WEB版空格显示的问题\r\n修复WEB版插入新单元格内多一空格问题\r\n修正WEB版纯文本空格转换\r\n改善WEB版对前端对输入域数据源绑定的处理与后端解析\r\n保留WEB版删除的换行符的样式\r\n调整WEB版代码在图片DELETE删除时Resize框立刻消失的问题\r\n修正WEB版360浏览器兼容\r\n修正WEB版输入域行间距\r\n修改WEB版设置元素不能删除导致的光标错误的问题\r\n修改WEB版单选框选中状态丢失的问题\r\n修正WEB版enter快捷键在各个输入域之间来回切换的操作逻辑\r\n修改WEB版单复选框的select方法，跳转到单复选框的label元素\r\n修正WEB版撤销不处理元素只读的代码逻辑\r\n解决WEB版粘贴word文字时的一个BUG\r\n修正WEB版页眉固定高度\r\n撤消WEB版操作排除对contentreadonly属性的处理\r\n优化WEB版输入域中插入文档的功能\r\n修正WEB版在有序、无序列表设置后继续增加列表项时清除p标签的功能。"
    },
    {
        "year": "",
        "time": "8月19日",
        "version": "",
        "number": "",
        "pre": "修改WEB版复制粘贴后样式变动的问题\r\n改进分页排版算法\r\n改进版权信息显示处理\r\n改进BS前端数据源绑定\r\n开放ComConvertToUserTrackInfo的COM接口函数\r\n改进WEB版的数据源绑定功能\r\n修改WEB版IE兼容性\r\n解决WEB版回车粘贴保存多出空行问题\r\n调整脚本引擎功能\r\n改进加载HTML文件的功能\r\n修改WEB版不可编辑区插入表格问题\r\n新增WEB版在指定输入域中插入xml的问题\r\n新增WEB版获取指定输入域内的xml的接口\r\n修复下划线样式由红色后改回黑色不起作用的问题\r\n解决WEB版多选下拉菜单选择勾选框无法选中选项\r\n增加CS版日期时间输入域编辑框检测域文本添加对域显示格式的支持\r\n修复COM下的一次异常问题\r\n修复COM接口中preloadsystem有可能引发的错误\r\n调整预加载用的文档\r\n新增COM下的ComPreloadSystem接口，用于异常测试\r\n修复WEB版MVC开发在iis回收时的注册码失效问题\r\n修复WEB版复选框校验问题\r\n修复生成xtextcontent的代码中某些边界条件的判断错误\r\n修复WEB版对表格、横线、文档节渲染编辑保存后破坏格式的问题\r\n调整xtextcontent生成与读取的代码\r\n改进脚本引擎\r\n改进WEB版BuildFrame接口功能\r\n改进DC-JQUERY功能\r\n改进PDF的输出\r\n改进CS的脚本处理\r\n调整xtextcontent生成的代码\r\n添加WEB版动态下拉列表属性的支持\r\n改进WEB版文档状态处理\r\n修复时间轴文本数据点颜色失效问题\r\n修复时间轴数据点Color属性失效的问题\r\n修复时间轴设计器控件单独使用时不能实时获取到CONFIGXML的问题，新增RuntimeConfigXML属性获取"
    },
    {
        "year": "",
        "time": "8月30日",
        "version": "",
        "number": "",
        "pre": "修复WEB版UseClassAttribute为True时处理表格元素挤出P段落时的错误\r\n解决CS版空输入域光标问题\r\n修改CS版保存PDF的一个图片错误的问题\r\n解决模板工具里设置元素不能删除，在B端能选中后可以删除的问题\r\n添加WEB版段前段后间距、段前缩进，字符边框的格式刷支持\r\n修改WEB版排版算法\r\n优化WEB版列表格式化\r\n调整WEB版输出表格后元素的代码的功能\r\n修改WEB版上边距设置\r\n修复WEB版预览模式下表格元素后有同段落元素导致预览错行的问题\r\n调整时间轴ABOUTCONTROL的代码\r\n注释WEB版一处导致预览视图下错行的CSS\r\n添加WEB版页边距、页眉页脚位置设置\r\n掩盖WEB版文档打开首次触发表达式时元素值写入但没有正确刷新的问题DCWRITER2782\r\n增加WEB版粘贴时统一空格的功能\r\n添加时间轴AboutControl功能，补充添加内核版本号的信息\r\n修复时间轴标题标签显示缺一块的问题\r\n调整时间轴输出日期格式的代码\r\n修复WEB版表格删除行问题\r\n优化WEB版动态下拉列表的功能\r\n优化CS版有无列表的功能\r\n修复WEB版表格元素在后端隐藏的情况下输出HTML数据不完整的问题\r\n解决WEB版有序、无序列表设置问题\r\n修改WEB版select标签不需要disabled设置的问题\r\n修改WEB版加载文档失败时异常信息处理\r\n改进WEB版HTML代码输出\r\n修复WEB版时间差计算函数在后端表达式输出模块更新后失效的问题\r\n修复WEB版输入域改变值后可见性表达式失效的问题\r\n修改WEB版输入域插入文字时的换行问题\r\n新增WEB版授权起搏器的功能\r\n优化WEB版前端病程接口\r\n改进WEB版表达式功能\r\n改进WEB版按钮元素\r\n优化WEB版输入域插入XML的功能\r\n改进WEB版分页算法"
    },
    {
        "year": "",
        "time": "8月19日",
        "version": "",
        "number": "",
        "pre": "修改WEB版复制粘贴后样式变动的问题\r\n改进分页排版算法\r\n改进版权信息显示处理\r\n改进BS前端数据源绑定\r\n开放ComConvertToUserTrackInfo的COM接口函数\r\n改进WEB版的数据源绑定功能\r\n修改WEB版IE兼容性\r\n解决WEB版回车粘贴保存多出空行问题\r\n调整脚本引擎功能\r\n改进加载HTML文件的功能\r\n修改WEB版不可编辑区插入表格问题\r\n新增WEB版在指定输入域中插入xml的问题\r\n新增WEB版获取指定输入域内的xml的接口\r\n修复下划线样式由红色后改回黑色不起作用的问题\r\n解决WEB版多选下拉菜单选择勾选框无法选中选项\r\n增加CS版日期时间输入域编辑框检测域文本添加对域显示格式的支持\r\n修复COM下的一次异常问题\r\n修复COM接口中preloadsystem有可能引发的错误\r\n调整预加载用的文档\r\n新增COM下的ComPreloadSystem接口，用于异常测试\r\n修复WEB版MVC开发在iis回收时的注册码失效问题\r\n修复WEB版复选框校验问题\r\n修复生成xtextcontent的代码中某些边界条件的判断错误\r\n修复WEB版对表格、横线、文档节渲染编辑保存后破坏格式的问题\r\n调整xtextcontent生成与读取的代码\r\n改进脚本引擎\r\n改进WEB版BuildFrame接口功能\r\n改进DC-JQUERY功能\r\n改进PDF的输出\r\n改进CS的脚本处理\r\n调整xtextcontent生成的代码\r\n添加WEB版动态下拉列表属性的支持\r\n改进WEB版文档状态处理\r\n修复时间轴文本数据点颜色失效问题\r\n修复时间轴数据点Color属性失效的问题\r\n修复时间轴设计器控件单独使用时不能实时获取到CONFIGXML的问题，新增RuntimeConfigXML属性获取"
    },
    {
        "year": "",
        "time": "7月31日",
        "version": "",
        "number": "",
        "pre": "改进XML输出\r\n调整XSD处理\r\n修复WEB版单选多选表达式联动效果的一处错误\r\n调整WEB版公式计算的代码\r\n修复WEB版有无列表的功能\r\n新增WEB版复制支持只读和编辑模式\r\n新增COM环境ComCallObjectMethod与ComSetObjectPropertyValue试图提供通用性的调用方法与设置值的功能\r\n增加WEB版EventBeforePaste和EventBeforeCopy中返回false时禁止粘贴/复制的接口\r\n修正WEB版表格单元格斜线不显示问题\r\n改进表达式引擎\r\n修复WEB版单选多选框在不设置NAME时点选不切图的问题\r\n解决医学表达式在B端加号不显示的问题\r\n改进WEB版的HTML编码\r\n修改WEB版交叉样式的单选多选框的点击逻辑处理\r\n改进脚本引擎\r\n后端绘制单选多选框新增交叉样式支持（前端未处理）\r\n增强CS版对JQuery的支持\r\n修复WEB版时间下拉框错误\r\n修改WEB版读取字符串值的一个BUG\r\n调整WEB版字符串资源\r\n改进WEB版解析HTML功能\r\n添加WEB版aboutcontrol对话框有关版本号、程序集的展示\r\n修复WEB版某些情况下出现找不到打印机的问题\r\n改进WEB版HTML读取器，优化加载HTML的功能\r\n修复WEB版选中其他元素，输入空格时没有删除其他元素的bug\r\n修改WEB版chrome,Firefox宋体下空格问题代码\r\n改进WEB版MVC下并发数的控制\r\n修复WEB版部分输入域换行光标问题\r\n修复CS版表格设置无边框后在前端打印出边框的问题\r\n修复WEB版输入域回车插入BR与后端冲突的情况\r\n改进WEB版的空格处理\r\n初步完成WEB版LoadDocument接收后端服务消息的功能\r\n修改CS版表格分页算法\r\n添加WEB版复制拦截事件\r\n新增WEB版subdocument的ID属性\r\n修复WEB版rome、Firefox宋体下空格问题\r\n新增WriterReadFileContentEventArgs.Message属性\r\n新增WEB版AboutControl（）方法\r\n调整时间轴的注册无效的问题\r\n修改有无列表值，可自定义实现\r\n新增WEB版多选单选框的样式图标资源文件\r\n解决 DCWRITER-2682 \r\n解决WEB版首行缩进出现问号的问题\r\n修复WEB版单元格斜线的不显示问题\r\n新增身份证验证功能\r\n调整SUMINNERVALUE公式的计算代码，若有值为空则按0计算\r\n修改输入域下拉框宽度随下拉项文字自适应的问题\r\n修改了jquery1.7.2对老版本Firefox的一个BUG\r\n增加属性值表达式(TextColor)支持嵌套if的功能\r\n调整WEB版html打印功能\r\n新增WEB版前端获取导航节点的接口\r\n新增WEB版心跳检测技术，解决并发数问题\r\n修改传入html打印文档是否关闭弹出式窗体的功能\r\n新增WEB版传入html打印文档的功能\r\n增加WEB版输出标题等级，文档导航功能\r\n完成WEB版对图片进行前端设置四周环绕的功能\r\n添加BS控件心跳功能\r\n暂时修改WEB版获取当前选中图片的功能\r\n修改XFontValue.RawFontIndex问题\r\n修改WEB版打印宽度与编辑宽度不符的问题\r\n添加WEB版解析后台文档图片四周环绕的功能\r\n改进BS的打印输出页面\r\n修复WEB版插入空格字符丢失的问题\r\n改进WEB版分页符的HTML输出\r\n添加数字选择框enter键确定功能"
    },
    {
        "year": "",
        "time": "6月28日",
        "version": "",
        "number": "",
        "pre": "改进WEB版打印预览的两端对齐样式\r\n修改PB下快速输入模式的问题\r\n添加插入元素到当前位置的COM接口函数\r\n修复WEB版固定宽度输入域排版问题\r\n解决WEB版空输入域直接粘贴文本时，光标处于左边的问题\r\n解决DCWRITER2672,改进快速录入模式下的行为\r\n修复WEB版固定宽度输入域在IIS上排版错乱的问题\r\n将WEB版关闭按钮下拉菜单移到下面，避免有下拉菜单的输入域粘贴到输入域开始位置\r\n修复WEB版表格中单选框取消选择后不减值问题\r\n修复WEB版动态加载项保存的功能\r\n修复CS版数值按照勾选时间保存的功能\r\n修复WEB版负宽度输入域的功能\r\n新增WEB版批量打印接口\r\n优化WEB版粘贴功能\r\n新增XTextDocument.StaticGlobalClearInnerBuffer()方法，改善内存占用情况\r\n改进WEB版实时留痕功能\r\n修复WEB版粘贴时不能删除原本节点的问题\r\n添加WEB版动态加载列表属性，并根据其加载动态下拉列表事件\r\n优化WEB版复选下拉项全选的逻辑代码\r\n调整WEB版处理粘贴的代码\r\n修复一处错别字的错误\r\n调整WEB版处粘贴的逻辑代码修复只粘贴文本多空行的问题DCWRITER2660\r\n改进WEB版文档对比算法\r\n新增输入域多选下拉项添加全选全不选的功能\r\n新增WEB版dc_checkedvalue接口，接口获取单个单复选框的选中值的BUG\r\n改进WEB版文档对比算法\r\n修复当输入域为空，光标定位输出格式为日期格式，下拉框转变成日期格式的问题\r\n新增WEB版多文档合并成一个预览HTML的功能\r\n新增数据源绑定生成打印HTML的功能\r\n修复一处为空判断的错误\r\n修复单选框取消勾选不减值的问题\r\n修复WEB版上传图片，光标移动到图片后的问题\r\n新增WEB版输入域单击激活的接口\r\n修复WEB版粘贴时删除选中节点的问题\r\n修改WEB版获得元素的内部的纯文本的接口\r\n调整公式JS代码\r\n新增SUMINNERVALUE公式支持输入域与多选框，包含B端和C端\r\n新增WEB版单(复)选框自定义外观的接口\r\n新增WEB版SUMINNERVALUE公式\r\n修改WEB版单选框无法选中的问题\r\n新增WEB版逻辑删除的功能\r\n修复单元格再次设置数值表达式FormulaValue属性表达式不更新的问题\r\n改进WEB控件的线程处理\r\n新增WinFormOnly项目\r\n修复单元格合并情况下的四边框前端绘制的又一问题\r\n改进XTextTableCellElement.GetBottomVisibleCell（）接口\r\n修改XTextTableCellElement.GetRightVisibleCell（）的错误\r\n调整判断符号的代码\r\n修正表达式中含有特殊字符时，等号被替换成双等号导致JS语法出错的问题\r\n添加WEB版事件，实现批注编辑界面自定义\r\n修复WEB版表格合并单元格保存边框画线异常的问题\r\n修改CS版样式命令无效的问题\r\n修复WEB版打印模式下固定行高时图片校正的问题\r\n更改表达式数组的值的处理\r\n新增CS版SUMFIELDVALUE表达式，用于计算给定下拉输入域的选中下拉项的值的和\r\n更新REGEN功能\r\n修改WEB版格式刷功能，添加记录行间距样式\r\n调整WEB版水平线后元素保存少段落的代码\r\n修复WEB版判断水平线后若没有段落符号的问题，避免HTML下解析出现问题\r\n优化WEB版输出字符串代码（单独分拆输出背景文字的代码）\r\n新增WEB版根据XML获取HTML的功能\r\n修复WEB版单选框选择的问题\r\n解决WEB版符号列表保存重复的问题\r\n调整STRING代码\r\n修复WEB版input标签存在开始符或结尾符时添加左右边框线的问题\r\n修复WEB版BS版控件乱序打印功能\r\n修改WEB版打印输出\r\n改进WEB版对P元素的解析\r\n增加GetRuntimeScript接口对xtextdocument参数不为空的判断\r\n修改生成大PDF的问题\r\n修改WEB版中多出空格的问题\r\n添加属性值表达式TextColor\r\n修复WEB版创建表格与删除表格列后保存再加载列宽不对的BUG\r\n修复WEB版空格输入域光标顶头输入中文字符时留下英文字符的BUG：DCWRITER2618\r\n改进生成PDF的功能\r\n修改获取选中节点的接口\r\n修改DCWRITER2619中文档使用space-between与inline-break导致排版错误\r\n修复WEB拆分InsertTable函数\r\n新增WEB的CreateTable函数，接收参数返回一个HTML TABLE对象\r\n修复WEB版输入域在有固定宽度，内容远超过固定宽度时，输出到编辑模式下的BUG\r\n修改WEB版获取字体大小和名称的接口\r\n"
    },
    {
        "year": "",
        "time": "5月31日",
        "version": "",
        "number": "",
        "pre": "修改WEB版文本标签删除属性无效的问题\r\n修改WEB版图片无法选中的问题\r\n修复WEB版表单模式下下拉框无法选择的BUG\r\n增加模板工具标准元数据中，对于数据源绑定属性的赋值接口\r\n修改模板工具绑定路径名称的错误\r\n修复WEB版计算时间差的函数的BUG\r\n修改插入单、复选框默认样式\r\n改进对RTF格式文档的处理\r\n添加模板工具拖拽标准数据元中数据源、绑定路径属性接口\r\n添加一处为空的判断\r\n修改WEB版MINUTEDIFF公式\r\n修改WEB版文本标签样式保存"
    },
    {
        "year": "",
        "time": "5月29日",
        "version": "",
        "number": "",
        "pre": "新增WEB版前端插入表格的参数对象，可传入表格编号\r\n添加EventBeforePaste事件 客户可处理剪贴板内容\r\n修改WEB版单、复选框背景色显示的问题\r\n修改WEB版简单级联的功能\r\n添加WEB版乳牙医学表达式\r\n修正WEB版在FIREFOX下一处为空的判断\r\n改进WEB版回车处理\r\n调整WEB版JS代码\r\n调整WEB版前端输入域的JS\r\n新增WEB版前端使用的表达式HOURDIFF与DAYDIFF，用于计算两个时间差的天数与小时数\r\n改进WEB版黏贴功能\r\n新增WEB版表达式\r\n改进WEB版编辑时的界面\r\n添加WEB版单选框自定义属性\r\n删除WEB版的console代码\r\n调整WEB版页眉页脚代码，以后HeaderFooterEditable为FALSE时不保存任何更改的值的问题\r\n新增COM接口ExtGetPropertyValue()/ExtSetPropertyValue()\r\n修改WEB版控件页眉的问题\r\n修改WEB版字号、字体名称、清除字体、字号\r\n添加WEB版取被选中的所有节点\r\n修改WEB版中首页页眉的编辑问题\r\n改进WEB版中黏贴WORD内容的行为\r\n添加WEB版插入base64XML接口\r\n新增一个STYLE样式\r\n修复WEB版首页眉页脚显示问题，在单页多页、有无首页眉页脚、有无其它页眉页脚、headerfootereditable为true或false、以及使用setelementbyid设置页眉中值的情况下均已通过测试\r\n删除WEB版重复属性\r\n修复WEB版当HeaderFooterEditable为false的时候不输出首页眉页脚以及使用SetElementTextByID更改值不保存的问题\r\n改进WEB版输入域的JS\r\n调整WEB版的JS\r\n新增WEB版获取当前字体大小的接口\r\n修改WEB版字体大小的接口\r\n修改WEB版前端插入简单级联、部分可见性表达式的接口\r\n改进文档内容对比功能\r\n添加WEB版获取Base64字符串的接口\r\n添加WEB版加载Base64字符串的接口\r\n改进WEB版对输入域边框的处理\r\n修复WEB版光标打到输入域结束字符右侧直接回车后复制一个域的问题\r\n新增WEB版属性，控制打印完毕后是否自动关闭打印窗口\r\n修改WEB版中页眉元素下划线的问题\r\n改进WEB版对段落的处理\r\n改进WEB版打印\r\n精简WEB版前端表格单元格网格线的HTML输出\r\n改进WEB版的打印功能\r\n修改WEB版页眉上在输入域加上下边框不起作用\r\n调整XSD的生成\r\n改进WEB版控件SetElementTextByID()\r\n改进WEB版的打印预览\r\n新增WEB版SetTableRowCrossPage函数，用于设置表格行是否跨页\r\n改进WEB版控件对空格的处理\r\n删除WEB版多余的代码\r\n修改WEB版字体大小和字号\r\n选择区域添加为空的判断\r\n取消粘贴时的空格替换\r\n修改WEB版保存XML时特殊空格字符的处理\r\n更新演示程序\r\n改进CS编辑器扩展功能区\r\n调整WEB版JS代码对页眉页脚元素ID的引用\r\n修改WEB版首页眉页脚输出代码\r\n添加WEB版输入域样式：时间格式\r\n解决WEB版粘贴空格问题\r\n改进WEB版页脚输出\r\n调整首行缩进的排版算法\r\n改进XTextContainerElement.Text属性\r\n改进WEB版对空格的处理\r\n新增WEB版ChangeDocumentSettings()功能\r\n去除WEB版的冗余的debugger断点\r\n改进WEB版文档批注功能\r\n新增WEB版HeaderFooterEditable属性，用于控制能否编辑页眉页脚\r\n修复一处为空判断\r\n添加com接口\r\n设置WEB版多选下拉框\r\n添加WEB版获取所有病程记录及病程记录定位的接口\r\n改进WEB版HTML代码输出\r\n调整WEB版数据源绑定\r\n添加获取单选框/复选框接口\r\n修改了一个缓存图片导致的问题\r\n修复WEB版的innerText的错误，前端JS处理不完善会导致错误\r\n调整HTML代码生成\r\n修改边框打印可见性和颜色接口\r\n修改下拉列表时间排序属性\r\n设置边框打印可见性和颜色\r\n修复WEB版前端输入域格式化字符串的问题\r\n调整WEB版输出格式化列表字符串的代码\r\n修复WEB版前端插输入域不指定tooltip时提示显示undefined的问题\r\n修正WEB版前端TAB添加表格行后的空单元格内多一空格的问题\r\n解决DCWRITER2409\r\n新增WEB版格式刷功能，新增BeginFormatBrush()接口\r\n开放com接口：SaveDocumentsToImgPDF、SaveDocumentsToPDF\r\n调整WEB版页码功能分级\r\n调整WEB版任务栏进度条判断可用性的代码\r\n改进文档内容对比算法\r\n修改WEB版的功能，将输入域的格式化列表字符串写到前端\r\n添加WEB版的dc_innertext、dc_innvervalue属性，将设置的文本保存进dc_innertext\r\n修改了DCWRITER-2548.改进网格线时的排版算法\r\n新增WEB版的打印预览中添加保存PDF、保存图片PDF接口\r\n调整WEB版输出前端分页符的代码\r\n改进XML序列化功能\r\n"
    },
    {
        "year": "",
        "time": "4月30日",
        "version": "",
        "number": "",
        "pre": "添加WEB版插入单选复选框命令\r\n更新COM接口，改进表格线绘制\r\n修改表格绘制网格线的功能\r\n调整WEB前端时间轴处理跨域的代码\r\n修复WEB版表达式中对不等于号“<>”以及“!=”的支持\r\n修正WEB版前端空单元格里多一空格的问题\r\n修改WEB版背景色的功能\r\n修改WEB版插入xml接口\r\n修改WEB版插入按钮、单选框等功能\r\n修正WEB版新增JS文件的生成方式\r\n新增WEB版专用于处理前端表格的JS\r\n修复WEB版输入域挤到下一行后前端再次赋值导致出现两个输入域的问题DCWRITER2526\r\n调整WEB版的后端生成前端页眉HTML的代码\r\n修改WEB版前端插入xml接口\r\n修改WEB版前端获取所有输入域接口\r\n添加WEB版前端显示首页眉页脚的后端代码\r\n添加WEB版插入XML及病程记录的接口\r\n添加WEB版获取所有输入域的接口\r\n修复WEB版直接空格后加元素保存不到后端的问题\r\n调整WEB版字符串压缩空格的行为\r\n修复WEB版前端加载文档后预览界面下输入域显示长度变短的问题\r\n调整WEB版的前端两端对齐的设置DCWRITER2524\r\n新增WEB版DialogPosition属性，用于前端修改弹出对话框的position属性\r\n暂时修改WEB版的页眉页脚前端编辑值保存到后台多一空行的问题\r\n新增WEB版命令insertpagebreak\r\n改进WEB版跨域调用\r\n改进扩展信息功能\r\n改进编辑器包含扩展控件功能\r\n新增WEB版的dc_borderstyle接口，用来单独在前后端传递边框信息数据\r\n修改WEB版的打印预览样式的问题\r\n改进WEB版的缓存功能\r\n修复WEB版的单元格网格线没有在前后端同步保存的问题\r\n改进WEB控件缓存的处理\r\n改进WEB版中编辑页眉页脚的域值在后台无法保存的问题\r\n改进WEB版缓存处理\r\n修改WEB版前端保存页眉页脚的问题\r\n添加WEB版的分数医学表达式\r\n修改WEB版的1.5倍行距问题\r\n修改WEB版的logo和遮罩position\r\n改进WEB版的EventAfterPrintPreview事件\r\n改进WEB版的EventAfterPrintPreview事件\r\n调整WEB版的LoadPrintPreview接口\r\n实现WEB版的下拉框按照勾选时间排序\r\n修复WEB版的批注日期月份显示少一月的问题\r\n修复WEB版的输入域前端格式化字符串显示不正确的问题\r\n修改WEB版的级联保存问题\r\n解决WEB版的段落格式的浏览器兼容问题\r\n修改WEB版的段落格式\r\n新增WEB版的EventAfterPrintPreview事件\r\n新增WEB版的EventBeforePrint事件\r\n新增WEB版的SelectionHtml接口\r\n改进WEB版的LoadPrintPreview函数\r\n改进WEB版的SetElementText()功能\r\n修改WEB版在IE9的残影不及时消除的问题\r\n修复WEB前端打印页面不显示首页眉页脚的问题\r\n改进WEB版文档批注功能\r\n添加WEB版前端命令dcinsertimagefromlocal，用于本地直接选择图片插入，由二次开发自定义调用\r\n改进WEB版文档批注功能\r\n修改WEB版遮盖面板偏移的问题\r\n开发WEB版文档批注功能\r\n解决WEB版在IE续打无法打印问题\r\n解决WEB版在火狐内核无法续打的问题\r\n修改导出PDF的一个错误\r\n修改WEB版首行缩进无法保存问题\r\n改进WEB版文档批注相关的前端JS代码\r\n修改WEB版在IE兼容模式下的一个TAB键错误\r\n修复WEB版跨域的一处为空判断BUG\r\n新增WEB版的CrossDomainSettings属性，用于操纵一系列跨域输出行为\r\n",
    },
    {
        "year": "",
        "time": "3月31日",
        "version": "",
        "number": "",
        "pre": "修改WEB版级联无法保存问题\r\n改进WEB版编辑器\r\n改进WEB版属性设置\r\n改进WEB版对IE9的处理\r\n添加WEB版获取输入域值的方法\r\n添加WEB版修改输入域值和文本的方法\r\n修改WEB版行间距保存无效问题\r\n修改WEB版打印预览数据丢失的错误\r\n修改时间轴，防止TickStep被设成1以下的数导致绘图逻辑错误\r\n修改WEB版居左、中、右的问题\r\n修改WEB版背景色的问题\r\n修改WEB版上下标字体大小的问题\r\n修改WEB版请求格式\r\n修改BS段落设置居左、居中、居右无效的问题\r\n修改BS段落背景色设置无效的问题\r\n修改BS上下标字体太大的问题\r\n修改BS跨域支持\r\n改进BS版的批注功能\r\n改进注册码生成器\r\n修改前端RemoveFormat命令还原为清除格式\r\n新增前端RemoveFontFamily代替原先清除字体的的函数\r\n改进网格线的HTML输出\r\n前端LoadDocumentFromString函数也添加自动保存功能\r\n修复前端自动保存功能\r\n前端FileNew命令新增清除页眉页脚\r\n修改了一个AJAX保存的错误\r\n新增控件的GrayingDisabledHeaderFooter属性\r\n调整自动保存的JS代码\r\n新增XTextDocument.JavaScriptTextForWebClient属性\r\n初步修改恒牙牙位图\r\n将医学表达式的前端数据传输从JSON格式整成字符数组格式已便于兼容低版本的IE\r\n添加插入医学表达式命令\r\n改进WEB版控件对跨域的行为\r\n修复时间轴文档对象的EventAfterDrawDocument事件不触发的问题\r\n时间轴文档添加EventAfterDraw事件，用于适配打印与导出图片的后处理\r\n改进WEB控件跨域调用的问题\r\n初步解决WEB版时间轴跨域访问的问题\r\n改进前端JS输出\r\n修改来一个类型转换对错误\r\nWEB版时间轴前端新增FileNew函数用于清空文档内容\r\n上传WEB版时间轴的前端接口文档\r\n改进文档对比功能\r\n修复前端加载文档的一个BUG\r\n改前端对IE8的支持\r\n前端在输入域不显示的时候避免访问parentNode属性\r\n改进XML生成\r\n改进编辑器UI\r\n修改了BS版快捷菜单的功能\r\n调整createRange兼容IE8的代码\r\n改进自动保存机制\r\n上传clientcontextmenutype的接口\r\n兼容IE8下的createRange函数调用失败的问题\r\nIE8下取消数字输入域的录入限制避免兼容性问题\r\n改进浏览器中空白字符宽度的判断\r\n页眉添加ID属性\r\n时间轴数据点添加OwnerPageIndex属性\r\n时间轴EventAfterRefreshView事件开放Graphic对象用于支持客户后期自定义重绘\r\n改进HTML解析\r\n改进了对简体中文语言环境的支持\r\n更新打印相关事件\r\n改进对IE8的支持\r\n时间日期选框添加获取焦点就全选的特性\r\n修改了一个FileSave中的一个错误\r\n前端插入输入域新增设置BorderElementColor属性\r\n调整时间轴代码开放EventDrawValuePointSymbol事件的COM接口\r\n修复前端插入输入域添加Attributes属性的功能\r\n修改了WEB控件在IE8的一个BUG\r\n改进文档脚本引擎功能\r\n新增ComCreateWatermarkInfo的COM接口用于创建水印对象\r\n修改了MVC中注册码无效的问题\r\n修复旧版医学表达式文本为NULL的错误DCWRITER2398\r\n时间轴新增在NewSerialDate类型下的首页首日期、跨年日期、跨月日期、其它页首日期、跨星期日期格式的自定义，优先级从左到右\r\nWEB版时间轴前端JS新增前端直接加载和保存文档的功能\r\n改进WEB控件的资源输出功能\r\n改进文档对比留痕功能\r\n修复一个小BUG\r\n改进BS控件对IE8的支持\r\n"
    },
    {
        "year": "",
        "time": "2月28日",
        "version": "",
        "number": "",
        "pre": "改进BS控件的脚本\r\n改进脚本代码编辑器\r\n更新COM接口\r\n完成了WEB版时间轴前端纯DIV+JS的框架\r\n改进PDF的输出功能\r\n上传DCWRITER2374修改\r\n编辑器控件新增InnerSetShowPBDCST方法\r\n上传DCWRITER2378问题\r\n改进文档对比算法\r\n修正拼写错误，至此初版WEB时间轴的接口函数基本没问题了\r\n调整WEB时间轴代码将HTML的图片内容区域单独放在一个DIV内\r\n新增ComGetSelectionStartPositionX、ComGetSelectionStartPositionY接口\r\n新增ComGetSelectionStartPositionX、ComGetSelectionStartPositionY接口\r\n修改了一个授权不足的显示错误\r\n改进CONTROLHOST功能\r\n修复画文本点错误的BUG：TIMELINE375\r\n改进并发数授权判断\r\n改进文件状态\r\n调整时间轴代码结构\r\n修复WEB版时间轴前端从分页视图切换到时间轴视图时图片不顶格的问题\r\n改进扩展信息栏功能\r\n改进对JQUERY的支持\r\n编辑控件新增列表栏功能\r\n"
    },
    {
        "year": "",
        "time": "1月31日",
        "version": "",
        "number": "",
        "pre": "WEB时间轴前端添加SetRegisterCode函数\r\n修正WEB版时间轴单独加点不刷新图片的问题\r\n修改一个空引用报错\r\n窗体资源文件添加\r\n属性窗体添加资源文件\r\n医学表达式添加资源文件\r\n重写前端的RefreshView函数\r\n字符串资源化\r\n修改插入输入域焦点问题\r\n修改插入图片焦点问题\r\n修改插入字符焦点问题\r\n解决DCWRITER2306\r\n更新文档问题\r\n修正RefreshView函数且功能函数新增同步异步调用参数\r\n处理DCWRITER2323,新增纯WEB版编辑器的自定义下拉列表内容\r\n改进WEB控件的UNDO/REDO的JS\r\n修改时间格式校验问题\r\n修改NSOControl的输入法控制\r\n改进WEB控件的UNDO/REDO的JS\r\n修改时间格式校验问题\r\n修改DCWRITER-2344的输入法控制。\r\n改进WEB控件的UNDO/REDO功能。\r\n修改了一个JS错误\r\n恢复旧版代码保存对旧版客户端的兼容性\r\n规范JS代码\r\n调整WEB时间轴的代码架构并新增前端loaddocument与savedocument函数\r\n初步实现WEB编辑器的UNDO/REDO功能。\r\n添加JQuery选择器\r\n新增对页眉小标题多行模式下的竖向对齐控制\r\n改善时间轴标题标签对多行文本的处理\r\n调整HeaderLabelInfo的文本出现换行符时的处理\r\n调整WEB版时间轴释放JS的方式\r\n新增WEB控件文档对比功能。\r\n开始开发WEB编辑器的UNDO/REDO功能。\r\n修复TEXT画刻度线问题\r\n修改了DCWRITER2282\r\n修改DCWRITER2300,新增XPageSettings.SwapGutter属性。\r\n改进WEB版注册码管理。\r\n修改DCWRITER-2335,DCWRITER-2317\r\n调整加载HTML的功能。\r\n改进打印功能\r\n改进代码文档注释的功能\r\nTIMELINE364:修复了TICK刻度线没画的问题\r\n改进脚本引擎，新增文档和控件的ExecuteScriptMethodXXX()函数。\r\n修改了DCWRITER-2314\r\n修改DCWRITER-2247\r\n添加WEB取消单选框事件\r\n调整文档留痕对比功能。\r\n屏蔽自动保存功能\r\n添加对JSON操作库的引用\r\n改进脚本DCJQuery功能，增强window对象的功能。"
    },
    {
        "year": "2018",
        "time": "12月31日",
        "version": "",
        "number": "",
        "pre": "改进FW的数据库管理。\r\n修复WEB时间轴左侧小图片显示有误的问题，现在同时兼顾时间轴视图下的固定位置同时不影响页面模式下显示\r\n调整文档对比功能\r\n修复HtmlPreviewExt命令，生成文件错误的问题。\r\n调整文档合并功能。\r\n改进粘贴时的操作。\r\n改进DCJQuery功能。\r\n修复WEB时间轴左侧固定图片高度计算不正常的问题\r\n修复左侧固定图片的Y轴位置不对的问题\r\n先修复WEB时间轴左侧标题栏固定图片的宽度计算错误的BUG\r\n改进DCWriter的脚本功能，开始支持JQuery语法。\r\n新增DCJQuery功能。\r\n调整脚本引擎\r\n改进文档对比功能。\r\n数据存储框架图修改\r\n开发文档对比功能。\r\n配置管理器文档修改\r\n修复时间轴了当出现Y轴合并时，数据标题行的标题宽度大于Y轴总宽时修正Y轴刻度尺坐标时的计算错误\r\n数据存储文档修改\r\n新增COM接口函数SaveDocumentsToPDF用于在COM环境下保存文档列表到PDF\r\n配置管理器开发文档\r\n数据存储开发文档\r\n添加脚本引擎文档\r\n改进文档对比算法。\r\n修改DCWRITER-2318,修改了文档排版结果的一个兼容性问题，新增BehaviorOptions.SetParagraphFlagHeightUsePreElement进行兼容性设置。\r\n完善文档对比留痕的功能。\r\n修改插入输入域时如果有换行符就插入无效的问题\r\n修改MVC下resize无限触发问题\r\n新增数组精确对比功能模块。\r\n时间轴控件新增showCrossLine属性控制是否显示十字线\r\n新增编辑器控件SetGlobalJavaScript()函数。\r\n上传表达式引擎文档\r\n修改了DCWRITER2311。\r\n改进对PDF的支持。\r\n调整特殊竖行文字绘制时的横坐标偏移问题\r\n添加ValuePoint.UseAdvVerticalStyle开关用来打开文本数据点在竖直绘制时特殊处理单个字符数字的功能\r\n修复时间轴打印时设置缩放大小不起作用的问题TIMELINE358\r\n改进BS版并发数的判断\r\n调整DocumentPrinter的COM接口。\r\n改进WEB版对并发数的判断。\r\n修改字体大小无效问题\r\n修改了BS版注册码的一个控制。\r\n改进打印功能。\r\n改进FW的脚本引擎\r\n在B/S前端编辑器新增ReleaseSession函数用于触发后台CleanCurrentSessionTakeUp函数\r\n上传ReleaseSession的WEB命令文件\r\n重新修改表达式计算判断按值还是按文本的逻辑代码DCWRITER2288\r\n改进授权生成器\r\n新增释放HTTP并发数份额的方法\r\n实现中标接口EnableKey/DisableKey为开启/禁用编辑器命令快捷键的功能\r\n修改DCWRITER-2298，WEB控件新增RegisterTitle属性。\r\n改进脚本引擎，改进测试程序。\r\n修改粘贴的空行问题\r\n修正IF函数与LOOKUP函数\r\n修复并扩充LOOKUP表达式函数的功能并通过测试\r\n当重叠点出现时将数据点图例样式设置成自定义，让客户自己去绘制改进脚本引擎\r\n增强版权声明\r\n改进DCJQuery功能。\r\n数据存储添加介绍\r\n调整文档合并功能。"
    },
    {
        "year": "",
        "time": "11月30日",
        "version": "",
        "number": "",
        "pre": "修改DCWRITER-2265，\r\n改进表格HTML输出的效果。\r\n修改web控件粗体斜体问题\r\n新增web控件自动保存功能\r\n修改DCWRITER2205\r\n修改了DCWRITER-2238 单选框保存后文本字体格式改变\r\n修改了DCWRITER-2242 模版设置字体格式纯表格填写内容时会变为编辑器默认\r\n修改插入列超出边缘问题\r\n修改了复制PDF内容的错误。\r\n改进对ORALCE的支持。\r\n修改移动端不能滚动问题\r\n调整FW增强打印功能。\r\n上传FW表达式单元测试函数\r\n改进FW的表达式管理器\r\n改进FW中的ORM\r\n媒体元素解锁更多格式的支持\r\n改进缩放打印时的处理。\r\n改进打印时自动适应纸张大小的功能。\r\nLoadDocumentFromString方法添加等待界面\r\n添加对区域选择打印按钮可见性的控制属性\r\n纯JS控件客户端加载保存文件字符串功能\r\n将时间轴的Y轴文本数据点背景色调成透明色以免遮盖正常的数据点\r\n实现对NORMAL类型的数据行的自动行高的功能TIMELINE307\r\n修改横向打印问题\r\n修改DCWRITER-2270,改进前端JS\r\n修改自动保存功能\r\n修改在文档末尾换行保存后再次加载出现的空行问题\r\n修改了DCWRITER-2212,DCWRITER-2268\r\n修改打印选项\r\n修改DCWRITER-2265，改进表格HTML输出的效果。\r\n修改粗体斜体问题"
    },
    {
        "year": "",
        "time": "10月31日",
        "version": "",
        "number": "",
        "pre": "修改了分页符导致网格线显示不全的问题。\r\n修改了DCWRITER-2225,调整了TAB符号在BS中的输出结果。\r\n修改纯文本模式下的空行问题\r\n修改页眉元素id缺失，DCWRITER-2220\r\n修改DCWRITER-2245，\r\n改进BS中表格单元格边框的输出。\r\n解决了TIMELINE-343，\r\n调整了段落符号元素大小计算方式。\r\n改进日期输入域的输入动态效果\r\n修改插入输入域报错问题\r\n修改TIMELINE317\r\n修改JS中运算单复选框组的表达式。\r\n新增BS控件SaveDocumentToFile()方法。\r\n新增Obfuscation特性防止XML序列化失败\r\n改进XML序列化判断。\r\n开放XPageSettings.StrictUsePageSize的COM接口\r\n新增ValuePoint.RuntimeVerticalLine属性，修改TIMELINE312\r\n调整画点行为，修改TIMELINE338\r\n修复标签元素在B/S前后端转换时丢失Width和Text的问题DCWRITER2183\r\n修复B/S前端保存表格内部分内容后列宽信息丢失的问题DCWRITER2218\r\n前端选中一行以上表格行并保存的问题已经解决，但只选中一行的还有问题\r\n修改了DCWRITER-2221\r\n修改了DCWRITER-2225\r\n修改DCWRITER-2225,\r\nDCWRITER-2226\r\n修复可见性表达式保存后失败的问题DCWRITER2228\r\n改良了DCWRITER2125,\r\n修改了DCWRITER-2206,DCWRITER-2216\r\n修改了鼠标滚动导致下拉列表消失的问题。\r\n修改合并拆分单元格时的错误提示\r\n改进HTML生成代码。\r\n修改输入域报错问题\r\n修改纯文本空行问题\r\n改进BS控件中医学表达式的行为。\r\n修改了一个脚本引擎的错误。\r\n改进BS控件的代码结构。\r\n改进WEB控件代码结构\r\n修复了时间轴ExportImg导出图片时自定义文本框选择的问题（TIMELINE345）\r\n调整WEB服务器端代码。\r\n修改DCWRITER-2189\r\n改进移动版BS控件\r\n修复NormalHTML呈现模式下加载文档报错的问题（DCWRITER2202）\r\n添加自定义数据源属性\r\n修改DCWRITER2191\r\n改进二进制序列化标记。"
    },
    {
        "year": "",
        "time": "9月30日",
        "version": "",
        "number": "",
        "pre": "修改了DCWRITER-2165。\r\n改进关于对话框。\r\n改进WEB控件处于表单模式下的行为。\r\n改进注册码文件的加载模式。\r\n修复当访问器函数被混淆成纯数字时某个处理动作造成的问题。\r\n改进WEB控件。\r\n改进BS控件对TR高度的输出控制。\r\n新增BS控件CustomCSSString属性。\r\n改进BS控件对IE7的支持。\r\n改进网格线的分页排版算法。\r\n改进二进制序列化标记\r\n修改BS粘贴纯文本出现的空行问题\r\n修改DCWRITER-2171\r\n修改DCWRITER-2167\r\n公开PowerDocumentGridLine的COM接口\r\n修改图片边框\r\n修改图片外边框定位\r\n修复表格边框问题\r\n客户端控件新增DownLoadFile()\r\n改进表格排版。\r\n改进数值表达式引擎\r\n改进文档全局网格线的功能。\r\n正在改进表格数据源绑定功能。\r\n开放时间轴控件ExportImg的COM接口\r\n修改不能插入输入域的问题\r\n初步完成内置数据源功能。\r\n改进数据源绑定功能\r\n开放ValuePoint.CharacterForCharSymbolStyle的COM口\r\n时间轴小标题添加自定义的分隔符\r\n改进FW的数据库处理\r\n修改DCWRITER-2178\r\n上传导出PDF时隐藏所有不打印背景且不保留背景位置的输入域的代码逻辑\r\n改进FW的加载用户信息的方式\r\n修复XPageSettings从文档复制到页面设置时漏掉的PowerDocumentGridLine属性\r\n屏蔽console.log()方法IE8不兼容这个方法\r\n改进FW中的ORM\r\n改进文档批注定位功能。\r\n改进文档注释代码。\r\n修改COM函数到XE下\r\n改进DCWRITER-2169\r\n新增控件的ReflectionXXXX()方法。"
    },
    {
        "year": "",
        "time": "8月31日",
        "version": "",
        "number": "",
        "pre": "改进BS版编辑器对手机的支持。\r\n修改了一个数值运算表达式的错误。\r\n屏蔽ctrl+z功能。\r\n新增XTextContainerElement.LimitedInputChars属性，可以限制输入的字符。\r\n修改DCWRITER-2151,DCWRITER-2148。\r\n修改DCWRITER-2147,DCWRITER-2142。\r\n改进BS版续打功能。\r\n改进页眉页脚功能。\r\n改进对ASP.NET MVC的支持。\r\nDCWRITER2148：掩盖某文档加载后选中表格直接复制命令报错的问题。\r\n将WEB控件的ReferencePath修改成ReferencePathForDebug。\r\n改进WEB控件对JS的引用模式。\r\n修正PrintBackColor的报错问题。\r\n增加BS版自动换行模式。\r\n新增DocumentComment.AnchorElementFocus()、AnchorElementText成员并COM开放。\r\n更新追加readonly模式。\r\n修复后端切换表单模式属性时失效的问题。\r\n解决DCWRITER-2124。\r\n改进BS版对输入域的操作用户体验。\r\n调整COM接口。\r\n调整string.IsNullOrEmpty()的调用。\r\n改进WEB版JS。\r\n修改自动缩放模式下firefox里面的显示问题。\r\n修改firefox下图片选中时的问题。\r\n修改DCWRITER-2123,改进了文档节显示行号的功能。\r\n修改WEB前端拖拽的JS。\r\n解决DCWRITER-2125.新增WEB客户端方法SetRegisterCode(),SetRegisterCodeIndex()。\r\n修改时间轴的一个空引用错误。\r\n修改了两个空引用的错误。\r\n改进WEB控件编辑功能。\r\n完成Web控件AutoZoom功能。\r\n新增BS控件的ClientContextMenuType属性，可自定义添加右键快捷菜单。\r\n调整时间轴AfterRefreshView事件的触发判断，确保每次刷新后都能触发。\r\n修改HtmlPreviewExt预览命令。\r\n修改 DCWRITER-2089,DCWRITER-2094。\r\n修改了隐藏表格行导致的插入点移动错误。\r\n修改了一个文档内容排版的一个错误。\r\n修改了一个DateTimeService相关的一个错误。\r\n对于BS版编辑器的FileSave命令，新增ServerMessage属性。\r\n修改了一个光标定位的错误。\r\n改进编辑器的一些底层功能。\r\n修改IE嵌控件的一个BUG。改进JS功能。\r\n修改对前端医学表达式资源文件的读取URL\r\n改进错误提示方式。\r\n改进对ASP.NET UpdatePanel的支持。\r\n修改DCWRITER-2112（表格行设置为不允许跨页时的一个排版算法改进。)\r\n修改 DCWRITER-2111 , DCWRITER-2106,DCWRITER-2103。\r\n正在添加预览视图大小的功能。\r\n改进内容排版算法。\r\n改进可见性表达式执行过程。\r\n改进数值表达式引擎。\r\n修复ASP.NET按钮中改变编辑器属性后页面中首次加载失效的问题。\r\n改进授权控制。\r\n彻底修复文本数据点顺序错误的问题，重新打开数据点重合自动排版的功能。\r\n修改了一个加载注册码的一个验证错误。"
    },
    {
        "year": "",
        "time": "7月31日",
        "version": "",
        "number": "",
        "pre": "时间轴数据点图标新增Custom样式，在时间轴的DrawValuePointSymbol事件中自己绘制。\r\n修改打印预览可配置是否最大化显示。\r\n上传新增的事件代码文件。\r\n调整字符串为空的判断方式。\r\n改进HTML书写器。\r\n调整定时器的执行方式。\r\n改进表达式的执行性能。\r\n改进查询元素状态的性能。\r\n修复了时间轴Y轴合并后单击不隐藏数据点的BUG\r\n改进在大量表达式执行情况下的性能问题。\r\n改进JS的兼容性。\r\n改进BS控件对文档元素编号的处理。\r\n更新开发者工具。\r\n时间轴标题数据行新增Visible属性与VisibleWhenNoValuePoint属性，用于强行控制是否可见以及控制在当前页没有数据点时是否可见\r\n上传内部日志模块。\r\n改进内部错误提醒模式。\r\n开发列表图形对象。\r\n在前端JS控件新增FocusAdjacent(sWhere,element)函数。\r\n新增XPageSettings.StrictUsePageSize属性。\r\n改进了开发者工具。\r\n改进表单模式中的插入点修正不准确的问题。\r\n部分修改了IE中输入域背景文字无法及时去掉的问题。\r\n改进纯JS控件其他功能。\r\n改进纯JS控件打印预览功能。\r\n修复时间轴工具栏保存图片只保存第一页的问题。\r\n上传新类型文件并更新工程文件。\r\n修改续打无效的JS代码。\r\n修复时间轴数据点使用文字样式的图标时图标不绘制的问题\r\n修改script元素属性不对的问题。\r\n改进WEB控件处理粘贴的JS代码。\r\n修改日期选择js。\r\n改进纯JS版编辑器。\r\n时间轴数据点图标样式添加正、倒、空心、实心的三角形。\r\n新增WEB客户端纯JS控件。\r\n修改时间轴LayoutYAxisValuePoints函数中的textLabelTops变量的处理，会导致画点Y轴计算错误，由用户自己去配置VALUE。\r\n改进WEB服务器端代码。\r\n改进XML序列化的功能。\r\n添加代码注释。\r\n调整XML序列化的代码。\r\n改进前端JS代码。\r\n修改了输入域内容可修改设置无效的问题。\r\n开发XML书写器。\r\n改进XML序列化。\r\n改进了命令状态刷新机制。\r\n修改了2个底层判断失误。\r\n改进WEB控件的空格输出。\r\n改进表格输出的HTML。\r\n改进WEB控件表格操作的JS版本。\r\n完成HTML前端InsertXML命令。\r\n优化前端的JS代码，减少循环次数且拆分出单个元素的初始化JS例程，为前端insertxml做准备。\r\n调整PreloadSystem()的代码结构。\r\n调整左右页边距互换功能。\r\n添加将forxml参数传送到修改后的JS代码内的功能。\r\n改进表格的JS代码。"
    },
    {
        "year": "",
        "time": "6月30日",
        "version": "",
        "number": "",
        "pre": "改进WEB控件中输入域相关的JS\r\n改进WEB编辑器在FIREFOX中的行为。\r\n调整当阴影区域使用竖线相连则取消斜阴影线的绘制\r\n添加多注册码并行的功能\r\n改进WEB版服务器端编程模型。\r\n修复WEB版中保存小模板的功能。\r\n改进WEB版JS性能。\r\n改进XML处理功能。\r\n修改了一个光标定位的问题。\r\n改进WEB控件插入文档内容的JS。\r\n修复了表格在隐藏表格行后添加行会报错的问题。\r\n精简打印预览用的HTML文档。\r\n修改了页眉的一个绘制错误。\r\n上传标尺医学表达式的ASP.NET前端编辑页面。\r\n改进WINFORM版编辑器的授权提示信息。\r\n改进UNDO/REDO功能。\r\n改进insertxml的JS处理代码。\r\n调整insertxml解析HTML片断的JS代码。\r\n改进WEB版控件的性能。\r\n精简WEB控件上传的HTML代码。\r\n改进加载HTML文档时的性能。\r\n改进WEB版控件的性能。\r\nMVC释放资源文件时对所有医学表达式编辑页面文件加上'DCSoft.Writer.Controls.Resources.'前缀，作为解决MVC下无法编辑医学表达式的临时方案。\r\n改进WEB版用的JS。\r\n正在减少生成的HTML代码。\r\n改进表格行分页算法。\r\n修改了编辑模式下表格HTML输出不正确的问题。\r\n改进WEB控件中上传图片的功能。\r\n改进WEB控件对输入域的支持。\r\nWEB控件新增UseDCWriterMiniJS选项。\r\n改进WEB控件的固定长度输入域的下划线的问题。\r\n改进客户端初始化的JS代码。\r\n改进对输入法的支持。\r\n部分改进WEB控件输入中文的错误。\r\n改进WEB控件多余空行的问题。\r\n修改表格不输出HTML的问题。\r\n改进前端JS代码。\r\n改进对MVC的支持。\r\n改进HTML解析功能。\r\n改进客户端脚本。\r\n改进WEB控件。\r\n修改了单元格内容镜像的问题。\r\n新增HTMLPreviewExt命令调用WIN32对话框用指定的程序预览HTML内容。\r\n调整JS代码应对兼容性。\r\n修改续打BUG。\r\n修正了INSERTXML命令的BUG。\r\n添加授权风险警示功能。\r\n调整DocumentCotroler的代码位置。\r\n改进鼠标光标功能。\r\n改进对高分屏的支持。\r\n完善时间轴设计器里面的属性中文名称。\r\n调整RTF输出代码。\r\n调整表达式输出JS的行为以便于掩盖输入域有时是值有时是文本时导致前端计算错误的隐患。\r\n修复BS版打印时页面右偏移的问题\r\n改进文档网格线的绘制功能。\r\n调整了加载HTML的代码。"
    },
    {
        "year": "",
        "time": "5月31日",
        "version": "",
        "number": "",
        "pre": "改进时间轴的授权控制。\r\n修复了时间轴大垂直网格线宽不保存的问题。\r\n修改鼠标指针hotspot。\r\n改进了对FIREFOX的调试时支持。\r\n改进JS调试模式。\r\n修复插入二维码界面里二维码类型有两个重复的导致报错的问题。\r\nASP.NET前端新增InsertXML命令，与InsertFile的行为不同点在于插入的内容前后不会再有回车，是直接嵌入进当前光标所在段落内的。\r\n修改IndentHtmlCode='True'状态下输入域问题。\r\n添加64尺寸的图标并新增HightDPI属性当其置位时返回64尺寸图标否则只使用32尺寸的。\r\n改进光标显示。\r\n改进HTML输出功能。\r\n改进了加载HTML的过程。\r\n改进HTML显示和读取功能。\r\n调整显示设置。\r\n改进HTML展示功能。\r\n修复了输入域只设置文本不设置数字值时可见性表达式在ASP.NET前端失效的问题\r\n新增BS版ViewOptions。\r\n改进表格操作JS代码。\r\n修改段前段后距。\r\n修改了表单模式的一个问题。\r\n改进了脚本编辑器。\r\n调整脚本代码生成器。\r\n改进对MVC的支持。\r\n调整GetElementNumbericValue并新增获取InnerValue的JS代码。\r\n改进HTML输出效果。\r\n改进读取HTML的功能。\r\n改进HTML解析功能。\r\n修改BS版插入单选。\r\n修改BS版新增表格的功能。\r\n添加新增按钮，单选框，复选框功能js。\r\n改进输入域相关的JS代码。\r\n改进输入域回车处理的JS。\r\n重写插入代码修复前端插入表格后重写到后端列宽不正常的问题。\r\n修改输入域相关的JS代码。\r\n改进HTML预览功能。\r\n修复PageBorderBackgroundStyle在指定参数且不显示界面的情况下仍然弹出对话框的问题。\r\n改进PrintPage事件。\r\n改进表格排版算法。\r\n改进文档内容绘制。\r\n改进网格线的绘制。\r\n改进内容复制功能的操作范围判断。\r\n改进阅读视图模式。\r\n改进单元格网格线的绘制。\r\n改进网格线功能。\r\n修改打印事件处理。\r\n修改输入域的JS脚本\r\n调整脚本代码编辑器。\r\n修改一处可能为NULL的操作。\r\n改进HTML打印功能。\r\n修复了前端编辑下划线删除线上下标转换到后端DOM对象失效的问题。\r\n改进HTML打印功能。\r\n修复了下划线，删除线以及上下标从DOM对象解析到HTML失效的问题。\r\nHTML字体样式新增text-decoration以便于接应下划线删除线的处理代码。\r\n新增WriterControl.PageTitlePosition有PageSpacing样式。\r\n改进HTML代码生成过程。\r\n调整HTML代码输出。\r\n将Y轴网格线配置信息重新添加到时间轴设置器中。\r\n表格行属性命令执行后强制刷新文档以避免可见性表达式在刷新前失效的问题。\r\n改进加载子文档的过程。"
    },
    {
        "year": "",
        "time": "4月30日",
        "version": "",
        "number": "",
        "pre": "改进HTML展示。\r\n改进导出图片和PDF的功能。\r\n时间轴的大垂直网格线添加线宽设置。\r\n改进网格线绘制。\r\n改进分页线功能，改进模板工具。\r\n初步完善ConvertTableElementToDataTable命令，使编辑器命令能够返回DT对象。\r\n新增ConvertTableElementToDataTable命令参数代码文件。\r\n新增ASP.NET前端对文档表达式的LOOKUP函数的支持。\r\n新增生成XSD的功能。\r\n修复了扩展网格线类型属性画线颜色失效的问题。\r\n改进HTML代码生成。\r\n新增Document.EventAfterPrintPage事件。改进表格输出HTML代码的功能。\r\n改进了HTML预览命令，改进HTML预览模式。\r\n修改了输出XML的一个错误。\r\n修改多语言时开发者工具的一个BUG。\r\n修复了画图工具当中椭圆线宽颜色无法设置的问题。\r\n修复前端插入表格并AJAX保存表格后丢失列宽信息的问题。\r\n修改了复选框下划线的显示问题。\r\n添加表格对齐属性。\r\n修改了分行排版算法在某种特殊情况下的死循环的问题。\r\n改进模板工具。\r\n改进下划线的绘制，新增Style.Cursor样式。\r\n新增创建TemperatureDocument与TemperatureDocumentConfig对象的COM接口。\r\n修改了被删除的元素Focused属性值报错。\r\n修改了样式不更新到文档的问题。"
    },
    {
        "year": "",
        "time": "3月31日",
        "version": "",
        "number": "",
        "pre": "改进文件节边框显示功能。\r\n修复了可见性表达式在ASP.NET内不起作用的问题。\r\n修复了前端JS无法创建日期类型输入域的问题。\r\n修复了GetDataSourceBindingDescriptionsXML()无法获取新版条形码与二维码元素的数据源信息的问题。\r\n改进维文显示功能。\r\n修改了IE嵌入控件的一个功能模块没加载的错误。\r\n改进维文排版算法。\r\n改进关于对话框。\r\n添加开发者工具中执行命令界面的命令排序功能。\r\n修正了居中的表格在手机端查看仍然左对齐的问题。\r\n改进AJAX模式加载文档的功能。\r\n调整WEB页面的显示。\r\n新增AxTemperatureControl.ComSetRegisterCode函数，内部集成Publish.Start()操作，以便于COM环境下单独使用时间轴时的注册序列号。\r\n改进文字排版算法。\r\n新增执行命令界面的命令列表排序功能。\r\n改进UG的显示功能。"
    },
    {
        "year": "",
        "time": "2月28日",
        "version": "",
        "number": "",
        "pre": "修复计算器控件在维语环境下大小不正常的问题。\r\n改进等待界面。\r\n修改页眉中内容显示不出来的问题。"
    },
    {
        "year": "",
        "time": "1月31日",
        "version": "",
        "number": "",
        "pre": "改进编辑器性能。\r\n修改重复弹出下拉列表的问题。\r\n改进脚本引擎的性能。\r\n修改了页眉表格显示不出来的问题。\r\n改进模板工具的数据元管理。\r\n开放XTextNewMedicalExpressionElement.Parent属性的COM接口。\r\n修正输入域InnerValue求和时选择项的值带小数时报错的BUG。\r\n改进文档脚本代码编辑器。\r\n当表格属性页同时设置了单元格网格线和缩小字体填充时，添加提醒机制。\r\n使用ViewOptions.PreserveBackgroundTextWhenPrint可以控制不保留输出HTML时背景文字的位置。\r\n新增XTextDocument.RefreshDocument()、RefreshDocumentExt()。\r\n修改了ASP.NET回发样式丢失的问题。\r\n输入域下拉列表完成选择并确认之后，下次打开时清除之前的拼音码的问题。\r\n修改了文字内容保护的一个错误。\r\n改进异常文本校验功能。\r\n改进可疑文本挑错功能。\r\n改进表格绘制。\r\n上传桓牙牙位图HTML编辑页面。\r\n开发字符累计功能。\r\n修正UnderLineStyle命令不出现参数界面的问题。\r\n修改了字体序号的一个错误。\r\n改进表达式执行过程。\r\n改进CA签名底层加密功能。\r\n修改少数电脑中鼠标拖拽时死机的问题。\r\n新增恒牙牙位图的HTML编辑界面框架，内部JS未完成，同时调整界面的HTML对话框大小。\r\n改进输出RTF的功能。\r\n解决了新版医学表达式月经史1-4、瞳孔图、光定位、胎心图在ASP.NET前端页面的查看编辑保存等功能。\r\n改进导出PDF的功能。\r\n彻底解决新旧医学表达式在HTML前端的显示问题。\r\n将HTML中医学表达式的片断转换成DOM对象结构。\r\n调整医学表达式的键值对输出到HTML中的JSON格式。\r\n开发电子签名图片的功能。\r\n添加处理XTextNewMedicalExpresssElement元素从XML写入到HTML里的功能。\r\n添加全套ComConvert函数至打印预览控件，以便于在JS端后台操作Document对象。\r\n在ACTIVEX预览控件下新增ComCreateXTextDocument函数，以便于在JS下创建新文档对象。\r\n更正之前修改JS的遗留问题。\r\n开发电子签名的功能。"
    },
    {
        "year": "2017",
        "time": "12月31日",
        "version": "",
        "number": "",
        "pre": "开始添加签章功能。\r\n调整PDF功能。\r\n调整下拉项值计算行为，只有当全部选中项的值均为数字的时候才进行求和操作。\r\n改变下拉列表输入域的行为，下拉列表选中项后，对输入域的InnerValue的值不再象文本那样用字符串连接，而是对每个下拉项进行求和操作。对输入域的TEXT的处理保持不变。\r\n开发计算DOM哈希值的功能。\r\n调整XTextSubDocumentElement初始化值。\r\n更新开发者工具。\r\n修复了InsertSpecifyCharacter命令下窗体什么都不选直接确定导致报错的BUG。\r\n改进ORMSQLMETHOD方法。\r\n修复了条形码(XTextNewBarcodeElement)显示到HTML页面后通过AJAX保存时丢失文档元素信息的BUG。\r\n添加ComSetScrollVisible的COM接口到ComInterfaces，为客户端隐藏滚动条做准备。\r\n增加COM接口下的ComSetScrollVisible函数来设置滚动条是否可见。\r\n开放TemperatureDocument下的加载和保存功能的COM接口。\r\n改进COM接口代码。\r\n修复了UnderLineStyle命令在参数为空且显示界面时没有反应的问题。\r\n改进授权显示。\r\n改进WEB控件。\r\n改进HTML代码的生成\r\n改进ASP.NET针对移动设备生成的HTML代码。\r\n改进WEB控件中的JS的生成。"
    },
    {
        "year": "",
        "time": "11月30日",
        "version": "",
        "number": "",
        "pre": "改进编辑器对DELPHI的支持。\r\n改进了脚本引擎。\r\n修改了模拟器启动时清空数据的一个问题。\r\n改进虚拟文件系统。\r\n修改了WriterControl.EventContentChanged事件不触发的问题。\r\n改进命令状态更新事件的触发过程。\r\n调整二进制序列化标记。\r\n新增XTextContainerElement.HiddenPrintWhenEmtpry。\r\n改进复选框不勾选不打印功能。\r\n修改了XFontValue.RawFontIndex的一个计算错误。\r\n添加ComConvertToValueValidateResult()函数。\r\n修改文档网格线的一个显示问题。\r\n添加一处对空值的判断。\r\n改进ORMSQLMETHOD功能。\r\n修改数据源绑定的一个问题。\r\n修改复制文档的一个问题。\r\n调整虚拟文件系统编程接口。\r\n开始添加电子签章功能。\r\n改进编辑器的性能。\r\n改进编辑器中脚本引擎的性能。\r\n开放XTextTDBarcodeElement.Height的COM接口。\r\n添加允许设置field.FieldSettings.ListValueSeparatorChar为空来在多选项之间不加分隔符。\r\n改进后台任务管理器的代码结构\r\n新增ASP.NET MVC演示程序。\r\n改进WEB控件功能。\r\n开放XTextTemperatureChartElement.ChartPageIndex属性的COM接口。\r\n添加赋能框架文件系统性能计数器。\r\n调整赋能框架代码结构。\r\n改进ASP.NET WEB控件的展示方式。\r\n改进模板设计器。\r\n添加ComConvertToXTextNewMedicalExpressionElement的COM接口类型转换函数。\r\n改进图表元素，改进单元格多行缩小字体填充功能。\r\n改进PropertyColumn的功能。"
    },
    {
        "year": "",
        "time": "10月31日",
        "version": "",
        "number": "",
        "pre": "新增DataGridView和PropertyGrid的合体。\r\n开放TemperatureDocument.UpdateNumOfPage()的COM接口用于在体温单中显示不同页面是判断总页数。\r\n开放COM接口：TemperatureControl.InvalidateAll()以便于在ACTIVEX下编程改变控件视图模式。\r\n添加图表功能。\r\n开放时间轴COM接口DesignerButtonVisible属性、ExportImg方法。\r\n改进矢量图形编辑器。\r\n细微调整图形编辑控件。\r\n图形编辑器提供连续绘制模式，允许一个图形绘制完后紧接着绘制同类图形而不用再次点击。\r\n改进XTextCheckBoxElementBase.RuntimeGroupName算法。\r\n改进插入文档批注时间的问题。\r\n改进赋能框架中的ORMSQLMethod代码生成向导对话框。\r\n新增赋能框架的ORMSQLMethodAttribute代码生成向导对话框。\r\n为时间轴控件新增事件消息功能。\r\n改进表格单元格在输入内容时的断行算法。\r\n修改了一个隐藏表格行导出到RTF中的错误。\r\n改进赋能框架中ORM SQL方法设计器。\r\n开发属性配置功能。\r\n开发应用配置信息对象。\r\n修改了打印预览时单元格网格线显示越界的问题。\r\n新增模拟器接口SetTableColWidth函数的实现。\r\n开发赋能框架的ORMSQL方法功能。"
    },
    {
        "year": "",
        "time": "9月30日",
        "version": "",
        "number": "",
        "pre": "添加赋能框架字符串资源定义功能。\r\n改进赋能框架远程调用功能。\r\n新增赋能框架透明代理远程调用功能。\r\n修改了脚本引擎产生大量临时文件的错误。\r\n添加ComCreateDocumentTerminalTextInfo函数并开放COM接口。\r\n开发赋能框架的ORM映射设计器。\r\n改进赋能框架中的ORM处理。\r\n改进赋能框架FTP虚拟文件系统。\r\n继续调整showSaveDocumentButton属性的代码。\r\n调整显示保存文件按钮的代码。\r\n改进WriterCommandControler绑定控件的功能。\r\n打印预览控件添加了是否显示保存文档界面的属性并开放COM接口。\r\n调整了表达式中引用复选框组数据的行为。\r\n修改了编辑器中一个数据源绑定更新不及时的问题。\r\n更新项目配置信息。\r\n试图添加FilePrintPreviewCommandParameter的COM接口。\r\n修改了编辑器中一个数据绑定和同步复制不协同的问题。\r\n改进了赋能框架脚本编辑器。\r\n修复标签元素的连接字符串在Normal模式下的BUG。\r\n改进赋能框架脚本引擎。\r\n改进全局脚本编辑器。\r\n给FW新增全局脚本引擎的功能。\r\n改进数据列表栏目设计器。\r\n新增赋能框架中的数据网格栏目自定义的功能。\r\n将asp.net前端JS内filesave改为同步模式，以期获取到服务端的返回值。\r\n修改了绑定数据源时内容复制不及时的问题。\r\n改进了文档批注排版的问题。\r\n给文档和控件新增DetectValueBindingModified()/GetDetectValueBindingModifiedMessage()，用于检测数据源绑定时导致文档元素内容修改的统计信息。\r\n新增XDataBinding.BindingPathForText属性。使得输入域的Text能单独的绑定数据源。\r\n修改了自动缩放模式下下拉列表报错的问题。\r\n改进了WEB控件回传时输入域InnerValue为空的问题。\r\n为ASP.NET前端FileSave命令添加返回值指示是否执行成功。\r\n改进软件启动代码。\r\n调整编辑器的图形代码结构。\r\n为赋能框架新增病人列表功能演示。\r\n为AxWriterControl添加获取当前DLL内核版本号的COM接口。"
    },
    {
        "year": "",
        "time": "8月31日",
        "version": "",
        "number": "",
        "pre": "在赋能中新增通用列表式报表功能。\r\n调整编辑器底层绘图代码。\r\n开放 DCSoft.Common.ValueValidateStyle类型下的MaxDecimalDigits属性与CheckDecimalDigits属性的COM接口。\r\n改进了赋能中的文档编辑处理模块。\r\n改进了编辑器中的光标控制功能。\r\n改进赋能中的文档编辑器控件。\r\n添加数据点与灯笼数据的图例支持以单字母以及套圈字母显示。\r\n修改了单元格排版状态刷新不及时的问题。\r\n改进修改文档内容时的保持选择区域状态的功能。\r\n改进了导出RTF文档是背景文字设置无效的问题。\r\n开放TemperatureControl.SetRegisterCode方法的COM接口。\r\n给TemperatureControl.SetRegisterCode()方法添加上ComVisible=true的特性。\r\n改进了复制文档时的操作。\r\n修改了文档批注相关的错误。\r\n调整打印预览控件的代码文件。\r\n修改编辑器缩小时背景图片不同步缩小问题。\r\n改进Drawing演示程序。\r\n调整代码结构。\r\n调整编辑器代码结构。\r\n赋能中新增LoginDirect()。\r\n改进对IE嵌入控件的支持。\r\n修改在浏览器中嵌入控件的一个问题。\r\nAppendCourseRecord之后能够自定义是否刷新文档与给予焦点，针对一次性APPEND多个Record的情况。\r\n修改单元格网格线显示不全的问题。\r\n改进内存泄漏的问题。\r\n新增性能测试程序。\r\n改进编辑器命令控制器。\r\n改进编辑器内核加载文档的性能。\r\n更新授权控制。"
    },
    {
        "year": "",
        "time": "7月31日",
        "version": "",
        "number": "",
        "pre": "改进授权控制。\r\n胎心图的医学表达式，如果中间数值没有，则横线直接画，不再断线。\r\n改进编辑器内核性能。\r\n新增DocumentValueValidateWithCreateDocumentComments命令。\r\n修改单元格排版功能。\r\n调整等待界面。\r\n更新WEB控件客户端获得XML的一个错误。\r\n改进从HTML代码中加载文档中的一个样式加载错误的问题。\r\n调整AddImageObjectExWithStream中设置宽高的代码以避免出现NULL引用的问题。\r\n改进单元格缩小字体填充的功能。\r\n修改了表格单元格的缩小字体自动填充的一个BUG。\r\n修改了时间轴的问题。\r\n修改单元格缩小字体自动填充的问题。\r\n修改单元格跨页镜像的问题。\r\n修改了单元格网格线的一个BUG。\r\n修正了CONFIG工具在命令行启动注册时仍然显示注册成功对话框的问题。\r\n调整判断的顺序。\r\n试图修复北大医信的一个偶尔引发空引用的BUG。\r\n重新打开XTextTemperatureChartElement.Height的COM接口。\r\n输入域的日期时间编辑器，设置将完整的时间数据放到VALUE中，以免数据被截断。\r\n更新数据库操作的底层代码。\r\n增强单元格的MirrorViewForCrossPage的功能。\r\n改进编辑器启动代码。\r\n更新时间轴授权控制。\r\n添加英文字符串资源。\r\n改进时间轴的事件处理。\r\n改进编辑器销毁控件时的处理。\r\n点击label 会修改其背景色。\r\n新增ViewOptions.NewInputContentUnderlineColor选项。使得新输入的内容具有下划线效果。这种效果不保存。\r\n改进赋能的演示程序。\r\n修改窗体样式。\r\n将RichTextBox修改成 Label 后，又修改了BookStyle 的代码。\r\n将RichTextBox修改成Label。\r\n修改时间轴tickStep均匀增加的问题。"
    },
    {
        "year": "",
        "time": "6月30日",
        "version": "",
        "number": "",
        "pre": "改进ORM功能。\r\n调整COM接口功能。\r\n新增XPageSettings.EnableHeaderFooter属性。\r\n改进赋能平台中的文档浏览器。\r\n添加ComCreateDCGridLineInfo，允许在COM下设置单元格网格线。\r\n调整下划线的绘制。\r\n增强编辑器下划线功能。\r\n改进ORM功能。\r\n调整COM接口功能。\r\n新增XPageSettings.EnableHeaderFooter属性。\r\n改进赋能平台中的文档浏览器。\r\n添加ComCreateDCGridLineInfo，允许在COM下设置单元格网格线。\r\n调整下划线的绘制。\r\n增强编辑器下划线功能。\r\n修改SpecifyPageIndex函数，修正属性为NULL的错误。\r\n调整了判断属性只读的算法。\r\n新增控件事件模板功能。\r\n解决文件乱码。\r\n修改DCSoft.WinForms.Data.DataBaseSchemaTreeView为DCSoft.Design.Data.DataBaseSchemaTreeView。\r\n新增HttpDbConnection功能。\r\n改进修改文档批准的操作。\r\n时间轴纵向文本只是单个字符，不用竖直绘制，避免如果是英文单个字母被横着绘制。\r\n修改了LABEL导出PDF的文字缺失的问题。\r\n改进类型转换功能。\r\n修改了MD5可能禁止的错误处理。\r\n修改了文档批注不能删除的问题。\r\n修改了表格标题行无效的问题。\r\n改进PDM文件的读取。\r\n针对GetUserTrackInfosXMLString导出的字符串新增了元素ViewIndex，以便于客户端进行导航。\r\n添加GetUserTrackInfosXMLString命令，用于在GOOGLE环境下通过命令的形式导出用户痕迹列表的XML信息。\r\n修改了UserTrackList不能XML序列化的问题。\r\n修改了表格生成HTML时的一个计算误差。"
    },
    {
        "year": "",
        "time": "5月31日",
        "version": "",
        "number": "",
        "pre": "新增文档批注方式显示校验结果的功能。\r\n修改了一个对象为空的错误。\r\n调整所有IObjectSafety实现相关的代码。\r\n修改了表格分页算法的一个BUG。\r\n重写了IObjectSafety接口的实现。\r\n修改了OwnerLastPageIndex的一个BUG。\r\n调整了表格分页算法。\r\n改进文档浏览器。\r\n开放XTextTemperatureChartElement.Height的COM接口。\r\n改进编辑器中输入法的控制。\r\n修改隐藏表格行导致的BUG。\r\n改进下拉列表时的输入法控制。"
    },
    {
        "year": "",
        "time": "4月30日",
        "version": "",
        "number": "",
        "pre": "修复二维码数据绑定界面重复弹出问题。\r\n添加ComAddContextCustomMenuItem函数的COM接口。\r\n开始添加语意分析功能。\r\n添加新的XML序列化的代码。\r\n修改容器元素内分页符无效的问题。\r\n注释ActiveX下多余的一句保存到路径语句。\r\n修复了使用清洁打印后，原来复杂视图文档会调整成为清洁视图模式的问题。\r\n修改加载大量大图片时的编辑器内存报错的问题。"
    },
    {
        "year": "",
        "time": "3月31日",
        "version": "",
        "number": "",
        "pre": "改进输出HTML时签章图片的功能。\r\n新增对JavaScript的支持。\r\n改进生成HTML代码的功能。\r\n添加对JScript脚本语言的支持。\r\n改进WEB控件的数据源绑定机制。\r\n修复偶尔的控件关闭报错。\r\n新增图片印章功能。\r\n压缩生成的XML代码的功能。\r\n开发印章功能。\r\n修改导出HTML的行为。\r\n条形码校验码修正。\r\n修复输入域无法执行表达式问题。\r\n修复数据点重绘错误，相对上次修复的只是改了下判断的语句位置。\r\n修改逻辑删除时光标定位不准确的问题。\r\n调整保存XML的功能。\r\n增加快速注册COM的功能。\r\n改进脚本引擎的性能。\r\n添加一个COM函数接口ComGetCurrentPageIndexByScrollPosition，根据当前滚动条所在位置判断客户区第一行所在的页号。\r\n新增ComHTMLText用于开放writerControl.HTMLText属性。\r\n修改了一个排版的错误。\r\n修改了WEB控件中执行JS的错误。"
    },
    {
        "year": "",
        "time": "2月28日",
        "version": "",
        "number": "",
        "pre": "添加XML修复工具。\r\n添加编辑器分级权限控制代码。\r\n调整表格的分页算法。\r\n添加加载RTF中的文字画圈的功能。\r\n修复单选复选change迭代bug。\r\nAxWriterControl新增ComCreateXTextTemperatureChartElement的COM接口。\r\n变量名规范更改。\r\n改进输入域标志默认颜色。\r\n代码规范改进。\r\n树列表刷新过滤更新。\r\n删除FillData中的空注册。\r\n改进了一个底层调用MEMCMP()的功能。\r\n修改数据源回填时的一个错误。\r\n修改XTextTableCellElement.SpanRows属性导致的错误。\r\n改进授权文本的显示。修改了一个文档复制时的BUG。\r\n修改按钮元素复制时不复制图片数据的错误。\r\n更新InputFieldUnderLine对话框位置，更新判断。\r\n时间轴修复AfterOperaDaysFromZero因为代码莫名回滚的异常。\r\n时间轴修复PageSettings段落被人为删除的BUG。\r\n改进树状列表枚举器。"
    },
    {
        "year": "",
        "time": "1月31日",
        "version": "",
        "number": "",
        "pre": "改进编辑大文档时的性能。\r\nInputFieldUnderline参数编辑界面添加多语言。\r\nInputFieldUnderline修正对线长的处理。\r\n调整UpAndDown属性效果，兼容旧版本。\r\n更新InputFieldUnderLine命令的命名。\r\n修改了表格计算分页线位置的BUG。\r\n下拉BUG修复。\r\n调整下拉检索逻辑，使得只能接受字母和数字，避免其他异常。\r\n修复Web控件在设计模式下无法缩放问题。\r\n修改了文档节收缩时内容排版错误。\r\n修改了脚本无法响应文档元素事件的问题。\r\n附加表示公开API的特性。\r\n修改了文档行排版算法。\r\n修改了一些内存管理。\r\n调整COM接口，改进编辑器内存释放。\r\n修改脚本引擎导致的内存泄漏。\r\n新增WriterControl.GCCollect(),还有GCCollect命令。\r\n修改了销毁编辑器控件导致的问题。\r\n修改了刷新视图的BUG。\r\n改进超大表格的操作性能。\r\n改进内存泄漏问题。\r\n改进大文档时选择内容操作时的处理。\r\n调整COM接口，添加多线程加速的功能。\r\n更新COM接口，调整授权模式。\r\n改进进度状态控制。\r\n添加对WINDOWS任务栏进度条的功能。\r\n提高文档刷新性能。\r\n修改了保存HTML时的排版不对的问题。\r\n提高粘帖时TXT格式的优先级。\r\n更新COM接口。\r\n更新病程记录控制器。\r\n改进注册码对话框。\r\n修改了一个兼容性问题。"
    },
    {
        "year": "2016",
        "time": "12月31",
        "version": "",
        "number": "",
        "pre": "修改了无控件时设置XTextInputFieldElement.Text时的一个错误。\r\n改进提示用户等待界面的功能。\r\n调整设置输入语言命令。\r\n改进了获取当前文档样式。\r\n修改单元格内容刷新不完整的问题。修改了AdditionPageTitle功能无效的问题。\r\n改进插入表格行的性能。\r\n改进图片加载过程，降低内存消耗。\r\n掩盖了当媒体对象在播放状态下控件删除时导致的错误（未从根源修复）。\r\n改进默认的图片数据加载模式。\r\n修改了设置文档设计时背景图片的BUG。\r\n修改COM注册等待框的属性。\r\n更新COM接口，改进了文档元素Clone()的一些BUG。\r\n修改了合并文档时痕迹信息错位的问题。\r\n添加COM接口注册等待对话框。\r\n更改产程图类名。\r\n改进编辑器内核性能、内存泄漏、运行速度。\r\n更新产程图图标。\r\n改进编辑器内存和运行速度的性能。\r\n更新数值表达式bug。\r\nXTextTemperatureChartElement开放Document属性的COM接口。\r\n改进编辑器操作文档的性能。\r\n改进编辑器控件的运行性能。\r\n时间轴新增开始时间多关键字功能。\r\n修复计算右侧计算符计算错误。\r\n改进快速录入模式的一个滥用的BUG。\r\nCOM注册按钮事件改为后台线程运行。\r\n针对PB改进COM开发接口。\r\n更新COM接口，改进自动保存功能。\r\n改进输入域同步复制功能。\r\n新增XTextButtonElement.PrintAsText属性。\r\n调整编程接口公开范围。\r\n新增XTextInputFieldElement.UpdateInnerValue(),修改了InnerValue的值不更新的问题。\r\n时间轴新增住院日期显示方式。\r\nXTextNewMedicalExpressElement添加了Height与Width的COM接口。\r\n添加XTextAccountingNumber的Text属性的COM接口。\r\n产程图更新单个点的单击事件。\r\n改进输入域弹出下拉列表的行为。\r\n调整授权控制功能。\r\n修正注册标示信息。\r\n改进文档排版的性能。"
    },
    {
        "year": "",
        "time": "11月30",
        "version": "",
        "number": "",
        "pre": "修改了FileBlock元素加载文件时指定的文件名不准确的问题。\r\n修改了DomTreeNodeEnumerable.CurrentParent数值不对的问题。\r\n更新产程图文档的WEB部分。\r\n修复当页面设置对话框从文件加载设置后无法应用到文档的BUG。\r\n修复AfterOperaDaysFromZero属性设置bug。\r\n新增图片数据缓存区的功能。\r\n提高了在Updating状态下编辑器文档内容的操作速度。\r\n时间轴添加ValueTextTransparentBackColor属性。\r\n更新文档元素遍历算法。\r\n改进编程接口。 \r\n流文件的保存加载方式。\r\n产程图增加Y轴内容不绘制。\r\n时间轴修改竖行背景不绘制的问题。\r\n产程图修改竖行背景不绘制的问题。\r\n产程图更新bs版显示。\r\n修改了InnerValue不同步的问题。\r\n改进FW文件浏览器界面。\r\n修改了XTextTableElement.HasSelection中的一个错误。\r\n产程图添加用户双击事件。\r\n时间轴修复另一处数据折线区域画点重复的问题。\r\n产程图更新delphi程序。\r\n修改了控件的get_DeveloperToolsVisible的一个BUG。\r\n改进XAttributeList.SetValue方法。\r\n改进数据源绑定机制。\r\n调整了输入域边界文本是否输出到纯文本中的设置。\r\n产程图更新COM接口。\r\n新增暂存文档功能。改进数据库错误处理。\r\n编辑器更新COM接口。\r\n修复打印预览新增CleanPreviewMode功能后的一个BUG。\r\n产程图隐藏刻度属性，隐藏界面全部打印。\r\n产程图更新命名空间和汉化。\r\n添加COM事件EventElementGotFocus/EventElementLostFocus。\r\n新增WriterControl.EventElementGotFocus/EventElementLostFoucs事件。\r\n改进阅读模式下可以使用清洁模式。\r\n改进了输入域边界元素文本内容Y坐标值的算法。\r\n更新产程图文档。\r\n添加COM接口ComCreateXTextNewMedicalExpressionElement。\r\n添加自动保存功能。\r\n升级授权控制。\r\n产程图增加web程序。\r\n修正时间轴Y轴数据区画点重复的BUG。\r\n增加产程图功能。\r\n改进输入语言命令。\r\n改进模板工具快捷菜单功能。\r\n修复当直接运行FilePageSetting命令时无法正确显示文档选项的BUG。\r\n打印预览参数中FilePrintPreviewCommandParameter新增了一个属性CleanPreviewMode。提供强制清洁模式预览功能。\r\n更新数据引用的设计时支持。\r\n改进数据源绑定机制。\r\n修改了获得单元格可修改状态过程中的一个BUG。\r\n开始开发模板关键字段功能。\r\n修正输入域动态加载下拉列表当拼音码改变时无法显示TextInList的BUG。\r\n修改了导入文档元素时样式编号更新不及时的问题。\r\n病程记录控制器添加CurrentRecordChanging事件。\r\n调整牙位图设置样式。\r\n改进模板工具的架构。\r\n修改树状节点遍历器。\r\n修改表达式引擎。\r\n修改了逻辑删除时导致的排版不准确的BUG。\r\n调整了输入域更新数据源的向下兼容性的问题。\r\n修改了删除内容时的BUG。\r\n修改了更新字典类型数据源的BUG。\r\n改进界面控件保存设置的功能。\r\n修复类型转换错误。"
    },
    {
        "year": "",
        "time": "10月31",
        "version": "",
        "number": "",
        "pre": "修改了一个命令控制器的BUG。\r\n改进模板设计器，修改了表格分栏中表格行丢失的问题。\r\n新增表格快速分栏操作。\r\n改进了文档DOM树的显示，更新DOM树的一个BUG。\r\n优化分区图像的XML序列化字符串以及调整精简内部属性。\r\n改进编辑器表达式处理过程。\r\n新增文档内容预览功能。\r\n增加FilePrintPreviewCommandParameter转到指定页功能。\r\n增加打印位置设置。\r\n改进虚拟文件系统。\r\n改进树状结构设计器。\r\n修复视频不显示的BUG。\r\n时间轴设计器添加DocumentConfigXml属性。\r\n修复数据校验，设置违禁关键字必须连带其他判断的bug。\r\n改进扩展文本功能。\r\n更新上下交替文本。\r\n新增XTextElement.OwnerLastPageIndex/DocumentBehaviorOptions.属性。\r\n新增InsertNewBarcodeElement命令，改进条码元素。\r\n改进模板工具，更新数据源处理功能，调整条码元素的代码结构，新增文档私有数据源功能。\r\n更新正则表达式，判断函数名称时允许在函数名与后面的左括号中间加空格。\r\n脚本编辑窗体添加按函数名导航的功能。\r\n改进数据源绑定机制，改进数据源部分更新功能失效的问题，改进数据源执行过程。\r\n改进数据源设计器。"
    },
    {
        "year": "",
        "time": "09月30",
        "version": "",
        "number": "",
        "pre": "修改了打印时指定页码功能有误的问题。\r\n新增XTextCheckBoxElementBase.Required属性。\r\n改进了新医学表达元素的一个空引用的错误。\r\n更新标尺元素。\r\n更新牙位图。\r\n修正页脚数据行显示不正确的BUG。\r\n修改了区域选择打印和续打时打印水印的问题。\r\n在开发者工具中显示XTextInputFieldElement的属性LinkListBindingInfo。\r\n在ViewXMLSource命令界面的查找按钮添加滚动到查找字符串位置的功能。\r\n在病程记录控制器中恢复对空文档处理，使文档列表数量与实际加载数量相符。\r\n更新数据源设计器。\r\n按钮元素的图片编辑界面添加鼠标右键取消图片的功能。\r\n新增医学表达式文字描述。\r\n新增分区图像区域多选模式，新增分区图像鼠标右击取消区域选择。\r\n改进按钮元素的图片属性，新增XTextButtonElement.Image/ImageForDown/ImageForMouseOver/AutoSize属性。\r\n新增按钮元素的XTextButtonElement.ImageForUp/ImageForDown/ImageForMouseOver属性。\r\n修改了编辑器控件UI中的一些问题。\r\n修改数据验证的逻辑。\r\n修复违禁关键字无法返回对话框的问题。\r\n修改MovePageUp、MovePageDown、ShiftMovePageUp、ShiftMovePageDown命令，支持滚动到页面顶端/底端。\r\n修改web时间轴添加自动左对齐方式时，当页面数据不够一屏的时候的BUG。\r\n改进DCSoft.Printing.PrintPageResult的计算结果，新增EndPositionInPage属性。\r\n新增牙位图补注释。\r\n牙位图功能更新，新增PD牙位图功能，新增病牙牙位图。\r\n修改时间轴主网格线绘制，第一条线取消绘制。\r\n时间轴新增ExportImg(string SavePath)。\r\n新增水平红线宽度YAxisInfo.RedLineWidth。\r\n新增XTextContainerElement.MaxInputLength属性。\r\n新增XTextInputFieldElementBase.FastInputMode属性。该属性需要靠DocumentOptions.BehaviorOptions.FastInputMode属性来启用。"
    },
    {
        "year": "",
        "time": "08月31",
        "version": "",
        "number": "",
        "pre": "改进鼠标拖拽跨页选择内容的行为。\r\n修改了BodyText不准确的问题。\r\n对WriterHtmlDocumentWriter添加Serializable特性确保程序能够支持ASP.NET的其它会话模式。\r\n调整了类型浏览器窗口。\r\n修改XTextInputFieldElementListValueEditor，去除类型与成员的混淆，确保BS模式下功能的正常使用。\r\n新增WriterControl.RefreshDocumentLayout()。\r\n新增DCSoft.WinForms.Native.SHStockIcons类型。\r\n修改了承载控件销毁时的一个错误。\r\n调整了ctl.ViewControl为ctl.InnerViewControl。\r\n更新了文件类型图标的功能。\r\n修复“当删除拼音码导致根据现有拼音码得出的下拉列表项，与先前已选择的下拉列表项重复时，先前已选择的项会被取消选择”的BUG。\r\n修复时间轴开始日期和结束日期大于7天时候，添加数据卡死的情况。\r\n改进了动态下来列表无法弹出的问题。\r\n标尺元素优化修改。\r\n改进二维码元素。\r\n添加时间轴页码改变事件SelectPageIndexChanged。\r\n修复了当输入域的EnableLastSelectedListItems为false的时候，动态加载下拉列表且录入拼音码时会报错。\r\n新增document.PageSettings.HeaderFooterDifferentFirstPage属性，允许首页页眉页脚不同。\r\n修改了表格线在缩放时显示在屏幕中出现的坐标值截断误差的问题。\r\n修改了脚本引擎中分析脚本方法的一个程序集未能加载的错误。\r\n修改了文档签名元素的只读性判断的问题。\r\n修改了单元格缩小字体填充时导出的HTML文档样式不准确的问题。\r\n增加COM接口：ComCreateFilePrintCommandParameter。\r\n调整数据源绑定机制，新增WriterControl.WriteDataFromDataSourceToDocumentSpecifyParameterNames()。\r\n添加COM接口StringToColor。\r\n新增AxWriterControl.StringToColor()函数。\r\n改进删除元素时的文档内容签名的判断。\r\n新增XTextSubDocumentElement.EditorSetStateCOM()函数。\r\n改进单元格无边框时的显示效果。\r\n修改了单元格多行缩小字体自动填充功能。\r\n改进PageImage模式下的BS控件功能。\r\n新增ZoomAuto命令。\r\n新增分区图像属性ElementIDForExporting。\r\n新增时间轴导出图片方法ExportImg()。\r\n新增自定义消息框的演示程序。\r\n调整维文的编辑行为。\r\n增加分区图像现在可以导出到HTML。\r\n修正MediaPlayer控件的特性。\r\n解决分区图像的非设计模式下响应文档元素事件问题。"
    },
    {
        "year": "",
        "time": "07月31",
        "version": "",
        "number": "",
        "pre": "改进表格行重复执行数据源绑定时的行为。\r\n新增WebWriterControl.ImageDataEmbedInHtml属性，使得图片数据能内嵌在HTML代码中。\r\n对分区图像与分区编辑窗体添加了适当的属性。\r\n修改播放器缩放产生的问题。\r\n改进文档批注排版和显示功能。\r\n新增输入域属性EnableLastSelectedListItems在下拉列表中显示前一轮已经勾选好的项。\r\n新增开发者工具元素删除操作。\r\n新增分区图像及其编辑窗体的代码。\r\n修改输入域列表框的记录行为。\r\n修改了一个属性默认值的错误。\r\n新增Options.ViewOptions.ImageInterpolationMode选项。\r\n改进元素的ToolTip的数值编辑器。\r\n新增XTextContainerElement.DataName/XTextCheckBoxElementBase.DataName。\r\n修改了维文授权控制。\r\n修改了打印时表格单元格边框线绘制不准确的问题。\r\n媒体控件现在只接受WMV文件。\r\n改进事件处理。\r\n修复了当文件播放到中途暂停后将文件移走再播放会出问题的BUG。\r\n新增XTextContainerElement.DefaultValueForValueBinding属性。\r\n新增一个.NET4版本的DirectShowCOMDLL播放支持。\r\n时间轴新增DocumentConfig.GridYSplitInfo类，替换DocumentConfig.GridYSplitNum属性，用于处理网格线背景横线绘制控制，控制线条的粗细，及多少条以后绘制粗线。\r\n改进WriterControl.SetInputFieldSelectedIndexs()内部算法。\r\n修正DOM\XTextRulerElement的类定义，添加partial声明。\r\n修改了导出PDF时字体处理的BUG。\r\n修改媒体元素处于正在播放的状态下时，删除元素的BUG。\r\n合并JS操作后的文件更新。\r\n改进下标样式的文本的显示位置的算法。\r\n新增打印自适应缩小属性AutoFitPageSize。\r\n标尺COM接口添加。\r\n标尺元素修改。\r\n播放器更新。"
    },
    {
        "year": "",
        "time": "06月30",
        "version": "",
        "number": "",
        "pre": "修改了保存image.pdf太耗内存的问题。\r\n修改了打印预览控件的PrintDocumentExt()。\r\n修改打印预览接口PrintDocumentExt页码为空时的判断错误。\r\n新增批量打印方法PrintDocumentPageIndex。\r\n修改SetMultiBoxMutexString添加新项时无法更新的问题。\r\n修改Table_InsertRowsToPageBottom命令。\r\n修改接口GetSectionContentBySectionName。\r\n新增XTextContainerElement.ToolTip属性，调整COM接口代码。\r\n修改了DELPHI中光标键无效的问题。\r\n增强文本标签元素的动态标题功能，支持从表格行中提取动态标题功能。用于支持护理记录单。\r\n增强image.pdf文件格式，能增加图片清晰度存储。\r\n修改打印预览翻页的错误。\r\n更新繁体中文版字符串资源。\r\n新增时间轴底端说明文本换行功能。\r\nXTextMediaElement更改。\r\n调整编辑器控件处理KeyDown事件的流程。\r\n改进了更新光标位置时对UI线程调用的判断结果。\r\n添加图片模式的放大属性PageZoomRate。\r\n修改了复制藏文乱码的问题。\r\n改进了生成RTF时遇到无法编码的字符的处理。\r\n添加web控件的PageZoomRate属性，可以控制图片模式的缩放比例。\r\n修改了编辑器WriterControl.JumpPrintPosition属性在偏移续打模式下设置无效的问题。\r\n改进WINFORM演示程序。\r\n改进自定义字符串资源内容的操作。\r\n改进藏文版的排版算法。\r\n标尺元素添加。\r\n新增事件WriterControl.EventElementMouseDown/EventElementMouseMove/EventElementMouseUp/EventElementMouseClick/EventElementMouseDblClick。\r\n新增插入图片的演示模块。\r\n牙位图修改。\r\n修改了更新数据源时过滤重复更新时的一个判断算法。\r\n改进WriterPrintPreviewControl.JumpPrintPosition中的算法。\r\n修改了区域选择打印时表格单元格边框线也打印的问题。\r\n新增XTextInputFieldElement.EnableLastSelectedListItems属性，增强在动态加载下拉列表内容的用户体验。\r\n新增了页面设置功能演示窗口。\r\n改进了设置选择区域的一个BUG。\r\n新增StartPage属性，用于根据页码设置当前显示位置。\r\n新增IWriterControlWebService.QueryListItemsWithDocumentParameter()，更新WEB服务相关的功能。"
    },
    {
        "year": "",
        "time": "05月31",
        "version": "",
        "number": "",
        "pre": "修改了横向打印时保存长图片的宽度不够的错误。\r\n改进DocumentOptions的备份、恢复执行过程。\r\n修改了部分区域重新排版时输入域固定宽度设置失效的错误。\r\n新增了文档节加载内容时修正文档节套嵌的处理。\r\n修改了批注显示不全的问题。\r\n修改了复选框元素复制时数据设置缺失的问题。\r\n修改了容器元素BorderRenderInfos坐标信息不对的问题。\r\n新增WriterControl.SaveLongImageToBase64StringZoom。\r\n增加ResourceStrings命令。\r\n修改开发者工具界面。\r\n修改执行命令界面。\r\n修改模拟器的接口DeleteRegion。\r\n调整ResourceStrings命令对话框。\r\n时间轴添加了一个属性AfterOperaDaysFromZero控制术后天数是否从0开始显示。\r\n新增BehaviorOptions.EnableContentChangedEventWhenLoadDocument。\r\n新增ContentStyle.EmphasisMark属性。\r\n修改插入特殊符号。\r\n修改了着重号的显示不正确的问题。\r\n增加EmphasisMark命。\r\n疼痛指数图。\r\n改进VBA脚本引擎。\r\n改进文档元素事件脚本处理的功能。\r\n调整执行命令对话框。\r\n修改了WEB控件自动回发的HTML不正确的问题。\r\n修改了序列化的参数值加载错误的问题。\r\n调整Round函数和Excel效果相同，支持精确到对应的位数。\r\n修改了元素边界是否绘制判断失误的错误。\r\n修正了错误的简体与繁体窗体标题。\r\n修改了打印预览控件的PrintDocumentExt( false,“”)时第二个参数无效的错误。\r\n修改了一个维文注册的问题。\r\n修改了复选框导出到PDF中勾选图片有误的问题。\r\n新增了XTextTableElement.ShowCellNoneBorder属性。\r\n新增XTextCheckBoxElementBase.CheckboxVisibility属性。\r\n修改了文本标签元素大小计算宽度值过大的问题。\r\n修改了.NET4.0中脚本事件不执行的错误。\r\n调整了维文版的功能。\r\n新增XTextInputFieldElement.EnableUserEditInnerValue属性。\r\n增强了DCSoft.Drawing.DocumentTermianlTextInfo的图形样式。\r\n新增DocumentViewOptions.HeaderBottomLineWidth属性。\r\n修改时间轴,当两个竖行文本出现相同X坐标的时,控制中间的分割线是否显示 新加属性控制。\r\n改进插入元素时的ID号自动更换操作。\r\n增强InputFieldSettings.ListValueSeparatorChar的功能。使得不限制一个字符，可以是一个字符串，而且支持“@\r\n”这样的设置。\r\n增强插入文档元素时的自动更改重复的文档元素编号的功能，并能同步更新引用文档元素的表达式。"
    },
    {
        "year": "",
        "time": "04月30",
        "version": "",
        "number": "",
        "pre": "新增XTextTableRowElement.AllowInsertRowDownUseHotKey。\r\n更新维文版演示程序。\r\n修改月经史医学表达式。\r\n调整了触发元素数值编辑器的快捷键为高优先级。\r\n新增HighTemperatureColor  LowTemperatureColor控制高温和低温的颜色。\r\n新增LanternValueColorForUp,LanternValueColorForDown属性。\r\n修改了切换视图模式时插入点定位不准确的问题。\r\n修改复选框。\r\n新增XTextFieldElementBase.BackgroundTextItalic属性。\r\n修复竖行提示文本压线问题。\r\n新增竖行文本ValueTextTopPadding属性。\r\n新增ValuePoint下面的Verified核实属性。\r\n新增VerticalLine属性 心率脉搏竖直连线属性。\r\n新增ShadowPointVisible 心率脉搏阴影区域是否显示。\r\n修复竖行提示文本压线问题。\r\n新增竖行文本ValueTextTopPadding属性。\r\n新增ValuePoint下面的Verified核实属性。\r\n新增VerticalLine属性 心率脉搏竖直连线属性。\r\n新增ShadowPointVisible 心率脉搏阴影区域是否显示。\r\n修复竖行提示文本压线问题。\r\n新增竖行文本ValueTextTopPadding属性。\r\n新增ValuePoint下面的Verified核实属性。\r\n新增VerticalLine属性 心率脉搏竖直连线属性。\r\n新增ShadowPointVisible 心率脉搏阴影区域是否显示。\r\n添加条形码属性对话框设置数据源绑定功能。\r\n改进文档XML输出。\r\n修改了复制文档元素时的一些问题。\r\n新增了XTextCheckBoxElementBase.CaptionAlign属性。\r\n改进了续打时的样式，新增ViewOptions.MaskColorForJumpPrint。\r\n改进了以文本格式保存时的判断。\r\nWriterControl和XTextDocument对象新增SaveLongImageFileZoom()/SavePageImageFileZoom()\r\n修改月经史公式为选择框形式\r\n修改了时间轴的错误\r\n更新时间轴程序\r\n更新VB.NET程序。\r\n改进BS版演示程序。\r\n修改GetStructNamesByOneRegion接口返回值\r\n调整COM接口。\r\n改进WEB控件在手机中的效果。\r\n修改GetStructNamesByOneRegion\r\n新增AxWriterControl的ComCreateXDataBinding接口\r\n新增自定义图标CustomImage属性\r\n增加ComCreateXDataBinding\r\n更新代码功能\r\n新增时间轴合并Y坐标尺的功能。\r\n修改区域选择打印的问题。\r\n修复无法设置10%缩放比例问题。\r\n解决了时间轴中绘制文本时坐标溢出的错误。\r\n改进兼容性。\r\n更新了事件处理脚本函数的BUG\r\n改进了对内容只读性的判断。\r\n新增属性document.PageSettings.TerminalText.TextInMiddlePage\r\n修改了表格行绑定数据源操作时的错误。\r\n修改了正文网格线显示不全的问题。"
    },
    {
        "year": "",
        "time": "03月31",
        "version": "",
        "number": "",
        "pre": "修改了整洁打印不正确的问题。\r\n修改了HTML生成不全的问题。\r\nBUG修复，修复选中整行，删除表格列报错异常\r\n修复呼吸垂直显示R的圆圈位置异常问题\r\n更新时间轴软件。\r\n添加ValuePointUpAndDown属性，支持呼吸自定义垂直居中方式\r\n把CommandControler模式改回去了。\r\n修改了切换留痕模式和整洁模式时的BUG\r\n改进文档节展开和收缩的性能。\r\n设置快捷录入Tab以及获得焦点全选\r\n增强BehaviorOptions.MaxTextLengthForPaste选项功能，使其能设置为负数。\r\n修改了圆括号在数值表达式中的功能BUG。\r\n新增文档节展开和收缩功能。\r\n修改取消插入时，插入空元素的问题\r\n修改stringdictionary 不能序列化问题\r\n新增SectionElement属性对话框，可以设置ID和Name,方便模板设置\r\n解决初始化空值问题\r\n新增乳牙牙位图医学表达式\r\n新增XTextInputFieldElement.DefaultSelectedIndexs属性。\r\n修改编辑时文档批注刷新不及时的问题。\r\n改进单元格的自动适应字体大小时行间距的缩小问题。\r\n修改RedLinePrintVisible\r\n修改页眉页脚打印颜色全部变成黑色的问题\r\n新增恒压牙位图医学表达式\r\n新增了一些控件接口，封装了Document的一些接口。\r\n修复围术期2设计器 分页模式下自动关闭错误\r\n新增项目DCSoft.ASPNETDemoRunner\r\n添加文本标签边框属性\r\n添加网格线加粗和黑色打印"
    },
    {
        "year": "",
        "time": "02月29",
        "version": "",
        "number": "",
        "pre": "改进复杂表格在分页时的一个分页不准确的BUG。\r\n改进BS控件打印输出效果。\r\n新增WebWriterControl.PrintZoomRate属性。\r\n新增PropertyExpression.AllowChainReaction属性。\r\n修改COM接口。\r\n更新JS文件。\r\n修改了输入域中的AfterLoad中不执行文本格式化的BUG。\r\n更新演示程序。\r\n开始开发存储DOM结构。\r\n开始做自定义XML序列化的底层代码。\r\n修改了WriterControl.RuntimeReadonly属性不正确的错误。\r\n修改了自定义参数值反序列化时的错误。\r\n修改了CodeHelp没有映射文件的问题。\r\n新增WriterControl.SetResourceStringValue()函数。\r\n新增WriterContrl.EventKeyDownExt/EventKeyPressExt/EventKeyUpExt事件。\r\n改进加载文档时的表达式执行行为。\r\n新增 XTextDocument.ReadyState属性。\r\n修改chkPrintBoxOnlyChecked的名称是否打印勾选项改成是否打印勾选框\r\n改进时间轴控件的演示程序\r\n修改了一个字符串资源操作而导致的底层BUG\r\n改进对字符串资源的修改功能。\r\n新增字符串资源相关的演示程序\r\n更新维文演示程序\r\n修改AJAX加载文档处理加号异常"
    },
    {
        "year": "",
        "time": "01月31",
        "version": "",
        "number": "",
        "pre": "改进元素属性值表达式功能。\r\n修改了选择打印的功能。\r\n更新WEB演示程序。\r\n改进HTML测试程序。\r\n改进DCSoft.WMP的代码组织结构。\r\n增强打印控制过程。\r\n新增XTextDocument.EventBdingPrint事件。\r\n新增XTextDocument.EventPrintQueryPageSettings事件。\r\n新增XTextDocument.EventPrintPage/EventEndPrint事件。\r\n修该文档生成器的枚举数值显示。\r\n设置全局变量控制消息提示窗口。\r\n更新接口公开等级。\r\n增加时间轴设计器打开窗体最大化RunDesignerMax接口。\r\n修改执行命令对话框。\r\n新增执行命令对话框验证密码功能。\r\n新增BehaviorOptions.AutoShowScriptErrorMessage属性。\r\n改进控件显示程度。\r\n新增InputFieldSettings.RepulsionForGroup属性，实现分组互斥功能。\r\n添加对手写输入法的支持。\r\n调整开发者工具。\r\n修改了WriterControl.AcceptsTab属性值功能无效的问题。\r\n修改了复制表格时的一个BUG\r\n修改了数值型表达式执行的一个BUG。\r\n修改了插入单选框、复选框时被自动逻辑删除的BUG。\r\n改进ContentChangedEvent事件模型。\r\n改进Tab键切换控件焦点的功能。\r\n修改单选框勾选打印选项。\r\n改进BS打印HTML的输出。\r\n改进了BS控件中打印输出的效果。\r\n修改了BS控件中保存文档时复选框勾选状态不正确的问题。\r\n改进BS控件的打印和鼠标拖拽滚动功能。\r\n改进BS控件在客户端的展现效果。\r\n修改Navigator.CurrentNode定位不准确的问题。\r\n改进BS客户端打印的功能。\r\n改进BS控件中的打印功能。\r\n改进BS控件的编辑状态下的行为。\r\n更新演示程序。\r\n新增时间轴设计器标题和名称点击自动对应功能。\r\n更新时间轴的标题设计器。\r\n改进打印当前页的问题。\r\n修改时间轴设计器标题和名称联动功能，防止出现条数不对等报错。\r\n更新时间轴演示程序。\r\n改进BS控件。\r\n改进加载文件时加载文档参数值的一个BUG。\r\n修改CodeHelp重载问题。\r\n修改CodeHelp清空文件问题。\r\n改进CodeHelp文件的读取。\r\n新增DCSoft.Web.TreeView项目。\r\n修改了跨线程中设置文档内容时的错误。\r\n修改了BS中PageImage方式无效的错误。\r\n修改单元格属性值表达式的错误。\r\n改进Tab键切换输入焦点的功能。\r\n去掉BS控件中的PageHtml模式。\r\n修改Table_InsertRowUp命令中复制的表格行不正确的问题。\r\n修改FileSave命令中保存为HTML时无法指定编码格式的问题。\r\n修改了PB中不能插入文档批注的错误。\r\n修改了时间轴划网格线的横线坐标单位，把整数改成了浮点数，显示横向粗线。\r\n更新维文演示程序。\r\n修改了Tab键无法新增表格行的功能。\r\n改进开发者工具。\r\n新增BehaviorOptions.OutputFieldBorderTextToContentText选项。\r\n改进BS控件中留痕的展示。\r\n改进BS控件打印模式下的样式。\r\n修改正则表达式的错误。\r\n改进WebService的QueryListItems的定义。\r\n添加打印预览控件自动翻转到最后一页的功能。\r\n新增XPageSettings.SwapLeftRightMargin属性。\r\n更新BS演示程序中的树状列表控件。  "
    },
    {
        "year": "2015",
        "time": "12月31",
        "version": "",
        "number": "",
        "pre": "调整.NET2.0客户端配置工具代码文件位置。\r\n调整编辑器软件代码文件结构。\r\n新增XDataBinding.TextBindingPath属性。\r\n增XTextTableRowElement.AllowUserPressTabKeyToInsertRowDown属性。\r\n更新演示程序。\r\n更新自定义下拉列表控件演示程序。\r\n新增CODE HELPE VIEWER项目。\r\n增强对WriterControl.ViewControl的非空判断。\r\n调整时间轴时间控件内容布局模式。\r\n改进打印预览显示缓慢的问题。\r\n改进网格线绘制问题。\r\n改进打印预览的性能问题。\r\n增加.NET20的代码帮助文档查看器。\r\n修改XTextContainerElement.Text属性值。\r\n改进字符大小测量算法。\r\n改进WEB编辑器中的JS编辑功能。将UEditor初步嵌入。\r\n修改了排版时的分页符定位算法的一个BUG。\r\n改进网格线影响分行排版算法。\r\n更新COM接口。\r\n新增XTextPageInfoElement.SpecifyPageIndexs属性。\r\n新增SpecifyPageIndex命令。\r\n改进表达式功能，表达式中能调用VB.NET脚本中的方法。\r\n改进BS控件中文档格式编辑功能的JS代码。\r\n改进BS控件打印模式下的网格线输出功能。\r\n改进BS中的打印功能。\r\n新增藏文版演示程序。\r\n新增AJAX加载文档的功能。\r\n改进AJAX加载打印的功能。\r\n更新WEB演示程序。\r\n改进打印预览控件。\r\n增强打印功能，实现乱序打印功能。\r\n改进AJAX加载文档功能。\r\n新增乱序打印功能。\r\n改进数据源绑定处理机制。\r\n新增XTextDocument.SetParameterEnabled()。\r\n新增XTextDocument .GetParameterEnabled()。\r\n新增WriterControl.SetDocumentParameterEnabled()。\r\n新增WriterControl.GetDocumentParaneterEnabled()。\r\n修改了BS控件内存泄露的问题。\r\n改进AJAX中的Session Timeout的判断机制。\r\n添加时间轴StanderNameList  StanderTitleList属性。\r\n添加对DevExpress控件的设计时支持。\r\n更新DEVEXPRESS演示程序。\r\n改进DevExpress演示程序。\r\n改进授权控制。\r\n新增WriterControl,XtextDocument的WriteDataFromDataSourceToDocument()。\r\n新增WriterControl,XtextDocument的WriteDataFromDocumentToDataSource()。\r\n新增WriterControl,XtextDocument的GetBindingDataSources()。\r\n新增WriterControl,XtextDocument的GetDataSourceBindingDescriptions()。\r\n修改时间轴自定义标题和名字为AddStanderNameList AddStanderTitleList 方法。\r\n改进用户登录时的操作。\r\n改进EditorRefreshView的操作。\r\n改进绑定DEVEXPRESS控件的加载缓慢的问题。\r\n修改StringBuild提高效率。\r\n为图形编辑器新增线条粗细的设置。\r\n改进动态加载列表项目的一个BUG。\r\n新增WriterControl,XtextDocument的SaveLongImageFile()。\r\n新增WriterControl,XtextDocument的SaveLongImageToBase64String()。\r\n新增XTextDocument.CreateLongBmp()函数。\r\n修改了扩展文本显示的一些问题。\r\n修改了一些文档元素类型不可派生。\r\n新增对双面打印的支持。 \r\n改进复选框勾选模式。\r\n改进UI等待界面的显示。\r\n解决了XTextDocument.CompressUserHistories()中的一个下标BUG。\r\n解决CodeHelp加载网络程序集的错误。\r\n修改了缩放时标尺的显示和操作问题。\r\n改进了自动换行和自动缩放时的算法。\r\n修改了VariableString模块解析“[%]”的错误。\r\n改进数据源绑定时的性能。\r\n改进输入域边界元素的显示和打印行为。\r\n修改了由于在表单模式下执行表达式而导致的文档视图滚动的错误。\r\n正在添加对C++Builder的支持。\r\n改进快速输入模式的功能。\r\n正在添加属性值表达式的功能。\r\n改进元素属性值表达式的功能。\r\n改进表达式执行过程。"
    },
    {
        "year": "",
        "time": "11月30",
        "version": "",
        "number": "",
        "pre": "改进文档网格线功能。新增XTextContentElement.GridLine属性。\r\n新增XPageSettings.DocumentGridLine属性。\r\n修改了光标向下移动时的一个下标越界错误。\r\n修改了表达式执行时的一个类型转换错误。\r\n修改了单元格属性对话框。\r\n调整COM接口。\r\n调整网格线的演示程序。\r\n修改InsertButton的问题。\r\n改进文档网格线功能。\r\n改进表格单元格属性对话框。\r\n改进分页功能。\r\n修改PDF输出功能的错误。\r\n新增XTextObjectElement.PrintVisibility属性。\r\n新增XTextTableElement.AllowUserDeleteRow/AllowUserInsertRow属性。\r\n修复InsertButton命令界面命令文本录入错误值问题。\r\n改进XTreeListViewItem.LonlyCheck特性。\r\n改进退格键处理段落缩进的功能。\r\n修复时间输入域显示异常bug。\r\n新增WriterDataFormats属性编辑器。\r\n改进联动列表事件功能。\r\n修改了解析RTF时的一个BUG。\r\n修改了SetMultiBoxMutexString与GetMultiBoxMutexString。\r\n新增WriterControl.EventBeforeFieldContentEdit事件。\r\n新增WriterControl.EventAfterFieldContentEdit事件。\r\n更新演示程序。\r\n改进InsertMediaElement命令。\r\n新增WriterControl.SetDomImage()。\r\n新增WriterControl.SetDomImageByFileName()。\r\n新增WriterControl.SetDomImageByBase64String()函数。\r\n修改复选框输出PDF时的BUG。\r\n改进开发者工具。\r\n修改下拉列表不会触发DocumentCotentChanged事件的BUG。\r\n改进错误报表程序。\r\n新增XTextContainerElement.ContentReadonlyExpression属性。\r\n新增ValueEditorActiveMode.Enter枚举项。\r\n新增XTextInputFieldElement.AutoSetSpellCodeInDropdownList属性。\r\n改进COM注册程序。\r\n改进AxWriterControl对BS开发的支持。\r\n新增XTextSubDocumentElement.DocumentID属性。\r\n新增WriterControl.GetDataSourceBindingDescriptionsXML()函数。\r\n新增XTextTableElement.SplitRowsByContentLines()函数。\r\n改进错误对话框。\r\n改进输入域边界元素边框文本的显示。\r\n新增XTextCheckBoxElementBase.ContentReadonlyBindingTargetID属性。\r\n改进授权控制。\r\n改进编辑器控件标准控件事件的处理模式。\r\n修改导出COM接口时的默认文件名。\r\n新增XPageSettings.LeftMarginInCM。\r\n新增XPageSettings.TopMarginInCM。\r\n新增XPageSettings.RightMarginInCM。\r\n新增XPageSettings.BottomMarginInCM属性。\r\n改进导出RTF的格式问题。\r\n正在添加对藏文的支持。\r\n修改表单模式下复选框勾选导致滚动的问题。\r\n新增image.pdf的存储格式。\r\n改进打印预览控件的输出文件菜单项目。\r\n改进演示程序。\r\n修改段落列表符号显示不正确的问题。\r\n修改控件的GetNavigateNodeString()返回值错误。\r\n新增BehaviorOptions.AutoDocumentValidate属性。\r\n添加了分页模式下时间轴导出为图片功能。\r\n新增AxWriterControl.CloseForPBWithoutDock()函数。\r\n新增WriterControl.GetNavigateXmlString()函数。\r\n改进WriterControl事件处理模式。\r\n修改了CharacterMeasurer引用XFontValue.BufferCleaded事件而导致的内存泄露问题。\r\n改进DELPHI注册安装模块。\r\n修改了内存泄露的问题。\r\n改进宽度为0的元素的显示问题。\r\n改进对PB的支持。\r\n新增GlobalDebugInfo命令。\r\n改进排版时Header/Footer高度修正算法。\r\n修改排版时修改Header/Footer高度的BUG。\r\n改进演示程序。\r\n改进排版算法。\r\n改进物理删除已经被逻辑删除的内容时的权限等级判断算法。\r\n新增.NET4.0的工程类型。\r\n改进开发工具集。\r\n改进对.NET4.0的支持。\r\n修改了时间轴XML文档错误导致时间轴关闭的BUG。\r\n改进在VB中快捷辅助录入方式ENTER键无法选择项目的问题。\r\n改进代码混淆功能。\r\n改进混淆特性的ApplyToMembers值。\r\n更新时间轴授权控制模块。\r\n改进BS控件打印功能。\r\n添加了时间轴标题行换行功能。\r\n修改BS控件校验文本长度。\r\n修改BS控件校验是否为数值or整数类型。\r\n添加客户端注册工具对.NET4.0的支持。\r\n改进纯WEB打印功能。\r\n修改了XTextParagraphFlagElement.RuntimeLayoutDirection属性中的一个空引用错误。\r\n新增XTextInputFieldElement.LastSelectedListItems属性。"
    },
    {
        "year": "",
        "time": "10月31",
        "version": "",
        "number": "",
        "pre": "新增文档脚本事件处理功能。\r\n改进子文档元素的功能。\r\n改进BS中的病程记录功能。\r\n新增WriterControl.LicenceDisplayMode属性。\r\n改进BS控件操作多文档和子文档元素的功能。\r\n改进编辑器命令执行器。\r\n新增CommandControler的EventName扩展属性。\r\n修改医学表达式外观。\r\n新增XTextContainerElement.SetContentLockByCurrentUser()。\r\n新增XTextContainerElement.SetContentLock()。\r\n新增XTextContainerElement.ContentLock。\r\n新增WriterControl/XTextDocument的LockContentByTableRow()。\r\n新增WriterControl/XTextDocument的LockContentByElementID()。\r\n新增WriterControl/XTextDocument的LockContentByElement()。\r\n更新COM编程接口。\r\n改进COM注册机制。新增清理注册表的功能。\r\n新增DELPHI注册向导。\r\n更新工程文件。\r\n修改了单元格包含分页符时表格标题行无效的问题。\r\n改进AxWriterControl在PB中崩溃的问题。\r\n初步实现在浏览器中的续打功能。\r\n让XTextHostControlElement能承载原生态的WIN32控件功能。\r\n修改了XTextContentElement.DeleteRedundant()的问题。\r\n改进了BS控件中的续打。\r\nJS版本更新。\r\n改进BS版演示程序\r\n修改InsertShape的异常。\r\n改进XTextTableElement.SortRows()。\r\n新增DCSoft.Writer.Dom.IDCTableRowComparer类型\r\n新增XTextTableCellElement.MirrorViewForCrossPage属性。\r\n改进BS控件的JS输出。\r\n新增XTextHorizontalLineElement.LineLengthInCM。\r\n修改GetControlInfos中的GetCustomAttribute异常。\r\n改进编辑器控件自动保存机制。\r\n错误JS代码调整。\r\n合并JS。\r\n新增DCSubDocumentManager.js资源文件\r\n添加网站计数器。\r\n改进AxWriterControl销毁的操作。\r\n新增XTextObjectElement.ValueExpression属性。\r\n改进表达式引擎。\r\n改进单选、复选框多行文本的显示。\r\n新增XTextTableRowElement.NewPage属性。\r\n添加插入图形的异常处理。\r\n添加编辑控件宿主的异常处理。\r\n改进多层表达式执行的效率。\r\n改进同组单选框触发事件的顺序。\r\n改进表格单元格绑定数据源的操作。\r\n改进WINFORM演示程序。\r\n改进单元格属性对话框。\r\n新增命令Table_ConvertTableElementToDataTable命令。\r\n改进AxWriterControl中在PB中的错误。\r\n改进编辑器控件的CloseForPB()。\r\n保留输入域背景文字的空格。\r\n修改了时间轴web版本的超链接样式。\r\n改进打印预览控件在PB中是使用。\r\n改进联动列表功能。\r\n修改了XML注释错误。"
    },
    {
        "year": "",
        "time": "2015-09-30",
        "version": "",
        "number": "",
        "pre": "更新时间轴程序的代码结构。\r\n改进BS控件客户端打印功能。\r\n修改了打印预览错误的错误。\r\n改进文档元素绘制过程。\r\n新增XTexFieldElementBase.PrintBackgroundText属性。\r\n新增XTextCheckBoxElementBase.PrintTextForChecked/PrintTextForUnChecked.\r\n修改了输入域固定宽度时的打印问题。\r\n新增BS控件客户端事件功能。\r\n改进了加载文档时等待界面的绘制过程。\r\n新增BehaviorOptions.MinCountForDropdownListSpellCodeArea。\r\n改进非分页模式下滚动时背景图片破碎的问题。\r\n改进导出HTML/MHT文件时样式的问题。\r\n修改了医学表达式的命令。\r\n更新了时间轴组件。\r\n改进时间轴演示程序。\r\n修改WEB演示程序。\r\n改进生成COM接口代码的功能。\r\n修改了XTextDocument.Top属性值无作用的问题。\r\n改进代码混淆范围。\r\n新增XTextDocument.BeforeDrawContent/AfterDrawContent。\r\n更新COM接口代码。\r\n新增WriterControl.SpecifyLoadFileNameOnce属性。\r\n改进报表软件的代码混淆标记。\r\n上传WMP接口代码。\r\n改进时间轴中无效数据点导致的连线破碎的问题。\r\n新增WriterControl.MoveTo**方法。\r\n改进表达式引擎。\r\n改进导出文档图片的功能。\r\n修改某些元素类型的Focused属性值不对的问题。\r\n修改了时间轴控件注册不成功的问题。\r\n改进WEB控件属性值存储模式。\r\n调整了代码混淆相关的功能。\r\n修改了数值表达式的功能。\r\n修改WEB演示程序。\r\n更新时间轴演示程序。\r\n修改了XTextDocument.Top属性值无作用的问题。\r\n修改时间轴设计器。\r\n改进生成COM接口代码的功能。\r\n新增文档终结文本标记功能。\r\n修改自定义XML序列化的错误。\r\n改进等待操作时的UI界面。\r\n新增WriterControl.ShowRegisterInfoInProgressUI属性。"
    },
    {
        "year": "",
        "time": "08-31",
        "version": "",
        "number": "",
        "pre": "新增BehaviorOptions.MaxZoomRate/MinZoomRate。\r\nBS客户端新增InsertInputField命令。\r\n改进BS客户端插入输入域的功能。\r\n改进BS客户端数据源绑定功能。\r\n改进BS控件在ASP.NET UpdatePanel中的功能。\r\n更新时间轴演示程序。\r\n修改了时间轴在显示超时间范围数据的一个BUG。\r\n改进BS客户端功能。\r\n改进WEB演示程序。\r\n改进BS控件注册码接口。\r\n改进授权控制。\r\n改进BS客户端功能。  \r\n改进注册码生成器。\r\n改进时间轴演示程序的注册部分。\r\n更新WinForm演示程序。\r\n改进BS控件序列化参数值的功能。\r\n改进开发者工具。\r\n新增表达式函数FINDINDEX()\r\n改WEB控件的参数序列化功能。\r\n改进整洁打印的BUG\r\n新增ListItem.LonelyChecked属性。\r\n改进加载大量下拉列表的性能。\r\n改进后台工作任务功能模块。\r\n新增打印预览控件AllowUserChangePrintArea属性。\r\n调整COM接口。\r\n调整混淆范围。\r\n新加的续打设置属性。\r\n改进BS版演示程序。\r\n修改线条宽度为线条粗细。\r\n修改ValueBinding.Enable属性。\r\n新增XTableCellElement.AutoFixFontSizeMode属性。\r\n设置续打时在打印预览中能否选择再进行续打。\r\n启用XTextImageElement.Source属性。\r\n改进插入表格列的功能。\r\n改进保存图片功能。\r\n改进输入域边界元素的显示。\r\n改进鼠标点击是光标定位。\r\n新增BehaviorOptions.AutoFixElementIDWhenInsertElements选项。\r\n开发BS控件客户端打印功能。"
    },
    {
        "year": "",
        "time": "07-31",
        "version": "",
        "number": "",
        "pre": "更新维文版演示程序。\r\n添加对JSON的支持。\r\n改进编辑时的删除字符的行为。\r\n改进BS浏览器客户端功能。\r\n新增BehaviorOptions.ContinueHeaderParagraphStyle选项。\r\n新增BehaviorOptions.AllowDeleteJumpOutOfField选项。\r\n开始添加BS控件中的文档视图传输功能。\r\n改进BS客户端拖拽修改图片大小的功能\r\n新增BS客户端医学表达式编辑功能。\r\n增加BS对医学表达式的支持。\r\nUI样式调整。\r\n改进HTML解析功能。\r\n改进BS编辑器中的视频功能。\r\n更新JSON组件。\r\n新增带测试的HTML.DOM程序。\r\n改进BS客户端的输入域展示功能。\r\n改进BS客户端对IE8的支持。\r\n改进BS客户端功能，新增FileSave命令。\r\n增加BS表达式背景图片。\r\n改进BS医学表达式。\r\n解决Safari游览器Table显示错误。\r\n改进JS控制。\r\n改进BS客户端对话框样式。\r\n修改注释样式。\r\n边框线颜色设置。\r\nBorder边框颜色调整。\r\n解决IE8边框丢失。\r\n新增XTextCheckBoxElementBase.PrintBoxOnlyChecked属性。\r\n新增DocumentBehaviorOptions.MoveCaretWhenDeleteFail属性。\r\n改进BS客户端功能。\r\n调整WebWriterControl代码结构。\r\n医学表达式UI样式调整。\r\n改进BS服务器端控件。\r\n改进WEB演示程序的一个错误。\r\n改进客户端JS代码分布。\r\n改进BS客户端功能，新增多文档处理功能。\r\n改进BS版的插入文件的功能。\r\n更新开发者辅助工具。\r\n改进BS客户端的另存为小模板的功能。\r\n改进BS控件混淆设置。\r\n改进BS客户端传输数据的格式。\r\n新增文档修改判断功能。\r\n改进BS控件对UpdatePanel的支持。\r\n开始新增BS控件中操作表格的功能。\r\n改进BS客户端出错处理。\r\n增强BS客户端对表格操作的功能。\r\n改进对DELPHI XE的支持。\r\n新增事件消息循环处理机制。\r\n改进表单模式中删除操作失败后插入点的移动效果。"
    },
    {
        "year": "",
        "time": "06-30",
        "version": "",
        "number": "",
        "pre": "改进WEB客户端JS代码，新增WEB中显示文档批注的功能。\r\n新增WEB中显示文档批注的功能。\r\nWEB客户端能输出目录结构，改进JS。\r\n增强WEB编辑器命令功能，改进JS。\r\n修改IF表达式。\r\n修改LEN表达式。\r\n改进BS客户端展示功能。\r\n新增对语言的授权控制。\r\n新增上传图片的功能。\r\n增强WEB编辑器命令功能。\r\n修改固定宽度输入域套嵌的排版问题。\r\n解决了退格死机的问题。\r\n将laydate添加到编辑器中。\r\n改进BS中的日期选择。\r\n修改从字符串加载文档的BUG。\r\n新增BS客户端文档数据校验功能。\r\n上传Open_Newtonsoft_Json代码。"
    },
    {
        "year": "",
        "time": "05-31",
        "version": "",
        "number": "",
        "pre": "图片编辑器新增拉线批注功能。\r\n修改了拖拽操作时文档内容丢失的问题。\r\n增强媒体文档元素。\r\n更新演示程序。\r\n改进嵌入多媒体功能。\r\n增强水印功能。\r\n改进POS打印功能。\r\n改进软件的分页过程。\r\n修改了输入域边界元素导致的排版的问题。\r\n改进了导入按钮元素的过程。\r\n更新了COM接口。\r\n更新了演示程序。\r\n修改了光标键上下移动时遇到表格时的BUG。\r\n新增WriterControl.SynchroServerTime()、WriterControl.SynchroServerTimeByParameters(),实现新的服务器时间同步方式。\r\n修改导出RTF的功能。\r\n新增XTextInputFieldElement.DefaultValueType属性。\r\n增加输入域的默认值属性。\r\n修改编辑内容和段落样式而导致XTextContainerElement.Modified属性值不改变的BUG。\r\n调整软件。\r\n更新软件加密功能。\r\n更新代码混淆设置。\r\n改进标题功能。新增标题能否显示在目录中的功能。\r\n新增BehaviorOptions.ActiveCheckInstallWindowsMediaPlayer。\r\n图形元素中新增图片缩放元素功能。\r\n正在开发BS在线编辑功能。\r\n改进文本行排版行为。\r\n上传了执行表达式方法的JS文件。\r\n为WEB控件添加客户端执行元素表达式的功能。\r\n添加了JS数值表达式。\r\n改进WEB编辑器。\r\n新增WriterControl.BackColorString。\r\n新增WriterControl.PageBackColorString。\r\n新增WriterControl.GetElementChecked()。\r\n新增WriterControl.SetElementChecked()。\r\n新增AxWriterControl.GetDocumentValueValidateResultCount()。\r\n对JS文件加锁处理。\r\n新增WriterControl.PageBorderColorString、CurrentPageBorderColorString。\r\n改进WEB控件。\r\n改进WEB控件前端JS代码。\r\n新增WriterControl/Document.CreateElementByXMLFragment()。\r\n新增XTextElement.GetXMLFragment()。"
    },
    {
        "year": "",
        "time": "04-30",
        "version": "",
        "number": "",
        "pre": "创建计算器目录。\r\n新增document.GetCheckedValueList()。\r\n修改了document.SavePageBitmap()中的一个内存泄漏问题。\r\n修改了XFontValue内部缓存区过小的问题。\r\n创建计算器代码目录。\r\n更新Header系列命令。\r\n改进图片编辑器。\r\n改进COM接口。\r\n改进图片加载数据的接口。\r\n修改了偏移续打时分页不准确的错误。\r\n新增文档模板浏览器目录。\r\n新增field.FieldSettings.MultiColumn属性，支持多列列表方式。\r\n改进演示程序。\r\n改进ValueValidateStyle的文本字节长度计算方式。\r\n修改了ValueValidateStyle.DateMaxValue,DateMinValue不能保存的问题。\r\n修改了多段落单元格导出RTF的格式错误。\r\n修改了报表软件的兼容性问题。\r\n数值小数位数判断。\r\n新增小数位数判断string。\r\n改进多栏目下拉列表。\r\n改进复选框分组算分。\r\n数值界面调整。\r\n新增视频文档元素对象。\r\n新增InsertMediaElement命令。\r\n去掉多语言切换。\r\n删除无效文件。\r\n改进媒体元素功能。\r\n添加HeaderFormat的字体名称。\r\n添加HeaderFormat中对字体名称的判断。\r\n增强对旧XML文件格式的支持。\r\n改进输入域背景文字的显示。\r\nBUG修复，小数位数整数误报。\r\n新增目录区域超链接功能。\r\n改进提示文本处理方式。\r\n改进超链接点击事件。\r\n修改体温单保存为本地文件的错误。\r\n改进HTML文档生成。\r\n新增WriterControl.EventOutlineTreeChanged事件。\r\n新增XTextParagraphFlagElement.GetParagraphElements()方法。\r\n改进段落层次编辑时的行为。\r\n更新COM接口。"
    },
    {
        "year": "",
        "time": "03-31",
        "version": "",
        "number": "",
        "pre": "更新DCHTML。\r\n调整了混淆范围。\r\n修改了insertxml命令的一个样式无法导入的BUG。\r\n调整了混淆范围。新增XPageSettings.AutoChoosePageSize。\r\n去掉了DCSoft.Common.ObfuscationLevelAttribute的效果。\r\n更新COM接口。\r\n改进下拉列表修改输入域内容的只读性检测。\r\n改进表达式执行引擎。\r\n修改了输入域单位和标签的位置。\r\n修改固定行高时大文字显示没剪切的BUG。\r\n修改了制表符在排版中计算宽度的错误。\r\n修改了XTextInputFieldElement.Label和Unit属性对BodyText的相关的BUG。\r\n开始开发设置段落标题样式的功能。\r\n修改续打功能。\r\n更新注册码生成器。\r\n更新繁体中文字符串资源。\r\n修改了从IE中复制内容的乱码问题。\r\n新增能直接设置element.Style属性值的功能。\r\n新增KBEntry.CopyListItems属性。\r\n清理快捷方式。\r\n改进编辑器WEB服务功能。\r\n改进编辑器控件Web服务模式。\r\n改进WEB控件。\r\n改进开发者工具。\r\n调整混淆范围。\r\n修改了医学表达式的一个文字显示错误问题。\r\n改进打印对话框额外控件。\r\n修改Doument.AfterLoad中触发CheckBox元素的ContentChanged事件中的错误。\r\n改进COM接口。\r\n改进ControlHost的获得元素所承载的控件的BUG。\r\n改进打印机选择对话框扩展界面的定位。\r\n改进目录域功能。\r\n改进RTF中多层列表设置的解析。\r\n增强页眉注册标题文字的显示位置。\r\n改进加载RTF中的列表设置的功能。\r\n改进开发者工具。\r\n改进RTF解析功能。\r\n改进文档大纲层次结构功能。\r\n改进导出图片时无法导出水印的问题。\r\n改进图形编辑器。"
    },
    {
        "year": "",
        "time": "02-28",
        "version": "",
        "number": "",
        "pre": "更新COM接口。\r\n新增XPageSettings.HideHeaderFooterInFirstPage属性。\r\n修改了导出RTF段落格式不对的问题。\r\n新增WriterControl.CommandStateNeedRefreshFlag属性。\r\n改进演示程序，新增演示文档。\r\n修改时间轴中超链接上头不显示手状光标的BUG。\r\n改进XTextImageElement.LoadImage()。\r\n改进段落列表样式的编辑功能。\r\n改进表格单元格选择的行为。\r\n修改了样式列表锁定的问题。\r\n新增XPageSettings.PageIndexsForHideHeaderFooter。\r\n改进MoveTo功能。\r\n新增BehaviorOptions.XMLContentEncodingName命令。\r\n修改了内容网格线绘制不准确的问题。\r\n改进无效区域算法，解决影响到页眉下边框线消失的问题。\r\n更新HTMLDOM程序。\r\n添加解密功能。\r\n修改了时间轴十字线残影的问题。\r\n修改了日期时间选择界面的数据状态问题。\r\n修改了合并单元格时单元格边框设置的问题。\r\n改进混淆处理模式。\r\n修改演示程序启动代码。\r\n改进开发者工具。\r\n新增BehaviorOptions.AppErrorHandleMode选项。\r\n新增XTextImageElement.EnableRepeatedImage属性。\r\n更新混淆控制代码。\r\n更新了混淆控制。\r\n修改了光标定位不准确的错误。\r\n修改了XTextContainerElement._ContentBuilder在复制操作的一个残留引用的BUG。\r\n改进普通视图模式下右侧内容显示不全的问题。\r\n改进表格分页算法。\r\n调整混淆范围。\r\n修复实体对象属性赋值，存在ParseFormat保存null问题。\r\n改进了InsertElements命令。"
    },
    {
        "year": "",
        "time": "01-31",
        "version": "",
        "number": "",
        "pre": "新增Table_SetCellGridLine命令。\r\n改进偏移续打功能。\r\n新增Table_RemoveEmptyRowInLastPage命令。\r\n将命令名称修改成Table_RemoveEmptyRowsInLastPage。\r\n新增Company类型\r\n改进COM接口。\r\n新增WriterControl.EnabledControlEvent属性。\r\n改进查找和替换功能。\r\n新增瞳孔图。\r\n新增光定位图。\r\n新增光定位图类型。\r\n新增胎心图。\r\n修改了一个绘制文档的BUG。\r\n修改InsertNewLine()。\r\n新增Table_ResetTableStyle,ResetFormValue命令。\r\n修改了单选框属性对话框的一个类型转换的错误。\r\n改进辅助快捷录入功能。新增WriterControl.EventQueryAssistInputItems事件。\r\n修改表格单元格单独设置宽度的BUG。\r\n新增XTextDocument.AutoApplyLocalDocumentOptions属性，配置保存在XML中的功能。\r\n改进单元格数值表达式功能。\r\n新增XTextSubDocumentSectionElement类型，添加新的病程记录控制形式。\r\n改进严格表单模式下的光标定位的BUG。\r\n修改设置标题行的一个错误。\r\n修改了FileOpen命令的一个BUG。\r\n改进性能。\r\n修改表格合并是的一个BUG。\r\n改进编辑器加载文档的性能。\r\n优化大文档时输入文字的速度。\r\n修改了下拉列表的一个显示BUG。\r\n新增选项BehaviorOptions.AutoTranslateSourceString。\r\n新增选项BehaviorOptions.AutoTranslateDescString。\r\n新增编辑器控件的EventBeforeUIKeyboardInputString事件。\r\n修改单元格拆分时的一个BUG。\r\n修改了加载文档时坐标转换信息未刷新的BUG。\r\n修改了保存RTF编码格式错误。\r\n修改快捷键导致的输入字符错误。\r\n新增选项BehaviorOptions.AutoAssistInsertStringDetectTextLength选项。\r\n改进文档数值表达式执行引擎。\r\n改进快捷辅助录入功能。\r\n添加资源文件。\r\n修改了表格行显示不全的一个BUG。\r\n改进开发者工具。\r\n改进涉及输入域边界元素的文档行换行算法。\r\n添加胎心图编辑对话框。\r\n改进图片环绕文字方式的一个BUG。\r\n修改导出RTF时的痕迹相关的BUG。\r\n改进单元格表达式功能。\r\n改进日期时间选择弹出式控件。\r\n改进开发者工具。\r\n改进BODY高度计算方式。\r\n改进单选框、复选框属性编辑对话框。\r\n新增XTextCheckBoxElementBase.EnabledHighlight属性。\r\n改进辅助录入功能。\r\n更新模板工具。\r\n修改了单选框属性对话框的一个类型转换的错误。\r\n新增WriterControl.EventQueryAssistInputItems事件。"
    },
    {
        "year": "2014",
        "time": "12-30",
        "version": "",
        "number": "",
        "pre": "修改标尺导致的弹出式界面定位不准的问题。\r\n改进WEB演示程序代码结构。\r\n改进客户端注册工具。\r\n新增XTextTableRowElement.EditorSetSpecifyFixedLineHeight()。\r\n修改了数据绑定中执行状态不能选择只执行一次的问题。\r\n新增时间轴标题行展开收缩功能。\r\n改进演示程序。\r\n新增时间轴EditOptions.FixSizeWhenInsertImage。\r\n更新时间轴COM编程接口。"
    },
    {
        "year": "",
        "time": "11-30",
        "version": "",
        "number": "",
        "pre": "修改了XTextLine.IndexInPage的数值计算错误。\r\n修改了图片点击时不能选中的错误。\r\n改进编辑器承载控件的形式，改进InsertControlHost命令，例如：ctl.ExecuteCommand('InsertControlHost', false, 'OCX:WyAccessPing.AccessPing');\r\n修改了时间轴中第一个数据不显示的问题。\r\n修改了ControlHost是初始化OCX控件的一个错误。\r\n改进承载OCX控件功能。\r\n添加ACCESS2000格式的演示数据库文件。\r\n新增ctlCustomHandleError演示程序.\r\n正在添加编辑时间轴数据的功能。\r\n修改了单元格中逻辑删除的内容能显示出来的问题。\r\n修改DeleteRecord方法的参数为null时的BUG。\r\n改进时间轴软件对时间精度的设置。\r\n更新编辑器控件的COM接口代码。\r\n改进BS自动更新功能。为时间轴控件添加自动更新功能。\r\n改进了WebWriterControl。\r\n新增时间轴控件的超链接点击事件。\r\n更新时间轴演示程序。\r\n修改了在中标控件模拟器中checkbox不触发Mouseclick事件的问题。\r\n新增时间轴的超链接显示行为。\r\n改进时间轴演示程序。\r\n改进编辑器控件平滑滚动功能。新增BehaviorOptions.SmoothScrollView选项。\r\n改进对DELPHI XE2的支持。\r\n新增时间轴设计器控件TimeLineDesignerControl。\r\n改进卡片列表控件。\r\n改进运行环境配置器。\r\n新增YAxisInfo.TopPadding/BottomPadding属性。\r\n改进EventValuePointClick事件不触发的问题。\r\n修改标题为空是分页模式下文档排版不正确的错误。\r\n改进时间轴绘制图形的一个BUG。"
    },
    {
        "year": "",
        "time": "10-30",
        "version": "",
        "number": "",
        "pre": "修改输入域在打印时是否显示占位的符号。\r\n改进字符上下标的计算和排版算法。\r\n修改了无法导出HTML文档的错误。\r\n修改了级联模板无效的BUG。\r\n分页符修改成默认不显示。\r\n修改了输入域失去焦点时自动更改文字的BUG。\r\n改进对WEB开发的支持。\r\n修改了WEB中显示内容不准确的问题。\r\n修改了WEB控件自动生成CAB的过程。\r\n开始改进时间轴的内容排版功能。\r\n修改了只读容器中可编辑图片属性的错误。\r\n修改了表格本身设置边框线的显示不准确的问题。\r\n修改了“ExecuteCommand”命令的执行方式。\r\n修改文档中超出页边距的内容不能正常显示，不能打印的问题。\r\n新增了打印预览控件打印前自动检查内容的功能。\r\n新增WriterControl.EventReportError事件。\r\n新增WriterControl.CommitDocumentUserTrace()。\r\n新增WriterControl.CommitContentUserTrace()。\r\n新增WriterControl.CommitContentUserTraceById()。\r\n新增XTextContianerElement.CommitUserTrace()。"
    },
    {
        "year": "",
        "time": "09-30",
        "version": "",
        "number": "",
        "pre": "改进图片属性编辑器。\r\n新增TestPrint命令。\r\n改进WEB控件对AX控件的支持。\r\n修改FileOpenString增加字符串为空的判断。\r\n改进了段落属性设置对话框。\r\n新增并完善时间区域展开和收缩功能。\r\n改进时间轴的时间刻度算法。改进时间轴图形绘制。\r\n改进时间轴的时间区域的图形绘制。\r\n改进时间区域刻度设置功能。\r\n改进时间刻度编辑器，新增documentDblClick事件。\r\n对时间轴新增前景色的功能，改进图形显示。\r\n修改了时间轴打印的BUG。\r\n新增TitleLineInfo.TextColor属性。\r\n改进时间轴，新增BackColor/PageBackColor设置。改进标题换行显示。\r\n更新字符串资源。\r\n改进时间轴控件，使得当出现时间区域时禁止分页模式。\r\n改进时间轴演示程序。\r\n改进时间轴控件，改进时间区域功能的一些BUG。\r\n提高对旧程序的兼容性。\r\n时间轴添加时间区域功能，能临时更改时间标尺。这对文本型TitleLineInfo影响比较大。\r\n添加围术期数据演示功能。\r\n增加时间轴不定时间间隔的功能。\r\n增强了时间轴功能，新增手术排程演示。\r\n改进时间轴控件显示。\r\n更新COM编程接口。\r\n增强了时间轴功能，新增手术排程演示。\r\n改进了段落属性设置对话框。\r\n正在增加时间轴不定时间间隔的功能。\r\n时间轴添加时间区域功能，能临时更改时间标尺。这对文本型TitleLineInfo影响比较大。\r\n添加围术期数据演示功能。\r\n修改了FileOpen的异常。\r\n改进时间轴控件，改进时间区域功能的一些BUG，提高对旧程序的兼容性。\r\n改进时间轴控件，使得当出现时间区域时禁止分页模式。改进时间轴演示程序。"
    },
    {
        "year": "",
        "time": "08-30",
        "version": "",
        "number": "",
        "pre": "改进了对多线程的支持。\r\n修改了命令InsertLabel。\r\n修改了绘制体温单时，时刻序号计算的一个BUG。\r\n修改了时间输入域的HH:MM为HH:mm。\r\n添加了只做B/S时的CAB文件的功能。\r\n修改了命令Table_SplitRowsByContentLines。\r\n为时间轴添加数据标题文本颜色。\r\n为时间轴Y刻度尺添加下端标题的功能。\r\n为时间轴的数据网格区域添加上下边距的功能。\r\n改进时间轴的绘图操作。把表示空时间1980-1-1改为1900-1-1。\r\n改进程序集数据元信息加载内容，改进配套开发工具。\r\n修改了时间轴的跨线程访问错误。\r\n修改了加载程序集数据元时的一个BUG。\r\n新增时间轴新增ValuePoint.EndTime。\r\n新增时间轴控件的手术排程演示。"
    },
    {
        "year": "",
        "time": "06-30",
        "version": "",
        "number": "",
        "pre": "新增POS打印功能。\r\n新增自定义输入域数据编辑器用户控件功能。\r\n改进图片元素显示。\r\n改进图形底层代码，新增图形画布包装对象。\r\n新增按钮文档元素类型。\r\n对输入域元素新增表单按钮。\r\n新增ViewOptions.ShowFormButton选项。"
    },
    {
        "year": "",
        "time": "05-30",
        "version": "",
        "number": "",
        "pre": "新增对旧格式XML文件的读取功能。\r\n新增在WEB中查看文档内容的ASP.NET用户控件。\r\n改进用户授权信息的显示方式。\r\n新增ViewOptions.PreserveBackgroundTextWhenPrint选项。"
    },
    {
        "year": "",
        "time": "04-30",
        "version": "",
        "number": "",
        "pre": "新增体温单元素。新增InsertTemperatureChart命令。\r\n新增生成文档内容图片的功能。\r\n改进保存PDF文档的功能。\r\n增强内容同步复制功能。"
    },
    {
        "year": "",
        "time": "04-09",
        "version": "",
        "number": "",
        "pre": "新增输入域联动下拉列表功能。\r\n新增输入域数值表达式功能。\r\n修改了文本围绕图片时编辑和分页的一个错误。\r\n增强打印预览功能，修改了打印预览中的一个错误。\r\n修改了文本替换的错误。\r\n新增区域选择打印模式，新增对应的BoundsSelectionViewMode命令。\r\n增强矢量图绘制功能。\r\n新增打印预览分栏显示功能。"
    },
    {
        "year": "",
        "time": "03-18",
        "version": "",
        "number": "",
        "pre": "改进保存文档机制。\r\n修改了导出PDF/RTF/HTML文档时的一些错误。\r\n新增了精确到分钟的日期时间输入方式。\r\n新增CopyAsText命令。\r\n新增输入域受限固定长度的功能。可以设置SpecifyWidth属性值为负数。\r\n改进控件承载元素，使得能承载OCX控件。\r\n新增PageBorderBackgroundFormat命令。\r\n新增文档元素事件开发。\r\n新增能显示文档行数的功能。\r\n新增ExecuteScriptImmediately命令，能快键执行VB脚本。\r\n新增计算文档页剩余空白行数的功能。\r\n新增SetDefaultPrinterName命令。\r\n增强了表格功能，能在参数中指定批量的表格行列。\r\n新增字符间距功能。新增LetterSpacing命令。"
    },
    {
        "year": "2013",
        "time": "12-18",
        "version": "",
        "number": "",
        "pre": "改进打印预览。\r\n新增编辑器控件对话框显示事件。\r\n修改了表格标题行在分页排版显示位置不准确的错误。\r\n新增手动双面打印功能。\r\n新增Table_InsertRowsToPageBottom命令。\r\n修改了自动缩放时添加批注导致的文档视图破碎的问题。\r\n修改了分页是的一个错误。\r\n改进复选框元素的兼容性。\r\n修改了粘贴WPS的RTF的乱码问题。\r\n更新字符串资源。\r\n改进输入域固定宽度的设置。"
    },
    {
        "year": "",
        "time": "11-16",
        "version": "",
        "number": "",
        "pre": "修改了UITools功能。\r\n新增了DocumentInfo命令。\r\n改进COM接口。\r\n修改了文档整体复制的一个错误。\r\n新增CommitUserTrack命令。"
    },
    {
        "year": "",
        "time": "1-03",
        "version": "",
        "number": "",
        "pre": "改进自动生成PASCAL接口代码的过程。\r\n修改了病程记录导入文档时历史记录排序的错误。\r\n新增根据文档元素定位续打位置的功能。\r\n修改了很多页时文档内容定位信息出现累计误差的问题。\r\n在打印预览界面中添加续打功能。\r\n改进文档行间距的算法。\r\n控件新增UIStartEditContent事件。"
    },
    {
        "year": "",
        "time": "10-12",
        "version": "",
        "number": "",
        "pre": "改进病程记录视图控制器。\r\n修改了DELPHI中运行编辑器导致的堆栈溢出的错误。\r\n修改了创建子文档是历史痕迹设置错误。\r\n改进VB脚本引擎。\r\n改进弹出的时间日期输入界面。\r\n新增InsertXMLWithClearFormat、InsertXMLWithClearFontName命令。\r\n修改了表格标题行的一个错误。\r\n新增快速辅助录入的功能。\r\n改进内容保护提示信息的内容及显示方式。\r\n修改了导入文件时历史记录错位的错误。\r\n新增FieldPrintTextColor属性。"
    },
    {
        "year": "",
        "time": "08-30",
        "version": "",
        "number": "",
        "pre": "修改了导出HTML/RTF时一些格式不准确的错误。\r\n改进ZOOM命令。\r\n改进文档内容分行排版算法。\r\n新增AutoLine视图模式，增强InsertString命令。\r\n发布DELPHI开发环境清理工具。\r\n增加双向续打功能。"
    },
    {
        "year": "",
        "time": "07-29",
        "version": "",
        "number": "",
        "pre": "新增了PrintBackColor命令。\r\n增强了绘制元素前事件，新增了绘制元素后事件。\r\n新增了简体和繁体转换命令。\r\n新增了病程记录操作控制器。\r\n修改了导出PDF时的一些错误，增强了FilePrintPreview命令。\r\n新增编辑器控件的QueryUserHistoryDisplayText事件。"
    },
    {
        "year": "",
        "time": "07-22",
        "version": "",
        "number": "",
        "pre": "增强颜色选取器。\r\n新增内容同步复制功能。\r\n新增文档元素的OwnerPageIndex属性。\r\n增强Table_MergeCell命令的功能。"
    },
    {
        "year": "",
        "time": "2013-07-17",
        "version": "",
        "number": "",
        "pre": "新增弹出式数值编辑器。\r\n增强违禁关键字检测功能。\r\n新增图片有损压缩存储功能。"
    },
    {
        "year": "",
        "time": "07-15",
        "version": "",
        "number": "",
        "pre": "新增文档批注功能。\r\n新增表格单元格表达式功能。支持类似EXCEL单元格表达式。\r\n新增导出MHT文件的功能。"
    },
    {
        "year": "",
        "time": "06-30",
        "version": "",
        "number": "",
        "pre": "long long ago"
    }
]