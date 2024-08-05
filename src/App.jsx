import { element } from 'prop-types';
import './App.css'
import Card from './Card'
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  let Val = [
     {
      plan:"FREE",
      price: 0,
      user:"Single User",
      isUser: true,
      Storage : "50 GB",
      isStorage: true,
      isPublicProjects: true,
      isCommunityAccess: true,
      isPrivateProjects: false,
      isPhoneSupport:false,
      isDomain:false,
      isReport:false
     },
     {
      plan:"PLUS",
      price: 9,
      user:"5 User",
      isUser: true,
      Storage : "50 GB",
      isStorage: true,
      isPublicProjects: true,
      isCommunityAccess: true,
      isPrivateProjects: true,
      isPhoneSupport:true,
      isDomain:true,
      isReport:false
     },
     {
      plan:"PRO",
      price: 49,
      user:"Unlimited User",
      isUser: true,
      Storage : "50 GB",
      isStorage: true,
      isPublicProjects: true,
      isCommunityAccess: true,
      isPrivateProjects: true,
      isPhoneSupport:true,
      isDomain:true,
      isReport:true
     }
     
  ];
  return (
    <>
      <section className='pt-5'>
        <div className="container">
          <div className="row">
            {
              Val.map((element,index)=>{
                return<Card price={element} key={index}/>
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}


export default App
