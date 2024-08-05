import React from 'react'

function Card({price}) {
    console.log(price)
    return <>
       <div className='col-lg-4'>
        <div className='card mb-5 mb-lg-0'>
          <div className='card-body'>
            <h5 className='card-title text-muted text-uppercase text-center'>{price.plan}</h5>
            <h4 className='card-price text-center'>${price.price}<span className='period'>/month</span></h4>
          <hr/>
          
          <ul className='text-start'>
            <li className={price.isUser ?"" :"opacity-50"}><i className={price.isUser ? "fas fa-check" : "fas fa-times"}></i> {price.user}</li>
            <li className={price.isStorage ?"" :"opacity-50"}> <i className={price.isStorage ? "fas fa-check" :"fas fa-times"}></i> {price.Storage} Storage </li>
            <li className={price.isPublicProjects ?"" :"opacity-50"}><i className={price.isPublicProjects ? "fas fa-check" : "fas fa-times"}></i> Unlimited Public Projects</li>
            <li className={price.isCommunityAccess ?"" :"opacity-50"}><i className={price.isCommunityAccess ? "fas fa-check" : "fas fa-times"}></i> Community Access</li>
            <li className={price.isPrivateProjects ?"" :"opacity-50"}><i className={price.isPrivateProjects ? "fas fa-check" : "fas fa-times"}></i> Unlimited Private Projects</li>
            <li className={price.isPhoneSupport ?"" :"opacity-50"}><i className={price.isPhoneSupport ? "fas fa-check" : "fas fa-times"}></i> Dedicated Phone Support</li>
            <li className={price.isDomain ?"" :"opacity-50"}><i className={price.isDomain ? "fas fa-check" : "fas fa-times"}></i> Free Subdomain</li>
            <li className={price.isReport ?"" :"opacity-50"}><i className={price.isReport ? "fas fa-check" : "fas fa-times"}></i> Monthly Status Reports</li>
          </ul>

          <div class="d-grid gap-3  mx-auto">
           <button type ="button" className='btns btn btn-primary'> BUTTON</button>
          </div>
          
          </div>
        </div>
       </div>
    </>
}

export default Card