const Cards = ({
  item,
  onclickRemoveHandler,
  onclickCompleteHandler,
  buttonText,
}) => {
  return (
    <div className="workingCard" key={item.id}>
      <h3 className="workingCardTitle">{item.title}</h3>
      <div className="workingCardTitle">{item.content}</div>
      <button
        className="cardDelBtn"
        onClick={() => onclickRemoveHandler(item.id)}
      >
        삭제하기
      </button>
      <button className="cardBtn" onClick={() => onclickCompleteHandler(item)}>
        {buttonText}
      </button>
    </div>
  );
};

export default Cards;
