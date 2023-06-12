import "./features.css";
import {Feature} from '../../components'

const featuresData = [
  {
    title: "Improving end",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "law county",
    text: "Really boy law county she unable her sister. Feet you off its. Among are leave law built now. In built table in an rapid blush.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access Get Started</p>
      </div>

      <div className="gpt3__features-container">
        {featuresData.map((item,index)=>{
          return(   
          <Feature title={item.title} text={item.text}></Feature>
          )
       
        })}
      </div>
    </div>
  );
};
export default Features;
