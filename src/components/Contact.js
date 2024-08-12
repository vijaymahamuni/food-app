const Contact = () =>{
    return(
        <div className="p-2 m-2">
            <h1 className="text-3xl">Contact Us</h1>
            <input type="text" placeholder="name" className="p-1 m-1 border border-black rounded-md" ></input>
            <input type="text" placeholder="message" className="p-1 m-1 border border-black rounded-md" ></input>
            <button className="p-1 m-1 border border-black rounded-md bg-gray-200">Submit</button>

        </div>
    )
}
export default Contact;
