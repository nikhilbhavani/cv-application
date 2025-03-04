function Content({ startDate, endDate, address, title, info, description }) {
    let descriptionDiv
    if (description) {
      descriptionDiv = <p>{description}</p>
    }
    return (
      <div className="cvContent">
        <div>
          <p>
            {startDate} - {endDate}
          </p>
          <p>{address}</p>
        </div>
        <div>
          <p className="title">{title}</p>
          <p>{info}</p>
          {descriptionDiv}
        </div>
      </div>
    );
  }
  
  export { Content };