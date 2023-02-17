import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './UserForm.module.css'
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const UserForm = ({onSaveUserData}) =>{
    const [isVisible, setIsVisible] = useState(false);
    const [modalErrMsg, setModalErrMsg] = useState({
        title:'',
        msg:''
    })
    const [inputValues, setInputValues] = useState({
        id:'',
        username:'',
        age:''
    });

    const handleModalVisibility = () => {
        setIsVisible(false);
    }

    const handleChange = (event) =>{
        setInputValues( prevInputs => ({
            ...prevInputs,
            [event.target.name] : event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const userData ={
            id: Math.floor(Math.random() * 100),
            username: inputValues.username,
            age: inputValues.age
        };

        if(userData.username.trim().length === 0 || userData.age.trim().length === 0){
            setModalErrMsg({title:'Campos vacíos', msg:'Debe ingresar datos para realizar el registro'})
            setIsVisible(true);
            return;
        }

        if(+userData.age < 1){
            setModalErrMsg({title:'Edad inválida', msg:'Debe ingresar una edad válida.'})
            setIsVisible(true);
            return;
        }

        onSaveUserData(userData);

        setInputValues({
            id:'',
            username:'',
            age:''
        });
    }

    return(
        <div>
            {isVisible && <ErrorModal title={modalErrMsg.title} message={modalErrMsg.msg} onSetVisibility={handleModalVisibility}/>}
            
            <Card>
                <form onSubmit={handleSubmit} className={classes['form-component']}>
                    <label>Username</label>
                    <input onChange={handleChange} value={inputValues.username} name='username' type='text'/>
                    <label>Age</label>
                    <input onChange={handleChange} value={inputValues.age} type='number' name='age'></input>
                    <Button type='submit'>Add user</Button>
                </form>
            </Card>
        </div>
    );
}

export default UserForm;