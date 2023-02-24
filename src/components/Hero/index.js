import React from "react";
function Hero()
{
    return(
        <div>
             <section class="vs-hero-wrapper">
        <div class="parallax " data-bg-class="bg-title" data-parallax-image="../../assets/img/bg/pot-price-bg.jpg"
            style={{backgroundImage:"url(../assets/img/bg/pot-price-bg.jpg)"}}></div>
        
        <div class="vs-carousel" >
            <div class="slider">
                <div class="hero-clip-slider">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-sm-12 col-lg-7">
                                <div class="hero-clip-content text-xs-center">
                                    <h1 class="hero-clip-title mb-3">
                                        <span class="text-theme2">MiniWorld Cup <span class="text-white">
                                            P2E Game</span></span>
                                    </h1>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <p class="sec-text text-white" data-ani="slideindown" data-ani-delay="0.2s">
                                                Innovative Play2Earn application, aiming to enhance the experience of Football Gamers. 
                                            </p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
}
export default Hero;