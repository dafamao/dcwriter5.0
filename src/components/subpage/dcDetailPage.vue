<template>
    <div class="common-layout" style="height: 100%">
        <el-container style="height: 100%">
            <el-main>
                <h5 class="mb-2" style="padding-left: 15px; margin-bottom: 0; color: #868e96">
                    {{ $t("DcSubPage.introduce") }}
                </h5>
                <el-tabs tab-position="left" v-model="activeName" style="height: calc(100% - 35px)" class="demo-tabs"
                    @tab-change="tabChange">
                    <el-tab-pane :label="$t('DcSubPage.CompanyProfile')" name="first">
                        <div class="contentContainer">
                            <h1>{{ $t("DcSubPage.WelcometoNanjingDuchangInformationTechnologyCoLtd") }}</h1>
                            <p>{{ $t("DcSubPage.NanjingDuchangInformationwasestablishedin2012") }}</p>
                            <p>{{ $t("DcSubPage.electronicmedicalrecords") }}</p>
                            <p>{{ $t("DcSubPage.informationizationindustry") }}</p>
                            <p>{{ $t("DcSubPage.softwarecompaniesintheindustry") }}</p>
                            <p>{{ $t("DcSubPage.Duchangsproducts") }}</p>
                            <p>{{ $t("DcSubPage.achievinginterconnectivity") }}</p>
                            <p>{{ $t("DcSubPage.AddressRoom") }}</p>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('DcSubPage.IntroductionEditor')" name="second">
                        <div class="contentContainer">
                            <p>{{ $t("DcSubPage.Electronicmedicalrecordeditorisasoftwaremiddleware") }}</p>
                            <p>{{ $t("DcSubPage.manufacturersorhospitals") }}</p>
                            <p>{{ $t("DcSubPage.medicalrecorddocuments") }}</p>
                            <p>{{ $t("DcSubPage.documentwritingscenarios") }}</p>
                            <p>{{ $t("DcSubPage.recordsordocuments") }}</p>
                            <p>{{ $t("DcSubPage.innovationrequirements") }}</p>
                            <img src="../../assets/img/介绍.jpg" alt="" width="70%"
                                style="max-height: calc(100% - 200px);">
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('DcSubPage.QuickIntegrationGuide')" name="third">
                        <!-- <div class="contentContainer" style="overflow-y: auto;">
                            <h2>{{ $t("DcSubPage.overview") }}:</h2>
                            <img src="../../assets/img/集成1.jpg" alt="" style="height: 30%">
                            <h2>{{ $t("DcSubPage.serverdeployment") }}:</h2>
                            <img src="../../assets/img/集成2.jpg" alt="" style="height: 30%">
                            <h2>{{ $t("DcSubPage.Frontendintegration") }}:</h2>
                            <img src="../../assets/img/集成3.jpg" alt="" style="height: 30%">
                        </div> -->
                        <quickIntegrationGuide />
                    </el-tab-pane>
                    <el-tab-pane :label="$t('DcSubPage.Browsercompatibility')" name="fourth">
                        <div class="contentContainer">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"
                                    fill="rgba(0,0,0,1)">
                                    <path
                                        d="M9.82726 21.7633C5.34912 20.7712 2 16.7767 2 12C2 10.1779 2.48734 8.46958 3.33878 6.99834L7.62189 14.4169C8.47396 15.9571 10.1152 17 12 17C12.2023 17 12.4018 16.988 12.5978 16.9646L9.82726 21.7633ZM12 22L16.2868 14.5751C16.7396 13.8229 17 12.9419 17 12C17 10.8744 16.6281 9.83566 16.0004 9H21.5422C21.8396 9.94704 22 10.9548 22 12C22 17.5228 17.5228 22 12 22ZM14.5721 13.545C14.0473 14.4168 13.0917 15 12 15C10.8897 15 9.92024 14.3968 9.40149 13.5002L9.37313 13.4501C9.13535 13.0203 9 12.526 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 12.5465 14.8539 13.0589 14.5985 13.5002L14.5721 13.545ZM4.6322 5.23859C6.46008 3.24783 9.08432 2 12 2C15.7014 2 18.9331 4.01099 20.6622 7H12C9.93635 7 8.1647 8.25019 7.40112 10.0345L4.6322 5.23859Z">
                                    </path>
                                </svg>
                                {{ $t('DcSubPage.Chromekernel') }}：<b>73{{ $t('DcSubPage.Andabove') }}</b>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"
                                    fill="rgba(230,47,17,1)">
                                    <path
                                        d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 10.5365 2.31538 9.14635 2.88033 7.89353C3.34744 6.95503 4.11409 6.01955 4.73082 5.7004C4.07759 6.98266 3.75823 8.24073 3.69049 9.08266C4.14533 7.58266 5.00622 6.32621 6.21106 5.43911C8.27719 3.92016 11.059 3.85202 12.1671 4.81976C10.1107 5.52581 7.87073 8.36653 8.36428 11.6952C8.44419 12.2447 8.60906 12.7785 8.85299 13.2774C8.46912 12.2661 8.43525 10.8435 9.05461 9.91935C9.74654 8.88911 10.7332 8.67137 11.2607 8.78266C11.0526 8.73911 10.5929 9.61936 10.5252 9.77419C10.3523 10.1679 10.2664 10.5943 10.2736 11.0242C10.2888 11.9223 10.6594 12.7778 11.3042 13.4032C13.2256 15.2754 16.3268 14.5387 17.7155 12.4016C18.6687 10.9306 18.7848 8.43427 17.5607 6.4504C17.2554 5.96696 16.8913 5.52325 16.4768 5.12944C14.6262 3.36387 11.9979 2.56054 9.49503 2.92549C8.38907 3.10214 7.44765 3.42052 6.67077 3.88065C7.75554 2.79776 9.9123 2 12.001 2Z">
                                    </path>
                                </svg>
                                {{ $t('DcSubPage.Firefoxbrowserkernel') }}：<b>78{{ $t('DcSubPage.Andabove') }}</b>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"
                                    fill="rgba(16,124,230,1)">
                                    <path
                                        d="M20.645 8.586C20.475 7.875 20.204 7.138 19.871 6.565C19.1 5.236 18.407 4.328 16.694 3.245C14.981 2.162 13.077 2 12.171 2C9.75598 2 7.95998 2.86 6.64598 3.887C3.34498 6.47 3.00098 11 3.00098 11C3.00098 11 4.22198 8.955 6.54098 7.474C7.94398 6.579 9.94198 6 11.569 6C15.886 6 16.001 10 16.001 10H9.00098C9.00098 8 10.001 7 10.001 7C10.001 7 5.00098 9 5.00098 14.044C5.00098 14.531 4.99798 15.416 5.24898 16.327C5.48098 17.17 5.94898 18.032 6.38098 18.68C7.60198 20.512 9.42598 21.294 10.297 21.584C11.293 21.916 12.326 22 13.307 22C16.027 22 18.184 21.114 19.001 20.725V16.553C18.243 17.007 16.322 18 14.001 18C9.00098 18 9.00098 14 9.00098 14H21.001V11.51C21.001 11.51 20.962 9.917 20.645 8.586Z">
                                    </path>
                                </svg>
                                {{ $t('DcSubPage.Edgebrowserkernel') }}：<b>98{{ $t('DcSubPage.Andabove') }}</b>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"
                                    fill="rgba(70,146,221,1)">
                                    <path
                                        d="M8.61295 20.1193C5.86915 21.6102 3.50024 21.9188 2.1909 20.6106C0.847101 19.2694 1.56267 15.7588 3.50394 12.2367C4.4519 10.5168 5.69213 8.79409 7.12757 7.31987C7.31507 7.13266 8.25257 6.19657 8.31507 6.19657C8.31507 6.19657 7.81507 6.5086 7.75257 6.5086C5.80254 7.60383 4.09018 9.58895 3.71617 10.0345C3.77393 9.77522 3.84289 9.52012 3.92249 9.26978C5.07865 5.63404 8.48217 3.00008 12.5009 3.00008C12.7308 3.00008 12.9586 3.0087 13.1842 3.02563C16.2787 1.62287 19.158 1.29938 20.3759 2.51465C21.5009 3.63795 21.4384 5.51011 20.5009 7.75671C20.4918 7.77847 20.4828 7.79991 20.4739 7.82104C21.1298 9.06983 21.5009 10.4916 21.5009 12.0001C21.5009 12.3794 21.4774 12.7531 21.4319 13.1201H20.6274C20.5763 13.1219 20.529 13.1227 20.4855 13.1227H8.69007V13.31C8.75173 15.3069 10.5017 17.0543 12.6267 17.0543C14.1267 17.0543 15.5642 16.243 16.1892 15.0573H20.9683C20.9608 15.0783 20.953 15.0992 20.9451 15.1201C19.6766 18.5528 16.3746 21.0001 12.5009 21.0001C11.1084 21.0001 9.7898 20.6839 8.61295 20.1193ZM8.00613 19.7991C6.1803 18.7445 4.75932 17.0672 4.03351 15.0575C2.87291 17.3392 2.57399 19.2474 3.56507 20.237C4.37757 21.0491 6.00257 20.861 8.00257 19.801L8.00613 19.7991ZM20.1728 7.29218C20.178 7.28091 20.1832 7.26962 20.1884 7.2583C20.9384 5.63576 21.0009 4.26367 20.3134 3.4524C19.4442 2.58451 17.7732 2.70192 15.7906 3.62029C17.6193 4.33877 19.1559 5.63857 20.1728 7.29218ZM16.5642 10.753V10.6906C16.4392 8.63122 14.8142 7.07108 12.8142 7.07108C10.6892 7.07108 8.87757 8.75603 8.75257 10.6906V10.753H16.5642Z">
                                    </path>
                                </svg>
                                {{ $t('DcSubPage.IEbrowserdoesnotsupport') }}
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"
                                    fill="rgba(150,218,183,1)">
                                    <path
                                        d="M6.38231 3.9681C7.92199 2.73647 9.87499 2 12 2C14.125 2 16.078 2.73647 17.6177 3.9681L19.0711 2.51472L20.4853 3.92893L19.0319 5.38231C20.2635 6.92199 21 8.87499 21 11V12H3V11C3 8.87499 3.73647 6.92199 4.9681 5.38231L3.51472 3.92893L4.92893 2.51472L6.38231 3.9681ZM3 14H21V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V14ZM9 9C9.55228 9 10 8.55228 10 8C10 7.44772 9.55228 7 9 7C8.44772 7 8 7.44772 8 8C8 8.55228 8.44772 9 9 9ZM15 9C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7C14.4477 7 14 7.44772 14 8C14 8.55228 14.4477 9 15 9Z">
                                    </path>
                                </svg>
                                {{ $t('DcSubPage.WebViewkernel') }}：<b>86{{ $t('DcSubPage.Andabove') }}</b>
                            </p>
                            <p>{{ $t('DcSubPage.Recommendcustomers') }}</p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"
                                    fill="currentColor">
                                    <path
                                        d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM12.1779 7.17624C11.8055 7.06167 11.41 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15C13.2091 15 15 13.2091 15 11C15 10.59 14.9383 10.1945 14.8238 9.82212C14.5102 10.5166 13.8115 11 13 11C11.8954 11 11 10.1046 11 9C11 8.18846 11.4834 7.48982 12.1779 7.17624Z">
                                    </path>
                                </svg>
                                {{ $t('DcSubPage.Additionally') }}
                            </p>
                        </div>
                    </el-tab-pane>
                    <!-- <el-tab-pane label="Demo下载" name="fifth">
                <div class="contentContainer">
                    <p>vue2下载：</p>
                    <p>vue3下载：</p>
                    <p>react下载：</p>
                    <p>angular下载：</p>
                </div>
            </el-tab-pane> -->
                    <el-tab-pane :label="$t('DcSubPage.usersmanual')" name="sixth">
                        <div class="contentContainer">
                            <iframe :src="$t('DcSubPage.iframeAddress')" frameborder="0"
                                style="width: 100%;height: calc(100% - 50px);"></iframe>
                            <!-- <br> -->
                            <!-- <p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(159,207,248,1)"><path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM14 8V12.989L12 11L10.0108 13L10 8H8V16H10L12 14L14 16H16V8H14Z"></path></svg>
                        <span>word新版文档</span>
                    </p> 
                    href="https://docs.qq.com/doc/DVGVGYlNSQkNxWEls" -->
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('DcSubPage.CustomerConsultation')" name="seventh">
                        <div class="contentContainer">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"
                                    fill="currentColor">
                                    <path
                                        d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">
                                    </path>
                                </svg>
                                <span>{{ $t('DcSubPage.TechnicalcontactinformationPhone') }}：<b>13382022594</b></span>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"
                                    fill="currentColor">
                                    <path
                                        d="M21 8C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8H21ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z">
                                    </path>
                                </svg>
                                <span>{{ $t('DcSubPage.BusinesscontactinformationPhone') }}： <b>13382028281</b></span>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"
                                    fill="rgba(173,184,194,1)">
                                    <path
                                        d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z">
                                    </path>
                                </svg>
                                <span>{{ $t('DcSubPage.email') }}： <b>dcwriter@zohomail.cn</b></span>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"
                                    fill="rgba(100,205,138,1)">
                                    <path
                                        d="M18.5753 13.7114C19.0742 13.7114 19.4733 13.2873 19.4733 12.8134C19.4733 12.3145 19.0742 11.9155 18.5753 11.9155C18.0765 11.9155 17.6774 12.3145 17.6774 12.8134C17.6774 13.3123 18.0765 13.7114 18.5753 13.7114ZM14.1497 13.7114C14.6485 13.7114 15.0476 13.2873 15.0476 12.8134C15.0476 12.3145 14.6485 11.9155 14.1497 11.9155C13.6508 11.9155 13.2517 12.3145 13.2517 12.8134C13.2517 13.3123 13.6508 13.7114 14.1497 13.7114ZM20.717 18.7516C20.5942 18.8253 20.5205 18.9482 20.5451 19.1202C20.5451 19.1693 20.5451 19.2185 20.5696 19.2676C20.6679 19.6854 20.8643 20.349 20.8643 20.3736C20.8643 20.4473 20.8889 20.4964 20.8889 20.5456C20.8889 20.6685 20.7907 20.7668 20.6679 20.7668C20.6187 20.7668 20.5942 20.7422 20.5451 20.7176L19.0961 19.882C18.9978 19.8329 18.875 19.7837 18.7522 19.7837C18.6786 19.7837 18.6049 19.7837 18.5558 19.8083C17.8681 20.0049 17.1559 20.1032 16.3946 20.1032C12.7352 20.1032 9.78815 17.6456 9.78815 14.5983C9.78815 11.5509 12.7352 9.09329 16.3946 9.09329C20.0539 9.09329 23.001 11.5509 23.001 14.5983C23.001 16.2448 22.1168 17.7439 20.717 18.7516ZM16.6737 8.09757C16.581 8.09473 16.488 8.09329 16.3946 8.09329C12.2199 8.09329 8.78815 10.9536 8.78815 14.5983C8.78815 15.1519 8.86733 15.6874 9.01626 16.1975H8.92711C8.04096 16.1975 7.15481 16.0503 6.3425 15.8296C6.26866 15.805 6.19481 15.805 6.12097 15.805C5.97327 15.805 5.82558 15.8541 5.7025 15.9277L3.95482 16.9334C3.90559 16.958 3.85635 16.9825 3.80712 16.9825C3.65943 16.9825 3.53636 16.8599 3.53636 16.7127C3.53636 16.6391 3.56097 16.59 3.58559 16.5164C3.6102 16.4919 3.83174 15.6824 3.95482 15.1918C3.95482 15.1427 3.97943 15.0691 3.97943 15.0201C3.97943 14.8238 3.88097 14.6766 3.75789 14.5785C2.05944 13.3765 1.00098 11.5858 1.00098 9.59876C1.00098 5.94369 4.5702 3 8.95173 3C12.7157 3 15.8802 5.16856 16.6737 8.09757ZM11.5199 8.51604C12.0927 8.51604 12.5462 8.03871 12.5462 7.4898C12.5462 6.91701 12.0927 6.46356 11.5199 6.46356C10.9471 6.46356 10.4937 6.91701 10.4937 7.4898C10.4937 8.06258 10.9471 8.51604 11.5199 8.51604ZM6.26045 8.51604C6.83324 8.51604 7.28669 8.03871 7.28669 7.4898C7.28669 6.91701 6.83324 6.46356 6.26045 6.46356C5.68767 6.46356 5.23421 6.91701 5.23421 7.4898C5.23421 8.06258 5.68767 8.51604 6.26045 8.51604Z">
                                    </path>
                                </svg>
                                {{ $t('DcSubPage.WeChattechnicalsupport') }}
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"
                                    fill="rgba(159,207,248,1)">
                                    <path
                                        d="M19.9139 14.529C19.7336 13.955 19.4877 13.2856 19.2385 12.643L18.3288 10.3969C18.3295 10.371 18.3408 9.92858 18.3408 9.70053C18.3408 5.8599 16.5082 2.00037 12.0009 2C7.49403 2.00037 5.66113 5.8599 5.66113 9.70053C5.66113 9.92858 5.67237 10.371 5.67312 10.3969L4.76379 12.643C4.51453 13.2856 4.26827 13.955 4.08798 14.529C3.2285 17.2657 3.507 18.3982 3.71915 18.4238C4.17419 18.4779 5.49021 16.3635 5.49021 16.3635C5.49021 17.5879 6.12741 19.1858 7.5064 20.3398C6.99064 20.4971 6.35868 20.7388 5.95237 21.0355C5.58729 21.3025 5.63302 21.5743 5.69861 21.6841C5.9876 22.1661 10.6542 21.9918 12.0017 21.8417C13.3488 21.9918 18.0158 22.1661 18.3044 21.6841C18.3704 21.5743 18.4157 21.3025 18.0507 21.0355C17.6443 20.7388 17.012 20.4971 16.4959 20.3395C17.8745 19.1858 18.5117 17.5879 18.5117 16.3635C18.5117 16.3635 19.8281 18.4779 20.2831 18.4238C20.4949 18.3982 20.7734 17.2657 19.9139 14.529Z">
                                    </path>
                                </svg>

                                <span>{{ $t('DcSubPage.QQtechnicalsupport') }}：<b>800814880</b></span>
                            </p>


                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('DcSubPage.FunctionList')" name="eighth">
                        <div class="contentContainer FunctionList" style="overflow-y: auto;">
                            <div class="container">
                                <!-- <div class="title">
            <div>
                <a href="JavaScript:;" class="selectApp">DCWriter编辑器BS版</a>
            </div>
            <div>
                <a href="JavaScript:;" class="selectApp active">DCWriter编辑器CS版</a>
            </div>
            <div>
                <a href="JavaScript:;" class="selectApp">DCWriter时间轴(三测单)</a>
            </div>
        </div> -->
                                <div class="content">
                                    <div class="mainApp" style="display: none;">
                                        <table class="BS">
                                            <tbody>
                                                <tr>
                                                    <th colspan="4" style="width:60%"><span>功能</span></th>
                                                    <th style="width:20%"><span>标准版</span></th>
                                                    <th style="width:20%"><span>旗舰版</span></th>
                                                </tr>
                                                <tr>
                                                    <td><span>功能大类</span></td>
                                                    <td><span>功能类别</span></td>
                                                    <td><span>功能点</span></td>
                                                    <td><span>细分功能点</span></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="4"><span>开发方式</span></td>
                                                    <td><span>纯js开发</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>asp.net WebForm</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>asp.net MVC</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>asp.net MVC core3.0</span></td>
                                                    <td><span>特殊支持版本，需要与商务确认</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="43"><span>文件操作</span></td>
                                                    <td rowspan="4"><span>后端打开文件</span></td>
                                                    <td><span>XML格式</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>HTML格式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>RTF格式</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>TXT格式</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2"><span>前端打开文件</span></td>
                                                    <td><span>XML字符串</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Base64字符串</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="7"><span>后端保存文件</span></td>
                                                    <td><span>XML格式</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>HTML格式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>PDF格式</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Image.PDF格式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>MHT格式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>RTF格式</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>TXT格式</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2"><span>前端保存文件</span></td>
                                                    <td><span>XML字符串</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Base64字符串</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2"><span>后端保存图片</span></td>
                                                    <td><span>文档内容分页保存为图片</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>文档内容整体保存为长图片</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2"><span>前端插入xml片段</span></td>
                                                    <td><span>前端插入xml字符串</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>前端插入base64字符串</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2"><span>数据浏览</span></td>
                                                    <td><span>HTML预览</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>查看XML源代码功能</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="6"><span>页面设置（cs端）</span></td>
                                                    <td><span>页面空白占位字符</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>页面空白占位斜线/</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>页面空白占位反斜线\</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>页面空白占位S线</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>首页页眉页脚不同</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>左右页边距互换</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="4"><span>前端页面设置</span></td>
                                                    <td><span>纸张设置</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>页边距</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>页脚位置</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>打印方向</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="9"><span>打印</span></td>
                                                    <td><span>单文档打印模式</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>多文档合并模式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>留痕打印</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>整洁打印</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>选择内容打印（打印被选择内容）</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>续打</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>打印指定页</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>多文档合并打印预览页眉重新赋值</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>本地打印</span></td>
                                                    <td><span> 指希望在前端实现静默打印的方式</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="3"><span>打印预览</span></td>
                                                    <td><span>打印预览工具条</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>打印预览指定页</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>留痕预览</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="32"><span>文字编辑</span></td>
                                                    <td rowspan="19"><span>文字内容编辑器</span></td>
                                                    <td><span>自由录入文本</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>文档网格线</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>护理记录使用的自动换行模式</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>图片文字水印</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>页眉页脚</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>复制</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>剪切</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>异步粘贴</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>粘贴</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>撤销</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>重做</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>格式刷</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>清除字号</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>清除字体</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>字母转换为大写</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>字母转换为小写</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>插入特殊字符</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>插入当前时间</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>全选</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="13"><span>设置文字样式</span></td>
                                                    <td><span>字体</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>字小</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>粗体</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>斜体</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>颜色</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>下划线</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>背景色</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>删除线</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>字符边框</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>上标</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>下标</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>全局配置字体名称</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>全局配置字体大小</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="4"><span>表达式</span></td>
                                                    <td><span>级联表达式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>可见性表达式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>时间差表达式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>数值表达式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="8"><span>图片/图形</span></td>
                                                    <td rowspan="8"><span>图片</span></td>
                                                    <td><span>插入网络图片</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>插入本地图片</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>以JSON格式插入图片</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>图片拖拉缩放</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>前端设置左对齐</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>前端设置居中对齐</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>前端设置右对齐</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>前端编辑图片</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="11"><span>段落</span></td>
                                                    <td rowspan="9"><span>段落样式</span></td>
                                                    <td><span>左对齐</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>右对齐</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>居中对齐</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>段落行间距</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>首行缩进</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>段前距</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>段后距</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>行间距</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>清除段落格式</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2"><span>列表样式</span></td>
                                                    <td><span>数字项目样式</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>列表项目样式</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="27"><span>段落</span></td>
                                                    <td rowspan="6"><span>表格</span></td>
                                                    <td><span>插入表格</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>获取表格</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>删除表格</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>合并/拆分单元格</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>删除表格列/行</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>插入表格列/行</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="7"><span>表格行</span></td>
                                                    <td><span>后端数据源绑定</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>前端数据源绑定</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>标题行模式</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>表格行复制（清空内容复制）</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>表格行复制（保留结构复制）</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>表格行复制（完全复制）</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>是否可调整行高、列宽</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="6"><span>单元格</span></td>
                                                    <td><span>后端数据源绑定</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>前端数据源绑定</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>斜分隔线</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>跨页内容镜像</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>内容校验</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="9"><span>内容对齐方式</span></td>
                                                    <td><span>垂直靠下水平居中对齐</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span> </span></td>
                                                    <td><span>垂直靠下水平居左对齐</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span> </span></td>
                                                    <td><span>垂直靠下水平居右对齐</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span> </span></td>
                                                    <td><span>垂直居中水平居中对齐</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span> </span></td>
                                                    <td><span>垂直居中水平居左对齐</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span> </span></td>
                                                    <td><span>垂直居中水平居右对齐</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span> </span></td>
                                                    <td><span>垂直靠上水平居中对齐</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span> </span></td>
                                                    <td><span>垂直靠上水平居左对齐</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span> </span></td>
                                                    <td><span>垂直靠上水平居右对齐</span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2"><span>条码</span></td>
                                                    <td><span>一维码</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>二维码</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="7"><span>视图模式</span></td>
                                                    <td><span>编辑视图模式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>整洁视图模式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>分页预览视图模式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>留痕视图模式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>表单视图模式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>手机端视图模式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>自动缩放视图模式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="1"><span>文档批注</span></td>
                                                    <td><span>文档批注</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="36"><span>输入域元素</span></td>
                                                    <td><span>前端插入输入域</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>标签文本</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>单位文本</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>背景文本</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>固定宽度</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>提示文本</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="3"><span>内容加密显示</span></td>
                                                    <td><span>不加密显示</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>部分加密显示</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>全部加密显示</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="5"><span>输入模式(EditMode)</span></td>
                                                    <td><span>纯文本</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2"><span>下拉</span></td>
                                                    <td><span>静态下拉</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>动态下拉</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>时间日期</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>数字</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>自定义下拉列表</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>自定义弹出层</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>有无列表</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>用户不能直接编辑内容(Editable)</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>用户不能直接删除(Deleteable)</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="11"><span>数据校验(ValueValidate)</span></td>
                                                    <td><span>必填数据</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>数值类型</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>二进制长度判断</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>文本长度</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>数值或者日期值的最大值</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>数值或者日期值的最小值</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>小数最大位数</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>正则表达式文字</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>允许包含的关键字</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>排除关键字</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>自定义提示信息</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>后端数据源绑定(ValueBinding)</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>前端数据源绑定</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>自定义属性(Attributes)</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>输出文本格式控制(DisplayFormat)</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>内容自动复制(CopySource)</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>内容修改标记</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="4"><span>单选/复选框</span></td>
                                                    <td><span>计算功能</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>自定义前端样式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>后端数据源绑定(ValueBinding)</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>前端数据源绑定</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="10"><span>医学表达式</span></td>
                                                    <td><span>月经史</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>通用公式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>瞳孔图</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>光定位图</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>胎心图</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>标尺公式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>恒牙牙位图</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>乳牙牙位图</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>分数公式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>自定义表达式样式</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="9"><span>病程记录元素</span></td>
                                                    <td><span>插入病程记录</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>合并加载多个病程</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>定位病程记录</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>移动位置</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>调整顺序</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>强制换页</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>读写控制</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>转科功能</span></td>
                                                    <td><span>提供科室转科、床号转床等类似功能</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>获取指定病程xml</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2"><span>标签元素</span></td>
                                                    <td><span>基础功能</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>导航功能</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="1"><span>按钮(Button)</span></td>
                                                    <td><span>按钮元素</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="1"><span>横线元素(HorizontalLine)</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2"><span>页码元素(PageInfo)</span></td>
                                                    <td><span>基础功能</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>高级显示样式（第几页共几页）</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2"><span>超链接</span></td>
                                                    <td><span>插入超链接</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>断开超链接</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="3"><span>图表功能</span></td>
                                                    <td><span>柱状图</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>饼状图</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>折线图</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="24"><span>客户端事件</span></td>
                                                    <td><span>文档加载完成事件</span></td>
                                                    <td><span>ondocumentload</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>鼠标按下事件</span></td>
                                                    <td><span>ondocumentmousedown</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>鼠标移动事件</span></td>
                                                    <td><span>ondocumentmousemove</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>鼠标弹起事件</span></td>
                                                    <td><span>ondocumentmouseup</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>鼠标点击事件</span></td>
                                                    <td><span>ondocumentclick</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>鼠标双击事件</span></td>
                                                    <td><span>ondocumentdblclick</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>键盘按下事件</span></td>
                                                    <td><span>ondocumentkeydown</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>键盘按键事件</span></td>
                                                    <td><span>ondocumentkeypress</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>键盘弹起事件</span></td>
                                                    <td><span>ondocumentkeyup</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>新增表格行事件</span></td>
                                                    <td><span>EventTabInsertRow</span></td>
                                                    <td><span>监听tab键新增表格行</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>打印文件前事件</span></td>
                                                    <td><span>EventBeforePrint</span></td>
                                                    <td><span>本事件来实现自定义DOM修改打印文档内容</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>打印预览结束事件</span></td>
                                                    <td><span>EventAfterPrintPreview</span></td>
                                                    <td><span>可以使用本事件来实现打印预览后自定义DOM修改文档内容</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>剪切前事件</span></td>
                                                    <td><span>EventBeforeCut</span></td>
                                                    <td><span>可以使用本事件来实现拦截剪切</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>复制前事件</span></td>
                                                    <td><span>EventBeforeCut</span></td>
                                                    <td><span>可以使用本事件来实现拦截复制</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>粘贴前事件</span></td>
                                                    <td><span>EventBeforePaste</span></td>
                                                    <td><span>可以使用本事件来实现拦截粘贴</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>弹出框提示拦截</span></td>
                                                    <td><span>EventMessageHandler</span></td>
                                                    <td><span>使用本事件可以拦截所有弹出提示框提示信息</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>输入域内容后改变事件</span></td>
                                                    <td><span>EventAfterFieldContentEdit</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>输入域内容前改变事件</span></td>
                                                    <td><span>EventBeforeFieldContentEdit</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>输入域回调事件</span></td>
                                                    <td><span>EventFieldOnBlur</span></td>
                                                    <td><span>客户手动输入，又想看上一个输入域输入了什么内容，可以执行这个实现获取光标所在的上一个输入域属性</span>
                                                    </td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>输入域获取焦点的回调事件</span></td>
                                                    <td><span>EventFieldOnFocus</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>下拉输入域空格回调事件</span></td>
                                                    <td><span>EventAfterSpace</span></td>
                                                    <td><span>下拉列表展示时可以控制重写空格操作</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>下拉输入域Enter键回调事件</span></td>
                                                    <td><span>EventAfterEnter</span></td>
                                                    <td><span>下拉列表展示时可以控制重写Enter操作</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>文档内容改变事件</span></td>
                                                    <td><span>EventChangeContent</span></td>
                                                    <td><span>文档内容输入或删除会发事件</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>插入病程后事件</span></td>
                                                    <td><span>EventAfterInsertSubDocuments</span></td>
                                                    <td><span>再插入病程记录后会触发事件</span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="39"><span>其他功能</span></td>
                                                    <td><span>关于对话框</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>文档自动保存</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>获取最大并发</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>获取当前并发</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>提前释放并发(15min)</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>自定义右键快捷菜单</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>移动输入焦点</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>获得对象在文档视图中的绝对左边边界</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>根据输入域ID插入XML字符串</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>获取所有的输入域</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>清空正文内容</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>获得正在编辑的文档的HTML代码</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>获得正在编辑的文档的HTML代码</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>获得承载文档正文的根DIV对象</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>判断文件内容是否修改</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="6"><span>返回一个控件当前状态的对象</span></td>
                                                    <td><span>文档总字符数</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>服务器端生成HTML代码的总耗时毫秒数</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>服务器端总耗时毫秒数</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>软件授权允许的最大并发数</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>当前占用的并发数</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>客户端浏览器完成加载文档总耗时毫秒数</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>打开本地文件</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2"><span>电子签名</span></td>
                                                    <td><span>软签</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>诺安软签（带设备）需要购买硬件设备</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>滚动条外观</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>对比留痕</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>实时留痕</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="3"><span>获取选中部分的内容</span></td>
                                                    <td><span>Text</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Html</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Xml</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="5"><span>返回当前光标所在元素</span></td>
                                                    <td><span>Element</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>InputField</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>TableRow</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>TableCell</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Table</span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>离线存储方案</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>获取元素坐标</span></td>
                                                    <td><span>获取输入域元素再打印时的坐标位置</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>编辑器服务日志</span></td>
                                                    <td><span>在编辑器支撑服务内动态生成每日日志</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>选中内容自定义菜单功能</span></td>
                                                    <td><span>选中内容之后，会在选中内容右上角产生一个可以自定义的横向工具条</span></td>
                                                    <td><span> </span></td>
                                                    <td><span> </span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="mainApp" style="display: block;">
                                        <table class="CS">
                                            <tbody>
                                                <tr>
                                                    <th colspan="3" style="width:50%">功能</th>
                                                    <th style="width:20%">编号</th>
                                                </tr>
                                                <tr>
                                                    <td>功能大类</td>
                                                    <td>功能类别</td>
                                                    <td>功能点</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="41">文件操作</td>
                                                    <td rowspan="4">打开文件</td>
                                                    <td>XML格式</td>
                                                    <td>XML_Read</td>
                                                </tr>
                                                <tr>
                                                    <td>HTML格式</td>
                                                    <td>HTML_Read</td>
                                                </tr>
                                                <tr>
                                                    <td>RTF格式</td>
                                                    <td>RTF_Read</td>
                                                </tr>
                                                <tr>
                                                    <td>TXT格式</td>
                                                    <td>TXT_Read</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="7">保存文件</td>
                                                    <td>XML格式</td>
                                                    <td>XML_Write</td>
                                                </tr>
                                                <tr>
                                                    <td>HTML格式</td>
                                                    <td>HTML_Write</td>
                                                </tr>
                                                <tr>
                                                    <td>PDF格式</td>
                                                    <td>PDF_Write</td>
                                                </tr>
                                                <tr>
                                                    <td>Image.PDF格式</td>
                                                    <td>ImagePDF_Write</td>
                                                </tr>
                                                <tr>
                                                    <td>MHT格式</td>
                                                    <td>MHT_Write</td>
                                                </tr>
                                                <tr>
                                                    <td>RTF格式</td>
                                                    <td>RTF_Write</td>
                                                </tr>
                                                <tr>
                                                    <td>TXT格式</td>
                                                    <td>TXT_Write</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">保存图片</td>
                                                    <td>文档内容分页保存为图片</td>
                                                    <td>SavePageImage</td>
                                                </tr>
                                                <tr>
                                                    <td>文档内容整体保存为长图片</td>
                                                    <td>SaveLongImage</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">自动保存机制</td>
                                                    <td>自动保存模式</td>
                                                    <td>AutoSave</td>
                                                </tr>
                                                <tr>
                                                    <td>基于本地文件系统的自动保存</td>
                                                    <td>AutoSaveLocal</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">数据浏览</td>
                                                    <td>HTML预览</td>
                                                    <td>HTML_Preview</td>
                                                </tr>
                                                <tr>
                                                    <td>查看XML源代码功能</td>
                                                    <td>ViewHTMLSource</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="23">页面设置</td>
                                                    <td>纸张设置</td>
                                                    <td>PageSettingsBase</td>
                                                </tr>
                                                <tr>
                                                    <td>页边距</td>
                                                    <td>PageMargin</td>
                                                </tr>
                                                <tr>
                                                    <td>打印方向</td>
                                                    <td>PageLandscape</td>
                                                </tr>
                                                <tr>
                                                    <td>默认字体</td>
                                                    <td>DefaultFont</td>
                                                </tr>
                                                <tr>
                                                    <td>文字水印</td>
                                                    <td>TextWaterMark</td>
                                                </tr>
                                                <tr>
                                                    <td>图片水印</td>
                                                    <td>ImageWaterMark</td>
                                                </tr>
                                                <tr>
                                                    <td>水印重复展示</td>
                                                    <td>Repeat</td>
                                                </tr>
                                                <tr>
                                                    <td>指定页码打印背景图片、水印</td>
                                                    <td>PageIndexsForPrintBackgroundImage</td>
                                                </tr>
                                                <tr>
                                                    <td>页面空白占位字符</td>
                                                    <td>TerminalText</td>
                                                </tr>
                                                <tr>
                                                    <td>页面空白占位斜线/</td>
                                                    <td>TerminalLine</td>
                                                </tr>
                                                <tr>
                                                    <td>页面空白占位反斜线\</td>
                                                    <td>TerminalLine2</td>
                                                </tr>
                                                <tr>
                                                    <td>页面空白占位S线</td>
                                                    <td>AutoSaveLocal</td>
                                                </tr>
                                                <tr>
                                                    <td>隐藏特定页数的页眉页脚</td>
                                                    <td>HideHeaderFooter</td>
                                                </tr>
                                                <tr>
                                                    <td>首页页眉页脚不同</td>
                                                    <td>HeaderFooterDifferentFirstPage</td>
                                                </tr>
                                                <tr>
                                                    <td>左右页边距互换</td>
                                                    <td>SwapLeftRightMargin</td>
                                                </tr>
                                                <tr>
                                                    <td>整体缩放适应纸张大小</td>
                                                    <td>AutoSaveLocal</td>
                                                </tr>
                                                <tr>
                                                    <td>支持POS打印机</td>
                                                    <td>POSPrinter</td>
                                                </tr>
                                                <tr>
                                                    <td>文档网格线</td>
                                                    <td>DocumentGridLine</td>
                                                </tr>
                                                <tr>
                                                    <td>页面边框和底纹</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>装订线</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>背景图片</td>
                                                    <td>DocumentBackgroundImage</td>
                                                </tr>
                                                <tr>
                                                    <td>带文档批注的数据校验</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>文档导航</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="1">截屏</td>
                                                    <td>插入截屏</td>
                                                    <td>ScreenSnapshort</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="16">打印</td>
                                                    <td rowspan="13">打印</td>
                                                    <td>单文档打印模式</td>
                                                    <td>PrintSingleDocument</td>
                                                </tr>
                                                <tr>
                                                    <td>多文档合并模式</td>
                                                    <td>PrintMultiDocuments</td>
                                                </tr>
                                                <tr>
                                                    <td>多文档混合模式</td>
                                                    <td>PrintMultiDocumentsMixed</td>
                                                </tr>
                                                <tr>
                                                    <td>留痕打印</td>
                                                    <td>PrintTrace</td>
                                                </tr>
                                                <tr>
                                                    <td>整洁打印</td>
                                                    <td>PrintClean</td>
                                                </tr>
                                                <tr>
                                                    <td>后台打印</td>
                                                    <td>BackgroundPrint</td>
                                                </tr>
                                                <tr>
                                                    <td>续打</td>
                                                    <td>JumpPrint</td>
                                                </tr>
                                                <tr>
                                                    <td>偏移续打</td>
                                                    <td>OffsetJumpPrint</td>
                                                </tr>
                                                <tr>
                                                    <td>选择内容打印（打印被选择内容）</td>
                                                    <td>PrintSelection</td>
                                                </tr>
                                                <tr>
                                                    <td>区域选择打印</td>
                                                    <td>PrintBoundSelection</td>
                                                </tr>
                                                <tr>
                                                    <td>手动双面打印</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>续打页不打印单元格边框</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>打印指定页</td>
                                                    <td>PrintSpecifyPages</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="3">打印预览</td>
                                                    <td>用户界面</td>
                                                    <td>PrintPreview</td>
                                                </tr>
                                                <tr>
                                                    <td>双页并排显示</td>
                                                    <td>PrintPreviewMultiColumn</td>
                                                </tr>
                                                <tr>
                                                    <td>缩放</td>
                                                    <td>PrintPreviewZoom</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="18">文字编辑</td>
                                                    <td rowspan="9">文字内容编辑器</td>
                                                    <td>自由录入文本</td>
                                                    <td>FreeEdit</td>
                                                </tr>
                                                <tr>
                                                    <td>复制</td>
                                                    <td>Copy</td>
                                                </tr>
                                                <tr>
                                                    <td>剪贴</td>
                                                    <td>Cut</td>
                                                </tr>
                                                <tr>
                                                    <td>粘贴</td>
                                                    <td>Paste</td>
                                                </tr>
                                                <tr>
                                                    <td>选择性粘贴</td>
                                                    <td>SpecifyPaste</td>
                                                </tr>
                                                <tr>
                                                    <td>撤销</td>
                                                    <td>Undo</td>
                                                </tr>
                                                <tr>
                                                    <td>重做</td>
                                                    <td>Redo</td>
                                                </tr>
                                                <tr>
                                                    <td>格式刷</td>
                                                    <td>FormatBrush</td>
                                                </tr>
                                                <tr>
                                                    <td>清除格式</td>
                                                    <td>CleanFormat</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="9">设置文字样式</td>
                                                    <td>字体</td>
                                                    <td>Font</td>
                                                </tr>
                                                <tr>
                                                    <td>大小</td>
                                                    <td>FontSize</td>
                                                </tr>
                                                <tr>
                                                    <td>粗体</td>
                                                    <td>FontBold</td>
                                                </tr>
                                                <tr>
                                                    <td>斜体</td>
                                                    <td>FontItalic</td>
                                                </tr>
                                                <tr>
                                                    <td>颜色</td>
                                                    <td>ForeColor</td>
                                                </tr>
                                                <tr>
                                                    <td>背景色</td>
                                                    <td>BackgroundColor</td>
                                                </tr>
                                                <tr>
                                                    <td>上下标</td>
                                                    <td>SupSubscript</td>
                                                </tr>
                                                <tr>
                                                    <td>圆形文字套圈</td>
                                                    <td>CircleChar</td>
                                                </tr>
                                                <tr>
                                                    <td>矩形文字套圈</td>
                                                    <td>RectangleChar</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="9">图片/图形</td>
                                                    <td rowspan="9">图片</td>
                                                    <td>插入图片</td>
                                                    <td>InsertImage</td>
                                                </tr>
                                                <tr>
                                                    <td>图片拖拉缩放</td>
                                                    <td>ImageResize</td>
                                                </tr>
                                                <tr>
                                                    <td>设置图片来源</td>
                                                    <td>ImageSource</td>
                                                </tr>
                                                <tr>
                                                    <td>设置固定长宽比</td>
                                                    <td>FixImageSizeRate</td>
                                                </tr>
                                                <tr>
                                                    <td>图片平滑缩放</td>
                                                    <td>ImageSmoothZoom</td>
                                                </tr>
                                                <tr>
                                                    <td>设置图文混排</td>
                                                    <td>ImageMixText</td>
                                                </tr>
                                                <tr>
                                                    <td>图片矢量图标记</td>
                                                    <td>ImageMixText</td>
                                                </tr>
                                                <tr>
                                                    <td>自定义绘制图形</td>
                                                    <td>CustomDrawElement</td>
                                                </tr>
                                                <tr>
                                                    <td>图片布局方式（文字之前或之后印章图片）</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="16">段落</td>
                                                    <td rowspan="5">段落样式</td>
                                                    <td>段落缩进</td>
                                                    <td>ParagraphIndent</td>
                                                </tr>
                                                <tr>
                                                    <td>段落行间距</td>
                                                    <td>ParagraphSpacing</td>
                                                </tr>
                                                <tr>
                                                    <td>首行缩进</td>
                                                    <td>FirstLineIndent</td>
                                                </tr>
                                                <tr>
                                                    <td>悬挂缩进</td>
                                                    <td>HoverIndent</td>
                                                </tr>
                                                <tr>
                                                    <td>行间距</td>
                                                    <td>LineSpacing</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="3">列表样式</td>
                                                    <td>数字项目样式</td>
                                                    <td>NumberedList</td>
                                                </tr>
                                                <tr>
                                                    <td>列表项目样式</td>
                                                    <td>BulletedList</td>
                                                </tr>
                                                <tr>
                                                    <td>扩展段落列表样式</td>
                                                    <td>ExtParagraphListStyle</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="5">导航/大纲</td>
                                                    <td>设置导航标示</td>
                                                    <td>SetNavigation</td>
                                                </tr>
                                                <tr>
                                                    <td>根据导航位置跳转</td>
                                                    <td>MoveCursorByNavigation</td>
                                                </tr>
                                                <tr>
                                                    <td>根据元素节点导航跳转</td>
                                                    <td>MoveCursorByElement</td>
                                                </tr>
                                                <tr>
                                                    <td>根据特殊标示跳转</td>
                                                    <td>MoveCursorByMark</td>
                                                </tr>
                                                <tr>
                                                    <td>设置大纲（大纲）</td>
                                                    <td>TitleLevel</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="3">文档节</td>
                                                    <td>插入文档节</td>
                                                    <td>InsertSection</td>
                                                </tr>
                                                <tr>
                                                    <td>文档节收缩展开</td>
                                                    <td>DelayLoadWhenExpand</td>
                                                </tr>
                                                <tr>
                                                    <td>设置边框和底纹</td>
                                                    <td>SectionBorderBackgroundFormat</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="27">表格</td>
                                                    <td rowspan="8">表格</td>
                                                    <td>插入表格</td>
                                                    <td>InsertTable</td>
                                                </tr>
                                                <tr>
                                                    <td>表格基本功能</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>合并/拆分单元格</td>
                                                    <td>MegerCell</td>
                                                </tr>
                                                <tr>
                                                    <td>删除表格列/行</td>
                                                    <td>DeleteRowOrColumn</td>
                                                </tr>
                                                <tr>
                                                    <td>插入表格列/行</td>
                                                    <td>AddRowOrColumn</td>
                                                </tr>
                                                <tr>
                                                    <td>固定表格的行高和列宽</td>
                                                    <td>AllowFixTableRowColumnSize</td>
                                                </tr>
                                                <tr>
                                                    <td>允许用户插入或删除表格行</td>
                                                    <td>AllowUserChangeRows</td>
                                                </tr>
                                                <tr>
                                                    <td>自动分栏</td>
                                                    <td>SubfieldMode</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="9">表格行</td>
                                                    <td>数据源绑定</td>
                                                    <td>TableRowDataSource</td>
                                                </tr>
                                                <tr>
                                                    <td>属性值表达式</td>
                                                    <td>TableRowPropertyExpressions</td>
                                                </tr>
                                                <tr>
                                                    <td>指定高度</td>
                                                    <td>SpecifyHeight</td>
                                                </tr>
                                                <tr>
                                                    <td>标题行模式</td>
                                                    <td>HeaderStyle</td>
                                                </tr>
                                                <tr>
                                                    <td>设置同行内容跨页</td>
                                                    <td>CanSplitByPageLine</td>
                                                </tr>
                                                <tr>
                                                    <td>强制分页</td>
                                                    <td>NewPageMode</td>
                                                </tr>
                                                <tr>
                                                    <td>表格行复制（清空内容复制）</td>
                                                    <td>DefaultClone</td>
                                                </tr>
                                                <tr>
                                                    <td>表格行复制（保留结构复制）</td>
                                                    <td>ClearFieldClone</td>
                                                </tr>
                                                <tr>
                                                    <td>表格行复制（完全复制）</td>
                                                    <td>CompleteClone</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="10">单元格</td>
                                                    <td>数据源绑定</td>
                                                    <td>TableCellDataSource</td>
                                                </tr>
                                                <tr>
                                                    <td>属性值表达式</td>
                                                    <td>TableCellPropertyExpressions</td>
                                                </tr>
                                                <tr>
                                                    <td>内容校验</td>
                                                    <td>TabelCellValueValidate</td>
                                                </tr>
                                                <tr>
                                                    <td>单行缩小字体自动填充</td>
                                                    <td>SingleLineAutoFixFontSize</td>
                                                </tr>
                                                <tr>
                                                    <td>多行缩小字体自动填充</td>
                                                    <td>MultiLineAutoFixFontSize</td>
                                                </tr>
                                                <tr>
                                                    <td>跨页内容镜像</td>
                                                    <td>MirrorViewForCrossPage</td>
                                                </tr>
                                                <tr>
                                                    <td>单元格网格线</td>
                                                    <td>TableCellGridLine</td>
                                                </tr>
                                                <tr>
                                                    <td>单元格垂直对齐方式</td>
                                                    <td>TableCellAlignMode</td>
                                                </tr>
                                                <tr>
                                                    <td>单元格斜线</td>
                                                    <td>SlantSplitLineStyle</td>
                                                </tr>
                                                <tr>
                                                    <td>单元格数值表达式</td>
                                                    <td>TabelCellValueExpression</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">条码</td>
                                                    <td>一维码</td>
                                                    <td>Barcode</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>二维码</td>
                                                    <td>QRCode</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="8">视图</td>
                                                    <td rowspan="8">浏览视图</td>
                                                    <td>自动换行视图模式</td>
                                                    <td>AutoLineViewMode</td>
                                                </tr>
                                                <tr>
                                                    <td>页面视图模式</td>
                                                    <td>PageViewMode</td>
                                                </tr>
                                                <tr>
                                                    <td>普通视图模式</td>
                                                    <td>NormalViewMode</td>
                                                </tr>
                                                <tr>
                                                    <td>整洁视图模式</td>
                                                    <td>CleanViewMode</td>
                                                </tr>
                                                <tr>
                                                    <td>留痕视图模式</td>
                                                    <td>ComplexViewMode</td>
                                                </tr>
                                                <tr>
                                                    <td>表单视图模式</td>
                                                    <td>FormViewMode</td>
                                                </tr>
                                                <tr>
                                                    <td>视图无极缩放</td>
                                                    <td>Zoom</td>
                                                </tr>
                                                <tr>
                                                    <td>视图自动缩放</td>
                                                    <td>AutoZoom</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">运行模式</td>
                                                    <td>管理员运行模式</td>
                                                    <td>AdministratorMode</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>后台运行模式</td>
                                                    <td>BackgroundMode</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="1">VBA脚本</td>
                                                    <td>VBA脚本</td>
                                                    <td>VB或JS脚本</td>
                                                    <td>VBScript</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="23">权限</td>
                                                    <td rowspan="8">痕迹保留</td>
                                                    <td>留痕书写</td>
                                                    <td>EditWithUserTrace</td>
                                                </tr>
                                                <tr>
                                                    <td>留痕逻辑删除</td>
                                                    <td>LogicalDeleteUserTrace</td>
                                                </tr>
                                                <tr>
                                                    <td>留痕列表</td>
                                                    <td>TraceList</td>
                                                </tr>
                                                <tr>
                                                    <td>批量删除留痕</td>
                                                    <td>BatchDeleteUserTrace</td>
                                                </tr>
                                                <tr>
                                                    <td>多级痕迹可视化设置</td>
                                                    <td>TraceByUserLevel</td>
                                                </tr>
                                                <tr>
                                                    <td>留痕样式设置</td>
                                                    <td>TraceSetting</td>
                                                </tr>
                                                <tr>
                                                    <td>留痕信息展示</td>
                                                    <td>TraceDisplay</td>
                                                </tr>
                                                <tr>
                                                    <td>整洁/留痕视图模式</td>
                                                    <td>ShowTraceMode</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="5">权限控制</td>
                                                    <td>多级权限控制</td>
                                                    <td>Multi-levelAccessControl</td>
                                                </tr>
                                                <tr>
                                                    <td>文档/元素内容保护</td>
                                                    <td>ContentProtection</td>
                                                </tr>
                                                <tr>
                                                    <td>基于用户角色的编辑权限</td>
                                                    <td>ContentProtectByUser</td>
                                                </tr>
                                                <tr>
                                                    <td>锁定标记元素</td>
                                                    <td>LockFlagElement</td>
                                                </tr>
                                                <tr>
                                                    <td>文档内容只读</td>
                                                    <td>FileReadonly</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="9">复制权限</td>
                                                    <td rowspan="4">跨病历复制内容时检查</td>
                                                    <td>CopyCheckIDNoLimit</td>
                                                </tr>
                                                <tr>
                                                    <td>CopyCheckIDWithWarning</td>
                                                </tr>
                                                <tr>
                                                    <td>CopyCheckIDWithPromptForbit</td>
                                                </tr>
                                                <tr>
                                                    <td>CopyCheckIDWithBackForbit</td>
                                                </tr>
                                                <tr>
                                                    <td>允许复制其他进程数据</td>
                                                    <td>AllowCopyAnotherProcessData</td>
                                                </tr>
                                                <tr>
                                                    <td>限制为只能复制本进程的数据</td>
                                                    <td>LimitCopyInProcess</td>
                                                </tr>
                                                <tr>
                                                    <td>限制为只能复制本控件的数据</td>
                                                    <td>LimitCopyInControl</td>
                                                </tr>
                                                <tr>
                                                    <td>粘贴文字字数限制</td>
                                                    <td>LimitPasteTextLength</td>
                                                </tr>
                                                <tr>
                                                    <td>可粘贴内容格式限制</td>
                                                    <td>LimimPasteType</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="1">文档批注</td>
                                                    <td>文档批注</td>
                                                    <td>FileComment</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="14">操作</td>
                                                    <td>OLE拖拽</td>
                                                    <td>OLEDrag</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="4">字符处理</td>
                                                    <td>字符自动转换</td>
                                                    <td>AutoTranslateForCharacter</td>
                                                </tr>
                                                <tr>
                                                    <td>自定义字符串资源</td>
                                                    <td>ResourceString</td>
                                                </tr>
                                                <tr>
                                                    <td>违禁关键字</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>快捷辅助录入</td>
                                                    <td>AssistInsert</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="6">程序处理</td>
                                                    <td>数据过滤器</td>
                                                    <td>ValueFilter</td>
                                                </tr>
                                                <tr>
                                                    <td>自定义报错处理</td>
                                                    <td>CustomHandleError</td>
                                                </tr>
                                                <tr>
                                                    <td>自定义消息框</td>
                                                    <td>CustomMessageBox</td>
                                                </tr>
                                                <tr>
                                                    <td>自定义快捷菜单</td>
                                                    <td>CustomContextMenu</td>
                                                </tr>
                                                <tr>
                                                    <td>自定义内部图标</td>
                                                </tr>
                                                <tr>
                                                    <td>启用事件消息</td>
                                                    <td>ControlEventMessage</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="1">服务器端时间同步</td>
                                                    <td>DateTimeService</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="1">全局事件模板</td>
                                                    <td>GlobalEventTemplate</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="1">元素事件</td>
                                                    <td>ElementEvent</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="70">元素</td>
                                                    <td rowspan="27">输入域(InputField)</td>
                                                    <td>标签文本</td>
                                                    <td>LabelText</td>
                                                </tr>
                                                <tr>
                                                    <td>单位文本</td>
                                                    <td>UnitText</td>
                                                </tr>
                                                <tr>
                                                    <td>边框文本</td>
                                                    <td>FieldBorderText</td>
                                                </tr>
                                                <tr>
                                                    <td>背景文本</td>
                                                    <td>BackgroundText</td>
                                                </tr>
                                                <tr>
                                                    <td>提示文本</td>
                                                    <td>TooltipText</td>
                                                </tr>
                                                <tr>
                                                    <td>数值表达式</td>
                                                    <td>ValueExpression</td>
                                                </tr>
                                                <tr>
                                                    <td>最大输入字符数(MaxInputLength)</td>
                                                    <td>MaxInputLength</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="3">内容加密显示</td>
                                                    <td>NoneEncryptView</td>
                                                </tr>
                                                <tr>
                                                    <td>PartialEncryptView</td>
                                                </tr>
                                                <tr>
                                                    <td>BothEncryptView</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="4">输入模式(EditMode)</td>
                                                    <td>TextEditMode</td>
                                                </tr>
                                                <tr>
                                                    <td>ListEditMode</td>
                                                </tr>
                                                <tr>
                                                    <td>TimeEditMode</td>
                                                </tr>
                                                <tr>
                                                    <td>NumicalEditMode</td>
                                                </tr>
                                                <tr>
                                                    <td>联动下拉列表</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>固定宽度</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>用户不能直接编辑内容(Editable)</td>
                                                    <td>UserEditable</td>
                                                </tr>
                                                <tr>
                                                    <td>用户不能直接删除(Deleteable)</td>
                                                    <td>UserDeleteable</td>
                                                </tr>
                                                <tr>
                                                    <td>数据校验(ValueValidate)</td>
                                                    <td>ValueValidate</td>
                                                </tr>
                                                <tr>
                                                    <td>数据源绑定(ValueBinding)</td>
                                                    <td>ValueBinding</td>
                                                </tr>
                                                <tr>
                                                    <td>自定义属性(Attributes)</td>
                                                    <td>Attributes</td>
                                                </tr>
                                                <tr>
                                                    <td>输出文本格式控制(DisplayFormat)</td>
                                                    <td>DisplayFormat</td>
                                                </tr>
                                                <tr>
                                                    <td>内容自动复制(CopySource)</td>
                                                    <td>CopySource</td>
                                                </tr>
                                                <tr>
                                                    <td>显示表单小按钮(ShowFormButton)</td>
                                                    <td>ShowFormButton</td>
                                                </tr>
                                                <tr>
                                                    <td>输入域内容状态标记</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>锁定标记元素</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>元素属性值表达式</td>
                                                    <td>PropertyExpressions</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="8">单选/复选框</td>
                                                    <td>基本功能</td>
                                                    <td>BasicFuntionForSelectedBox</td>
                                                </tr>
                                                <tr>
                                                    <td>数据源绑定(ValueBinding)</td>
                                                    <td>SelectedBoxValueBinding</td>
                                                </tr>
                                                <tr>
                                                    <td>事件表达式</td>
                                                    <td>SelectedBoxEventExpression</td>
                                                </tr>
                                                <tr>
                                                    <td>勾选框文本多行模式</td>
                                                    <td>MultilineMode</td>
                                                </tr>
                                                <tr>
                                                    <td>必勾项设置(Required)</td>
                                                    <td>RequiredMode</td>
                                                </tr>
                                                <tr>
                                                    <td>勾选框打印状态设置</td>
                                                    <td>PrintSettingForNotChecked</td>
                                                </tr>
                                                <tr>
                                                    <td>显示样式设置(ControlStyle)</td>
                                                    <td>SelectedBoxControlStyle</td>
                                                </tr>
                                                <tr>
                                                    <td>自定义勾选样式图标</td>
                                                    <td>CustomImageForChecked</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="4">文本标签(Label)</td>
                                                    <td>自动大小(AutoSize)</td>
                                                    <td>AutoSize</td>
                                                </tr>
                                                <tr>
                                                    <td>多行显示(MultiLine)</td>
                                                    <td>MultiLine</td>
                                                </tr>
                                                <tr>
                                                    <td>事件模板</td>
                                                    <td>LabelEventExpression</td>
                                                </tr>
                                                <tr>
                                                    <td>病程记录连接模式</td>
                                                    <td>ContactActionMode</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="4">页码元素(PageInfo)</td>
                                                    <td>基础功能</td>
                                                    <td>BasicFuntionForPage</td>
                                                </tr>
                                                <tr>
                                                    <td>自动高度</td>
                                                    <td>AutoHeight</td>
                                                </tr>
                                                <tr>
                                                    <td>允许中途修改页码</td>
                                                    <td>AllowEditPageInfo</td>
                                                </tr>
                                                <tr>
                                                    <td>页码高级显示样式 （第几页共几页）</td>
                                                    <td>AdvancedStylePageInfo</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="1">按钮(Button)</td>
                                                    <td>按钮元素</td>
                                                    <td>Button</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="1">文档块(FileBlock)</td>
                                                    <td>FileBlock</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="1">横线元素(HorizontalLine)</td>
                                                    <td>HorizontalLine</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="10">医学表达式</td>
                                                    <td>月经史</td>
                                                    <td>MenstrualHistory</td>
                                                </tr>
                                                <tr>
                                                    <td>瞳位图</td>
                                                    <td>Pupil</td>
                                                </tr>
                                                <tr>
                                                    <td>光定位图</td>
                                                    <td>LightPosition</td>
                                                </tr>
                                                <tr>
                                                    <td>胎心图</td>
                                                    <td>FetalHeart</td>
                                                </tr>
                                                <tr>
                                                    <td>恒牙牙位图</td>
                                                    <td>PermanentTeethBitmap</td>
                                                </tr>
                                                <tr>
                                                    <td>乳牙牙位图</td>
                                                    <td>DeciduousTeech</td>
                                                </tr>
                                                <tr>
                                                    <td>疼痛指数图</td>
                                                    <td>PainIndex</td>
                                                </tr>
                                                <tr>
                                                    <td>PD牙位图</td>
                                                    <td>PDTeech</td>
                                                </tr>
                                                <tr>
                                                    <td>病变下牙牙位图</td>
                                                    <td>DiseasedTeethBottom</td>
                                                </tr>
                                                <tr>
                                                    <td>病变上牙牙位图</td>
                                                    <td>DiseasedTeethTop</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="4">插入第三方控件</td>
                                                    <td>插入WinForm.NET控件</td>
                                                    <td>InsertWinFormControl</td>
                                                </tr>
                                                <tr>
                                                    <td>插入WPF控件</td>
                                                    <td>InsertWPFControl</td>
                                                </tr>
                                                <tr>
                                                    <td>插入OCX控件</td>
                                                    <td>InsertOCXControl</td>
                                                </tr>
                                                <tr>
                                                    <td>根据Win32句柄插入控件</td>
                                                    <td>InsertWin32Control</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">知识库</td>
                                                    <td>插入知识库</td>
                                                    <td>InsertKBLibrary</td>
                                                </tr>
                                                <tr>
                                                    <td>知识库内容动态查询</td>
                                                    <td>DymaticKBLibrary</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2">视频/音频</td>
                                                    <td>视频</td>
                                                    <td>Video</td>
                                                </tr>
                                                <tr>
                                                    <td>音频</td>
                                                    <td>Audio</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="1">电子签名</td>
                                                    <td>电子签名功能</td>
                                                    <td>DCSignInputInfo</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="5">图表功能</td>
                                                    <td>柱状图</td>
                                                    <td>XTextChartElement</td>
                                                </tr>
                                                <tr>
                                                    <td>饼状图</td>
                                                    <td>XTextChartElement</td>
                                                </tr>
                                                <tr>
                                                    <td>折线图</td>
                                                    <td>XTextChartElement</td>
                                                </tr>
                                                <tr>
                                                    <td>点状图</td>
                                                    <td>XTextChartElement</td>
                                                </tr>
                                                <tr>
                                                    <td>质控图（血透）</td>
                                                    <td>XTextChartElement</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="5">语言</td>
                                                    <td>简体中文版</td>
                                                    <td>SimplifiedChinese</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>繁体中文版(需定制)</td>
                                                    <td>TraditionalChinese</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>维文版(需定制)</td>
                                                    <td>Uighur</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>藏文版(需定制)</td>
                                                    <td>Tibetan</td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td>英文版(需定制)</td>
                                                    <td>English</td>
                                                    <td> </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!-- <div class="mainApp" style="display: none;">
                <table class="TimeLine">
                    
                </table>
            </div> -->
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('DcSubPage.IntroductiontotheHistoricalVersionsofDuchangEditor')"
                        name="ninth">
                        <div class="contentContainer">
                            <p>
                            <h3>winfrom{{ $t('DcSubPage.edition') }} 2012-{{ $t('DcSubPage.now') }}</h3>
                            {{ $t("DcSubPage.historyOne") }}
                            </p>
                            <p>
                            <h3>2.0 ie{{ $t('DcSubPage.edition') }} 2015-2017 </h3>
                            {{ $t("DcSubPage.historyTwo") }}
                            </p>
                            <p>
                            <h3>3.0 asp.net{{ $t('DcSubPage.edition') }} 2017-2019 </h3>
                            {{ $t("DcSubPage.historyThree") }}
                            </p>
                            <p>
                            <h3>4.0 html5{{ $t('DcSubPage.edition') }} 2019-2025（2025{{
                                $t('DcSubPage.Stopmaintenanceattheendoftheyear') }}）</h3>
                            {{ $t("DcSubPage.historyFour") }}
                            </p>
                            <p>
                            <h3>5.0 canvas{{ $t('DcSubPage.edition') }}（2022-{{ $t('DcSubPage.now') }}）</h3>
                            {{ $t("DcSubPage.historyfive") }}
                            </p>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('DcSubPage.DuchangCertificate')" name="tenth">
                        <div class="contentContainer">
                            <p>{{ $t('DcSubPage.Patentcertificate') }}：</p>
                            <p>{{ $t('DcSubPage.Softworks') }}：</p>
                            <p>{{ $t('DcSubPage.truestart') }}：</p>
                            <p>{{ $t('DcSubPage.Othercompatible') }}：</p>
                            <p>{{ $t('DcSubPage.Customerthankyouletter') }}：</p>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('DcSubPage.CustomerCase')" name="eleventh">
                        <div class="contentContainer CustomerCase" style="overflow-y: auto;">
                            <h2 id="section-0">战略合作伙伴</h2>
                            <table class="table table-hover">
                                <tbody>

                                    <tr>
                                        <td>北大医疗信息技术有限公司</td>

                                        <td>卫宁健康科技集团股份有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>上海万达信息股份有限公司</td>

                                        <td>上海米健信息技术有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>医惠健康科技有限公司</td>

                                        <td>通策医疗投资股份有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>延华智能科技股份有限公司</td>

                                        <td>沈阳东软软件股份有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>成都华唯科技股份有限公司</td>

                                        <td>北京平安联想智慧医疗信息技术有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>冠新软件股份有限公司</td>

                                        <td>宁波明天医网科技有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>广州卫软信息科技有限公司(珠海和佳)</td>

                                        <td>北京高视医疗信息技术有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>苏州华墨信息科技有限公司</td>

                                        <td>杭州银江医联网技术股份有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>武汉翰和企业管理咨询有限公司</td>

                                        <td>浙江美康网新云健康科技股份有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>上海新致软件股份有限公司</td>

                                        <td>深圳九明珠信息科技有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>联通(广东)产业互联网有限公司</td>

                                        <td>亚实科技股份有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>四川久远银海软件股份有限公司</td>

                                        <td>医利捷(上海)信息科技有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>山大地纬软件股份有限公司</td>

                                        <td>太极集团股份有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>中电万维信息技术有限责任公司</td>

                                        <td>郑州新益华医学科技有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>河南宏力集团有限公司</td>

                                        <td>南京普医信信息科技有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>西搬科玛奇信息科技股份有限公司</td>

                                        <td>江苏正融科技有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>湖南创星科技股份有限公司</td>

                                        <td>云南达远软件有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>海南鹰海医疗信息技术有限公司</td>

                                        <td>京柏医疗有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>武汉互创科技有限公司</td>

                                        <td>湖南长信畅中科技股份有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>山东众阳软件有限公司</td>

                                        <td>银川方达电子系统工程有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>安徽科大讯飞医疗信息技术有限公司</td>

                                        <td>杭州求是云医科技有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>中电万维信息技术有限责任公司</td>

                                        <td>郑州新益华医学科技有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>江苏鑫亿软件股份有限公司</td>

                                        <td>江苏浪潮信息咨询有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>深圳华声医疗技术股份有限公司</td>

                                        <td>广东百慧科技有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>陕西亚创科技有限公司</td>

                                        <td>四川互慧软件有限公司</td>
                                    </tr>
                                    <tr>
                                        <td>北京大恒普信医疗技术有限公司</td>

                                        <td>复旦大学附属上海市第五人民医院</td>
                                    </tr>
                                    <tr>
                                        <td>福建中医药大学附属泉州市正骨医院</td>

                                        <td>上海市普陀区中心医院</td>
                                    </tr>
                                    <tr>
                                        <td>西安大兴医院</td>

                                        <td>上海交通大学医学院附属瑞金医院</td>
                                    </tr>
                                    <tr>
                                        <td>温州医科大学附属第二医院</td>

                                        <td>湖南旺旺医院</td>
                                    </tr>
                                    <tr>
                                        <td>中国医学科学院阜外医院</td>

                                        <td>浙江大学附属第一医院</td>
                                    </tr>
                                    <tr>
                                        <td>张家港市第一人民医院</td>

                                        <td>北京清华长庚医院</td>
                                    </tr>
                                    <tr>
                                        <td>浙大一院三门湾分院</td>

                                        <td>东阳市人民医院</td>
                                    </tr>
                                    <tr>
                                        <td>金华市中心医院</td>

                                        <td>南京明基医院</td>
                                    </tr>
                                    <tr>
                                        <td>山西儿童医院</td>

                                        <td>上海市第一人民医院</td>
                                    </tr>
                                    <tr>
                                        <td>苏州明基医院</td>

                                        <td>西安市长安医院</td>
                                    </tr>
                                    <tr>
                                        <td>福建医科大学孟超肝胆医院</td>

                                        <td>苏哈国际医疗医院</td>
                                    </tr>
                                    <tr>
                                        <td>江阴复大耳鼻喉医院 </td>

                                        <td>温州康宁医院</td>
                                    </tr>
                                    <tr>
                                        <td>无锡市同仁(国际)康复医院 </td>

                                        <td>江阴九龙医院</td>
                                    </tr>
                                    <tr>
                                        <td>四川卫生信息中心(区卫) </td>

                                        <td>武汉亚心总医院</td>
                                    </tr>
                                    <tr>
                                        <td>深圳中山泌尿外科医院 </td>

                                        <td>常州市第二人民医院</td>
                                    </tr>
                                    <tr>
                                        <td>爱尔眼科医院集团股份有限公司</td>

                                        <td>山东省沾化区人民医院</td>
                                    </tr>
                                    <tr>
                                        <td>南京医科大学附属眼科医院</td>

                                        <td>上海市普陀区中心医院</td>
                                    </tr>
                                    <tr>
                                        <td>台湾中山医学大学附设医院</td>

                                        <td>上海市第六人民医院</td>
                                    </tr>
                                    <tr>
                                        <td>河南宏力医院</td>

                                        <td>瑞安市人民医院</td>
                                    </tr>
                                    <tr>
                                        <td>温州医科大学附属眼视光医院</td>

                                        <td>张店区人民医院</td>
                                    </tr>
                                    <tr>
                                        <td>海口市第三人民医院</td>

                                        <td>温州医科大学附属眼视光医院杭州院区</td>
                                    </tr>
                                    <tr>
                                        <td>镇江市第一人民医院 </td>

                                        <td>美莱医学美容医院有限公司</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2 id="section-1">标杆医院</h2>
                            <table class="table table-hover">
                                <tbody>

                                    <tr>
                                        <td>中国医科大学附属盛京医院</td>

                                        <td>首都医科大学宣武医院</td>
                                    </tr>
                                    <tr>
                                        <td>南京脑科医院</td>

                                        <td>哈尔滨二四二医院</td>
                                    </tr>
                                    <tr>
                                        <td>中国医学科学院阜外医院</td>

                                        <td>中国医科大学附属盛京医院</td>
                                    </tr>
                                    <tr>
                                        <td>本溪市第九人民医院</td>

                                        <td>华中科技大学同济医学院附属同济医院</td>
                                    </tr>
                                    <tr>
                                        <td>浙江大学医学院附属邵逸夫医院</td>

                                        <td>中国医学科学院肿瘤医院</td>
                                    </tr>
                                    <tr>
                                        <td>湖南省益阳市第四人民医院</td>

                                        <td>上海市交通大学医学院咐属瑞金医院</td>
                                    </tr>
                                    <tr>
                                        <td>广州市妇女儿童医疗中心</td>

                                        <td>陕西省肿瘤医院</td>
                                    </tr>
                                    <tr>
                                        <td>吉林大学第二医院</td>

                                        <td>广州市妇女儿童医疗中心</td>
                                    </tr>
                                    <tr>
                                        <td>中国医学科学院北京协和医学院</td>

                                        <td>浙江省肿瘤医院</td>
                                    </tr>
                                    <tr>
                                        <td>吉林大学第一附属医院</td>

                                        <td>黄石妇幼保健院</td>
                                    </tr>
                                    <tr>
                                        <td>泰达国际心血管病医院</td>

                                        <td>河南省南阳市肿瘤医院</td>
                                    </tr>
                                    <tr>
                                        <td>东南大学附属中大医院</td>

                                        <td>天津市宁河县医院</td>
                                    </tr>
                                    <tr>
                                        <td>广东佛山键翔医院</td>

                                        <td>福建医科大学孟超肝胆医院</td>
                                    </tr>
                                    <tr>
                                        <td>江苏连云港市第一人民医院</td>

                                        <td>北京大学第三医院</td>
                                    </tr>
                                    <tr>
                                        <td>四川省八一康复</td>

                                        <td>南京市第二医院</td>
                                    </tr>
                                    <tr>
                                        <td>江苏省常州市第二人民医院</td>

                                        <td>江苏省无锡市同仁(国际)康复医院</td>
                                    </tr>
                                    <tr>
                                        <td>香港大学深圳医院</td>

                                        <td>苏州大学附属第一医院</td>
                                    </tr>
                                    <tr>
                                        <td>西安工会医院</td>

                                        <td>张家港市卫牛和计划生育委员会(互联互通五乙)</td>
                                    </tr>
                                    <tr>
                                        <td>江苏省中医院</td>

                                        <td>北京大学第三医院</td>
                                    </tr>
                                    <tr>
                                        <td>赤峰市安定医院</td>

                                        <td>义乌市基层卫生医疗(HTML5编辑器)</td>
                                    </tr>
                                    <tr>
                                        <td>南京鼓楼医院</td>

                                        <td>上海交通大学医学院附属瑞金医院</td>
                                    </tr>
                                    <tr>
                                        <td>杭州市第七人民医院</td>

                                        <td>宁波市基层卫生医疗(HTML5编辑器)</td>
                                    </tr>
                                    <tr>
                                        <td>辽宁省中国医科大学第一医院</td>

                                        <td>广州市妇女儿童医疗中心</td>
                                    </tr>
                                    <tr>
                                        <td>温州医科大学附属康宁医院</td>

                                        <td>绍兴市基层卫生医疗(HTML5编辑器)</td>
                                    </tr>
                                    <tr>
                                        <td>山西医科大学附属太钢总医院</td>

                                        <td>张家港市卫生和计划生育委员会(区卫)</td>
                                    </tr>
                                    <tr>
                                        <td>江苏澳洋养老产业投资发展有限公司</td>

                                        <td>东阳市基层卫生医疗(HTML5编辑器)</td>
                                    </tr>
                                    <tr>
                                        <td>陕西省第四军医大学唐都医院</td>

                                        <td>南昌大学第一附属医院</td>
                                    </tr>
                                    <tr>
                                        <td>三星医疗</td>

                                        <td>四川省信息卫生中心</td>
                                    </tr>
                                    <tr>
                                        <td>陕西省第四军医大学西京医院</td>

                                        <td>通策医疗</td>
                                    </tr>
                                    <tr>
                                        <td>山东全省区域血透系统</td>

                                        <td>复旦大学附属华山医院北院</td>
                                    </tr>
                                    <tr>
                                        <td>北京协和医院</td>

                                        <td>可恩口腔</td>
                                    </tr>
                                    <tr>
                                        <td>安徽省区域影像系统(部分)</td>

                                        <td>上海交通大学医学院附属仁济医院</td>
                                    </tr>
                                    <tr>
                                        <td>上海市儿童医院</td>

                                        <td>南通市口腔医院</td>
                                    </tr>
                                    <tr>
                                        <td>青海全省藏医院(30多家)</td>

                                        <td>沈阳军区总医院</td>
                                    </tr>
                                    <tr>
                                        <td>中日友好医院</td>

                                        <td>吉林大学口腔医院</td>
                                    </tr>
                                    <tr>
                                        <td>海南全省基层医疗</td>

                                        <td>成都大学附属医院</td>
                                    </tr>
                                    <tr>
                                        <td>广东省人民医院</td>

                                        <td>广西医科大学附属口腔医院</td>
                                    </tr>
                                    <tr>
                                        <td>广西全省基层医疗</td>

                                        <td>成都第三人民医院</td>
                                    </tr>
                                    <tr>
                                        <td>上海市中医药大学附属龙华医院</td>

                                        <td>美莱整形医院</td>
                                    </tr>
                                    <tr>
                                        <td>陕西全省基层医疗</td>

                                        <td>四川大学华西医院</td>
                                    </tr>
                                    <tr>
                                        <td>江苏省人民医院</td>

                                        <td>南京市第二医院</td>
                                    </tr>
                                    <tr>
                                        <td>中国科学技术大学附属第一医院</td>

                                        <td>天津市人民医院</td>
                                    </tr>
                                    <tr>
                                        <td>青岛大学附属医院</td>

                                        <td>杭州市第六人民医院</td>
                                    </tr>
                                    <tr>
                                        <td>安徽全省县级医院</td>

                                        <td>天津医科大学空港国际医院</td>
                                    </tr>
                                    <tr>
                                        <td>上海市第一人民医院</td>

                                        <td>朝阳市第四人民医院</td>
                                    </tr>
                                    <tr>
                                        <td>中国人民解放军三零三医院</td>

                                        <td>天津医科大学总医院</td>
                                    </tr>
                                    <tr>
                                        <td>南昌大学第一附属医院</td>

                                        <td>烟台市传染病医院</td>
                                    </tr>
                                    <tr>
                                        <td>中国人民解放军一八一医院</td>

                                        <td>西安交通大学第一附属医院</td>
                                    </tr>
                                    <tr>
                                        <td>中国医科大学附属第一医院 </td>

                                        <td>天津泰达心血管病医院</td>
                                    </tr>
                                    <tr>
                                        <td>中国人民解放军总医院(301医院)</td>

                                        <td>重庆西南医院(陆军军医大学第一附属医院)</td>
                                    </tr>
                                    <tr>
                                        <td>上海交通大学医学附附属瑞金医院北院</td>

                                        <td>浙江绿城医院</td>
                                    </tr>
                                    <tr>
                                        <td>北京大学医院</td>

                                        <td>重庆新桥医院陆军军医大学第二附属医院)</td>
                                    </tr>
                                    <tr>
                                        <td>复旦大学附属华山医院</td>

                                        <td>中国医学科学院阜外医院</td>
                                    </tr>
                                    <tr>
                                        <td>北京中日友好医院</td>

                                        <td>大理学院附属医院</td>
                                    </tr>
                                    <tr>
                                        <td>宁波市第二医院</td>

                                        <td>南京同仁医院</td>
                                    </tr>
                                    <tr>
                                        <td>首都医科大学附属北京朝阳医院</td>

                                        <td>云南西双版纳州景洪市人民医院</td>
                                    </tr>
                                    <tr>
                                        <td>安徽医科大学第一附属医院</td>

                                        <td>南京医科大学附属眼科医院</td>
                                    </tr>
                                    <tr>
                                        <td>甘肃省平凉市妇幼保健院</td>

                                        <td>内蒙古阿拉善盟人民医院</td>
                                    </tr>
                                    <tr>
                                        <td>滨州医学院附属医院</td>

                                        <td>温州医科大学附属眼视光医院</td>
                                    </tr>
                                    <tr>
                                        <td>中山大学附属第三医院</td>

                                        <td>内蒙古医科大学赤峰临床医学院</td>
                                    </tr>
                                    <tr>
                                        <td>广州医科大学附属第二医院</td>

                                        <td>温州眼视光医院杭州院区</td>
                                    </tr>
                                    <tr>
                                        <td>中山大学附属第一医院惠亚医院</td>

                                        <td>宁夏医科大学附属医院</td>
                                    </tr>
                                    <tr>
                                        <td>广州医科大学附属第三医院</td>

                                        <td>威海市骨科医院</td>
                                    </tr>
                                    <tr>
                                        <td>中山大学孙逸仙纪念医院</td>

                                        <td>新疆维吾尔医院</td>
                                    </tr>
                                    <tr>
                                        <td>宁夏医科大学总医院</td>

                                        <td>洛阳市正骨医院</td>
                                    </tr>
                                    <tr>
                                        <td>广州医科大学附属第一医院</td>

                                        <td>西藏自治区冈仁波齐医院（神山医院)</td>
                                    </tr>
                                    <tr>
                                        <td>芜湖市卫生和计划生育委员会(区卫)</td>

                                        <td>青岛市妇幼保健院</td>
                                    </tr>
                                    <tr>
                                        <td>南方医科大学珠江医院</td>

                                        <td>為恭醫院</td>
                                    </tr>
                                    <tr>
                                        <td>中国医学科学院阜外医院</td>

                                        <td>南京市妇幼保健院</td>
                                    </tr>
                                    <tr>
                                        <td>广西医科大学第一附属医院</td>

                                        <td>台湾大千醫院</td>
                                    </tr>
                                    <tr>
                                        <td>中山大学中山眼科中心</td>

                                        <td>广东省妇幼保健医院</td>
                                    </tr>
                                    <tr>
                                        <td>贵州安顺市妇幼保健院</td>

                                        <td>台湾堰新醫院</td>
                                    </tr>
                                    <tr>
                                        <td>山西医科大学第一医院</td>

                                        <td>云南省妇幼保健院</td>
                                    </tr>
                                    <tr>
                                        <td>海南省人民医院</td>

                                        <td>台湾中山大学附属醫院</td>
                                    </tr>
                                    <tr>
                                        <td>天津市第三中心医院</td>

                                        <td>广州市妇女儿童医疗中心</td>
                                    </tr>
                                    <tr>
                                        <td>海南现代妇女儿童医院</td>

                                        <td>香港玛丽医院</td>
                                    </tr>
                                    <tr>
                                        <td>山东省昌乐县人民医院</td>

                                        <td>山西省儿童医院</td>
                                    </tr>
                                    <tr>
                                        <td>河北医科大学附属医院</td>

                                        <td>大马士革穆瓦萨特医院(海外)</td>
                                    </tr>
                                    <tr>
                                        <td>北京大学人民医院</td>

                                        <td>广东省儿童医院</td>
                                    </tr>
                                    <tr>
                                        <td>黑龙江大庆龙南医院</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('UpdateLog')" name="twelfth">
                        <updateLog />
                    </el-tab-pane>

                </el-tabs>
            </el-main>
        </el-container>
    </div>
