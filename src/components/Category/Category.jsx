import toProperName from "../../utils/toProperName";
import { categories } from "../../assets/data";

import "./category.scss";

export default function Category({ type }) {

  return (
    <>
      {type &&
        <div className="category">
          <span>{toProperName(type)}</span>

          <select name="genre" id="genre">
            <option>Genre</option>
            <>
              {categories.map(category =>
                <option key={category} value={category}>
                  {toProperName(category)}
                </option>
              )}
            </>
          </select>
        </div>
      }
    </>
  );
}