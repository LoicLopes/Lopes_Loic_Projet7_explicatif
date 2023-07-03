function TagList(props) {
    return (
      <div className="tag">
        {props.data.map((tag, index) => (
          <span 
          className="tag__content"
          key={`${tag}-${index}`}>           
        {tag}
        </span>
        ))}
      </div>
    );
  }
export default TagList;