</template>
<script setup>
import {
    ElContainer,
    ElMain,
    ElTabs,
    ElTabPane,
} from "element-plus";
import { watch, onMounted, ref } from "vue";
import updateLog from "./components/updateLog.vue";
import quickIntegrationGuide from "./components/quickIntegrationGuide.vue";
const props = defineProps(['subPageIndex']);
const activeName = ref('first');

onMounted(() => {
    console.log(props.subPageIndex);
    if (props.subPageIndex == 2) {
        activeName.value = "third";
    }
    if (props.subPageIndex == 6) {
        activeName.value = "seventh";
    }
    if (props.subPageIndex == 12) {
        activeName.value = "twelfth";
    }
});

watch(()=>props.subPageIndex, (newV, oldV) => {
    if (newV == 2) {
        activeName.value = "third";
    }
    if (newV == 6) {
        activeName.value = "seventh";
    }
    if (newV == 12) {
        activeName.value = "twelfth";
    }
})


</script>

<style scoped>
.contentContainer {
    height: 100%;
    padding: 16px 60px;
    box-sizing: border-box;

    h1 {
        margin: .6em 0 1em;
        font-size: 30px;
        font-weight: 400;
        color: #495057;
    }

    p {
        margin: 14px 0;
        color: #495057;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Fira Sans, Droid Sans, Helvetica Neue, sans-serif, Apple Color Emoji, Segoe UI Emoji;
        font-size: 14px;
        line-height: 1.5;
    }
}

