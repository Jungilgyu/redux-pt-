const INCREASE = 'counter/INCREASE'; 
//    액션타입     문자열내용) 모듈 이름/ 액션 이름 
const DECREASE = 'counter/DECREASE';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
	number: 0
};

function counter(state = initialState, action) {
	switch (action.type) {
		case INCREASE:
			return {
				number: state.number + 1
			};
		case DECREASE:
			return {
				number: state.number - 1
			};
		default:
			return state;
	}
}

export default counter;