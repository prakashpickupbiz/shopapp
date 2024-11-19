import React from "react";


const Contact = () => {
    return (
        <div className="flex">
            <div className="m-12 w-2/4 ml-20">
                <h2 className="text-2xl text-cyan-500" >------contact us</h2>
                <h1 className="text-5xl  hover:italic font-medium mt-5">Write Us Anytime, We Would Love To Hear From You!</h1>
                <p className="mt-5 font-sans font-medium text-zinc-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur consequatur repudiandae voluptatem ipsam ea neque, temporibus dolorum sint harum sunt!</p>
                <div className="mt-5">
                    <input type="text" placeholder="First Name" className="border w-80 h-12 rounded font-medium text-xl pl-2" />
                    <input type="text" placeholder="Last Name" className="border w-80 mt-4  h-12 rounded font-medium text-xl pl-2" />
                    <input type="email" placeholder="Email" className="border w-80 mt-4 h-12 rounded font-medium text-xl pl-2" />
                    <input type="text" placeholder="Subject" className="border w-80 mt-4 h-12 rounded font-medium text-xl pl-2" />
                    <textarea type="text" placeholder="Massage" className="w-11/12 mt-4 border  rounded font-medium text-xl pl-2 h-40"></textarea>
                </div>
            </div>
            <div className="w-2/4 m-5">
                <img src="contact.png" alt="" />
            </div>
        </div>
    )
}
export default Contact;