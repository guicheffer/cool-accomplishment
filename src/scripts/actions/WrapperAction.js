export const INIT_FILTERS = 'INIT_FILTERS';
export const CHANGE_FILTERS = 'CHANGE_FILTERS';
export const DISABLE_CHANGED = 'DISABLE_CHANGED';

export function initFilters(queryFilters) {
  return {
    type: INIT_FILTERS,
    initialFilters: queryFilters
  };
}

export function changeFilters(currentFilters) {
  return {
    type: CHANGE_FILTERS,
    currentFilters: currentFilters
  };
}
