function TechnologyCard({ item }) {
  return (
    <li className="border-1 border-dark-green flex flex-col justify-center items-center rounded-md w-40 py-2">
      <img src={item.imgPath} alt={`${item.techName} image`} className="w-12" />
      <p className="tracking-wider">{item.techName}</p>
    </li>
  );
}

export default TechnologyCard;
