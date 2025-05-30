//表单列表
export const FormViewModeList = [{
  title: "noformmode",
  value: "Disable"
},
{
  title: "normalformmode",
  value: "Normal"
},
{
  title: "strictformmode",
  value: "Strict"
}];

//数字列表样式
export const NumberStyleList = [{
  data: "无",
  title: "None",
  value: 0
}, {
  data: "1. 2. 3. 4. ",
  title: "ListNumberStyle",
  value: 1
}, {
  data: "1, 2, 3, 4, ",
  title: "ListNumberStyleArabic1",
  value: 2
}, {
  data: "1） 2） 3） 4） ",
  title: "ListNumberStyleArabic2",
  value: 3
}, {
  data: "1、 2、 3、 4、",
  title: "ListNumberStyleArabic3",
  value: 3
}, {
  data: "a） b） c） d） ",
  title: "ListNumberStyleLowercaseLetter",
  value: 4
}, {
  data: "i） ii） iii） iv）",
  title: "ListNumberStyleLowercaseRoman",
  value: 5
}, {
  data: "①,  ②,  ③, ④,",
  title: "ListNumberStyleNumberInCircle",
  value: 6
}, {
  data: "一. 二. 三. 四",
  title: "ListNumberStyleSimpChinNum1",
  value: 7
}, {
  data: "一） 二） 三） 四） ",
  title: "ListNumberStyleSimpChinNum2",
  value: 8
}, {
  data: "壹. 贰. 叁. 肆",
  title: "ListNumberStyleTradChinNum1",
  value: 9
}, {
  data: "壹） 贰） 叁） 肆） ",
  title: "ListNumberStyleTradChinNum2",
  value: 10
}, {
  data: "A） B） C） D） ",
  title: "ListNumberStyleUppercaseLetter",
  value: 11
}, {
  data: "Ⅰ） Ⅱ） Ⅲ） Ⅳ） ",
  title: "ListNumberStyleUppercaseRoman",
  value: 12
}, {
  data: "甲, 乙, 丙, 丁, ",
  title: "ListNumberStyleZodiac1",
  value: 13
}, {
  data: "子, 丑, 寅, 卯, ",
  title: "ListNumberStyleZodiac2",
  value: 14
}];
//无序列表样式
export const BulletStyleList = [
  {
    data: "无",
    title: "None",
    value: 0
  }, {
    data: "● Bulletedlist",
    title: "BulletedList",
    value: 10000
  }, {
    data: "■ Bulletedlistblock",
    title: "BulletedListBlock",
    value: 10001
  }, {
    data: "◆ Bulletedlistdiamond",
    title: "BulletedListDiamond",
    value: 10002

  }, {
    data: "✔ BulletedListCheck",
    title: "BulletedListCheck",
    value: 10003

  }, {
    data: "➢ BulletedListRightArrow",
    title: "BulletedListRightArrow",
    value: 10004
  }, {
    data: "◇ BulletedListHollowStar",
    title: "BulletedListHollowStar",
    value: 10005
  }
];



//行间距
export const LineSpacingList = [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 3];
//字号
export const FontSizeList = [
  { "title": "大特号", "number": 63 },
  { "title": "特号", "number": 54 },
  { "title": "初号", "number": 42 },
  { "title": "小初", "number": 36 },
  { "title": "一号", "number": 26.25 },
  { "title": "小一", "number": 24 },
  { "title": "二号", "number": 21.75 },
  { "title": "小二", "number": 18 },
  { "title": "三号", "number": 15.75 },
  { "title": "小三", "number": 15 },
  { "title": "四号", "number": 14.25 },
  { "title": "小四", "number": 12 },
  { "title": "五号", "number": 10.5 },
  { "title": "小五", "number": 9 },
  { "title": "六号", "number": 7.5 },
  { "title": "小六", "number": 6.75 },
  { "title": "七号", "number": 5.25 },
  { "title": "八号", "number": 4.5 },
  { "title": "8", "number": 8 },
  { "title": "9", "number": 9 },
  { "title": "10", "number": 10 },
  { "title": "11", "number": 11 },
  { "title": "12", "number": 12 },
  { "title": "14", "number": 14 },
  { "title": "16", "number": 16 },
  { "title": "18", "number": 18 },
  { "title": "20", "number": 20 },
  { "title": "22", "number": 22 },
  { "title": "24", "number": 24 },
  { "title": "26", "number": 26 },
  { "title": "28", "number": 28 },
  { "title": "36", "number": 36 },
  { "title": "40", "number": 40 },
  { "title": "48", "number": 48 },
  { "title": "72", "number": 72 },
];

//标题数组
export const TitleLevelList = [
  { value: -1, label: "bodyText", fontSize: 14, fontWeight: 100 },
  { value: 1, label: "header1", fontSize: 24, fontWeight: 900 },
  { value: 2, label: "header2", fontSize: 22, fontWeight: 900 },
  { value: 3, label: "header3", fontSize: 20, fontWeight: 900 },
  { value: 4, label: "header4", fontSize: 18, fontWeight: 900 },
  { value: 5, label: "header5", fontSize: 16, fontWeight: 900 },
];



