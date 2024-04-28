const BannerCard = ({ img, text1, text2 }) => {
  return (
    <div className="flex flex-col items-center justify-end">
      <img className="w-20" src={img} alt="" />
      <div>
        <h3 className="text-sm text-center font-semibold">{text1}</h3>
        <p className="text-xs text-center">{text2}</p>
      </div>
    </div>
  );
};
export default BannerCard;
