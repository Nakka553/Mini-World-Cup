import React from "react";

function Footer(){
    return(
        <div>
             <footer class="footer-wrapper footer-layout3 ">
        <div class="widget-area ">
            <div class="parallax" data-bg-class="bg-dark" data-parallax-image="../../assets/img/bg/map-bg.png" 
            style={{backgroundImage:"url(../../assets/img/bg/map-bg.png)"}}></div>
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-lg-3 col-md-3 col-12">
                        <div class="widget footer-widget">
                            <h3 class="widget_title">Contact Us</h3>
                            <div class="vs-widget-about">
                                <p class="footer-info">
                                    <small class="text-light-white">Address:</small><br />
                                    G2 Express Studios,Dock Road, London, England, E16 1AG
                                </p>

                                <p class="footer-info">
                                    <small class="text-light-white">For any enquiries:</small><br />
                                    <a href="mailto:contact@sportfanspass.com">contact@sportfanspass.com</a>
                                </p>






                               
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-6">
                        <div class="widget widget_categories  footer-widget">
                            <h3 class="widget_title">SportFansPass</h3>
                            <ul>
                                <li><a href="index.html#about">About Game</a></li>
                                <li><a href="index.html#game-ecosystem">Ecosystem</a></li>
                                <li><a href="index.html#nfts">NFTS</a></li>
                                <li><a href="index.html#rewords">Tokenomics</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-6">
                        <div class="widget widget_nav_menu  footer-widget">
                            <h3 class="widget_title">Quick Links</h3>
                            <div class="menu-all-pages-container">
                                <ul class="menu">

                                    <li>
                                        <a href="https://sportfanspass.gitbook.io/mini-world-cup/"
                                            target="_blank">Whitepaper</a>
                                    </li>
                                    <li>
                                        <a href="https://sportfanspass.gitbook.io/sportfanspass/roadmap"
                                            target="_blank">Roadmap</a>
                                    </li>

                                    
                                    <li>
                                        <a href="mailto:contact@sportfanspass.com">Contact</a>
                                    </li>

                                    <li>
                                        <a href="https://discord.com/invite/9V7nRwm2KR">Join Discord</a>
                                    </li>


                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 col-12">
                        <div class="widget footer-widget">
                            <div class="vs-widget-about">
                                <h3 class="widget_title">Join Our Community</h3>
                                <div class="multi-social">
                                    <div class="row">
                                        <div class="col-lg-12 text-xs-center">

                                            <a href="https://twitter.com/sportfanspass" target="_blank"><img
                                                    src="../../assets/img/social/twitter.png" /></a>
                                            <a href="https://discord.gg/9V7nRwm2KR" target="_blank"><img
                                                    src="../../assets/img/social/discord.png" /></a>
                                            <a href="https://telegram.me/sportfanspass" target="_blank"><img
                                                    src="../../assets/img/social/telegram.png" /></a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

                <div class="row">
                    <div class=" col-md-3 col-lg-4 text-xs-center">
                        
                    </div>
                    <div class="col-md-9 col-lg-8">
                        <p class="text-xs-center sec-text text-white">&copy; Copyright 2022 <b>SportFansPass</b>. All
                            rights
                            reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

        </div>
    )
}

export default Footer;