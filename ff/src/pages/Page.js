import { useState } from "react";
import axios from "axios";

const Page = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

   const data = {
    name: name,
    email: email

};

    const handleSubmit = () => {
        const p2 = 'https://mytesting.onrender.com';
        axios.post(`${p2}/cred`, data)

        .then(res => {
            console.log(res.data);
            // const uname = res.data.username;
            // const uemail = res.data.useremail;
        }
        )
        .catch(err => {
            console.log(err);
        }
        )
       
    }
   

    return (
        <div className="App">
        <h1>Page</h1>
        <br />
        <input type="text" value={name} placeholder='name' onChange={e => setName(e.target.value)} /> <br />
        <input type="text" value={email} placeholder='email' onChange={e => setEmail(e.target.value)} /> <br />
        <br />

        <button onClick={handleSubmit}>Submit this shit</button>




        </div>
    );
    }

export default Page;

