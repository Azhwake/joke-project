function TwoPart({data}) {
  return (
<div className="content">
      <h2 className="joke">{data.setup}</h2>
      <h2 className="punch-line">{data.delivery}</h2>
    </div>
  );
}

export default TwoPart;
