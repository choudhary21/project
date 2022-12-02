import React from "react";
import "./Styles.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="nav-left">
        <img
          src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/storefront@2x.svg"
          alt="logo"
          height='30px'
        />
        <p>NFT Marketplace</p>
      </div>
      {/* keep this nav-right class to display none for mid & small screen */}
      <div className="nav-right">
        <h6 >Marketplace</h6>
        <h6>Rankings</h6>
        <h6>Connect a wallet</h6>
        <button><i class="bi bi-person"></i>{" "}{" "}{" "}{" "}<strong>sign up</strong></button>
      </div>
      <div className="nav-icon">
        <i class="bi bi-text-right"></i> 
      </div>
    </div>
  );
};
