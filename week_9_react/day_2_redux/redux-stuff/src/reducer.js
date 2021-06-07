let initState = {
  property_one_one: "text text one",
  property_two_two: "text text two",
};

export const reducer = (state = initState, action) => {
  return { ...state };
};
