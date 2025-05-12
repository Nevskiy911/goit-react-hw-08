import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className="flex mt-5 mb-16 ml-5">
      <label className="max-w-[350px] text-lg">
        Find contacts by name:
        <input
          type="text"
          className="w-full p-2.5 mb-5 border border-black rounded text-base bg-[aliceblue] text-black"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
