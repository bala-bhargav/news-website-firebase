import React, {useRef, useState} from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../Context/AuthContext';

const ForgotPassword = () => {
  // Creating the reafs
  const emailRef = useRef();
  
  
  const { resetPassword } = useAuth();

//   console.log(load)
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  

  

  // handleSubmit function
  async function handleSubmit(e){
    // preventing form from refreshing 
    e.preventDefault()

    // Doing validation checks
    try {
        setMessage('')
        setError('')
        setLoading(true)
        // await login(emailRef.current.value, passwordRef.current.value);            
        await resetPassword(emailRef.current.value)
        
        setMessage("Reset Link sent! Please Check your inbox")
    } catch (error) {
        setError(error.message)       
    }
    setLoading(false);

  }
  

return (
  <>

          <div className="forgot">
        <div className="forgotbody">
              <h2 className='text-center mb-4'>Reset Password</h2>
              
              {error &&   <Alert variant='danger'>{error}</Alert>}
              {message &&   <Alert variant='success'>{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type='email' ref={emailRef} required/>
                  </Form.Group>                                   
                  <div className="forgotbtncontainer">
                  <Button disabled={loading} className='w-100 mt-4' type='submit'>Reset Password</Button>
                  </div>
              </Form>

              <div className='w-100 text-center mt-3'>
                <Link className="forgottext" to="/">Login</Link>
              </div>

      <div className='w-100 text-center mt-2'>
          Do not have an account? <Link  className="forgottext" to="/signup">Sign Up</Link>
      </div>
      </div>
      </div>
    
  </>
)
}

export default ForgotPassword
