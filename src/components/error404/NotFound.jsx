import errorImg from '/src/assets/errorimg.jpg';
function NotFound() {
    return (
        <>
            <div className="alert alert-danger my-5 container fs-5 text-center">
                  <img src={errorImg} alt="Error img" />
               </div>
        </>
    );
}

export default NotFound;