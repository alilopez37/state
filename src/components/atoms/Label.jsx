function Label({name,text}) {
    return ( 
        <div>
            <label htmlFor={name}>{text}</label>
        </div>
     );
}

export default Label;