import CreatorImg from "../../../../../../assets/asset-page/overview/avatar.svg";

import "./AssetPageOverview.css";

const AssetPageOverview = () => {
  return (
    <div className="assetPageOverview">
      <div className="assetPageOverviewTop">
        <img src={CreatorImg} />
        <div className="assetPageCreatorDetails">
          <h4>Creator</h4>
          <p>Ironman Israel</p>
        </div>
      </div>
      <div className="assetPageOverviewBtm">
        <h3>Description</h3>
        <p>
          Celebrate your hard earned results by minting the Finishers NFT on the
          blockchain for an eternity. The NFT is only available exclusively to
          the finishers of Ironman. The holders of the Finisher NFT will also
          get a free Twitter Profile Picture (PFP) NFT. Twitter recognizes these
          authentic NFTs and allows your circular profile picture to morph into
          a hexagon shaped mask.
        </p>
      </div>
    </div>
  );
};

export default AssetPageOverview;
