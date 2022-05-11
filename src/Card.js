export function Card({ pricetitle, price, listofdata }) {

  return (
    <div className="cards">
      <div className="title">{pricetitle}</div>
      <div className="title-num"><span className='dolor'>{price}</span>/month</div>
      <div className='underLine'></div>

      <ul>
        {listofdata.map((paras) => (<li className={paras.texttype}><span><i class={paras.icontype} aria-hidden="true"></i></span>{paras.list}</li>))}
      </ul>
      <div className="buTTon"><button className='btn btn-primary'>Button</button></div>
    </div>
  );
}
