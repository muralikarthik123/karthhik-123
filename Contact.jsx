import { Outlet, Link } from "react-router-dom";
import Img2 from '../image/Img1.jpeg';

const Contact = () => {
    return <div>
    <div style={{display:"flex"}}>
    <div><h3 style={{width:800,paddingLeft:100,fontSize:25}}>Need more than one email address? Find & save companies' email addresses to your list in bulk via the Domain filter in GetProspect B2B leads database.

Select the number of prospects you need and save data on decision-makers with their contact details and other relevant information to personalize email campaigns.

You can also choose as many people from each company you want to save, select the option for finding their mobile phones, and save all current search criteria to optimize future searches.
  
  </h3>;
  </div>
  <div>
    <img style={{width:450,height:405,paddingTop:40}} src={Img2} alt="Img2"/>
  </div>
  </div>
  <br>
  </br>
<br>
</br>

  <div style={{backgroundColor:'black'}}>
    <h1 style={{paddingLeft:550,color:'White'}}>Contact us</h1>
  <div style={{display:'flex'}}>
    <div>
      <h5 style={{color:'yellow'}}> The agency</h5>
      <h5 style={{color:'yellow'}}> for impatient</h5>
      <h5 style={{color:'yellow'}}>brand</h5>
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
  
  export default Contact;