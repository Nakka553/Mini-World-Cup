import React from "react";

function Tokenomics(){
    return(
        <div>
            <section class="my-4" id="rewords">
        <div class="container">
             <div class="row">
                 <div class="col-xl-6">
                    <h2 class="sec-title-style2 mb-3">
                       Tokenomics
                    </h2>
                    <div class="sec-shape mb-20">
                        <div class="sec-shape_bar"></div>
                        <div class="sec-shape_bar"></div>
                        <div class="sec-shape_bar"></div>
                    </div>
                    <div class="table-responsive">
                        <table class="table rewards-table">
                     
                            <tbody>
                                <tr class="table-data">
                                    <th scope="row"><span>Presale</span></th>
                                    <td class="div-clr">11%</td>
                                    <td>99M</td>
                                </tr>
                                <tr class="table-data1">
                                    <th scope="row"><span>Game Rewards</span></th>
                                    <td class="div-clr1">67%</td>
                                    <td>600M</td>
                                </tr>
                                <tr class="table-data2">
                                    <th scope="row"><span>Team</span></th>
                                    <td class="div-clr2">10%</td>
                                    <td>89M</td>
                                </tr>
                                <tr class="table-data3">
                                    <th scope="row"><span>Marketing & Development</span></th>
                                    <td class="div-clr3">5%</td>
                                    <td>45M</td>
                                </tr>
                                <tr class="table-data4">
                                    <th scope="row"><span>Players Airdrop</span></th>
                                    <td class="div-clr4">4%</td>
                                    <td>40M</td>
                                </tr>
                                <tr class="table-data5">
                                    <th scope="row"><span>Liquidity</span></th>
                                    <td class="div-clr5">3%</td>
                                    <td>27M</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <th scope="row d-block text-end"><span>TOTAL MAX SUPPLY</span></th>
                                <td class="div-clr6">100%</td>
                                <td>900 Million</td>
                            </tfoot>
                        </table>
                    </div>
                    <div class="">
                    <h3 class="sec-title-style2 mt-2"><span>Total Max Supply:</span> <small>900 Million</small>
                    </h3>
                    <div class="text-white pb-2">
                   
                            <p class="w-50 text-white">Total supply of 900 Million MWC Tokens, where the majority will be used for game rewards and the balance will be distributed as per the below structure.</p>
                 
                    </div>
                </div>
                 </div>
                 <div class="col-xl-6 tokenomics-ball-bg">
                    <div class="position-absolute">
                        <img src="../../assets/img/new-design-imgs/tokenomics-animated.gif" class="img-fluid" alt=""/>
                    </div>
              </div>
             </div>
        </div>
    </section>
      
        </div>
    );
}

export default Tokenomics;