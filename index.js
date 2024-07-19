const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Calculate total batteries
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

// Define initial state
const initialState = {
  totalBatteries: 0,
};

// Reducer function
function batteriesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BATTERIES':
      return {
        totalBatteries: state.totalBatteries + action.payload,
      };
    default:
      return state;
  }
}

// Export the reducer
module.exports = batteriesReducer;

// Set totalBatteries globally for tests
global.totalBatteries = totalBatteries;
