import './Input.css'

export function Input({ id, name, type, text, handleOnChange, title, value }) {
  return (
    <div className="inputContainer">
      <input 
        className='formInput' 
        value={value} 
        title={title}
        autoComplete="off" 
        id={id} 
        name={name} 
        type={type} 
        onChange={handleOnChange} 
        placeholder=" " 
        required/>
      <label htmlFor={id}>{text}</label>
    </div>
  )
}