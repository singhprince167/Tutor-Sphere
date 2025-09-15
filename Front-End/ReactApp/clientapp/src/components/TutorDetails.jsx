import React from "react";

function TutorDetails(props) {
  const { searchtutor } = props;
  return (
    <>
      <div className="row">
        {/* <h1 style={{textAlign:"center"}}>Search Tutor data</h1> */}
        <div className="col-12 mt-5">
          <div className="table-responsive">
            <table className="table table-dark mx-auto">
              <thead>
                <tr>
                  {/* <th scope="col">#</th> */}
                  <th scope="col">Tutor Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">City</th>
                </tr>
              </thead>
              <tbody>
                {searchtutor.map((st, index) => (
                  <tr key={index}>
                    {/* <td>{st.no}</td> */}
                    <td>{st.name}</td>
                    <td>{st.phone}</td>
                    <td>{st.email}</td>
                    <td>{st.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default TutorDetails;
