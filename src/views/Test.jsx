import Countdown from "react-countdown"

export default function Test() {


    return (
        <section>
            <div className="container">
                <h1>Components Test</h1>

                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#emailSubCanvas" aria-controls="emailSubCanvas">
                    Button with data-bs-target
                </button>

                <div className="offcanvas offcanvas-start bg-transparent emailRegistered " tabIndex="-1" id="emailSubCanvas" aria-labelledby="emailSubCanvas">
                    {/* <div className="offcanvas-body bg-1er emailRegistered"> */}
                    <p className="h6">
                        Your email has been registered
                    </p>

                    {/* </div> */}
                </div>

            </div>
        </section>

    )

}