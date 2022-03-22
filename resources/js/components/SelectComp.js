import react from "react";
import { Fragment } from "react/cjs/react.production.min";

const SelectComp = () => {
    return (
        <Fragment>
            <select name="from" onChange={handleSubmit}>
                {country.map((element, i) => (
                    <option value={element.name} key={i}>
                        {element.name}
                    </option>
                ))}
            </select>
        </Fragment>
    );
};
export default SelectComp;
