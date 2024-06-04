import Input from "../atoms/Input";
import Label from "../atoms/Label";


function Field({name, type, text, placeholder}) {
    return (
        <div>
            <Label name={name} text={text}/>
            <Input type={type} placeholder={placeholder}/>
        </div>
      );
}

export default Field;