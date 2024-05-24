import moneyBack from '../../utils/moneyBack';

const MoneyBack = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-bodyC to-footerC min-h-screen">
      <h1 className="text-4xl font-bold text-center text-textC mb-6">Money Back Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moneyBack.map(plan => (
          <div key={plan.code} className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-textC mb-2">{plan.name}</h2>
              <p className="text-textC mb-4">{plan.description}</p>
              <div className="border-t border-gray-300 pt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Details</h3>
                <ul className="text-gray-700">
                  <li><strong>Minimum Basic Sum Assured:</strong> {plan.details.minimum_basic_sum_assured}</li>
                  <li><strong>Policy Term:</strong> {plan.details.policy_term}</li>
                  <li><strong>Premium Paying Term:</strong> {plan.details.premium_paying_term}</li>
                  <li><strong>Minimum Age at Entry:</strong> {plan.details.minimum_age_at_entry}</li>
                  <li><strong>Maximum Age at Entry:</strong> {plan.details.maximum_age_at_entry}</li>
                  <li><strong>Maximum Age at Maturity:</strong> {plan.details.maximum_age_at_maturity}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoneyBack;
