

export default function Emailus() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="page text-white">
            <div className="container d-flex flex-column align-items-center py-5">
                <h2 className="a-zoom1 a-border1 text-light text-shadow-dark">Email us!</h2>
                <h3 className="a-zoom1 a-border1  text-shadow-dark">What can we do for you?</h3>
                <form className="d-flex flex-column align-items-center gap-2 my-4 formLogin a-zoom1 a-border1" action="" onSubmit={() => handleSubmit()} >
                    <input className='form-control a-zoom1 a-border1' type="text" placeholder='your@email.com' />

                    <select className="form-select a-zoom1 a-border1 text-black" id="floatingSelect" aria-label="Floating label select example">

                        <option value="1">Choose an option</option>
                        <option value="1">Need to report a problem</option>
                        <option value="3">General questions</option>
                        <option value="3">Shipping info</option>
                        <option value="3">Billing</option>
                        <option value="2">Congratulations</option>
                    </select>

                    <textarea className="form-control a-zoom1 a-border1" id="exampleFormControlTextarea1" rows="3" placeholder="Write here..."></textarea>

                    <button className='btn btn-light a-zoom1 a-border1 text-white text-shadow-dark' type="submit" >Login</button>
                </form>

            </div>

        </div >
    )
}