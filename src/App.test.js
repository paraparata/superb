import { shallow } from "enzyme";
import Home from "./pages/Home";

it("renders Home without crashing", () => {
  const wrapper = shallow(<Home />);
  const welcome = <h1>Welcome to Superb!</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
