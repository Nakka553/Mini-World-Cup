
import React from 'react';

const HeaderArea =()=> {
    return (
        <div>
             <header class="vs-header header-layout1">
        <div class="sticky-wrapper">
            <div class="sticky-active">
                <div class="header-inner">
                    <div class="container">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-auto">
                                <div class="header-logo py-3 py-lg-0">
                                    <a href="index.html"><img src="../../assets/img/sportfanspass-mini-worldcup.png"/></a>
                                </div>
                            </div>
                            <div class="col-auto offset-xxl-1">
                                <nav class="main-menu menu-style1 d-none d-lg-block">
                                    <ul>
                                        <li><a href="index.html#about">About Game</a></li>
                                        <li><a href="index.html#game-ecosystem">Ecosystem</a></li>
                                        <li><a href="index.html#nfts">NFTs</a></li>
                                        <li><a href="index.html#rewords">Tokenomics</a></li>
                                        <li>
                                            <a href="https://sportfanspass.gitbook.io/mini-world-cup/"
                                                target="_blank">Whitepaper</a>
                                        </li>
                                    </ul>
                                </nav>
                                <button type="button" class="vs-menu-toggle d-inline-block d-lg-none"><i
                                        class="fas fa-bars"></i></button>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <div class="header-button d-flex flex-wrap align-items-center">
                                    <a href="#" class="vs-btn d-none d-xl-block">Presale Soon</a>
                                    <a href="#" class="vs-btn searchBoxTggler d-none d-xl-none">Launch App</a>
                                    <button type="button" class="sideMenuToggler"><i class="fas fa-th"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
        </div>
    );
}

export default HeaderArea;