import {NavLink} from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <footer className="bg-body-tertiary text-center" style={{position: 'fixed' ,bottom: '0', width: '100%', backgroundColor: '#f5f5f5'}}>
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{backgroundColor: "#3b5998"}}
                            href="https://www.facebook.com/profile.php?id=100006124532949"
                            role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>
                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{backgroundColor: "#55acee"}}
                            href="https://twitter.com/prince_singh167"
                            role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>
                        {/* <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{backgroundColor: "#dd4b39"}}
                            href="#!"
                            role="button"
                        ><i className="fab fa-google"></i
                        ></a>
                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{backgroundColor: "#ac2bac"}}
                            href="#!"
                            role="button"
                        ><i className="fab fa-instagram"></i
                        ></a> */}
                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{backgroundColor: "#0082ca"}}
                            href="https://www.linkedin.com/in/prince-kumar-singh-73a155222/"
                            role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>
                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{backgroundColor: "#333333"}}
                            href="https://github.com/singhprince167"
                            role="button"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>
                </div>
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                    © 2024 Copyright:
                    <NavLink className="text-body" to="/home">TutorSphere.com</NavLink>
                </div>
            </footer>
        </>
    )
}
export default Footer