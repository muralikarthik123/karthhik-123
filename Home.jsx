import { Outlet, Link } from "react-router-dom";
import Img1 from '../image/bus.jpg';


const Home = () => {
  return<div>
    <div style={{display:"flex"}}>
    <div><h3 style={{width:700,paddingLeft:100,fontSize:25}}>If you’re a small business owner, then you need to be looking towards content marketing to help you grow your business. Digital content is incredibly important. In fact, people spend an average of around 7 hours a day consuming content online.

  Your small business content marketing strategy will help you reach interested customers, increase brand awareness, and build up a reputation as a thought leader in your industry. Content marketing for small businesses doesn’t require a huge marketing budget. You just need to follow the right strategies and create content that offers value. The ROI on this can be amazing.
  
  In this article, we’ll reveal everything you need to know about starting content marketing for small businesses. Follow these proven strategies and tips to achieve marketing success.
  
  </h3>;
  </div>
  <div>
    <img style={{width:400,height:400,paddingTop:40}} src={Img1} alt="Img1"/>
  </div>
  </div>
  <br>
  </br>


  <div style={{backgroundColor:'darkred',height:300}}>
    <h1 style={{paddingLeft:550,color:'White'}}>Contact us</h1>
  <div style={{display:'flex'}}>
    <div>
      <h3 style={{color:'yellow'}}> The agency</h3>
      <h3 style={{color:'yellow'}}> for impatient</h3>
      <h3 style={{color:'yellow'}}>brand</h3>
    </div>
    <div>
      <h3 style={{paddingLeft:150,fontWeight: 'bold',color:'yellow'}}> Home</h3>
      <h5 style={{paddingLeft:150,color:'White'}}>To go home</h5>
    </div>
    <div>
      <h3 style={{paddingLeft:200,fontWeight: 'bold',color:'yellow'}}> Location</h3>
      <h5 style={{paddingLeft:200,color:'white'}}> 3/4 Arundelpet,Guntur</h5>
    </div>
    <div>
      <h3 style={{paddingLeft:250,fontWeight: 'bold',color:'yellow'}}> Services</h3>
      <h5 style={{paddingLeft:250,color:'white'}}>Web Deveploment</h5>
    </div>
    <div>
      <h3 style={{paddingLeft:150,fontWeight: 'bold',color:'yellow'}}> About</h3>
      <h5 style={{paddingLeft:150,color:'white'}}>IT services</h5>
    </div>
  </div>
  </div>
</div>
};

export default Home;