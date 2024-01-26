import React from "react";
import { Button } from "pages/Landing/components/Generics";
import Row from "components/Row";
import { AutoColumn } from "components/Column";

const Airdrop = () => {
  return (
    <Row style={{ height: '100rem', width: '100%', background: 'radial-gradient(50% 50% at 50% -15%, rgba(14, 222, 137, 0.533) 0%, rgb(28 207 151 / 0%) 99%) rgb(12, 14, 17)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto', width: '45%', height: '90%' }}>
        <div style={{ display: 'flex', alignItems: 'stretch', height: '10%' }}>
          <div style={{ flexGrow: '7', display: 'flex', flexDirection: 'column', color: 'white' }}>
            <div style={{ fontSize: '24px' }}>
              Token Fair Launch
            </div>
            <div style={{ width: '71%', color: 'white', fontSize: '14px' }}>
              <p>To appreciate your active participation and pay tribute to ZKFair, we are committed to a 100% fair launch as well. <a href="/" style={{ color: 'white' }}>For more details</a></p>
            </div>
          </div>
          <div style={{ marginTop: '5vh', display: "flex", paddingLeft: "1em", alignItems: 'center', borderRadius: '5px', backgroundColor: '#127859', height: "35%", width: "12%" }}>
            Claim All
          </div>
          {/* <div style={{ padding: '5vh 0vh', textAlign: 'center', display: 'flex', alignItems: 'center', borderRadius: '5px', flexGrow: '3', width: '15%', fontSize: '16px', backgroundColor: '#127859' }}>
            <Button>Claim All</Button>
          </div> */}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', height: '40%', border: '1px solid rgb(80, 80, 80)', borderRadius: '10px', margin: '40px 0px', padding: '40px' }}>
          <div style={{ textAlign: 'center', color: 'white', margin: '0px 0px 30px', fontSize: '20px' }}>
            Contributor Airdrop
          </div>
          <div style={{ margin: '0px 0px 30px', height: '40%' }}>
            <div style={{ margin: '0px 0px 20px', width: '100%', height: '20%', display: 'flex' }}>
              <span style={{ margin: '0px 5px 0px 0px', fontSize: '16px', color: 'white', flexGrow: '10' }}>
                LPs Airdrop
              </span>
              <span style={{ color: '#959595', fontSize: '16px', marginLeft: '0px', height: '40%' }}>
                ENDED
              </span>
            </div>
            <div style={{ justifyContent: 'space-around', alignItems: 'baseline', display: 'flex', flexDirection: 'row', padding: '20px', borderRadius: '10px', backgroundColor: '#20352e', height: '70%' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                  <span style={{ fontSize: '14px', margin: 'auto', textAlign: 'center', color: '#8c9794' }}>
                    Total LP Values
                  </span>
                </div>
                <div style={{ fontSize: '20px', margin: '10px 0px 0px', color: 'white', textAlign: 'center' }}>
                  <span ><strong>$ --</strong></span>
                </div>
              </div>
              <div>
                <div>
                  <span style={{ fontSize: '14px', margin: 'auto', textAlign: 'center', color: '#8c9794' }}>
                    My LP Values
                  </span>
                </div>
                <div style={{ fontSize: '20px', margin: '10px 0px 0px', color: 'white', textAlign: 'center' }}>
                  <span ><strong>$ --</strong></span>
                </div>
              </div>
              <div>
                <div>
                  <span style={{ fontSize: '14px', margin: 'auto', textAlign: 'center', color: '#8c9794' }}>
                    My Estimated Airdrop
                  </span>
                </div>
                <div style={{ fontSize: '20px', margin: '10px 0px 0px', color: 'white', textAlign: 'center' }}>
                  <span ><strong>-- SIDE</strong></span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: '0px 0px 30px', height: '40%' }}>
            <div style={{ margin: '0px 0px 20px', width: '100%', height: '20%', display: 'flex' }}>
              <span style={{ margin: '0px 5px 0px 0px', fontSize: '16px', color: 'white', flexGrow: '10' }}>
                Traders Airdrop
              </span>
              <span style={{ color: '#959595', fontSize: '16px', marginLeft: '0px', height: '40%' }}>
                ENDED
              </span>
            </div>
            <div style={{ justifyContent: 'space-around', display: 'flex', flexDirection: 'column', padding: '20px', borderRadius: '10px', backgroundColor: '#20352e', height: '70%' }}>
              <div style={{ justifyContent: 'space-around', display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div>
                    <span style={{ fontSize: '14px', margin: 'auto', textAlign: 'center', color: '#8c9794' }}>
                      Total Trade Fees
                    </span>
                  </div>
                  <div style={{ fontSize: '20px', margin: '10px 0px 0px', color: 'white', textAlign: 'center' }}>
                    <span ><strong>-- USDC</strong></span>
                  </div>
                </div>
                <div>
                  <div>
                    <span style={{ fontSize: '14px', margin: 'auto', textAlign: 'center', color: '#8c9794' }}>
                      My Trade Fees
                    </span>
                  </div>
                  <div style={{ fontSize: '20px', margin: '10px 0px 0px', color: 'white', textAlign: 'center' }}>
                    <span ><strong>-- USDC</strong></span>
                  </div>
                </div>
                <div>
                  <div>
                    <span style={{ fontSize: '14px', margin: 'auto', textAlign: 'center', color: '#8c9794' }}>
                      My Estimated Airdrop
                    </span>
                  </div>
                  <div style={{ fontSize: '20px', margin: '10px 0px 0px', color: 'white', textAlign: 'center' }}>
                    <span ><strong>-- SIDE</strong></span>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'center', color: 'white', fontSize: '14px' }}>
                <progress id="file" value="0" max="100" width="100%" color="gray" style={{ width: '80%' }}> 0% </progress>&nbsp;
                0.00%
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', height: '50%', border: '1px solid rgb(80, 80, 80)', borderRadius: '10px', margin: '40px 0px', padding: '40px' }}>
          <div style={{ textAlign: 'center', color: 'white', margin: '0px 0px 30px', fontSize: '20px' }}>
            Community Airdrop
          </div>
          <div style={{ margin: '0px 0px 30px', height: '30%' }}>
            <div style={{ margin: '0px 0px 20px', width: '100%', height: '20%' }}>
              <span style={{ margin: '0px 5px 0px 0px', fontSize: '16px', color: 'white' }}>
                Lumoz Loyalty Point Holders
              </span>
            </div>
            <div style={{ justifyContent: 'space-around', alignItems: 'baseline', display: 'flex', flexDirection: 'row', padding: '20px', borderRadius: '10px', backgroundColor: '#20352e', height: '70%' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                  <span style={{ fontSize: '14px', margin: 'auto', textAlign: 'center', color: '#8c9794' }}>
                    Lumoz Loyalty Points
                  </span>
                </div>
                <div style={{ fontSize: '20px', margin: '10px 0px 0px', color: 'white', textAlign: 'center' }}>
                  <span ><strong>--</strong></span>
                </div>
              </div>
              <div>
                <div>
                  <span style={{ fontSize: '14px', margin: 'auto', textAlign: 'center', color: '#8c9794' }}>
                    My Estimated Airdrop
                  </span>
                </div>
                <div style={{ fontSize: '20px', margin: '10px 0px 0px', color: 'white', textAlign: 'center' }}>
                  <span ><strong>-- SIDE</strong></span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: '0px 0px 30px', height: '30%' }}>
            <div style={{ margin: '0px 0px 20px', width: '100%', height: '20%' }}>
              <span style={{ margin: '0px 5px 0px 0px', fontSize: '16px', color: 'white' }}>
                ZKF Stakers
              </span>
            </div>
            <div style={{ justifyContent: 'space-around', alignItems: 'baseline', display: 'flex', flexDirection: 'row', padding: '20px', borderRadius: '10px', backgroundColor: '#20352e', height: '70%' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                  <span style={{ fontSize: '14px', margin: 'auto', textAlign: 'center', color: '#8c9794' }}>
                    ZKF Stake Points
                  </span>
                </div>
                <div style={{ fontSize: '20px', margin: '10px 0px 0px', color: 'white', textAlign: 'center' }}>
                  <span ><strong>--</strong></span>
                </div>
              </div>
              <div>
                <div>
                  <span style={{ fontSize: '14px', margin: 'auto', textAlign: 'center', color: '#8c9794' }}>
                    Pool share
                  </span>
                </div>
                <div style={{ fontSize: '20px', margin: '10px 0px 0px', color: 'white', textAlign: 'center' }}>
                  <span ><strong>--</strong></span>
                </div>
              </div>
              <div>
                <div>
                  <span style={{ fontSize: '14px', margin: 'auto', textAlign: 'center', color: '#8c9794' }}>
                    My Estimated Airdrop
                  </span>
                </div>
                <div style={{ fontSize: '20px', margin: '10px 0px 0px', color: 'white', textAlign: 'center' }}>
                  <span ><strong>-- SIDE</strong></span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: '0px 0px 30px', height: '30%' }}>
            <div style={{ margin: '0px 0px 20px', width: '100%', height: '20%' }}>
              <span style={{ margin: '0px 5px 0px 0px', fontSize: '16px', color: 'white' }}>
                Participants in <a href="/" style={{ color: '#3232ff' }}>Zealy</a> activities
              </span>
            </div>
            <div style={{ justifyContent: 'space-around', alignItems: 'baseline', display: 'flex', flexDirection: 'row', padding: '20px', borderRadius: '10px', backgroundColor: '#20352e', height: '70%' }}>
              <div>
                <div>
                  <span style={{ fontSize: '14px', margin: 'auto', textAlign: 'center', color: '#8c9794' }}>
                    Zealy XP
                  </span>
                </div>
                <div style={{ fontSize: '20px', margin: '10px 0px 0px', color: 'white', textAlign: 'center' }}>
                  <span ><strong>-- XP</strong></span>
                </div>
              </div>
              <div>
                <div>
                  <span style={{ fontSize: '14px', margin: 'auto', textAlign: 'center', color: '#8c9794' }}>
                    My Estimated Airdrop
                  </span>
                </div>
                <div style={{ fontSize: '20px', margin: '10px 0px 0px', color: 'white', textAlign: 'center' }}>
                  <span ><strong>-- SIDE</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Row>
  );
};

export default Airdrop;