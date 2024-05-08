export default function Node() {
    const [formData, setFormData] = useState({
        username: "",
        password:""
      });
      const [count, setCount] = useState(0)
      let getHello = async (evt) => {
    
        evt.preventDefault();
        console.log(formData)
        const resp = await fetch("http://localhost:8080/demo", {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type':'application/json'
          }
        });
        const jsonResp = await resp.json();
        console.log(jsonResp);
        
      }
      let handleChange = (evt) => {
        setFormData((currData) => ({ ...currData, [evt.target.name]: evt.target.value }));
    }
    
      return (
        <div>
          <form onSubmit={getHello}>
    
    
            <input type="text" placeholder='Enter username'onChange={handleChange} name='username'/><br /> <br />
            <input type="password" placeholder='Enter password' onChange={handleChange} name='password'/>
            <br /><br />
            <button >Submit</button>
              </form>
              </div>)}
}