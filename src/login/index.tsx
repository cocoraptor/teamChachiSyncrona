import {useState} from 'react';
import { Button,Input, Checkbox, Radio} from "../components/atoms";

const Login = () => {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [checked,setChecked]=useState(false);
    const [selectedOption,setSelectedOption]=useState('este radiobox en concreto');
    const logIn = ()=>{
        console.log("me clickearon banda");
    };
    return (
        <>
            <h1>Login</h1>
            <Input            
                placeholder='username' 
                value={userName}
                width='440px'
                height='68px'
                inputLabel='Username'
                name='username'
                setValue={setUserName}
            />
            <Input            
                placeholder='password' 
                value={password}
                width='440px'
                height='68px'
                inputLabel='Password'
                name='password'
                setValue={setPassword}
                type='password'
            />
            <Button text='Log in' type='primary' onClick={logIn} width={"155px"} height={"55px"}/>
            <p>tu user name: {userName}</p>
            <p>tu contraseña: {password}</p>
            <Checkbox  
                setChecked={setChecked}
                text='Acepto los términos, condiciones y la política de Privacidad de Syncrona'
                checked={checked}
                name= 'cualquier nombre'
            />
            <Radio 
                value='este radiobox en concreto'
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                text='ayura'
                groupName='Miaw'
            />
            <Radio 
                value='este otro radiobox en concreto'
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                text='pollo'
                groupName='Miaw'
            />
            

        </>
    )
}

export default Login