.CustomerCase {

    /* Custom Styles */
    ul.nav-tabs {
        width: 150px;
        margin-top: 20px;
        border-bottom: 0;
    }

    ul.nav-tabs li {
        margin: 0;
        text-align: left;
    }

    ul.nav-tabs li:first-child {
        border-top: none;
    }

    ul.nav-tabs li a {
        margin: 0;
        color: #b4b8bf;
        padding: 8px 16px;
        border-radius: 0;
        border: none;
    }

    ul.nav-tabs li a:hover {
        background-color: #fff;
        border-right: 1px solid #1d8b98;
        color: #191e28;
    }

    ul.nav-tabs li:first-child a {
        border-radius: 4px 4px 0 0;
    }

    ul.nav-tabs li:last-child a {
        border-radius: 0 0 4px 4px;
    }

    ul.nav-tabs li ul {
        padding-left: 0;
    }

    ul.nav-tabs li ul li {
        list-style-type: none;
        text-align: right;
    }

    ul.childnav li a {
        font-size: 12px;
        padding: 0 16px;
    }

    ul.nav-tabs.affix {
        top: 30px;
        /* Set the top position of pinned element */
    }

    ul.nav-tabs>li.active>a,
    ul.nav-tabs>li.active>a:hover {
        background: #fff;
        font-size: 16px;
        color: #191e28;
        border: none;
        border-right: 2px solid #1d8b98;
        font-weight: 600;
    }

    ul.childnav>li.active>a {
        background: #fff;
        font-size: 12px;
        color: #333;
        border: none;
        border-right: 1px solid #1d8b98;
        font-weight: 600;
    }

    ul.childnav {
        display: none;
    }

    ul.nav-tabs>li.active .childnav {
        display: block;
    }

    /* 表格样式调整 */
    .table {
        color: #7d8189;
    }

    tr:hover {
        color: #1d8b98;
    }

    td {
        padding: 8px;
        line-height: 1.42857143;
        vertical-align: top;
        border-top: 1px solid #ddd;
    }
}

