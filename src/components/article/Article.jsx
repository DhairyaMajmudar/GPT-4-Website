import './article.css'
const article = ({imgUrl, date, title}) => {
  return (
    <div className="gpt3__blog-container-article">
      <div className="gpt3__blog-container-article-image">
        <img src={imgUrl} alt="blog" />
      </div>

      <div className="gpt3__blog-container-article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}
export default article