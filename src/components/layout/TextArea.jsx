import './Input.css'

export function TextArea({ id, name, text, handleOnChange, value }) {
  return (
    <div className="inputContainer">
      <textarea 
        className="formTextArea" 
        value={value}
        name={name} 
        onChange={handleOnChange}
        id={id} 
        cols="30" 
        rows="10" 
        placeholder=" "
        required
      ></textarea>
      <label htmlFor={name}>{text}</label>
    </div>
  )
}