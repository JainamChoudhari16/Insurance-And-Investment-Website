import { useLocation } from "react-router-dom";

function GetPolicy() {
  const location = useLocation();
  const { policy } = location.state || {};

  if (!policy) {
    return <div>No policy selected</div>;
  }

  return (
    // <div className="p-8">
    //   <h1 className="text-2xl font-bold mb-4">Selected Policy</h1>
    //   <div className="bg-white shadow-md p-4 rounded-lg">
    //     <div className="text-gray-900 font-bold text-xl mb-4">{policy.company}</div>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
    //       <div className="text-sm border p-2 rounded-md bg-gray-50">
    //         <span className="font-semibold text-gray-700">Coverage Amount</span>
    //         <div className="text-gray-800">
           
           
    //         </div>
    //       </div>
    //       <div className="text-sm border p-2 rounded-md bg-gray-50">
    //         <span className="font-semibold text-gray-700">Policy Term</span>
    //         <div className="text-gray-800">{policy.policyTerm}</div>
    //       </div>
    //       <div className="text-sm border p-2 rounded-md bg-gray-50">
    //         <span className="font-semibold text-gray-700">Medical Test</span>
    //         <div className="text-gray-800">{policy.medicalTest}</div>
    //       </div>
    //       <div className="text-sm border p-2 rounded-md bg-gray-50">
    //         <span className="font-semibold text-gray-700">Smoker Status</span>
    //         <div className="text-gray-800">{policy.smokerStatus}</div>
    //       </div>
    //       <div className="text-sm border p-2 rounded-md bg-gray-50">
    //         <span className="font-semibold text-gray-700">Gender</span>
    //         <div className="text-gray-800">{policy.gender}</div>
    //       </div>
    //     </div>
    //     <div className="text-sm border p-3 rounded-md bg-gray-50">
    //       <ul className="list-disc pl-5 space-y-1">
    //         <li>
    //           <span className="font-semibold text-gray-700">Benefit 1 - </span>
    //           <span className="text-gray-800">This is Benefit 1</span>
    //         </li>
    //         <li>
    //           <span className="font-semibold text-gray-700">Benefit 2 - </span>
    //           <span className="text-gray-800">This is Benefit 2</span>
    //         </li>
    //         <li>
    //           <span className="font-semibold text-gray-700">Benefit 3 - </span>
    //           <span className="text-gray-800">This is Benefit 3</span>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <>
      <div>
        <label>Policy ID</label>
        <input type="text" value={policy.id} readOnly/>
      </div>
      <div>
        <label>Coverage Amount</label>
        <input type="text" value={policy.coverageAmount} readOnly/>
      </div>
      <div>
        <label>Policy Term</label>
        <input type="text" value={policy.policyTerm} readOnly/>
      </div>
    </>
     
  );
}

export default GetPolicy;
