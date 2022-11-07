import "./HeaderNavButtons.css";

const HeaderNavButtons = ({ refs, scrollHandler }) => {
  return (
    <div className="headerNavButtonsWrapper">
      {/* 
      <button
        onClick={() => {
          scrollHandler(refs.homeRef);
        }}
      >
        Home
      </button>
      */}
      <button
        onClick={() => {
          scrollHandler(refs.featuresRef);
        }}
      >
        Features
      </button>
      <button
        onClick={() => {
          scrollHandler(refs.contactRef);
        }}
      >
        Contact
      </button>
    </div>
  );
};

export default HeaderNavButtons;
