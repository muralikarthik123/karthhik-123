import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div style={{display:"flex",backgroundColor:'darkred',height:100,fontSize:30}}>
        <div>
        <p style={{ paddingLeft: 200, color: 'yellow', paddingTop: 15, textDecoration: 'none' }}><Link  style={{color:'white', textDecoration:'none'}}       to="/">Home</Link></p>
        </div>
        <div>
          <p style={{paddingLeft:200,color:'white',paddingTop:15}}><Link style={{color:'white', textDecoration:'none'}} to="/blog">Blogs</Link></p>
        </div>
        <div>
            <p style={{paddingLeft:200,color:'white',paddingTop:15}}><Link style={{color:'white', textDecoration:'none'}} to="/contact">Contact</Link></p>
        </div>
      </div>
    
      <Outlet />
    </>
  )
};

export default Layout;