export const onlineEnXml = `<XTextDocument xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" EditorVersionString="1.0.0.0">
   <EnableValueValidate>true</EnableValueValidate>
   <XElements Count="5">
      <Element xsi:type="XTextHeader">
         <AcceptTab>true</AcceptTab>
         <EnableValueValidate>true</EnableValueValidate>
         <XElements Count="38">
            <Element xsi:type="XString" StyleIndex="13">
               <Text>XXX Hospital</Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="13" />
            <Element xsi:type="XString" StyleIndex="13">
               <Text>Complete Medical History</Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="1">
               <AutoCreate>true</AutoCreate>
            </Element>
         </XElements>
      </Element>
      <Element xsi:type="XTextBody">
         <AcceptTab>true</AcceptTab>
         <EnableValueValidate>true</EnableValueValidate>
         <XElements Count="1099">
            <Element xsi:type="XTextTable" StyleIndex="4" NumOfRows="6" NumOfColumns="2">
               <ID>table2</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValueBinding />
               <ContentReadonly>True</ContentReadonly>
               <XElements Count="6">
                  <Element xsi:type="XTextTableRow">
                     <EnableValueValidate>true</EnableValueValidate>
                     <XElements Count="2">
                        <Element xsi:type="XTextTableCell" StyleIndex="3">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="9">
                              <Element xsi:type="XString" StyleIndex="12">
                                 <Text>Name : </Text>
                              </Element>
                              <Element xsi:type="XInputField" StyleIndex="12">
                                 <ID>Name</ID>
                                 <EnableValueValidate>true</EnableValueValidate>
                                 <ValidateStyle>
                                    <CheckMaxValue>true</CheckMaxValue>
                                    <CheckMinValue>true</CheckMinValue>
                                    <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                                    <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
                                 </ValidateStyle>
                                 <ValueBinding />
                                 <CopySource />
                                 <XElements Count="5">
                                    <Element xsi:type="XString" StyleIndex="12">
                                       <Text>huayy</Text>
                                    </Element>
                                 </XElements>
                                 <StartBorderText>{</StartBorderText>
                                 <EndBorderText>}</EndBorderText>
                                 <BorderElementColor>#00000000</BorderElementColor>
                                 <MoveFocusHotKey>None</MoveFocusHotKey>
                                 <SpecifyWidth>100</SpecifyWidth>
                                 <DisplayFormat />
                                 <InnerValue>huayy</InnerValue>
                                 <BackgroundText>Name</BackgroundText>
                                 <ViewEncryptType>Partial</ViewEncryptType>
                                 <EnableHighlight>Disabled</EnableHighlight>
                                 <EditorActiveMode>MouseDblClick MouseClick</EditorActiveMode>
                                 <FieldSettings />
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="12" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="3">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="8">
                              <Element xsi:type="XString" StyleIndex="12">
                                 <Text> Sex: </Text>
                              </Element>
                              <Element xsi:type="XInputField" StyleIndex="12">
                                 <ID>Sex</ID>
                                 <EnableValueValidate>true</EnableValueValidate>
                                 <ValidateStyle>
                                    <CheckMaxValue>true</CheckMaxValue>
                                    <CheckMinValue>true</CheckMinValue>
                                    <DateTimeMaxValue>0001-01-01T00:40:00+08:00</DateTimeMaxValue>
                                    <DateTimeMinValue>0001-01-01T00:40:00+08:00</DateTimeMinValue>
                                 </ValidateStyle>
                                 <ValueBinding />
                                 <ContentReadonly>False</ContentReadonly>
                                 <CopySource />
                                 <StartBorderText>{</StartBorderText>
                                 <EndBorderText>}</EndBorderText>
                                 <BorderElementColor>#00000000</BorderElementColor>
                                 <MoveFocusHotKey>None</MoveFocusHotKey>
                                 <SpecifyWidth>100</SpecifyWidth>
                                 <DisplayFormat />
                                 <BackgroundText>Sex</BackgroundText>
                                 <EnableHighlight>Disabled</EnableHighlight>
                                 <EditorActiveMode>MouseDblClick MouseClick</EditorActiveMode>
                                 <FieldSettings>
                                    <EditStyle>DropdownList</EditStyle>
                                    <ListSource>
                                       <Items>
                                          <Item>
                                             <Text>male</Text>
                                          </Item>
                                          <Item>
                                             <Text>female</Text>
                                          </Item>
                                       </Items>
                                    </ListSource>
                                 </FieldSettings>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="12" />
                           </XElements>
                        </Element>
                     </XElements>
                     <AcceptChildElementTypes2>TableCell</AcceptChildElementTypes2>
                  </Element>
                  <Element xsi:type="XTextTableRow">
                     <EnableValueValidate>true</EnableValueValidate>
                     <XElements Count="2">
                        <Element xsi:type="XTextTableCell" StyleIndex="3">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="14">
                              <Element xsi:type="XString" StyleIndex="12">
                                 <Text>Profession :</Text>
                              </Element>
                              <Element xsi:type="XInputField" StyleIndex="12">
                                 <ID>Profession</ID>
                                 <EnableValueValidate>true</EnableValueValidate>
                                 <ValidateStyle>
                                    <CheckMaxValue>true</CheckMaxValue>
                                    <CheckMinValue>true</CheckMinValue>
                                    <DateTimeMaxValue>0001-01-01T00:40:00+08:00</DateTimeMaxValue>
                                    <DateTimeMinValue>0001-01-01T00:40:00+08:00</DateTimeMinValue>
                                 </ValidateStyle>
                                 <ValueBinding />
                                 <ContentReadonly>False</ContentReadonly>
                                 <CopySource />
                                 <StartBorderText>{</StartBorderText>
                                 <EndBorderText>}</EndBorderText>
                                 <BorderElementColor>#00000000</BorderElementColor>
                                 <MoveFocusHotKey>None</MoveFocusHotKey>
                                 <SpecifyWidth>100</SpecifyWidth>
                                 <DisplayFormat />
                                 <BackgroundText>Profession</BackgroundText>
                                 <EnableHighlight>Disabled</EnableHighlight>
                                 <EditorActiveMode>MouseDblClick MouseClick</EditorActiveMode>
                                 <FieldSettings />
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="12" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="3">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="8">
                              <Element xsi:type="XString" StyleIndex="12">
                                 <Text> Age: </Text>
                              </Element>
                              <Element xsi:type="XInputField" StyleIndex="12">
                                 <ID>Age</ID>
                                 <EnableValueValidate>true</EnableValueValidate>
                                 <ValidateStyle>
                                    <CheckMaxValue>true</CheckMaxValue>
                                    <CheckMinValue>true</CheckMinValue>
                                    <DateTimeMaxValue>0001-01-01T00:45:00+08:00</DateTimeMaxValue>
                                    <DateTimeMinValue>0001-01-01T00:45:00+08:00</DateTimeMinValue>
                                 </ValidateStyle>
                                 <ValueBinding />
                                 <ContentReadonly>False</ContentReadonly>
                                 <CopySource />
                                 <StartBorderText>{</StartBorderText>
                                 <EndBorderText>}</EndBorderText>
                                 <BorderElementColor>#00000000</BorderElementColor>
                                 <MoveFocusHotKey>None</MoveFocusHotKey>
                                 <SpecifyWidth>100</SpecifyWidth>
                                 <DisplayFormat />
                                 <BackgroundText>Age</BackgroundText>
                                 <EnableHighlight>Disabled</EnableHighlight>
                                 <EditorActiveMode>MouseDblClick MouseClick</EditorActiveMode>
                                 <FieldSettings>
                                    <EditStyle>Numeric</EditStyle>
                                 </FieldSettings>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="12" />
                           </XElements>
                        </Element>
                     </XElements>
                     <AcceptChildElementTypes2>TableCell</AcceptChildElementTypes2>
                  </Element>
                  <Element xsi:type="XTextTableRow">
                     <EnableValueValidate>true</EnableValueValidate>
                     <XElements Count="2">
                        <Element xsi:type="XTextTableCell" StyleIndex="3">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="16">
                              <Element xsi:type="XString" StyleIndex="12">
                                 <Text>Native place: </Text>
                              </Element>
                              <Element xsi:type="XInputField" StyleIndex="12">
                                 <ID>Native place</ID>
                                 <EnableValueValidate>true</EnableValueValidate>
                                 <ValidateStyle>
                                    <CheckMaxValue>true</CheckMaxValue>
                                    <CheckMinValue>true</CheckMinValue>
                                    <DateTimeMaxValue>0001-01-01T00:45:00+08:00</DateTimeMaxValue>
                                    <DateTimeMinValue>0001-01-01T00:45:00+08:00</DateTimeMinValue>
                                 </ValidateStyle>
                                 <ValueBinding />
                                 <ContentReadonly>False</ContentReadonly>
                                 <CopySource />
                                 <StartBorderText>{</StartBorderText>
                                 <EndBorderText>}</EndBorderText>
                                 <BorderElementColor>#00000000</BorderElementColor>
                                 <MoveFocusHotKey>None</MoveFocusHotKey>
                                 <SpecifyWidth>100</SpecifyWidth>
                                 <DisplayFormat />
                                 <BackgroundText>Native place</BackgroundText>
                                 <EnableHighlight>Disabled</EnableHighlight>
                                 <EditorActiveMode>MouseDblClick MouseClick</EditorActiveMode>
                                 <FieldSettings />
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="12" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="3">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="12">
                              <Element xsi:type="XString" StyleIndex="12">
                                 <Text> Address: </Text>
                              </Element>
                              <Element xsi:type="XInputField" StyleIndex="12">
                                 <ID>Name_1_5</ID>
                                 <EnableValueValidate>true</EnableValueValidate>
                                 <ValidateStyle>
                                    <CheckMaxValue>true</CheckMaxValue>
                                    <CheckMinValue>true</CheckMinValue>
                                    <DateTimeMaxValue>0001-01-01T00:45:00+08:00</DateTimeMaxValue>
                                    <DateTimeMinValue>0001-01-01T00:45:00+08:00</DateTimeMinValue>
                                 </ValidateStyle>
                                 <ValueBinding />
                                 <ContentReadonly>False</ContentReadonly>
                                 <CopySource />
                                 <StartBorderText>{</StartBorderText>
                                 <EndBorderText>}</EndBorderText>
                                 <BorderElementColor>#00000000</BorderElementColor>
                                 <MoveFocusHotKey>None</MoveFocusHotKey>
                                 <SpecifyWidth>100</SpecifyWidth>
                                 <DisplayFormat />
                                 <BackgroundText>Name</BackgroundText>
                                 <EnableHighlight>Disabled</EnableHighlight>
                                 <EditorActiveMode>MouseDblClick MouseClick</EditorActiveMode>
                                 <FieldSettings />
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="12" />
                           </XElements>
                        </Element>
                     </XElements>
                     <AcceptChildElementTypes2>TableCell</AcceptChildElementTypes2>
                  </Element>
                  <Element xsi:type="XTextTableRow">
                     <EnableValueValidate>true</EnableValueValidate>
                     <XElements Count="2">
                        <Element xsi:type="XTextTableCell" StyleIndex="3">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="17">
                              <Element xsi:type="XString" StyleIndex="12">
                                 <Text>Marital state: </Text>
                              </Element>
                              <Element xsi:type="XInputField" StyleIndex="12">
                                 <ID>Marital state</ID>
                                 <EnableValueValidate>true</EnableValueValidate>
                                 <ValidateStyle>
                                    <CheckMaxValue>true</CheckMaxValue>
                                    <CheckMinValue>true</CheckMinValue>
                                    <DateTimeMaxValue>0001-01-01T00:45:00+08:00</DateTimeMaxValue>
                                    <DateTimeMinValue>0001-01-01T00:45:00+08:00</DateTimeMinValue>
                                 </ValidateStyle>
                                 <ValueBinding />
                                 <ContentReadonly>False</ContentReadonly>
                                 <CopySource />
                                 <StartBorderText>{</StartBorderText>
                                 <EndBorderText>}</EndBorderText>
                                 <BorderElementColor>#00000000</BorderElementColor>
                                 <MoveFocusHotKey>None</MoveFocusHotKey>
                                 <SpecifyWidth>100</SpecifyWidth>
                                 <DisplayFormat />
                                 <BackgroundText>Marital state</BackgroundText>
                                 <EnableHighlight>Disabled</EnableHighlight>
                                 <EditorActiveMode>MouseDblClick MouseClick</EditorActiveMode>
                                 <FieldSettings>
                                    <EditStyle>DropdownList</EditStyle>
                                    <ListSource>
                                       <Items>
                                          <Item>
                                             <Text>married</Text>
                                          </Item>
                                          <Item>
                                             <Text>unmarried</Text>
                                          </Item>
                                       </Items>
                                    </ListSource>
                                 </FieldSettings>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="12" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="3">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="15">
                              <Element xsi:type="XString" StyleIndex="12">
                                 <Text>Nationality: </Text>
                              </Element>
                              <Element xsi:type="XInputField" StyleIndex="12">
                                 <ID>Nationality</ID>
                                 <EnableValueValidate>true</EnableValueValidate>
                                 <ValidateStyle>
                                    <CheckMaxValue>true</CheckMaxValue>
                                    <CheckMinValue>true</CheckMinValue>
                                    <DateTimeMaxValue>0001-01-01T00:45:00+08:00</DateTimeMaxValue>
                                    <DateTimeMinValue>0001-01-01T00:45:00+08:00</DateTimeMinValue>
                                 </ValidateStyle>
                                 <ValueBinding />
                                 <ContentReadonly>False</ContentReadonly>
                                 <CopySource />
                                 <StartBorderText>{</StartBorderText>
                                 <EndBorderText>}</EndBorderText>
                                 <BorderElementColor>#00000000</BorderElementColor>
                                 <MoveFocusHotKey>None</MoveFocusHotKey>
                                 <SpecifyWidth>100</SpecifyWidth>
                                 <DisplayFormat />
                                 <BackgroundText>Nationality</BackgroundText>
                                 <EnableHighlight>Disabled</EnableHighlight>
                                 <EditorActiveMode>MouseDblClick MouseClick</EditorActiveMode>
                                 <FieldSettings>
                                    <EditStyle>DropdownList</EditStyle>
                                    <ListSource>
                                       <Items>
                                          <Item>
                                             <Text>China</Text>
                                          </Item>
                                          <Item>
                                             <Text>United States</Text>
                                          </Item>
                                          <Item>
                                             <Text>France</Text>
                                          </Item>
                                          <Item>
                                             <Text>Russia</Text>
                                          </Item>
                                          <Item>
                                             <Text>Britain</Text>
                                          </Item>
                                          <Item>
                                             <Text>Italy</Text>
                                          </Item>
                                          <Item>
                                             <Text>Japan</Text>
                                          </Item>
                                          <Item>
                                             <Text>Korea</Text>
                                          </Item>
                                          <Item>
                                             <Text>North Korea</Text>
                                          </Item>
                                          <Item>
                                             <Text>Canada</Text>
                                          </Item>
                                          <Item>
                                             <Text>the Philippines</Text>
                                          </Item>
                                          <Item>
                                             <Text>Vietnam</Text>
                                          </Item>
                                       </Items>
                                    </ListSource>
                                 </FieldSettings>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="12" />
                           </XElements>
                        </Element>
                     </XElements>
                     <AcceptChildElementTypes2>TableCell</AcceptChildElementTypes2>
                  </Element>
                  <Element xsi:type="XTextTableRow">
                     <EnableValueValidate>true</EnableValueValidate>
                     <XElements Count="2">
                        <Element xsi:type="XTextTableCell" StyleIndex="3">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="21">
                              <Element xsi:type="XString" StyleIndex="12">
                                 <Text>Date of admission: </Text>
                              </Element>
                              <Element xsi:type="XInputField" StyleIndex="12">
                                 <ID>admission</ID>
                                 <EnableValueValidate>true</EnableValueValidate>
                                 <ValidateStyle>
                                    <CheckMaxValue>true</CheckMaxValue>
                                    <CheckMinValue>true</CheckMinValue>
                                    <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                                    <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
                                 </ValidateStyle>
                                 <ValueBinding />
                                 <ContentReadonly>False</ContentReadonly>
                                 <CopySource />
                                 <StartBorderText>{</StartBorderText>
                                 <EndBorderText>}</EndBorderText>
                                 <BorderElementColor>#00000000</BorderElementColor>
                                 <MoveFocusHotKey>None</MoveFocusHotKey>
                                 <SpecifyWidth>100</SpecifyWidth>
                                 <DisplayFormat />
                                 <BackgroundText>choose admission</BackgroundText>
                                 <EnableHighlight>Disabled</EnableHighlight>
                                 <EditorActiveMode>MouseClick</EditorActiveMode>
                                 <FieldSettings>
                                    <EditStyle>Date</EditStyle>
                                 </FieldSettings>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="12" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="3">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="18">
                              <Element xsi:type="XString" StyleIndex="12">
                                 <Text>Date of taking: </Text>
                              </Element>
                              <Element xsi:type="XInputField" StyleIndex="12">
                                 <ID>Date of taking</ID>
                                 <EnableValueValidate>true</EnableValueValidate>
                                 <ValidateStyle>
                                    <CheckMaxValue>true</CheckMaxValue>
                                    <CheckMinValue>true</CheckMinValue>
                                    <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                                    <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
                                 </ValidateStyle>
                                 <ValueBinding />
                                 <ContentReadonly>False</ContentReadonly>
                                 <CopySource />
                                 <StartBorderText>{</StartBorderText>
                                 <EndBorderText>}</EndBorderText>
                                 <BorderElementColor>#00000000</BorderElementColor>
                                 <MoveFocusHotKey>None</MoveFocusHotKey>
                                 <DisplayFormat />
                                 <BackgroundText>Date of taking</BackgroundText>
                                 <EnableHighlight>Disabled</EnableHighlight>
                                 <EditorActiveMode>MouseClick</EditorActiveMode>
                                 <FieldSettings>
                                    <EditStyle>Date</EditStyle>
                                 </FieldSettings>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="12" />
                           </XElements>
                        </Element>
                     </XElements>
                     <AcceptChildElementTypes2>TableCell</AcceptChildElementTypes2>
                  </Element>
                  <Element xsi:type="XTextTableRow">
                     <EnableValueValidate>true</EnableValueValidate>
                     <XElements Count="2">
                        <Element xsi:type="XTextTableCell" StyleIndex="3">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="12">
                              <Element xsi:type="XString" StyleIndex="12">
                                 <Text>Narrator: </Text>
                              </Element>
                              <Element xsi:type="XInputField" StyleIndex="12">
                                 <ID>Narrator</ID>
                                 <EnableValueValidate>true</EnableValueValidate>
                                 <ValidateStyle>
                                    <CheckMaxValue>true</CheckMaxValue>
                                    <CheckMinValue>true</CheckMinValue>
                                    <DateTimeMaxValue>0001-01-01T00:45:00+08:00</DateTimeMaxValue>
                                    <DateTimeMinValue>0001-01-01T00:45:00+08:00</DateTimeMinValue>
                                 </ValidateStyle>
                                 <ValueBinding />
                                 <ContentReadonly>False</ContentReadonly>
                                 <CopySource />
                                 <StartBorderText>{</StartBorderText>
                                 <EndBorderText>}</EndBorderText>
                                 <BorderElementColor>#00000000</BorderElementColor>
                                 <MoveFocusHotKey>None</MoveFocusHotKey>
                                 <SpecifyWidth>100</SpecifyWidth>
                                 <DisplayFormat />
                                 <BackgroundText>Narrator</BackgroundText>
                                 <EnableHighlight>Disabled</EnableHighlight>
                                 <EditorActiveMode>MouseDblClick MouseClick</EditorActiveMode>
                                 <FieldSettings />
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="12" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="3">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="16">
                              <Element xsi:type="XString" StyleIndex="12">
                                 <Text>Reliability : </Text>
                              </Element>
                              <Element xsi:type="XInputField" StyleIndex="12">
                                 <ID>Reliability</ID>
                                 <EnableValueValidate>true</EnableValueValidate>
                                 <ValidateStyle>
                                    <CheckMaxValue>true</CheckMaxValue>
                                    <CheckMinValue>true</CheckMinValue>
                                    <DateTimeMaxValue>0001-01-01T00:45:00+08:00</DateTimeMaxValue>
                                    <DateTimeMinValue>0001-01-01T00:45:00+08:00</DateTimeMinValue>
                                 </ValidateStyle>
                                 <ValueBinding />
                                 <ContentReadonly>False</ContentReadonly>
                                 <CopySource />
                                 <StartBorderText>{</StartBorderText>
                                 <EndBorderText>}</EndBorderText>
                                 <BorderElementColor>#00000000</BorderElementColor>
                                 <MoveFocusHotKey>None</MoveFocusHotKey>
                                 <SpecifyWidth>100</SpecifyWidth>
                                 <DisplayFormat />
                                 <BackgroundText>Reliability</BackgroundText>
                                 <EnableHighlight>Disabled</EnableHighlight>
                                 <EditorActiveMode>MouseDblClick MouseClick</EditorActiveMode>
                                 <FieldSettings />
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="12" />
                           </XElements>
                        </Element>
                     </XElements>
                     <AcceptChildElementTypes2>TableCell</AcceptChildElementTypes2>
                  </Element>
               </XElements>
               <AcceptChildElementTypes2>TableRow TableColumn</AcceptChildElementTypes2>
               <Columns>
                  <Element xsi:type="XTextTableColumn">
                     <Width>1105.375</Width>
                  </Element>
                  <Element xsi:type="XTextTableColumn">
                     <Width>894.375</Width>
                  </Element>
               </Columns>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="6" />
            <Element xsi:type="XString" StyleIndex="16">
               <Text>The History </Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="7">
               <Text> </Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Chief Complaint</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Chief Complaint</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="84">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>lumbago for 2 years with  weakness ,numbness  in lower limbs,  more severe 2 months.</Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>lumbago for 2 years with  weakness ,numbness  in lower limbs,  more severe 2 months.</InnerValue>
               <BackgroundText>Chief Complaint</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Present Illness</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Present Illness</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="1084">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>2 years ago ,after working ,the patient always felt lumbago, sometimes referred pain at the hip and lower extremities,mainly at the dorsal side.and the left lower limb was more severe. At the same time he felt weak and numb at lower limbs, also more severe in the left side. No muscle atrophy, no abnormal of stool and urine. No temperature abnormal or color changes in the local skin. No nails damaged. Then the patient went to the hospital in his town, and had a X-ray examination, shown hypertrophy in the lumbar vertebrae., given some drugs for pain-control. After having some drugs and more rest, the symptoms lightened. But 2 months ago ,without significant causes,the symptoms became more severe. The lumbago often made him sleepless at nights. And he can only walk 500 meters without a break. his left lower limb felt numb and weak. Having the drugs and rest both can not ease the symptoms. So he came to our hospital for advanced diagnosis and treatment. Since the disease, no changes in consciousness ,body temperature, appetite, body weight .and normal of stool and urine. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>2 years ago ,after working ,the patient always felt lumbago, sometimes referred pain at the hip and lower extremities,mainly at the dorsal side.and the left lower limb was more severe. At the same time he felt weak and numb at lower limbs, also more severe in the left side. No muscle atrophy, no abnormal of stool and urine. No temperature abnormal or color changes in the local skin. No nails damaged. Then the patient went to the hospital in his town, and had a X-ray examination, shown hypertrophy in the lumbar vertebrae., given some drugs for pain-control. After having some drugs and more rest, the symptoms lightened. But 2 months ago ,without significant causes,the symptoms became more severe. The lumbago often made him sleepless at nights. And he can only walk 500 meters without a break. his left lower limb felt numb and weak. Having the drugs and rest both can not ease the symptoms. So he came to our hospital for advanced diagnosis and treatment. Since the disease, no changes in consciousness ,body temperature, appetite, body weight .and normal of stool and urine. </InnerValue>
               <BackgroundText>Present Illness</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Past history</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Past history</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="286">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>the patient had a history of high intensive working for about 10 years. No history of chronic diseases like hypertension, CAD and mellitus diabetics. No history of hepatitis or AIDS , tuberculosis .No history of trauma and operation. No history of hypersensitivity of any drug or food. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>the patient had a history of high intensive working for about 10 years. No history of chronic diseases like hypertension, CAD and mellitus diabetics. No history of hepatitis or AIDS , tuberculosis .No history of trauma and operation. No history of hypersensitivity of any drug or food. </InnerValue>
               <BackgroundText>Past history</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="17">
               <Text>Review of Systems</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="9">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Respiratory system</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Respiratory system</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="91">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>no history of chronic cough , expectoration, hemoptysis , chest pain , or short of breath. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>no history of chronic cough , expectoration, hemoptysis , chest pain , or short of breath. </InnerValue>
               <BackgroundText>Respiratory system</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Circulation system</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Circulation system</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="145">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>no history of dyspnea or edema at the lower limbs. No history of palpitation or chest pain. No dizziness, headache,  No history of hypertension. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>no history of dyspnea or edema at the lower limbs. No history of palpitation or chest pain. No dizziness, headache,  No history of hypertension. </InnerValue>
               <BackgroundText>Circulation system</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Digestive system</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Digestive system</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="143">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>no history of anorexia, abdominal distention, regurgitation. No  nausea and vomiting. No history of constipation , diarrhea ,melena and so on. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>no history of anorexia, abdominal distention, regurgitation. No  nausea and vomiting. No history of constipation , diarrhea ,melena and so on. </InnerValue>
               <BackgroundText>Digestive system</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Urogenital system</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Urogenital system</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="207">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>no history of swollen eyelids or lumbago. No frequent micturition, urgency of micturition or urodynia. No dysuria ,hematuria or retention and incontinence of urine .no history of acute or chronic nephritis. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>no history of swollen eyelids or lumbago. No frequent micturition, urgency of micturition or urodynia. No dysuria ,hematuria or retention and incontinence of urine .no history of acute or chronic nephritis. </InnerValue>
               <BackgroundText>Urogenital system</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Hemopoeltic system</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Hemopoeltic system</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="155">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>No pallid countenance ,weakness,dizziness , daze ,tinnitus. No history of bleeding and repeated infections. No history of enlargement of liver and spleen. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>No pallid countenance ,weakness,dizziness , daze ,tinnitus. No history of bleeding and repeated infections. No history of enlargement of liver and spleen. </InnerValue>
               <BackgroundText>Hemopoeltic system</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Metabolic and Endocrine system</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Metabolic and Endocrine system</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="164">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>no abnormal cold or hot feeling,  hidosis ,headache weakness,impaired vision,polyphagia ,polyuria ect.normal distributed hair.no change of temper and intelligence. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>no abnormal cold or hot feeling,  hidosis ,headache weakness,impaired vision,polyphagia ,polyuria ect.normal distributed hair.no change of temper and intelligence. </InnerValue>
               <BackgroundText>Metabolic and Endocrine system</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Nervous system</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Nervous system</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="166">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>No headache ,projectile vomiting . no syncope ,spasm ,impaired vision, abnormal sensation or motion. No change of personality .no mania ,depression or hallucination. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>No headache ,projectile vomiting . no syncope ,spasm ,impaired vision, abnormal sensation or motion. No change of personality .no mania ,depression or hallucination. </InnerValue>
               <BackgroundText>Nervous system</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Motor system</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>:</Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Motor system</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="219">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>lumbago and limitation of movement for 2 years. weakness and numbness at lower limbs, the left more severe. No spasm, atrophy or palalysis. No joint red swollen, hot ,pain or limitation of motion. No trauma or fracture.</Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>lumbago and limitation of movement for 2 years. weakness and numbness at lower limbs, the left more severe. No spasm, atrophy or palalysis. No joint red swollen, hot ,pain or limitation of motion. No trauma or fracture.</InnerValue>
               <BackgroundText>Motor system</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Personal history</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Personal history</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="115">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>born in her native place and living in Tianjin. No history of exposure to poison.No habits of drinking or smoking. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>born in her native place and living in Tianjin. No history of exposure to poison.No habits of drinking or smoking. </InnerValue>
               <BackgroundText>Personal history</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Marital History</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Marital History</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="81">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>Married at 24 years old and having a child. the  child and his wife  both health.</Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>Married at 24 years old and having a child. the  child and his wife  both health.</InnerValue>
               <BackgroundText>Marital History</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Family history</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Family history</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="90">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>denying the family history of  any heredity diseases ,or  MD, CAD,  hypertension ect.     </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>denying the family history of  any heredity diseases ,or  MD, CAD,  hypertension ect.     </InnerValue>
               <BackgroundText>Family history</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="17">
               <Text>Physical Examination</Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="5">
               <Text>Temperature: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Temperature</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="6">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>36.5°C</Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>36.5°C</InnerValue>
               <BackgroundText>Temperature</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>   pulse rate: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>pulse rate</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="6">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>72/min</Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>72/min</InnerValue>
               <BackgroundText>pulse rate</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>   respiratory rate: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>respiratory rate</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="6">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>18/min</Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>18/min</InnerValue>
               <BackgroundText>respiratory rate</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>  blood pressure: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>blood pressure</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="11">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>130/80mmHg </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>130/80mmHg </InnerValue>
               <BackgroundText>blood pressure</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>General appearance</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>:</Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>General appearance</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="120">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>normal development and medium in nourished ,no abnormal consciousness, good corporation in examination. Free position.  </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>normal development and medium in nourished ,no abnormal consciousness, good corporation in examination. Free position.  </InnerValue>
               <BackgroundText>General appearance</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Skin and mucous membrane</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Skin and mucous membrane</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="242">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>No pallid , cyanosis, and jaundice . no abnormal pigmentation and depigmentation . no erythma annulare, petechia and spider angioma. Normal elasticity of skin, no edema. Superficial lymph nodes: no enlargement of the superficial lymph nodes. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>No pallid , cyanosis, and jaundice . no abnormal pigmentation and depigmentation . no erythma annulare, petechia and spider angioma. Normal elasticity of skin, no edema. Superficial lymph nodes: no enlargement of the superficial lymph nodes. </InnerValue>
               <BackgroundText>Skin and mucous membrane</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Skull</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Skull</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="86">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>no deformity, tenderness or mass. Evenly distributed hair with black color and shine. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>no deformity, tenderness or mass. Evenly distributed hair with black color and shine. </InnerValue>
               <BackgroundText>Skull</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Eyes</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Eyes</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="504">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>no drop out of eyebrow and no madarosis ,no swollen or prolapse of eyelids. No pallor, granules ,follicles pectechiae of conjunctivae . transparent of cornea ,no nebula ,keratoleukoma, malacia, ulcer or vascularization. No exophthalmos or enophthalmos.free motions of the eye balls in any direction. Equal and round pupils at both sides with diameter 4mm, normal and active direct and indirect light reflexs,normal accommodation and convergence reflexes. Vision , visual field and eyegroud not examined. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>no drop out of eyebrow and no madarosis ,no swollen or prolapse of eyelids. No pallor, granules ,follicles pectechiae of conjunctivae . transparent of cornea ,no nebula ,keratoleukoma, malacia, ulcer or vascularization. No exophthalmos or enophthalmos.free motions of the eye balls in any direction. Equal and round pupils at both sides with diameter 4mm, normal and active direct and indirect light reflexs,normal accommodation and convergence reflexes. Vision , visual field and eyegroud not examined. </InnerValue>
               <BackgroundText>Eyes</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text> </Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Ears</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>:</Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Ears</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="131">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>no deformity .no abnormal secretion from external canals. No red, tenderness, swollen in the mastoid. Rough tested normal hearing. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>no deformity .no abnormal secretion from external canals. No red, tenderness, swollen in the mastoid. Rough tested normal hearing. </InnerValue>
               <BackgroundText>Ears</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Buccal cavity</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>:</Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Buccal cavity</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="346">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>no pallid or cyanosis of lips ,also no dryness ,herpes simplex. No congestion ,petechia or ulcer in the buccal membrane . 32 teeth, no caries. No bleeding or  congestion ,lead line in gums. Thin and slight yellow fur coated on the tongue  ,with normal in motion. No redness and congestion in pharynx ,no deviation of uvulae. No edema in tonsils. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>no pallid or cyanosis of lips ,also no dryness ,herpes simplex. No congestion ,petechia or ulcer in the buccal membrane . 32 teeth, no caries. No bleeding or  congestion ,lead line in gums. Thin and slight yellow fur coated on the tongue  ,with normal in motion. No redness and congestion in pharynx ,no deviation of uvulae. No edema in tonsils. </InnerValue>
               <BackgroundText>Buccal cavity</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Neck</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Neck</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="238">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>symmetry . no enlargement of external jugular vein, no abnormal pulsation of carotid arteries or veins. No rigidity .no enlargement of thyroid glands ,and the trachea in the centeral position. No murmur. Negative of hepatojugular reflux. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>symmetry . no enlargement of external jugular vein, no abnormal pulsation of carotid arteries or veins. No rigidity .no enlargement of thyroid glands ,and the trachea in the centeral position. No murmur. Negative of hepatojugular reflux. </InnerValue>
               <BackgroundText>Neck</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Chest</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>:</Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Chest</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="214">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>symmetry. No deformity. No barrel chest ,pigeon chest or funnel chest. No tenderness over the chest .the thoracic respiration present. R 18/min, symmetry in both sides. Symmetry and no abnormality of the 2 breasts.</Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>symmetry. No deformity. No barrel chest ,pigeon chest or funnel chest. No tenderness over the chest .the thoracic respiration present. R 18/min, symmetry in both sides. Symmetry and no abnormality of the 2 breasts.</InnerValue>
               <BackgroundText>Chest</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="18">
               <Text>Lungs</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="10">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Inspections</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>:</Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Inspections</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="160">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>no bulges or recession of the intercostals spaces during respiration. Respiratory movement  equal in both sides and regular . no dyspnea or three concave sign. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>no bulges or recession of the intercostals spaces during respiration. Respiratory movement  equal in both sides and regular . no dyspnea or three concave sign. </InnerValue>
               <BackgroundText>Inspections</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Palpation</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Palpation</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="151">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>symmetry respiratory movement in the two sides, no increase or decrease of vocal fremitus. No pleural friction fremitus . no subcutaneous crepitation. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>symmetry respiratory movement in the two sides, no increase or decrease of vocal fremitus. No pleural friction fremitus . no subcutaneous crepitation. </InnerValue>
               <BackgroundText>Palpation</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text> </Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Percussion</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Percussion</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="233">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>resonance in all over the lung fields .  5 cm in width of  apexes ,and the lower margin of lung  at  6th ,8th ,10th   on midclavicular ,midaxillary,midcapular line respectively. The movement of the lower margin of the  lungs: 6 cm.. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>resonance in all over the lung fields .  5 cm in width of  apexes ,and the lower margin of lung  at  6th ,8th ,10th   on midclavicular ,midaxillary,midcapular line respectively. The movement of the lower margin of the  lungs: 6 cm.. </InnerValue>
               <BackgroundText>Percussion</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text> </Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Auscultation</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Auscultation</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="144">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>clear of vesicular breathing sounds all over the lung fields. No moist rales or rhonchis .normal of vocal resonance. No pleural friction sound. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>clear of vesicular breathing sounds all over the lung fields. No moist rales or rhonchis .normal of vocal resonance. No pleural friction sound. </InnerValue>
               <BackgroundText>Auscultation</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="18">
               <Text>Heart</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="10">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Inspection</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>:</Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Inspection</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="125">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>no precordial bulging. Apical impulse in the 5th ICS 1cm inside of left midclavicular line with an area of 2 cm in diameter. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>no precordial bulging. Apical impulse in the 5th ICS 1cm inside of left midclavicular line with an area of 2 cm in diameter. </InnerValue>
               <BackgroundText>Inspection</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Palpation</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Palpation</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="118">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>apical impulse and its area as that in inspection. Regular ,normal intensity. No pericardial friction rubs or thrill. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>apical impulse and its area as that in inspection. Regular ,normal intensity. No pericardial friction rubs or thrill. </InnerValue>
               <BackgroundText>Palpation</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Percussion</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Percussion</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="44">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>relative cardiac dullness shown as follows: </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>relative cardiac dullness shown as follows: </InnerValue>
               <BackgroundText>Percussion</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XTextTable" NumOfRows="5" NumOfColumns="3">
               <ID>table1</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <XElements Count="5">
                  <Element xsi:type="XTextTableRow">
                     <EnableValueValidate>true</EnableValueValidate>
                     <XElements Count="3">
                        <Element xsi:type="XTextTableCell" StyleIndex="2">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="11">
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>Right (cm)</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="2">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="6">
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text> ICS </Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="2">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="12">
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text> Left (cm) </Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                     </XElements>
                     <AcceptChildElementTypes2>TableCell</AcceptChildElementTypes2>
                  </Element>
                  <Element xsi:type="XTextTableRow">
                     <EnableValueValidate>true</EnableValueValidate>
                     <XElements Count="3">
                        <Element xsi:type="XTextTableCell" StyleIndex="2">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="2">
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>2</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="2">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="2">
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>Ⅱ</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="2">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="2">
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>2</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                     </XElements>
                     <AcceptChildElementTypes2>TableCell</AcceptChildElementTypes2>
                  </Element>
                  <Element xsi:type="XTextTableRow">
                     <EnableValueValidate>true</EnableValueValidate>
                     <XElements Count="3">
                        <Element xsi:type="XTextTableCell" StyleIndex="2">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="2">
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>2</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="2">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="4">
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text> Ⅲ </Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="2">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="2">
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>4</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                     </XElements>
                     <AcceptChildElementTypes2>TableCell</AcceptChildElementTypes2>
                  </Element>
                  <Element xsi:type="XTextTableRow">
                     <EnableValueValidate>true</EnableValueValidate>
                     <XElements Count="3">
                        <Element xsi:type="XTextTableCell" StyleIndex="2">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="2">
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>3</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="2">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="2">
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>Ⅳ</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="2">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="2">
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>6</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                     </XElements>
                     <AcceptChildElementTypes2>TableCell</AcceptChildElementTypes2>
                  </Element>
                  <Element xsi:type="XTextTableRow">
                     <EnableValueValidate>true</EnableValueValidate>
                     <XElements Count="3">
                        <Element xsi:type="XTextTableCell" StyleIndex="2">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="1">
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="2">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="2">
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>Ⅴ</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                        <Element xsi:type="XTextTableCell" StyleIndex="2">
                           <EnableValueValidate>true</EnableValueValidate>
                           <XElements Count="2">
                              <Element xsi:type="XString" StyleIndex="5">
                                 <Text>7</Text>
                              </Element>
                              <Element xsi:type="XParagraphFlag" StyleIndex="5" />
                           </XElements>
                        </Element>
                     </XElements>
                     <AcceptChildElementTypes2>TableCell</AcceptChildElementTypes2>
                  </Element>
               </XElements>
               <AcceptChildElementTypes2>TableRow TableColumn</AcceptChildElementTypes2>
               <Columns>
                  <Element xsi:type="XTextTableColumn">
                     <Width>624.9167</Width>
                  </Element>
                  <Element xsi:type="XTextTableColumn">
                     <Width>624.9167</Width>
                  </Element>
                  <Element xsi:type="XTextTableColumn">
                     <Width>624.9167</Width>
                  </Element>
               </Columns>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>The distance between the left midclvicular line and the midsternal line is 8cm. </Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Auscultation</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>:</Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Auscultation</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="150">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>HR 72/min with regular rhythm, heart sounds clear and intensive . no murmurs at any auscultation area of the valvula. No pericardical friction sound. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>HR 72/min with regular rhythm, heart sounds clear and intensive . no murmurs at any auscultation area of the valvula. No pericardical friction sound. </InnerValue>
               <BackgroundText>Auscultation</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Radial arteries</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Radial arteries</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="80">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>pulse rate 85/min, with regular rhythm, equal in both sides, normal intensity . </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>pulse rate 85/min, with regular rhythm, equal in both sides, normal intensity . </InnerValue>
               <BackgroundText>Radial arteries</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Perivascular signs</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Perivascular signs</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="127">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>no capillary pulsation, water hammer pulse ,pistol-shot sounds and Duroziez’s murmur . no pulse deficit, and pulse alternant.  </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>no capillary pulsation, water hammer pulse ,pistol-shot sounds and Duroziez’s murmur . no pulse deficit, and pulse alternant.  </InnerValue>
               <BackgroundText>Perivascular signs</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="17">
               <Text>Abdomen</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="9">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Inspection</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Inspection</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="163">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>symmetry. No bulge abdomen ,abdominal distention .normal abdominal respiration. No visible gastrointestinal waves. No varicosity , scar ,petechia at the abdominal </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>symmetry. No bulge abdomen ,abdominal distention .normal abdominal respiration. No visible gastrointestinal waves. No varicosity , scar ,petechia at the abdominal </InnerValue>
               <BackgroundText>Inspection</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="9" />
            <Element xsi:type="XString" StyleIndex="9">
               <Text>Skin. </Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Palpation</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Palpation</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="94">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>soft, no tenderness and rebounding tenderness, no tightened abdominal wall. No palpable mass. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>soft, no tenderness and rebounding tenderness, no tightened abdominal wall. No palpable mass. </InnerValue>
               <BackgroundText>Palpation</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Liver</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Liver</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="14">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>not palpable. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>not palpable. </InnerValue>
               <BackgroundText>Liver</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Gallbladder</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Gallbladder</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="41">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>not palpable. Negative of murphy’s sign. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>not palpable. Negative of murphy’s sign. </InnerValue>
               <BackgroundText>Gallbladder</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Kidneys</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Kidneys</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="66">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>not palpable. No tenderness in the any site of kidneys or ureters.</Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>not palpable. No tenderness in the any site of kidneys or ureters.</InnerValue>
               <BackgroundText>Kidneys</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Spleen</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Spleen</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="14">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>not palpable. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>not palpable. </InnerValue>
               <BackgroundText>Spleen</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Appendix</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Appendix</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="38">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>no tenderness at the Mcburney's site. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>no tenderness at the Mcburney's site. </InnerValue>
               <BackgroundText>Appendix</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Auscultation</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Auscultation</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="68">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>normal borhorygmus, 4/min, no murmur of vessels. No friction rubs . </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>normal borhorygmus, 4/min, no murmur of vessels. No friction rubs . </InnerValue>
               <BackgroundText>Auscultation</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Anus and rectum</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Anus and rectum</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="14">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>not examined. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>not examined. </InnerValue>
               <BackgroundText>Anus and rectum</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Spine</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Spine</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="175">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>no lordosis, kyphosis, or scoliosis. tenderness and punching tenderness at the level of  L3-L5. Limitation of movement, especially anteflextion. No changes in the local skin. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>no lordosis, kyphosis, or scoliosis. tenderness and punching tenderness at the level of  L3-L5. Limitation of movement, especially anteflextion. No changes in the local skin. </InnerValue>
               <BackgroundText>Spine</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Extremities</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Extremities</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="238">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>symmetry, no deformity . free motion .no joint .redness ,swollen ,tenderness or hotness . no edema in the lower extremities. myodynamia of left lower limb in 4th grade and right lower limb in 5-th grade. Details in the special condition. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>symmetry, no deformity . free motion .no joint .redness ,swollen ,tenderness or hotness . no edema in the lower extremities. myodynamia of left lower limb in 4th grade and right lower limb in 5-th grade. Details in the special condition. </InnerValue>
               <BackgroundText>Extremities</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Nerve system</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Nerve system</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="282">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>numbness in lower limbs ,more severe in left side. Normal sensation.at other place. Biceps,triceps ,radioperiosteal , and abdominal wall reflexes normal.while knee jerk and Achilles jerk activer. babinski’s (+_)oppenheim’s,chaddock’s,gordon’s negative. No patellar or ankle clonus. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>numbness in lower limbs ,more severe in left side. Normal sensation.at other place. Biceps,triceps ,radioperiosteal , and abdominal wall reflexes normal.while knee jerk and Achilles jerk activer. babinski’s (+_)oppenheim’s,chaddock’s,gordon’s negative. No patellar or ankle clonus. </InnerValue>
               <BackgroundText>Nerve system</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="17">
               <Text>Laboratory findings</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="9">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Blood routine</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Blood routine</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="71">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>WBC 7.3*10ª ,N 0.65, L 0.35,Hb 141g/l .RBC 4.38*1012/l ,plt 238*10ª/l. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>WBC 7.3*10ª ,N 0.65, L 0.35,Hb 141g/l .RBC 4.38*1012/l ,plt 238*10ª/l. </InnerValue>
               <BackgroundText>Blood routine</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>X-ray</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>X-ray</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="33">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>hypertrophy of lumbar vertebrae. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>hypertrophy of lumbar vertebrae. </InnerValue>
               <BackgroundText>X-ray</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text> </Text>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>MRI</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>MRI</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="24">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>the results not gotten. </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>the results not gotten. </InnerValue>
               <BackgroundText>MRI</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Special condition</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text>: </Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Special condition</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="659">
                  <Element xsi:type="XString" StyleIndex="5">
                     <Text>no lordosis, kyphosis, or scoliosis of spine. tenderness and punching tenderness at the level of  L3-L5. Limitation of movement, especially anteflextion. No changes in the local skins. extrmities symmetry, no deformity . free motion .no joint .redness ,swollen ,tenderness or hotness . no edema in the lower extremities.Muscular tension of left lower limb in 4th grade and right lower limb in 5-th grade. Sensation in left lower limb decreased. Biceps,triceps ,radioperiosteal , and abdominal wall reflexes normal.while knee jerk and Achilles jerk activer. babinski’s (+_)oppenheim’s,chaddock’s,gordon’s negative. No patellar or ankle clonus.Lasegue sign(+). </Text>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <InnerValue>no lordosis, kyphosis, or scoliosis of spine. tenderness and punching tenderness at the level of  L3-L5. Limitation of movement, especially anteflextion. No changes in the local skins. extrmities symmetry, no deformity . free motion .no joint .redness ,swollen ,tenderness or hotness . no edema in the lower extremities.Muscular tension of left lower limb in 4th grade and right lower limb in 5-th grade. Sensation in left lower limb decreased. Biceps,triceps ,radioperiosteal , and abdominal wall reflexes normal.while knee jerk and Achilles jerk activer. babinski’s (+_)oppenheim’s,chaddock’s,gordon’s negative. No patellar or ankle clonus.Lasegue sign(+). </InnerValue>
               <BackgroundText>Special condition</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XParagraphFlag" StyleIndex="5" />
            <Element xsi:type="XString" StyleIndex="8">
               <Text>Intern doctor</Text>
            </Element>
            <Element xsi:type="XString" StyleIndex="5">
               <Text> :</Text>
            </Element>
            <Element xsi:type="XInputField" StyleIndex="5">
               <ID>Intern doctor</ID>
               <EnableValueValidate>true</EnableValueValidate>
               <ValidateStyle>
                  <CheckMaxValue>true</CheckMaxValue>
                  <CheckMinValue>true</CheckMinValue>
                  <DateTimeMaxValue>0001-01-01T00:35:00+08:00</DateTimeMaxValue>
                  <DateTimeMinValue>0001-01-01T00:35:00+08:00</DateTimeMinValue>
               </ValidateStyle>
               <ValueBinding />
               <CopySource />
               <XElements Count="1">
                  <Element xsi:type="XImage" StyleIndex="5">
                     <Width>409</Width>
                     <Height>161</Height>
                     <Image>
                        <HorizontalResolution>96</HorizontalResolution>
                        <VerticalResolution>96</VerticalResolution>
                        <ImageDataBase64String> iVBORw0K GgoAAAAN SUhEUgAA AIIAAAAz CAYAAABb ldAtAAAA AXNSR0IA rs4c6QAA AARnQU1B AACxjwv8 YQUAAAAJ cEhZcwAA DsMAAA7D AcdvqGQA AArLSURB VHhe7Zx1
 jBTLFocX d3dY2F0u 7AsPd4Lm BncJLkH+ QAIECRLc ggQIbkGD BgtuCRCC e3AI7u7u nPe+QzfM Dj07M7sz uzv39pd0 drt6Wqbr V6fOqTo1 QcWLFxe2 okWL6l+r zdNjGcNz
 S+LQHL+2 pGHBET7L psdyZZJE wSl+bSH/ SSXB4al+ fYZrFi1W RMuct6g+ Z6EiRSR1 2F8Rysz9 THnCI5Sb W6LgkEi3 YsWKWZ5T 4P/3sjpm blbH/luo sKQICZOU obn/2JLk
 DHV5nrlF 91iQBBBf vnyRN2/e yNWrV2X9 +vUyc+ZM adKkiVSo UEGqVKki 9evXl7Zt 28rp06eN M2w8Jc4J 4cePH/Lt 2zd59OiR 7N69W0aP Hi21atWS kiVLSosW LWTWrFly
 48YN+fr1 q3GGjS+I dSFQ6Zcv X5bZs2dL gwYNpFKl StK+fXuZ N2+etvwX L16oJbDx LzEmBFo6 Zv3KlSsy ZcoUbeXl y5eXrl27 yt69e+XW rVvGJ21i A78K4cSJ E9K3b1+p
 WLGi5M6d W4YMGSKb N2/WVo4l QBw2cQOf COHt27dy 8uRJmT59 urRq1Uq9 986dO2sf //nzZ48r fP/+/bZl iCU8FsL3 79/l/fv3 cvfuXXXg 8uXLJ2nS pJHEiRNL +vTpZfDg
 wdrSo9PK g4KCZOTI kcaeTUxi KYQPHz7I w4cPZcWK FdKmTRsp WLCgVhJb okSJJHPm zNKyZUvZ unWrT733 1KlT6z3K li0r9+7d M0ptYgIV wrJly2TJ kiXSo0cP SZUq1a9K
 NzcqHk+e /t3fNGrU SMWGKBCk TcwQNHbs 2F8VHj9+ fMmePbvU rl1bPXvC upcvXxof jTnOnz+v YsDq2MQM QYR0hw4d kjNnzsjr 16+N4thn 2rRpKgbb KsQMfg0f o8OnT58k
 ZcqUKggb /xNnhQAD Bw7ULsvG /8Tpt/z4 8WP1W7Zs 2WKU2PiL ON/cmjZt qlOlNv4l zgvh+fPn 2j0wQmnj PwKiA06X Ll2MjGH8 mwkIIXTr 1k2HtG38 R0AIgQmt ZMmSGXs2
 /iAghABE D2Qt2XgO 80DM2ezZ s0dWrlyp UwiNGzeW OnXqSI0a NaRevXoy YMAAjc4C RgjMcpLf YOOeTZs2 Sf78+dXJ Tpo0qWTJ kkWyZcsm mTJlUn8r RYoUkjx5 cv1rTi0E
 jBDy5s0r O3bsMPZs XEHmF5U7 aNAgefXq lVHqmnPn zmmmWMAI gaTVOXPm GHvWMIva unVrGTZs mHTp0kVG jRqluRPz 58+X48eP G5/650Ll I4Jjx44Z JZ4TMEIg e4lKtYKk
 mdKlS+tL CA4OVjOY I0cONYXM V1DOhikk P9IV5EGQ Qudrjhw5 orO6jIk4 Q05HxowZ JV68ePq8 PDufzZkz p5r3hQsX ytOnT+Xd u3fGGdbQ +hMkSCAT J040Srwj YITAWgUc
 GysKFSok CRMm1Eom Q8rMkuIv FUtW1bhx 41QM9IdM aDnz7Nkz rQxfJ8Rc v35dr8u9 sViOzJgx Q8sZOd25 c6cm8mLJ OnXqpJNt OHQc53wz RYCpeass sF27duln o5ooFDBC
 ePDggaa7 O8ILCQsL kyRJkmhF uoMFMbys devWGSW/ uXjxoh7r 06ePUeIa 7uuuhQJT +wj08OHD em3GQ0yY XqeMFD93 kMe5du1a FQzncM2N GzcaR39C 18mxqFq0 gBECrbpd
 u3bG3s/K KFy4sHrB nuYskHrH y2JMAmE5 wgskMmEh jTtYZeVu XGPx4sXq sZO+D9yX xF6T7t27 a76Ft+Dr IASshGNX g1iwGmSN R4WAEcLB gwelZ8+e xp6ov8AL IWHWUzDN
 VAgbqXnO 1K1bV4Vl ZXpNOFa5 cmW9xseP H43S33Ac JxVRnT17 1igV9QOq Vatm7ImG dGR5RwUE hRBIKnJk zJgx+lyI 0FsCRghk UdGHAurn C9OvegNp d4iHczds 2GCU/mbf
 vn16LLKB K/Nls5HV 7Qgi6NCh g1oCfANH QkJCpEyZ Mvo/Pgrn R9Uf6dix owqBZQTO 4ENgGRxF 6AkBIwRM LFPSQITA otfIWq4r TAeNrsYZ og9eoquW ih+CP0LK vZUQsChE
 JteuXTNK foOlwZIA kQAeflSe n3PCw8M1 udcKvgO+ BBbIE7/J JGCEQAum tdG30xq8 6RIcoVVS iaTrW1Gk SBGtUCu4 76pVqzSx 11kIrNmk O7CKSICK qVmzpv5P cjBL0aNC
 9erV9d4s JnIFYmBl GaG0q+dx JmCEgMdN aNWsWbMI Tpc3LFiw QCuTVu+q WyEEpVU7 07x5cylV qpT+v2bN Gu1iTJYv X66VE1ny LyOjLN83 /2fwxwpa PBWJn8ES gqpVq2ql
 cn027tu7 d2/j067B kUR8hJye NJqAEQJL 6BhHcPfC XcH5CICB qbRp08rw 4cONIxG5 c+dOhEoG hrYx5WZo RszONYAu i2dyt1SP iR6sACu7 ub6rzyN0 s9LZEC6R zPjx441P
 eA6iYviY Z3c3TxMw QiBcw0dg 9M9bSIJl ksXsu2lR GTJk0P+d octAMCaM 6mHysSYm DG4xCkjW FH21K1E5 8vfff6tf w/WoXGf/ whGuyxgE Dqenpt0V WBe6M5zV XLlyqRit
 fKCAEQKt iKV3kydP Nko8g7ga L/727dtG icjRo0f/ aPUmDBTR EjGtVAgv rkSJEvpC TagkVn8x pcswsOMx V+Cb4O0T kUTHx4kO DGz1799f 79+wYcMI zmpACIEv wEJbrII3
 OQmLFi1S b/3+/ftG yU+oOAZz XJlnhMPo I8v/iPed ve9Tp06p kDC55oCR O7Ay27Zt 0xaOD8Ic Q2yxfft2 FTshuUlA CAFPecSI ES5DJmcY b8cMZ82a 9Q8RmNDS zXEJZzD7
 CAAhWCXN 4jPwIl1F F87Q8miF pohJEGFS yR8TXJ7A d+L5iV5M AkIIPDSD QZ4IgbAK y8F0dGQw 4ILfYAV9 KRVHy7cC 88ozHThw wCiJnEuX LqmoTFOM UJkVZbQ0 tuAd0eWZ
 xHkh0HKZ OWQUDXPs PJrGy6Vs 0qRJaqrp CjypICoD cz106FCj 5De01jx5 8hh7EeF+ vESmi6OD OQHGQuOY hmQU7t2v Xz+jJI4L YerUqfpj HCb8lB5i YDyB7oKQ DI+e1kvM
 THTgieNm QkjJ+Y4m moqmzHGm 0BGuz0s0 xwSiQ4EC BVS87n4O kJxCb0YJ I4MGgCXE R3LMYIqz QqBvp+U5 zhIScvFb ioR+OFz0 5QgismST yLh586be wzGiMKeH sTCuKFeu
 nEeDOp7A RBRiIKIg XCS8xJdg I9xluR/P 6DwFHxWI VJi2pzHR XTkSJ4VA qyNUZIIn NqDLmDBh grHnf0g2 RQwI0Gqj m3KeafQW ukssJ/ex yv2Mk0LA GWNBizdm 3pfgSFpF
 C/4ES0Q4 x3D13Llz Nc+SpBUS UDx5Fsw8 4xurV68W fvyEbhSn F+uJY0pI 3KtXL5fX inNCuHDh gj50dFvA PxX8Gcw7 TjFRlFnJ bPT97NNl MkdB98ac Cv6FuxQ2 nwgBB8sM
 jaIDU8N8 oX9DxnFU 4T0zX0K0 Edkwtbf4 RAjMzLFq JqqmnC9H siZ92NKl S41Sm5jE J0LgR7Lx ROmXvAVP ltxDLAHx rU3s4DMf gSxbvG1X w7bO4LQw UIQAmCr1 pZmz8R6f
 OoskTRLu kFBBzsCT J0+0xeOs MB+O2Sen gEwjYmOm ZrEmNrGP T4VAX8/c N6OBzrEw /X9oaKj6 EoRGnqzL s4kpRP4H QI2P3SVH Wt8AAAAA SUVORK5C YII=</ImageDataBase64String>
                     </Image>
                  </Element>
               </XElements>
               <StartBorderText>{</StartBorderText>
               <EndBorderText>}</EndBorderText>
               <BorderElementColor>#00000000</BorderElementColor>
               <MoveFocusHotKey>None</MoveFocusHotKey>
               <DisplayFormat />
               <BackgroundText>Intern doctor</BackgroundText>
               <EnableHighlight>Disabled</EnableHighlight>
               <EditorActiveMode>None</EditorActiveMode>
               <FieldSettings />
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="11" />
         </XElements>
      </Element>
      <Element xsi:type="XTextFooter">
         <AcceptTab>true</AcceptTab>
         <EnableValueValidate>true</EnableValueValidate>
         <XElements Count="2">
            <Element xsi:type="XPageInfo" StyleIndex="14">
               <ID>pageinfo1</ID>
               <Width>400</Width>
               <Height>65</Height>
            </Element>
            <Element xsi:type="XParagraphFlag" StyleIndex="15" />
         </XElements>
      </Element>
      <Element xsi:type="XTextHeaderForFirstPage">
         <AcceptTab>true</AcceptTab>
         <EnableValueValidate>true</EnableValueValidate>
         <XElements Count="1">
            <Element xsi:type="XParagraphFlag" StyleIndex="0">
               <AutoCreate>true</AutoCreate>
            </Element>
         </XElements>
      </Element>
      <Element xsi:type="XTextFooterForFirstPage">
         <AcceptTab>true</AcceptTab>
         <EnableValueValidate>true</EnableValueValidate>
         <XElements Count="1" />
      </Element>
   </XElements>
   <SerializeParameterValue>true</SerializeParameterValue>
   <FileName>病历.xml</FileName>
   <FileFormat>XML</FileFormat>
   <ContentStyles>
      <Default xsi:type="DocumentContentStyle">
         <FontName>宋体</FontName>
         <FontSize>12</FontSize>
      </Default>
      <Styles>
         <Style Index="0">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <Align>Center</Align>
         </Style>
         <Style Index="1">
            <FontName>Microsoft YaHei UI</FontName>
            <FontSize>26.25</FontSize>
            <Bold>true</Bold>
            <Align>Center</Align>
         </Style>
         <Style Index="2">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <BorderWidth>1</BorderWidth>
            <BorderLeft>true</BorderLeft>
            <BorderBottom>true</BorderBottom>
            <BorderTop>true</BorderTop>
            <BorderRight>true</BorderRight>
            <PaddingLeft>15</PaddingLeft>
            <PaddingTop>10</PaddingTop>
            <PaddingRight>15</PaddingRight>
            <PaddingBottom>10</PaddingBottom>
         </Style>
         <Style Index="3">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <BorderTop>true</BorderTop>
            <PaddingLeft>15</PaddingLeft>
            <PaddingTop>10</PaddingTop>
            <PaddingRight>15</PaddingRight>
            <PaddingBottom>10</PaddingBottom>
         </Style>
         <Style Index="4">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <BorderTop>true</BorderTop>
         </Style>
         <Style Index="5">
            <FontName>Calibri</FontName>
            <FontSize>12</FontSize>
         </Style>
         <Style Index="6">
            <FontName>Calibri</FontName>
            <FontSize>12</FontSize>
            <Align>Center</Align>
         </Style>
         <Style Index="7">
            <FontName>Calibri</FontName>
            <FontSize>18</FontSize>
            <Bold>true</Bold>
         </Style>
         <Style Index="8">
            <FontName>Calibri</FontName>
            <FontSize>12</FontSize>
            <Bold>true</Bold>
         </Style>
         <Style Index="9">
            <FontName>Calibri</FontName>
            <FontSize>16</FontSize>
            <Bold>true</Bold>
         </Style>
         <Style Index="10">
            <FontName>Calibri</FontName>
            <FontSize>20</FontSize>
            <Bold>true</Bold>
         </Style>
         <Style Index="11">
            <FontName>Calibri</FontName>
            <FontSize>12</FontSize>
            <Align>Right</Align>
         </Style>
         <Style Index="12">
            <FontName>Calibri</FontName>
            <FontSize>14.25</FontSize>
         </Style>
         <Style Index="13">
            <FontName>Calibri</FontName>
            <FontSize>26.25</FontSize>
            <Bold>true</Bold>
            <Align>Center</Align>
         </Style>
         <Style Index="14">
            <FontName>Calibri</FontName>
            <FontSize>12</FontSize>
         </Style>
         <Style Index="15">
            <FontName>宋体</FontName>
            <FontSize>12</FontSize>
            <Align>Center</Align>
         </Style>
         <Style Index="16">
            <FontName>Calibri</FontName>
            <FontSize>18</FontSize>
            <Bold>true</Bold>
            <TitleLevel>0</TitleLevel>
         </Style>
         <Style Index="17">
            <FontName>Calibri</FontName>
            <FontSize>16</FontSize>
            <Bold>true</Bold>
            <TitleLevel>0</TitleLevel>
         </Style>
         <Style Index="18">
            <FontName>Calibri</FontName>
            <FontSize>20</FontSize>
            <Bold>true</Bold>
            <TitleLevel>0</TitleLevel>
         </Style>
      </Styles>
   </ContentStyles>
   <Info>
      <LicenseText>未注册|Unregister</LicenseText>
      <CreationTime>1980-01-01T00:00:00+08:00</CreationTime>
      <LastModifiedTime>2025-01-22T11:22:58+08:00</LastModifiedTime>
      <LastPrintTime>1980-01-01T00:00:00+08:00</LastPrintTime>
      <Operator>DCSoft.Writer Version:1.0.0.0</Operator>
      <NumOfPage>6</NumOfPage>
   </Info>
   <BodyText>Name : {huayy}  Sex: {Sex} 
Profession :{Profession}  Age: {Age} 
Native place: {Native place}  Address: {Name} 
Marital state: {Marital state} Nationality: {Nationality} 
Date of admission: {choose admission} Date of taking: {Date of taking} 
Narrator: {Narrator} Reliability : {Reliability} 
The History  

Chief Complaint: {lumbago for 2 years with  weakness ,numbness  in lower limbs,  more severe 2 months.}

Present Illness: {2 years ago ,after working ,the patient always felt lumbago, sometimes referred pain at the hip and lower extremities,mainly at the dorsal side.and the left lower limb was more severe. At the same time he felt weak and numb at lower limbs, also more severe in the left side. No muscle atrophy, no abnormal of stool and urine. No temperature abnormal or color changes in the local skin. No nails damaged. Then the patient went to the hospital in his town, and had a X-ray examination, shown hypertrophy in the lumbar vertebrae., given some drugs for pain-control. After having some drugs and more rest, the symptoms lightened. But 2 months ago ,without significant causes,the symptoms became more severe. The lumbago often made him sleepless at nights. And he can only walk 500 meters without a break. his left lower limb felt numb and weak. Having the drugs and rest both can not ease the symptoms. So he came to our hospital for advanced diagnosis and treatment. Since the disease, no changes in consciousness ,body temperature, appetite, body weight .and normal of stool and urine. }

Past history: {the patient had a history of high intensive working for about 10 years. No history of chronic diseases like hypertension, CAD and mellitus diabetics. No history of hepatitis or AIDS , tuberculosis .No history of trauma and operation. No history of hypersensitivity of any drug or food. }

Review of Systems: 

Respiratory system: {no history of chronic cough , expectoration, hemoptysis , chest pain , or short of breath. }

Circulation system: {no history of dyspnea or edema at the lower limbs. No history of palpitation or chest pain. No dizziness, headache,  No history of hypertension. }

Digestive system: {no history of anorexia, abdominal distention, regurgitation. No  nausea and vomiting. No history of constipation , diarrhea ,melena and so on. }

Urogenital system: {no history of swollen eyelids or lumbago. No frequent micturition, urgency of micturition or urodynia. No dysuria ,hematuria or retention and incontinence of urine .no history of acute or chronic nephritis. }

Hemopoeltic system: {No pallid countenance ,weakness,dizziness , daze ,tinnitus. No history of bleeding and repeated infections. No history of enlargement of liver and spleen. }

Metabolic and Endocrine system: {no abnormal cold or hot feeling,  hidosis ,headache weakness,impaired vision,polyphagia ,polyuria ect.normal distributed hair.no change of temper and intelligence. }

Nervous system: {No headache ,projectile vomiting . no syncope ,spasm ,impaired vision, abnormal sensation or motion. No change of personality .no mania ,depression or hallucination. }

Motor system:{lumbago and limitation of movement for 2 years. weakness and numbness at lower limbs, the left more severe. No spasm, atrophy or palalysis. No joint red swollen, hot ,pain or limitation of motion. No trauma or fracture.}

Personal history: {born in her native place and living in Tianjin. No history of exposure to poison.No habits of drinking or smoking. }

Marital History: {Married at 24 years old and having a child. the  child and his wife  both health.}

Family history: {denying the family history of  any heredity diseases ,or  MD, CAD,  hypertension ect.     }

Physical Examination
Temperature: {36.5°C}   pulse rate: {72/min}   respiratory rate: {18/min}  blood pressure: {130/80mmHg }

General appearance:{normal development and medium in nourished ,no abnormal consciousness, good corporation in examination. Free position.  }

Skin and mucous membrane: {No pallid , cyanosis, and jaundice . no abnormal pigmentation and depigmentation . no erythma annulare, petechia and spider angioma. Normal elasticity of skin, no edema. Superficial lymph nodes: no enlargement of the superficial lymph nodes. }

Skull: {no deformity, tenderness or mass. Evenly distributed hair with black color and shine. }

Eyes: {no drop out of eyebrow and no madarosis ,no swollen or prolapse of eyelids. No pallor, granules ,follicles pectechiae of conjunctivae . transparent of cornea ,no nebula ,keratoleukoma, malacia, ulcer or vascularization. No exophthalmos or enophthalmos.free motions of the eye balls in any direction. Equal and round pupils at both sides with diameter 4mm, normal and active direct and indirect light reflexs,normal accommodation and convergence reflexes. Vision , visual field and eyegroud not examined. } 

Ears:{no deformity .no abnormal secretion from external canals. No red, tenderness, swollen in the mastoid. Rough tested normal hearing. }

Buccal cavity:{no pallid or cyanosis of lips ,also no dryness ,herpes simplex. No congestion ,petechia or ulcer in the buccal membrane . 32 teeth, no caries. No bleeding or  congestion ,lead line in gums. Thin and slight yellow fur coated on the tongue  ,with normal in motion. No redness and congestion in pharynx ,no deviation of uvulae. No edema in tonsils. }

Neck: {symmetry . no enlargement of external jugular vein, no abnormal pulsation of carotid arteries or veins. No rigidity .no enlargement of thyroid glands ,and the trachea in the centeral position. No murmur. Negative of hepatojugular reflux. }

Chest:{symmetry. No deformity. No barrel chest ,pigeon chest or funnel chest. No tenderness over the chest .the thoracic respiration present. R 18/min, symmetry in both sides. Symmetry and no abnormality of the 2 breasts.}

Lungs: 

Inspections:{no bulges or recession of the intercostals spaces during respiration. Respiratory movement  equal in both sides and regular . no dyspnea or three concave sign. }

Palpation: {symmetry respiratory movement in the two sides, no increase or decrease of vocal fremitus. No pleural friction fremitus . no subcutaneous crepitation. } 

Percussion: {resonance in all over the lung fields .  5 cm in width of  apexes ,and the lower margin of lung  at  6th ,8th ,10th   on midclavicular ,midaxillary,midcapular line respectively. The movement of the lower margin of the  lungs: 6 cm.. } 

Auscultation: {clear of vesicular breathing sounds all over the lung fields. No moist rales or rhonchis .normal of vocal resonance. No pleural friction sound. }

Heart: 

Inspection:{no precordial bulging. Apical impulse in the 5th ICS 1cm inside of left midclavicular line with an area of 2 cm in diameter. }

Palpation: {apical impulse and its area as that in inspection. Regular ,normal intensity. No pericardial friction rubs or thrill. }

Percussion: {relative cardiac dullness shown as follows: }

Right (cm)  ICS   Left (cm)  
2 Ⅱ 2 
2  Ⅲ  4 
3 Ⅳ 6 
  Ⅴ 7 The distance between the left midclvicular line and the midsternal line is 8cm. 

Auscultation:{HR 72/min with regular rhythm, heart sounds clear and intensive . no murmurs at any auscultation area of the valvula. No pericardical friction sound. }

Radial arteries: {pulse rate 85/min, with regular rhythm, equal in both sides, normal intensity . }

Perivascular signs: {no capillary pulsation, water hammer pulse ,pistol-shot sounds and Duroziez’s murmur . no pulse deficit, and pulse alternant.  }

Abdomen: 

Inspection: {symmetry. No bulge abdomen ,abdominal distention .normal abdominal respiration. No visible gastrointestinal waves. No varicosity , scar ,petechia at the abdominal }

Skin. 

Palpation: {soft, no tenderness and rebounding tenderness, no tightened abdominal wall. No palpable mass. }

Liver: {not palpable. }

Gallbladder: {not palpable. Negative of murphy’s sign. }

Kidneys: {not palpable. No tenderness in the any site of kidneys or ureters.}

Spleen: {not palpable. }

Appendix: {no tenderness at the Mcburney's site. }

Auscultation: {normal borhorygmus, 4/min, no murmur of vessels. No friction rubs . }

Anus and rectum: {not examined. }

Spine: {no lordosis, kyphosis, or scoliosis. tenderness and punching tenderness at the level of  L3-L5. Limitation of movement, especially anteflextion. No changes in the local skin. }

Extremities: {symmetry, no deformity . free motion .no joint .redness ,swollen ,tenderness or hotness . no edema in the lower extremities. myodynamia of left lower limb in 4th grade and right lower limb in 5-th grade. Details in the special condition. }

Nerve system: {numbness in lower limbs ,more severe in left side. Normal sensation.at other place. Biceps,triceps ,radioperiosteal , and abdominal wall reflexes normal.while knee jerk and Achilles jerk activer. babinski’s (+_)oppenheim’s,chaddock’s,gordon’s negative. No patellar or ankle clonus. }

Laboratory findings: 

Blood routine: {WBC 7.3*10ª ,N 0.65, L 0.35,Hb 141g/l .RBC 4.38*1012/l ,plt 238*10ª/l. }

X-ray: {hypertrophy of lumbar vertebrae. } 

MRI: {the results not gotten. }

Special condition: {no lordosis, kyphosis, or scoliosis of spine. tenderness and punching tenderness at the level of  L3-L5. Limitation of movement, especially anteflextion. No changes in the local skins. extrmities symmetry, no deformity . free motion .no joint .redness ,swollen ,tenderness or hotness . no edema in the lower extremities.Muscular tension of left lower limb in 4th grade and right lower limb in 5-th grade. Sensation in left lower limb decreased. Biceps,triceps ,radioperiosteal , and abdominal wall reflexes normal.while knee jerk and Achilles jerk activer. babinski’s (+_)oppenheim’s,chaddock’s,gordon’s negative. No patellar or ankle clonus.Lasegue sign(+). }

Intern doctor :{}</BodyText>
   <LocalConfig />
   <PageSettings>
      <LeftMargin>60</LeftMargin>
      <TopMargin>60</TopMargin>
      <RightMargin>60</RightMargin>
      <BottomMargin>60</BottomMargin>
   </PageSettings>
</XTextDocument>`;
