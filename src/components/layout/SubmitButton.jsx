import './SubmitButton.css'

export function SubmitButton({ id, text }) {
  return (
    <div className="inputContainer">
      <input id={id} type='submit' value={text} />
    </div>
  )
}