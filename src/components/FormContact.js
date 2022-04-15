import React, { useState } from 'react'

import swal from 'sweetalert';

// const FormContact = () => {
    // const [form, setForm] = useState({name: '', email: '', message: ''});
    
    // const handleChange = (e) => {
    //     setForm({
    //         ...form, 
    //         [e.target.name]: e.target.value,
    //     });
    // };

//     const showConfirmation = () => {  
//         swal({
//             title: "Thank you!",
//             text: "We will contact you soon",
//             icon: "success",
//             button: "OK",
//             timer: 3000
//         });  
//     }
  
  
//     return (
//     <div>
        // <form
        //     style={{
        //         marginBottom: '30 px',
        //         display: 'flex',
        //         flexDirection: 'column',
        //         width: '40%',
        //     }}
        //  >
        //      <input
        //      value={form.name}
        //      name='name' 
        //      type="text"
        //      placeholder='Name'
        //      onChange={handleChange} 
        //      />   
        //      <input 
        //      value={form.email}
        //      name='email'
        //      type="text"
        //      placeholder='Email'
        //      onChange={handleChange}
        //      />
        //      <input
        //      value={form.message}
        //      name='message'
        //      type="text"
        //      placeholder='Message'
        //      onChange={handleChange}
        //       />

        //     <button onClick={()=>showConfirmation()}>Submit</button>
        //     </form>
            

//     </div>
//   )
// }

function FormContact() {

    const [form, setForm] = useState({name: '', email: '', message: ''});
    
    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value,
        });
    };

    

    const showConfirmation = () => {  
        swal({
            title: "Thank you!",
            text: "We will contact you soon",
            icon: "success",
            button: "OK",
            timer: 3000
        });  
        
    }

    
    
    

    return (
        <div className='FormContact'>
            <form
            style={{
                marginBottom: '30 px',
                display: 'flex',
                flexDirection: 'column',
                width: '40%',
            }}
         >
             <input
             value={form.name}
             name='name' 
             type="text"
             placeholder='Name'
             onChange={handleChange} 
             />   
             <input 
             value={form.email}
             name='email'
             type="text"
             placeholder='Email'
             onChange={handleChange}
             />
             <input
             value={form.message}
             name='message'
             type="text"
             placeholder='Message'
             onChange={handleChange}
              />

            
            </form>
            
            <br />
            <button onClick={()=>showConfirmation()}>Submit</button>
        </div>
            );
}



export default FormContact

//   <div>
//             {form !== 0 ? (
//               <ItemCount stock={item.stock} onAdd={onAdd} />
//             ) : (
//               <Link to="/cart">See the basket</Link>
//             )}
            
//         </div>