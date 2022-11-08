import features from "./assetPageFeatures.data";

import './AssetPageFeatures.css';

const AssetPageFeatures = () => {
  return (
    <div className="assetPageFeatures">
      {features.map((el, i) => (
        <div key={i} className="assetPageFeatureBox">
          <img src={el.icon} />
          {el.title}
        </div>
      ))}
    </div>
  );
};

export default AssetPageFeatures;