.FunctionList {
    .container {
        width: 1240px;
        margin: 0 auto;
    }

    .title {
        width: 100%;
        height: 150px;
        line-height: 200px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        background-color: #fff;
        position: fixed;
    }

    .title div {
        flex: 1;
        text-align: center;
    }

    a {
        text-decoration: none;
        font-size: 25px;
        color: #000;
    }

    .active {
        padding-bottom: 5px;
        border-bottom: 3px solid #0067ed;
        color: #0067ed;
    }

    table,
    tbody {
        width: 100%;
        border-collapse: collapse;
        font-family: "PingFang SC", "Microsoft Yahei", Arial, sans-serif;
    }

    th {
        background-color: #F2F2F2;
        height: 80px;
        /* line-height: 80px; */
        text-align: center;
        font-size: 24px;
        border: 1px solid #ccc;
    }

    tr td:nth-child(3) {
        width: 15%;
    }

    td {
        height: 50px;
        /* line-height: 50px; */
        text-align: center;
        font-size: 16px;
        border: 1px solid #ccc;
    }

    .true {
        color: #0067ed;
        font-weight: bold;
    }

    @media (max-width: 900px) {
        html {
            font-size: 100px;
        }

        .container {
            width: 100%;
            margin: 0 auto;
        }

        .title {
            width: 100%;
            height: 1rem;
            line-height: 1;
            display: flex;
        }

        .title div {
            flex: 1;
            text-align: center;
            padding-top: 0.5rem;
        }

        a {
            text-decoration: none;
            font-size: 0.15rem;
            color: #000;
            display: block;
        }

        .active {
            padding-bottom: 5px;
            border-bottom: none;
            color: #0067ed;
        }

        table,
        tbody {
            width: 100%;
            border-collapse: collapse;
            font-family: "PingFang SC", "Microsoft Yahei", Arial, sans-serif;
        }

        th {
            background-color: #F2F2F2;
            height: 0.8rem;
            /* line-height: 80px; */
            text-align: center;
            font-size: 0.1rem;
            border: 1px solid #ccc;
        }

        td {
            height: 0.5rem;
            /* line-height: 50px; */
            text-align: center;
            font-size: 0.1rem;
            border: 1px solid #ccc;
            word-break: break-all;
        }
    }
}
</style>
