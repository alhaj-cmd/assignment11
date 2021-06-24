import React from 'react';


const Fakedata = ({pd}) => {
   console.log(pd);
   
 
    return (
        <div className=" container col-md-4 text-center ">
        

           <div className="card  p-2">
              <img  className='img-fluid' style={{height:160}} src={pd.image} alt=''/>
              <h5 className="text-primary">{pd.productName}</h5>
              <h6 className="text-secondary">25% of ${pd.price}</h6>
              <button onClick={[]}>submit</button>   
             
           </div>
        </div>
    );
};

export default Fakedata;