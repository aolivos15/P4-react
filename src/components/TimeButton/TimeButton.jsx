export const TimeButton = ({buttonTime, onClick}) => {

  return (
    <>
      <button id={buttonTime} onClick={onClick} className="btn time-button">{buttonTime}</button>
    </>
  )
}
