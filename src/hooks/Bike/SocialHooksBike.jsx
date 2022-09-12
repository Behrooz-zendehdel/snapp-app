import React from "react";
import googleplay from "../../assets/google-play-badge.png";
import bazaar from "../../assets/bazaar.png";
import snapp from "../../assets/snapp-pwa.png";
import sibapp from "../../assets/sibapp-badge-white.png";
import iapps from "../../assets/iApps.png";
const SocialHooksBike = () => {
  return (
    <section>
      <div className="social-download">
        <div className="social-media">
          <a href="https://play.google.com/store/apps/details?id=cab.snapp.passenger.play&referrer=appmetrica_tracking_id%3D1036046929106097450%26ym_tracking_id%3D3146307706900293541">
            <img src={googleplay} alt="GooglePlay" />
          </a>
          <a href="https://cafebazaar.ir/app/cab.snapp.passenger/?l=fa&referrer=appmetrica_tracking_id%3D243413381082522868%26ym_tracking_id%3D40049751087656923">
            <img src={bazaar} alt="bazaar" />
          </a>
          <a href="https://app.snapp.taxi/pre-ride">
            <img src={snapp} alt="snapp" />
          </a>
          <a href="https://sibapp.com/applications/snapp">
            <img src={sibapp} alt="sibapp" />
          </a>
          <a href="https://app.iapps.ir/i/191622396">
            <img src={iapps} alt="iapps" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialHooksBike;
