<template>
    <header>
        <div id="header">
            <div class="headerTop">
                <div class="bodyWidth">
                    <div id="logo" class="left">
                        <a href="//www.toy-people.com/" onclick="ga('send', 'event', 'PC_Menu_Top_Logo', 'click');"><img
                                src="//www.toy-people.com/img/logo.svg" alt="玩具人Toy People News" title="玩具人Toy People News"
                                width="157" height="49"></a>
                    </div>
                    <div class="left Nav">
                        <ul>
                            <li><a href="//www.toy-people.com/?cat=4" id="_report" title="玩具人專欄"
                                    onclick="ga('send', 'event', 'PC_Menu_Top_專欄', 'click');">專欄</a></li>
                            <li><a href="//www.toy-people.com/submission" id="_publication" title="投稿"
                                    onclick="ga('send', 'event', 'PC_Menu_Top_投稿', 'click');">投稿</a></li>
                            <li><a href="//www.toy-people.com/release-date" id="releasedate"
                                    onclick="ga('send', 'event', 'PC_Menu_Top_發售表', 'click');">發售表</a></li>
                            <li><a href="//www.toy-people.com/newsrank" id="hotrank" title="排行榜"
                                    onclick="ga('send', 'event', 'PC_Menu_Top_排行榜', 'click');">今日發燒</a></li>
                            <li><a href="//www.toy-people.com/denden" id="denden" title
                                    onclick="ga('send', 'event', 'PC_Menu_Top_denden', 'click');">日刊電電</a></li>
                            <li><a href="//www.toy-people.com/screen-fandom" id="screen-fandom" title="SCREEN FANDOM"
                                    onclick="ga('send', 'event', 'PC_Menu_Top_SCREEN-FANDOM', 'click');">SCREEN FANDOM</a>
                            </li>
                        </ul>
                    </div>
                    <div class="right">
                        <div id="search" class="left searchBox">
                            <form role="search" method="get" id="searchform" action="/">
                                <input type="text" name="s" id="search" placeholder="搜尋" autocomplete="off" />
                                <button class="search-button" aria-label="搜尋" name id="search-button" type="submit"
                                    onclick="ga('send', 'event', 'PC_top_search_button', 'click');"><i
                                        class="fa fa-search"></i></button>
                            </form>
                        </div>
                        <div class="left login">
                            <a href="https://member.toy-people.com/login.php">登入</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="headerBottom">
                <div class="sideNav bodyWidth">
                    <div class="left cat-menu">
                        <nav class="header-category">
                            <ul>

                                <li><a href="/?cat=898"
                                        onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List','event_label': 'PC_Menu_List_開箱報告'});">開箱報告</a>
                                </li>
                                <li><a href="/?cat=10"
                                        onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List','event_label': 'PC_Menu_List_活動&展覽'});">活動展覽</a>
                                </li>
                                <li><a href="/?cat=634"
                                        onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List','event_label': 'PC_Menu_List_人物專訪'});">人物專訪</a>
                                </li>
                                <li><a href="/?tag=遊戲試玩"
                                        onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List','event_label': 'PC_Menu_List_遊戲試玩'});">遊戲試玩</a>
                                </li>
                                <li style="color: #bbb;font-weight: 100;">｜</li>
                                <li class="nav2"><a href="javascript:void(0);">主題</a>
                                    <div class="b_cat">
                                        <ul>
                                            <h3>日系主題</h3>
                                            <li><a href="https://www.toy-people.com/?tag=鋼彈系列"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_鋼彈系列'});"
                                                    class="hot">鋼彈系列</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=水星的魔女"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_水星的魔女'});">水星的魔女</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=新世紀福音戰士"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_新世紀福音戰士'});"
                                                    class="hot">新世紀福音戰士</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=精靈寶可夢"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_精靈寶可夢'});">精靈寶可夢</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=數碼寶貝"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_數碼寶貝'});">數碼寶貝</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=假面騎士"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_假面騎士'});">假面騎士</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=七龍珠"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_七龍珠'});">七龍珠</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=航海王"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_航海王'});">航海王</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=咒術迴戰"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_咒術迴戰'});"
                                                    class="hot">咒術迴戰</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=鏈鋸人"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_鏈鋸人'});">鏈鋸人</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=火影忍者"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_火影忍者'});">火影忍者</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=鬼滅之刃"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_鬼滅之刃'});">鬼滅之刃</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=hunter×hunter-獵人"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_獵人'});">獵人</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=遊戲王"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_遊戲王'});">遊戲王</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=我的英雄學院"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_我的英雄學院'});">我的英雄學院</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=jojo的奇妙冒險"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_JOJO冒險野郎'});">JOJO冒險野郎</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=勇者鬥惡龍"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_勇者鬥惡龍'});">勇者鬥惡龍</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=哥吉拉"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_哥吉拉'});"
                                                    class="hot">哥吉拉</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=葬送的芙莉蓮"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_葬送的芙莉蓮'});"
                                                    class="hot">葬送的芙莉蓮</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=SPY×FAMILY間諜家家酒"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_SPY×FAMILY間諜家家酒'});"
                                                    class="hot">間諜家家酒</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=超人力霸王"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_超人力霸王'});">超人力霸王</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=碧藍航線"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_碧藍航線'});"
                                                    class="hot">碧藍航線</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=蠟筆小新"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_蠟筆小新'});">蠟筆小新</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=烙印勇士"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_烙印勇士'});">烙印勇士</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=魔神英雄傳"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_魔神英雄傳'});">魔神英雄傳</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=天元突破紅蓮螺巖"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_天元突破紅蓮螺巖'});">天元突破紅蓮螺巖</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=閃電霹靂車"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_日系','event_label': 'PC_主題_日系_閃電霹靂車'});">閃電霹靂車</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <h3>美系主題</h3>
                                            <li><a href="https://www.toy-people.com/?tag=星際大戰"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_星際大戰'});">星際大戰</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=變形金剛"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_變形金剛'});"
                                                    class="hot">變形金剛</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=鋼鐵人"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_鋼鐵人'});">鋼鐵人</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=蜘蛛人"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_蜘蛛人'});">蜘蛛人</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=蝙蝠俠"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_蝙蝠俠'});">蝙蝠俠</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=神力女超人"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_神力女超人'});">神力女超人</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=哈利波特"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_哈利波特'});"
                                                    class="hot">哈利波特</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=異形"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_異形'});">異形</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=終極戰士"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_終極戰士'});">終極戰士</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=金剛戰士"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_金剛戰士'});">金剛戰士</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=回到未來"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_回到未來'});">回到未來</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=玩具總動員"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_玩具總動員'});">玩具總動員</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=魔鬼剋星"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_魔鬼剋星'});">魔鬼剋星</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=太空超人"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_太空超人'});">太空超人</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=忍者龜"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_忍者龜'});">忍者龜</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=音速小子"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_音速小子'});">音速小子</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=玩具總動員"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_玩具總動員'});">玩具總動員</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=侏羅紀公園"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_侏羅紀公園'});">侏羅紀公園</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=魔戒"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_魔戒'});">魔戒</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=史努比"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_史努比'});">史努比</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=NBA"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_美系','event_label': 'PC_主題_美系_NBA'});">NBA</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <h3><a href="https://www.toy-people.com/?tag=電玩遊戲"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_遊戲','event_label': 'PC_主題_遊戲_all_電玩遊戲'});">遊戲主題</a>
                                            </h3>
                                            <li><a href="https://www.toy-people.com/?tag=sega"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_遊戲','event_label': 'PC_主題_遊戲_SEGA'});">SEGA</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=square-enix"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_遊戲','event_label': 'PC_主題_遊戲_SQUARE_ENIX'});">SQUARE
                                                    ENIX</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=魔物獵人"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_遊戲','event_label': 'PC_主題_遊戲_魔物獵人'});">魔物獵人</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=final-fantasy"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_遊戲','event_label': 'PC_主題_遊戲_FINAL_FANTASY'});">FINAL
                                                    FANTASY</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=薩爾達傳說"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_遊戲','event_label': 'PC_主題_遊戲_薩爾達傳說'});">薩爾達傳說</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=超級瑪利歐兄弟"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_遊戲','event_label': 'PC_主題_遊戲_超級瑪利歐兄弟'});">超級瑪利歐兄弟</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=快打旋風"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_遊戲','event_label': 'PC_主題_遊戲_快打旋風'});">快打旋風</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=playstation"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_遊戲','event_label': 'PC_主題_遊戲_PlayStation'});">PlayStation</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=任天堂"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_遊戲','event_label': 'PC_主題_遊戲_任天堂'});"
                                                    class="hot">任天堂</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=switch"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_主題_遊戲','event_label': 'PC_主題_遊戲_Switch'});">Switch</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav2"><a href="javascript:void(0);">品牌</a>
                                    <div class="b_cat">
                                        <ul>
                                            <h3>日本</h3>
                                            <li><a href="https://www.toy-people.com/?tag=alter"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_ALTER'});">ALTER</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=bandai"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_BANDAI'});"
                                                    class="hot">BANDAI</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=bandai-candy"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_BANDAI_CANDY'});">BANDAI
                                                    CANDY</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=bandai-spirits"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_BANDAI_SPIRITS'});">BANDAI
                                                    SPIRITS</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=banpresto"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_BANPRESTO'});">BANPRESTO</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=gashapon"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_BANDAI_Gashapon'});">BANDAI
                                                    Gashapon</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=freering"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_Freering'});">FREEing</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=furyu"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_FuRyu'});">FuRyu</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=fujimi"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_FUJIMI'});">FUJIMI</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=gecco"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_Gecco'});">Gecco</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=good-smile-company"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_GOOD_SMILE_COMPANY'});"
                                                    class="hot">GOOD SMILE</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=kenelephant"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_Kenelephant'});"
                                                    class="hot">Kenelephant</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=kdcolle"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_KDcolle'});">KDcolle</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=max-factory"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_Max_Factory'});">Max
                                                    Factory</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=medicos"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_MEDICOS'});">MEDICOS</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=megahouse"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_MegaHouse'});">MegaHouse</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=medicom-toy"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_MEDICOM_TOY'});">MEDICOM
                                                    TOY</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=re-ment"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_RE_MENT'});">RE-MENT</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=sega"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_SEGA'});">SEGA</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=prime-1-studio"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_Prime_1_Studio'});">Prime
                                                    1 Studio</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=t-arts"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'T_ARTS','PC_品牌_日本': 'PC_品牌_日本_T_ARTS'});">T-ARTS</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=takara-tomy"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_TAKARA_TOMY'});"
                                                    class="hot">TAKARA TOMY</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=tamashii"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_TAMASHII_品牌'});"
                                                    class="hot">TAMASHII</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=plex"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_PLEX'});">PLEX</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=volks"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_VOLKS'});">VOLKS</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=x-plus-toys"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_X_PLUS_TOYS'});"
                                                    class="hot">X-PLUS TOYS</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=一番賞"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_一番賞_品牌'});"
                                                    class="hot">一番賞</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=奇譚俱樂部"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_奇譚俱樂部'});"
                                                    class="hot">奇譚俱樂部</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=海洋堂"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_海洋堂'});"
                                                    class="hot">海洋堂</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=壽屋"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_日本','event_label': 'PC_品牌_日本_壽屋'});"
                                                    class="hot">壽屋</a></li>
                                        </ul>
                                        <ul>
                                            <h3>歐美</h3>
                                            <li><a href="https://www.toy-people.com/?tag=funko"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_歐美','event_label': 'PC_品牌_歐美_FUNKO'});">FUNKO</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=gentle-giant"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_歐美','event_label': 'PC_品牌_歐美_Gentle_Giant'});">Gentle
                                                    Giant</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=hasbro-孩之寶"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_歐美','event_label': 'PC_品牌_歐美_HASBRO_孩之寶'});"
                                                    class="hot">HASBRO 孩之寶</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=lego"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_歐美','event_label': 'PC_品牌_歐美_LEGO'});"
                                                    class="hot">LEGO</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=mezco"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_歐美','event_label': 'PC_品牌_歐美_MEZCO_TOYZ'});">MEZCO
                                                    TOYZ</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=mondo"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_歐美','event_label': 'PC_品牌_歐美_MONDO'});">MONDO</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=pop-culture-shock"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_歐美','event_label': 'PC_品牌_歐美_Pop_Culture_Shock'});">Pop
                                                    Culture Shock</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=playmates"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_歐美','event_label': 'PC_品牌_歐美_Playmates_Toys'});">Playmates
                                                    Toys</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=quantum-mechanix"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_歐美','event_label': 'PC_品牌_歐美_Quantum_Mechanix'});">Quantum
                                                    Mechanix</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=sideshow"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_歐美','event_label': 'PC_品牌_歐美_Sideshow'});">Sideshow</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=super7"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_歐美','event_label': 'PC_品牌_歐美_SUPER7'});">SUPER7</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=tubbz"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_歐美','event_label': 'PC_品牌_歐美_TUBBZ'});">TUBBZ</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=麥法蘭"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_歐美','event_label': 'PC_品牌_歐美_麥法蘭'});">McFarlane
                                                    麥法蘭</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=weta"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_歐美','event_label': 'PC_品牌_歐美_WETA'});">WETA</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <h3>亞洲</h3>


                                            <li><a href="https://www.toy-people.com/?tag=blitzway"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_亞洲','event_label': 'PC_品牌_亞洲_Blitzway'});">Blitzway</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=dam-toy"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_亞洲','event_label': 'PC_品牌_亞洲_DAMTOYS'});">DAMTOYS</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=enterbay"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_亞洲','event_label': 'PC_品牌_亞洲_ENTERBAY'});">ENTERBAY</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=hot-toys"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_亞洲','event_label': 'PC_品牌_亞洲_Hot_Toys'});"
                                                    class="hot">HOT TOYS</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=hobbymax"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_亞洲','event_label': 'PC_品牌_亞洲_Hobby_Max'});">Hobby
                                                    Max</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=infinity-studio"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_亞洲','event_label': 'PC_品牌_亞洲_Infinity_Studio'});">Infinity
                                                    Studio</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=queen-studios"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_亞洲','event_label': 'PC_品牌_亞洲_Queen_Studios'});">Queen
                                                    Studios</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=spiral-studio"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_亞洲','event_label': 'PC_品牌_亞洲_SPIRAL_STUDIO'});">SPIRAL
                                                    STUDIO</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=storm-collectibles"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_亞洲','event_label': 'PC_品牌_亞洲_Storm_Collectibles'});">Storm
                                                    Collectibles</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=threezero"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_亞洲','event_label': 'PC_品牌_亞洲_ThreeZero'});">ThreeZero</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=tsume"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_亞洲','event_label': 'PC_品牌_亞洲_TSUME'});">TSUME</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=千值練"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_品牌_亞洲','event_label': 'PC_品牌_亞洲_千值練'});">千值練</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav2"><a href="https://www.toy-people.com/?tag=模型"
                                        onclick="gtag('event', 'click_PC', {'event_category': 'PC_模型類別','event_label': 'PC_模型類別_模型1'});">模型</a>
                                    <div class="b_cat">
                                        <ul>
                                            <h3><a href="https://www.toy-people.com/?tag=模型"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_模型類別','event_label': 'PC_模型類別_模型2'});">模型</a>
                                            </h3>
                                            <li><a href="https://www.toy-people.com/?tag=組裝模型"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_模型類別','event_label': 'PC_模型類別_組裝模型'});"
                                                    class="hot">組裝模型</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=鋼普拉"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_模型類別','event_label': 'PC_模型類別_鋼普拉'});"
                                                    class="hot">鋼普拉</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=微縮模型"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_模型類別','event_label': 'PC_模型類別_微縮模型'});">微縮模型</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=模型車"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_模型類別','event_label': 'PC_模型類別_模型車'});">模型車</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=軍武"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_模型類別','event_label': 'PC_模型類別_軍武模型'});">軍武模型</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=田宮模型"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_模型類別','event_label': 'PC_模型類別_田宮模型'});">田宮模型</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=gk"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_模型類別','event_label': 'PC_模型類別_GK'});">GK</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li style="color: #bbb;font-weight: 100;">｜</li>
                                <li class="nav2"><a href="https://www.toy-people.com/?tag=tamashii"
                                        onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_link','event_label': 'PC_TAMASHII_link'});">TAMASHII</a>
                                    <div class="b_cat w_list5">
                                        <ul>
                                            <h3>FIGURE 系列</h3>
                                            <li><a href="https://www.toy-people.com/?tag=s-h-figuarts"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_S_H_Figuarts'});"
                                                    class="hot">S.H.Figuarts</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=真骨彫製法"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_S_H_Figuarts真骨彫製法'});"
                                                    class="hot">S.H.Figuarts 真骨彫製法</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=figuarts-zero"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_Figuarts_ZERO'});"
                                                    class="hot">Figuarts ZERO</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=figuarts-zero-ex"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_Figuarts_ZERO_EX'});"
                                                    class>Figuarts ZERO EX</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=figuarts-mini"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_Figuarts_mini'});"
                                                    class="hot">Figuarts mini</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=s-h-monsterarts"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_S_H_MonsterArts'});"
                                                    class="hot">S.H.MonsterArts</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=tamashii-lab"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_TAMASHII_Lab'});"
                                                    class>TAMASHII Lab</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=tamashii-nations-box"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_TAMASHII_NATIONS_BOX'});"
                                                    class>TAMASHII NATIONS BOX</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=PROPLICA"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_PROPLICA'});"
                                                    class="hot">PROPLICA</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=聖闘士聖衣神話"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_聖闘士聖衣神話'});"
                                                    class="hot">聖闘士聖衣神話</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=聖闘士聖衣神話ex"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_聖闘士聖衣神話EX'});"
                                                    class>聖闘士聖衣神話EX</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=s-i-c"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_S_I_C'});"
                                                    class>S.I.C.</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=魔戒可動"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_魔戒可動'});"
                                                    class>魔戒可動</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=輝艦大全"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_輝艦大全'});"
                                                    class>輝艦大全</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=魂之工房"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_魂之工房'});"
                                                    class>魂之工房</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=名將manga-realization"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_名將MANGA'});"
                                                    class>名將MANGA REALIZATION</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=名將movie-realization"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_名將MOVIE'});"
                                                    class>名將MOVIE REALIZATION</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=ultra-act"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_ULTRA_ACT'});"
                                                    class>ULTRA-ACT</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=daruma-club"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_DARUMA_CLUB'});"
                                                    class>DARUMA CLUB</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=d-d-panoramation"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_D_D_PANORAMATION'});"
                                                    class>D.D.PANORAMATION</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=human-size"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_FIGURE系列','event_label': 'PC_TAMASHII_FIGURE_Human_size'});"
                                                    class>Human size</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=12-pm"
                                                    onclick="gtag('event', 'click_PC', {'event_category': '12PM','PC_TAMASHII_FIGURE系列': 'PC_TAMASHII_FIGURE_12PM'});"
                                                    class>12”PM</a></li>
                                        </ul>
                                        <ul>
                                            <h3>ROBOT 系列</h3>
                                            <li><a href="https://www.toy-people.com/?tag=robot魂"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_ROBOT魂'});"
                                                    class="hot">ROBOT魂</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=ver-a-n-i-m-e"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_ver_ANIME'});"
                                                    class="hot">ver. A.N.I.M.E.</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=ka-signature"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_Ka_signature'});"
                                                    class="hot">Ka signature</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=gundam-fix-figuration"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_GUNDAM_FIX_FIGURATION'});"
                                                    class="hot">GUNDAM FIX FIGURATION</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=metal-robot魂"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_METAL_ROBOT魂'});"
                                                    class="hot">METAL ROBOT魂</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=metal-build"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_METAL_BUILD'});"
                                                    class="hot">METAL BUILD</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=超合金"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_METAL_BUILD'});"
                                                    class>超合金</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=超合金魂"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_超合金魂'});"
                                                    class="hot">超合金魂</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=dx超合金魂"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_DX超合金魂'});"
                                                    class>DX超合金魂</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=dx超合金"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_DX超合金'});"
                                                    class>DX超合金</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=hi-metal"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_HI_METAL'});"
                                                    class="hot">HI-METAL</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=dimension-art-metal"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_DIMENSION_ART_METAL'});"
                                                    class="hot">DIMENSION ART METAL</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=sdx"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_SDX'});">SDX</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=nxedge-style"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_NXEDGE_STYLE'});">NXEDGE
                                                    STYLE</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=gundam-universe"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_GUNDAM_UNIVERSE'});"
                                                    class="hot">GUNDAM UNIVERSE</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=解體匠機"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_解體匠機'});"
                                                    class="hot">解體匠機</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=dynaction"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_DYNACTION'});"
                                                    class>DYNACTION</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=tiny-session"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_TINY_SESSION'});"
                                                    class>TINY SESSION</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=sr超合金"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_SUPER_ROBOT超合金'});"
                                                    class>SUPER ROBOT超合金</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=超合金の塊"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_超合金の塊'});"
                                                    class>超合金の塊</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=formania-ex"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_FORMANIA_EX'});"
                                                    class>FORMANIA EX</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=armor-girls-project"
                                                    onclick="gtag('event', 'click_PC', {'PC_TAMASHII_ROBOT系列': 'ARMOR_GIRLS_PROJECT','event_label': 'PC_TAMASHII_ROBOT_ARMOR_GIRLS_PROJECT'});"
                                                    class>ARMOR GIRLS PROJECT</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=魂spec"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_TAMASHII_ROBOT系列','event_label': 'PC_TAMASHII_ROBOT_魂SPEC'});"
                                                    class>魂SPEC</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="https://www.toy-people.com/?tag=lego"
                                        onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List','event_label': 'PC_Menu_List_LEGO'});">LEGO</a>
                                </li>
                                <li><a href="https://www.toy-people.com/?tag=一番賞"
                                        onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List','event_label': 'PC_Menu_List_一番賞'});"
                                        class="hot">一番賞</a></li>
                                <li><a href="https://www.toy-people.com/?tag=轉蛋扭蛋"
                                        onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List','event_label': 'PC_Menu_List_轉蛋'});">轉蛋</a>
                                </li>
                                <li><a href="https://www.toy-people.com/?tag=可動人偶"
                                        onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List','event_label': 'PC_Menu_List_可動人偶'});">可動人偶</a>
                                </li>
                                <li><a href="https://www.toy-people.com/?tag=美少女pvc"
                                        onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List','event_label': 'PC_Menu_List_美少女PVC'});">美少女PVC</a>
                                </li>
                                <li><a href="https://www.toy-people.com/?tag=怪獸"
                                        onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List','event_label': 'PC_Menu_List_怪獸'});">怪獸</a>
                                </li>
                                <li><a href="https://www.toy-people.com/?tag=吊卡玩具"
                                        onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List','event_label': 'PC_Menu_List_吊卡玩具'});">吊卡玩具</a>
                                </li>
                                <li><a href="https://www.toy-people.com/?tag=軟膠"
                                        onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List','event_label': 'PC_Menu_List_軟膠'});">軟膠</a>
                                </li>
                                <li><a href="https://www.toy-people.com/?tag=雕像"
                                        onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List','event_label': 'PC_Menu_List_雕像'});">雕像</a>
                                </li>
                                <li class="nav2"><a href="javascript:void(0);">更多</a>
                                    <div class="b_cat">
                                        <ul>
                                            <h3>More</h3>
                                            <li><a href="https://www.toy-people.com/?tag=鋼彈系列"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_鋼彈'});"
                                                    class="hot">鋼彈系列</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=12吋"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_12吋'});">12吋</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=真骨彫製法"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_PLAY_ARTS改'});">PLAY
                                                    ARTS改</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=pvc完成品"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_PVC完成品'});"
                                                    class="hot">PVC完成品</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=p-o-p"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_P.O.P'});"
                                                    title="Portrait.Of.Pirates">P.O.P</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=udf"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_UDF'});"
                                                    title="Ultra Detail Figure">UDF</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=wcf"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_WCF'});"
                                                    title="World Collectable Figure" class="hot">WCF</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=ZOIDS"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_ZOIDS'});">ZOIDS</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=女神裝置"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_女神裝置'});">女神裝置</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=合金可動"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_合金可動'});">合金可動</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=布偶"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_布偶'});">布偶</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=食玩"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_食玩'});">食玩</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=盒玩"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_盒玩'});"
                                                    class="hot">盒玩</a></li>
                                            <li><a href="https://www.toy-people.com/?tag=景品"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_景品'});">景品</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=特攝系列"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_特攝系列'});">特攝系列</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=設計師玩具"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_設計師玩具'});">設計師玩具</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=道具複製品"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_道具複製品'});">道具複製品</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=黏土人"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_黏土人'});">黏土人</a>
                                            </li>
                                            <li><a href="https://www.toy-people.com/?tag=桌遊"
                                                    onclick="gtag('event', 'click_PC', {'event_category': 'PC_Menu_List_More','event_label': 'PC_Menu_List_More_桌遊'});">桌遊</a>
                                            </li>
                                        </ul>

                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="dan_pmp970">
                <div class="box">

                    <!-- <div id="div-gpt-ad-1614247201928-0">
            <script>
                googletag.cmd.push(function() { googletag.display('div-gpt-ad-1614247201928-0'); });
            </script>
        </div> -->
                </div>
            </div>
        </div>
    </header>

    <main>
        <div class="outer-wrap main">
            <div id="content" data-sticky_parent>
                <div id="left-content" class="left">

                    <div class="slideshow">
                        <ul class="bxslider">
                            <li>
                                <div class="post-image">
                                    <a href="/?p=87267" target
                                        style="background-image:url('https://img.toy-people.com/member/170816079048_1200.jpg')"
                                        title="超合金『MSN-04FF 沙薩比』豪華合金零件、發光機構再現福岡立像版造型！">
                                    </a>
                                </div>
                                <div class="post-text">
                                    <a href="/?p=87267" target>
                                        <span class="bold_face">今日發燒 #1</span>
                                        <p class="bold_face">超合金『MSN-04FF 沙薩比』豪華合金零件、發光機構再現福岡立像版造型！</p>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="post-image">
                                    <a href="/?p=87235" target
                                        style="background-image:url('https://img.toy-people.com/member/170807153789_1200.png')"
                                        title="GOODSMILE【Mecha Smile Impact 機械模型祭 2024 WINTER in 台灣】現場報導">
                                    </a>
                                </div>
                                <div class="post-text">
                                    <a href="/?p=87235">
                                        <span class="bold_face">今日發燒 #2</span>
                                        <p class="bold_face">GOODSMILE【Mecha Smile Impact 機械模型祭 2024 WINTER in 台灣】現場報導</p>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="post-image">
                                    <a href="/?p=87293"
                                        style="background-image:url('https://img.toy-people.com/member/170818482930_1200.jpeg')"
                                        title="散發木材香氣的鋼普拉『ENTRY GRADE 1/144 RX-78-2 鋼彈［復古配色］』正式發表！">
                                    </a>
                                </div>
                                <div class="post-text">
                                    <a href="/?p=87293">
                                        <span class="bold_face">今日發燒 #3</span>
                                        <p class="bold_face">散發木材香氣的鋼普拉『ENTRY GRADE 1/144 RX-78-2 鋼彈［復古配色］』正式發表！</p>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="post-image">
                                    <a href="/?p=87286"
                                        style="background-image:url('https://img.toy-people.com/member/170815106818_1200.jpg')"
                                        title="GSC《葬送的芙莉蓮》POP UP PARADE 芙莉蓮、黏土人 欣梅爾...新作原型發表！【WonHobby38】">
                                    </a>
                                </div>
                                <div class="post-text">
                                    <a href="/?p=87286" target>
                                        <span class="bold_face">注目焦點</span>
                                        <p class="bold_face">GSC《葬送的芙莉蓮》POP UP PARADE 芙莉蓮、黏土人 欣梅爾...新作原型發表！【WonHobby38】</p>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="post-image">
                                    <a href="https://youtu.be/7nVyH5IzVWs" target="_blank"
                                        style="background-image:url('https://img.toy-people.com/member/170815585016.jpg')"
                                        title="GOOD SMILE COMPANY 機械模型祭2024 WINTER in 台灣 ～完全攻略！"
                                        onclick="gtag('event', 'click_PC', {'event_category': 'SlideShow_PC','event_label': 'SlideShow_PC_https://youtu.be/7nVyH5IzVWs'});">
                                    </a>
                                </div>
                                <div class="post-text">
                                    <a href="https://youtu.be/7nVyH5IzVWs" target="_blank"
                                        onclick="gtag('event', 'click_PC', {'event_category': 'SlideShow_PC','event_label': 'SlideShow_PC_https://youtu.be/7nVyH5IzVWs'});">
                                        <span class="bold_face">玩具人探險隊</span>
                                        <p class="bold_face">GOOD SMILE COMPANY 機械模型祭2024 WINTER in 台灣 ～完全攻略！</p>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>


                    <div class="category-new-tab">
                        <div class="category-new">
                            <div class="card cat1"
                                style="background-image:url('//img.toy-people.com/imgur/170808075096.png')">
                                <a href="/?p=87265" title="看起來像限定色！ 推主秀出擺在櫥櫃的「PlayStation 3」手把泛黃卻被網友讚超美"
                                    onclick="ga('send', 'event', 'PC_cat4news_DENDEN', 'click');">
                                    <span class="category-name">日刊電電</span>
                                    <p>看起來像限定色！ 推主秀出擺在櫥櫃的「PlayStation 3」手把泛黃卻被網友讚超美</p>
                                </a>
                            </div>
                            <div class="card cat2"
                                style="background-image:url('//img.toy-people.com/imgur/170809217023.png')">
                                <a href="/?p=87246" title="漫威新團隊電影《午夜之子》導演候選人曝光！《復仇者聯盟 5》可望加重死侍、金剛狼戲份"
                                    onclick="ga('send', 'event', 'PC_cat4news_SCREEN FANDOM', 'click');">
                                    <span class="category-name">SF歐美娛樂癮迷</span>
                                    <p>漫威新團隊電影《午夜之子》導演候選人曝光！《復仇者聯盟 5》可望加重死侍、金剛狼戲份</p>
                                </a>
                            </div>
                            <div class="card cat3"
                                style="background-image:url('//img.toy-people.com/imgur/170557532538.png')">
                                <a href="/?p=86584" title="「刀劍亂舞ONLINE」✕ 金澤加賀蒔繪懷錶，一起穿越時空為守護歷史而戰！"
                                    onclick="ga('send', 'event', 'PC_cat4news_Unboxing', 'click');">
                                    <span class="category-name">開箱報告</span>
                                    <p>「刀劍亂舞ONLINE」✕ 金澤加賀蒔繪懷錶，一起穿越時空為守護歷史而戰！</p>
                                </a>
                            </div>
                            <div class="card cat4"
                                style="background-image:url('//img.toy-people.com/imgur/170815514120.png')">
                                <a href="/?p=87263" title="《死侍與金鋼狼》首支預告彩蛋解析：如何埋下《復仇者聯盟 6》伏筆？那是末日博士和「女死侍」嗎？"
                                    onclick="ga('send', 'event', 'PC_cat4news_MONOGRAPHIC', 'click');">
                                    <span class="category-name">玩具人專欄</span>
                                    <p>《死侍與金鋼狼》首支預告彩蛋解析：如何埋下《復仇者聯盟 6》伏筆？那是末日博士和「女死侍」嗎？</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="toy_news_list" class="left">
                        <div class="card good72890">

                            <!-- <div id="div-gpt-ad-1548828609751-0">
                                <script>
                                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1548828609751-0'); });
                                </script>
                            </div> -->
                        </div>
                        <div id="toy_news_list" class="news_list">
                            <h3 class="headline_title">最新新聞</h3>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=87293"
                                        style="background-image:url('https://img.toy-people.com/member/170818482930_1200.jpeg')"
                                        title="散發木材香氣的鋼普拉『ENTRY GRADE 1/144 RX-78-2 鋼彈［復古配色］』正式發表！"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_散發木材香氣的鋼普拉『ENTRY GRADE 1/144 RX-78-2 鋼彈［復古配色］』正式發表！', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87293" title="散發木材香氣的鋼普拉『ENTRY GRADE 1/144 RX-78-2 鋼彈［復古配色］』正式發表！"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_散發木材香氣的鋼普拉『ENTRY GRADE 1/144 RX-78-2 鋼彈［復古配色］』正式發表！', 'click');">散發木材香氣的鋼普拉『ENTRY
                                            GRADE 1/144 RX-78-2 鋼彈［復古配色］』正式發表！</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 17小時前</span>
                                        <span class="release_date"><i class="fa fa-calendar" aria-hidden="true"></i>
                                            預定發售：2024年3月</span>
                                    </div>
                                    <p>由日本 BANDAI SPIRITS 公司 HOBBY 事業部推出，適合低年齡層、入門級玩家的組裝模型系列『ENTRY GRADE』發表了最新商品「ENTRY GRADE
                                        1/144 RX-78-2 鋼彈［復古配色］」預計於 2024 年 03 月 22～23 日舉行的『HYPE ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=bandai" title="BANDAI"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">BANDAI</a>
                                                </li>
                                                <li><a href="/?tag=%e6%97%a5%e7%b3%bb" title="日系"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">日系</a>
                                                </li>
                                                <li><a href="/?tag=%e9%8b%bc%e6%99%ae%e6%8b%89" title="鋼普拉"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">鋼普拉</a>
                                                </li>
                                                <li><a href="/?tag=%e9%8b%bc%e5%bd%88%e7%b3%bb%e5%88%97" title="鋼彈系列"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">鋼彈系列</a>
                                                </li>
                                                <li><a href="/?tag=%e7%b5%84%e8%a3%9d%e6%a8%a1%e5%9e%8b" title="組裝模型"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">組裝模型</a>
                                                </li>
                                                <li><a href="/?tag=bandai-spirits" title="BANDAI SPIRITS"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">BANDAI
                                                        SPIRITS</a></li>
                                                <li><a href="/?tag=%E6%A9%9F%E5%8B%95%E6%88%B0%E5%A3%AB%E9%8B%BC%E5%BD%88"
                                                        title="機動戰士鋼彈"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">機動戰士鋼彈</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=18"
                                                onclick="ga('send', 'event', 'PC_items_author_愛玩犀牛_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="愛玩犀牛">愛玩犀牛</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=87291"
                                        style="background-image:url('https://img.toy-people.com/member/170816914868_1200.jpg')"
                                        title="壽屋『M.S.G 重武裝組件46 /47 槍刃騎槍2』人氣複合式武裝升級再登場！"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_壽屋『M.S.G 重武裝組件46 /47 槍刃騎槍2』人氣複合式武裝升級再登場！', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87291" title="壽屋『M.S.G 重武裝組件46 /47 槍刃騎槍2』人氣複合式武裝升級再登場！"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_壽屋『M.S.G 重武裝組件46 /47 槍刃騎槍2』人氣複合式武裝升級再登場！', 'click');">壽屋『M.S.G
                                            重武裝組件46 /47 槍刃騎槍2』人氣複合式武裝升級再登場！</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 21小時前</span>
                                        <span class="release_date"><i class="fa fa-calendar" aria-hidden="true"></i>
                                            預定發售：2024年6月 - 2024年7月</span>
                                    </div>
                                    <p>由日本模型商壽屋（KOTOBUKIYA）發行，種類極為豐富的組裝模型改造零件『M.S.G』日前發表了最新商品「重武裝組件46 槍刃騎槍2（橘/黑）」、「重武裝組件47
                                        槍刃騎槍2（紫/白）」先後預計於 2024 年 06 月、07 月發售 ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=%e6%97%a5%e7%b3%bb" title="日系"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">日系</a>
                                                </li>
                                                <li><a href="/?tag=%e5%a3%bd%e5%b1%8b" title="壽屋"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">壽屋</a>
                                                </li>
                                                <li><a href="/?tag=%e7%b5%84%e8%a3%9d%e6%a8%a1%e5%9e%8b" title="組裝模型"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">組裝模型</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=18"
                                                onclick="ga('send', 'event', 'PC_items_author_愛玩犀牛_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="愛玩犀牛">愛玩犀牛</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=87267"
                                        style="background-image:url('https://img.toy-people.com/member/170816079048_1200.jpg')"
                                        title="超合金『MSN-04FF 沙薩比』豪華合金零件、發光機構再現福岡立像版造型！"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_超合金『MSN-04FF 沙薩比』豪華合金零件、發光機構再現福岡立像版造型！', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87267" title="超合金『MSN-04FF 沙薩比』豪華合金零件、發光機構再現福岡立像版造型！" class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_超合金『MSN-04FF 沙薩比』豪華合金零件、發光機構再現福岡立像版造型！', 'click');">超合金『MSN-04FF
                                            沙薩比』豪華合金零件、發光機構再現福岡立像版造型！</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 23小時前</span>
                                        <span class="release_date"><i class="fa fa-calendar" aria-hidden="true"></i>
                                            預定發售：2024年4月</span>
                                    </div>
                                    <p>由日本 BANDAI SPIRITS 公司收藏玩具事業部 TAMASHII NATIONS 發行的經典合金玩具『超合金』系列，日前發表了出自《機動戰士鋼彈
                                        逆襲的夏亞》的最新商品「MSN-04FF 沙薩比」預計 2024 年 04 月 19 日起於福岡 GUNDA ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=bandai" title="BANDAI"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">BANDAI</a>
                                                </li>
                                                <li><a href="/?tag=%e6%97%a5%e7%b3%bb" title="日系"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">日系</a>
                                                </li>
                                                <li><a href="/?tag=%e8%b6%85%e5%90%88%e9%87%91" title="超合金"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">超合金</a>
                                                </li>
                                                <li><a href="/?tag=tamashii" title="TAMASHII"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">TAMASHII</a>
                                                </li>
                                                <li><a href="/?tag=%e9%8b%bc%e5%bd%88%e7%b3%bb%e5%88%97" title="鋼彈系列"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">鋼彈系列</a>
                                                </li>
                                                <li><a href="/?tag=bandai-spirits" title="BANDAI SPIRITS"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">BANDAI
                                                        SPIRITS</a></li>
                                                <li><a href="/?tag=%E5%90%88%E9%87%91%E5%8F%AF%E5%8B%95" title="合金可動"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">合金可動</a>
                                                </li>
                                                <li><a href="/?tag=%E9%80%86%E8%A5%B2%E7%9A%84%E5%A4%8F%E4%BA%9E"
                                                        title="逆襲的夏亞"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">逆襲的夏亞</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=18"
                                                onclick="ga('send', 'event', 'PC_items_author_愛玩犀牛_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="愛玩犀牛">愛玩犀牛</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card NewToyVideo">
                                <div class="image">
                                    <div class="videoBox">
                                        <div class="ytbg">
                                            <div class="tags"><a href="https://www.toy-people.com/videolist-play">玩具人玩玩具</a>
                                            </div>
                                            <span class="bg"
                                                style="background-image: url(https://img.youtube.com/vi/7nVyH5IzVWs/0.jpg)"></span>
                                            <div class="text">
                                                <h2>【玩具人探險隊】GOODSMILE Mecha Smile Impact 機械模型祭2024 WINTER in 台灣～完全攻略！</h2>
                                                <div class="info gray">
                                                    <span class="pv"><i class="fa fa-eye"></i> 11</span>
                                                    <span class="times"><i class="fa fa-clock-o"></i> 1天前</span>
                                                </div>
                                            </div>
                                        </div>
                                        <iframe src="https://www.youtube.com/embed/7nVyH5IzVWs" frameborder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=87270"
                                        style="background-image:url('https://img.toy-people.com/member/17080985107_1200.jpg')"
                                        title="Max Factory《戀上換裝娃娃》喜多川海夢 1/7立體人形"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_Max Factory《戀上換裝娃娃》喜多川海夢 1/7立體人形', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87270" title="Max Factory《戀上換裝娃娃》喜多川海夢 1/7立體人形" class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_Max Factory《戀上換裝娃娃》喜多川海夢 1/7立體人形', 'click');">Max
                                            Factory《戀上換裝娃娃》喜多川海夢 1/7立體人形</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 1天前</span>
                                        <span class="release_date"><i class="fa fa-calendar" aria-hidden="true"></i>
                                            預定發售：2024年12月</span>
                                    </div>
                                    <p>日本知名玩具品牌Max Factory，將於2024年12月，推出人氣動漫作品《戀上換裝娃娃》的女主角「喜多川海夢」的1/7比例之立體人形！售價為日幣16,800。
                                        《戀上換裝娃娃》（その着せ替え人形は恋をする，簡稱「着せ恋 ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=good-smile-company" title="GOOD SMILE COMPANY"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">GOOD
                                                        SMILE COMPANY</a></li>
                                                <li><a href="/?tag=max-factory" title="Max Factory"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">Max
                                                        Factory</a></li>
                                                <li><a href="/?tag=%e7%be%8e%e5%b0%91%e5%a5%b3pvc" title="美少女PVC"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">美少女PVC</a>
                                                </li>
                                                <li><a href="/?tag=17" title="1/7"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">1/7</a>
                                                </li>
                                                <li><a href="/?tag=%E6%88%80%E4%B8%8A%E6%8F%9B%E8%A3%9D%E5%A8%83%E5%A8%83"
                                                        title="戀上換裝娃娃"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">戀上換裝娃娃</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=23"
                                                onclick="ga('send', 'event', 'PC_items_author_遊戲小虎_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="遊戲小虎">遊戲小虎</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=3691" title="SCREEN FANDOM"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">SCREEN
                                            FANDOM</a></div>
                                    <a href="/?p=87263"
                                        style="background-image:url('https://img.toy-people.com/member/170815381277_360.jpg')"
                                        title="《死侍與金鋼狼》首支預告彩蛋解析：如何埋下《復仇者聯盟 6》伏筆？那是末日博士和「女死侍」嗎？"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_《死侍與金鋼狼》首支預告彩蛋解析：如何埋下《復仇者聯盟 6》伏筆？那是末日博士和「女死侍」嗎？', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87263" title="《死侍與金鋼狼》首支預告彩蛋解析：如何埋下《復仇者聯盟 6》伏筆？那是末日博士和「女死侍」嗎？"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_《死侍與金鋼狼》首支預告彩蛋解析：如何埋下《復仇者聯盟 6》伏筆？那是末日博士和「女死侍」嗎？', 'click');">《死侍與金鋼狼》首支預告彩蛋解析：如何埋下《復仇者聯盟
                                            6》伏筆？那是末日博士和「女死侍」嗎？</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 1天前</span>
                                    </div>
                                    <p>影迷翹首期盼的死侍 MCU 出道秀《死侍與金鋼狼》（Deadpool and Wolverine）首支預告終於來臨，究竟這位不按牌理出牌的嘴砲傭兵，會在 MCU
                                        引發哪些笑料？甚至鋪陳《復仇者聯盟：秘密戰爭》伏筆？下面就幫大家整理預 ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=marvel" title="MARVEL"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">MARVEL</a>
                                                </li>
                                                <li><a href="/?tag=%e6%ad%bb%e4%be%8d" title="死侍"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">死侍</a>
                                                </li>
                                                <li><a href="/?tag=%e5%bd%a9%e8%9b%8b" title="彩蛋"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">彩蛋</a>
                                                </li>
                                                <li><a href="/?tag=movies" title="歐美電影"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">歐美電影</a>
                                                </li>
                                                <li><a href="/?tag=%e8%90%8a%e6%81%a9%e9%9b%b7%e8%ab%be%e6%96%af"
                                                        title="萊恩雷諾斯"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">萊恩雷諾斯</a>
                                                </li>
                                                <li><a href="/?tag=%e6%ad%bb%e4%be%8d3" title="死侍3"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">死侍3</a>
                                                </li>
                                                <li><a href="/?tag=mcu" title="MCU"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">MCU</a>
                                                </li>
                                                <li><a href="/?tag=%E6%BC%AB%E5%A8%81" title="漫威"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">漫威</a>
                                                </li>
                                                <li><a href="/?tag=%E4%BC%91%E5%82%91%E5%85%8B%E6%9B%BC" title="休傑克曼"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">休傑克曼</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="https://www.toy-people.com/screen-fandom?author=10614"
                                                onclick="ga('send', 'event', 'PC_items_author_Jay_FM_玩具人Toy People News', 'click');"><img
                                                    src="https://img.toy-people.com/cover/10614.jpg" alt="Jay_FM"
                                                    onerror="this.src='../../assets/toy_logo.svg';">Jay_FM</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=87282"
                                        style="background-image:url('https://img.toy-people.com/member/170814752753_1200.jpg')"
                                        title="Tweeterhead《太空超人》骷髏王與紫豹（Skeletor & Panthor）經典豪華版 1/6 比例全身雕像"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_Tweeterhead《太空超人》骷髏王與紫豹（Skeletor & Panthor）經典豪華版 1/6 比例全身雕像', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87282"
                                            title="Tweeterhead《太空超人》骷髏王與紫豹（Skeletor & Panthor）經典豪華版 1/6 比例全身雕像"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_Tweeterhead《太空超人》骷髏王與紫豹（Skeletor & Panthor）經典豪華版 1/6 比例全身雕像', 'click');">Tweeterhead《太空超人》骷髏王與紫豹（Skeletor
                                            & Panthor）經典豪華版 1/6 比例全身雕像</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 1天前</span>
                                        <span class="release_date"><i class="fa fa-calendar" aria-hidden="true"></i>
                                            預定發售：2024年10月 - 2024年12月</span>
                                    </div>
                                    <p>美系造型廠牌 Tweeterhead 在推出「太空超人與戰虎」之後，又於近日發表了以《太空超人》為題的最新商品「骷髏王與紫豹」（Skeletor &
                                        Panthor）經典豪華版 1/6 比例全身雕像！預計將於 2024 年第四季開始發貨，建議 ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=sideshow" title="SIDESHOW"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">SIDESHOW</a>
                                                </li>
                                                <li><a href="/?tag=%e9%9b%95%e5%83%8f" title="雕像"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">雕像</a>
                                                </li>
                                                <li><a href="/?tag=16" title="1/6"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">1/6</a>
                                                </li>
                                                <li><a href="/?tag=%e5%a4%aa%e7%a9%ba%e8%b6%85%e4%ba%ba" title="太空超人"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">太空超人</a>
                                                </li>
                                                <li><a href="/?tag=tweeterhead" title="Tweeterhead"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">Tweeterhead</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=19"
                                                onclick="ga('send', 'event', 'PC_items_author_脆笛捲心酥_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="脆笛捲心酥">脆笛捲心酥</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=87287"
                                        style="background-image:url('https://img.toy-people.com/member/170815330393_1200.jpg')"
                                        title="eStream『劇場版 SPY×FAMILY CODE: White 安妮亞&彭德』1/7比例場景模型 雪國場景好興奮★"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_eStream『劇場版 SPY×FAMILY CODE: White 安妮亞&彭德』1/7比例場景模型 雪國場景好興奮★', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87287"
                                            title="eStream『劇場版 SPY×FAMILY CODE: White 安妮亞&彭德』1/7比例場景模型 雪國場景好興奮★"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_eStream『劇場版 SPY×FAMILY CODE: White 安妮亞&彭德』1/7比例場景模型 雪國場景好興奮★', 'click');">eStream『劇場版
                                            SPY×FAMILY CODE: White 安妮亞&彭德』1/7比例場景模型 雪國場景好興奮★</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 1天前</span>
                                        <span class="release_date"><i class="fa fa-calendar" aria-hidden="true"></i>
                                            預定發售：2025年4月</span>
                                    </div>
                                    <p>由日本CyberZ（株式会社CyberZ）旗下子公司 eStream 發行的高品質模型品牌「SHIBUYA SCRAMBLE FIGURE」，發表了出自《劇場版
                                        SPY×FAMILY CODE: White》的最新商品「安妮亞 & 彭德」1/7比例場景模型，參考售價為 27, ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=17" title="1/7"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">1/7</a>
                                                </li>
                                                <li><a href="/?tag=spy%c3%97family%e9%96%93%e8%ab%9c%e5%ae%b6%e5%ae%b6%e9%85%92"
                                                        title="SPY×FAMILY間諜家家酒"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">SPY×FAMILY間諜家家酒</a>
                                                </li>
                                                <li><a href="/?tag=estream" title="eStream"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">eStream</a>
                                                </li>
                                                <li><a href="/?tag=shibuya-scramble-figure" title="SHIBUYA SCRAMBLE FIGURE"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">SHIBUYA
                                                        SCRAMBLE FIGURE</a></li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=24"
                                                onclick="ga('send', 'event', 'PC_items_author_動感光啵_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="動感光啵">動感光啵</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=87286"
                                        style="background-image:url('https://img.toy-people.com/member/170815106818_1200.jpg')"
                                        title="GSC《葬送的芙莉蓮》POP UP PARADE 芙莉蓮、黏土人 欣梅爾...新作原型發表！【WonHobby38】"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_GSC《葬送的芙莉蓮》POP UP PARADE 芙莉蓮、黏土人 欣梅爾...新作原型發表！【WonHobby38】', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87286"
                                            title="GSC《葬送的芙莉蓮》POP UP PARADE 芙莉蓮、黏土人 欣梅爾...新作原型發表！【WonHobby38】"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_GSC《葬送的芙莉蓮》POP UP PARADE 芙莉蓮、黏土人 欣梅爾...新作原型發表！【WonHobby38】', 'click');">GSC《葬送的芙莉蓮》POP
                                            UP PARADE 芙莉蓮、黏土人 欣梅爾...新作原型發表！【WonHobby38】</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 1天前</span>
                                    </div>
                                    <p>日本模型商　GOOD SMILE COMPANY 於本月 11 日在世界級最大型造型、模型的祭典「Wonder Festival 2024 [冬]
                                        所展出的『WONDERFUL HOBBY LIFE FOR YOU!! 38』中，公開了多款出自人氣動畫《葬送的芙莉蓮》的黏土人、PO ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=%e9%bb%8f%e5%9c%9f%e4%ba%ba" title="黏土人"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">黏土人</a>
                                                </li>
                                                <li><a href="/?tag=pvc%e5%ae%8c%e6%88%90%e5%93%81" title="PVC完成品"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">PVC完成品</a>
                                                </li>
                                                <li><a href="/?tag=pop-up-parade" title="POP UP PARADE"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">POP
                                                        UP PARADE</a></li>
                                                <li><a href="/?tag=%E8%91%AC%E9%80%81%E7%9A%84%E8%8A%99%E8%8E%89%E8%93%AE"
                                                        title="葬送的芙莉蓮"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">葬送的芙莉蓮</a>
                                                </li>
                                                <li><a href="/?tag=good-mile-company" title="GOOD MILE COMPANY"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">GOOD
                                                        MILE COMPANY</a></li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=24"
                                                onclick="ga('send', 'event', 'PC_items_author_動感光啵_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="動感光啵">動感光啵</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=87284"
                                        style="background-image:url('https://img.toy-people.com/member/170814968286_1200.jpg')"
                                        title="GSC《我推的孩子》黏土人MEM醬、舔小蘇打粉的天才童星...多款新作情報公開！【WonHobby38】"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_GSC《我推的孩子》黏土人MEM醬、舔小蘇打粉的天才童星...多款新作情報公開！【WonHobby38】', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87284" title="GSC《我推的孩子》黏土人MEM醬、舔小蘇打粉的天才童星...多款新作情報公開！【WonHobby38】"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_GSC《我推的孩子》黏土人MEM醬、舔小蘇打粉的天才童星...多款新作情報公開！【WonHobby38】', 'click');">GSC《我推的孩子》黏土人MEM醬、舔小蘇打粉的天才童星...多款新作情報公開！【WonHobby38】</a>
                                    </h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 1天前</span>
                                    </div>
                                    <p>日本模型商　GOOD SMILE COMPANY 於本月 11 日在世界級最大型造型、模型的祭典「Wonder Festival 2024 [冬]
                                        所展出的『WONDERFUL HOBBY LIFE FOR YOU!! 38』中，公開了多款出自人氣動畫《我推的孩子》的POP UP PARAD ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=%e9%bb%8f%e5%9c%9f%e4%ba%ba" title="黏土人"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">黏土人</a>
                                                </li>
                                                <li><a href="/?tag=pvc%e5%ae%8c%e6%88%90%e5%93%81" title="PVC完成品"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">PVC完成品</a>
                                                </li>
                                                <li><a href="/?tag=pop-up-parade" title="POP UP PARADE"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">POP
                                                        UP PARADE</a></li>
                                                <li><a href="/?tag=%E6%88%91%E6%8E%A8%E7%9A%84%E5%AD%A9%E5%AD%90"
                                                        title="我推的孩子"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">我推的孩子</a>
                                                </li>
                                                <li><a href="/?tag=good-mile-company" title="GOOD MILE COMPANY"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">GOOD
                                                        MILE COMPANY</a></li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=24"
                                                onclick="ga('send', 'event', 'PC_items_author_動感光啵_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="動感光啵">動感光啵</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=87006"
                                        style="background-image:url('https://img.toy-people.com/member/17081447665_1200.jpg')"
                                        title="壽屋 SNK美少女《格鬥天王2001》安琪兒（Ángel）1/7 比例 PVC塗裝完成品"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_壽屋 SNK美少女《格鬥天王2001》安琪兒（Ángel）1/7 比例 PVC塗裝完成品', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87006" title="壽屋 SNK美少女《格鬥天王2001》安琪兒（Ángel）1/7 比例 PVC塗裝完成品"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_壽屋 SNK美少女《格鬥天王2001》安琪兒（Ángel）1/7 比例 PVC塗裝完成品', 'click');">壽屋
                                            SNK美少女《格鬥天王2001》安琪兒（Ángel）1/7 比例 PVC塗裝完成品</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 1週前</span>
                                        <span class="release_date"><i class="fa fa-calendar" aria-hidden="true"></i>
                                            預定發售：2024年10月</span>
                                    </div>
                                    <p>日本玩具公司壽屋（KOTOBUKIYA）與知名插畫家山下俊也（山下しゅんや）攜手打造的美少女模型品牌「BISHOUJO」日前公開了出自電玩遊戲《格鬥天王2001》的第五款
                                        SNK美少女新作「安琪兒」（Ángel）1/7 比例 PVC塗裝完 ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=%e5%a3%bd%e5%b1%8b" title="壽屋"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">壽屋</a>
                                                </li>
                                                <li><a href="/?tag=%e5%b1%b1%e4%b8%8b%e4%bf%8a%e4%b9%9f" title="山下俊也"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">山下俊也</a>
                                                </li>
                                                <li><a href="/?tag=%e7%be%8e%e5%b0%91%e5%a5%b3pvc" title="美少女PVC"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">美少女PVC</a>
                                                </li>
                                                <li><a href="/?tag=17" title="1/7"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">1/7</a>
                                                </li>
                                                <li><a href="/?tag=%e6%a0%bc%e9%ac%a5%e5%a4%a9%e7%8e%8b" title="格鬥天王"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">格鬥天王</a>
                                                </li>
                                                <li><a href="/?tag=snk" title="SNK"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">SNK</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=19"
                                                onclick="ga('send', 'event', 'PC_items_author_脆笛捲心酥_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="脆笛捲心酥">脆笛捲心酥</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=84474"
                                        style="background-image:url('https://img.toy-people.com/member/169779183289_1200.jpg')"
                                        title="『一番賞 遊戲王系列 vol.3～Wake Up Your Memories～』魂豪示像歐西里斯的天空龍抽起來！"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_『一番賞 遊戲王系列 vol.3～Wake Up Your Memories～』魂豪示像歐西里斯的天空龍抽起來！', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=84474" title="『一番賞 遊戲王系列 vol.3～Wake Up Your Memories～』魂豪示像歐西里斯的天空龍抽起來！"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_『一番賞 遊戲王系列 vol.3～Wake Up Your Memories～』魂豪示像歐西里斯的天空龍抽起來！', 'click');">『一番賞
                                            遊戲王系列 vol.3～Wake Up Your Memories～』魂豪示像歐西里斯的天空龍抽起來！</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 17週前</span>
                                        <span class="release_date"><i class="fa fa-calendar" aria-hidden="true"></i>
                                            預定發售：2024年3月</span>
                                    </div>
                                    <p>日本 BANDAI SPIRITS 公司旗下的超人氣「一番賞（一番くじ）」，繼以《遊戲王》為主題的「一番賞 遊戲王」、「一番賞
                                        遊戲王vol.2」之後，將再度推出第三彈新作「一番賞 遊☆戲☆王系列vol.3～Wake Up Your Memories ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=bandai" title="BANDAI"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">BANDAI</a>
                                                </li>
                                                <li><a href="/?tag=%e4%b8%80%e7%95%aa%e8%b3%9e" title="一番賞"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">一番賞</a>
                                                </li>
                                                <li><a href="/?tag=%e9%81%8a%e6%88%b2%e7%8e%8b" title="遊戲王"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">遊戲王</a>
                                                </li>
                                                <li><a href="/?tag=bandai-spirits" title="BANDAI SPIRITS"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">BANDAI
                                                        SPIRITS</a></li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=24"
                                                onclick="ga('send', 'event', 'PC_items_author_動感光啵_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="動感光啵">動感光啵</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card good72890">

                                <!-- <div id="div-gpt-ad-1548828697716-0">
                                    <script>
                                        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1548828697716-0'); });
                                    </script>
                                </div> -->
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=87276"
                                        style="background-image:url('https://img.toy-people.com/member/17081414464_1200.jpg')"
                                        title="threezero DLX 系列《無限傳說》鋼鐵人馬克50（黑金版）雙眼與胸口射出魄力紅光！"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_threezero DLX 系列《無限傳說》鋼鐵人馬克50（黑金版）雙眼與胸口射出魄力紅光！', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87276" title="threezero DLX 系列《無限傳說》鋼鐵人馬克50（黑金版）雙眼與胸口射出魄力紅光！"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_threezero DLX 系列《無限傳說》鋼鐵人馬克50（黑金版）雙眼與胸口射出魄力紅光！', 'click');">threezero
                                            DLX 系列《無限傳說》鋼鐵人馬克50（黑金版）雙眼與胸口射出魄力紅光！</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 1天前</span>
                                        <span class="release_date"><i class="fa fa-calendar" aria-hidden="true"></i>
                                            預定發售：2024年2月 - 2024年3月</span>
                                    </div>
                                    <p>香港玩具廠牌 threezero 近日於旗下「DLX」系列發表了出自 MARVEL《無限傳說 (The Infinity Saga) 》的最新商品「鋼鐵人馬克50
                                        (黑金版) 」可動人偶！身在台灣的玩具人可以在即將於高雄夢時代購物中心 8 樓舉辦的【W ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=marvel" title="MARVEL"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">MARVEL</a>
                                                </li>
                                                <li><a href="/?tag=%e9%8b%bc%e9%90%b5%e4%ba%ba" title="鋼鐵人"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">鋼鐵人</a>
                                                </li>
                                                <li><a href="/?tag=threezero" title="Threezero"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">Threezero</a>
                                                </li>
                                                <li><a href="/?tag=%e5%8f%af%e5%8b%95%e4%ba%ba%e5%81%b6" title="可動人偶"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">可動人偶</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=19"
                                                onclick="ga('send', 'event', 'PC_items_author_脆笛捲心酥_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="脆笛捲心酥">脆笛捲心酥</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=87266"
                                        style="background-image:url('https://img.toy-people.com/member/170808649097_1200.jpg')"
                                        title="黏土人《迷宮飯》奇爾查克 我最討厭寶箱怪！"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_黏土人《迷宮飯》奇爾查克 我最討厭寶箱怪！', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87266" title="黏土人《迷宮飯》奇爾查克 我最討厭寶箱怪！" class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_黏土人《迷宮飯》奇爾查克 我最討厭寶箱怪！', 'click');">黏土人《迷宮飯》奇爾查克
                                            我最討厭寶箱怪！</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 1天前</span>
                                        <span class="release_date"><i class="fa fa-calendar" aria-hidden="true"></i>
                                            預定發售：2024年9月</span>
                                    </div>
                                    <p>日本玩具公司Good Smile
                                        Company暢銷熱賣的「黏土人」（ねんどろいど）系列，預定於2024年9月推出人氣動漫作品《迷宮飯》（ダンジョン飯）中，與主角萊歐斯一起同行的夥伴之一的「奇爾查克」（チルチャック），售價6
                                        ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=%e9%bb%8f%e5%9c%9f%e4%ba%ba" title="黏土人"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">黏土人</a>
                                                </li>
                                                <li><a href="/?tag=good-mile-company" title="GOOD MILE COMPANY"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">GOOD
                                                        MILE COMPANY</a></li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=23"
                                                onclick="ga('send', 'event', 'PC_items_author_遊戲小虎_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="遊戲小虎">遊戲小虎</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=10" title="活動展覽"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">活動展覽</a>
                                    </div>
                                    <a href="/?p=87235"
                                        style="background-image:url('https://img.toy-people.com/member/170807153789_1200.png')"
                                        title="GOODSMILE【Mecha Smile Impact 機械模型祭 2024 WINTER in 台灣】現場報導"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_GOODSMILE【Mecha Smile Impact 機械模型祭 2024 WINTER in 台灣】現場報導', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87235"
                                            title="GOODSMILE【Mecha Smile Impact 機械模型祭 2024 WINTER in 台灣】現場報導"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_GOODSMILE【Mecha Smile Impact 機械模型祭 2024 WINTER in 台灣】現場報導', 'click');">GOODSMILE【Mecha
                                            Smile Impact 機械模型祭 2024 WINTER in 台灣】現場報導</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 1天前</span>
                                    </div>
                                    <p>來，各位玩具人跟我一起大喊一聲 SUPER！今天我們玩具探險隊在開工之後首度出動、來到位於台北地下街 12 號廣場，參加由日本 GOOD SMILE COMPANY
                                        舉辦的「Mecha Smile Impact 機械模型祭 2024 WINTER in Taiwan」， ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=good-smile-company" title="GOOD SMILE COMPANY"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">GOOD
                                                        SMILE COMPANY</a></li>
                                                <li><a href="/?tag=%e9%ad%94%e5%8b%95%e7%8e%8b" title="魔動王"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">魔動王</a>
                                                </li>
                                                <li><a href="/?tag=%e7%b5%84%e8%a3%9d%e6%a8%a1%e5%9e%8b" title="組裝模型"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">組裝模型</a>
                                                </li>
                                                <li><a href="/?tag=moderoid" title="MODEROID"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">MODEROID</a>
                                                </li>
                                                <li><a href="/?tag=the%E5%90%88%E9%AB%94" title="THE合體"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">THE合體</a>
                                                </li>
                                                <li><a href="/?tag=%E5%8B%87%E8%80%85%E7%B3%BB%E5%88%97" title="勇者系列"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">勇者系列</a>
                                                </li>
                                                <li><a href="/?tag=%E5%8B%87%E6%B0%A3%E7%88%86%E7%99%BC" title="勇氣爆發"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">勇氣爆發</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=19"
                                                onclick="ga('send', 'event', 'PC_items_author_脆笛捲心酥_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="脆笛捲心酥">脆笛捲心酥</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=12" title="日刊電電"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">日刊電電</a>
                                    </div>
                                    <a href="/?p=87257"
                                        style="background-image:url('https://img.toy-people.com/member/170807101881_360.png')"
                                        title="24種人物款式不怕找不到想要的！《七龍珠》⨉HIPSHOP推出聯名四角內褲系列"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_24種人物款式不怕找不到想要的！《七龍珠》⨉HIPSHOP推出聯名四角內褲系列', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87257" title="24種人物款式不怕找不到想要的！《七龍珠》⨉HIPSHOP推出聯名四角內褲系列"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_24種人物款式不怕找不到想要的！《七龍珠》⨉HIPSHOP推出聯名四角內褲系列', 'click');">24種人物款式不怕找不到想要的！《七龍珠》⨉HIPSHOP推出聯名四角內褲系列</a>
                                    </h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 2天前</span>
                                    </div>
                                    <p>
                                        過去曾和《數碼寶貝大冒險》與《機動戰士鋼彈》等動漫 IP 合作的日本內褲品牌「HIPSHOP」，最近宣布將與經典人氣動漫作品《七龍珠》合作，一次推出多達 24
                                        款的聯名四角內褲，幾乎每種人物都有機會讓你藏在褲檔裡， ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=%e4%b8%83%e9%be%8d%e7%8f%a0" title="七龍珠"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">七龍珠</a>
                                                </li>
                                                <li><a href="/?tag=%e6%9c%8d%e9%a3%be%e7%b3%bb%e5%88%97" title="服飾系列"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">服飾系列</a>
                                                </li>
                                                <li><a href="/?tag=acg" title="ACG"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">ACG</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="https://www.toy-people.com/denden?author=7751"
                                                onclick="ga('send', 'event', 'PC_items_author_神戶忍者龜_玩具人Toy People News', 'click');"><img
                                                    src="https://img.toy-people.com/cover/7751.jpg" alt="神戶忍者龜"
                                                    onerror="this.src='../../assets/toy_logo.svg';">神戶忍者龜</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=1786" title="投稿"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">投稿</a>
                                    </div>
                                    <a href="/?p=87262"
                                        style="background-image:url('https://img.toy-people.com/member/170789793889_1200.jpg')"
                                        title="可愛技師  figma RACING MIKU 2020 ver."
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_可愛技師  figma RACING MIKU 2020 ver.', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87262" title="可愛技師  figma RACING MIKU 2020 ver." class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_可愛技師  figma RACING MIKU 2020 ver.', 'click');">可愛技師
                                            figma RACING MIKU 2020 ver.</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 2天前</span>
                                    </div>
                                    <p>由Good Smile Company 旗下可動 Figma系列出品，《初音未來GT計畫》專用角色「初音未來 RACING
                                        Ver.2020」化身為figma可動模型，參考售價8800日圓來源於人氣繪師LEN[A-7]所繪製的插圖，整體活潑可愛，帶有陽光的笑容 ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=%e9%96%8b%e7%ae%b1%e6%8a%95%e7%a8%bf" title="開箱投稿"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">開箱投稿</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="https://www.toy-people.com/profiles-12610"
                                                onclick="ga('send', 'event', 'PC_items_author_submission_哇喜阿水_玩具人Toy People News', 'click');"><img
                                                    src="https://img.toy-people.com/cover/12610.jpg" alt="哇喜阿水"
                                                    onerror="this.src='../../assets/toy_logo.svg';">哇喜阿水</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=1786" title="投稿"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">投稿</a>
                                    </div>
                                    <a href="/?p=87258"
                                        style="background-image:url('https://img.toy-people.com/member/170646517356_1200.JPG')"
                                        title="【大漫匠】老婆會生氣的玩具! 核金重構 雷霆特遣隊 芭貝拉.紅 1/9 包膠機娘 沒有細節!!"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_【大漫匠】老婆會生氣的玩具! 核金重構 雷霆特遣隊 芭貝拉.紅 1/9 包膠機娘 沒有細節!!', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87258" title="【大漫匠】老婆會生氣的玩具! 核金重構 雷霆特遣隊 芭貝拉.紅 1/9 包膠機娘 沒有細節!!"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_【大漫匠】老婆會生氣的玩具! 核金重構 雷霆特遣隊 芭貝拉.紅 1/9 包膠機娘 沒有細節!!', 'click');">【大漫匠】老婆會生氣的玩具!
                                            核金重構 雷霆特遣隊 芭貝拉.紅 1/9 包膠機娘 沒有細節!!</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 2天前</span>
                                    </div>
                                    <p>這是一款由大漫匠出品的核金重構 雷霆特遣隊 人偶比例為1/9 全素體包膠，包膠使用它們自家研發的包膠材質標榜五大特色:不出油 不爆膠 不發黃 不沾手
                                        不需要上爽身粉保養。雖然是如此標榜不過包膠玩具還是怕長時間把 ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=%e9%96%8b%e7%ae%b1%e6%8a%95%e7%a8%bf" title="開箱投稿"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">開箱投稿</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="https://www.toy-people.com/profiles-590"
                                                onclick="ga('send', 'event', 'PC_items_author_submission_杜少_玩具人Toy People News', 'click');"><img
                                                    src="https://img.toy-people.com/cover/590.jpg" alt="杜少"
                                                    onerror="this.src='../../assets/toy_logo.svg';">杜少</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=87204"
                                        style="background-image:url('https://img.toy-people.com/member/170806745217_1200.jpg')"
                                        title="ANIPLEX+『BUZZmod. 劇場版城市獵人天使之淚 冴羽獠』可動人偶 附可替換的好色愛心眼！"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_ANIPLEX+『BUZZmod. 劇場版城市獵人天使之淚 冴羽獠』可動人偶 附可替換的好色愛心眼！', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87204" title="ANIPLEX+『BUZZmod. 劇場版城市獵人天使之淚 冴羽獠』可動人偶 附可替換的好色愛心眼！"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_ANIPLEX+『BUZZmod. 劇場版城市獵人天使之淚 冴羽獠』可動人偶 附可替換的好色愛心眼！', 'click');">ANIPLEX+『BUZZmod.
                                            劇場版城市獵人天使之淚 冴羽獠』可動人偶 附可替換的好色愛心眼！</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 2天前</span>
                                        <span class="release_date"><i class="fa fa-calendar" aria-hidden="true"></i>
                                            預定發售：2024年11月</span>
                                    </div>
                                    <p>日本 Aniplex 公司旗下可動人偶系列 BUZZmod.（バズモッド），將以人氣動畫《劇場版城市獵人天使之淚》為主題，推出最新商品「BUZZmod.冴羽獠」1/12
                                        比例可動人偶！參考售價為 12,000 日圓，預計將在 2024 年 11 月 ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=%e5%8f%af%e5%8b%95%e4%ba%ba%e5%81%b6" title="可動人偶"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">可動人偶</a>
                                                </li>
                                                <li><a href="/?tag=aniplex" title="ANIPLEX"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">ANIPLEX</a>
                                                </li>
                                                <li><a href="/?tag=%e5%9f%8e%e5%b8%82%e7%8d%b5%e4%ba%ba" title="城市獵人"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">城市獵人</a>
                                                </li>
                                                <li><a href="/?tag=buzzmod." title="BUZZmod."
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">BUZZmod.</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=24"
                                                onclick="ga('send', 'event', 'PC_items_author_動感光啵_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="動感光啵">動感光啵</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=12" title="日刊電電"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">日刊電電</a>
                                    </div>
                                    <a href="/?p=87250"
                                        style="background-image:url('https://img.toy-people.com/member/170806156581_360.png')"
                                        title="魔法少女與你一起享受音樂！ONKYO⨉《魔法少女小圓》聯名真無線藍牙耳機"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_魔法少女與你一起享受音樂！ONKYO⨉《魔法少女小圓》聯名真無線藍牙耳機', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87250" title="魔法少女與你一起享受音樂！ONKYO⨉《魔法少女小圓》聯名真無線藍牙耳機" class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_魔法少女與你一起享受音樂！ONKYO⨉《魔法少女小圓》聯名真無線藍牙耳機', 'click');">魔法少女與你一起享受音樂！ONKYO⨉《魔法少女小圓》聯名真無線藍牙耳機</a>
                                    </h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 2天前</span>
                                    </div>
                                    <p>
                                        時常與許多動漫 IP 合作的日本耳機品牌 ONKYO，先前曾與《進擊的巨人》、《戀上換裝娃娃》與《【我推的孩子】 》等作品合作過。
                                        這次宣布與預計今年冬天上映全新劇場版的《魔法少女小圓》 合作，推出聯名款樣式的 ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=3c" title="3C"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">3C</a>
                                                </li>
                                                <li><a href="/?tag=%e8%97%8d%e7%89%99%e8%80%b3%e6%a9%9f" title="藍牙耳機"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">藍牙耳機</a>
                                                </li>
                                                <li><a href="/?tag=acg" title="ACG"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">ACG</a>
                                                </li>
                                                <li><a href="/?tag=%e9%ad%94%e6%b3%95%e5%b0%91%e5%a5%b3%e5%b0%8f%e5%9c%93"
                                                        title="魔法少女小圓"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">魔法少女小圓</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="https://www.toy-people.com/denden?author=7751"
                                                onclick="ga('send', 'event', 'PC_items_author_神戶忍者龜_玩具人Toy People News', 'click');"><img
                                                    src="https://img.toy-people.com/cover/7751.jpg" alt="神戶忍者龜"
                                                    onerror="this.src='../../assets/toy_logo.svg';">神戶忍者龜</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=87251"
                                        style="background-image:url('https://img.toy-people.com/member/170806538991_1200.jpg')"
                                        title="萬代『HUNTER×HUNTER獵人 坐下隊3』轉蛋 Q版的蟻王與小麥 重現下棋經典場景！"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_萬代『HUNTER×HUNTER獵人 坐下隊3』轉蛋 Q版的蟻王與小麥 重現下棋經典場景！', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87251" title="萬代『HUNTER×HUNTER獵人 坐下隊3』轉蛋 Q版的蟻王與小麥 重現下棋經典場景！"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_萬代『HUNTER×HUNTER獵人 坐下隊3』轉蛋 Q版的蟻王與小麥 重現下棋經典場景！', 'click');">萬代『HUNTER×HUNTER獵人
                                            坐下隊3』轉蛋 Q版的蟻王與小麥 重現下棋經典場景！</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 2天前</span>
                                        <span class="release_date"><i class="fa fa-calendar" aria-hidden="true"></i>
                                            預定發售：2024年2月</span>
                                    </div>
                                    <p>日本萬代 BANDAI 玩具公司轉蛋事業部 GASHAPON
                                        旗下以坐姿勢為造型的「坐下隊（すわらせ隊）」系列，將推出人氣動漫《HUNTER×HUNTER》的最新商品：「HUNTER×HUNTER坐下隊3」轉蛋，一共有四種款式，一轉參考售價為
                                        ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=bandai" title="BANDAI"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">BANDAI</a>
                                                </li>
                                                <li><a href="/?tag=%e8%bd%89%e8%9b%8b%e6%89%ad%e8%9b%8b" title="轉蛋&amp;扭蛋"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">轉蛋&amp;扭蛋</a>
                                                </li>
                                                <li><a href="/?tag=hunter%c3%97hunter-%e7%8d%b5%e4%ba%ba"
                                                        title="HUNTER×HUNTER 獵人"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">HUNTER×HUNTER
                                                        獵人</a></li>
                                                <li><a href="/?tag=gashapon" title="Gashapon"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">Gashapon</a>
                                                </li>
                                                <li><a href="/?tag=%E6%89%AD%E8%9B%8B" title="扭蛋"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">扭蛋</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=24"
                                                onclick="ga('send', 'event', 'PC_items_author_動感光啵_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="動感光啵">動感光啵</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=87002"
                                        style="background-image:url('https://img.toy-people.com/member/170806416696_1200.jpg')"
                                        title="壽屋『我想成為影之強者！戴爾塔 ED Ver.』1/7比例模型 再現可愛又不失性感的豪放M字蹲！"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_壽屋『我想成為影之強者！戴爾塔 ED Ver.』1/7比例模型 再現可愛又不失性感的豪放M字蹲！', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87002" title="壽屋『我想成為影之強者！戴爾塔 ED Ver.』1/7比例模型 再現可愛又不失性感的豪放M字蹲！"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_壽屋『我想成為影之強者！戴爾塔 ED Ver.』1/7比例模型 再現可愛又不失性感的豪放M字蹲！', 'click');">壽屋『我想成為影之強者！戴爾塔
                                            ED Ver.』1/7比例模型 再現可愛又不失性感的豪放M字蹲！</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 2天前</span>
                                        <span class="release_date"><i class="fa fa-calendar" aria-hidden="true"></i>
                                            預定發售：2024年9月</span>
                                    </div>
                                    <p>日本玩具公司 壽屋（KOTOBUKIYA），旗下 1/7 比例 PVC 模型系列，推出出自人氣動畫《我想成為影之強者！》為主題的新作商品「戴爾塔 ED
                                        Ver.」，參考售價為 19,800 日元，目前已開放預購，預計將於 2024 年 09 月發 ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=%e5%a3%bd%e5%b1%8b" title="壽屋"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">壽屋</a>
                                                </li>
                                                <li><a href="/?tag=%e7%be%8e%e5%b0%91%e5%a5%b3pvc" title="美少女PVC"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">美少女PVC</a>
                                                </li>
                                                <li><a href="/?tag=17" title="1/7"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">1/7</a>
                                                </li>
                                                <li><a href="/?tag=%E6%88%91%E6%83%B3%E6%88%90%E7%82%BA%E5%BD%B1%E4%B9%8B%E5%BC%B7%E8%80%85"
                                                        title="我想成為影之強者"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">我想成為影之強者</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=24"
                                                onclick="ga('send', 'event', 'PC_items_author_動感光啵_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="動感光啵">動感光啵</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=87218"
                                        style="background-image:url('https://img.toy-people.com/member/170806045489_1200.jpg')"
                                        title="黏土人『工作貓』搞笑登場！表情充滿嘲諷、戴著安全帽的標誌造型立體化"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_黏土人『工作貓』搞笑登場！表情充滿嘲諷、戴著安全帽的標誌造型立體化', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87218" title="黏土人『工作貓』搞笑登場！表情充滿嘲諷、戴著安全帽的標誌造型立體化" class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_黏土人『工作貓』搞笑登場！表情充滿嘲諷、戴著安全帽的標誌造型立體化', 'click');">黏土人『工作貓』搞笑登場！表情充滿嘲諷、戴著安全帽的標誌造型立體化</a>
                                    </h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 2天前</span>
                                        <span class="release_date"><i class="fa fa-calendar" aria-hidden="true"></i>
                                            預定發售：2024年8月</span>
                                    </div>
                                    <p>由日本 GOOD SMILE COMPANY 發行，旗下種類超過千款的人氣商品「黏土人」系列，發表了以《工作貓》為主題的最新商品「黏土人 工作貓」可動人偶！參考售價為
                                        4,500 日圓，預計於 2024 年 08 月發售。
                                        日本插畫家「く ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=%e9%bb%8f%e5%9c%9f%e4%ba%ba" title="黏土人"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">黏土人</a>
                                                </li>
                                                <li><a href="/?tag=%e5%8f%af%e5%8b%95%e4%ba%ba%e5%81%b6" title="可動人偶"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">可動人偶</a>
                                                </li>
                                                <li><a href="/?tag=good-mile-company" title="GOOD MILE COMPANY"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">GOOD
                                                        MILE COMPANY</a></li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=24"
                                                onclick="ga('send', 'event', 'PC_items_author_動感光啵_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="動感光啵">動感光啵</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=87217"
                                        style="background-image:url('https://img.toy-people.com/member/170805920040_1200.jpg')"
                                        title="PROOF『戀上換裝娃娃 喜多川海夢 莉茲ver.』1/7比例模型 香到不行的小淫魔登場！"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_PROOF『戀上換裝娃娃 喜多川海夢 莉茲ver.』1/7比例模型 香到不行的小淫魔登場！', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87217" title="PROOF『戀上換裝娃娃 喜多川海夢 莉茲ver.』1/7比例模型 香到不行的小淫魔登場！"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_PROOF『戀上換裝娃娃 喜多川海夢 莉茲ver.』1/7比例模型 香到不行的小淫魔登場！', 'click');">PROOF『戀上換裝娃娃
                                            喜多川海夢 莉茲ver.』1/7比例模型 香到不行的小淫魔登場！</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 2天前</span>
                                        <span class="release_date"><i class="fa fa-calendar" aria-hidden="true"></i>
                                            預定發售：2024年8月</span>
                                    </div>
                                    <p>發行各類動漫畫角色週邊商品的株式会社 PROOF，發表了以 TV 動畫《戀上換裝娃娃》為主題的最新商品「喜多川海夢 莉茲ver.」1/7 比例模型！參考售價為
                                        24,200 日圓，預計將於 2024 年 08 月發售。
                                        日本漫畫家福田晉 ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=%e7%be%8e%e5%b0%91%e5%a5%b3pvc" title="美少女PVC"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">美少女PVC</a>
                                                </li>
                                                <li><a href="/?tag=17" title="1/7"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">1/7</a>
                                                </li>
                                                <li><a href="/?tag=%E6%88%80%E4%B8%8A%E6%8F%9B%E8%A3%9D%E5%A8%83%E5%A8%83"
                                                        title="戀上換裝娃娃"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">戀上換裝娃娃</a>
                                                </li>
                                                <li><a href="/?tag=proof" title="PROOF"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">PROOF</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=24"
                                                onclick="ga('send', 'event', 'PC_items_author_動感光啵_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="動感光啵">動感光啵</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card list">
                                <div class="image">
                                    <div class="tags"><a href="/?cat=8" title="玩具新聞"
                                            onclick="ga('send', 'event', 'PC_items_cat_玩具人Toy People News', 'click');">玩具新聞</a>
                                    </div>
                                    <a href="/?p=87247"
                                        style="background-image:url('https://img.toy-people.com/member/170805788796_1200.jpg')"
                                        title="『POP UP PARADE 安妮亞‧佛傑 外出Ver.』哇苦哇苦出門迌迌的可愛造型！"
                                        onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_『POP UP PARADE 安妮亞‧佛傑 外出Ver.』哇苦哇苦出門迌迌的可愛造型！', 'click');"></a>
                                </div>
                                <div class="text">
                                    <h2><a href="/?p=87247" title="『POP UP PARADE 安妮亞‧佛傑 外出Ver.』哇苦哇苦出門迌迌的可愛造型！"
                                            class="bold_face"
                                            onclick="ga('send', 'event', 'PC_items_link_玩具人Toy People News_『POP UP PARADE 安妮亞‧佛傑 外出Ver.』哇苦哇苦出門迌迌的可愛造型！', 'click');">『POP
                                            UP PARADE 安妮亞‧佛傑 外出Ver.』哇苦哇苦出門迌迌的可愛造型！</a></h2>
                                    <div class="info gray">
                                        <span class="times"><i class="fa fa-clock-o"></i> 2天前</span>
                                        <span class="release_date"><i class="fa fa-calendar" aria-hidden="true"></i>
                                            預定發售：2024年7月</span>
                                    </div>
                                    <p>日本 GOOD SMILE COMPANY 推出的平價塗裝完成品系列「POP UP PARADE」，以人氣作品《SPYxFAMILY 間諜家家酒》為主題，推出「POP
                                        UP PARADE 安妮亞‧佛傑 外出ver.」PVC模型！參考售價為 4,800 日圓，預計將於 2024 ...</p>
                                    <div class="tagline">
                                        <div class="tag">
                                            <ul>
                                                <li><a href="/?tag=good-smile-company" title="GOOD SMILE COMPANY"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">GOOD
                                                        SMILE COMPANY</a></li>
                                                <li><a href="/?tag=pop-up-parade" title="POP UP PARADE"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">POP
                                                        UP PARADE</a></li>
                                                <li><a href="/?tag=spy%c3%97family%e9%96%93%e8%ab%9c%e5%ae%b6%e5%ae%b6%e9%85%92"
                                                        title="SPY×FAMILY間諜家家酒"
                                                        onclick="ga('send', 'event', 'PC_items_tag_玩具人Toy People News', 'click');">SPY×FAMILY間諜家家酒</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="author">
                                            <a href="/?author=24"
                                                onclick="ga('send', 'event', 'PC_items_author_動感光啵_玩具人Toy People News', 'click');"><img
                                                    src="../assets/toy_logo.svg" alt="動感光啵">動感光啵</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="pageNavi">
                        <div class="wp-pagenavi">
                            <span><i class="fa fa-chevron-left"></i> 上一頁</span>
                            <span class="current">1</span>
                            <a href="/?paged=2" onclick="ga('send', 'event', 'PC_pageNavi', 'click');">2</a>
                            <a href="/?paged=3" onclick="ga('send', 'event', 'PC_pageNavi', 'click');">3</a>
                            <a href="/?paged=4" onclick="ga('send', 'event', 'PC_pageNavi', 'click');">4</a>
                            <span>...</span>
                            <a href="/?paged=1856" onclick="ga('send', 'event', 'PC_pageNavi', 'click');">1856</a>
                            <a href="/?paged=2" class="next" onclick="ga('send', 'event', 'PC_pageNavi', 'click');">下一頁 <i
                                    class="fa fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <aside class="aside-right-sidebar">
                    <div id="sidebar" class="right" data-sticky_column>
                        <div class="Right_SlideShow">
                            <div class="bx-wrapper">
                                <div class="bx-viewport">
                                    <div class="bx-wrapper">
                                        <div class="bx-viewport">
                                            <ul class="bxslider Right_SlideShow_bxslider">
                                                <li
                                                    style="background:url('https://img.toy-people.com/member/170712856627.png');background-size: cover;">
                                                    <a href="https://www.toy-people.com/?p=87065"
                                                        onclick="ga('send', 'event', 'Right_SlideShow_網路熱議_原宿服飾店遭竊可愛女員工上電視爆紅 網友驚呼 : 不敢相信居然38歲了！', 'click');">
                                                        <div class="box"><span>網路熱議</span>
                                                            <p>原宿服飾店遭竊可愛女員工上電視爆紅 網友驚呼 : 不敢相信居然38歲了！</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li
                                                    style="background:url('https://img.toy-people.com/member/170651807482.png');background-size: cover;">
                                                    <a href="https://www.toy-people.com/?p=86848"
                                                        onclick="ga('send', 'event', 'Right_SlideShow_流行飾品_替身幻化品味風情！萬代《JOJO的奇妙冒險 星塵遠征軍》花京院典明&伊奇項鍊&耳飾', 'click');">
                                                        <div class="box"><span>流行飾品</span>
                                                            <p>替身幻化品味風情！萬代《JOJO的奇妙冒險 星塵遠征軍》花京院典明&伊奇項鍊&耳飾</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li
                                                    style="background:url('https://img.toy-people.com/member/170668123119.png');background-size: cover;">
                                                    <a href="https://www.toy-people.com/?p=86915"
                                                        onclick="ga('send', 'event', 'Right_SlideShow_潮流鞋款_虛擬歌姬也有絕美專屬鞋！ 《初音未來》✕ MAYLA聯名高跟鞋華麗上市', 'click');">
                                                        <div class="box"><span>潮流鞋款</span>
                                                            <p>虛擬歌姬也有絕美專屬鞋！ 《初音未來》✕ MAYLA聯名高跟鞋華麗上市</p>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card rightAd_300250 toy_rightAd_300250">
                            <iframe src="https://www.toy-people.com/banner.php?type=BToyTrading" scrolling="no"
                                frameborder="0" style="width:300px;height:250px;border:0px;"></iframe>
                        </div>
                        <div class="rightbanner-div" hidden></div>

                        <div class="card hotnews">
                            <h3 class="headline_title">今日發燒</h3>
                            <ul>
                                <li>
                                    <a href="//www.toy-people.com/?p=87267"
                                        onclick="ga('send', 'event', 'right_Hot_news_toy', 'click');">
                                        <span>1</span>

                                        <div class="text">超合金『MSN-04FF 沙薩比』豪華合金零件、發光機構再現福岡立像版造型！</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="//www.toy-people.com/?p=87235"
                                        onclick="ga('send', 'event', 'right_Hot_news_toy', 'click');">
                                        <span>2</span>

                                        <div class="text">GOODSMILE【Mecha Smile Impact 機械模型祭 2024 WINTER in 台灣】現場報導</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="//www.toy-people.com/?p=87293"
                                        onclick="ga('send', 'event', 'right_Hot_news_toy', 'click');">
                                        <span>3</span>

                                        <div class="text">散發木材香氣的鋼普拉『ENTRY GRADE 1/144 RX-78-2 鋼彈［復古配色］』正式發表！</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="//www.toy-people.com/?p=87286"
                                        onclick="ga('send', 'event', 'right_Hot_news_toy', 'click');">
                                        <span>4</span>

                                        <div class="text">GSC《葬送的芙莉蓮》POP UP PARADE 芙莉蓮、黏土人 欣梅爾...新作原型發表！【WonHobby38】</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="//www.toy-people.com/?p=87287"
                                        onclick="ga('send', 'event', 'right_Hot_news_toy', 'click');">
                                        <span>5</span>

                                        <div class="text">eStream『劇場版 SPY×FAMILY CODE: White 安妮亞&彭德』1/7比例場景模型 雪國場景好興奮★</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="//www.toy-people.com/?p=87276"
                                        onclick="ga('send', 'event', 'right_Hot_news_toy', 'click');">
                                        <span>6</span>

                                        <div class="text">threezero DLX 系列《無限傳說》鋼鐵人馬克50（黑金版）雙眼與胸口射出魄力紅光！</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="//www.toy-people.com/?p=87291"
                                        onclick="ga('send', 'event', 'right_Hot_news_toy', 'click');">
                                        <span>7</span>

                                        <div class="text">壽屋『M.S.G 重武裝組件46 /47 槍刃騎槍2』人氣複合式武裝升級再登場！</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="//www.toy-people.com/?p=87284"
                                        onclick="ga('send', 'event', 'right_Hot_news_toy', 'click');">
                                        <span>8</span>

                                        <div class="text">GSC《我推的孩子》黏土人MEM醬、舔小蘇打粉的天才童星...多款新作情報公開！【WonHobby38】</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="//www.toy-people.com/?p=87270"
                                        onclick="ga('send', 'event', 'right_Hot_news_toy', 'click');">
                                        <span>9</span>

                                        <div class="text">Max Factory《戀上換裝娃娃》喜多川海夢 1/7立體人形</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="//www.toy-people.com/?p=87282"
                                        onclick="ga('send', 'event', 'right_Hot_news_toy', 'click');">
                                        <span>10</span>

                                        <div class="text">Tweeterhead《太空超人》骷髏王與紫豹（Skeletor & Panthor）經典豪華版 1/6 比例全身雕像</div>
                                    </a>
                                </li>
                            </ul>
                            <div class="more_link"><a href="newsrank">更多今日發燒 <i class="fa fa-chevron-right"
                                        aria-hidden="true"></i></a></div>
                            <div class="more_link"><a href="https://www.toy-people.com/newsrank-month">本月發燒 <i
                                        class="fa fa-chevron-right" aria-hidden="true"></i></a></div>
                        </div>
                        <div class="card rightAd_3002502">

                            <!-- <div id="div-gpt-ad-1554775828673-0">
                            <script>
                                googletag.cmd.push(function() { googletag.display('div-gpt-ad-1554775828673-0'); });
                            </script>
                        </div> -->
                        </div>
                        <div class="card hot-keyword">
                            <h3 class="headline_title">熱門字</h3>
                            <nav class="hot-tags">
                                <ul>
                                    <li>
                                        <a href="/?p=86841" class>全能攻擊自由鋼彈</a>
                                        <a href="/?p=86899" class>幻獸帕魯</a>
                                        <a href="/?p=74623" class>浪人崛起</a>
                                        <a href="/?p=84137" class>振揚自由鋼彈</a>
                                        <a href="/?p=86944" class>死​​亡擱淺2</a>
                                        <a href="/?p=80970" class>魔法咪路咪路</a>
                                        <a href="/?p=86893" class>非紳士戰爭部</a>
                                        <a href="/?p=84737" class>夢想成為魔法少女</a>
                                        <a href="/?p=84669" class>間諜家家酒劇場版</a>
                                        <a href="/?p=85587" class>8號出口</a>
                                        <a href="/?p=82291" class>V世代</a>
                                        <a href="/?p=86738" class="new">2024台北國際電玩展</a>
                                        <a href="/?p=84637" class>欣梅爾</a>
                                        <a href="/?p=84864" class>故事之神</a>
                                        <a href="/?p=85392" class>異塵餘生</a>
                                        <a href="/?tag=一番賞" class>一番賞</a>
                                        <a href="/?p=83292" class>索隆</a>
                                        <a href="/?p=86836" class>機動戰士鋼彈SEED FREEDOM</a>
                                        <a href="/?p=81365" class>降世神通</a>
                                        <a href="/?p=82614" class>Switch 2</a>
                                        <a href="/?p=79548" class>少年謝爾頓</a>
                                        <a href="/?p=81199" class>薩卡班甲魚</a>
                                        <a href="/?p=77197" class>猩球崛起4</a>
                                        <a href="/?p=84444" class>哥吉拉 1.0</a>
                                        <a href="/?p=76348" class>長澤茉里奈</a>
                                        <a href="/?p=86613" class="new">勇氣爆發</a>
                                        <a href="/?p=83397" class>尾田榮一郎</a>
                                        <a href="/?p=85724" class>勇氣千尋 安土桃</a>
                                        <a href="/?p=84225" class>沈默騙局</a>
                                        <a href="/?p=76671" class>諫山創</a>
                                        <a href="/?p=73030" class>風靈鋼彈</a>
                                        <a href="/?p=43096" class>金證銀證</a>
                                        <a href="/?p=59299" class>WCF</a>
                                        <a href="/?p=57483" class>景品</a>
                                        <a href="/?tag=鋼彈系列" class>鋼彈</a>
                                        <a href="/?p=53598" class>食玩</a>
                                        <a href="/?p=58495" class>GK</a>
                                        <a href="/?p=44687" class>終極戰士</a>
                                        <a href="/?p=60341" class>一番賞是什麼</a>
                                    </li>
                                </ul>
                            </nav>
                            <span class="show-button"></span>
                        </div>
                        <div id="right_bottom_videoAD"></div>
                        <div class="card right_bottom_bb">
                            <!-- <div id="div-gpt-ad-right_bottom_300600-0">
                            <script>
                                googletag.cmd.push(function() { googletag.display('div-gpt-ad-right_bottom_300600-0'); });
                            </script>
                        </div> -->
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </main>
    <div>
        <strong>Hello There</strong>
    </div>
    <footer class="footer-div">
        <div id="footer">
            <!-- <link rel="stylesheet" href="js/swiper/swiper-bundle.min.css?1" /> -->

            <div class="footer_recommend">
                <div class="swiper mySwiper footer_recommend_body">
                    <div class="content-box-title">
                        <h3>推薦閱讀</h3>
                    </div>
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <a href="https://www.toy-people.com/?p=51309" target="_blank"
                                onclick="gtag('event', 'click_PC', {'event_category': 'PC_footer_recommend','event_label': 'PC_footer_recommend_閃電俠、超人、快銀誰比較快？曾在漫威的連載跑贏所有漫威宇宙的辣個男人'});">
                                <div class="img"><img src="https://img.toy-people.com/member/16107323767.jpg"
                                        alt="閃電俠、超人、快銀誰比較快？曾在漫威的連載跑贏所有漫威宇宙的辣個男人" width="320" height="220"></div>
                                <div class="text">
                                    <p>閃電俠、超人、快銀誰比較快？曾在漫威的連載跑贏所有漫威宇宙的辣個男人</p>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="https://www.toy-people.com/?p=51295" target="_blank"
                                onclick="gtag('event', 'click_PC', {'event_category': 'PC_footer_recommend','event_label': 'PC_footer_recommend_【鋼彈專題】單眼的「鋼彈」？《獨眼鋼彈》介紹(一)'});">
                                <div class="img"><img src="https://img.toy-people.com/member/161073237772.jpg"
                                        alt="【鋼彈專題】單眼的「鋼彈」？《獨眼鋼彈》介紹(一)" width="320" height="220"></div>
                                <div class="text">
                                    <p>【鋼彈專題】單眼的「鋼彈」？《獨眼鋼彈》介紹(一)</p>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="https://www.toy-people.com/?p=52869" target="_blank"
                                onclick="gtag('event', 'click_PC', {'event_category': 'PC_footer_recommend','event_label': 'PC_footer_recommend_【冷知識】金肉人與日本三大牛丼連鎖店 吉野家、すき家、なか卯的恩怨情仇史？'});">
                                <div class="img"><img src="https://img.toy-people.com/member/161073467142.jpg"
                                        alt="【冷知識】金肉人與日本三大牛丼連鎖店 吉野家、すき家、なか卯的恩怨情仇史？" width="320" height="220"></div>
                                <div class="text">
                                    <p>【冷知識】金肉人與日本三大牛丼連鎖店 吉野家、すき家、なか卯的恩怨情仇史？</p>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="https://www.toy-people.com/?p=61993" target="_blank"
                                onclick="gtag('event', 'click_PC', {'event_category': 'PC_footer_recommend','event_label': 'PC_footer_recommend_【迷因冷知識】除了「想想！馬克！」外，你知道這些迷因的來源都是出自哪部美漫作品嗎？'});">
                                <div class="img"><img src="https://img.toy-people.com/member/162134695938.jpg"
                                        alt="【迷因冷知識】除了「想想！馬克！」外，你知道這些迷因的來源都是出自哪部美漫作品嗎？" width="320" height="220"></div>
                                <div class="text">
                                    <p>【迷因冷知識】除了「想想！馬克！」外，你知道這些迷因的來源都是出自哪部美漫作品嗎？</p>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="https://www.toy-people.com/?p=66024" target="_blank"
                                onclick="gtag('event', 'click_PC', {'event_category': 'PC_footer_recommend','event_label': 'PC_footer_recommend_【鷹眼專欄】盤點漫畫中各版本的鷹眼？與神比肩，復仇者之中最強的凡人！'});">
                                <div class="img"><img src="https://img.toy-people.com/member/163775522026.jpg"
                                        alt="【鷹眼專欄】盤點漫畫中各版本的鷹眼？與神比肩，復仇者之中最強的凡人！" width="320" height="220"></div>
                                <div class="text">
                                    <p>【鷹眼專欄】盤點漫畫中各版本的鷹眼？與神比肩，復仇者之中最強的凡人！</p>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="https://www.toy-people.com/?p=76671" target="_blank"
                                onclick="gtag('event', 'click_PC', {'event_category': 'PC_footer_recommend','event_label': 'PC_footer_recommend_諫山創淺談《進擊的巨人》賈碧、法爾科的原型是誰？下一步規劃是...'});">
                                <div class="img"><img src="https://img.toy-people.com/member/167352556715.jpg"
                                        alt="諫山創淺談《進擊的巨人》賈碧、法爾科的原型是誰？下一步規劃是..." width="320" height="220"></div>
                                <div class="text">
                                    <p>諫山創淺談《進擊的巨人》賈碧、法爾科的原型是誰？下一步規劃是...</p>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="https://www.toy-people.com/?p=66111" target="_blank"
                                onclick="gtag('event', 'click_PC', {'event_category': 'PC_footer_recommend','event_label': 'PC_footer_recommend_庵野秀明淺談 《新·假面騎士》騎士造型變遷史？'});">
                                <div class="img"><img src="https://img.toy-people.com/member/163340966415.jpg"
                                        alt="庵野秀明淺談 《新·假面騎士》騎士造型變遷史？" width="320" height="220"></div>
                                <div class="text">
                                    <p>庵野秀明淺談 《新·假面騎士》騎士造型變遷史？</p>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="https://geek-base.toy-people.com/?p=33" target="_blank"
                                onclick="gtag('event', 'click_PC', {'event_category': 'PC_footer_recommend','event_label': 'PC_footer_recommend_盤點X戰警變種人的天敵「哨兵機器人」各個型號的驚人能力'});">
                                <div class="img"><img src="https://img.toy-people.com/member/161072532898.jpg"
                                        alt="盤點X戰警變種人的天敵「哨兵機器人」各個型號的驚人能力" width="320" height="220"></div>
                                <div class="text">
                                    <p>盤點X戰警變種人的天敵「哨兵機器人」各個型號的驚人能力</p>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="https://www.toy-people.com/?p=42164" target="_blank"
                                onclick="gtag('event', 'click_PC', {'event_category': 'PC_footer_recommend','event_label': 'PC_footer_recommend_解析「薩諾斯軍隊」的最強先鋒【黑暗教團 Black Order】'});">
                                <div class="img"><img src="https://img.toy-people.com/member/161072230468.jpg"
                                        alt="解析「薩諾斯軍隊」的最強先鋒【黑暗教團 Black Order】" width="320" height="220"></div>
                                <div class="text">
                                    <p>解析「薩諾斯軍隊」的最強先鋒【黑暗教團 Black Order】</p>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="https://www.toy-people.com/?p=26344" target="_blank"
                                onclick="gtag('event', 'click_PC', {'event_category': 'PC_footer_recommend','event_label': 'PC_footer_recommend_【鋼彈專題】什麼是MG、PG、RG？鋼彈就鋼彈，為什麼那麼多個G啊？'});">
                                <div class="img"><img src="https://img.toy-people.com/member/161073237778.jpg"
                                        alt="【鋼彈專題】什麼是MG、PG、RG？鋼彈就鋼彈，為什麼那麼多個G啊？" width="320" height="220"></div>
                                <div class="text">
                                    <p>【鋼彈專題】什麼是MG、PG、RG？鋼彈就鋼彈，為什麼那麼多個G啊？</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>

            <!-- <script src="js/swiper/swiper-bundle.min.js?1"></script>
            <script>
                var swiper = new Swiper(".mySwiper", {
    			  slidesPerView: 5,
    			  grid: {
    			    rows: 1,
    			  },
    			  spaceBetween: 30,
    			  pagination: {
    			    el: ".swiper-pagination",
    			    clickable: true,
    			  },
    			 breakpoints: {
    			    1120: {
    			      slidesPerView: 5,
    			      slidesPerGroup: 5,
    			    },
    			  },
    			  navigation: {
    			    nextEl: ".swiper-button-next",
    			    prevEl: ".swiper-button-prev",
    			  },
			  
    				loop: true,
    				autoplay: {
    				   delay: 10000000,
    				 },
    			});
            </script> -->
            <!-- -->
            <nav class="footer_nav">
                <ul class="NavFooterMenuLink">
                    <li class="Nav_nav_li">
                        <b class="b">會員</b>
                        <ul>
                            <li><a href="https://member.toy-people.com/login"
                                    onclick="ga('send', 'event', 'PC_footer_menu_登入／註冊', 'click');">登入／註冊</a></li>
                            <li><a href="https://member.toy-people.com/post"
                                    onclick="ga('send', 'event', 'PC_footer_menu_我要投稿', 'click');">我要投稿</a></li>
                            <li><a href="https://member.toy-people.com/postlist"
                                    onclick="ga('send', 'event', 'PC_footer_menu_我的投稿清單', 'click');">我的投稿清單</a></li>
                            <li><a href="https://www.toy-people.com/profiles"
                                    onclick="ga('send', 'event', 'PC_footer_menu_我的個人資料頁', 'click');">我的個人資料頁</a></li>
                            <li><a href="https://member.toy-people.com/edit"
                                    onclick="ga('send', 'event', 'PC_footer_menu_修改個人資料', 'click');">修改個人資料</a></li>
                            <li><a href="https://member.toy-people.com/logout"
                                    onclick="ga('send', 'event', 'PC_footer_menu_登出', 'click');">登出</a></li>
                        </ul>
                    </li>
                    <li class="Nav_nav_li">
                        <b class="b">頻道</b>
                        <ul>
                            <li><a href="https://www.toy-people.com/release-date"
                                    onclick="ga('send', 'event', 'PC_footer_menu_玩具發售表', 'click');" class="hot">玩具發售表</a>
                            </li>
                            <li><a href="https://www.toy-people.com/submission"
                                    onclick="ga('send', 'event', 'PC_footer_menu_投稿專區', 'click');">投稿專區</a></li>
                            <li><a href="https://www.toy-people.com/newsrank"
                                    onclick="ga('send', 'event', 'PC_footer_menu_今日發燒玩具', 'click');">今日發燒玩具</a></li>
                            <li><a href="https://www.toy-people.com/videolist"
                                    onclick="ga('send', 'event', 'PC_footer_menu_影音', 'click');">影音</a></li>
                            <li><a href="https://www.toy-people.com/?cat=3658"
                                    onclick="ga('send', 'event', 'PC_footer_menu_玩物生活', 'click');">玩物生活</a></li>
                        </ul>
                    </li>
                    <li class="Nav_nav_li">
                        <b class="b">專文</b>
                        <ul>
                            <li><a href="https://www.toy-people.com/?cat=898"
                                    onclick="ga('send', 'event', 'PC_footer_menu_開箱報告', 'click');">開箱報告</a></li>
                            <li><a href="https://www.toy-people.com/?cat=4"
                                    onclick="ga('send', 'event', 'PC_footer_menu_玩具人專欄', 'click');" class="hot">玩具人專欄</a>
                            </li>
                            <li><a href="https://www.toy-people.com/?cat=5"
                                    onclick="ga('send', 'event', 'PC_footer_menu_玩具人知識', 'click');">玩具人知識</a></li>
                            <li><a href="https://www.toy-people.com/?cat=6"
                                    onclick="ga('send', 'event', 'PC_footer_menu_玩具探險隊', 'click');">玩具探險隊</a></li>
                            <li><a href="https://www.toy-people.com/?cat=634"
                                    onclick="ga('send', 'event', 'PC_footer_menu_人物專訪', 'click');">人物專訪</a></li>
                            <li><a href="https://www.toy-people.com/?tag=彩蛋"
                                    onclick="ga('send', 'event', 'PC_footer_menu_彩蛋解析', 'click');">彩蛋解析</a></li>
                        </ul>
                    </li>
                    <li class="Nav_nav_li">
                        <b class="b">遊戲</b>
                        <ul>
                            <li><a href="https://www.toy-people.com/?cat=3524"
                                    onclick="ga('send', 'event', 'PC_footer_menu_遊戲新聞', 'click');" class="hot">遊戲新聞</a></li>
                            <li><a href="https://www.toy-people.com/?tag=遊戲專欄"
                                    onclick="ga('send', 'event', 'PC_footer_menu_遊戲專欄', 'click');">遊戲專欄</a></li>
                            <li><a href="https://www.toy-people.com/?tag=遊戲試玩"
                                    onclick="ga('send', 'event', 'PC_footer_menu_遊戲試玩', 'click');">遊戲試玩</a></li>
                        </ul>
                    </li>
                    <li class="Nav_nav_li">
                        <a href="https://www.toy-people.com/denden" class="b"
                            onclick="ga('send', 'event', 'PC_footer_menu_日刊電電', 'click');">日刊電電</a>
                        <ul>
                            <li><a href="https://www.toy-people.com/denden/newsrank"
                                    onclick="ga('send', 'event', 'PC_footer_menu_日刊電電_今日發燒', 'click');">今日發燒</a></li>
                            <li><a href="https://www.toy-people.com/?tag=ACG"
                                    onclick="ga('send', 'event', 'PC_footer_menu_日刊電電_ACG', 'click');">ACG</a></li>
                            <li><a href="https://www.toy-people.com/?tag=話題"
                                    onclick="ga('send', 'event', 'PC_footer_menu_日刊電電_話題', 'click');" class="hot">熱門話題</a>
                            </li>
                            <li><a href="https://www.toy-people.com/?tag=COSPLAY"
                                    onclick="ga('send', 'event', 'PC_footer_menu_日刊電電_COSPLAY', 'click');">COSPLAY</a></li>
                            <li><a href="https://www.toy-people.com/?tag=日娛"
                                    onclick="ga('send', 'event', 'PC_footer_menu_日刊電電_日娛', 'click');">日本娛樂</a></li>
                            <li><a href="https://www.toy-people.com/?tag=服飾系列"
                                    onclick="ga('send', 'event', 'PC_footer_menu_日刊電電_服飾系列', 'click');">流行服飾</a></li>
                            <li><a href="https://www.toy-people.com/?tag=3C"
                                    onclick="ga('send', 'event', 'PC_footer_menu_日刊電電_3C', 'click');">3C科技</a></li>
                            <li><a href="https://www.toy-people.com/?tag=編輯精選">編輯精選</a></li>
                    </ul>
                </li>
                <li class="Nav_nav_li">
                    <a href="https://www.toy-people.com/screen-fandom" class="b"
                        onclick="ga('send', 'event', 'PC_footer_menu_SF歐美娛樂癮迷', 'click');">SF歐美娛樂癮迷</a>
                    <ul>
                        <li><a href="https://www.toy-people.com/screen-fandom/newsrank"
                                onclick="ga('send', 'event', 'PC_footer_menu_SF_今日發燒', 'click');" class="hot">今日發燒</a>
                        </li>
                        <li><a href="https://www.toy-people.com/?tag=movies"
                                onclick="ga('send', 'event', 'PC_footer_menu_SF_歐美電影', 'click');">歐美電影</a></li>
                        <li><a href="https://www.toy-people.com/?tag=entertainment"
                                onclick="ga('send', 'event', 'PC_footer_menu_SF_歐美娛樂', 'click');">歐美娛樂</a></li>
                        <li><a href="https://www.toy-people.com/?tag=series"
                                onclick="ga('send', 'event', 'PC_footer_menu_SF_影集', 'click');">歐美影集</a></li>
                        <li><a href="https://www.toy-people.com/?tag=comics"
                                onclick="ga('send', 'event', 'PC_footer_menu_SF_美漫', 'click');">美漫</a></li>
                        <li><a href="https://www.toy-people.com/?tag=cartoon"
                                onclick="ga('send', 'event', 'PC_footer_menu_SF_歐美動畫', 'click');">歐美動畫</a></li>
                        <li><a href="https://www.toy-people.com/?tag=netflix"
                                onclick="ga('send', 'event', 'PC_footer_menu_SF_Netflix', 'click');">Netflix</a></li>
                        <li><a href="https://www.toy-people.com/?tag=disneyplus"
                                onclick="ga('send', 'event', 'PC_footer_menu_SF_Disney＋', 'click');">Disney＋</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div class="footer footer_info">
            <div class="bodyWidth top_info">
                <div class="follow-Toy-People">
                    <ul class="follow_toy">
                        <li style="padding: 0 5px 0 0px;">FOLLOW US：玩具人</li>
                        <li class="link fb"><a href="https://www.facebook.com/toypeople/" target="_blank"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_link_fb_toy'});"><i
                                    class="fa fa-facebook-official"></i><span>玩具人Facebook粉絲團</span></a></li>
                        <li class="link youtube"><a
                                href="https://www.youtube.com/channel/UCA8bOZ87Klj_jGcue29Vitw?sub_confirmation=1"
                                target="_blank"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_link_youtube_toy'});"><i
                                    class="fa fa-youtube-play" aria-hidden="true"></i><span>玩具人youtube</span></a></li>
                        <li class="link instagram"><a href="https://www.instagram.com/toy_people_news/" target="_blank"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_link_IG_toy'});"><i
                                    class="fa fa-instagram" aria-hidden="true"></i><span>玩具人instagram</span></a></li>
                        <li class="link GoogleNews"><a
                                href="https://news.google.com/publications/CAAqBwgKMJnnjAsw9IWdAw" target="_blank"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_link_Google_toy'});"><i
                                    class="fa fa-google" aria-hidden="true"></i><span>玩具人的Google新聞</span></a></li>
                        <li class="link plurk"><a href="https://www.plurk.com/toypeople" target="_blank"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_link_plurk_toy'});"><i
                                    class="fa fa-plurk" aria-hidden="true"></i><span>玩具人的Plurk噗浪</span></a></li>
                        <li class="link twitter"><a href="https://twitter.com/TOY_PEOPLE_NEWS" target="_blank"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_link_twitter_toy'});"><i
                                    class="fa fa-twitter" aria-hidden="true"></i><span>玩具人的twitter</span></a></li>
                        <li class="link rss"><a href="https://www.toy-people.com/rss.php" target="_blank"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_link_rss_toy'});"><i
                                    class="fa fa-rss-square"></i><span>玩具人RSS訂閱</span></a></li>
                    </ul>
                    <ul class="follow_denden">
                        <li style="margin: 0 0 0 20px;padding: 0 5px 0 20px;border-left: 1px #383838 solid;">日刊電電</li>
                        <li class="link fb denden"><a href="https://www.facebook.com/NikkanDenDen/" target="_blank"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_link_fb_denden'});"><i
                                    class="fa fa-facebook-official"></i><span>日刊電電 Facebook</span></a></li>
                        <li class="link GoogleNews denden"><a
                                href="https://news.google.com/publications/CAAqBwgKMOOinwsw8Ky3Aw?oc=3&ceid=TW:zh-Hant"
                                target="_blank"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_link_Google_denden'});"><i
                                    class="fa fa-google" aria-hidden="true"></i><span>日刊電電的Google新聞</span></a></li>
                        <li class="link plurk"><a href="https://www.plurk.com/NikkanDenDen" target="_blank"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_link_plurk_denden'});"><i
                                    class="fa fa-plurk" aria-hidden="true"></i><span>日刊電電的Plurk噗浪</span></a></li>
                        <li class="link twitter"><a href="https://twitter.com/NikkanDenDen" target="_blank"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_link_twitter_denden'});"><i
                                    class="fa fa-twitter" aria-hidden="true"></i><span>日刊電電的twitter</span></a></li>
                        <li class="link rss denden"><a href="https://www.toy-people.com/rss_denden.php" target="_blank"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_link_rss_denden'});"><i
                                    class="fa fa-rss-square"></i><span>日刊電電 RSS訂閱</span></a></li>
                    </ul>
                    <ul class="follow_gb">
                        <li style="margin: 0 0 0 20px;padding: 0 5px 0 20px;border-left: 1px #383838 solid;">SF歐美娛樂癮迷
                        </li>
                        <li class="link fb SF"><a href="https://www.facebook.com/ScreenFandomNews/" target="_blank"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_link_fb_SF'});"><i
                                    class="fa fa-facebook-official"></i><span>SCREEN FANDOM的Facebook</span></a></li>
                        <li class="link GoogleNews SF"><a
                                href="https://news.google.com/publications/CAAqBwgKMLjnjAswvaqdAw?oc=3&ceid=TW:zh-Hant"
                                target="_blank"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_link_Google_SF'});"><i
                                    class="fa fa-google" aria-hidden="true"></i><span>SCREEN FANDOM的Google新聞</span></a>
                        </li>
                        <li class="link plurk"><a href="https://www.plurk.com/ScreenFandom" target="_blank"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_link_plurk_SF'});"><i
                                    class="fa fa-plurk" aria-hidden="true"></i><span>SCREEN FANDOM的Plurk噗浪</span></a>
                        </li>
                        <li class="link twitter"><a href="https://twitter.com/_ScreenFandom" target="_blank"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_link_twitter_SF'});"><i
                                    class="fa fa-twitter" aria-hidden="true"></i><span>SCREEN FANDOM的twitter</span></a>
                        </li>
                        <li class="link rss"><a href="https://www.toy-people.com/rss_screen_fandom.php" target="_blank"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_link_rss_SF'});"><i
                                    class="fa fa-rss-square"></i><span>SCREEN FANDOM的RSS訂閱</span></a></li>
                    </ul>
                </div>
                <div class="logo">
                    <a href="//www.toy-people.com/"
                        onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_logo'});">
                        <img src="https://www.toy-people.com/img/logo.svg" alt="toy people 玩具人" class="right">
                    </a>
                </div>
            </div>
            <div class="bodyWidth copy_link">
                <div class="footer-link">
                    <ul>
                        <li class="about"><a href="https://www.toy-people.com/?page_id=9"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_about'});">關於我們</a>
                        </li>
                        <li class="advertise"><a href="https://www.toy-people.com/advertise/"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_advertise'});">廣告刊登</a>
                        </li>
                        <li class="jobs"><a href="https://www.toy-people.com/jobs/"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_jobs'});">徵人</a>
                        </li>
                        <li class="contactus"><a href="https://www.toy-people.com/contact/"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_contactus'});">聯絡我們</a>
                        </li>
                        <li class="privacyLink"><a href="https://www.toy-people.com/privacy.html"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_privacyLink'});">隱私權政策</a>
                        </li>
                        <li class="disclaimer"><a href="https://www.toy-people.com/disclaimer.html"
                                onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'footer_disclaimer'});">免責聲明</a>
                        </li>
                    </ul>
                </div>
                <div class="copyright-Toy-People"
                    onclick="ga('event', 'click_PC', {'event_category': 'PC_footer','event_label': 'copyright_link'});">
                    <a href="https://www.toy-people.com/"> ⓒ 2011-2023 TOY-PEOPLE.COM</a>
                </div>
            </div>
        </div>
    </div>
</footer></template>