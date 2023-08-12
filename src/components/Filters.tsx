import { FILTERS_BUTTONS } from "../consts";
import { type FilterValue } from "../type";

interface Props {
   filterChange: (filter: FilterValue) => void
   filterSelected: FilterValue
}

export const Filters: React.FC<Props> = ({ filterSelected, filterChange }) => {
   return (
      <ul className="flex items-center gap-2">
         {Object.entries(FILTERS_BUTTONS).map(([key, { literal }]) => {
            return (
               <li key={key}>
                  <button
                     className={`${filterSelected === key ? 'ring-1 ring-slate-500 dark:ring-slate-500/30 bg-slate-200 dark:bg-slate-700' : ''} px-2 rounded hover:ring-1 hover:ring-slate-500`}
                     onClick={() => {
                        filterChange(key as FilterValue)
                     }}
                  >
                     {literal}
                  </button>
               </li>
            )
         })}
      </ul>
   )
}