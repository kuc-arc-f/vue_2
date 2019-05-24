<template>
<div id="div_navigate_index">
    <div id="div_head" class="cover">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <a href="/"><p>{{ site_name }}</p></a>
                </div>
                <div class="col-sm-8" style="text-align: right;">
                    <!-- nav -->	  
                    <div class='menubar'>
                    <ul class='menu text-border'>
                        <li><a href='#id_row_service'>サービス概要</a></li>
                        <li><a href='#id_row_sample'>導入事例</a></li>
                        <li><a href='/hexo_3/categories/info/'>お知らせ</a></li>
                        <li><a href='/hexo_3/categories/blog/'> Blog </a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
      </div><!-- end_div_head -->
      <!-- mobile-nav -->
    <div id="nav-mobile" style="width:100%;">
        <a class="toggle">
            <span class="glyphicon glyphicon-menu-hamburger" style="font-size: 34px; color: #FFF"></span>
        </a>
        <div class="mobile-child">
            <ul class='ul_mobile-child'>
                <li class="mobile-menu-item"><a href='#id_row_service'>サービス概要</a></li>
                <li class="mobile-menu-item"><a href='#id_row_sample'>導入事例</a></li>
                <li class="mobile-menu-item"><a href='/hexo_3/categories/info/'>お知らせ</a></li>
                <li class="mobile-menu-item"><a href='/hexo_3/categories/blog/'>Blog</a></li>
            </ul>
        </div>
      </div>
</div>

</template>

<script>
import {Mixin} from '../../mixin'

export default {
    mixins:[Mixin],
    created () {
        this.site_name = this.sysConst.SITE_NAME;
    },
    data () {
        return {
            site_name : ''
        }
    }
}
</script>
