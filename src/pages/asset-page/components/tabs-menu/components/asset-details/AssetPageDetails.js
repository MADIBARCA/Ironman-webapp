import './AssetPageDetails.css';

const AssetPageDetails = () => {
  const titles = [
    "Contract Address",
    "Token ID",
    "Token Standard",
    "Blockchain",
    "Metadata",
  ];

  const details = [
    "ox14789340238080...",
    "691",
    "ERC-21",
    "Polygon",
    "Centralised",
  ];

  return (
    <div className="assetPageDetails">
      <div className="assetPageDetailsTop">
        <h4>Title</h4>
        <h4>Details</h4>
      </div>
      {titles.map((el, i) => (
        <div key={i} className="assetPageDetailsTableRow">
          <h4>{el}</h4>
          <div className='assetPageDetailsTableElement'>{details[i]}</div>
        </div>
      ))}
    </div>
  );
};

export default AssetPageDetails;
