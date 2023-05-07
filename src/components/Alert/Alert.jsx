

const Alert = (props) => {

  if(props.alertMsg) {  
  return (
    <>
        <div className="alert alert-warning fade show p-1" role="alert">
           {props.alertMsg}
        </div>
    </>
  )
}
if(props.successMsg) {
    return (
        <>
            <div className="alert alert-success fade show px-2" role="alert">
               {props.successMsg}
            </div>
        </>
      )
}
}

export default Alert