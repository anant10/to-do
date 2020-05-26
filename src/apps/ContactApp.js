import React from 'react'
import ContactCard from '../components/ContactCard'

function ContactApp() {
 return(
    <div className="contacts">
        <ContactCard 
          contact={{name:"Mr.w" ,imgUrl:"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png", email:"w@gmail.com" , phone:"642464646376"}} 
        />
        <ContactCard 
            contact={{name:"Ms.M" ,
            imgUrl:"https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-1024x576.jpg",
            email:"m@gmail.com" ,
            phone:"133412142314"}}
            
        />

        <ContactCard 
            contact = {{name:"Mr.P" ,
            imgUrl:"https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-1024x576.jpg"
            ,email:"p@gmail.com" 
            ,phone:"2333344554555"}}
            
        />
        <ContactCard 
            contact = {{ name:"Mr.Q" 
            ,imgUrl:"https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-1024x576.jpg"
            ,email:"q@gmail.com" 
            ,phone:"64762858587321"}}
           
        />
    </div>
 )
}

export default ContactApp