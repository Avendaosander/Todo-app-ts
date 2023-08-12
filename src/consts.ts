export const TODO_FILTERS = {
   ALL: 'all',
   ACTIVE: 'active',
   COMPLETED: 'completed'
} as const

export const FILTERS_BUTTONS = {
   [TODO_FILTERS.ALL]: {
      literal: "All",
   },
   [TODO_FILTERS.ACTIVE]: {
      literal: "Active",
   },
   [TODO_FILTERS.COMPLETED]: {
      literal: "Completed",
   },
}